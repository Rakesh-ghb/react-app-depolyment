import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Context2 from "./context2";

import Rakesh from "./Rakesh";
import MyFrameComponent from "./MyComponentFrame";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyFrameComponent/>
    <Header />
    < Content/>
    <Context2/>
  
    <Footer />
    <Rakesh/> 
  
  </StrictMode>,
);