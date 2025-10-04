import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Task } from '../models/Task';

type Props = {
  item: Task;
};

export default function TaskCard({ item }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.todo}</Text>
      <Text style={styles.status}>
        {item.completed ? '✅ Completed' : '⏰ Pending'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  status: {
    color: '#007AFF',
    fontSize: 14,
  },
});
