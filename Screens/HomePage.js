import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity} 
from 'react-native';
import BackgroundImage from './BackgroundImage';

const HomePage = ({navigation}) => {

	return (
		 <View style={styles.container}>
		 	<BackgroundImage view={ 
		 		<View>
					<TouchableOpacity
	                    style={styles.button}
	                    onPress={() => navigation.navigate('LoginPage')} >
	                    <Text style={styles.text}>LOG IN</Text>
                	</TouchableOpacity>
                	<TouchableOpacity
	                    style={styles.button}
	                    onPress={() => navigation.navigate('JoinPage')} >
	                    <Text style={styles.text}>JOIN</Text>
                	</TouchableOpacity>
				</View>}
			/>	

  		</View>
	)
}

const styles = StyleSheet.create({
  	container: {
	    flex: 1,
	    flexDirection: "column"
    },

    button: {
      	backgroundColor: '#59b5f9',
        marginBottom: 10,
    	borderRadius: 10,
    	height: 48,
        width:250,	
        alignItems: "center",
        justifyContent: 'center'
    },

    text: {
      color: 'white',
      fontSize: 20,
      fontWeight: "bold"
    }
});


export default HomePage