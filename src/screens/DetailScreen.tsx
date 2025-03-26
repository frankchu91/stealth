import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import EntryDetail from '../components/EntryDetail';
import { useRoute } from '@react-navigation/native';

const DetailScreen = () => {
  const route = useRoute();
  const { entry } = route.params;

  return (
    <View style={styles.container}>
      <EntryDetail entry={entry} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default DetailScreen; 