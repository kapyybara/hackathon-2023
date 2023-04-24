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
import { store } from '.'
import { Roadmap } from '../../model/roadmap.model'

export class RoadmapService {
	static async create(res: Roadmap) {
		const rs = await addDoc(collection(store, 'roadmaps'), { res })
		console.log(rs)
	}

	static async getByUid(id: string) {
		// const collection_ref = collection(store, 'roadmaps')
		const q = query(
			collection(store, 'roadmaps'),
			where('res.createBy', '==', id),
			// orderBy('topic.week'),
			// orderBy('topic.created'),
		)

		const doc_refs = await getDocs(q)

		const res = []

		doc_refs.forEach(country => {
			res.push({
				id: country.id,
				...country.data(),
			})
		})

		return res.map(i => ({ id: i.id, ...i.res }))
	}
	static async getId(id: string) {
		const q = query(collection(store, 'roadmaps'), where('res.id', '==', id))

		const doc_refs = await getDocs(q)

		const res = []

		doc_refs.forEach(country => {
			res.push({
				id: country.id,
				...country.data(),
			})
		})

		return res.map(i => ({ id: i.id, ...i.res }))[0]
	}
}
