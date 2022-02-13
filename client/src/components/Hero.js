import React from "react";
import { Box, Container, Typography } from "@mui/material";
// import Drawar from "./Drawar";
import { useTheme } from "@mui/material/styles";
export default function Hero() {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          background: "url(/static/backgroundwebp.webp)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
          textAlign: "center",
          height: {xs:"30vh", md:"40vh", lg:"50vh"},
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: -1,
        }}
      >
        <Container>
          <Typography
            variant="h2"
            sx={{ fontSize: "2.75rem", color: "#ffff", fontWeight: 700, [theme.breakpoints.down("sm")]: {
              fontSize:"25px",} }}
          >
            Hotels & accommodations in <br />
            sydney
          </Typography>
        </Container>
      </Box>
    </>
  );
}
