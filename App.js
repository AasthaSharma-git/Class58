import * as React from 'react';
import { Text, Button, View, TouchableOpacity, StyleSheet } from 'react-native';
import Homescreen from './screens/Homescreen';
import Buzzerscreen from './screens/Buzzerscreen';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';

export default class App extends React.Component {
 render(){
   return(
     <View>
    <AppContainer/>
     </View>
   )
 }
}

var AppNavigator=createSwitchNavigator({
  
  HS:Homescreen,
  BS:Buzzerscreen
})

var AppContainer=createAppContainer(AppNavigator);

