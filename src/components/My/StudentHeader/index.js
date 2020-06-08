import React from 'react';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import { NavLink } from 'react-router-dom';
import Type from 'prop-types';
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
import ImgSettings from '../../../theme/images/account/img-settings.svg';
import Hat from '../../../theme/images/account/hat.svg';
import CountDown from '../CountDown/CountDown';
import config from '../../../config';
import Loader from '../../Common/Loader';
import '../../../theme/styles/settings.scss';

const StudentHeader = ({ profile }) => {
  const name = profile.user ? profile.user.name : '';
  const fio = name.split(' ');

  return (
    <>
      <section className="section section_fullwidth">
        <div
          className="student-settings"
          // style={{
          //   backgroundImage: `url(${config.baseUrl}/avatars/${profile.user.image})`,
          // }}
        >
          <GridRow>
            <GridCol width={{ mobile: 0, tablet: 6, desktop:2 }}>
              <div className="">
                {
                profile.fetching ? 
                  <Loader /> :
                (profile.user ? <img
                  style={{ width: '144px'}}
                  src={`${config.baseUrl}/avatars/${profile.user.image}?${Date.now().toString()}`}
                  alt={profile.user.name}
                /> : null)
              }
              </div>
            </GridCol>
            {/* <GridCol width={{ mobile: 12, tablet: 6, desktop: 10 }}> */}

              <GridCol className="" width={{ mobile: 12, tablet: 12, desktop: 5 }}>
                <div className="">
                  <div className="">
                    <NavLink className="link link_third" to="/my/student">
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
                  <img className="starsize" src={Hat} alt="" />
                  <img className="starsize" src={Hat} alt="" />
                  <img className="starsize" src={Hat} alt="" />
                  <img className="starsize" src={Hat} alt="" />
                  <img className="starsize" src={Hat} alt="" />
                </div>
              </GridCol>

              <GridCol width={{ mobile: 12, tablet: 12, desktop: 5 }}>              
                <div className="">
                  <div className="timer-description">
                    Ближайшая доставка
                  </div>
                  <div className="timer-block">
                    <CountDown date="2020-06-25 15:47" />
                  </div>
                </div>
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
                  <div className="info-lk-soc">
                    <div className="info-lk-soc-title">В соцсетях</div>

                    {/* {profile.user.profile.vk && ( */}
                    {/*  <a href={profile.user.profile.vk}> */}
                    {/*    <FaVk */}
                    {/*      size="25px" */}
                    {/*      style={{ color: '#555', marginLeft: '5px' }} */}
                    {/*    /> */}
                    {/*  </a> */}
                    {/* )} */}

                    {/* {profile.user.profile.facebook && ( */}
                    {/*  <a href={profile.user.profile.facebook}> */}
                    {/*    <FaFacebookF */}
                    {/*      size="25px" */}
                    {/*      style={{ color: '#555', marginLeft: '5px' }} */}
                    {/*    /> */}
                    {/*  </a> */}
                    {/* )} */}
                    {/* {profile.user.profile.twitter && ( */}
                    {/*  <a href={profile.user.profile.twitter}> */}
                    {/*    <FaTwitter */}
                    {/*      size="25px" */}
                    {/*      style={{ color: '#555', marginLeft: '5px' }} */}
                    {/*    /> */}
                    {/*  </a> */}
                    {/* )} */}
                    {/* {profile.user.profile.telegram && ( */}
                    {/*  <a href={profile.user.profile.telegram}> */}
                    {/*    <FaTelegramPlane */}
                    {/*      size="25px" */}
                    {/*      style={{ color: '#555', marginLeft: '5px' }} */}
                    {/*    /> */}
                    {/*  </a> */}
                    {/* )} */}
                    {/* {profile.user.profile.viber && ( */}
                    {/*  <a href={profile.user.profile.viber}> */}
                    {/*    <FaViber */}
                    {/*      size="25px" */}
                    {/*      style={{ color: '#555', marginLeft: '5px' }} */}
                    {/*    /> */}
                    {/*  </a> */}
                    {/* )} */}

                    {/* {profile.user.profile.whatsapp && ( */}
                    {/*  <a */}
                    {/*    href={`https://api.whatsapp.com/send?phone=${profile.user.profile.whatsapp}`} */}
                    {/*  > */}
                    {/*    <FaWhatsapp */}
                    {/*      size="25px" */}
                    {/*      style={{ color: '#555', marginLeft: '5px' }} */}
                    {/*    /> */}
                    {/*  </a> */}
                    {/* )} */}
                    {/* {profile.user.profile.instagram && ( */}
                    {/*  <a href={profile.user.profile.instagram}> */}
                    {/*    <FaInstagram */}
                    {/*      size="25px" */}
                    {/*      style={{ color: '#555', marginLeft: '5px' }} */}
                    {/*    /> */}
                    {/*  </a> */}
                    {/* )} */}
                    {/* {profile.user.profile.youtube && ( */}
                    {/*  <a href={profile.user.profile.youtube}> */}
                    {/*    <FaYoutube */}
                    {/*      size="25px" */}
                    {/*      style={{ color: '#555', marginLeft: '5px' }} */}
                    {/*    /> */}
                    {/*  </a> */}
                    {/* )} */}
                    {/* {profile.user.profile.ok && ( */}
                    {/*  <a href={profile.user.profile.ok}> */}
                    {/*    <FaOdnoklassniki */}
                    {/*      size="25px" */}
                    {/*      style={{ color: '#555', marginLeft: '5px' }} */}
                    {/*    /> */}
                    {/*  </a> */}
                    {/* )} */}
                  </div>
                </div>
                {/* </div> */}
              </GridCol>
            {/* </GridCol> */}
          </GridRow>
          {/* <br />
          <div className="hr2" /> */}
        </div>
        <br />
        <div className="hr2" />
      </section>
    </>
  );
};

StudentHeader.propTypes = {
  profile: Type.object.isRequired,
};

export default StudentHeader;
