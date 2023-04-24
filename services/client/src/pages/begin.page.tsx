import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'preact/hooks'
import { Fragment } from 'preact/jsx-runtime'
import { gpt } from '../services/apis/gpt'
import { RoadmapService } from '../services/apis/roadmap.service'
import { Timestamp } from 'firebase/firestore'
import clx from 'classnames'
import { TopicService } from '../services/apis/topic.service'
import { auth } from '../services/apis/auth'
import { Loading } from '../components/loading'
import { v4 as uuid } from 'uuid'
import { route } from 'preact-router'

const people = [
	{
		id: 1,
		name: '5 Tuần',
		avatar: <span class="material-symbols-rounded">local_fire_department</span>,
		speed: 'Cấp tốc',
		amountTime: 5,
	},
	{
		id: 2,
		name: '10 Tuần',
		avatar: <span class="material-symbols-rounded">bolt</span>,
		speed: 'Nhanh',
		amountTime: 10,
	},
	{
		id: 3,
		name: '15 Tuần',
		avatar: <span class="material-symbols-rounded">mood</span>,
		speed: '',
		amountTime: 15,
	},
	{
		id: 4,
		name: '20 Tuần',
		avatar: <span class="material-symbols-rounded">sentiment_satisfied</span>,
		speed: '',
		amountTime: 20,
	},
	{
		id: 5,
		name: '25 Tuần',
		avatar: (
			<span class="material-symbols-rounded">sentiment_very_satisfied</span>
		),
		speed: '',
		amountTime: 25,
	},
]

function classNames(...classes: any[]) {
	return classes.filter(Boolean).join(' ')
}

export function Begin() {
	const [selected, setSelected] = useState(people[3])
	const [subjects, setSubjects] = useState<string[]>([])
	const [current, setCurrent] = useState('')
	const [loading, setLoading] = useState(false)
	const [amountTime, setAmountTime] = useState(5)

	const submit = async e => {
		e.preventDefault()
		setLoading(true)
		console.log('bat dau')
		try {
			const res = await gpt.askPlan(current, amountTime)
			const roadmapId = uuid()

			await RoadmapService.create({
				name: current,
				amountTime,
				des: res.description,
				isEnded: false,
				created: Timestamp.now(),
				id: roadmapId,
				//@ts-ignore
				createBy: auth.currentUser.uid,
			})
			console.log(res)
			Object.keys(res.roadmap).forEach(async (k, index) => {
				const value = res.roadmap[k]
				console.log(value)
				console.log(k)
				value.forEach(async topic => {
					await TopicService.create({
						name: topic,
						slide: [],
						quiz: [],
						roadmapId,
						week: index,
						created: Timestamp.now(),
					})
				})
			})
			await setLoading(false)
			route('/roadmap')
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div class="p-20">
			{loading && <Loading />}
			<div className="mb-4">
				<label
					htmlFor="subjects"
					className="block text-sm font-medium leading-6 text-gray-900"
				>
					Các chủ đề bạn muốn học: {subjects.map(subject => subject + ', ')}
					...
				</label>
				<div className="relative mt-2 rounded-md shadow-sm">
					<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
					<input
						type="text"
						name="subjects"
						id="subjects"
						className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						placeholder="Chủ đề"
						value={current as string}
						onChange={e => setCurrent((e.target as HTMLInputElement).value)}
						// onKeyDown={addToSubjectsHandler}
					/>
				</div>
			</div>
			<Listbox
				value={selected}
				onChange={e => {
					setSelected(e)
					setAmountTime(e.amountTime)
					console.log(e.amountTime)
				}}
			>
				{({ open }: any) => (
					<>
						<Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
							Thời gian mong muốn hoàn thành
						</Listbox.Label>
						<div className="relative mt-2">
							<Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
								<span className="flex items-center">
									{selected.avatar}
									<span className="ml-3 block truncate">{selected.name}</span>
								</span>
								<span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
									<ChevronUpDownIcon
										className="h-5 w-5 text-gray-400"
										aria-hidden="true"
									/>
								</span>
							</Listbox.Button>

							<Transition
								show={open}
								as={Fragment}
								leave="transition ease-in duration-100"
								leaveFrom="opacity-100"
								leaveTo="opacity-0"
							>
								<Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
									{people.map(person => (
										<Listbox.Option
											key={person.id}
											className={({ active }: any): string =>
												classNames(
													active ? 'bg-indigo-600 text-white' : 'text-gray-900',
													'relative cursor-default select-none py-2 pl-3 pr-9',
												)
											}
											onClick={() => setAmountTime(person.amountTime)}
											value={person}
										>
											{({ selected, active }: any) => (
												<>
													<div className="flex items-center">
														{person.avatar}
														<span
															className={classNames(
																selected ? 'font-semibold' : 'font-normal',
																'ml-3 block truncate',
															)}
														>
															{person.name}
														</span>
														<span
															className={classNames(
																selected ? 'font-semibold' : 'font-normal',
																'ml-3 block truncate',
																'text-red-400',
															)}
														>
															{person.speed}
														</span>
													</div>

													{selected ? (
														<span
															className={classNames(
																active ? 'text-white' : 'text-indigo-600',
																'absolute inset-y-0 right-0 flex items-center pr-4',
															)}
														>
															<CheckIcon
																className="h-5 w-5"
																aria-hidden="true"
															/>
														</span>
													) : null}
												</>
											)}
										</Listbox.Option>
									))}
								</Listbox.Options>
							</Transition>
						</div>
					</>
				)}
			</Listbox>
			<div class="flex content-end w-full">
				<button
					onClick={submit}
					class="block uppercase  shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded mt-4"
				>
					Khởi tạo
				</button>
			</div>
		</div>
	)
}
