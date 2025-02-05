import { Box } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

type PageTitleProps = PropsWithChildren & {};

const PageTitle: FC<PageTitleProps> = ({ children }) => {
  return (
    <Box
      bg={"#FFF3E0"}
      fontSize={"5rem"}
      fontWeight={"black"}
      display={"grid"}
      placeContent={"center"}
      h={"100vh"}
    >
      {children}
    </Box>
  );
};

export default PageTitle;
