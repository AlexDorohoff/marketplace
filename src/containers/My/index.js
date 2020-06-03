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

/**
 * My
 */
export default function My() {
  const dispatch = useDispatch();
  const coursesState = useSelector(state => state.courses);
  const { courses } = coursesState;
  const teachersState = useSelector(state => state.teachers);
  const teachers = teachersState.data;

  useEffect(() => {
    if (courses.length < 1 && !courses.fetching) {
      dispatch(getCourses());
    }
    if (teachers.length < 1 && !teachers.fetching) {
      dispatch(getTeachers());
    }
  }, []);

  return (
    <>
      <Header isUser />
      <main className="layout__main">
        <Switch>
          <Route path="/my/student" component={Student} />
          <Route path="/my/create-teacher" component={Teacher} />
          <Route path="/my/update-teacher" component={UpdateTeacher} />
          <Route path="/my/update-course/:id" component={UpdateCourse} />
          <Route path="/my/headteacher" component={Headteacher} />
          <Route path="/my/create-course" component={Course} />
          <Route path="/my/modals" component={Modals} />
          <Route exact path="/my/teacher1" component={Teacher1} />
          <Route exact path="/my/teacher1/history" component={Teacher1History} />
          <Route exact path="/my/teacher1/review" component={Teacher1Review} />
          <Route exact path="/my/teacher1/timetable" component={Teacher1Timetable} />
          <Route exact path="/my/teacher1/procreation" component={ProCreation} />
          <Route path="/my/student1" component={Student1} />
          <Route path="*" component={Dashboard} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}
