import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './ActionButton.style';

const ActionButton = ({name, color, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name={name} size={30} color={color} />
    </TouchableOpacity>
  );
};

export default ActionButton;
