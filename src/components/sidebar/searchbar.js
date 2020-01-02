import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import "./sidebar.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchPlace } from "../../actions";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.onChangeText = this.onChangeText.bind(this);
  }
  onChangeText(e) {
    const { actionSearchPlace } = this.props;
    actionSearchPlace(e.target.value);
  }

  render() {
    return (
      <TextField
        className="searchBar"
        id="outlined-size-small"
        variant="outlined"
        placeholder="Search"
        onChange={this.onChangeText}
        InputProps={{
          style: {
            background: "white"
          },
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      actionSearchPlace: searchPlace
    },
    dispatch
  )
});

export default connect(null, mapDispatchToProps)(SearchBar);
