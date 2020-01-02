import React from "react";
import Grid from "@material-ui/core/Grid";
import "./App.css";
import Sidebar from "./components/sidebar";
import MapCanvas from "./components/map";

function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs>
          <MapCanvas />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
