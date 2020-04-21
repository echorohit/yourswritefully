import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title: `Who are We?`,
    content: () => (
      <>
        Yours Writefully the name suggests is a creative boutique that offers all sorts of communication-
        related services under one roof.
        A young and dynamic company, founded by a set of experienced professionals who strive to
        create customer delight, and learn something novel in the process. We are a team of
        hardworking folks who intend to make a difference in this big competitive world.
      </>
    ),
  },
  {
    title: `What We Do?`,
    content: () => (
      <>
      Amid the clichéd failures and success, we are trying to prepare an a la carte of communication related services – content creation, content marketing, content strategy, social media content, UX/UI copywriting, creative writing – for you.   
      We have been serving patrons from across the globe with zeal and commitment for quite a while now. Since we bring to use latest technologies, newest trends, and put in great research, our work articulates quality, timely delivery and pocket-friendliness. This indeed has got us appreciation of our clientele.    
      Our effective offerings are backed by prompt and efficient services, supported by advanced technology. And this sums up why we are a charmer when it comes to customer satisfaction. 
      
      </>
    ),
  },
  {
    title: 'Why Work With Us?',
    content: () => (
      <>
      When you work with us, you can expect commitment of our team working towards the success of your project. 
      We seek to make your hassling task of end-to-end content generation easy, we are all set to strategize and develop content as per your needs. 
      Our team carries finesse to produce copies and content which can get traffic on your website, increase sales and drive ROI.
      </>
    ),
  },
];

const Faq = () => (
  <Section id="about">
    <Container>
      <h1 style={{ marginBottom: 40 }}>About Us</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
