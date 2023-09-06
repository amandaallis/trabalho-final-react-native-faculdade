/*eslint-disable*/ 
import axios from 'axios';
import { useEffect, useState } from 'react';
import {SafeAreaView, Text, FlatList, View, StyleSheet, Image, Touchable, TouchableOpacity, Button} from 'react-native';
import About from './About';

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
const RenderItem = ({character}) => {
  const {name, image, location} = character
  return (
    <View 
      style={styles.card}>
      
      {console.log(image)}

      <Image 
        source={{uri: image}}
        style={styles.image}
      />
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.textLoc}>localização {location.name}</Text>


    </View>
  )
}

const Pagination = ({navigation}) => {

  const [character, setCharacter] = useState([]);

  const renderData = async () => {
    const data = await axios.get('https://rickandmortyapi.com/api/character/');
    setCharacter(data.data.results);
  }

  useEffect(() => {
    renderData()
  }, [])

  

  return (
    <SafeAreaView >
            <Button title='a' onPress={() => navigation.navigate(About)}/>

      <TouchableOpacity 
        onPress={() => {
            navigation.navigate("navigation")
      }}

  />
       <FlatList
        data={character}
        renderItem={({item}) => <RenderItem character={item}/>}
      />
    </SafeAreaView>
  );
};

export default Pagination;