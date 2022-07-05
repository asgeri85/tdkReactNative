import React, {useEffect, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View, Keyboard} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './SearchBoxInput.style';

const SearchBoxInput = ({
  placeHolder,
  onChangeFocus,
  value,
  onChangeText,
  clearInput,
}) => {
  const [isFocused, setFocused] = useState(false);

  useEffect(() => {
    onChangeFocus(isFocused);
  }, [isFocused, onChangeFocus]);

  const onCancel = () => {
    setFocused(false);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Icon name="magnify" size={20} />
        <TextInput
          placeholder={placeHolder}
          placeholderTextColor="#48515B"
          onFocus={() => setFocused(true)}
          value={value}
          onChangeText={onChangeText}
          style={{flex: 1}}
        />
        {value && (
          <Icon
            name="backspace"
            size={18}
            style={styles.delete}
            onPress={clearInput}
          />
        )}
      </View>
      {isFocused && (
        <TouchableOpacity style={styles.buttonContainer} onPress={onCancel}>
          <Text style={styles.buttonTitle}>Vazgeç</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBoxInput;
