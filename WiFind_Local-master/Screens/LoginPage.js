import React from 'react';
import { View, TextInput, Text, TouchableOpacity, LogBox, ActivityIndicator }
    from 'react-native';
import BackgroundImage from './BackgroundImage';
import { firebase } from '../Configs/firebaseConfig2'
import stylesSheet from './stylesSheet'
import 'firebase/firestore';



LogBox.ignoreLogs(['Setting a timer']);

const LoginPage = ({ navigation }) => {

    const [email, onChangeTextEmail] = React.useState('');
    const [password, onChangeTextPass] = React.useState('');
    const [error, onChangeError] = React.useState('');
    const [isLoading, onChangeLoading] = React.useState(false);

    const onLoginPress = () => {
        
        if(error.length > 0 ){
            onChangeError('');
        }
        onChangeLoading(true);
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {

                const uid = response.user.uid
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .get()
                    .then(firestoreDocument => {
                        if (firestoreDocument.exists) {
                            const user = firestoreDocument.data() 
                        }
                        //user data
                        onChangeLoading(false)
                        navigation.navigate('AvailabilityMap')
                    })
                    .catch(error => {
                        alert(error)
                        onChangeLoading(false)
                    });
            })
            .catch(error => {
                // alert(error)
                onChangeError(error.message)
                onChangeLoading(false)
            })
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
                                autoFocus={true}
                                style={stylesSheet.input}
                                onChangeText={text => onChangeTextEmail(text)}
                                value={email}
                                placeholderTextColor='#59b5f9'
                                autoCapitalize="none"
                                placeholder='STUDENT EMAIL'
                            />

                            <TextInput
                                style={stylesSheet.input}
                                placeholderTextColor='#59b5f9'
                                onChangeText={text => onChangeTextPass(text)}
                                value={password}
                                secureTextEntry={true}
                                autoCapitalize="none"
                                placeholder='PASSWORD'
                            />
                            <TouchableOpacity
                                style={stylesSheet.button}
                                onPress={onLoginPress}>
                                <Text style={stylesSheet.text}>LOG IN</Text>
                            </TouchableOpacity>

                            <Text style={stylesSheet.error}> {error} </Text>
                        </View>}
                    />
            }

        </View>
    )
}

export default LoginPage