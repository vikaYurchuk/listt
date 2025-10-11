import * as React from 'react';
import { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { Task } from '../models/Task';
import TaskCard from './TaskCard';
import TaskForm from './TaskForm';

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const myTasks: Task[] = [
      { id: 1, todo: "clean out car", completed: false, userId: 1 },
      { id: 2, todo: "bake a pie", completed: true, userId: 1 },
      { id: 3, todo: "buy a new house decoration", completed: false, userId: 1 },
      { id: 4, todo: "watch a classic movie", completed: false, userId: 1 },
    ];
    setTasks(myTasks);
    setLoading(false);
  }, []);

  const handleAddTask = (data: { title: string; date: string; priority: string }) => {
    const newTask: Task = {
      id: tasks.length + 1,
      todo: `${data.title} (${data.priority}, ${data.date})`,
      completed: false,
      userId: 1,
    };
    setTasks([newTask, ...tasks]);
  };

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text>Loading tasks...</Text>
      </View>
    );
  }

  return (
    <View>
      <Text style={styles.title}>TODO List</Text>
      <Text style={styles.date}>11th October 2025</Text>

      {/* Підключаємо форму */}
      <TaskForm onAddTask={handleAddTask} />

      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskCard item={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
  },
  date: {
    textAlign: 'center',
    color: '#999',
    marginBottom: 10,
  },
  list: {
    paddingBottom: 100,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
