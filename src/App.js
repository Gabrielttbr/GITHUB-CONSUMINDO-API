import React from "react";
// Components
import Main from "./components/main/index";
import Header from "./components/header";
//Hooks
import { UseGithub } from "./hooks/hooks";

const App = () => {
  const { githubState } = UseGithub();
  return (
    <div className="App">
      {githubState.hasUser === false ? (
        <Header/>
      ): (
        <Main/>
        )

      }
    </div>
  );
}

export default App;
