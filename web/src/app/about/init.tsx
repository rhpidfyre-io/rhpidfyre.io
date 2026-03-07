import { motion } from "motion/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTitle } from "../hooks/useTitle";
import intros from "../redux/intro";
import type { IntroStoreState } from "../redux/stores";

export default function About() {
	useTitle("About");

	const dispatch = useDispatch();
	const played = useSelector(
		(state: IntroStoreState) => state.intros.about_played,
	);

	useEffect(() => {
		if (!played) dispatch(intros.actions.play_about());
	}, [played, dispatch]);

	return (
		<main className="flex flex-col gap-3 text-left">
			<motion.h1
				initial={played ? false : { y: "80px", opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, ease: ["easeOut"] }}
				className="text-4xl"
			>
				rhpidfyre
			</motion.h1>
			<motion.h2
				initial={played ? false : { y: "80px", opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6, ease: ["easeOut"] }}
				className="text-[#999999] max-w-200"
			>
				My personal home page, there's not much to see here but some
				links to my socials, contacts, and my services.
			</motion.h2>
		</main>
	);
}
