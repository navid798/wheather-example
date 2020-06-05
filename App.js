import React, { useState, useEffect } from "react";

import {
  StyleSheet,
  View,
  PermissionsAndroid,
  Text,
  ActivityIndicator,
} from "react-native";
import Geolocation from "react-native-geolocation-service";

const granted = PermissionsAndroid.request(
  PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
);
granted === PermissionsAndroid.RESULTS.GRANTED;

const App = () => {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        setLat([position.coords.latitude]);
        setLon([position.coords.longitude]);
      },
      err => {
        console.log(err);
      }
    );
  }, []);
  console.log("lat is :", lat);
  console.log("lon is :", lon);

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c1e6a4fb0587da728e32ba92247c8e10&units=metric`
    )
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.container}>
          <View style={styles.name}>
            <Text style={styles.nameCity}>شهر: {data.name}</Text>
            <Text>درجه هوا :{data.main.temp}</Text>
            <Text>احساس {data.main.feels_like} درجه میشه</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7bc4f5",
  },
  name: {
    alignItems: "center",
    marginTop: 30,
    padding: 25,
  },
  nameCity: {
    fontSize: 20,
  },
});
