import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { motion } from "motion/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTitle } from "../hooks/useTitle";
import intros from "../redux/intro";
import type { IntroStoreState } from "../redux/stores";

export default function Login() {
	useTitle("Login");

	const dispatch = useDispatch();
	const played = useSelector(
		(state: IntroStoreState) => state.intros.login_played,
	);

	useEffect(() => {
		if (!played) dispatch(intros.actions.play_login());
	}, [played, dispatch]);

	return (
		<motion.main
			initial={played ? false : { y: "10%", opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="flex flex-col gap-6 w-100"
		>
			<Card className="bg-[#0a0a0a] rounded-2xl border-[#262626] border text-white">
				<CardHeader>
					<CardTitle>Login</CardTitle>
					<CardDescription>
						An email and password is required.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form>
						<FieldGroup>
							<Field>
								<FieldLabel htmlFor="email">Email</FieldLabel>
								<Input
									className="border-[#262626]"
									id="email"
									type="email"
									placeholder="m@example.com"
									required
								/>
							</Field>
							<Field>
								<FieldLabel htmlFor="password">
									Password
								</FieldLabel>
								<Input
									className="border-[#262626]"
									id="password"
									type="password"
									required
								/>
							</Field>
							<Field>
								<Button type="submit">Login</Button>
							</Field>
						</FieldGroup>
					</form>
				</CardContent>
			</Card>
		</motion.main>
	);
}
