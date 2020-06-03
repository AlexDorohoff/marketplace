import React from 'react';
import Helmet from 'react-helmet';
import FooterMain from '../../../components/Common/FooterMain';

function Shop() {

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Shop" />
        <meta name="keywords" content="Shop" />
      </Helmet>
      <section className="section section_home_carousel">
        <p>Ресурс находится в разработке</p>
      </section>
      <FooterMain />
    </>
  );
};

export default Shop;
