import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const Authors = ({ users, userSetter }) => {

  return (
    <FlatList
      data={users}
      renderItem={({item}) => (
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
                onPress={() => userSetter(item.id)}
              >
                {item.posts} posts
              </Text>
              <Image
                source={require('../images/chevron.png')}
              />
            </View>
          </View>
        </View>
        
      )}
      keyExtractor={(item) => `${item.id}`}
      style={styles.usersList}
    />
  );
}

const styles = StyleSheet.create({
  listElement: {
    flexDirection: 'row',
    flexGrow: 1,
    flex: 1,
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: 'black',
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
    backgroundColor: 'pink',
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
    backgroundColor: 'yellow',
  },

  postsText: {
    fontSize: 16,
    marginRight: 18,
  },
})

export default Authors;
