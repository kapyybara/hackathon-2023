import { Link } from 'preact-router'
import { gpt } from '../services/apis/gpt'
import { RoadmapService } from '../services/apis/roadmap.service'
import { TopicService } from '../services/apis/topic.service'

export function Home() {
	async function hanlder() {
		const result = await gpt.askSlides(
			'Giới thiệu về mô hình gợi ý lộ trình học tập',
		)
	}
	const update = async () => {
		const a = await TopicService.updateSlide('MmWLpJzogxr0VxsL8nU3', [
			{
				header: 'Giới thiệu',
				content:
					'Hệ thống nhúng (embedded system) là hệ thống tích hợp các linh kiện phần cứng, phần mềm và vi xử lý để thực hiện các chức năng nhất định. Ví dụ về các hệ thống nhúng là điều khiển tự động, máy tính nhúng, thiết bị y tế, thiết bị điện tử tiêu dùng và nhiều ứng dụng khác.',
			},
			{
				header: 'Model Mapping',
				content:
					'Trong lập trình cho hệ thống nhúng, Model Mapping là quá trình ánh xạ các yêu cầu cao cấp của người dùng vào các chức năng cụ thể của hệ thống nhúng. Điều này đòi hỏi các nhà phát triển phải có kiến ​​thức chuyên sâu về phần cứng và phần mềm của hệ thống nhúng để có thể đảm bảo rằng các yêu cầu cao cấp của người dùng được đáp ứng một cách hiệu quả.',
			},
			{
				header: 'Định dạng JSON',
				content:
					'JSON (JavaScript Object Notation) là một định dạng trao đổi dữ liệu nhỏ gọn và đơn giản. Nó được sử dụng cho các ứng dụng web và lập trình hệ thống nhúng để truyền tải dữ liệu giữa các thành phần khác nhau trong hệ thống.',
			},
		])
	}

	return (
		<h1 class="text-3xl font-bold underline">
			<button onClick={update}>Test update slide</button>
			home page
			<button onClick={hanlder}>Render</button>
		</h1>
	)
}
