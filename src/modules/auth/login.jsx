import {
	Button,
	Container,
	Divider,
	Flex,
	Image,
	Input,
	Stack,
	Text,
	Title,
} from "@mantine/core";
import logoImg from "../../assets/logo.svg";
import { Link } from "react-router-dom";

function Login() {
	const btnProps = {
		fullWidth: true,
		variant: "outline",
		size: "md",
		color: "dark",
	};

	return (
		<Stack
			mih="100vh"
			bg="white"
		>
			<Container
				pt={50}
				style={{ textAlign: "center" }}
				size="lg"
				w="100%"
				pb={50}
			>
				<Flex py={10}>
					<Link to={"/"}>
						<Image src={logoImg} />
					</Link>
				</Flex>

				{/* Form Section */}
				<Stack
					mx="auto"
					maw="500px"
					w="100%"
				>
					<Title>Log in or Sign up</Title>
					<Text
						mx="auto"
						maw="350px"
						fz="md"
						fw="normal"
						c="brand.2"
					>
						Join millions of others in sharing successful moves on HelpMeOut.
					</Text>

					<Stack
						w="100%"
						pt={10}
						style={{ textAlign: "left" }}
					>
						{/* Social Auth Buttons */}
						<Button
							{...btnProps}
							leftSection={
								<Image
									src={
										"https://res.cloudinary.com/dg8os5pul/image/upload/v1696221547/google_fhtnkq.png"
									}
									alt="google"
									h={20}
								/>
							}
						>
							Continue with Google
						</Button>
						<Button
							{...btnProps}
							leftSection={
								<Image
									src={
										"https://res.cloudinary.com/dg8os5pul/image/upload/v1696221545/facebook_die0rp.png"
									}
									alt="facebook"
									h={20}
								/>
							}
						>
							Continue with Facebook
						</Button>

						<Flex>
							<Divider
								w="100%"
								my="xs"
								label="Or"
								labelPosition="center"
							/>
						</Flex>

						<Input.Wrapper label="Email">
							<Input placeholder="Enter your email address" />
						</Input.Wrapper>
						<Input.Wrapper label="Password">
							<Input placeholder="Enter your password" />
						</Input.Wrapper>
						<Button
							mt={10}
							fullWidth
							size="md"
							variant="outline"
							bg="brand.0"
							color="white"
						>
							Sign Up
						</Button>
					</Stack>
				</Stack>
			</Container>
		</Stack>
	);
}

export default Login;
