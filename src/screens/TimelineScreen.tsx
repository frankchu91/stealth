import React, { useState, useEffect } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import Timeline from '../components/Timeline';
import { ChatInput } from '../components/ChatInput';
import { useNavigation } from '@react-navigation/native';
import { StorageService } from '../services/storage';
import { DiaryEntry } from '../types';
import { AIService } from '../services/aiService';

const TimelineScreen = () => {
  const navigation = useNavigation();
  const [entries, setEntries] = useState<DiaryEntry[]>([]);

  useEffect(() => {
    loadEntries();
  }, []);

  const loadEntries = async () => {
    const savedEntries = await StorageService.getEntries();
    setEntries(savedEntries);
  };

  const handleNewEntry = async (message: string) => {
    const newEntry: DiaryEntry = {
      id: Date.now().toString(),
      date: new Date(),
      title: message.slice(0, 20) + (message.length > 20 ? '...' : ''),
      content: message,
      type: 'daily'
    };

    // 获取 AI 分析
    const aiInsights = await AIService.generateInsights(newEntry);
    if (aiInsights) {
      newEntry.aiInsights = aiInsights;
    }

    await StorageService.saveEntry(newEntry);
    setEntries(prevEntries => [newEntry, ...prevEntries]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.timelineContainer}>
        <Timeline 
          entries={entries} 
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