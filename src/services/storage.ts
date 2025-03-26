import AsyncStorage from '@react-native-async-storage/async-storage';
import { DiaryEntry } from '../types';

export const StorageService = {
  async saveEntry(entry: DiaryEntry) {
    try {
      const entries = await this.getEntries();
      entries.unshift(entry); // 添加到开头
      await AsyncStorage.setItem('diary_entries', JSON.stringify(entries));
      return true;
    } catch (error) {
      console.error('Error saving entry:', error);
      return false;
    }
  },

  async getEntries(): Promise<DiaryEntry[]> {
    try {
      const entries = await AsyncStorage.setItem('diary_entries');
      return entries ? JSON.parse(entries) : [];
    } catch (error) {
      console.error('Error getting entries:', error);
      return [];
    }
  }
}; 