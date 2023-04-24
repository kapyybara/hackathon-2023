import { Link } from 'preact-router'
export function SubjectCard({ subject }: any) {
	const imgs = [
		'https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
		'https://images.unsplash.com/photo-1513077202514-c511b41bd4c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
		'https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80',
		'https://images.unsplash.com/photo-1518665750801-883c188a660d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80',
		'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
		'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
		'https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
		'https://images.unsplash.com/photo-1528297506728-9533d2ac3fa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
	]

	return (
		<Link href={('roadmap/' + subject.id) as string}>
			<div class="w-full rounded pb-2 border border-slate-300	bg-slate-50">
				<div class="h-32 relative" id={subject.id}>
					<img
						class="object-cover overflow-hidden w-full h-full"
						src={imgs[Math.floor(Math.random() * (imgs.length - 1))]}
						alt=""
					/>
					<span class="material-symbols-rounded absolute top-1 right-1 w-4 h-8 bg-slate-200 flex items-center justify-center rounded">
						more_vert
					</span>
				</div>
				<h1 class="w-56 mt-4 text-2xl px-2">{subject.name}</h1>
				<p class="w-full mt-4  px-2">{subject.des.slice(0, 35)}...</p>
			</div>
		</Link>
	)
}
