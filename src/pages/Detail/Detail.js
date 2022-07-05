import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import ActionButton from '../../components/button/ActionButton';
import styles from './Detail.style';
import MarkButton from '../../components/button/MarkButton';
import CardExplanation from '../../components/card/CardExplanation';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import Loading from '../../components/Loading';
import {useDispatch} from 'react-redux';
import Tts from 'react-native-tts';

const Detail = ({route}) => {
  const {keyword} = route.params;
  const {dataList, loading, error, getWordData} = useFetch(Config.API_URL);
  const dispatch = useDispatch();
  Tts.setDefaultLanguage('tr-TR ');

  useEffect(() => {
    getWordData(keyword.madde);
  }, [getWordData, keyword]);

  const renderMeaning = ({item}) => <CardExplanation word={item} />;

  const sepak = () => {
    Tts.speak(keyword.madde, {
      androidParams: {
        KEY_PARAM_PAN: -1,
        KEY_PARAM_VOLUME: 0.5,
        KEY_PARAM_STREAM: 'STREAM_MUSIC',
      },
    });
  };

  const handleWord = () => {
    dispatch({type: 'ADD_WORD', payload: {word: keyword.madde}});
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{keyword.madde}</Text>
        <Text>{keyword.lisan}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <ActionButton name="volume-high" color="#E11E3C" onPress={sepak} />
        <ActionButton name="bookmark-outline" onPress={handleWord} />
        <View style={styles.mark}>
          <MarkButton />
        </View>
      </View>
      {loading ? (
        <Loading />
      ) : (
        <View style={styles.list}>
          <FlatList
            data={dataList[0].anlamlarListe}
            renderItem={renderMeaning}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}
    </View>
  );
};

export default Detail;
