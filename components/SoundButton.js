import * as React from 'react';
import { Text, Button, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import db from '../config';

 class SoundButton extends React.Component {
  async playSound() {
    await Audio.Sound.createAsync(
      { uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3' },
      { shouldPlay: true }
    );
  }
  buttonPressed(buttonColor){
    var t=new Date().getTime();
    db.ref(buttonColor).update({
      isButtonPressed:true,
      timestamp:t
    });
  }

  render() {
    return (
      <View>
        <TouchableOpacity style={[styles.button,{backgroundColor:this.props.color}]} onPress={
          ()=> {
          var buttonColor=this.props.color;
          this.buttonPressed(buttonColor);
          this.playSound();}
          }>
          <Text style={styles.buttonText}>Press</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    marginLeft: 90,
    marginTop: 250,
    width: 200,
    height: 200,
    borderColor: 'red',
  
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
buttonText:{
  fontWeight:'bold',
  fontSize:20,
  color:"white"
}
});

export default SoundButton;
