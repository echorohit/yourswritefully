import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import Footer from '@sections/Footer';
import Brands from '@sections/Brands';
import Clients from '@sections/Clients';
import Services from '@sections/Services';
import Contact from '@sections/Contact';
import About from '@sections/About';


const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <Services />
    <Brands />
    <Clients />
    <About/>
    <Contact/>
    <Footer />
  </Layout>
);

export default IndexPage;
