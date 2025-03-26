import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Timeline from '../components/Timeline';
import EntryDetail from '../components/EntryDetail';

// 测试数据
const MOCK_ENTRIES: DiaryEntry[] = [
  {
    id: '1',
    date: new Date('2022-01-01'),
    title: '第一次说话',
    content: '今天小宝贝说出了人生的第一个词！',
    mediaUrls: ['https://picsum.photos/400/300'],
    aiGeneratedMemories: [
      '这是一个激动人心的时刻，宝宝的第一个词汇开启了语言发展的新篇章',
      'AI分析：这个时期的语言发展非常关键'
    ],
    type: 'milestone'
  },
  {
    id: '2',
    date: new Date('2025-01-17'),
    title: 'Stratford 第二周作业',
    content: '完成了本周的学习任务',
    type: 'daily'
  }
];

const HomeScreen = () => {
  const [selectedEntry, setSelectedEntry] = useState<DiaryEntry>(MOCK_ENTRIES[0]);

  return (
    <View style={styles.container}>
      <View style={styles.timelineContainer}>
        <Timeline 
          entries={MOCK_ENTRIES} 
          onEntrySelect={setSelectedEntry} 
        />
      </View>
      <View style={styles.detailContainer}>
        <EntryDetail entry={selectedEntry} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: '100vh',
    maxWidth: 1024,
    marginHorizontal: 'auto',
  },
  timelineContainer: {
    width: '40%',
    borderRightWidth: 1,
    borderRightColor: '#e0e0e0',
    maxWidth: 400,
  },
  detailContainer: {
    flex: 1,
    overflow: 'auto',
  },
});

export default HomeScreen; 