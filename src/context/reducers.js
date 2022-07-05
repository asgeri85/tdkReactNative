import {Alert} from 'react-native';

export default function (state, action) {
  switch (action.type) {
    case 'ADD_WORD': {
      const {word} = action.payload;
      const filter = state.wordList.find(item => item === word);
      if (!filter) {
        const newList = [...state.wordList, word];
        return {...state, wordList: newList};
      } else {
        Alert.alert('Hata', 'Kelime favorilerde mevcut');
        return state;
      }
    }

    case 'REMOVE_WORD': {
      const {word} = action.payload;
      const words = state.wordList.filter(item => item !== word);
      return {...state, wordList: words};
    }

    default: {
      return state;
    }
  }
}
