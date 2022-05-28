import * as React from 'react';
import { Text, View, Pressable, Button, StyleSheet, Image, TextInput, } from 'react-native';
import * as firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

const Signup = ({navigation}) => {
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('')
  
  return (
    <View>
      <Text style={styles.pageTitle}>Sign Up</Text>
      <Text> Sign up to join our family! </Text>
        <TextInput 
          style={styles.input} 
          placeholder="First Name"
          value={firstName} 
          onChangeText={(firstName) => setFirstName(firstName)}/>
        <TextInput 
          style={styles.input} 
          placeholder="Last Name"
          value={lastName} 
          onChangeText={(lastName) => setLastName(lastName)}/>
        <TextInput 
          style={styles.input} 
          placeholder="Email"
          value={email} 
          onChangeText={(email) => setEmail(email)}/>
        <TextInput 
          style={styles.input} 
          placeholder="Password"
          onChangeText={(password) => setPassword(password)}
          value={password} />
        <TextInput 
          style={styles.input} 
          placeholder="Confirm Password"
          onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
          value={confirmPassword} />
        <Button
          title="Sign Up"
          onPress={()=>onSignupPress()}/>
        <Pressable onPress={()=>navigation.navigate('Login')}>
          <Text> Back </Text>
        </Pressable>
      </View>
    );
}
export default Signup;


const styles = StyleSheet.create({
  pageTitle: {
    margin: 10,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1.4,
    width: 280,
    backgroundColor: 'white',
    textAlign: 'left',
    paddingLeft:12,
    marginBottom: 20,
    alignSelf: 'center',
  },
});