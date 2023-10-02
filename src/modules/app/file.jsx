import {
  Box,
  Button,
  Container,
  Flex,
  Input,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandTelegram,
  IconBrandWhatsapp,
  IconCopy,
  IconEdit,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import VideLinkModal from "../../components/link-modal";
import { useDisclosure } from "@mantine/hooks";
import VideoPlayer from "../../components/video-player.jsx";

function FilePage() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Stack bg="#fff">
      <Stack py="40px">
        <Container size="lg" w="100%">
          <Box className="features-grid">
            <Stack>
              <Title order={1} c="brand.1" pb={30}>
                Your video is ready!
              </Title>
              <Box pb={30}>
                <Text size="sm" c="brand.3">
                  Name
                </Text>
                <Flex>
                  <Title order={4} c="brand.0">
                    Untitled_Video_20232509
                  </Title>
                  <Button
                    style={{ borderColor: "#fff" }}
                    color="gray"
                    variant="outline"
                    size="compact-sm"
                  >
                    <IconEdit />
                  </Button>
                </Flex>
              </Box>
              <Stack pb={30}>
                <Input.Wrapper maw="440px">
                  <Input
                    size="md"
                    bg="rgba(182, 179, 198, 0.20)"
                    placeholder="enter email of receiver"
                  />
                </Input.Wrapper>
              </Stack>
              <Stack pb={30}>
                <Title order={5}>Video Url</Title>
                <Flex
                  bg="#FAFAFA"
                  py={12}
                  align="center"
                  w="fit-content"
                  px={10}
                  style={{ borderRadius: "12px" }}
                >
                  <Text size="sm" c="brand.2">
                    https://www.helpmeout/Untitled_Video_20232509
                  </Text>
                  <Button
                    ml={8}
                    size="compact-sm"
                    variant="outline"
                    color="violet"
                    leftSection={<IconCopy size={14} />}
                  >
                    Copy
                  </Button>
                </Flex>
              </Stack>
              <Stack>
                <Title order={6}>Share Video</Title>
                <Flex>
                  <Button
                    mr={3}
                    variant="outline"
                    color="dark"
                    leftSection={
                      <IconBrandFacebook
                        style={{ color: "#1877F2" }}
                        size={18}
                      />
                    }
                  >
                    Facebook
                  </Button>
                  <Button
                    mr={3}
                    variant="outline"
                    color="dark"
                    leftSection={
                      <IconBrandWhatsapp
                        style={{ color: "#25D366" }}
                        size={20}
                      />
                    }
                  >
                    Whatsapp
                  </Button>
                  <Button
                    variant="outline"
                    color="dark"
                    leftSection={
                      <IconBrandTelegram
                        style={{ color: "#229ED9" }}
                        size={18}
                      />
                    }
                  >
                    Telegram
                  </Button>
                </Flex>
              </Stack>
            </Stack>
            <Stack
              mih="100%"
              style={{
                borderLeft: "1px solid #ccc",
              }}
              px={20}
            >
              <Box>
                <VideoPlayer />
                <Title mt={40} order={3}>Transcript</Title>

              </Box>
            </Stack>
          </Box>
        </Container>
      </Stack>
      <Stack bg="rgba(231, 231, 237, 0.20)">
        <Container py="50px" w="100%" size="lg">
          <Stack maw="600px" mx="auto" style={{ textAlign: "center" }}>
            <Title order={3} c="brand.1">
              To ensure the availability and privacy of your video, we recommend
              saving it to your account.
            </Title>
            <Box py="14">
              <Button bg="brand.0" c="#fff" onClick={open}>
                Save Video
              </Button>
            </Box>
            <Flex align="center" justify="center">
              <Title pr={5} order={4} c="brand.4">
                Don’t have an account?
              </Title>
              <Link to="/login">
                <Title order={4} c="brand.0">
                  Create account
                </Title>
              </Link>
            </Flex>
          </Stack>
        </Container>
      </Stack>
      <VideLinkModal close={close} opened={opened} />
    </Stack>
  );
}

export default FilePage;
