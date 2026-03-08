import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowLeftFromLine, Clipboard, ClipboardCheck } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { useTitle } from "../hooks/useTitle";
import intros from "../redux/intro";
import type { IntroStoreState } from "../redux/stores";

const username: string = "sedenions";
const display_name: string = "Koco 🪴";
const pfp_url: string =
	"https://cdn.discordapp.com/avatars/749096315027193909/a162e1b54c4ce3e9b77ae4b75e0f93e8.png?size=1024";

function DiscordSvg() {
	// https://icons.getbootstrap.com/icons/discord/
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="32"
			height="32"
			fill="#808080"
			className="bi bi-discord"
			viewBox="0 0 16 16"
		>
			<path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
		</svg>
	);
}

function ProfilePicture() {
	return (
		<div className="mx-auto mb-4 mt-4 relative group **:rounded-full">
			<div className="absolute -inset-0.5 bg-linear-to-r bg-[linear-gradient(to_right,red,orange,yellow,green,blue,indigo,violet)] opacity-65 blur-xl transition duration-500 group-hover:opacity-100"></div>
			<div className="relative flex bg-linear-to-r bg-[linear-gradient(to_right,red,orange,yellow,green,blue,indigo,violet)] p-0.5">
				<img src={pfp_url} className="h-30 w-30" />
			</div>
		</div>
	);
}

function CopyUserClipboard() {
	const [copied, setCopied] = useState<boolean>(false);

	const copy_to_clipboard = () => {
		navigator.clipboard
			.writeText(username)
			.then(() => {
				setCopied(true);
				setTimeout(() => {
					setCopied(false);
				}, 5000);
			})
			.catch((e) => console.error(e));
	};

	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button onClick={copy_to_clipboard} disabled={copied}>
					{copied ? (
						<>
							<ClipboardCheck /> Copied
						</>
					) : (
						<>
							<Clipboard /> Copy
						</>
					)}
				</Button>
			</TooltipTrigger>
			<TooltipContent>
				<p className="text-sm">@{username}</p>
			</TooltipContent>
		</Tooltip>
	);
}

export default function Discord() {
	useTitle("Discord");

	const dispatch = useDispatch();
	const played = useSelector(
		(state: IntroStoreState) => state.intros.discord_played,
	);

	useEffect(() => {
		if (!played) dispatch(intros.actions.play_discord());
	}, [played, dispatch]);

	return (
		<motion.main
			initial={played ? false : { y: "10%", opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="flex flex-col justify-center items-center w-80 gap-5 bg-[#0a0a0a] px-5 pt-6 pb-5 rounded-2xl border-[#262626] border [&>svg]:text-[#666666] [&>svg]:my-1"
		>
			<Link to="https://discord.com/">
				<DiscordSvg />
			</Link>
			<ProfilePicture />
			<div className="flex flex-col gap-2">
				<h1 className="text-2xl text-center font-bold">
					{display_name}
				</h1>
				<h2 className="text-center text-[#808080]">{"@" + username}</h2>
			</div>
			<div className="flex flex-col gap-3 w-full">
				<CopyUserClipboard />
				<Link to="/">
					<Button className="w-full">
						<ArrowLeftFromLine /> Back
					</Button>
				</Link>
			</div>
		</motion.main>
	);
}
