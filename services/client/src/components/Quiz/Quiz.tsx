import { useId, useMemo, useState } from 'preact/hooks'
import { Quiz as QuizType } from '../../model/quiz.model'
import clx from 'classnames'
export function Quiz({ quiz }: { quiz: QuizType }) {
	const imgs = [
		'https://images.unsplash.com/photo-1655720837928-38b1a93298ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1110&q=80',
		'https://images.unsplash.com/photo-1655720855348-a5eeeddd1bc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80',
		'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80',
		'https://plus.unsplash.com/premium_photo-1680607980708-d2532db7a529?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
		'https://images.unsplash.com/photo-1655634535290-6bab0013accc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
		'https://plus.unsplash.com/premium_photo-1677094310893-0d6594c211ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80',
		'https://images.unsplash.com/photo-1655721532356-e9a529d403c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80',
		'https://images.unsplash.com/photo-1655720845034-b8f615109b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80',
		'https://images.unsplash.com/photo-1655634322560-45fb577df329?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
		'https://images.unsplash.com/photo-1655720828083-96a45b0a48b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80',
		'https://images.unsplash.com/photo-1655721530791-59f5bbd64a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80',
	]
	const [ans, setAns] = useState('')
	const isTrue = useMemo(
		() =>
			quiz.ans.indexOf(ans) === quiz.trueAnw ||
			quiz.ans.indexOf(ans) === quiz.trueAns,
		[ans],
	)

	const id = useId()

	return (
		<div
			className={clx(
				'w-full h-full rounded-xl border border-slate-300  overflow-hidden relative',
				{ 'true-ans': isTrue },
			)}
		>
			<img
				class="object-cover overflow-hidden w-full h-full rounded-s-xl opacity-30 absolute top-0 bottom-0 left-0 right-0 z-[-1]"
				src={imgs[Math.floor(Math.random() * (imgs.length - 1))]}
				alt=""
			/>
			<div
				class="w-full h-full flexQuiz

file_download_done
 flex-col justify-around align items-center mt-10 p-10"
			>
				<h1 class="text-4xl mb-6">{quiz.ques}</h1>
				<div
					class="flex flex-col"
					onChange={e => setAns((e.target as HTMLInputElement).value)}
				>
					{quiz.ans.map((item: string, index) => (
						<div class="text-2xl">
							<input type="radio" id={item} name={quiz.ques} value={item} />
							<label class="ml-5 p-4">{item}</label>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
