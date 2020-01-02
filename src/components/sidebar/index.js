import React, { Component } from "react";
import "./sidebar.css";
import SearchBar from "./searchbar";
import PlaceList from "./placeList";

class Sidebar extends Component {
  render() {
    return (
      <div className="container">
        <SearchBar />
        <PlaceList />
      </div>
    );
  }
}

export default Sidebar;
