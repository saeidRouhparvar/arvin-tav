import {
  Avatar,
  Box,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import Icon from "./icons/icon";
import { search } from "./icons/icons";
import { ball, burger, callCenter, puzzel } from "./svg";


const Topbar = () => {
  return (
    <Flex
      justify={"space-between"}
      align={"center"}
      py={2}
      direction={{ base: "column",lg:'row' }}
      gap={6}
    >
      <Flex gap={4} align={"center"}>
        <Box  visibility={'hidden'} display={{lg:'none'}}>{burger}</Box>

        <InputGroup w={{ base: "90vw", lg: "40vw" }}>
          <InputRightElement pointerEvents="none" mt={1} ps={6}>
            <Icon color="#757575" d={search} w={18} h={18} />
          </InputRightElement>
          <Input
            border={"1px solid #C0C0C0"}
            borderRadius={"200px"}
            px={14}
            size={"lg"}
            placeholder="جستجو"
            backgroundColor={"white"}
          />
        </InputGroup>
      </Flex>

      <Flex gap={4}>
        <IconButton
          w={"3rem"}
          h={"3rem"}
          isRound={true}
          variant="outline"
          borderColor={"#C0C0C0"}
          aria-label="Done"
          fontSize="20px"
          icon={puzzel}
        />
        <IconButton
          w={"3rem"}
          h={"3rem"}
          isRound={true}
          variant="outline"
          borderColor={"#C0C0C0"}
          aria-label="Done"
          fontSize="20px"
          icon={callCenter}
        />
        <IconButton
          w={"3rem"}
          h={"3rem"}
          isRound={true}
          variant="outline"
          borderColor={"#C0C0C0"}
          aria-label="Done"
          fontSize="20px"
          icon={ball}
        />
        <Box h={"50px"} w={"1px"} backgroundColor={"#757575"} mx={4}></Box>
        <Flex align={"center"} gap={2}>
          <Avatar src={"/avatar.png"} />
          <Box>حسین برزگر</Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Topbar;
