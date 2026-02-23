function Title() {
	return <h1>rhpidfyre.io</h1>;
}

export default function Header() {
	return (
		<header className="flex flex-col gap-4 bg-[#0a0a0a] p-5 rounded-2xl border-[#262626] border">
			<div>
				<Title />
			</div>
		</header>
	);
}
