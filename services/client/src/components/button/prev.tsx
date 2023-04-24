export const PrevButton = ({ children, ...rest }: any) => {
	return (
		<button
			{...rest}
			class="flex  flex-row items-center justify-center gap-4 p-4 px-8 bg-indigo-600 rounded-lg text-white"
		>
			<span class="material-symbols-rounded">skip_previous</span>
			<span class="">Prev</span>
		</button>
	)
}
