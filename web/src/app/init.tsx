import { Button } from "@/components/ui/button";
import { Globe, MessageCircleMore, Server } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, type To } from "react-router";
import Footer from "./footer";
import Header from "./header";
import { play_intro } from "./redux/intro";
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

function useIntro(): boolean {
	const dispatch = useDispatch();
	const played = useSelector((state: IntroStoreState) => state.intro.played);

	useEffect(() => {
		if (!played) dispatch(play_intro());
	}, [played, dispatch]);

	return played;
}

function Layout({ children }: { children: React.ReactNode }) {
	const played = useIntro();

	return (
		<div className="flex flex-col justify-between items-center h-screen py-5">
			<Header intro={played} />
			{children}
			<Footer intro={played} />
		</div>
	);
}

export default function Index() {
	const played = useIntro();

	return (
		<Layout>
			<motion.main
				initial={played ? false : { opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				className="flex flex-col justify-center items-center gap-3 bg-[#0a0a0a] p-5 rounded-2xl border-[#262626] border [&>svg]:text-[#666666] [&>svg]:my-1"
			>
				{/*Contacts and socials*/}
				<MessageCircleMore />
				<div className="flex gap-5">
					<MenuButton to="/discord">Discord</MenuButton>
					<MenuButton to="https://t.me/kocobutter">
						Telegram
					</MenuButton>
				</div>
				<MenuButton to="mailto:brandon@rhpidfyre.io">Email</MenuButton>
				<MenuButton to="https://matrix.to/#/@me:matrix.rhpidfyre.io">
					Matrix
				</MenuButton>
				<MenuButton to="https://github.com/unixtensor">
					GitHub
				</MenuButton>
				{/*rhpidfyre.io services*/}
				<Server />
				<MenuButton to="https://git.rhpidfyre.io">Gitea</MenuButton>
				<MenuButton to="https://immich.rhpidfyre.io">Immich</MenuButton>
				<MenuButton to="https://gsm.rhpidfyre.io">
					Pterodactyl
				</MenuButton>
				{/*Other domains associated*/}
				<Globe />
				<MenuButton to="https://koconutmc.com">
					koconutmc.com
				</MenuButton>
			</motion.main>
		</Layout>
	);
}
export { Layout };
