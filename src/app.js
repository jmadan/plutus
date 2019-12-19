import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import ProductCategories from './modules/views/ProductCategories';
import AppFooter from './modules/views/AppFooter';
import HomeHero from './modules/views/HomeHero';
import AppAppBar from './modules/views/AppAppBar';


const sections = [
    { title: 'Automotive', url: '#' },
    { title: 'Books & Magazines', url: '#' },
    { title: 'Computing', url: '#' },
    { title: 'Dining & Takeaway', url: '#' },
    { title: 'Education', url: '#' },
    { title: 'Electrical & Electronics', url: '#' },
    { title: 'Entertainment', url: '#' },
    { title: 'Fashion', url: '#' },
    { title: 'Financial', url: '#' },
    { title: 'Gaming', url: '#' },
    { title: 'Groceries', url: '#' },
    { title: 'Health & Beauty', url: '#' },
    { title: 'Home & Garden', url: '#' },
    { title: 'Internet', url: '#' },
    { title: 'Mobile', url: '#' },
    { title: 'Pets', url: '#' },
    { title: 'Sports & Outdoors', url: '#' },
    { title: 'Toys & Kids', url: '#' },
    { title: 'Travel', url: '#' },
    { title: 'Other', url: '#' }
  ]

function App(){
  return (
    <React.Fragment>
      <AppAppBar />
      <HomeHero />
      <ProductCategories />
      <AppFooter />
    </React.Fragment>
  )
}

export default withRoot(App)