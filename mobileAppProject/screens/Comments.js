import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  ImageBackground,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const Comments = ({ navigation }) => {

  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [faqs, setFAQs] = useState([]); // Initial empty array of faqs

  useEffect(() => {
    const getFaqs = firebase
      .firestore()
      .collection('FAQS')
      .orderBy('createdAt', 'desc')
      .onSnapshot((querySnapshot) => {
        const faqs = [];
        console.log(faqs);

        querySnapshot.forEach((documentSnapshot) => {
          faqs.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setFAQs(faqs);
        setLoading(false);
      });

    // Unsubscribe from events when no longer in use
    return () => getFaqs();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }
  return (
    <ScrollView
      style={[{ height: '100%', width: '100%' }]}>
      <View style={styles.page}>
        <Text>Some page title</Text>
        <View style={styles.viewList}>
          <FlatList data={faqs}
            renderItem={({ item }) => (
              <View style={styles.listContainer}>
                      <Text>Some Title</Text>
                      <Text>Post Title: {item.name}</Text>
                      <Text>Post Question:{item.question}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};
export default Comments;

const styles = StyleSheet.create({
  page: {
    width: '100%', // Makes the parent for our container take the full space available
    height: '100%',
  },
  listContainer: {
    margin: '5%',
  }
});
