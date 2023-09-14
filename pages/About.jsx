/*eslint-disable*/
import axios from 'axios';
import { useEffect, useState } from 'react';
import {SafeAreaView, Text, FlatList, View, StyleSheet,
 Image, Touchable, TouchableOpacity, Button} from 'react-native';
 import { useNavigation, useRoute } from '@react-navigation/native';



const styles = StyleSheet.create({
 card: {
  margin: 20,
  height: "90%",
  shadowColor: "#000",
  shadowOffset: {
  width: 0,
 },
 shadowOpacity: 0.43,
 shadowRadius: 9.51,
 elevation: 15,
 backgroundColor: "#fff",
 borderRadius: 10
 },


 text: {
  margin: -80 ,
  paddingTop: 0,
  justifyContent: 'center',
  textAlign: 'center'
 },
 image: {
  width: "80%",
  height: "50%",
  margin: 10,
  marginTop: 30

 },
 textLoc: {
  marginTop: -30,
  marginLeft: 100,
 },
 name: {
  marginLeft: 80,
  marginTop: 5,
  position: 'absolute',
  fontSize: 30,
  color: "#516d3f"
 },
  texts: {
    margin: 1,
    fontSize: 20,
    textAlign: "center",
    color: "#516d3f"
  }
})
const RenderItem = ({character, id} ) => {
 console.log(id)
 const {name, status, gender, origin, location} = character;
 if(character.id === id) {
  console.log("id", id)
 }
 return (
  <View style={styles.card}>
   <Text style={styles.text}>{name}</Text>
   <Text>{status.name}</Text>
   <Text>{gender.name}</Text>
   <Text>{origin.name}</Text>
   <Text>{location.name}</Text>
  </View>
 )
}

const About = ({id}) => {

 const [character, setCharacter] = useState();
 const {params} = useRoute(); //aqui eu to pegando o id, ai uso useRoute
//  const {id} = params;
 console.log(params.id, "id")
 const renderData = async () => {
   const {data} = await axios.get(`https://rickandmortyapi.com/api/character/${params.id}`);
   if(data) {
    console.log(character)
    setCharacter(data);
   }
 }

 useEffect(() => {
  renderData()
  console.log("character", character)


 }, [])


 return (
  <SafeAreaView >
   {character?
   <View style={styles.card}>
   <Text></Text>
   <Text style={styles.name}>{character.name}</Text>
   <Image
     source={{uri: character.image}}
     style={styles.image}
    />
  <View style={styles.viewText}>
   <Text style={styles.texts}>Status: {character.status}</Text>
   <Text style={styles.texts}>Species: {character.species}</Text>
   <Text style={styles.texts}>Gender: {character.gender}</Text>
   </View>
   </View>
   : "" }

  </SafeAreaView>
 );
};


export default About;