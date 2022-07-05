import React from 'react';
import {View} from 'react-native';
import styles from './Tapbar.style';
import TabBarButton from '../TabBarButton';

const TabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        return (
          <View key={index} style={styles.container}>
            {label === 'Search' ? (
              <View style={styles.searchContainer}>
                <View style={styles.search}>
                  <TabBarButton
                    icon="magnify"
                    onPress={onPress}
                    color="white"
                  />
                </View>
              </View>
            ) : (
              <View>
                <TabBarButton
                  icon={label === 'History' ? 'history' : 'bookmark-outline'}
                  onPress={onPress}
                  color={isFocused ? '#E11E3C' : 'grey'}
                />
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
};

export default TabBar;
