import { Box, Container, Grid, Stack, Typography, Divider, List, ListItem, Link } from '@mui/material'
import React from 'react'
import Visa from "../assets/visa.svg";
import Master from "../assets/master.png";
import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import { useTheme } from "@mui/material/styles";

export default function Footer() {
     const theme = useTheme();
     return (
          <>
               <Box sx={{
                    bgcolor: 'hsla(0,0%,0%,0.8)',
                    py: { xs: 2, md: 3, lg: 6 },
                   
               }}>
                    <Container>
                         <Grid container spacing={2}>
                              <Grid item md={3} xs={12}>
                                   <Box sx={{
                                        [theme.breakpoints.down("sm")]: { textAlign: "center",}
                                   }}>
                                        <Box>
                                        <img src="https://www.worldroamer.com/static/white-logo-083f539c6a8f5227bfde956c0d10b0e1.svg" alt="logo" width="78px" height="53px" />
                                        </Box>
                                        <Box sx={{mt:{lg:20, sm:2}}}>
                                             <Typography variant="h6" color="common.white" sx={{ fontWeight: 700 }}>Payment Partners</Typography>
                                             <Stack direction="row" alignItems="center" spacing={1} sx={{  [theme.breakpoints.down("sm")]: { justifyContent: "center",}}}>
                                                  <img src="https://www.worldroamer.com/static/white-mastercard-d6da7be62d790308b49e3671f8323624.svg" alt="logo" width="31px" height="24px" />
                                                  <img src="https://www.worldroamer.com/static/white-visa-checkout-4cea067a9afbcab86fc8a4545380b8f1.svg" alt="logo" width="43px" height="14px" />
                                                  <Divider
                                                       orientation="vertical"
                                                       flexItem
                                                       light
                                                       sx={{ mx: 1, borderColor: "#ffff" }}
                                                  />
                                                  <img src={Visa} alt="logo" width="40px" height="21px" />
                                                  <img src={Master} alt="logo" width="78px" height="19px" />
                                             </Stack>
                                        </Box>
                                   </Box>
                              </Grid>
                              <Grid item md={3} xs={12}>
                                   <Typography variant="h6" color="common.white" sx={{ fontWeight: 600, ml: 2 }}>WorldRoamer<sup>®</sup> Help</Typography>
                                   <List>
                                        <ListItem>
                                             <Link href="#" underline="none" color="common.white">FAQ</Link>
                                        </ListItem>
                                        <ListItem>
                                             <Link href="#" underline="none" color="common.white">Customer Service</Link>
                                        </ListItem>
                                        <ListItem>
                                             <Link href="#" underline="none" color="common.white">Give Website Feedback</Link>
                                        </ListItem>
                                   </List>
                                   <Typography variant="h6" color="common.white" sx={{ fontWeight: 600, ml: 2 }}>Opportunities</Typography>
                                   <List>
                                        <ListItem>
                                             <Link href="#" underline="none" color="common.white">List Property</Link>
                                        </ListItem>
                                        <ListItem>
                                             <Link href="#" underline="none" color="common.white">Partner with Us</Link>
                                        </ListItem>
                                   </List>
                              </Grid>
                              <Grid item md={3} xs={12}>
                                   <Typography variant="h6" color="common.white" sx={{ fontWeight: 600, ml: 2 }}>About WorldRoamer<sup>®</sup></Typography>
                                   <List>
                                        <ListItem>
                                             <Link href="#" underline="none" color="common.white">Press Center</Link>
                                        </ListItem>
                                        <ListItem>
                                             <Link href="#" underline="none" color="common.white">Terms of Use</Link>
                                        </ListItem>
                                        <ListItem>
                                             <Link href="#" underline="none" color="common.white">Privacy Policy</Link>
                                        </ListItem>
                                        <ListItem>
                                             <Link href="#" underline="none" color="common.white">Careers</Link>
                                        </ListItem>
                                        <ListItem>
                                             <Link href="#" underline="none" color="common.white">Travel Deals & Updates</Link>
                                        </ListItem>
                                   </List>
                              </Grid>
                              <Grid item md={3} xs={12}>
                                   <Typography variant="h6" color="common.white" sx={{ fontWeight: 600, ml: 2 }}>Find us on</Typography>
                                   <List>
                                        <ListItem>
                                             <img src={Facebook} alt="logo" width="24px" height="24px" />
                                             <Link href="#" underline="none" color="common.white" sx={{ ml: 1 }}>Press Center</Link>
                                        </ListItem>
                                        <ListItem>
                                             <img src={Instagram} alt="logo" width="26px" height="26px" />
                                             <Link href="#" underline="none" color="common.white" sx={{ ml: 1 }}>Terms of Use</Link>
                                        </ListItem>
                                   </List>
                                   <Typography variant="h6" color="common.white" sx={{ fontWeight: 600, ml: 2 }}>WorldRoamer Hotline Operating Hours:</Typography>
                                   <List>
                                        <ListItem>
                                             <Typography variant="body1" color="common.white">+65 3138 4636</Typography>
                                        </ListItem>
                                        <ListItem>
                                             <Typography variant="body1" color="common.white">Monday to Friday: 9 am - 6 pm (Singapore time)</Typography>
                                        </ListItem>
                                   </List>
                              </Grid>
                         </Grid>
                         <Box sx={{ m: "3.4375rem 4.0625rem 0px", p: "2px", backgroundImage: " linear-gradient(to right, rgb(0, 185, 212), rgb(0, 182, 211) 22%, rgb(0, 114, 188) 44%, rgb(151, 39, 128) 73%, rgb(255, 0, 0))" }} />
                         <Typography variant="body1" color="common.white" sx={{ textAlign: "center", my: 2 }}>Copyright © 2018–2021 WorldRoamer®. WorldRoamer Pte. Ltd. All rights reserved.<br /> STB Licence: TA03204 </Typography>
                    </Container>
               </Box>
          </>
     )
}
