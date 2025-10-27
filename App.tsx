import { Text, View, ScrollView, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import FlatCard from './components/FlatCard'
import ElevatedCard from './components/ElevatedCard'
import ImageCard from './components/ImageCard'
import ActionCard from './components/ActionCard'
import { SafeAreaView } from 'react-native-safe-area-context'

export class App extends Component {
  render() {
    return (
      <SafeAreaView style= {styles.container}>
        <ScrollView>
          <FlatCard/>
          <ElevatedCard/>
          <ImageCard/>
          <ActionCard/>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4f4d4dff',
    flex:1,
    flexDirection: 'column'
  }
})