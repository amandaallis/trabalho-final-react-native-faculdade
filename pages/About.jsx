/*eslint-disable*/
import axios from 'axios';
import { useEffect, useState } from 'react';
import {SafeAreaView, Text, FlatList, View, StyleSheet,
 Image, Touchable, TouchableOpacity, Button} from 'react-native';
 import { useNavigation, useRoute } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';



const styles = StyleSheet.create({
 card: {
  margin: 20,
  height: "95%",
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
  justifyContent: 'center',
  textAlign: 'center'
 },
 image: {
  width: "80%",
  height: "50%",
  margin: 30,
  marginTop: 30
 },
 name: {
  marginLeft: 80,
  marginTop: 5,
  position: 'absolute',
  fontSize: 30,
  color: "#516d3f",
  textAlign: "center"
 },
  texts: {
    marginRight: 50,
    marginLeft: 50,
    marginTop: 10,
    borderColor: "#2f903d",
    borderWidth: 2,
    borderRadius: 10,
    margin: 1,
    fontSize: 15,
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
  const insets = useSafeAreaInsets();

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
<View style={{ paddingBottom: Math.max(insets.bottom, 16) }} >
     {character?
   <View style={styles.card}>
   <Text></Text>
   <Text style={styles.name}>{character.name}</Text>
   <Image
     source={{uri: character.image}}
     style={styles.image}
    />
  <View style={styles.viewText}>
    <Text style={styles.texts}>Status: {character.name}</Text>
    <Text style={styles.texts}>Species: {character.status}</Text>
    <Text style={styles.texts}>Gender: {character.species}</Text>
    <Text style={styles.texts}>Gender: {character.gender}</Text>
    <Text style={styles.texts}>Gender: {character.origin.name}</Text>
    <Text style={styles.texts}>Gender: {character.location.name}</Text>
   </View>
   </View>
   : "" }

  </View>
 );
};


export default About;