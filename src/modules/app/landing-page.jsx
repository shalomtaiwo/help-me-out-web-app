import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import assistantImg from "../../assets/assistant.svg";
import smileImg from "../../assets/smile.svg";
import gridImg from "../../assets/grid.svg";
import gridTwoImg from "../../assets/grid-two.svg";
import teamImg from "../../assets/team.svg";
import videoImg from "../../assets/video.svg";
import circleImg from "../../assets/circle.svg";
import flyImg from "../../assets/fly.svg";
import revisitImg from "../../assets/revisit.svg";
import { IconArrowRight } from "@tabler/icons-react";
import Feature from "../../components/feature";
import { howItWorks } from "../../utils";

function Home() {
  const imgStyle = {
    borderRadius: "8px",
    overflow: "hidden",
    maxWidth: "300px",
  };
  return (
    <Stack>
      <Stack mb="40px" bg="#FFF">
        <Container w="100%" size="lg">
          <Box className="features-grid" bg="white" py="70px">
            <Box maw="420px">
              <Title maw="300px">Show Them Don&apos;t Just Tell</Title>
              <Text fz="sm" py={14}>
                Help your friends and loved ones by creating and sending videos
                on how to get things done on a website.
              </Text>
              <Button
                size="sm"
                bg="brand.0"
                c="white"
                w="auto"
                rightSection={<IconArrowRight size={14} />}
              >
                Install HelpMeOut
              </Button>
            </Box>

            <Stack pos="relative">
              <Stack maw="200px" pos="absolute" top={"-50px"} right="-30px">
                <Image src={gridImg} />
              </Stack>
              <SimpleGrid style={{ zIndex: 1 }} cols={2} pos="relative">
                <Stack justify="space-between">
                  <Stack style={imgStyle}>
                    <Image src={assistantImg} />
                  </Stack>
                  <Stack style={imgStyle}>
                    <Image src={teamImg} />
                  </Stack>
                </Stack>
                <Stack style={imgStyle}>
                  <Image src={smileImg} />
                </Stack>
              </SimpleGrid>
              <Stack maw="200px" pos="absolute" bottom={"-50px"} left="-30px">
                <Image src={gridTwoImg} />
              </Stack>
            </Stack>
          </Box>
        </Container>
      </Stack>
      <Stack mb="40px" bg="#fff" id="features">
        <Container py="70px" w="100%" size="lg">
          <Box style={{ textAlign: "center" }} pb="60px">
            <Title order={2} c="brand.0">
              Features
            </Title>
            <Text c="brand.3" fz="md">
              Key Highlights of Our Extension
            </Text>
          </Box>
          <Stack>
            <Box className="features-grid">
              <Box maw="400px">
                <Flex pb="40px">
                  <Box
                    style={{ flexShrink: 0, borderRadius: "30px" }}
                    p={4}
                    w="30px"
                    h="30px"
                    mr={10}
                    bg="brand.0"
                  >
                    <Image src={circleImg} />
                  </Box>
                  <Box>
                    <Title c="brand.0" order={4}>
                      Simple Screen Recording
                    </Title>
                    <Text fz="sm" c="brand.3">
                      Effortless screen recording for everyone. Record with
                      ease, no tech expertise required.
                    </Text>
                  </Box>
                </Flex>
                <Flex pb="40px">
                  <Box
                    style={{ flexShrink: 0, borderRadius: "30px" }}
                    p={4}
                    w="30px"
                    h="30px"
                    mr={10}
                    bg="brand.0"
                  >
                    <Image src={flyImg} />
                  </Box>
                  <Box>
                    <Title c="brand.0" order={4}>
                      Easy-to-Share URL
                    </Title>
                    <Text fz="sm" c="brand.3">
                      Share your recordings instantly with a single link. No
                      attachments, no downloads.
                    </Text>
                  </Box>
                </Flex>
                <Flex pb="40px">
                  <Box
                    style={{ flexShrink: 0, borderRadius: "30px" }}
                    p={4}
                    w="30px"
                    h="30px"
                    mr={10}
                    bg="brand.0"
                  >
                    <Image src={revisitImg} />
                  </Box>
                  <Box>
                    <Title c="brand.0" order={4}>
                      Revisit Recordings
                    </Title>
                    <Text fz="sm" c="brand.3">
                      Access and review your past content effortlessly. Your
                      recordings, always at your fingertips.
                    </Text>
                  </Box>
                </Flex>
              </Box>
              <Box w="100%">
                <Image src={videoImg} alt="" />
              </Box>
            </Box>
          </Stack>
        </Container>
      </Stack>
      <Stack bg="#fff" id="howItWorks">
        <Container py="70px" w="100%" size="lg">
          <Box style={{ textAlign: "center" }} pb="60px">
            <Title order={2} c="brand.0">
              How it works
            </Title>
          </Box>
          <Stack>
            <Box className="work-grid">
              {howItWorks.map((work, index) => (
                <Feature key={work.title} index={index + 1} {...work} />
              ))}
            </Box>
          </Stack>
        </Container>
      </Stack>
    </Stack>
  );
}

export default Home;
