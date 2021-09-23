import * as React from 'react';
import { Text, Button, View, TouchableOpacity, StyleSheet } from 'react-native';


 class AppHeader extends React.Component {
 

  render() {
    return (
      <View style={styles.textContainer}>
        
          <Text style={styles.TextStyle}>Sound Buzzer</Text>
       
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textContainer:{
    backgroundColor:"blue",
    marginTop:50
  },
  TextStyle:{
 
  fontWeight:'bold',
  fontSize:22,
  color:"white",
  height:50,
  textAlign:"center",
  
  
  
}
});

export default AppHeader;
