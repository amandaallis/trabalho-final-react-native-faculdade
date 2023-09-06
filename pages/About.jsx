/*eslint-disable*/
import axios from 'axios';
import { useEffect, useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  card: {
    height: 100,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
    backgroundColor: '#fff',
  },
});
const About = () => {
  const [episodio, setEpisodio] = useState();

  const renderData = async () => {
    const data = await axios.get("https://rickandmortyapi.com/api/character/")
    setEpisodio(data.data.episode)
  }

  useEffect(() => {
    renderData;
  }, [])
  return <View style={styles.card}><Text>{data}</Text></View>;
};

export default About;