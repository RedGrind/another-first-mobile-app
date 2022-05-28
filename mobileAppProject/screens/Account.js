import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Pressable, Button } from 'react-native';
import logo from '../assets/default_profile_pic.jpg'; 

const Account =({navigation})=>{
  const [value, onChangeText] = React.useState('');
  return (
    <View style={styles.container}>
      <Image style={styles.pfp} source={logo}/>
      <View>
        <TextInput 
          placeholder="First Name"
          ref={(input) => { this.firstTextInput = input; }}
          onChangeText={text=>onChangeText(text)}
          onSubmitEditing={() => { this.secondTextInput.focus(); }}
          autoCapitalize='words'/>
        <TextInput 
          placeholder="Last Name"
          ref={(input) => { this.secondTextInput = input; }}
          onChangeText={text=>onChangeText(text)}
          onSubmitEditing={() => { this.thirdTextInput.focus(); }}
          autoCapitalize="words"/>
        <TextInput 
          placeholder="Email"
          ref={(input) => { this.thirdTextInput = input; }}
          onChangeText={text=>onChangeText(text)}
          onSubmitEditing={() => { this.fourthTextInput.focus(); }}/>
        <TextInput 
          placeholder="Phone Number"
          ref={(input) => { this.fourthTextInput = input; }}
          onChangeText={text=>onChangeText(text)}
          onSubmitEditing={() => { this.firstTextInput.focus(); }}
          keyboardType='default'/>
        <TouchableOpacity>
         <Text>Save</Text>
        </TouchableOpacity>
 
        <Pressable onPress={() => navigation.navigate('Home')}>
          <Text> Go to Home</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Posts')}>
          <Text> Go to Posts</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40, 
  },
  pfp: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: "beige",
  },
  
});
