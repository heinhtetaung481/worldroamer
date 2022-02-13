import React from 'react'
import { Box, Container, Grid } from "@mui/material";
import Filters from './Filters';
import { useTheme } from "@mui/material/styles";
import Cards from './Cards';
export default function PropertySearch() {
     const theme = useTheme();
     return (
          <Box sx={{ py: 3 }}>
               <Container maxWidth="lg" >
                    <Grid container spacing={3}>
                         <Grid item lg={3} md={12} xs={12} sx={{ borderRight: "2px solid #eee", px: 1 }}>
                              <Box sx={{
                                   display: "block",
                                   [theme.breakpoints.down("sm")]: { display: "none"}
                              }}>
                              <Filters />
                              </Box>
                         </Grid>
                         <Grid item lg={9} md={12} xs={12} >
                              <Cards />
                         </Grid>
                    </Grid>
               </Container>
          </Box>
     )
}
