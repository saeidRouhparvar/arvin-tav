import { Box, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { routes } from "../routes";
import Icon from "./icons/icon";
import logo from '../../public/logo.png'

const Sidebar = () => {
  const navigate = useNavigate();

  const router = routes
    ?.filter((i: any) => i.path === "/")[0]
    .children?.filter((item: any) => item?.showInNav === true);
  return (
    <Flex
      bg={"white"}
      overflow={"auto"}
      h={'100vh'}
      display={"flex"}
      flexDirection={"column"}
      gap={"1.5rem"}
      p="1.5rem"
      className="no-scroll"
    >
      <Flex as="img" src={logo} w={'128px'} m={'auto'}/>
      {router.map((i) => (
        <Flex
          align={"center"}
          gap={"1rem"}
          cursor={"pointer"}
          color={"#757575"}
          fontSize={"1.125rem"}
          onClick={() => navigate(i.path)}
        >
          <Box>
            <Icon d={i?.icon}  />
          </Box>
          <Box>{i.name}</Box>
        </Flex>
      ))}
    </Flex>
  );
};

export default Sidebar;
