import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import { connect } from "react-redux";
import { renderColor } from "../../utils";

class MapCanvas extends Component {
  static defaultProps = {
    center: {
      lat: 25.2532,
      lng: 55.3657
    },
    zoom: 12
  };

  render() {
    const {
      data: {
        status,
        location: { lat, long }
      }
    } = this.props;
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBtdcUbLmx7Ox7Cx9ki8DiZnK2zM0-XH40" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnnouncementIcon
            lat={lat}
            lng={long}
            style={{ fontSize: 40, color: renderColor(status) }}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  data: store.setMarkerReducer
});

export default connect(mapStateToProps, null)(MapCanvas);
