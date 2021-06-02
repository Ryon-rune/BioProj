import React from "react";
import "./App.css";
import { HelmetProvider } from "react-helmet-async";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

// Navigator
import Navigator from "./navigation/AppNavigator";

const App = function App() {
  return (
    <HelmetProvider>
      <Navigator />
    </HelmetProvider>
  );
};

export default App;
