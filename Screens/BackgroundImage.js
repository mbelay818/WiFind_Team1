import React from 'react'
import {StyleSheet, ImageBackground, View} from 'react-native'


const BackgroundImage = (props) => {

	return (
	    <ImageBackground 
	    	source={require('../LandingImage.png')} 
	    	style={styles.image}
	    >

		    <View style={styles.authenView}>
				{props.view}
		    </View>
	    	
	    </ImageBackground>	
	    
	)
}

const styles = StyleSheet.create({
  	image: {
	    flex: 1,
	    resizeMode: "cover",
	    justifyContent: "center"
    },

   	authenView: {
	    width: '100%',
	    height: "50%",
	    justifyContent: 'center',
	    alignItems: 'center',
	    position: 'absolute', 
	    bottom: 0, 
    },

});



export default BackgroundImage