import React from 'react';
import {View, Text} from 'react-native';
import styles from './CardExplanation.style';

const CardExplanation = ({word}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text>{word.anlam_sira}</Text>
        <Text style={styles.title}>
          {word.ozelliklerListe ? word.ozelliklerListe[0].tam_adi : 'isim'}
        </Text>
      </View>
      <Text style={styles.explanation}>{word.anlam}</Text>
      <Text style={styles.word}>
        {word.orneklerListe && word.orneklerListe[0].ornek}
      </Text>
    </View>
  );
};

export default CardExplanation;
