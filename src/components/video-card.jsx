import { Box, Button, Flex, Image, Stack, Text, Title } from "@mantine/core";
import sampleImg from "../assets/sample.svg";
import { IconDotsVertical, IconLink } from "@tabler/icons-react";

function VideoCard() {
  return (
    <Stack
      w="100%"
      style={{
        border: "1px solid rgba(182, 179, 198, 0.60)",
        background: "rgba(251, 251, 251, 0.50)",
        borderRadius: "24px",
      }}
      p="16px"
    >
      <Box w="100%">
        <Image maw="100%" src={sampleImg} />
      </Box>
      <Flex justify="space-between" style={{flexWrap: "wrap"}}>
        <Box miw="300px">
          <Title order={5} c="brand.1">
            How to create Facebook Ad listing
          </Title>
          <Text fz="xs" c="brand.5">
            SEPTEMBER 23, 2023
          </Text>
        </Box>

        <Flex>
          <Button variant="white" color="dark" size="compact-sm">
            <IconLink size={20} />
          </Button>
          <Button variant="white" color="dark" size="compact-sm">
            <IconDotsVertical size={20} />
          </Button>
        </Flex>
      </Flex>
    </Stack>
  );
}

export default VideoCard;
