import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import Timeline from '../components/Timeline';
import { ChatInput } from '../components/ChatInput';
import { useNavigation } from '@react-navigation/native';
import { MOCK_ENTRIES } from '../data/mockData';

const TimelineScreen = () => {
  const navigation = useNavigation();

  const handleNewEntry = (message: string) => {
    // TODO: 实现添加新条目的逻辑
    console.log('New entry:', message);
  };

  return (
    <View style={styles.container}>
      <View style={styles.timelineContainer}>
        <Timeline 
          entries={MOCK_ENTRIES} 
          onEntrySelect={(entry) => {
            navigation.navigate('Detail', { entry });
          }} 
        />
      </View>
      <ChatInput onSend={handleNewEntry} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  timelineContainer: {
    flex: 1,
  },
});

export default TimelineScreen; 