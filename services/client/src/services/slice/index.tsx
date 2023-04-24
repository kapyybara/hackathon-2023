type SlidePreactType = {
	type: 'title' | 'content' | 'img'
	content: 'string'
}

export function SlidePreact({
	data,
	index,
}: {
	data: SlidePreactType[]
	index: number
}) {
	return <div>{/* {data.map(i => )} */}</div>
}
