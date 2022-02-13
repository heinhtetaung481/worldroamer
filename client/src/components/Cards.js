import * as React from 'react';
import Box from '@mui/material/Box';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Grid, Stack, IconButton, Typography, Rating, Button, Checkbox } from '@mui/material'
import Logo from "../assets/heart.png";
export default function Demo() {
     const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
     return (
          <>
               <Typography variant="h6" color="initial" sx={{ mb: 2, fontSize: "1.125rem", color: "rgb(51, 51, 51)" }}>We’ve found 110 properties for you</Typography>
               <Stack spacing={2}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v) => (
                         <Box
                         key={Math.random()}
                              sx={{
                                   display: 'flex',
                                   flexDirection: { xs: 'column', md: 'row' },
                                   alignItems: 'center',
                                   bgcolor: 'background.paper',
                                   overflow: 'hidden',
                                   borderRadius: '0px',
                                   boxShadow: "rgb(184 184 184 / 30%) 0px 0.0625rem 0.625rem",
                                   fontWeight: 'bold',
                                   ".MuiGrid-container": {
                                        mb: "-3px",
                                   }
                              }}
                         >
                              <Grid container spacing={2}>
                                   <Grid item md={3} xs={12}>
                                        <Box
                                             component="img"
                                             sx={{
                                                  height: "190px",
                                                  width: "100%",
                                                  maxHeight: { xs: "190px", md: "190px" },
                                                  maxWidth: { xs: "100%", md: "190px" },
                                             }}
                                             alt="The house from the offer."
                                             src="https://assets.worldroamer.com/properties/travelodge-hotel-sydney-martin-place-sydney/190x190/webp/fe689180-94ec-11ea-a85f-49394342e5bd.jpg"
                                        />
                                   </Grid>
                                   <Grid item md={6} xs={12}>
                                        <Box sx={{mx:{xs:2, md:0}, my:{xs:0, md:2}}}>
                                             <Stack
                                                  direction="row"
                                                  justifyContent="space-between"
                                                  alignItems="center"
                                                  spacing={2}
                                             >
                                                  <Box component="span" >
                                                       <Typography sx={{ fontSize: 16, mt: 1, color: "rgb(85, 85, 85)", fontWeight: 600 }} variant="body1" color="initial">Travelodge Hotel Sydney Martin Place</Typography>
                                                  </Box>
                                                  <Box component="span" sx={{ color: 'primary.main' }}>
                                                       <IconButton variant="text" size="small">
                                                            <img src={Logo} alt="logo" width="100%" height="19px" />
                                                       </IconButton>
                                                  </Box>
                                             </Stack>
                                             <Stack
                                                  direction="row"
                                                  justifyContent="space-between"
                                                  alignItems="center"
                                                  spacing={2}
                                             >
                                                  <Box component="span" >
                                                       <Rating name="size-small" defaultValue={3} size="small" readOnly />
                                                  </Box>
                                                  <Box component="span" sx={{ color: 'primary.main' }}>
                                                       <Typography sx={{ mt: 1, color: "rgb(141, 141, 141)", display: "flex", alignItems: "center", fontSize: " 0.8125rem", svg: { fill: 'rgb(141, 141, 141)', fontSize: " 0.8125rem", mr: 1 } }} variant="body2" color="initial"><LocationOnIcon />165 Phillip Street, Sydney,  200...</Typography>
                                                  </Box>
                                             </Stack>
                                             <Typography variant="body2" color="initial" sx={{ fontSize: "0.6875rem", mt: 4 }}>Property currently has no reviews</Typography>
                                        </Box>
                                   </Grid>
                                   <Grid item md={3} xs={12}>
                                        <Stack
                                             spacing={1}
                                             sx={{ mt:{xs:0,md:5}, p: 2, button: { fontSize: "0.75rem", fontWeight: 600, textTransform: "capitalize", py: "10px", span: { p: 0, svg: { fill: "#ffff" } } } }}
                                        >
                                             <Button variant="contained" color="success" sx={{bgcolor:"rgb(51, 157, 72)"}} fullWidth>
                                                  Show price
                                             </Button>
                                             <Button variant="contained" color="secondary" startIcon={<Checkbox {...label} />} fullWidth >

                                                  Show price
                                             </Button>
                                        </Stack>
                                   </Grid>
                              </Grid>
                         </Box>

                    ))}
               </Stack>
               <Box sx={{textAlign:"center", my:7, button:{width:"21.25rem"}}}>
                    <Button size='large' variant="outlined" color="secondary">
                      Load more
                    </Button>
               </Box>
          </>
     );
}
