import { Skull } from "lucide-react";
import { useTitle } from "../hooks/useTitle";

export default function NotFound() {
	useTitle("404");

	return (
		<main className="flex flex-col justify-center items-center gap-5">
			<Skull className="h-10 w-10" />
			<h1>404 | Not found</h1>
		</main>
	);
}
