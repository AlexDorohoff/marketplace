import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Dashboard from './Dashboard';
import Header from '../../components/Common/Header';
import Footer from '../../components/Common/Footer';
import Student from './Student';
import Teacher from './Teacher';
import Headteacher from './Headteacher';
import Course from './Course';
import Modals from './Modals';
import Teacher1 from './Teacher1';
import UpdateTeacher from './UpdateTeacher';
import UpdateCourse from './UpdateCourse';
import Teacher1History from './Teacher1History';
import Teacher1Review from './Teacher1Review';
import Teacher1Timetable from './Teacher1Timetable';
import ProCreation from './ProCreation';
import Student1 from './Student1';
import { getCourses } from '../../core/actions/courses';
import { getTeachers } from '../../core/actions/teachers';
import {getCategories} from "../../core/actions/categories";

/**
 * My
 */
export default function My() {
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
      <Header isUser />
      <main className="layout__main">
        <Switch>
          <Route path="/my/student" component={Student} />
          <Route path="/my/create-good" component={Teacher} />
          <Route path="/my/update-shop" component={UpdateTeacher} />
          <Route path="/my/update-good/:id" component={UpdateCourse} />
          <Route path="/my/headteacher" component={Headteacher} />
          <Route path="/my/create-good1" component={Course} />
          <Route path="/my/modals" component={Modals} />
          <Route exact path="/my/lk" component={Teacher1} />
          <Route exact path="/my/lk/history" component={Teacher1History} />
          <Route exact path="/my/lk/review" component={Teacher1Review} />
          <Route exact path="/my/lk/timetable" component={Teacher1Timetable} />
          <Route exact path="/my/lk/procreation" component={ProCreation} />
          <Route path="/my/student1" component={Student1} />
          <Route path="*" component={Dashboard} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}
