import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import HomePage from './Home';
import Shop from './Shop';
import Teachers from './Teachers';
import Teacher from './Teacher';
import Courses from './Courses';
import Showcase from './Showcase';
import Course from './Course';
import NotFoundPage from './NotFound';
import UnderDevelopment from './UnderDevelopment';
import Client from './Pravila/Client';
import Experts from './Pravila/Experts';
import Third from './Pravila/Thirdparties';
import PravilaHome from './Pravila/Pravila home';
import Privacy from './Pravila/Privacy';
import Anti from './Pravila/Anti-discrimPolicy';
import Commun from './Pravila/CommunityPolicy';
import Market from './Pravila/Marketing';
import Forbidden from './Pravila/ForbiddenDealPolicy';
import Intellect from './Pravila/IntellectualPropertyPolicy';
import Referr from './Pravila/ReferralPolicy';
import Affiliate from './Pravila/AffiliatePolicy';
import Apiterms from './Pravila/APIterms';
import Terms from './Pravila/TermsOfUse';
import Soglasie152Fz from './Pravila/Soglasie152Fz';
import CookiePolicy from './Pravila/CookiePolicy';
import CookieAbout from './Pravila/CookieAbout';
import TradeMark from './Pravila/TradeMark';
import Arbitration from './Pravila/Arbitration';
import UserAgreement from './Pravila/UserAgreement';

import Header from '../../components/Common/Header';
import { getCourses } from '../../core/actions/courses';
import { getTeachers } from '../../core/actions/teachers';
import {getCategories} from "../../core/actions/categories";


export default function Site() {
  const dispatch = useDispatch();
  const coursesState = useSelector(state => state.courses);
  const { courses } = coursesState;
  const teachersState = useSelector(state => state.teachers);
  const teachers = teachersState.data;
  const categoriesState = useSelector(state => state.categories);
  const { categories } = categoriesState;


  useEffect(() => {
    if (courses.length < 1 && !courses.fetching) {
      dispatch(getCourses());
    }
    if (teachers.length < 1 && !teachers.fetching) {
      dispatch(getTeachers());
    }
    if (categories.length < 1 && !categories.fetching) {
      dispatch(getCategories());
    }
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shops" component={Teachers} />
          <Route path="/shop/:id" component={Teacher} />
          <Route path="/goods" component={Courses} />
          <Route path="/showcase/:id" component={Showcase} />
          <Route path="/good/:id" component={Course} />

          <Route path="/pravila-of-our-house" component={PravilaHome} />
          <Route path="/policy-experts" component={Experts} />
          <Route path="/policy-client" component={Client} />
          <Route path="/third-party-policies" component={Third} />
          <Route path="/privacy-policy" component={Privacy} />
          <Route path="/anti-discrimination-policy" component={Anti} />
          <Route path="/community-policy" component={Commun} />
          <Route path="/marketing-advertising" component={Market} />
          <Route path="/forbidden-deal-policy" component={Forbidden} />
          <Route path="/intellectual-property-policy" component={Intellect} />
          <Route path="/referral-policy" component={Referr} exact />
          <Route path="/affiliate-policy" component={Affiliate} exact />
          <Route path="/api-terms-of-use" component={Apiterms} exact />
          <Route path="/terms-of-use" component={Terms} exact />
          <Route path="/soglasie-na-obrabotku-dannyh-152-fz" component={Soglasie152Fz} exact />
          <Route path="/about-cookie" component={CookieAbout} />
          <Route path="/policy-cookie" component={CookiePolicy} />
          <Route path="/policy-trademark" component={TradeMark} />
          <Route path="/policy-useragreement" component={UserAgreement} />
          <Route path="/policy-arbitration" component={Arbitration} />

          {/* <Route path="/cart" component={CartPage} /> */}
          <Route path="/shop" component={Shop} exact />
          <Route path="/under-development" component={UnderDevelopment} exact />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </main>
    </>
  );
}
