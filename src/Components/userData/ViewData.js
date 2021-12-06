import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));
export const ViewData = () => {
  let arr = [];
  arr.push(JSON.parse(localStorage.getItem("singleUser")));
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        {arr.map((val) => (
          <Grid
            key={val.id}
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={4}>
              <Item>id:{val.id}</Item>
              <Item>
                <img
                  src={val.picture}
                  style={{ height: 210 }}
                  alt="data not found"
                />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                {val.title} {val.firstName} {val.lastName}
              </Item>
              <Item>
                <b>Gender :</b>
                {val.gender}
              </Item>
              <Item>
                <b> Date of birth:</b>
                {val.dateOfBirth}
              </Item>
              <Item>
                <b>Register date:</b>
                {val.registerDate}
              </Item>
              <Item>
                <b>Email:</b>
                {val.email}
              </Item>
              <Item>
                <b>Phone:</b>
                {val.phone}
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>Address</Item>
              <Item>
                <b>State:</b>
                {val.location.state}
              </Item>
              <Item>
                <b>Street:</b>
                {val.location.street}
              </Item>
              <Item>
                <b>city:</b>
                {val.location.city}
              </Item>
              <Item>
                <b>country:</b>
                {val.location.country}
              </Item>
              <Item>
                <b>Timezone:</b>
                {val.location.timezone}
              </Item>
            </Grid>
          </Grid>
        ))}
      </Box>
    </div>
  );
};
export default ViewData;
