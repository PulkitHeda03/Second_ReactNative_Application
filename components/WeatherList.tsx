import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function WeatherList() {
    const weathers = [
        { 
            id: '1', 
            url: 'https://static.vecteezy.com/system/resources/previews/011/126/301/non_2x/animated-cloud-with-sun-depicting-weather-in-flat-icon-clipart-illustration-on-blue-sky-vector.jpg',
            title: 'Day',
            status: `It's a Sunny Day ☀️`
        },
        { 
            id: '2',
            url: 'https://static.vecteezy.com/system/resources/previews/024/360/519/non_2x/weather-icon-illustration-free-vector.jpg',
            title: 'Night',
            status: `It's a dark night 🌙`
        },
        {
            id: '3',
            url: 'https://t3.ftcdn.net/jpg/14/16/56/10/360_F_1416561045_oWiCLhTNuaqaqn9GcPi4f4GVmqDAmKPI.jpg',
            title: 'Rain',
            status: `It's raining heavyly 🌧️`
        }
    ]
    return (
        <View>
            <Text style={styles.headingText}>WeatherList</Text>
            <View style={styles.list}>
                {weathers.map(({id,url,title,status})=>(
                    <View key={id} style={styles.weatherCard}>
                        <Image source={{uri: url}} style={styles.imageCircle}/>
                        <View>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.status}>{status}</Text>
                        </View>
                    </View>
                ))}
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
  list:{
    gap: 4,
    marginHorizontal: 16,
    marginVertical: 8
  },
  weatherCard:{
    flexDirection: 'row',
    gap: 4,
    padding: 6,
    alignItems: 'center',
    backgroundColor: '#727171ff',
    borderRadius: 20
  },
  imageCircle: {
    height: 40,
    width: 40,
    borderRadius: 40 /2
  },
  title:{
    fontSize: 20,
    fontWeight: 700
  },
  status:{
    fontSize: 12,
    fontWeight: 100
  }
})