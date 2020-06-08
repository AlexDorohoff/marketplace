import React from 'react';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import { NavLink } from 'react-router-dom';
import {
  FaVk,
  FaFacebookF,
  FaTwitter,
  FaTelegramPlane,
  FaViber,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaOdnoklassniki,
} from 'react-icons/fa';
import Type from 'prop-types';
import ImgSettings from '../../../theme/images/account/img-settings.svg';
import CountDown from '../CountDown/CountDown';
import config from '../../../config';
import Loader from '../../Common/Loader';
import { yearsPlural } from '../../../core/utils/common';
import Star1 from '../../../theme/images/star1.svg';

const TeacherHeader = ({ profile }) => {
  const name = profile.user ? profile.user.name : '';
  const fio = name.split(' ');

  return (
    <>
      <section className="section section_fullwidth">
        <div className="teacher-settings">
          <GridRow>
            <GridCol width={{ mobile: 0, tablet: 6 }}>
              {
                profile.fetching ? 
                  <Loader /> :
                (profile.user ? <img
                  style={{ width: '100%' }}
                  src={`${config.baseUrl}/avatars/${profile.user.image}?${Date.now().toString()}`}
                  alt={profile.user.name}
                /> : null)
              }
            </GridCol>
            <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }}>

              <GridCol width={{ mobile: 12, tablet: 12, desktop: 12 }}>
                <div className="">
                  <div className="">
                    <NavLink className="link link_third" to="/my/update-shop">
                      <img src={ImgSettings} style={{margin: '0 6px -6px 0'}} alt="" />
                      Настройки
                    </NavLink>
                  </div>
                  {
                  name !== '' &&
                  <h1 className="about-h1">
                    {fio[0]}
                    <br />
                    {`${fio[1] ? fio[1] : ''} ${fio[2] ? fio[2] : ''}`}
                  </h1>
                }
                  <img className="starsize" src={Star1} alt="" />
                  <img className="starsize" src={Star1} alt="" />
                  <img className="starsize" src={Star1} alt="" />
                  <img className="starsize" src={Star1} alt="" />
                  <img className="starsize" src={Star1} alt="" />
                </div>
              </GridCol>
                
              <GridCol width={{ mobile: 12, tablet: 12, desktop: 12 }}>
                <div className="teacher-expir">
                  На рынке:&nbsp;
                  {profile.user && profile.user.profile &&
                    yearsPlural(profile.user.profile.experience)}
                </div>
                <div className="teacher-expir">
                  {profile.user && profile.user.profile && profile.user.profile.edo}
                </div>

                <br />
                <div className="">
                  <div className="timer-description">
                    Ближайшая доставка
                  </div>
                  <div className="timer-block">
                    <CountDown date="2020-06-25 15:47:00" />
                  </div>
                </div>
                <br />
                <div className="info-lk">
                  <div className="info-lk-contact">
                    <div className="info-lk-contact-title">
                      Личные данные
                    </div>
                    {
                      profile.user &&
                      <ul>
                        <li>{profile.user.email}</li>
                        <li>{profile.user.phone.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '+$1-$2-$3-$4-$5')}</li>
                      </ul>
                    }
                  </div>
                  <div
                    className="info-lk-soc"
                    style={{ textAlign: 'center' }}
                  >
                    <div className="info-lk-soc-title">В соцсетях</div>
                    {profile.user && profile.user.profile && profile.user.profile.vk && (
                      <a href={profile.user.profile.vk}>
                        <FaVk
                          size="25px"
                          style={{ color: '#555', marginLeft: '5px' }}
                        />
                      </a>
                    )}

                    {profile.user && profile.user.profile && profile.user.profile.facebook && (
                      <a href={profile.user.profile.facebook}>
                        <FaFacebookF
                          size="25px"
                          style={{ color: '#555', marginLeft: '5px' }}
                        />
                      </a>
                    )}
                    {profile.user && profile.user.profile && profile.user.profile.twitter && (
                      <a href={profile.user.profile.twitter}>
                        <FaTwitter
                          size="25px"
                          style={{ color: '#555', marginLeft: '5px' }}
                        />
                      </a>
                    )}
                    {profile.user && profile.user.profile && profile.user.profile.telegram && (
                      <a href={profile.user.profile.telegram}>
                        <FaTelegramPlane
                          size="25px"
                          style={{ color: '#555', marginLeft: '5px' }}
                        />
                      </a>
                    )}
                    {profile.user && profile.user.profile && profile.user.profile.viber && (
                      <a href={profile.user.profile.viber}>
                        <FaViber
                          size="25px"
                          style={{ color: '#555', marginLeft: '5px' }}
                        />
                      </a>
                    )}

                    {profile.user && profile.user.profile && profile.user.profile.whatsapp && (
                      <a
                        href={`https://api.whatsapp.com/send?phone=${profile.user.profile.whatsapp}`}
                      >
                        <FaWhatsapp
                          size="25px"
                          style={{ color: '#555', marginLeft: '5px' }}
                        />
                      </a>
                    )}
                    {profile.user && profile.user.profile && profile.user.profile.instagram && (
                      <a href={profile.user.profile.instagram}>
                        <FaInstagram
                          size="25px"
                          style={{ color: '#555', marginLeft: '5px' }}
                        />
                      </a>
                    )}
                    {profile.user && profile.user.profile && profile.user.profile.youtube && (
                      <a href={profile.user.profile.youtube}>
                        <FaYoutube
                          size="25px"
                          style={{ color: '#555', marginLeft: '5px' }}
                        />
                      </a>
                    )}
                    {profile.user && profile.user.profile && profile.user.profile.ok && (
                      <a href={profile.user.profile.ok}>
                        <FaOdnoklassniki
                          size="25px"
                          style={{ color: '#555', marginLeft: '5px' }}
                        />
                      </a>
                    )}
                  </div>
                </div>
                {/* </div> */}
              </GridCol>
            </GridCol>
          </GridRow>
        </div>
        <br />
        <div className="hr2" />
      </section>
    </>
  );
};

TeacherHeader.propTypes = {
  profile: Type.object.isRequired,
};

export default TeacherHeader;
