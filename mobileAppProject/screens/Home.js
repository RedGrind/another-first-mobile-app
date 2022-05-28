import * as React from 'react';
import { Text, View, Pressable, StyleSheet, Image } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.page}>
        
        <Text style={styles.pageTitle}>Home</Text>
        
        <Pressable onPress={() => this.props.navigation.navigate('Home')}>
          <Text> Home </Text>
        </Pressable>
        
        <Pressable onPress={() => this.props.navigation.navigate('Account')}>
          <Text> Accounts</Text>
        </Pressable>
        
        <Pressable onPress={() => this.props.navigation.navigate('Posts')}>
          <Text> Posts</Text>
        </Pressable>
        
        <Pressable onPress={() => this.props.navigation.navigate('Login')}>
          <Text> Login </Text>
        </Pressable>

        <Pressable onPress={() => this.props.navigation.navigate('Settings')}>
          <Text> Settings </Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  pageTitle: {
    margin: 10,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});