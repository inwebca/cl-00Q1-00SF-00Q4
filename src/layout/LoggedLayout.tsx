import Navbar from "../components/Navbar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { ReactNode } from "react";

const LoggedLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <Container sx={{ flex: 1, mt: 2 }}>{children}</Container>
    </Box>
  );
};

export default LoggedLayout;
