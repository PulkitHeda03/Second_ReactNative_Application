import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ImageCard() {
  return (
    <View>
      <Text style={styles.headingText}>ImageCard</Text>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.imageCard}>
          <Image source={require('../assets/Image1.jpg')} style={{ width: 250, height: 120, borderRadius: 8 }} />
          <View style={{gap:0,paddingLeft: 4}}>
            <Text style={styles.cardTitle}>Osaka Landscape</Text>
            <Text style={styles.cardDescription}>Lorem ipsum, dolor jsjddjkadlakerei</Text>
          </View>
        </View>
      </View>
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
  imageCard: {
    padding: 8,
    gap: 8,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    borderWidth: 4,
    borderColor: '#2f2e2e18',
  },
  cardTitle: {
    fontWeight: 900,
    fontSize: 20
  },
  cardDescription: {
    fontWeight: 200,
    fontSize: 14
  }
});
