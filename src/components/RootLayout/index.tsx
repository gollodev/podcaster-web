import { Box, Container, Stack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "../Header";

export default function RootLayout() {
  return (
    <Container maxW={"container.lg"}>
      <Stack spacing={12}>
        <Box mt={6}>
          <Header />
        </Box>
        <Outlet />
      </Stack>
    </Container>
  );
}
