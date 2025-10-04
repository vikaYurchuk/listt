import React from 'react';
import { StyleSheet, View } from 'react-native';
import TaskList from './components/TaskList';



export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <TaskList />
    </View>
  );
}

const styles = StyleSheet.create({
})