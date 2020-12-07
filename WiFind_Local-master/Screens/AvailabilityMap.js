import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, ActivityIndicator, TouchableOpacity }
  from 'react-native';
import { firebase } from '../Configs/firebaseConfig2'
import * as Location from 'expo-location';
import 'firebase/firestore';
import stylesSheet from './stylesSheet'

class AvailabilityMap extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      markers: [],
      userLocation: null,
      userLocError: null,
      initialRegion: null,
    };
  }


  mapMarkers = () => {
    return this.state.markers.map((marker, index) =>
      <Marker
        key={index}
        coordinate={marker.coordinates}
        title={marker.title}
      >
      </Marker>)
  }

  availabilityHandler = () => {

    this.props.navigation.navigate('AvailabilityList', { provider: this.state.markers })

  }

  async componentDidMount() {

    try {


      let { status } = await Location.requestPermissionsAsync();

      if (status == 'granted') {
        let location = await Location.getCurrentPositionAsync({});

        this.setState({ userLocation: location });
        this.setState({
          initialRegion: {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }
        })

      } else {

        this.setState({
          initialRegion: null
        })

      }


    } catch (error) {
      alert(JSON.stringify(error));
    }


    const points = [];
    const providersRef = firebase.firestore().collection('Providers');
    providersRef
      .get()
      .then(snapshot => {
        snapshot
          .docs
          .forEach((doc, key) => {
            const data = doc.data();
            points.push({
              index: key,
              title: data.Title,
              address: data.Address,
              ssid: data.Wifi_ID,
              password: data.Wifi_Password,
              speed: data.Speed,
              startTime: data.Start_Time,
              endTime: data.End_Time,
              description: data.Description,
              coordinates: {
                latitude: data.Location.latitude,
                longitude: data.Location.longitude
              }
            })
          });

        this.setState({ markers: points })
        this.setState({ isLoading: false })
      })
      .catch(error => {
        alert(error)
        this.setState({ isLoading: false })
      });

  }


  render() {
    return (

      <View style={styles.container}>

        {

          this.state.isLoading ? <ActivityIndicator size="large" color="#59b5f9" /> :

            <View>
              <MapView
                style={styles.mapStyle}
                initialRegion={this.state.initialRegion}
                showsUserLocation={true}
                showsMyLocationButton={true}
                showsCompass={true}
                showsPointsOfInterest={true}
              >
                {this.mapMarkers()}
              </MapView>
              <View style={stylesSheet.centerButton} >
                <TouchableOpacity
                  style={stylesSheet.button}
                  onPress={this.availabilityHandler}>
                  <Text style={stylesSheet.text}>Availability</Text>
                </TouchableOpacity>
              </View>
            </View>
        }
      </View>


    );

  }
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  mapStyle: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

});

export default AvailabilityMap