import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
// Components
import Header from './components/Header';
// Screens
import Home from './screens/Home';
import UserRegister from './screens/UserRegister';
import aboutus from './screens/aboutus';
import UserProfile from './screens/UserProfile';
import UserList from './screens/UserList';
import UserLogin from './screens/UserLogin';
import UserEdit from './screens/UserEdit';
import blog from './screens/blog';
import prod from './screens/prod';
import product from './screens/product';
import product2 from './screens/product2';
import product3 from './screens/product3';
import product4 from './screens/product4';
import product5 from './screens/product5';
import product6 from './screens/product6';
import product7 from './screens/product7';
import product8 from './screens/product8';
import product9 from './screens/product9';
import product10 from './screens/product10';
import product11 from './screens/product11';
import product12 from './screens/product12';

const App = () => {
  return (
    <Router>
      <main>
      <Header />
        <Route path='/' component={Home} exact />
        <Container>
          <Route path='/register' component={UserRegister} />
          <Route path='/login' component={UserLogin} />
          <Route path='/user/profile' component={UserProfile} />
          <Route path='/admin/user/:id/edit' component={UserEdit} />
          <Route path='/admin/user/list' component={UserList} />
          <Route path='/aboutus' component={aboutus} />
          <Route path ='/prod' component ={prod} />
          <Route path ='/blog' component ={blog} />
          <Route path ='/product' component ={product} />
          <Route path ='/product2' component ={product2} />
          <Route path ='/product3' component ={product3} />
          <Route path ='/product4' component ={product4} />
          <Route path ='/product5' component ={product5} />
          <Route path ='/product6' component ={product6} />
          <Route path ='/product7' component ={product7} />
          <Route path ='/product8' component ={product8} />
          <Route path ='/product9' component ={product9} />
          <Route path ='/product10' component ={product10} />
          <Route path ='/product11' component ={product11} />
          <Route path ='/product12' component ={product12} />
        </Container>
      </main>
    </Router>
  );
};

export default App;

