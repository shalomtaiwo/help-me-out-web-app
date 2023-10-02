/* eslint-disable react/prop-types */
import { Box, Button, Flex, Image, Modal, Stack, Text } from "@mantine/core";
import planeImg from "../assets/plane.svg";
import { Link } from "react-router-dom";

function VideLinkModal({ opened, close }) {
  return (
    <Modal.Root
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
      opened={opened}
      onClose={close}
      centered
    >
      <Modal.Overlay
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      />

      {/* Modal content */}
      <Modal.Content bg="#F2F4F7">
        <Modal.Header bg="#F2F4F7">
          <Modal.CloseButton />
        </Modal.Header>
        <Stack px={60} style={{ textAlign: "center" }}>
          <Box maw="180px" mx="auto">
            <Image src={planeImg} alt="" />
          </Box>
          <Text size="sm">
            Your video link has been sent to <span style={{fontWeight: "bold"}}>shalomt@gmail.com</span>
          </Text>

          <Stack py="40px">
            <Text size="sm">
              Would you need to view this video later? Save to your account now!
            </Text>
            <Button bg="brand.0" my="20px" w="fit-content" mx="auto" c="#fff">
              Save Video
            </Button>
            <Flex align="center" justify="center">
              <Text size="sm" pr={5} c="brand.4">
                Don&apos;t have an account?
              </Text>
              <Link to="/login">
                <Text size="sm" c="brand.0">Create account</Text>
              </Link>
            </Flex>
          </Stack>
        </Stack>
      </Modal.Content>
    </Modal.Root>
  );
}

export default VideLinkModal;
