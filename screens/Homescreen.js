import * as React from 'react';
import { Text, Button, View, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';

class Homescreen extends React.Component {
  goToBuzzerScreen = (buzzerColor) => {
    this.props.navigation.navigate('BS', { color: buzzerColor });
  };

  render() {
    return (
      <View>
        <AppHeader />
        <TouchableOpacity
        
          style={[styles.button, { backgroundColor: 'red' }]}
          onPress={()=>{
            this.goToBuzzerScreen('red')
          }}
          
          >
          <Text style={styles.buttonText}>Team 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
           onPress={()=>{
            this.goToBuzzerScreen('blue')
          }}
          style={[styles.button, { backgroundColor: 'blue' }]}>
          <Text style={styles.buttonText}>Team 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
           onPress={()=>{
            this.goToBuzzerScreen('green')
          }}
          style={[styles.button, { backgroundColor: 'green' }]}>
          <Text style={styles.buttonText}>Team 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
           onPress={()=>{
            this.goToBuzzerScreen('yellow')
          }}
          style={[styles.button, { backgroundColor: 'yellow' }]}>
          <Text style={styles.buttonText}>Team 2</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    marginLeft: 90,
    marginTop: 80,
    width: 200,
    height: 50,
    borderWidth: 2,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  buttonText: {
    fontWeight: 'bold',

    color: 'white',
  },
});

export default Homescreen;
