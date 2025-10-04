import React, { useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { Task } from '../models/Task';
import TaskCard from './TaskCard';

const api = 'https://dummyjson.com/todos';

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
  const myTasks: Task[] = [
    { id: 1, todo: "clean out car", completed: false, userId: 1 },
    { id: 2, todo: "bake a pie ", completed: true, userId: 1 },
    { id: 3, todo: "buy a new house decoration", completed: false, userId: 1 },
    { id: 4, todo: "watch a classic movie", completed: false, userId: 1 },
  ];
  setTasks(myTasks);
  setLoading(false);
}, []);

  // useEffect(() => {
  //   fetch(api)
  //     .then(res => res.json())
  //     .then(json => {
  //       setTasks(json.todos);
  //       setLoading(false);
  //     })
  //     .catch(err => {
  //       Alert.alert('Error', err.message);
  //       setLoading(false);
  //     });
  // }, []);


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
      <Text style={styles.title}>ODOT List</Text>
      <Text style={styles.date}>4th March 2018</Text>
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
