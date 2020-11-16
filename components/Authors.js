import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Search from './Search';

const Authors = ({ users }) => {
  const [ filteredUsers, setFilteredUsers ] = useState([]);

  return (
    <View>
      <Search users={users} setUsers={setFilteredUsers} />
      <FlatList
        data={filteredUsers.length ? filteredUsers : users}
        style={styles.usersList}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => Actions[`user${item.id}`]()}
            activeOpacity={0.7}
          >
            <View
              style={styles.listElement}
            >
              <View style={styles.shortcutContainer}>
                <Text style={styles.shortcutText}>
                  {(
                    item.name.split(' ')[0][0]
                    + item.name.split(' ')[1][0]
                  )}
                </Text>
              </View>
              <View style={styles.mainContainer}>
                <View style={styles.authorInfo}>
                  <Text
                    style={styles.authorName}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={styles.authorMail}
                  >
                    {item.email}
                  </Text>
                </View>
                <View style={styles.authorPosts}>
                  <Text
                    style={styles.postsText}
                  >
                    {item.posts} posts
                  </Text>
                  <Image
                    source={require('../images/chevron.png')}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listElement: {
    flexDirection: 'row',
    flexGrow: 1,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 30,
  },

  shortcutContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#6FCF97',
    borderRadius: 20,
  },

  shortcutText: {
    textAlign: 'center',
    lineHeight: 40,
    fontSize: 14,
    fontWeight: '500',
  },

  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexGrow: 1,
    paddingLeft: 16,
  },

  authorInfo: {
  },

  authorName: {
    fontSize: 16,
  },

  authorMail: {
    fontSize: 12,
    color: '#382A2C',
    opacity: 0.54,
  },

  authorPosts: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  postsText: {
    fontSize: 16,
    marginRight: 18,
  },
})

export default Authors;
