import React, { useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import { recognition } from "../API/voicerecognition";
{/* import "./style.css"; */}

const App = () => {


  const history = useHistory();
  const [stopReco, setStopReco] = useState(false);

  recognition.onresult = (event) => {
    const command = event.results[0][0].transcript;

    if (command.includes("ir a") || 
        command.includes("go to")) 
      {
      if (command.includes("casa") || 
        command.includes("index")) 
        {
        history.push("/");
      } else if (
        command.includes("gráfica")
      ) {
        history.push("/grafica");
      } else if (
        command.includes("texto") ||
        command.includes("tutorial")
      ) {
        history.push("/texto");
      } else if (command.includes("datos") || 
        command.includes("about us")) 
        {
        history.push("/datos");
      } else if (command.includes("código") ||
        command.includes("about us")) 
        {
        history.push("/codigo");
      }
    } else if (
      command.includes("stop") ||
{/*      command.includes("stop recognition") ||
      command.includes("stop recognizing") ||
      command.includes("stop voice controlling") ||
      command.includes("stop voice control") */}
    ) {
      recognition.stop();
      setStopReco(true);
    }
  };

  recognition.onend = () => {
    if (!stopReco) {
      recognition.start();
    }
  };

{/*  return (
    <div className="app">
      <Navbar /> 
      <Switch>
        <Route exact path="/">
          <h1 className="text-center py-5"> This is Home Page </h1>
        </Route>
        <Route exact path="/tutorials">
          <h1 className="text-center py-5"> This is Tutorials Page </h1>
        </Route>
        <Route exact path="/about">
          <h1 className="text-center py-5"> This is About Page </h1>
        </Route>
        <Route exact path="/grafica">
          <h1 className="text-center py-5"> This is Contact Page </h1>
        </Route>
      </Switch>
    </div>
  ); */}
};

export default App;
