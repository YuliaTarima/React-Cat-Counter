import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

  const navItems = [
  {
    text : 'Home',
    link : 'home-page'
  },
  {
      text : 'Services',
      link : 'products-page'
    },
    {
        text : 'Prices',
        link : 'prices-page'
      },
    {
        text : 'Products',
        link : 'products-page',
        navItemDropdown : [
        {
            text : 'Product1',
            link : 'product1-page'
        },
        {
            text : 'Product2',
            link : 'product2-page'
        },
       {
            text : 'Product3',
            link : 'product3-page'
        }
        ]
      }
  ];

  const socialShareLinks = [
    {
      text : 'Facebook',
      link : 'facebook-page'
    },
    {
      text : 'OK',
      link : 'ok-page'
    },
    {
      text : 'vk',
      link : 'vk-page'
    },
    {
      text : 'Twitter',
      link : 'twitter-page'
    }
  ]
function App() {
  
  return (
    <div className="App">
      <div id="main-container" className="container p-3 my-3 border">
        <Header navItems={navItems}/>
        <Content />
        <Footer navItems={navItems} socialShareLinks={socialShareLinks} />
      </div>
    </div>
  );
}

export default App;
