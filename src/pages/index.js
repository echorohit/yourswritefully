import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import About from '@sections/About';
import Brands from '@sections/Brands';
import Team from '@sections/Team';
// import About from '@sections/About';
import Clients from '@sections/Clients';
import Services from '@sections/Services';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <Services />>
    <Clients />
    <Brands />
    <Team />
    <About />
    <Footer />
  </Layout>
);

export default IndexPage;
