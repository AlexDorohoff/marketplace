/* eslint-disable react/no-access-state-in-setstate */
import React from 'react';
import Helmet from 'react-helmet';
import GridCol from 'arui-feather/grid-col';
import GridRow from 'arui-feather/grid-row';
import Button from 'arui-feather/button';
import Popup from 'arui-feather/popup';
import PravilaTile from './TilePravila/Tile';
import Footer from '../../../../components/Common/Footer';
import Breadcrumbs from '../../../../components/Pravila/BreadcrumbsPravila';
import { pravBreadcrumbs } from '../../../../core/utils/testData';
import Scroll from '../ScrollTotop';
import RequestForm from '../../../../components/Site/Forms/RequestForm_reg';
import './styles.scss';
/**
 * pravila-of-our-house
 */
class Teacher extends React.Component {

  state = {
    isOpenPopup: false,
  };

  refPopup;

  refTarget;

  componentDidMount() {
    this.refPopup.setTarget(this.refTarget.control);
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Море-Политика Нашего Дома</title>
          <meta name="description" content="Море" />
          <meta name="keywords" content="Море" />
        </Helmet>
        <section className="section breadcrumbs">
          <Breadcrumbs items={pravBreadcrumbs} />             
          <Scroll />
        </section>
        <section className="section section_fullwidth">
          <div className="regul">
            <GridRow>
              <GridCol width={{ mobile: 12, tablet: 6 }} />
              <GridCol width={{ mobile: 12, tablet: 6 }}>
                <div>
                  <h1>
                    Правила Нашего Дома
                  </h1>
                  <div className="bold18">Знакомство с юридическими условиями и политиками торговой площадки «Море»</div>
                  <div className="teacher-more">
                    <Button
                      ref={(target) => { this.refTarget = target; }}
                      size="m"
                      onClick={() => this.setState({ isOpenPopup: !this.state.isOpenPopup })}
                      className="button button_link"
                    />
                    <Popup
                      ref={(popup) => { this.refPopup = popup; }}
                      visible={this.state.isOpenPopup}
                      onClickOutside={() => this.setState({ isOpenPopup: false })}
                      mainOffset={10}
                    >
                      <div className="teacher-more-popup" />
                    </Popup>
                  </div>
                </div>
                <GridCol width={{ mobile: 12, tablet: 6 }}>
                  <form>
                    <input type="text1" name="q" placeholder="Поиск политик" />
                  </form>
                </GridCol>
              </GridCol>
            </GridRow>
          </div>
        </section>
        <div className="online-learning">
          <GridRow>
            <section className="section">
              <PravilaTile />
              <br />
              <h3 className="text-center">Часто задаваемые вопросы</h3>
              <GridRow>
                <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }} className="online-learning">
                  <p><a className="link4" href="api-terms-of-use"><strong>Как можно присоединить мой ресурс к «Море»?</strong></a></p>
                  <p>
                    Публичный API SEA of MoeVse позволяет разработчикам подключаться к ...
                  </p>
                </GridCol>
                <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }} className="online-learning">
                  <p><a className="link4" href="referral-policy"><strong>Как разместить товар бесплатно?</strong></a></p>
                  <p>
                    Для участия необходимо войти в свой личный кабинет. Сформировать пр...
                  </p>
                </GridCol>
                <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }} className="online-learning">
                  <p><a className="link4" href="/NotFound"><strong>Как осуществляется оплата за покупку?</strong></a></p>
                  <p>Оплата осуществляется по закрытым каналам и защищена...</p>
                </GridCol>
              </GridRow>
            </section>
          </GridRow>
        </div>
        <div className="online-learning">
          <p className="bold18 text-center">Получайте информацию о новостях, акциях, бонусах прямо на ваш почтовый ящик</p>
          <GridRow>
            <section className="section">
              <RequestForm formType="teacher" />
            </section>
          </GridRow>
        </div>
        <Footer />
      </>
    );
  }
}

export default Teacher;
