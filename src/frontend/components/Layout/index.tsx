import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import Player from "../Payer";

const Layout: React.FC = ({ children }) => {
  return (
    <Grid
      width="100vw"
      height="100vh"
      maxH="100vh"
      color="gray.50"
      templateColumns="241px 1fr"
      templateRows="64px 1fr 90px"
      sx={{
        gridTemplateAreas: `
          "sidebar header"
          "sidebar main"
          "player player"
        `,
      }}
    >
      <GridItem gridArea="sidebar">
        <Sidebar />
      </GridItem>
      <GridItem gridArea="header">
        <Topbar />
      </GridItem>
      <GridItem gridArea="main">{children}</GridItem>
      <GridItem gridArea="player">
        <Player />
      </GridItem>
    </Grid>
  );
};

export default Layout;
