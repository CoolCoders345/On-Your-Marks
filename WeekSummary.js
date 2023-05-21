import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import firebase from './config'

export default class WeekSummary extends React.Component{
  checkOrCross(){
    let d = new Date()
    var day = d.getDay()
    var daysList
    var dayRef = firebase.ref("/").on('value', data =>{
     daysList = data.val();
    //  for (var day in daysList) {
    //    if (daysList[day]['Friday'] === 1) {
     //     teamList[team]["teamName"] = team;
     //     teams.push(teamList[team]);
       // }
   //   }
    })
    console.log("dayRef : "+ dayRef)
    console.log("daysList: " +daysList)
  }
  render(){
    return(
      <View > 
      <Text style={styles.header}> This Week's Summary </Text> 
      {this.checkOrCross()}
  <Text style={styles.text}> Sunday :  </Text>
  <Image style={styles.checkImage} source={require("./assets/Cross.png")}> </Image> 
  <Text style={styles.text}> Monday :  </Text>
  <Image style={styles.checkImage} source={require("./assets/Cross.png")}> </Image> 
  <Text style={styles.text}> Tuesday :  </Text>
  <Image style={styles.checkImage} source={require("./assets/Cross.png")}> </Image> 
  <Text style={styles.text}> Wednesday :  </Text>
  <Image style={styles.checkImage} source={require("./assets/Cross.png")}> </Image> 
  <Text style={styles.text}> Thursday :  </Text>
  <Image style={styles.checkImage} source={require("./assets/Cross.png")}> </Image> 
  <Text style={styles.text}> Friday :  </Text>
  <Image style={styles.checkImage} source={require("./assets/Cross.png")}> </Image> 
  <Text style={styles.text}> Saturday :  </Text>
  <Image style={styles.checkImage} source={require("./assets/Cross.png")}> </Image> 
      </View> 
    )
  }
}


const styles= StyleSheet.create({
  checkImage:{
    width:30,
    height: 30
  },
  text: {
    color:"#6f64a3",
    fontWeight:800
  },
   header: {
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
    color: "#6f64a3"
  },
})



