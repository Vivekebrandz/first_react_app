import React from "react";
import { AppBar, Grid, Stack, Toolbar, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Topbar = () => {

  return (
        // <Grid container spacing={2} alignItems="center">
        <>
          <Grid item xs={6}
            container justifyContent={'flex-start'}
          >
            <Typography variant="h7">Logo</Typography>
          </Grid>
          <Grid item xs={6}
            container justifyContent={'flex-end'}
          >            
            {/* <Stack direction={'row'} spacing={2}> */}
              <Typography variant="h7">test</Typography>
            {/* </Stack> */}
          </Grid>
          </>
        // </Grid>
  );
};

export default Topbar;