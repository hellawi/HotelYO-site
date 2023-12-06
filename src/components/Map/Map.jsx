import { GoogleMap, Marker } from "@react-google-maps/api";
import { useCallback, useRef } from "react";
import styles from "./Map.module.css";

function Map() {
  const containerStyle = {
    width: "100%",
    height: "100%",
  };
  const defCenter = {
    lat: 43.22869187342295,
    lng: 28.004633275742798,
  };

  const mapRef = useRef(undefined);
  const onLoad = useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);
  return (
    <div className={styles["container"]}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={defCenter}
        zoom={16}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={defCenter} />
      </GoogleMap>
    </div>
  );
}
export default Map;
