import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { DiaryEntry } from '../types';

interface EntryDetailProps {
  entry: DiaryEntry;
}

const EntryDetail: React.FC<EntryDetailProps> = ({ entry }) => {
  return (
    <ScrollView style={styles.container}>
      {entry.mediaUrls && entry.mediaUrls.map((url, index) => (
        <Image 
          key={index}
          source={{ uri: url }}
          style={styles.media}
        />
      ))}
      
      <Text style={styles.date}>
        {new Date(entry.date).toLocaleDateString('zh-CN')}
      </Text>
      <Text style={styles.title}>{entry.title}</Text>
      <Text style={styles.content}>{entry.content}</Text>
      
      {entry.aiGeneratedMemories && (
        <View style={styles.aiMemories}>
          <Text style={styles.aiTitle}>AI创建的小回忆</Text>
          {entry.aiGeneratedMemories.map((memory, index) => (
            <Text key={index} style={styles.memory}>{memory}</Text>
          ))}
        </View>
      )}

      {entry.aiInsights && (
        <View style={styles.aiSection}>
          <Text style={styles.aiTitle}>AI 分析与建议</Text>
          
          {entry.aiInsights.summary && (
            <View style={styles.aiBlock}>
              <Text style={styles.aiSubtitle}>总结</Text>
              <Text style={styles.aiText}>{entry.aiInsights.summary}</Text>
            </View>
          )}

          {entry.aiInsights.suggestions && (
            <View style={styles.aiBlock}>
              <Text style={styles.aiSubtitle}>建议</Text>
              {entry.aiInsights.suggestions.map((suggestion, index) => (
                <Text key={index} style={styles.aiText}>• {suggestion}</Text>
              ))}
            </View>
          )}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  media: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  date: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 24,
  },
  aiMemories: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 8,
  },
  aiTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  memory: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 8,
  },
  aiSection: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  aiBlock: {
    marginBottom: 16,
  },
  aiSubtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#34495e',
    marginBottom: 8,
  },
  aiText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#2c3e50',
    marginBottom: 4,
  },
});

export default EntryDetail; 