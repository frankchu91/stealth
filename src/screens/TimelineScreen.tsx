import React from 'react';
import { View, StyleSheet } from 'react-native';
import Timeline from '../components/Timeline';
import { useNavigation } from '@react-navigation/native';
import { MOCK_ENTRIES } from '../data/mockData';

const TimelineScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Timeline 
        entries={MOCK_ENTRIES} 
        onEntrySelect={(entry) => {
          navigation.navigate('Detail', { entry });
        }} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default TimelineScreen; 