import React from 'react';
import {TouchableWithoutFeedback, View, Text} from 'react-native';
import styles from './CardFavorites.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CardFavorites = ({word, onPress, onClickIcon, favorite, iconName}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      {favorite ? (
        <View style={styles.container}>
          <Text style={styles.title}>{word}</Text>
          <Icon
            name={iconName}
            size={25}
            color="#E11E3C"
            style={styles.icon}
            onPress={onClickIcon}
          />
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.title}>{word.madde}</Text>
          <Icon
            name={iconName}
            size={25}
            color="#E11E3C"
            style={styles.icon}
            onPress={onClickIcon}
          />
        </View>
      )}
    </TouchableWithoutFeedback>
  );
};

export default CardFavorites;
