import React from 'react';
import {View, ImageBackground, Image} from 'react-native';
import Modal from 'react-native-modal';
import styles from './InfoModal.style';
import CustomButton from '../../button/CustomButton';

const InfoModal = ({visible, onCancel, onPress}) => {
  return (
    <Modal
      isVisible={visible}
      onBackButtonPress={onCancel}
      onBackdropPress={onCancel}
      onSwipeComplete={onCancel}
      style={styles.modal}>
      <View style={styles.container}>
        <ImageBackground
          source={require('../../../assets/bg.jpg')}
          style={styles.imageBackground}
          imageStyle={styles.imageStyle}>
          <Image
            source={require('../../../assets/logo.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </ImageBackground>
        <View style={styles.buttonContainer}>
          <CustomButton title="Hakkında" />
        </View>
      </View>
    </Modal>
  );
};

export default InfoModal;
