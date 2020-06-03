import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Helmet from 'react-helmet';
import FooterMain from '../../../components/Common/FooterMain';

const UnderDevelopment = () => {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  }, [location]);

  return (
    <>
      <Helmet>
        <title>Under Development</title>
        <meta name="description" content="Under Development" />
        <meta name="keywords" content="Under Development" />
      </Helmet>
      <section className="section section_under_development">
        Сервис находится в разработке
      </section>
      <FooterMain />
    </>
  );
};

export default UnderDevelopment;
