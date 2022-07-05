import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './MarkButton.style';

const MarkButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Icon name="hand-back-left" size={25} />
      <Text style={styles.text}>Türk İşaret Dili</Text>
    </TouchableOpacity>
  );
};

export default MarkButton;
