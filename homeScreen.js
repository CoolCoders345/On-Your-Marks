import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import ExerciseScreen from "./Exercise1Screen"

var dayArray= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var exerDay=["Arm Day","Leg Day", "Stomach Day", "Arm Day", "Leg Day", "Stomach Day", "Cheat Day"]
var ArmDay=["Chair Dips", "Modified Pushups", "Wall Pushups"]
var LegDay=["Side Lunge", "One Legged Hip Thrusts", "Side lying Leg Raises"]
var StomachDay=["Side Plank", "Leg Raises", "Scissors"]

export default class HomeScreen extends React.Component{
  constructor(){
    super();
    this.state={
      day: "",
      func: ""
    }
  }
  getCurrentDate(){
    let d = new Date()
    this.setState({day:d.getDay()}) 
  }
  componentDidMount(){
    this.getCurrentDate()
  }

  whichExercises(){
    console.log("hi")
    if(exerDay[this.state.day]=="Arm Day"){
  return(
      <View style={styles.center}> 
<Text style={styles.text}> Chair Dips </Text> 
<Image style={styles.image} source={require("./assets/Arm-ChairDips.png")}/>
<Text style={styles.text}> Modified Pushups </Text> 
<Image style={styles.image} source={require("./assets/Arm-ModifiedPushups.png")}/>
<Text style={styles.text}> Wall Pushups </Text> 
<Image style={styles.image} source={require("./assets/Arm-WallPushups.png")}/>
    </View>
    )
    } else if (exerDay[this.state.day]=="Stomach Day"){
      return(
    <View style={styles.center}> 
<Text style={styles.text}> Leg Raises </Text> 
<Image style={styles.image} source={require("./assets/Stomach-legRaises.png")}/>
<Text style={styles.text}> Scissors </Text> 
<Image style={styles.image} source={require("./assets/Stomach-Scissors.png")}/>
<Text style={styles.text}> Side Plank </Text> 
<Image style={styles.image} source={require("./assets/Stomach-sidePlank.png")}/>
    </View>
    )
    } else if (exerDay[this.state.day]=="Leg Day"){
      return(
      <View style={styles.center}> 
<Text style={styles.text}> Side Lunge </Text> 
<Image style={styles.image} source={require("./assets/Leg-SideLunge.png")}/>
<Text style={styles.text}> One Legged Hip Thrusts </Text> 
<Image style={styles.image} source={require("./assets/Leg-OneLeggedHipThrusts.png")}/>
<Text style={styles.text}> Side Lying Leg Raises </Text> 
<Image style={styles.image} source={require("./assets/Leg-SideLyingLegRaises.png")}/>
    </View>
    )
    }
  }
  render(){
    return(
      <View> 
      <Text style={styles.header}>On Your Marks</Text> 
      <Text style={styles.days}> Day:  {dayArray[this.state.day]}</Text>
      <Text style={styles.days}> Body Target: {exerDay[this.state.day]} </Text>
     
     {this.whichExercises()}
     <TouchableOpacity style={styles.beginButton} onPress={() => {
   this.props.navigation.navigate("Exercise1")
  }}> BEGIN </TouchableOpacity>
      </View> 
    )
  }
}


const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
    color: "#6f64a3"
  },
  days:{
    fontWeight: "600",
    textAlign:"center"
  },
  beginButton: {
    borderStyle:"solid",
    borderWidth:"2px",
    textAlign:"center"
  },
  image:{
    width:150,
    height:100
  },
  center:{
    alignItems:"center",
  },
  text: {
    color:"#6f64a3",
    fontWeight:800
  }
})