import { useState } from 'react';
import BannerCarousel from './BannerCarousel';

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
      <BannerCarousel/>
      <h1>Hello World!</h1>
      <Button name="Click me"/>
    </div>
  );
}

export default Home;