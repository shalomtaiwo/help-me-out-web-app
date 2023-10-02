import {
    Avatar,
  Box,
  Container,
  Flex,
  Group,
  Image,
  Input,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.svg";
import VideoCard from "../../components/video-card";

function Dashboard() {
  return (
    <Stack mih="100vh" bg="#fff">
      <Stack style={{ borderBottom: "1px solid #ccc" }}>
        <Container w="100%" py="40px" size="lg">
          <Flex
            py={10}
            styles={{
              root: {
                alignItems: "center",
                justifyContent: "space-between",
              },
            }}
          >
            <Link to="/">
              <Image src={logoImg} maw="120px" />
            </Link>

            <Group align="center">
            <Avatar radius="xl" />
              <Text fz="sm" c="brand.0">
                John Mark
              </Text>
            </Group>
          </Flex>

          <Flex pt="40px" justify="space-between">
            <Box>
              <Title order={2} c="brand.1">
                Hello, Shalom Taiwo
              </Title>
              <Text c="brand.3" fz="sm">
                Here are your recorded videos
              </Text>
            </Box>
            <Input.Wrapper fz="xs">
              <Input
                size="lg"
                radius="10"
                // bg="rgba(182, 179, 198, 0.20)"
                placeholder="Search for a particular video"
              />
            </Input.Wrapper>
          </Flex>
        </Container>
      </Stack>
      <Stack py="30px">
        <Container size="lg" w="100%" pb="20">
        <Text fz="sm" pb="10">Recent files</Text>
          <Box className="card-grid">
            <VideoCard />
            <VideoCard />
          </Box>
        </Container>

        <Container  size="lg" w="100%">
        <Text fz="sm" pb="10">Files from last week</Text>
          <Box className="card-grid">
            <VideoCard />
            <VideoCard />
          </Box>
        </Container>
      </Stack>
    </Stack>
  );
}

export default Dashboard;
