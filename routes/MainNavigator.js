import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

import { View, TouchableOpacity} from 'react-native';
import HomePage from '../Screens/HomePage';
import LoginPage from '../Screens/LoginPage';
import JoinPage from '../Screens/JoinPage';
import AvailabilityMap from '../Screens/AvailabilityMap';
import AvailabilityList from '../Screens/AvailabilityList';
import ConfirmationPage from '../Screens/ConfirmationPage';
import SideNavigation from '../Screens/SideNavigation';

import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {

  const navigation = useNavigation();

  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  return (
    <View style = {{flexDirection: 'row'}}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Ionicons name="md-menu" size={40}  color="#59b5f9" />
      </TouchableOpacity>
    </View>
  );
};


const StackNavigator = ({navigation}) => {

  const obj = {
    headerTitle: 'WiFiND',
    headerTitleStyle: { alignSelf: 'center', color: '#59b5f9' },
    headerLeft: () => (
      <View style= {{marginLeft: 20} } >
          <NavigationDrawerStructure  />
      </View> 
    ),
    headerRight: () => (
      <View style= {{marginRight: 20}}>
          <Ionicons name="ios-wifi" size={40} color="#59b5f9" />
      </View>  
    ),
  }

  return (

        <Stack.Navigator>

          <Stack.Screen
              name="HomePage"
              component={HomePage}
              options={{ headerShown: false }}
          />
          <Stack.Screen
              name="LoginPage"
              component={LoginPage}
              options={{ headerShown: false }}
          />

        	<Stack.Screen
              name="JoinPage"
              component={JoinPage}
              options={{ headerShown: false }}
          />

        		<Stack.Screen
      	        name="AvailabilityMap"
      	        component={AvailabilityMap}
                options = {obj}
        	    />

            <Stack.Screen
                name="AvailabilityList"
                component={AvailabilityList}
                options = {obj}
            /> 

            <Stack.Screen
                name="ConfirmationPage"
                component={ConfirmationPage}
                options = {obj}
            />  
    </Stack.Navigator>
  );

};


function MainNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent = {SideNavigation} 
      >
        <Drawer.Screen
          name="StackNav"
          component={StackNavigator}
        />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}


export default MainNavigator;