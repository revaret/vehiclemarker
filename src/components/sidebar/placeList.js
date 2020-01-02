import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import Divider from "@material-ui/core/Divider";
import { renderColor } from "../../utils";
import { setMarker } from "../../actions";
import { data } from "../../stub";

class PlaceList extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      selectedItem: data[0]
    };
  }

  handleSelect(event, item) {
    const { actionSetMarker } = this.props;
    actionSetMarker(item);
    this.setState({ selectedItem: item });
  }
  render() {
    const { list } = this.props;
    return (
      <List>
        {list.map(item => (
          <span>
            <ListItem
              button
              onClick={e => this.handleSelect(e, item)}
              selected={this.state.selectedItem === item}
            >
              <ListItemIcon>
                <FiberManualRecordIcon
                  style={{ color: renderColor(item.status) }}
                />
              </ListItemIcon>
              <ListItemText primary={item.name} secondary={item.number} />
            </ListItem>
            <Divider />
          </span>
        ))}
      </List>
    );
  }
}

const mapStateToProps = store => ({
  list: store.searchPlaceReducer
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      actionSetMarker: setMarker
    },
    dispatch
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaceList);
