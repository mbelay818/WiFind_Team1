import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity }
  from 'react-native';
import 'firebase/firestore';


class ConfirmationPage extends Component {


  constructor(props) {
    super(props);

    this.state = {
      provider: this.props.route.params.provider,
    };

  }




  render() {
    const item = this.state.provider[0];

    return (
      <View style={styles.container}>
        <Text
          style={{
            alignSelf: 'center',
            marginVertical: 40,
            textTransform: "uppercase",
            fontSize: 25,
            fontWeight: 'bold',
            textDecorationLine: "underline"
          }}> Comfirmation </Text>

        <View style={styles.confirm}>
          <Text><Text style={styles.confirmText}>WIFI ID: </Text>{item.ssid}</Text>
          <Text><Text style={styles.confirmText}>PASSWORD: </Text>{item.password} </Text>
          <Text><Text style={styles.confirmText}>START TIME: </Text>{item.startTime} </Text>
          <Text><Text style={styles.confirmText}>END TIME: </Text>{item.endTime} </Text>
          <Text><Text style={styles.confirmText}>Address:</Text> {item.address}</Text>
        </View>

        <View style={styles.exitView} >
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('AvailabilityMap')}
          >
            <Text style={styles.text}>Exit</Text>
          </TouchableOpacity>
        </View>

      </View>

    );

  }
}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  confirm: {
    margin: 10,
    flex: 1,
    flexDirection: 'column',
  },

  confirmText: {
    fontWeight: "bold",
    fontSize: 20
  },

  exitView: {
    width: '100%',
    height: "25%",
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },


  button: {
    backgroundColor: '#59b5f9',
    borderRadius: 10,
    height: 48,
    width: 250,
    alignItems: "center",
    justifyContent: 'center'
  },


  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: "bold"
  }

});

export default ConfirmationPage