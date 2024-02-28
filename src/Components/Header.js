import Navbar from "./Navbar";
import Topbar from "./Topbar";
import { AppBar, Grid, Toolbar } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="sticky" direction="row">
      <Toolbar>
        <Grid spacing={2} direction="row" alignItems="center" container>
          <Topbar/>
          <Navbar/> 
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;