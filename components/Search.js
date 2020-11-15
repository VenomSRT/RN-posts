import React from 'react';
import { StyleSheet, View, TextInput, Image, } from 'react-native';

const Search = ({ setInputValue, currentValue }) => {
  return (
    <View style={styles.searchContainer}>
      <Image
        style={styles.searchIcon}
        source={require('../images/search-icon.png')}
      />
      <TextInput
        style={styles.search}
        placeholder='Search'
        onChangeText={text => setInputValue(text)}
        value={currentValue}
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 28,
    paddingLeft: 11,
    borderRadius: 4,
    backgroundColor: '#e5e5e5',
  },

  searchIcon: {
    width: 18,
    height: 18,
  },

  search: {
    flex: 1,
    flexGrow: 1,
    height: 40,
    paddingLeft: 12,
  },
})

export default Search;