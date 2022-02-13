import React from "react";
import { Typography } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
// import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
// import Cards from './Cards';

export default function Filters() {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine } = state;
  // const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
    <>
      <Typography
        variant="subtitle1"
        color="text.secondary"
        fontWeight={800}
        mb={2}
      >
        See on Map
      </Typography>
      <a href="/">
        <img src="/static/download.svg" alt="maps" width="100%" />
      </a>
      {["Sort by", "Popular Filters", "Star Rating", "Property Type", "Bed Preference", "Facilities", "Room Amenities"].map((v) => (
        <section key={v}>
          <FormControl
            sx={{ m: 3 }}
            component="fieldset"
            variant="standard"
          >
            <FormLabel component="legend" sx={{ fontWeight: 600 }}>{v}</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={gilad}
                    onChange={handleChange}
                    name="gilad"
                  />
                }
                label="Gilad Gray"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={jason}
                    onChange={handleChange}
                    name="jason"
                  />
                }
                label="Jason Killian"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={antoine}
                    onChange={handleChange}
                    name="antoine"
                  />
                }
                label="Antoine Llorca"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={antoine}
                    onChange={handleChange}
                    name="antoine"
                  />
                }
                label="Antoine Llorca"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={antoine}
                    onChange={handleChange}
                    name="antoine"
                  />
                }
                label="Antoine Llorca"
              />
            </FormGroup>
            {/* <FormHelperText>Be careful</FormHelperText> */}
          </FormControl>
        </section>
      ))}
    </>
  );
}
