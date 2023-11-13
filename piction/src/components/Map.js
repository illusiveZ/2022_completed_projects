import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 41.41,
      lng: -75.66,
    },
    zoom: 11,
  };

  render() {
    return (
      <div className="map" style={{ height: "400px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={41.411835}
            lng={-75.665245}
            text="Our Location"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
