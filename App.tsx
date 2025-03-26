import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import TimelineScreen from './src/screens/TimelineScreen';
import DetailScreen from './src/screens/DetailScreen';
import { PhoneFrame } from './src/components/PhoneFrame';
import { RootStackParamList } from './src/types/navigation';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.phoneContainer}>
        <PhoneFrame>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen 
                name="Timeline" 
                component={TimelineScreen}
                options={{ title: '时间轴' }}
              />
              <Stack.Screen 
                name="Detail" 
                component={DetailScreen}
                options={{ title: '详情' }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PhoneFrame>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // 背景色
    alignItems: 'center', // 水平居中
    justifyContent: 'center', // 垂直居中
  },
  phoneContainer: {
    width: 390, // iPhone 12/13 的宽度
    height: 844, // iPhone 12/13 的高度
    backgroundColor: '#fff',
    borderRadius: 40, // 圆角
    overflow: 'hidden',
    // 添加手机外观的阴影
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
}); 