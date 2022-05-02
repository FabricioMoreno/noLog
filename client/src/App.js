import React, { useContext, useState } from "react";
import Header from "./components/header/header.component";
import ListNoLogs from "./components/log_box.js/list-noLogs.component";
import {LogBarContextProvider} from "./contexts/log-bar.context"

function App() {
  return (
    <LogBarContextProvider>
      <div className="App" >
        <Header/>
        <ListNoLogs/>
      </div>
    </LogBarContextProvider>
  );
}

export default App;
