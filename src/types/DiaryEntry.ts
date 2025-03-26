interface DiaryEntry {
  id: string;
  date: Date;
  title: string;
  content: string;
  mediaUrls?: string[];
  aiGeneratedMemories?: string[];
  tags?: string[];
  type: 'milestone' | 'daily' | 'memory';
} 