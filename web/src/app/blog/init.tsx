import { CircleX } from "lucide-react";
import { useTitle } from "../hooks/useTitle";

export default function Blog() {
	useTitle("Blog");

	return (
		<main className="flex flex-col justify-center items-center gap-5">
			<CircleX className="h-10 w-10" />
			<h1>401 Unauthorized | Not yet completed :)</h1>
		</main>
	);
}
