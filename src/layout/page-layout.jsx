import { Box, Container, Drawer, Flex, Image, Stack, Text, Title } from "@mantine/core";
import logoImg from "../assets/logo.svg";
import whiteLogoImg from "../assets/white-logo.svg";
import { Link, Outlet } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";

function PageLayout() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Stack mih="100vh" bg="#fff">
        <Stack
          styles={{
            root: {
              border: "1px solid #ddd",
            },
          }}
        >
          <Container w="100%" size="lg">
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
              <Flex
                styles={{
                  root: {
                    alignItems: "center",
                    color: "black !important",
                  },
                }}
              >
                <a href="#features">
                  <Text fz="sm" c="black" fw="bold" pr={10}>
                    Features
                  </Text>
                </a>
                <a href="#howItWorks">
                  <Text fz="sm" c="black" fw="bold">
                    How It Works
                  </Text>
                </a>
              </Flex>
              <Link to="login" onClick={open}>
                <Text fz="md" c="brand.0" fw="bold">
                  Get Started
                </Text>
              </Link>
            </Flex>
          </Container>
        </Stack>

        <Stack bg="#F4F6F8" styles={{ root: { flex: 1 } }}>
          <Outlet />
        </Stack>

        {/* Footer */}
        <Stack bg="brand.0" c="white" py={"50px"}>
          <Container w="100%">
            <Box className="footer-grid">
              {/* column 1 */}
              <Flex w="100%" align="center">
                <Box>
                  <Image src={whiteLogoImg} w="120px" />
                </Box>
              </Flex>
              {/* column 2 */}
              <Stack>
                <Title order={6}>Menu</Title>
                <Link>
                  <Text fz="xs" pr={6}>
                    Home
                  </Text>
                </Link>
                <Link>
                  <Text fz="xs" pr={6}>
                    Converter
                  </Text>
                </Link>
                <Link>
                  <Text fz="xs" pr={6}>
                    How it works
                  </Text>
                </Link>
              </Stack>
              {/* Column 3 */}
              <Stack>
                <Title order={6}>About Us</Title>
                <Link>
                  <Text fz="xs" pr={6}>
                    About
                  </Text>
                </Link>
                <Link>
                  <Text fz="xs" pr={6}>
                    Contact Us
                  </Text>
                </Link>
                <Link>
                  <Text fz="xs" pr={6}>
                    Privacy Policy
                  </Text>
                </Link>
              </Stack>
              {/* Column 4 */}
              <Stack>
                <Title order={6}>Screen Record</Title>
                <Link>
                  <Text fz="xs" pr={6}>
                    Browser Window
                  </Text>
                </Link>
                <Link>
                  <Text fz="xs" pr={6}>
                    Desktop
                  </Text>
                </Link>
                <Link>
                  <Text fz="xs" pr={6}>
                    Application
                  </Text>
                </Link>
              </Stack>
            </Box>
          </Container>
        </Stack>
      </Stack>
      <Drawer
        opened={opened}
        onClose={close}
        title="Authentication"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      >
        {/* Drawer content */}
      </Drawer>
    </>
  );
}

export default PageLayout;
