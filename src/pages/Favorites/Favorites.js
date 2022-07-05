import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import CardFavorites from '../../components/card/CardFavorites';
import styles from './Favorites.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Favorites = () => {
  const wordList = useSelector(selector => selector.wordList);
  const dispatch = useDispatch();

  const renderWord = ({item}) => (
    <CardFavorites
      word={item}
      onClickIcon={() => removeWord(item)}
      favorite
      iconName="trash-can-outline"
    />
  );

  const removeWord = item => {
    dispatch({type: 'REMOVE_WORD', payload: {word: item}});
  };

  return (
    <View style={styles.container}>
      {wordList.length > 0 ? (
        <FlatList
          data={wordList}
          renderItem={renderWord}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Icon name="bookmark-outline" size={50} />
          <Text>Henuüz Favori yok</Text>
        </View>
      )}
    </View>
  );
};

export default Favorites;
