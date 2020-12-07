import React from 'react';
import { View, ActivityIndicator, Text, TextInput, TouchableOpacity, LogBox }
from 'react-native';
import BackgroundImage from './BackgroundImage';
import { firebase } from '../Configs/firebaseConfig2'
import 'firebase/firestore';
import stylesSheet from './stylesSheet'



LogBox.ignoreLogs(['Setting a timer']);

const JoinPage = ({navigation}) => {

	const [email, onChangeTextEmail] = React.useState('');
	const [username, onChangeTextName] = React.useState('');
	const [password, onChangeTextPass] = React.useState('');
	const [isLoading, onChangeLoading] = React.useState(false);
    const [error, onChangeError] = React.useState('');


	const onRegisterPress = () => {

		if(error.length > 0 ){
            onChangeError('');
		}

		if(username.length == 0){
			onChangeError('Enter username')
			return;
		}
		
        onChangeLoading(true);
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {

                const uid = response.user.uid
                const data = {
                    id: uid,
                    email,
                    username,
                };
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
						onChangeLoading(false)
						navigation.navigate('AvailabilityMap')
                    })
                    .catch((error) => {
						alert(error)
                        onChangeLoading(false)
                    });
              

            })
            .catch((error) => {
				onChangeError(error.message)
				onChangeLoading(false)
        	});
    }

	return (
		 <View style={stylesSheet.container}>

			{ 
                isLoading ? 
                    <ActivityIndicator size="large" color="#59b5f9" /> 
                :
					<BackgroundImage view={ 
						<View>
						<TextInput
							style={stylesSheet.input}
							value={"STUDENT EMAIL"}
							placeholderTextColor= '#59b5f9'
							placeholder='STUDENT EMAIL'
							onChangeText={text => onChangeTextEmail(text)}
							value={email}
							autoCapitalize="none"
						/>
	
						<TextInput
							style={stylesSheet.input}
							value={"USERNAME"}
							placeholderTextColor= '#59b5f9'
							onChangeText={text => onChangeTextName(text)}
							value={username}
							placeholder='USERNAME'
							autoCapitalize="none"
						/>
	
						<TextInput
								style={stylesSheet.input}
								value={"PASSWORD"}
								placeholder='PASSWORD'
								secureTextEntry={true} 
								placeholderTextColor= '#59b5f9'
								onChangeText={text => onChangeTextPass(text)}
								value={password}
								autoCapitalize="none"
						/>
	
						<TouchableOpacity
							style={stylesSheet.button}
							onPress={onRegisterPress}>
							<Text style={stylesSheet.text}>JOIN</Text>
						</TouchableOpacity>
						<Text style={stylesSheet.error}> {error} </Text>
					</View>}
					/>
               
            }
		 		
  		</View>
	)
}

export default JoinPage