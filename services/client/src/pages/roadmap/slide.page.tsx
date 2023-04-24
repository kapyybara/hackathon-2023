import { useEffect, useState } from 'preact/hooks'

import { NextButton } from '../../components/button/next'
import { PrevButton } from '../../components/button/prev'
import { Loading } from '../../components/loading'
import { Slider } from '../../components/Slider/Slider'
import { gpt } from '../../services/apis/gpt'
import { TopicService } from '../../services/apis/topic.service'
export function RoadmapSlide({ topicId }) {
	const [slides, setSlides] = useState([{ header: '', content: '' }])
	const [isError, setIsError] = useState(false)

	console.log(topicId)
	useEffect(() => {
		const fetchData = async () => {
			const topic = await TopicService.getById(topicId)
			console.log(topic)
			if (topic.slide.length === 0) {
				try {
					const rs = await gpt.askSlides(topic.name)
					TopicService.updateSlide(topicId, rs.slides)
					setSlides(rs.slides)
				} catch (e) {
					console.log(e)
					setIsError(true)
				}
			} else {
				setSlides(topic.slide)
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
			{slides.length == 1 && <Loading title="slide" />}

			<div class="h-[80vh]">
				<Slider slide={slides[page]} />
			</div>
			<div class="flex flex-row justify-end gap-4">
				<PrevButton onClick={prevBtnHandler} />
				<NextButton onClick={nextBtnHandler} />
			</div>
		</div>
	)
}
