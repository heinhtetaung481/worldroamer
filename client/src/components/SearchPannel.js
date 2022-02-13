import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import Drawar from "./Drawar";
import TextField from "@mui/material/TextField";
import DateRangePicker from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { useTheme } from "@mui/material/styles";
import Popover from "@mui/material/Popover";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Container,
  Grid,
  Box,
  InputAdornment,
  Button,
  Typography,
  IconButton,
} from "@mui/material";

export default function CustomizedInputBase() {
  const theme = useTheme();
  const [value, setValue] = React.useState([null, null]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [colorChange, setColorchange] = React.useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 400) {
      setColorchange(true);
    }
    else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box sx={{
      mt: "-40px",
      zIndex: 1,
      position: "sticky",
      top: 0,
      py: 1,
      bgcolor: `${colorChange ? 'rgb(64, 0, 92)' : 'transparent'}`,
      [theme.breakpoints.down("sm")]: { position: "static",}
    }}>
      <Container>
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={11}>
            <Grid container spacing={1}>
              <Grid item lg={4} md={4} xs={12}>
                <Paper
                  component="form"
                  sx={{
                    boxShadow: "rgb(184 184 184 / 30%) 0px 0.1875rem 0.4375rem",
                    height: "68px",
                    px: 2,
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    alt="search"
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTdweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTcgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5TZWFyY2g8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iU2VhcmNoIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMi4wMDAwMDAsIC0yLjAwMDAwMCkiIHN0cm9rZT0iIzU1NTU1NSIgc3Ryb2tlLXdpZHRoPSIwLjkiPgogICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5LjMwMDAwMCwgOS4zMDAwMDApIHJvdGF0ZSgtNTAuMDAwMDAwKSB0cmFuc2xhdGUoLTkuMzAwMDAwLCAtOS4zMDAwMDApICIgY3g9IjkuMyIgY3k9IjkuMyIgcj0iNi4zIj48L2NpcmNsZT4KICAgICAgICAgICAgPHBhdGggZD0iTTE2LjUzOTEyLDEyLjIyNDM0MjkgTDE2LjUzOTEyLDE4LjUyNDM0MjkiIGlkPSJMaW5lLTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LjUzOTEyMCwgMTUuMzc0MzQzKSByb3RhdGUoLTUwLjAwMDAwMCkgdHJhbnNsYXRlKC0xNi41MzkxMjAsIC0xNS4zNzQzNDMpICI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
                    width={18}
                  />
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Enter destination or hotel name"
                    inputProps={{ "aria-label": "search google maps" }}
                  />
                </Paper>
              </Grid>
              <Grid item lg={4} md={4} xs={12}>
                <Paper
                  sx={{
                    height: "68px",
                    boxShadow: "rgb(184 184 184 / 30%) 0px 0.1875rem 0.4375rem",
                    px: 2,
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateRangePicker
                      startText=""
                      endText=""
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(startProps, endProps) => (
                        <React.Fragment>
                          <TextField
                            variant="standard"
                            sx={{
                              ".MuiInputBase-root": {
                                backgroundColor: "transparent",
                                "::before": {
                                  borderBottom: "none !important",
                                },
                                "::after": {
                                  borderBottom: "none",
                                },
                              },
                            }}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <img
                                    alt="search"
                                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyMXB4IiB2aWV3Qm94PSIwIDAgMjQgMjEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5DaGVjayBJbjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJDaGVjay1JbiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Ikdyb3VwLTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMDAwMDAwLCAwLjAwMDAwMCkiIHN0cm9rZT0iIzU1NTU1NSI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOCwxNyBDMTgsMTguNjU2ODU0MiAxNi42NTY4NTQyLDIwIDE1LDIwIEwzLDIwIEMxLjM0MzE0NTc1LDIwIDAsMTguNjU2ODU0MiAwLDE3IEwwLDUgQzAsMy4zNDMxNDU3NSAxLjM0MzE0NTc1LDIgMywyIEwxNSwyIEMxNi42NTY4NTQyLDIgMTgsMy4zNDMxNDU3NSAxOCw1IEwxOCwxMCIgaWQ9IlBhdGgiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTQsMC41IEw0LDQuNSIgaWQ9IkxpbmUtNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik05LDAuOTQ4NDg3NTQ3IEw5LDE0LjA3NTg5MTUiIGlkPSJMaW5lLTUtQ29weS0yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkuMDAwMDAwLCA3LjU2MzcwMikgcm90YXRlKC05MC4wMDAwMDApIHRyYW5zbGF0ZSgtOS4wMDAwMDAsIC03LjU2MzcwMikgIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNCwwLjUgTDE0LDQuNSIgaWQ9IkxpbmUtNS1Db3B5IiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTE0LjA2MzU2LDEzLjQ3MzI0IEwyMi41MTQxNiwxMy40NzMyNCIgaWQ9IlN0cm9rZS0xIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4KICAgICAgICAgICAgPHBvbHlsaW5lIGlkPSJTdHJva2UtNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwb2ludHM9IjE1LjgxOSAxMiAxNCAxMy40ODk2IDE1LjgxOSAxNS4wNDgyIj48L3BvbHlsaW5lPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
                                    width={24}
                                  />
                                </InputAdornment>
                              ),
                            }}
                            {...startProps}
                            placeholder="check in"
                          />
                          <Divider
                            orientation="vertical"
                            flexItem
                            sx={{ mx: 2 }}
                          />
                          <TextField
                            variant="standard"
                            sx={{
                              ".MuiInputBase-root": {
                                backgroundColor: "transparent",
                                "::before": {
                                  borderBottom: "none !important",
                                },
                                "::after": {
                                  borderBottom: "none",
                                },
                              },
                            }}
                            {...endProps}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <img
                                    alt="search"
                                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyMXB4IiB2aWV3Qm94PSIwIDAgMjQgMjEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5DaGVjayBPdXQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iQ2hlY2stT3V0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iR3JvdXAtMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS4wMDAwMDAsIDAuMDAwMDAwKSIgc3Ryb2tlPSIjNTU1NTU1Ij4KICAgICAgICAgICAgPHBhdGggZD0iTTE4LDE3IEMxOCwxOC42NTY4NTQyIDE2LjY1Njg1NDIsMjAgMTUsMjAgTDMsMjAgQzEuMzQzMTQ1NzUsMjAgMCwxOC42NTY4NTQyIDAsMTcgTDAsNSBDMCwzLjM0MzE0NTc1IDEuMzQzMTQ1NzUsMiAzLDIgTDE1LDIgQzE2LjY1Njg1NDIsMiAxOCwzLjM0MzE0NTc1IDE4LDUgTDE4LDEwIiBpZD0iUGF0aCI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNNCwwLjUgTDQsNC41IiBpZD0iTGluZS01IiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTksMC45NDg0ODc1NDcgTDksMTQuMDc1ODkxNSIgaWQ9IkxpbmUtNS1Db3B5LTIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOS4wMDAwMDAsIDcuNTYzNzAyKSByb3RhdGUoLTkwLjAwMDAwMCkgdHJhbnNsYXRlKC05LjAwMDAwMCwgLTcuNTYzNzAyKSAiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTE0LDAuNSBMMTQsNC41IiBpZD0iTGluZS01LUNvcHkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9wYXRoPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTguNTAwMDAwLCAxNC4wMDAwMDApIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTE4LjUwMDAwMCwgLTE0LjAwMDAwMCkgdHJhbnNsYXRlKDE0LjAwMDAwMCwgMTIuMDAwMDAwKSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLjA2MzU2LDEuNDczMjQgTDguNTE0MTYsMS40NzMyNCIgaWQ9IlN0cm9rZS0xIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cG9seWxpbmUgaWQ9IlN0cm9rZS00IiBwb2ludHM9IjEuODE5IDQuMjE4ODQ3NDllLTE1IDIuMDcyNzg2MzllLTEzIDEuNDg5NiAxLjgxOSAzLjA0ODIiPjwvcG9seWxpbmU+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="
                                    width={24}
                                  />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </React.Fragment>
                      )}
                    />
                  </LocalizationProvider>
                </Paper>
              </Grid>
              <Grid item lg={3} md={3} xs={12}>
                <Paper
                  sx={{
                    height: "68px",
                    boxShadow: "rgb(184 184 184 / 30%) 0px 0.1875rem 0.4375rem",
                    px: 2,
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  aria-describedby={id}
                  onClick={handleClick}
                >
                  <img
                    alt="search"
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyMXB4IiB2aWV3Qm94PSIwIDAgMjIgMjEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5HdWVzdHM8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iR3Vlc3RzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjAwMDAwMCwgMS4wMDAwMDApIiBzdHJva2U9IiM1NTU1NTUiIHN0cm9rZS13aWR0aD0iMC45Ij4KICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgY3g9IjcuNTYiIGN5PSIzLjYiIHI9IjMuNiI+PC9jaXJjbGU+CiAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwtQ29weS0yIiBjeD0iMTUuNjYiIGN5PSI0LjUiIHI9IjIuNyI+PC9jaXJjbGU+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNS4yMSw5IEMxNy45NDM4MDk1LDkgMjAuMTYsMTEuMjc5MzkzOSAyMC4xNiwxNC4wOTExNjg4IEMyMC4xNiwxNS41ODQ5NTQgMTcuMzY1ODQ1NywxNi4yODUxNSAxNC43NDYzODUyLDE2LjE5MTc1NjggQzE0LjI4MDE4MzUsMTkuODY1NDU2MiAwLjM2LDE5LjgwMTU5MDEgMC4zNiwxNi4wMDAzNTcxIEMwLjM2LDEyLjEzNDE2NjYgMy41ODM1NDk4LDkgNy41Niw5IEM5LjE2MDc0NjM4LDkgMTAuNjM5NDgzOSw5LjUwNzg5NzQ3IDExLjgzNTAzOTUsMTAuMzY2OTg4NSBDMTIuNzE4MTU3NSw5LjUxOTMxMTIgMTMuOTA1MTE0NSw5IDE1LjIxLDkgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
                    width={24}
                  />
                  <Box sx={{ width: "100%", ml: 1.5 }}>
                    <Typography
                      variant="body2"
                      color="initial"
                      fontWeight={700}
                    >
                      2 Adults
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.primary"
                      fontWeight={400}
                    >
                      1 room
                    </Typography>
                  </Box>
                </Paper>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  sx={{ mt: 2 }}
                >
                  <Box px={2} py={3}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        minWidth: 250,
                      }}
                    >
                      <Typography variant="body2" color="initial">
                        Rooms
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          pb: 2,
                        }}
                      >
                        <IconButton
                          aria-label="delete"
                          size="small"
                          color="warning"
                          sx={{ p: "2px", border: 1, borderRadius: "2px" }}
                        >
                          {" "}
                          <RemoveIcon fontSize="inherit" />
                        </IconButton>
                        <Typography variant="body2" color="initial" mx={1}>
                          1
                        </Typography>
                        <IconButton
                          aria-label="delete"
                          size="small"
                          color="warning"
                          sx={{ p: "2px", border: 1, borderRadius: "2px" }}
                        >
                          {" "}
                          <AddIcon fontSize="inherit" />
                        </IconButton>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography variant="body2" color="initial">
                        Adults
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          pb: 2,
                        }}
                      >
                        <IconButton
                          aria-label="delete"
                          size="small"
                          color="warning"
                          sx={{ p: "2px", border: 1, borderRadius: "2px" }}
                        >
                          {" "}
                          <RemoveIcon fontSize="inherit" />
                        </IconButton>
                        <Typography variant="body2" color="initial" mx={1}>
                          1
                        </Typography>
                        <IconButton
                          aria-label="delete"
                          size="small"
                          color="warning"
                          sx={{ p: "2px", border: 1, borderRadius: "2px" }}
                        >
                          {" "}
                          <AddIcon fontSize="inherit" />
                        </IconButton>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography variant="body2" color="initial">
                        Children
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          pb: 2,
                        }}
                      >
                        <IconButton
                          aria-label="delete"
                          size="small"
                          color="warning"
                          sx={{ p: "2px", border: 1, borderRadius: "2px" }}
                        >
                          {" "}
                          <RemoveIcon fontSize="inherit" />
                        </IconButton>
                        <Typography variant="body2" color="initial" mx={1}>
                          1
                        </Typography>
                        <IconButton
                          aria-label="delete"
                          size="small"
                          color="warning"
                          sx={{ p: "2px", border: 1, borderRadius: "2px" }}
                        >
                          {" "}
                          <AddIcon fontSize="inherit" />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>
                </Popover>
              </Grid>
              <Grid item lg={1} md={1} xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{ height: "68px",borderRadius: "8px", }}
                  color="secondary"
                >
                  Search
                </Button>
              </Grid>

            </Grid>
          </Grid>

        </Grid>
        <Box sx={{
          display: "none",
          [theme.breakpoints.down("sm")]: {
            display: "block",
            position: "fixed",
            top: "70px",
            right: 0,
            py: 1,
            px: 2,
            bgcolor: "#ffff",
            borderRadius: "20px 0px 0px 20px",
            zIndex: 12,
          },
        }}>
          <Drawar />
        </Box>
      </Container>
    </Box>
  );
}
