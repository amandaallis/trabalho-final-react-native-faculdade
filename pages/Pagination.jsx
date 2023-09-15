import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  totalPagination: {
    backgroundColor: '#516d3f',
  },
  card: {
    height: 100,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    borderRadius: 10,
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
    backgroundColor: '#fff',
  },
  text: {
    position: 'absolute',
    width: '100%',
    justifyContent: 'center',
    textAlign: 'center',
  },
  image: {
    margin: 10,
    width: '20%',
    height: '80%',
  },
  textLoc: {
    position: 'absolute',
    marginTop: 30,
    marginLeft: 100,
  },
  apiTitle: {
    textAlign: 'center',
    margin: 10,
    fontSize: 30,
    color: '#ffffff',
  },
  imagePagination: {
    width: '100%',
    height: 220,
  },
});

const RenderItem = ({character}) => {
  const {name, image, location, id} = character;
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('About', {id})}>
      <View style={styles.card}>
        <Image source={{uri: image}} style={styles.image} />
        <Text style={styles.text}>{name}</Text>

        <Text style={styles.textLoc}>Ultima localização: {location.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Pagination = () => {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const insets = useSafeAreaInsets();
  const renderData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${page}`,
      );
      const results = response.data.results;
      setCharacter(prev => [...prev, ...results]);
      setPage(prev => prev + 1);
    } catch (error) {
      console.error('Erro ao obter personagens:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    renderData();
  }, []);

  return (
    <View
      style={[
        styles.totalPagination,
        {
          paddingTop: insets.top,
        },
      ]}>
      <View>
        <Image
          source={require('../images/Rick-and-Morty.webp')}
          style={styles.imagePagination}
        />
        <Text style={styles.apiTitle}>The Rick and Morty API</Text>
      </View>
      <FlatList
        data={character}
        renderItem={({item}) => <RenderItem character={item} />}
        refreshing={loading}
        onRefresh={renderData}
        onEndReachedThreshold={0.1}
        onEndReached={renderData}
        ListFooterComponent={<ActivityIndicator size={'large'} />}
      />
    </View>
  );
};

export default Pagination;