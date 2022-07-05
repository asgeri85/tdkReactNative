import React, {useEffect, useState} from 'react';
import {
  View,
  ImageBackground,
  Image,
  Animated,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import SearchBoxInput from '../../components/SearchBoxInput';
import styles from './Search.style';
import CardWord from '../../components/card/CardWord';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import Loading from '../../components/Loading/Loading';
import CardFavorites from '../../components/card/CardFavorites';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';
import InfoModal from '../../components/modal/InfoModal';

const Search = ({navigation}) => {
  const [fadeAnim] = useState(new Animated.Value(styles.image.height));
  const [opacityAnim] = useState(new Animated.Value(1));
  const [focus, setFocus] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const {data, loading, error, getAllData, getWordData, dataList} = useFetch(
    Config.API_URL,
  );
  const [searchWord, setSearchWord] = useState('');

  const box = {
    height: fadeAnim,
    opacity: opacityAnim,
  };

  const onClickCard = () => {
    navigation.navigate('Detay', {keyword: data.kelime[0]});
  };

  const onClickSearchItem = item => {
    navigation.navigate('Detay', {keyword: item});
  };

  const renderWord = ({item}) => (
    <CardFavorites
      word={item}
      iconName="arrow-right-circle"
      onPress={() => onClickSearchItem(item)}
    />
  );

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    if (searchWord.length >= 3) {
      getWordData(searchWord);
    }
  }, [searchWord]);

  useEffect(() => {
    getAllData();
  }, [getAllData]);

  useEffect(() => {
    if (focus) {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 30,
          duration: 150,
          useNativeDriver: false,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 150,
          useNativeDriver: false,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: styles.image.height,
          duration: 100,
          useNativeDriver: false,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 100,
          useNativeDriver: false,
        }),
      ]).start();
    }
  }, [fadeAnim, focus, opacityAnim, setFocus]);

  return (
    <View style={styles.container}>
      <Animated.View style={box}>
        <ImageBackground
          source={require('../../assets/bg.jpg')}
          style={[styles.image]}>
          <TouchableOpacity style={styles.menu} onPress={toggleModal}>
            <Icon name="menu" color="white" size={25} />
          </TouchableOpacity>
          <Image source={require('../../assets/logo.png')} />
        </ImageBackground>
      </Animated.View>
      <View style={styles.searchBox}>
        <SearchBoxInput
          placeHolder="Türkçe Sözlükte Ara"
          onChangeFocus={focus => setFocus(focus)}
          onChangeText={setSearchWord}
          value={searchWord}
          clearInput={() => setSearchWord('')}
        />
      </View>
      {!focus ? (
        loading ? (
          <Loading />
        ) : (
          <View style={styles.detail}>
            <View style={styles.expressionContainer}>
              <Text style={styles.textExpression}>Bir deyim</Text>
              <CardWord onPress={onClickCard} word={data.kelime} />
            </View>
            <View style={styles.expressionContainer}>
              <Text style={styles.textExpression}>Bir Deyim - Atasözü </Text>
              <CardWord proverb={data.atasoz} />
            </View>
            <InfoModal visible={isModalVisible} onCancel={toggleModal} />
          </View>
        )
      ) : (
        <View style={styles.searchContainer}>
          {dataList.length > 0 ? (
            <View style={styles.searchListContainer}>
              <FlatList
                data={dataList}
                renderItem={renderWord}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          ) : (
            <View style={styles.emptyContainer}>
              <Text>Aradığınız sözcük bulunamadı.</Text>
              <Icon name="book-open-variant" size={45} />
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default Search;
