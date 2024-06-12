import { useState } from 'react';
import BannerCarousel from './BannerCarousel';
import plane from '../images/plane_1.gif';
import TypewriterComponent from 'typewriter-effect';

const Button = (params) => {
  const [buttonName, setButtonName] = useState(params.name);
  const [button, setButton] = useState(false);

  const toggleButton = () => {
    setButton(!button);
  };

  return (
    <div><button onClick={toggleButton}>{button ? `${buttonName} X`:buttonName}</button></div>
  );
};

function Home() {
  return (
    <div className="home">
      <div className="container">
        <BannerCarousel/>
        <img src={plane} alt="Overlay" className="overlay-image fly-right" />
      </div>
      {/* <Typewriter
        options={{
          strings: ['Hello', 'World'],
          autoStart: true,
          loop: true,
        }}
      /> */}
      <h1>
        I am 
      <TypewriterComponent 
        options={{
          strings: ['Vivek', 'a software engineer', 'web developer'],
          autoStart: true,
          loop: true,
        }}
        />
      </h1>
      {/* <h1>Hello World!</h1> */}
      <Button name="Click me"/>
    </div>
  );
}

export default Home;