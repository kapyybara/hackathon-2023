import { useEffect, useState } from 'preact/hooks'

import { NextButton } from '../../components/button/next'
import { PrevButton } from '../../components/button/prev'
import { Quiz } from '../../components/Quiz/Quiz'
import { TopicService } from '../../services/apis/topic.service'
import { gpt } from '../../services/apis/gpt'
import { Loading } from '../../components/loading'
export function QuizSlide({ topicId }) {
	const [slides, setSlides] = useState([])
	const [isError, setIsError] = useState(false)

	console.log(topicId)
	useEffect(() => {
		const fetchData = async () => {
			const topic = await TopicService.getById(topicId)
			console.log(topic)
			if (topic.quiz.length === 0) {
				console.log('vo')
				try {
					const rs = await gpt.askQuiz(topic.name)
					console.log(rs)
					TopicService.updateQuiz(topicId, rs.data)
					setSlides(rs.data)
				} catch (e) {
					console.log(e)
					setIsError(true)
				}
			} else {
				setSlides(topic.quiz)
			}
		}
		fetchData()
	}, [])

	const [page, setPage] = useState(0)

	const prevBtnHandler = () => {
		if (page > 0) setPage(page - 1)
	}
	const nextBtnHandler = () => {
		if (page < slides.length - 1) setPage(page + 1)
	}
	return (
		<div class="flex flex-col gap-4">
			{slides.length == 0 ? (
				<Loading title="Quiz" />
			) : (
				<>
					<div class="h-[80vh]">
						<Quiz key={page} quiz={slides[page]} />
					</div>
					<div class="flex flex-row justify-end gap-4">
						<PrevButton onClick={prevBtnHandler} />
						<NextButton onClick={nextBtnHandler} />
					</div>
				</>
			)}
		</div>
	)
}
