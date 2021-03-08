import {
  AppRegistry,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text
} from 'react-native';

import React, {
  Component 
} from 'react'

const {
   width: MAX_WIDTH, 
   height: MAX_HEIGHT 
} = Dimensions.get('window')

class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        {/*Add your child components here*/}   
        <TouchableOpacity style={styles.buttonStyle} onPress={this.buttonPressed}>
          <Text>TEKAN</Text>
          <Text>{true && "Selamat Datang"}</Text>
        </TouchableOpacity>         
      </View>
    )
  }
}

export default App;


const styles = StyleSheet.create({ 
  container: {
    height: MAX_HEIGHT, 
    width: MAX_WIDTH, 
    backgroundColor:"pink",
    justifyContent:'center',
    alignItems:'center'
  },
  buttonStyle:{
    backgroundColor: 'white',
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection:'column',
    boderRadius:20,

  }
});