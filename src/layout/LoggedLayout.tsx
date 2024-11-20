import Navbar from "../components/Navbar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button  from "@mui/material/Button";

const LoggedLayout = ({ onSignOut, children }: { onSignOut: () => void, children: React.ReactNode }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <Container sx={{ flex: 1, mt: 2 }}>
        {children}
      </Container>
    </Box>
  );
};

export default LoggedLayout;
