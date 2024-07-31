import { useState } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Model from "./components/model/Model";
import Services from "./components/services/Services";
import Technologies from "./components/Technologies/Technologies";
import Work from "./components/work/Work";
import { useLayoutEffect } from "react";

const App = () => {
  const [isModel, setIsModel] = useState(true);
  // const handleModelToggle = () => setIsModel(!isModel);

  useLayoutEffect(() => {
    const displayModel = setTimeout(() => {
      setIsModel(false);
    }, 5000);
    return () => clearTimeout(displayModel);
  }, [isModel]);

  return (
    <>
      {
        isModel ? (
          <Model />
        ) : (
          <div className="bg-[#ECF0F3] px-8 sm:px-16 lg:px-36">
            <Header />
            <Hero />
            <About />
            <Services />
            <Technologies />
            <Work />
            <Contact />
          </div>
        )
        // Close the model div when the button is clicked or when the user closes it by clicking outside the div.  // Close the model div when the user closes it by clicking outside the div.  // Close the model div when the user closes it by clicking outside the div.  // Close the model div when the user closes it by clicking outside the div.  // Close the model div when the user closes it
      }
    </>
  );
};

export default App;
