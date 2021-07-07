import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Image, } from 'react-native';

const Search = ({ itemsToFilter, setItems }) => {
  const [ input, setInput ] = useState('');

  useEffect(() => {
    if (input) {
      const lowerInput = input.toLowerCase();

      setItems(itemsToFilter.filter(item => {
        if (item.name) {
          return item.name.toLowerCase().includes(lowerInput) ||
          item.email.toLowerCase().includes(lowerInput);
        } else if (item.title) {
          return item.title.toLowerCase().includes(lowerInput) ||
          item.body.toLowerCase().includes(lowerInput);
        }

        return false;
        
      }))
    } else {
      setItems([]);
    }
    
  }, [input])

  return (
    <View style={styles.searchContainer}>
      <Image
        style={styles.searchIcon}
        source={require('../images/search-icon.png')}
      />
      <TextInput
        style={styles.search}
        placeholder='Search'
        onChangeText={text => setInput(text)}
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
    marginVertical: 20,
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
});

export default Search;