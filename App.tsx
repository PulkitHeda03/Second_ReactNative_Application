import { Text, View, ScrollView } from 'react-native'
import React, { Component } from 'react'
import FlatCard from './components/FlatCard'
import ElevatedCard from './components/ElevatedCard'
import { SafeAreaView } from 'react-native-safe-area-context'

export class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <FlatCard/>
          <ElevatedCard/>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default App