import React, { useState, useEffect } from 'react';
import { FlatList, ListItem, StyleSheet, Text, View } from 'react-native';

const UserPosts = ({ user, posts }) => {
  return (
    <FlatList
      data={posts}
      renderItem={({item}) => (
        <View style={styles.listItem}>
          <Text style={styles.postTitle}>
            {item.title}
          </Text>
          <Text style={styles.postBody}>
            {item.body}
          </Text>
        </View>
      )}
      keyExtractor={(item) => `${item.id}`}
    />
  );
};

const styles = StyleSheet.create({
  listItem: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    marginBottom: 24,
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
