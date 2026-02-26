import { Link } from "react-router";

export default function Footer() {
	return (
		<footer className="flex flex-col justify-center items-center gap-2 text-sm text-[#4d4d4d]">
			<p>&copy; rhpidfyre 2026</p>
			<div className="flex gap-2 [&>a]:hover:underline">
				<Link to="/">Home</Link>
				<p>|</p>
				<Link to="/about">About</Link>
				<p>|</p>
				<Link to="/blog">Blog</Link>
				<p>|</p>
				<Link to="/login">Login</Link>
				<p>|</p>
				<Link to="https://github.com/rhpidfyre-io/rhpidfyre.io">
					Source Code
				</Link>
			</div>
		</footer>
	);
}
