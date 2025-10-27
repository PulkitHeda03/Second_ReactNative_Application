import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCard</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 8, alignItems: 'center' }}
      >
        <View style={styles.card}><Text>Tap</Text></View>
        <View style={styles.card}><Text>Me</Text></View>
        <View style={styles.card}><Text>To</Text></View>
        <View style={styles.card}><Text>See</Text></View>
        <View style={styles.card}><Text>😂</Text></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontWeight: '200',
    fontStyle: 'italic',
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    marginVertical: 8,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    backgroundColor: '#ab6aa1ff',
    borderRadius: 20,
    margin: 4,
    elevation: 8,
  },
});
