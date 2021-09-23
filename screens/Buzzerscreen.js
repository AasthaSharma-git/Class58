import * as React from 'react';
import { Text, Button, View, TouchableOpacity, StyleSheet } from 'react-native';
import SoundButton from '../components/SoundButton';
import AppHeader from '../components/AppHeader';

 class Buzzerscreen extends React.Component {
 render(){
   return(
     <View>
     <AppHeader />
     <SoundButton color={this.props.navigation.getParam('color')} />
     </View>
   )
 }
}

export default Buzzerscreen;

