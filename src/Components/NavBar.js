import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
function NavBar() {
  const history = useHistory();
  const logOut = () => {
    history.push("/");
    localStorage.removeItem("auth");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>

          <Button color="inherit" onClick={() => history.push("/addUser")}>
            AddUser
          </Button>
          <Button color="inherit" onClick={() => logOut()}>
            LogOut
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default NavBar;
