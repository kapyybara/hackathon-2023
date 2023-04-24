import {
	addDoc,
	collection,
	doc,
	getDoc,
	getDocs,
	orderBy,
	query,
	updateDoc,
	where,
} from 'firebase/firestore'
import { Quiz } from '../../model/quiz.model'
import { store } from '.'

export class TopicService {
	static async create(quiz: Quiz) {
		const res = await addDoc(collection(store, 'quiz'), { quiz })

		return res
	}
	static async getByTopicId(id: string) {
		// const collection_ref = collection(store, 'roadmaps')
		const q = query(
			collection(store, 'quiz'),
			where('topic.roadmapId', '==', id),
		)

		const doc_refs = await getDocs(q)

		const res = []

		doc_refs.forEach(country => {
			res.push({
				id: country.id,
				...country.data(),
			})
		})

		return res
			.map(i => ({ id: i.id, ...i.topic }))
			.sort((a, b) => a.week - b.week)
			.reduce((p, c) => {
				const tmp = p
				tmp[c.week] = (p[c.week] || []).concat(c)
				return tmp
			}, [])
			.map(i => i.sort((a, b) => b.valueOf() > a.valueOf()))
	}
	static async updateSlide(
		id: string,
		slide: { header: string; content: string }[],
	) {
		const docRef = doc(store, 'topics', id)
		updateDoc(docRef, {
			slide,
		})
			.then(response => {
				console.log(response)
				alert('updated')
			})
			.catch(error => {
				console.log(error.message)
			})
	}
	static async getById(id: string) {
		const docRef = doc(store, 'topics', id)
		const docSnap = await getDoc(docRef)

		let data
		if (docSnap.exists()) {
			data = { ...docSnap.data().topic, ...docSnap.data() }
		} else {
			// docSnap.data() will be undefined in this case
			console.log('No such document!')
		}
		return data
	}
}
