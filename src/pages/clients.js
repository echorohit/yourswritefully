import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import Footer from '@sections/Footer';
import Clients from '@sections/Clients';


const ClientPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <Clients />
    <Footer />
  </Layout>
);

export default ClientPage;
