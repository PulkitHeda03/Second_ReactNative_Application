import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {

  function socailLink(websiteLink: string) {
    Linking.openURL(websiteLink)
  }

  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={styles.socialList}>
        <TouchableOpacity onPress={()=>{socailLink('https://github.com/PulkitHeda03')}}>
          <Image source={{ uri: 'https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png' }} style={styles.socialPic} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{socailLink('https://in.linkedin.com/in/pulkit-heda-19032003ph')}}>
          <Image source={{ uri: 'https://content.linkedin.com/content/dam/me/business/en-us/amp/xbu/linkedin-revised-brand-guidelines/home/fg/brand-homepg-guidance-inlogo-dsk-v01.jpg.original.jpg' }} style={styles.socialPic} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{socailLink('https://google.com')}}>
          <Image source={{ uri: 'https://images.freeimages.com/image/large-previews/f35/x-twitter-logo-on-black-circle-5694247.png?h=350' }} style={styles.socialPic} />
        </TouchableOpacity>
      </View>
    </View>
  )
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

  socialList: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    paddingVertical: 6,
    borderRadius: 20,
    marginHorizontal: 16
  },

  socialPic: {
    width: 50,
    height: 50,
    borderRadius: 100,
    borderColor: 'black',
  }
})