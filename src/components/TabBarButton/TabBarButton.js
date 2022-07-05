import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TabBarButton = ({icon, onPress, color = 'grey'}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name={icon} size={30} color={color} />
    </TouchableOpacity>
  );
};

export default TabBarButton;
