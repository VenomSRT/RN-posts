import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Authors from './components/Authors';
import UserPosts from './components/UserPosts';

import { usersData } from './data/users';
import { postsData } from './data/posts';
//import { getData } from './data/api';

const App = () => {
  const [ users, setUsers ] = useState(usersData ? usersData : 'No users');
  const [ posts, setPosts ] = useState(postsData ? postsData : 'No posts');  

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

  function findUserPosts(userId) {
    return posts.filter(post => post.userId === userId);
  }


  return (
    <Router>
      <Scene key="root">
          <Scene
            initial
            key="authors"
            title="Authors"
            component={() => <Authors users={users} />}
          />

          {users.map(user => (
              <Scene
                key={`user${user.id}`}
                title={user.name}
                component={() => <UserPosts posts={findUserPosts(user.id)} />}
              />
            )
          )}
      </Scene>
    </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginHorizontal: 16,
  },
});

export default App;
