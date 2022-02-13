import React from 'react'
import { Container, Box, Typography, Button } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function TravelInformation() {
     return (
          <>
               <Box sx={{
                    bgcolor: 'background.paper',
                    py: { xs: 2, md: 3, lg: 8 },
               }}>
                    <Container>
                         <Box >
                              <Typography variant="h4" color="text.secondary" sx={{ mb: '2.1875rem', fontWeight: 700, color: "rgb(85, 85, 85)", textAlign: "center" }}>Sydney Travel Information</Typography>
                              <Typography variant="h6" color="text.secondary" sx={{ mb: '2.1875rem', fontWeight: 700, color: "rgb(85, 85, 85)", textAlign: "center" }}>About Sydney</Typography>
                              <Typography variant="body2" color="text.primary" sx={{ mb: '2.1875rem', fontSize: "0.9375rem", color: "rgb(85, 85, 85)" }}>Learn the history of the first British colony in Australia and the Aborigine by visiting Sydney, and enjoy every last tourist destination it has to offer.</Typography>
                              <Box sx={{ textAlign: "center" }}>
                                   <Button variant="text" size="small" color="secondary" sx={{ textTransform: "capitalize" }} endIcon={<ExpandMoreIcon />}>
                                        view more
                                   </Button>
                              </Box>
                         </Box>
                    </Container>
               </Box >
          </>
     )
}
