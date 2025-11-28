import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
  interpolateColor,
} from 'react-native-reanimated';

export default function ProgressBar({ progress }: { progress: number }) {
  const animatedStyle = useAnimatedStyle(() => ({
    width: withTiming(`${progress}%`, { duration: 500 }),

    backgroundColor: interpolateColor(
      progress,
      [0, 25, 50, 75, 100],
      ['#16a34a', '#22c55e', '#3b82f6', '#facc15', '#dc2626']
    ),
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{progress}% completed</Text>

      <View style={styles.track}>
        <Animated.View style={[styles.bar, animatedStyle]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 20, marginTop: 20 },
  label: { marginBottom: 8, fontSize: 16, fontWeight: '600' },
  track: {
    width: '100%',
    height: 12,
    backgroundColor: '#e5e5e5',
    borderRadius: 8,
    overflow: 'hidden',
  },
  bar: {
    height: '100%',
    borderRadius: 8,
  },
});
