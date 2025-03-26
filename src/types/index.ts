export interface DiaryEntry {
  id: string;
  date: Date;
  title: string;
  content: string;
  mediaUrls?: string[];
  aiGeneratedMemories?: string[];
  type: 'milestone' | 'daily' | 'memory';
} 