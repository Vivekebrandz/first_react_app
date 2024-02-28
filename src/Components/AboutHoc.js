import { Typography, Stack, Card, CardContent } from "@mui/material";

const AboutHoc = ({username}) => {
  return (
    <Card sx={{ maxWidth: 365, bgcolor: 'green', margin: '15px', boxShadow: '0px 2px 5px 2px #00000080'}}>
      <CardContent>
        <Typography style={{padding: '10px'}}>Hi, {username}</Typography>
      </CardContent>
    </Card>
  );
};

export const AboutEnhanced = (AboutHoc) => {
  return (props) => {
    return (
      <Stack direction="row" spacing={2}>
        <label style={{color: '#fff', position: 'absolute', margin: '0px 12px', padding: '1px 8px', background: 'red', borderRadius: '8px'}}>Baby</label>
        <AboutHoc username={props.username}/>
      </Stack>
    );
  };
};

export default AboutHoc;