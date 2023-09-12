/*eslint-disable*/
import axios from 'axios';
import { useEffect, useState } from 'react';
import {SafeAreaView, Text, FlatList, View, StyleSheet, 
  Image, Touchable, TouchableOpacity, Button} from 'react-native';
  import { useNavigation, useRoute } from '@react-navigation/native';


const styles = StyleSheet.create({
  card: {
    height: 100,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 7,
  },
  shadowOpacity: 0.43,
  shadowRadius: 9.51,
  elevation: 15,
  backgroundColor: "#fff",
  },

  text: {
    margin: -80 ,
    paddingTop: 0,
    justifyContent: 'center',
    textAlign: 'center'
  },
  image: {
    width: 100, 
    height: 80
  },
  textLoc: {
    marginTop: -30,
    marginLeft: 100,
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

const About = () => {

  const [character, setCharacter] = useState();
  const {params} = useRoute(); //aqui eu to pegando o id, ai uso useRoute
  const {id} = params;
  const renderData = async () => {
    if(id) {
      const {data} = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
      setCharacter(data);
    }

  }

  useEffect(() => {
    renderData()
    console.log("character", character)

  }, [])

  return (
    <SafeAreaView >
       <FlatList
        data={character}
        renderItem={({item}) => <RenderItem character={item}/>}
      />
    </SafeAreaView>
  );
};

export default About;