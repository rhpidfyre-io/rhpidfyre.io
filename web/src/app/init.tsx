import { Button } from "@/components/ui/button";
import { Globe, MessageCircleMore, Server } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, type To } from "react-router";
import { intros } from "./redux/intro";
import type { IntroStoreState } from "./redux/stores";

interface MenuButton {
	to: To;
	children: string;
}
function MenuButton({ to, children }: MenuButton) {
	return (
		<Link to={to} className="w-full [&>button]:w-full">
			<Button className="px-13">{children}</Button>
		</Link>
	);
}

export default function Index() {
	const dispatch = useDispatch();
	const played = useSelector(
		(state: IntroStoreState) => state.intros.home_played,
	);

	useEffect(() => {
		if (!played) dispatch(intros.actions.play_home());
	}, [played, dispatch]);

	return (
		<motion.main
			initial={played ? false : { y: "10%", opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="flex flex-col justify-center items-center gap-3 bg-[#0a0a0a] p-5 rounded-2xl border-[#262626] border [&>svg]:text-[#666666] [&>svg]:my-1"
		>
			{/*Contacts and socials*/}
			<MessageCircleMore />
			<div className="flex gap-5">
				<MenuButton to="/discord">Discord</MenuButton>
				<MenuButton to="https://t.me/kocobutter">Telegram</MenuButton>
			</div>
			<MenuButton to="mailto:brandon@rhpidfyre.io">Email</MenuButton>
			<MenuButton to="https://matrix.to/#/@me:matrix.rhpidfyre.io">
				Matrix
			</MenuButton>
			<MenuButton to="https://github.com/unixtensor">GitHub</MenuButton>
			{/*rhpidfyre.io services*/}
			<Server />
			<MenuButton to="https://git.rhpidfyre.io">Gitea</MenuButton>
			<MenuButton to="https://immich.rhpidfyre.io">Immich</MenuButton>
			<MenuButton to="https://gsm.rhpidfyre.io">Pterodactyl</MenuButton>
			{/*Other domains associated*/}
			<Globe />
			<MenuButton to="https://koconutmc.com">koconutmc.com</MenuButton>
		</motion.main>
	);
}
