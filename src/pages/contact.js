import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import Footer from '@sections/Footer';
import Contact from '@sections/Contact';


const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <Contact/>
    <Footer />
  </Layout>
);

export default IndexPage;
