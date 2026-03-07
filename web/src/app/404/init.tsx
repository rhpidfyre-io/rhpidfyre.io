import { Skull } from "lucide-react";

export default function NotFound() {
	return (
		<main className="flex flex-col justify-center items-center gap-5">
			<Skull className="h-10 w-10" />
			<h1 className="text-2xl">404 | Not found</h1>
		</main>
	);
}
