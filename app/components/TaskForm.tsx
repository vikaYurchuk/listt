import React from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { useForm, Controller, FieldValues } from 'react-hook-form';
import { Picker } from '@react-native-picker/picker';

type TaskFormData = {
  title: string;
  date: string;
  priority: 'low' | 'medium' | 'high';
};

type Props = {
  onAddTask: (task: TaskFormData) => void;
};

export default function TaskForm({ onAddTask }: Props) {
  const { control, handleSubmit, reset } = useForm<TaskFormData>({
    defaultValues: { title: '', date: '', priority: 'low' },
  });

  const onSubmit = (data: TaskFormData) => {
    onAddTask(data);
    reset();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Task title:</Text>
      <Controller
        control={control}
        name="title"
        rules={{ required: 'Title is required' }}
        render={({ field }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter task title"
            onChangeText={field.onChange as (text: string) => void}
            value={field.value as string}
          />
        )}
      />

      <Text style={styles.label}>Date:</Text>
      <Controller
        control={control}
        name="date"
        render={({ field }) => (
          <TextInput
            style={styles.input}
            placeholder="YYYY-MM-DD"
            onChangeText={field.onChange as (text: string) => void}
            value={field.value as string}
          />
        )}
      />

      <Text style={styles.label}>Priority:</Text>
      <Controller
        control={control}
        name="priority"
        render={({ field }) => (
          <Picker
            selectedValue={field.value as 'low' | 'medium' | 'high'}
            onValueChange={field.onChange as (val: 'low' | 'medium' | 'high') => void}
          >
            <Picker.Item label="Low" value="low" />
            <Picker.Item label="Medium" value="medium" />
            <Picker.Item label="High" value="high" />
          </Picker>
        )}
      />

      <Button title="Add Task" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 8,
    marginBottom: 10,
  },
});
