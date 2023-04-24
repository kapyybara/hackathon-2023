import { Quiz } from './quiz.model'

export type Topic = {
	id?: string
	name: string
	slide: any[]
	quiz: Quiz[]
	roadmapId: string
	week: number
}
