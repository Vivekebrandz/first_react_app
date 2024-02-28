import { Typography } from "@mui/material";
import AboutHoc, {AboutEnhanced} from "./AboutHoc";

const About = () => {

  const names = ['Vivek', 'Atharv', 'Vikrant', 'Ramesh', 'Suresh', 'Ajeet', 'Manoj', 'Raja'];
  // console.log(names);

  const AboutHocEnhanced = AboutEnhanced(AboutHoc);
  return (
    <>
      {
        names.map((element, index) => (
          element === 'Atharv' ? <AboutHocEnhanced key={index} username={element} />
          :<AboutHoc key={index} username={element} />
        ))
      }
    </>
  );
};

export default About;