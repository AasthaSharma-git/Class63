import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { Header } from 'react-native-elements';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      displayText: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'blue'}
          centerComponent={{
            text: 'Monkey Chunky',
            style: { color: 'white', fontSize: 20 },
          }}
        />
        <TextInput
          style={styles.input}
          onChangeText={(input) => {
            this.setState({ text: input });
          }}
          
        />
        <TouchableOpacity style={styles.button} onPress={()=>{
          this.setState({displayText:this.state.text})
        }}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
        <Text style={styles.output}>{this.state.displayText}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  input: {
    marginTop: 200,
    borderWidth: 3,
    width: '80%',
    textAlign: 'center',
    height: 40,
    alignSelf: 'center',
  },
  button:{
    marginTop:50,
    alignSelf:'center',
    borderWidth:3,
    width:70,
    height:50,
    justifyContent:'center',
    backgroundColor:'white'
    
  },
  buttonText:{
    textAlign:'center',
   
  },
  output:{
    marginTop:50,
    alignSelf:'center',
    fontSize:50
  }

});
