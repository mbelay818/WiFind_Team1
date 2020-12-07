import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const SideNavigation = ({navigation}) => {

	signOutHandler = () => {
		navigation.navigate('HomePage')
	}


	return (

	    <View style={styles.sideBar}>

	    	<View style={styles.viewIcon} >
	    		<Ionicons name="ios-wifi" size={100} color="#fff" />
	    	</View>

	    	<TouchableOpacity >
		    	<Text style={styles.inner}> ACCOUNT </Text>
	     	</TouchableOpacity>

		    <TouchableOpacity>
		    	<Text style={styles.inner}> SETTINGS </Text>
	     	</TouchableOpacity>

		    <TouchableOpacity>
		    	<Text style={styles.inner}> CONTACT US </Text>
	     	</TouchableOpacity>

	     	<TouchableOpacity style={{marginVertical: 50}} onPress={signOutHandler}>
		    	<Text style={styles.inner}> SIGN OUT </Text>
	     	</TouchableOpacity>
	    
	    </View>	
	    
	)
}

const styles = StyleSheet.create({

   	sideBar: {
		flex: 1,
		flexDirection: 'column',
	    backgroundColor: '#59b5f9',
    },

    viewIcon: {
		alignItems: 'center', 
		marginVertical: 50 
    },

    inner: {
    	marginBottom: 5,
    	color: 'white',
    	fontSize: 30,
		textAlign: 'center',
    	width: '100%',
    	backgroundColor: '#387cae'
    }

});



export default SideNavigation