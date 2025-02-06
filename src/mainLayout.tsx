import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Grid,
  GridItem,
  useDisclosure,
} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar";
import { useRef } from "react";
import { burger } from "./components/svg";

const MainLayout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLDivElement>(null);
  return (
    <Grid
      templateColumns={{ base: "1fr", lg: "1.05fr 4fr" }}
      templateRows="1fr"
      h={"100vh"}
    >
      <GridItem overflow={"hidden"}>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          // @ts-ignore
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <Sidebar />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <Box
          pos={"absolute"}
          top={8}
          right={2}
          display={{ base: "block", lg: "none" }}
          onClick={onOpen}
          ref={btnRef}
        >
          {burger}
        </Box>

        <Box display={{ base: "none", lg: "block" }}>
          <Sidebar />
        </Box>
      </GridItem>
      <GridItem
        p={{ base: "1rem", lg: "1.5rem" }}
        bg={"#F6F6F6"}
        overflow={"auto"}
        pr={{ base: "1rem", lg: "2rem" }}
      >
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default MainLayout;
