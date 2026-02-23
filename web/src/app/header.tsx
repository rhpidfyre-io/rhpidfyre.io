import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Link, type To } from "react-router";

interface HeaderButton {
	to: To;
	children: string;
}
function HeaderButton({ to, children }: HeaderButton) {
	return (
		<Link to={to}>
			<Button>{children}</Button>
		</Link>
	);
}

export default function Header() {
	return (
		<motion.header
			initial={{ y: "-10vh" }}
			animate={{
				y: 0,
				transition: { type: "spring", duration: 0.6 },
			}}
			className="flex justify-between w-2xl items-center bg-[#0a0a0a] px-5 py-3 rounded-2xl border-[#262626] border"
		>
			{/*Title/home page navigation*/}
			<div className="font-black">
				<Link
					to="/"
					className="hover:cursor-pointer hover:text-[#b3b3b3] transition-colors"
				>
					<h1>rhpidfyre.io</h1>
				</Link>
			</div>
			{/*Other navigation*/}
			<div className="flex gap-3">
				<HeaderButton to="/about">About</HeaderButton>
				<HeaderButton to="/blog">Blog</HeaderButton>
			</div>
		</motion.header>
	);
}
