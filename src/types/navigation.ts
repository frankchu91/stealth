import { DiaryEntry } from './index';

export type RootStackParamList = {
  Timeline: undefined;
  Detail: { entry: DiaryEntry };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
} 