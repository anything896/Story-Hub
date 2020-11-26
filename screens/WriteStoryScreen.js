import React from 'react';
import { Text, View, TextInput, StyleSheet,TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';

export default class WriteStory extends React.Component {
    render() {
      return (
        <View>
          <Header
  centerComponent={{ text: 'Story Hub', style: { color: 'black',fontSize:24 } }}
  containerStyle={{
    backgroundColor: '#FFC0CB',
    justifyContent: 'space-around',
  }}
/>
  <TextInput 
    style={styles.inputBox}
    placeholder="Story Title"
  />

<TextInput 
    style={styles.inputBox}
    placeholder="Author"
  />

  <TextInput 
    style={styles.storyBox}
    placeholder="Write your story"
  />

<TouchableOpacity 
style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
  
              
        </View>
      );
    }
  }
  

  const styles = StyleSheet.create({
  inputBox:{
    width: 1250,
    height: 40,
    borderWidth: 1.5,
    fontSize: 20,
    justifyContent: 'center',
    marginLeft:12.5,
    marginTop:50
  },

  storyBox:{
    width: 1250,
    height: 200,
    borderWidth: 1.5,
    fontSize: 20,
    justifyContent: 'center',
    marginLeft:12.5,
    marginTop:50
  },
  submitButton:{
    backgroundColor: '#FFC0CB',
    width: 100,
    height:50,
    marginLeft:595.5,
    marginTop:12.5
  },
  submitButtonText:{
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight:"bold",
    color: 'black',
  }

})