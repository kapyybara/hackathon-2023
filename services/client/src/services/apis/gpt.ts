import { error } from './../../../../server/node_modules/ajv/lib/vocabularies/applicator/dependencies'
import request from '../axios/axiosContext'

function GPTtoJSON(str: string) {
	const start = str.indexOf('{')
	let end = str.split('').lastIndexOf('}')
	return JSON.parse(str.slice(start, end + 1))
}

export class gpt {
	static async askPlan(name: string, time: number): Promise<any> {
		const res = await request({
			method: 'POST',
			url: 'conversation',
			body: {
				message: `Thiết kế cho tôi một roadmap học "${name}" trong ${time} tuần bằng json với format:{description: mô tả về Cơ sở dữ liệu, roadmap: {1: ['topic 1', 'topic 2']] , 2: ['topic 1', 'topic 2']}}`,
			},
		})

		const str = await res.data.response
		console.log(res)
		const data = GPTtoJSON(str)
		console.log(data)
		return data

		return {
			description: 'Roadmap học cơ sở dữ liệu trong 8 tuần',
			roadmap: {
				description: 'Roadmap học cơ sở dữ liệu trong 8 tuần',
				roadmap: {
					'1': ['Hướng dẫn về cơ sở dữ liệu', 'Kiến trúc của cơ sở dữ liệu'],
					'2': ['Các loại cơ sở dữ liệu', 'Thiết kế cơ sở dữ liệu'],
					'3': ['SQL cơ bản', 'Lệnh truy vấn SQL'],
					'4': [
						'Thiết kế cơ sở dữ liệu quan hệ',
						'Khóa & Ràng buộc của cơ sở dữ liệu quan hệ',
					],
					'5': [
						'Truy vấn dữ liệu nâng cao trong SQL',
						'Xử lý lỗi & tối ưu hóa hiệu suất',
					],
					'6': ['Cơ sở dữ liệu NoSQL', 'MongoDB'],
					'7': ['Cơ sở dữ liệu phân tán', 'Hadoop & HBase'],
					'8': [
						'Lập trình ứng dụng với cơ sở dữ liệu',
						'Các thư viện và framework',
					],
				},
			},
		}
	}

	static async askSlides(name: string): Promise<any> {
		try {
			console.log('render')
			const res = await request({
				method: 'POST',
				url: 'conversation',
				body: {
					// message: `Thiết kế cho tôi một slide về "${name}" bằng json với format:{title: ${name}, slides: [{header, content}]}`,
					message: `Genderate content for slide about "${name}" mapping model{title,slides :[{header, content}]} by json format, vietnamese`,
				},
			})
			console.log(res)

			const str = await res.data.response
			const data = GPTtoJSON(str)
			console.log(data)
			return data
		} catch (error: any) {
			throw Error(error)
		}
	}

	static async askQuiz(name: string): Promise<any> {
		try {
			console.log('render')
			const res = await request({
				method: 'POST',
				url: 'conversation',
				body: {
					// message: `Thiết kế cho tôi một slide về "${name}" bằng json với format:{title: ${name}, slides: [{header, content}]}`,
					message: `Generate 4 random quizs about ${name} ,return for me a json with format like: {data:{ques: string,ans: string[],trueAns: number}[]}`,
				},
			})
			console.log(res)

			const str = await res.data.response
			const data = GPTtoJSON(str)
			console.log(data)
			return data
		} catch (error: any) {
			throw Error(error)
		}
	}
}
