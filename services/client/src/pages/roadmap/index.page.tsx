import { useEffect, useState } from 'preact/hooks'
import { SubjectCard } from '../../components/SubjectCard'
import { auth } from '../../services/apis/auth'
import { RoadmapService } from '../../services/apis/roadmap.service'
import { Link } from 'preact-router'
export function Roadmap() {
	const [subjects, setSubjects] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const uid = auth.currentUser.uid
			const rs = await RoadmapService.getByUid(uid)
			setSubjects(rs)
		}
		fetchData()
	}, [])
	return (
		<section class="bg-white ">
			<div class="container px-6 py-10 mx-auto ">
				<h1 class="w-48 h-2 mx-auto bg-gray-200 rounded-lg dark:bg-gray-200"></h1>

				<p class="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-200"></p>
				<p class="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg sm:w-80 dark:bg-gray-200"></p>
				<Link href={'/begin#'}>
					<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
						Bắt đầu roadmap mới
					</button>
				</Link>

				<div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
					{subjects.map(subject => {
						//@ts-ignore
						return <SubjectCard subject={subject} />
					})}
				</div>
				<div
					x-data="scrollProgress"
					class="fixed inline-flex items-center justify-center overflow-hidden rounded-full bottom-5 left-5"
				></div>
			</div>
		</section>
	)
}
