import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Image, SafeAreaView } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native';

import Search from './components/Search';
import Authors from './components/Authors';
import UserPosts from './components/UserPosts';

import { usersData } from './data/users';
import { postsData } from './data/posts';
//import { getData } from './data/api';

const App = () => {
  const [ users, setUsers ] = useState(usersData ? usersData : 'No users');
  const [ posts, setPosts ] = useState(postsData ? postsData : 'No posts');
  const [ title, setTitle ] = useState('Authors');
  const [ currentUser, setCurrentUser ] = useState('');
  const [ searchInput, setSearchInput ] = useState('');

  setPostsCount();

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

  function findUserPosts() {
    return posts.filter(post => post.userId === currentUser);
  }


  return (
    <NativeRouter>
      <View>
        <Text>{title}</Text>
      </View>
      <Search setInputValue={setSearchInput} currentValue={searchInput} />
      <View>
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Authors users={users} setAuthor={setCurrentUser} />}
          />

          <Route
            exact
            path="/posts"
            component={() => <UserPosts posts={findUserPosts()}/>}
          />
        </Switch>
      </View>
    </NativeRouter>
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
});

export default App;
