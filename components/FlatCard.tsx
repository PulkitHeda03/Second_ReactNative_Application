import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText} >FlatCard</Text>
      <View style={styles.container}>
        <View style={[styles.card,styles.cardOne]}>
          <Text style={styles.cardText}>Red</Text>
        </View>
        <View style={[styles.card,styles.cardTwo]}>
          <Text style={styles.cardText}>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.cardText}>Blue</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 8,
  },
  headingText: {
    fontWeight: 100,
    fontStyle: 'italic',
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    margin: 8
  },
  card:{
    flex: 1,
    margin:4,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 10
  },
  cardOne: {
    backgroundColor: 'red'
  },
  cardTwo: {
    backgroundColor: 'green'
  },
  cardThree: {
    backgroundColor: 'blue'
  },
  cardText:{
    color: 'white'
  }
})