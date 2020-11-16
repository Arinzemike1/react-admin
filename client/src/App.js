import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import PostList from './components/PostList';
import UserList from './components/UserList';
import PostCreate from './components/PostCreate';
import PostEdit from './components/PostEdit';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';


function App() {
  return (
    <div>
      <Admin dataProvider={restProvider('http://localhost:3000')}>
        <Resource
          name="posts"
          list={PostList}
          create={PostCreate}
          edit={PostEdit}
        />
        <Resource
          name="users"
          list={UserList}
          create={CreateUser}
          edit={EditUser}
        />
      </Admin>

      
    </div>
  );
}

export default App;
