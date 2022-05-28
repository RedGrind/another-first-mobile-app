import * as React from 'react';
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { addFAQ } from '../api/FaqsApi';
import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

export default class Posts extends React.Component {
  state = {
    currentFAQname: null,
    currentFAQquest: null,
  };

  checkEmpty = () => {
    if (this.state.currentFAQname === null)
      return alert('Please Enter a Title for your Post');
    else if (this.state.currentFAQquest === null)
      return alert('Please enter your Question/Comment');
    else
      addFAQ({ 
        name: this.state.currentFAQname,
        question: this.state.currentFAQquest,
      }),
        this.qustInput.clear(),
        this.nameInput.clear(), 
        this.setState((prevState) => ({
          currentFAQname: (prevState.currentFAQname = null), // resets the value of our input to null so another input can be made
        })), // reset value to null
        this.setState((prevState) => ({
          currentFAQquest: (prevState.currentFAQquest = null), // resets the value of our input to null so another input can be made
        })), // reset value to null
        alert('Your post has been sent') // Let the user know that there post was successfully sent
  };

  render() {
    return (
      <ScrollView
        style={{ height: '100%', width: '100%' }}
        keyboardShouldPersistTaps="handled">
        <View style={styles.page}>
          <View style={styles.postField}>
            <TextInput
              style={styles.inputField}
              ref={(input) => {
                this.nameInput = input;
              }}
              placeholder="Title your Text"
              multiline={true}
              value={this.state.currentFAQname}
              onChangeText={(title) =>
                this.setState((prevState) => ({
                  currentFAQname: (prevState.currentFAQname = title),
                }))
              }
            />
            <TextInput
              style={ styles.inputField }
              ref={(input) => {
                this.qustInput = input;
              }}
              placeholder="Write whatever placeholder you would like"
              multiline={true}
              value={this.state.currentFAQquest}
              onChangeText={(quest) =>
                this.setState((prevState) => ({
                  currentFAQquest: (prevState.currentFAQquest = quest),
                }))
              }
            />
          </View>

          <View style={{ backgroundColor: '#b0e0e6' }}>
            <Pressable title="Submit" onPress={() => this.checkEmpty()}>
              <Text>Post Now</Text>
            </Pressable>
          </View>

        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  inputField: {
    border: 'solid',
    margin: '1%',
  }
});