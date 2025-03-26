import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const PhoneFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <View style={styles.frame}>
      <View style={styles.notch}>
        <View style={styles.camera} />
        <View style={styles.speaker} />
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 40,
    overflow: 'hidden',
  },
  notch: {
    height: 30,
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  camera: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#1a1a1a',
    marginRight: 8,
  },
  speaker: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#1a1a1a',
  },
}); 