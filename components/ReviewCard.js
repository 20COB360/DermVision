import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native'
import React from 'react'

export default function ReviewCard() {
  const { height, width } = useWindowDimensions();

  return (
    <View style={[styles.ReviewCard,{width:width/1.8}]}>
      <View style={styles.reviewBox}>
      <Image
            source={require("../assets/static/20240221_000353_0015.png")}
            style={styles.img}
          />
      <Text style={styles.review}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eius sunt rerum veniam distinctio. Beatae mollitia fugit voluptatem minima suscipit enim aspernatur quae, id repellat! Distinctio consequatur ipsum officia. Quam sit natus eligendi suscipit a ipsum corporis nulla iure?</Text>
    </View>
    <View style={styles.reviewerBox}>
      <View style={styles.reviewer}>
      <Image
            source={require("../assets/static/20240221_000353_0018.png")}
            style={styles.profpic}
          />
        <Text style={styles.name}>Ayane</Text>
      </View>
    
      <View style={styles.reviewer}>
      <Image
            source={require("../assets/static/20240221_000353_0019.png")}
            style={styles.star}
          />
        <Text style={styles.name}>4.4</Text>
      </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  ReviewCard:{
    display:'flex',
    flexShrink:0.5,
    width:'65%',
    backgroundColor:'#343341',
    borderRadius: 30,
  },
  reviewBox:{
    borderRadius: 30,
    padding:20,
    paddingTop: 10,
    backgroundColor:'#00e9f1',
  },
  img:{
    width :60,
    height :60,
  },
  review:{
    height:80,
    // overflow:'scroll',
    textAlign : 'justify',
  },
  reviewerBox:{
    padding:10,
    paddingBottom:15,
    borderBottomEndRadius:30,
    borderBottomLeftRadius:30,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingRight:20,
  },
  reviewer:{
    display :'flex',
    flexDirection:'row', 
    alignItems:'center',
    gap:2, 
  },
  profpic:{
    width:30,
    height:30,
  },
  star:{
    width:20,
    height:20,
  },
  name:{
    color:'white'
  },
})