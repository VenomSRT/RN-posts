import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import Search from './Search';

const UserPosts = ({ posts }) => {

  return (
    <View style={styles.listContainer}>
      <Search />
      <FlatList
        data={posts}
        renderItem={({item}) => (
          <View style={styles.listItem}>
            <Text
              style={styles.postTitle}
            >
              {item.title}
            </Text>
            <Text style={styles.postBody}>
              {item.body}
            </Text>
          </View>
        )}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    height: '100%',
  },

  listItem: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    backgroundColor : "#fff",
    marginHorizontal: 16,
    marginBottom: 24,
    paddingVertical: 12,
    paddingHorizontal: 18,
  },

  postTitle: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 9,
  },

  postBody: {
    color: '#382A2C',
    opacity: 0.54,
  }
})

export default UserPosts;
