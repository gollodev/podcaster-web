import { Box, Divider, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Box marginY={"0.8rem"}>
        <Link to="/">
          <Heading as={"h1"} size={"md"} color={"blue.700"}>
            Podcaster
          </Heading>
        </Link>
      </Box>
      <Divider />
    </header>
  );
}
