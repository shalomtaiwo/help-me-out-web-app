import {
	AspectRatio,
	Box,
	Button,
	Flex,
	Image,
	Stack,
	Text,
	Title,
} from "@mantine/core";
import sampleImg from "../assets/sample.svg";
import {
	IconDotsVertical,
	IconLink,
	IconPlayerPlay,
	IconSettings,
	IconVolume2,
} from "@tabler/icons-react";

function VideoPlayer() {
	return (
		<Stack
			w="100%"
			style={{
				border: "1px solid rgba(182, 179, 198, 0.60)",
				background: "rgba(251, 251, 251, 0.50)",
				borderRadius: "8px",
			}}
			p="0"
		>
			<Box w="100%">
				<AspectRatio ratio={16 / 12}>
					<video
						autoPlay
						controls
					>
						<source
							src="https://res.cloudinary.com/dg8os5pul/video/upload/v1694679847/personal/pexels_videos_2278095-1080p_4_l0rd4s.mp4"
							type="video/mp4"
						/>
					</video>
				</AspectRatio>
			</Box>
			<Flex
				justify="space-between"
				style={{ flexWrap: "wrap" }}
				p={10}
			>
				<Box miw="100px">
					<Text
						fz="xs"
						c="brand.5"
					>
						0:30 / 3:00
					</Text>
				</Box>

				<Flex>
					<Button
						variant="white"
						color="dark"
					>
						<Flex
							direction={"column"}
							align={"center"}
						>
							<IconPlayerPlay
								size={20}
								style={{ border: "1px solid", borderRadius: 12, padding: 3 }}
							/>
							<Text
								size="11px"
								mt={2}
							>
								Play
							</Text>
						</Flex>
					</Button>
					<Button
						variant="white"
						color="dark"
					>
						<Flex
							direction={"column"}
							align={"center"}
						>
							<IconVolume2 size={20} />
							<Text
								size="11px"
								mt={2}
							>
								Share
							</Text>
						</Flex>
					</Button>
					<Button
						variant="white"
						color="dark"
					>
						<Flex
							direction={"column"}
							align={"center"}
						>
							<IconSettings size={20} />
							<Text
								size="11px"
								mt={2}
							>
								Settings
							</Text>
						</Flex>
					</Button>
				</Flex>
			</Flex>
		</Stack>
	);
}

export default VideoPlayer;
