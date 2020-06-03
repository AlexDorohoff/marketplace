import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'arui-feather/button';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import './styles.scss';

/**
 * Home banner
 */
export default function HomeBanner({ banner }) {
  const history = useHistory();
  return (
    <GridRow className="home-banner">
      <GridCol width={{ mobile: 12, tablet: 6 }}>
        <h1>{banner.title}</h1>
        <p>{banner.txt}</p>
        <Button
          className="button button_secondary"
          onClick={() => history.push('/courses')}
        >
          Начать
        </Button>
      </GridCol>
      <GridCol width={{ mobile: 0, tablet: 6 }} className="vetcenter">
        <img className="home-banner-image" src={banner.img} alt="" />
      </GridCol>
    </GridRow>
  );
}
