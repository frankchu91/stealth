import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface TimelineProps {
  entries: DiaryEntry[];
  onEntrySelect: (entry: DiaryEntry) => void;
}

const Timeline: React.FC<TimelineProps> = ({ entries, onEntrySelect }) => {
  return (
    <View style={styles.container}>
      {entries.map((entry) => (
        <TouchableOpacity 
          key={entry.id}
          onPress={() => onEntrySelect(entry)}
          style={styles.timelineItem}
        >
          <View style={styles.timelineLeft}>
            <View style={styles.dot} />
            <Text style={styles.date}>
              {new Date(entry.date).toLocaleDateString('zh-CN')}
            </Text>
          </View>
          <Text style={styles.title}>{entry.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  timelineItem: {
    marginBottom: 20,
  },
  timelineLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#000',
    marginRight: 8,
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 16,
  },
});

export default Timeline; 