/* eslint-disable react/prop-types */
import { Box, Flex, Image, Stack, Text, Title } from "@mantine/core";
import recordImg from "../assets/record.svg";

function Feature({ title, text, index }) {
  return (
    <Stack style={{ textAlign: "center" }} maw="300px" mx="auto">
      <Flex
        align="center"
        justify="center"
        style={{ borderRadius: "50px" }}
        w="50px"
        h="50px"
        bg="brand.0"
        c="white"
        mx="auto"
      >
        <Title order={4}>{index}</Title>
      </Flex>
      <Title order={4}>{title}</Title>
      <Text c="brand.3" fz="sm">
        {text}
      </Text>
      <Stack>
        <Box>
          <Image src={recordImg} />
        </Box>
      </Stack>
    </Stack>
  );
}

export default Feature;
