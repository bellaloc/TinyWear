// src/App.jsx

import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ShoppingCart from './components/ShoppingCart';
import CheckoutButton from './components/CheckoutButton';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="">
          <Navbar />
          <Routes>
            <Route path="/shoppingcart" element={<ShoppingCart />} />
            <Route path="/checkoutbutton" element={<CheckoutButton />} />
            {/* Add more routes as needed */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App;
