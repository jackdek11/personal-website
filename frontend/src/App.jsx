import { BrowserRouter } from 'react-router-dom';

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Works,
} from './components';
import img1 from './assets/out.png';

const App = () => {
  const DefaultStyles = {
    background: `url(${img1})`
  }

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary" style={DefaultStyles}>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <div className="relative z-0">
            <Hero />
          </div>
        </div>
        <div className="relative z-0">
          <About />
        </div>
        <div className="relative z-0">
          <Experience />
        </div>
        <div className="relative z-0">
          {/* <Tech /> */}
          <Works />
        </div>
        <div className="relative z-0">
          <Contact />
        </div>
        {/* <Feedbacks /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
