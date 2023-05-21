import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
var dayArray= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var exerDay=[["Chair Dips", "Modified Pushups", "Wall Pushups"],
["Side Lunge", "One Legged Hip Thrusts", "Side lying Leg Raises"], 
["Side Plank", "Leg Raises", "Scissors"],
["Chair Dips", "Modified Pushups", "Wall Pushups"],
["Side Lunge", "One Legged Hip Thrusts", "Side lying Leg Raises"], "StomachDay", "CheatDay"]

export default class ExerciseScreen extends React.Component{
    constructor(){
    super();
    this.state={
      day: "",
      exerciseOne:"",
      exerciseDay:""
    }
  }
  getCurrentDate(){
    let d = new Date()
    this.setState({day:d.getDay()}) 
    
  }
  fetchExercise(){
    this.setState({exerciseDay:exerDay[this.state.day]})
    this.setState({exerciseOne:this.state.exerciseDay[0]})
    console.log(this.state.day)
    console.log(this.state.exerciseDay)
  }
  componentDidMount(){
    this.getCurrentDate()
    this.fetchExercise()
  }
displayImages(){
  var exerImage
  if (exerDay[0][2]=="Chair Dips"){
   exerImage= require("./assets/Arm-ChairDips.png")
  } else if (exerDay[0][2]=="Modified Pushups"){
    exerImage= require("./assets/Arm-ModifiedPushups.png")
  } else if (exerDay[0][2]=="Wall Pushups"){
    exerImage= require("./assets/Arm-WallPushups.png")
  } else if (exerDay[0][2]=="One Legged Hip Thrusts"){
   exerImage= require("./assets/Leg-OneLeggedHipThrusts.png")
  } else if (exerDay[0][2]=="Side Lunge"){
   exerImage= require("./assets/Leg-SideLunge.png")
  } else if (exerDay[0][2]=="Side Lying Leg Raises"){
    exerImage= require("./assets/Leg-SideLyingLegRaises.png")
  } else if (exerDay[0][2]=="Leg Raises"){
    exerImage= require("./assets/Stomach-legRaises.png")
  } else if (exerDay[0][2]=="Scissors"){
   exerImage= require("./assets/Stomach-Scissors.png")
  } else if (exerDay[0][2]=="Side Plank"){
   exerImage= require("./assets/Stomach-sidePlank.png")
  }
  return(
    <View> 
    <Image  style={styles.exerciseImage} source={exerImage} >  </Image>
    </View>
  )
}
  render(){
    return(
      <View style={styles.container}>
      <Text style={styles.header}> Exercise Three: </Text> 
      <Text style={styles.days}>  {exerDay[0][2]} </Text>
      {this.displayImages()}
      <TouchableOpacity style={styles.nextExer} onPress={()=>{
         this.props.navigation.navigate("WeekSummary")
      }}> See This Week's Summary </TouchableOpacity>
      </View>
    )
  }
}

const styles= StyleSheet.create({
  exerciseImage:{
    width:200,
    height: 200
  },
  header: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
    color: "#6f64a3"
  },
  days:{
      color:"#6f64a3",
    fontWeight:800
  },
  nextExer:{
    borderRadius: 20,
    backgroundColor: "black",
    color: "white",
    width: 150,
    height: 50,
    justifyContent:"center", 
    textAlign:"center"
  },
  container:{
    justifyContent: "center",
    alignItems: "center"
  }
})

