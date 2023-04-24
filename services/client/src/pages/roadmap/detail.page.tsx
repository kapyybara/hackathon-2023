import { Link } from 'preact-router'
import { useEffect, useState } from 'preact/hooks'
import { RoadmapService } from '../../services/apis/roadmap.service'
import { TopicService } from '../../services/apis/topic.service'
import { Roadmap } from '../../model/roadmap.model'

export function RoadmapDetail({ id }) {
	const [roadmap, setRoadmap] = useState<Roadmap | null>(null)
	const [topics, setTopics] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			const roadmapData = await RoadmapService.getId(id)
			setRoadmap(roadmapData)
			const topicsData = await TopicService.getByRoadmapId(id)
			console.log(topicsData)
			setTopics(topicsData)
		}

		fetchData()
	}, [])

	if (roadmap === null || topics.length === 0) {
		return (
			<div class="flex items-center justify-center min-h-screen">
				<div
					style="border-top-color:transparent"
					class="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"
				></div>
				<p class="ml-2">Xin chờ trong giây lát...</p>
			</div>
		)
	}
	console.log(topics)
	return (
		<section>
			<div class=" relative bg-gray-800 rounded-lg text-white py-8">
				<div class=" fixed w-[100vw] h-[100vh] bg-gray-800 top-0 left-0 z-[-1]"></div>
				<div class="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
					<div class="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
						<p class="ml-2 text-yellow-300 uppercase tracking-loose">
							Tiến trình học tập
						</p>
						{roadmap !== null ? (
							<>
								<p class="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
									{roadmap?.name}
								</p>
								<p class="text-sm md:text-base text-gray-50 mb-4">
									{roadmap?.des}
								</p>
								<p class="text-sm md:text-base text-gray-50 mb-4">
									Bạn sẽ học trong {roadmap?.amountTime} tuần
								</p>
							</>
						) : (
							<div>
								{' '}
								<div
									style="border-top-color:transparent"
									class="mt-4 w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"
								></div>
							</div>
						)}
					</div>
					<div class="ml-0 md:ml-12 lg:w-2/3 sticky">
						<div class="container mx-auto w-full h-full">
							<div class="relative wrap overflow-hidden p-10 h-full">
								<div
									class="border-2-2 border-yellow-555 absolute h-full border"
									style="right: 50%; border: 2px solid #FFC100; border-radius: 1%;"
								></div>
								<div
									class="border-2-2 border-yellow-555 absolute h-full border"
									style="left: 50%; border: 2px solid #FFC100; border-radius: 1%;"
								></div>
								{topics.map((item, index) =>
									index % 2 === 0 ? (
										<div class="mb-4 flex justify-between flex-row-reverse items-center w-full left-timeline">
											<div class="order-1 w-5/12"></div>
											<div class="order-1 w-5/12 px-1 py-4 text-right">
												<p class="mb-3 text-base text-yellow-300">
													Tuần {index + 1}
												</p>
												{item.map(t => (
													<>
														<p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
															{t.name}
														</p>
														<div class="flex flex-row justify-end gap-2 text-cyan-300">
															<Link href={`/roadmap/${id}/${t.id}/quiz`}>
																<p class="text-sm md:text-base leading-snug  text-opacity-100">
																	Quiz
																</p>
															</Link>{' '}
															{t.quiz.length !== 0 && (
																<span
																	class="material-symbols-rounded"
																	style={{ color: ' #ff6f6f' }}
																>
																	file_download_done
																</span>
															)}
															|
															<Link href={`/roadmap/${id}/${t.id}/slide`}>
																<p class="text-sm md:text-base leading-snug  text-opacity-100">
																	Slide
																</p>
															</Link>
															{t.slide.length !== 0 && (
																<span
																	class="material-symbols-rounded"
																	style={{ color: ' #ff6f6f' }}
																>
																	file_download_done
																</span>
															)}
														</div>
													</>
												))}
											</div>
										</div>
									) : (
										<div class="mb-4 flex justify-between items-center w-full right-timeline">
											<div class="order-1 w-5/12"></div>
											<div class="order-1  w-5/12 px-1 py-4 text-left">
												<p class="mb-3 text-base text-yellow-300">
													Tuần {index + 1}
												</p>
												{item.map(t => (
													<>
														<p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
															{t.name}
														</p>
														<div class="flex flex-row justify-start gap-2 text-cyan-300">
															<Link href={`/roadmap/${id}/${t.id}/quiz`}>
																<p class="text-sm md:text-base leading-snug  text-opacity-100">
																	Quiz
																</p>
															</Link>{' '}
															{t.quiz.length !== 0 && (
																<span
																	class="material-symbols-rounded"
																	style={{ color: ' #ff6f6f' }}
																>
																	file_download_done
																</span>
															)}
															|
															<Link href={`/roadmap/${id}/${t.id}/slide`}>
																<p class="text-sm md:text-base leading-snug  text-opacity-100">
																	Slide
																</p>
															</Link>
															{t.slide.length !== 0 && (
																<span
																	class="material-symbols-rounded"
																	style={{ color: ' #ff6f6f' }}
																>
																	file_download_done
																</span>
															)}
														</div>
													</>
												))}
											</div>
										</div>
									),
								)}
							</div>
							<img
								class="mx-auto -mt-36 md:-mt-36"
								src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
