import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar";

const MainLayout = () => {
  return (
    <Grid templateColumns="1.05fr 4fr" templateRows="1fr" h={"100vh"}>
      <GridItem>
        <Sidebar />
      </GridItem>
      <GridItem p={"1.5rem"} bg={"#F6F6F6"}>
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default MainLayout;
