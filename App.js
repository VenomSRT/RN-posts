import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Image, SafeAreaView } from 'react-native';
import Authors from './components/Authors';
import UserPosts from './components/UserPosts';
import { usersData } from './data/users';
import { postsData } from './data/posts';
//import { getData } from './data/api';

const App = () => {
  const [ users, setUsers ] = useState(usersData ? usersData : 'No users');
  const [ posts, setPosts ] = useState(postsData ? postsData : 'No posts');
  const [ searchInput, setSearchInput ] = useState('');
  const [ title, setTitle ] = useState('Authors');
  const [ currentUser, setCurrentUser ] = useState('');
  
  setPostsCount();

  useEffect(setPostsCount, [posts]);
  useEffect(() => {
    if(currentUser) {
      setPosts(posts.filter(post => post.userId === currentUser));
      setTitle(users.find(user => user.id === currentUser).name);
    } else {
      setPosts(postsData);
    }    
  }, [currentUser]);

  function setPostsCount() {
    let postsCount = 0;

    for (let user of users) {
      for (let post of posts) {
        if (user.id === post.userId) {
          postsCount++;
        }
      }

      user.posts = postsCount;
      postsCount = 0;
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {title}
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <Image
          style={styles.searchIcon}
          source={require('./images/search-icon.png')}
        />
        <TextInput
          style={styles.search}
          placeholder='Search'
        />
      </View>

      {title === 'Authors' ?
        <Authors users={users} userSetter={setCurrentUser}/> :
        <UserPosts user={users.find(user => user.id === title)} posts={posts} />
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 20,
    marginHorizontal: 16,
  },

  titleContainer: {
    height: 40,
    flexDirection: 'row',
  },

  title: {
    fontSize: 16,
    lineHeight: 40,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
  }
});

export default App;
