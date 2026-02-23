import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Globe, MessageCircleMore, Server } from "lucide-react";
import Header from "./header";
import Footer from "./footer";

interface MenuButton {
	to: string;
	children: string;
}
function MenuButton({ to, children }: MenuButton) {
	return (
		<Link to={to} className="w-full [&>button]:w-full">
			<Button className="px-10">{children}</Button>
		</Link>
	);
}

function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col justify-between items-center h-screen py-5">
			<Header />
			{children}
			<Footer />
		</div>
	);
}

export default function Index() {
	return (
		<Layout>
			<main className="flex flex-col justify-center items-center gap-3 bg-[#0a0a0a] p-5 rounded-2xl border-[#262626] border [&>svg]:text-[#666666] [&>svg]:my-1">
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
			</main>
		</Layout>
	);
}
export { Layout };
