import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Type from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import Link from 'arui-feather/link';
import { NavLink } from 'react-router-dom';
import Edo from '../../../theme/images/logo-education.svg';
import Salebasket from '../../../theme/images/menu/salebasket.jpg';
import AppBar from '../AppBar';
import TopLinks from '../TopLinks';
import UseNavigation from '../../../core/connectors/navigation';
import SignInOrSignUpDialog from '../../Site/Dialogs/SignInOrSignUp';
import './styles.scss';
import Lk from '../../../theme/images/lk.jpg';
import HeaderMenu from '../HeaderMenu';
import HeaderMenuMobile from '../HeaderMenuMobile';
import { getSelf, logout } from '../../../core/actions/session';
import {
  getCoursesByTitle,
  searchCoursesByPartOfTitleOrTag,
} from '../../../core/actions/courses';
import {
  getTeachersByTitle,
  searchTeachersByPartOfTitleOrTag,
} from '../../../core/actions/teachers';
import { searching } from '../../../core/actions/search';
import closeIcon from '../../../theme/images/menu/close.svg';

function Header({ navigationTo, router: { location }, isUser = false }) {
  const session = useSelector(state => state.session);
  const dispatch = useDispatch();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenMenuMobile, setIsOpenMenuMobile] = useState(false);
  let searchInput;
  // const [radioValue, setRadioValue] = useState('');

  useEffect(() => {
    if (
      (location.pathname === '/my/teacher1' ||
        location.pathname === '/my/student1') &&
      !session.user
    ) {
      dispatch(getSelf(''));
    }
  }, []);

  const handleClickMenu = () => {
    setIsOpenMenu(!isOpenMenu);
    if (!isOpenMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const handleClickMenuMobile = () => {
    setIsOpenMenuMobile(!isOpenMenuMobile);
  };

  const handleAuth = () => {
    dispatch(getSelf('self'));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleCloseDialog = () => {
    dispatch({ type: 'AUTH_SHOW_DIALOG', payload: false });
  };

  const navTo = to => () => {
    dispatch(getCoursesByTitle());
    dispatch(getTeachersByTitle());
    setIsOpenMenu(false);
    setIsOpenMenuMobile(false);
    navigationTo(to);
  };

  const [searchText, setSearchText] = useState('');

  // const search = useSelector(state => state.search);
  const courses = useSelector(state => state.courses);

  const searchByTitlesAndTags = () => {
    dispatch(searchCoursesByPartOfTitleOrTag(searchText));
    dispatch(
      searchTeachersByPartOfTitleOrTag(searchText, courses.inputCourses)
    );
  };

  const doSearch = () => {
    if (searchText !== '') {
      dispatch(searching(true, searchText));
      navTo('/')();
      searchByTitlesAndTags();
      setSearchText('');
    }else{
      searchInput.focus();
    }
  };

  return (
    <>
      <AppBar position={isOpenMenu ? 'sticky' : 'static'}>
        <TopLinks />
        <div>
          <section className="section nav">
            <Link
              pseudo
              className="link link_third"
              onClick={() => {
                document.body.style.overflow = '';
                dispatch(searching(false));
                navTo('/')();
              }}
            >
              <img className="logo" src={Edo} alt="Море" />
            </Link>
            <div className="top-controls">
              <div className="top-controls-menu desktop">
                <Link
                  pseudo
                  onClick={handleClickMenu}
                  className={`menu-button ${
                    isOpenMenu ? 'menu-button_close' : 'menu-button_open'
                  }`}
                >
                  {isUser ? 'Каталог' : 'Меню'}
                </Link>
              </div>
              <div className="top-controls-search">
                <Link pseudo>
                  <FaSearch className="search-pic" onClick={() => doSearch()} />
                  <input
                    ref={(input) => { searchInput = input; }}
                    type="text"
                    placeholder="Найти"
                    value={searchText}
                    onChange={event => {
                      setSearchText(event.target.value);
                    }}
                    onKeyDown={e => {
                      if (e.keyCode === 13) {
                        doSearch();
                      }
                    }}
                  />
                  {searchText !== '' && (
                    <img
                      alt="close"
                      src={closeIcon}
                      onClick={() => {
                        setSearchText('');
                      }}
                    />
                  )}
                </Link>
              </div>
            </div>

            <div className="login">
            <NavLink className="link link_third" to="/cart">
						<div className="top-controls-salebasket">
							<img src={Salebasket} className="salebasket-pic" title="Покупки" alt="Корзина"/>
						</div>
					</NavLink>
              {isUser || session.authenticated ? (
                location.pathname === '/my/teacher1' ||
                location.pathname === '/my/student1' ? (
                  <div className="login-links">
                    <Link
                      pseudo
                      className="login-links-enter"
                      onClick={handleLogout}
                    >
                      Выход
                    </Link>
                  </div>
                ) : (
                  <>
                    <div className="login-pic">
                      <img className="" src={Lk} alt="Личный кабинет" />
                    </div>
                    {session.user.type && session.user.type === 'teacher' ? (
                      <div className="login-links desktop">
                        <NavLink
                          to="/my/teacher1"
                          className="link login-links-lk"
                        >
                          Личный кабинет
                        </NavLink>
                        <NavLink
                          to="/my/teacher1"
                          className="link login-links-course"
                        >
                          Мои курсы
                        </NavLink>
                      </div>
                    ) : (
                      <div className="login-links desktop">
                        <NavLink
                          to="/my/student1"
                          className="link login-links-lk"
                        >
                          Личный кабинет
                        </NavLink>
                        <NavLink
                          to="/my/student1"
                          className="link login-links-course"
                        >
                          Мои курсы
                        </NavLink>
                      </div>
                    )}
                  </>
                )
              ) : (
                <div className="login-links">
                  <Link
                    pseudo
                    className="login-links-enter"
                    onClick={handleAuth}
                  >
                    Вход
                  </Link>
                </div>
              )}
              <Link
                pseudo
                onClick={handleClickMenuMobile}
                className={`menu-button menu-button-mobile ${
                  isOpenMenuMobile ? 'menu-button_close' : 'menu-button_open'
                } mobile`}
              />
              {/*
                  <div className="icon-menu mobile" onClick={handleClickMenuMobile}>
                    <img className="" src={MenuIcon} alt="Меню" />
                  </div>
                  */}
            </div>

            {/*{isUser && (*/}
            {/*  <GridRow className="choice">*/}
            {/*    <GridCol width={{ mobile: 6, tablet: 2, desktop: 2 }}>*/}
            {/*      <Radio*/}
            {/*        text="Школа"*/}
            {/*        value="school"*/}
            {/*        checked={radioValue === 'school'}*/}
            {/*        onChange={isChecked => setRadioValue('school')}*/}
            {/*      />*/}
            {/*    </GridCol>*/}
            {/*    <GridCol width={{ mobile: 6, tablet: 4, desktop: 4 }}>*/}
            {/*      <span className="radio-2">*/}
            {/*        <Radio*/}
            {/*          text="Университет"*/}
            {/*          value="university"*/}
            {/*          checked={radioValue === 'university'}*/}
            {/*          onChange={isChecked => setRadioValue('university')}*/}
            {/*        />*/}
            {/*      </span>*/}
            {/*    </GridCol>*/}
            {/*    <GridCol width={{ mobile: 6, tablet: 3, desktop: 3 }}>*/}
            {/*      <span className="radio-3">*/}
            {/*        <Radio*/}
            {/*          text="Курсы"*/}
            {/*          value="courses"*/}
            {/*          checked={radioValue === 'courses'}*/}
            {/*          onChange={isChecked => setRadioValue('courses')}*/}
            {/*        />*/}
            {/*      </span>*/}
            {/*    </GridCol>*/}
            {/*    <GridCol width={{ mobile: 6, tablet: 3, desktop: 3 }}>*/}
            {/*      <Radio*/}
            {/*        text="Библиотека"*/}
            {/*        value="library"*/}
            {/*        checked={radioValue === 'library'}*/}
            {/*        onChange={isChecked => setRadioValue('library')}*/}
            {/*      />*/}
            {/*    </GridCol>*/}
            {/*  </GridRow>*/}
            {/*)}*/}
          </section>
        </div>
      </AppBar>
      <HeaderMenu isOpen={isOpenMenu} navTo={navTo} onClose={handleClickMenu} />
      <HeaderMenuMobile
        isOpen={isOpenMenuMobile}
        navTo={navTo}
        onClose={handleClickMenuMobile}
      />
      <SignInOrSignUpDialog
        open={session.showDialog}
        onClose={handleCloseDialog}
      />
    </>
  );
}

Header.propTypes = {
  navigationTo: Type.func.isRequired,
  router: Type.object.isRequired,
  isUser: Type.bool,
};

export default UseNavigation(Header);
