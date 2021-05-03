import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import Navbar from "./components/navbar";
import Routes from "./routes";
// import App from "./app.js";

const App = () => {
  return (
    <div>
      {/* <App /> */}
      <Navbar />
      <Routes />
      <GlobalStyles />
    </div>
  );
};

export default App;
