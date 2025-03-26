import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  media: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
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
});

export default EntryDetail; 