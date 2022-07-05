import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './CardWord.style';

const CardWord = ({onPress, word, proverb}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.border} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            {word ? word[0].madde : proverb[0].madde}
          </Text>
          <Text style={styles.detail}>
            {word ? word[0].anlam : proverb[0].anlam}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CardWord;
