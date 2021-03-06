import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import ScrollTop from "react-scrolltop-button";
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Button from 'arui-feather/button';
import TeacherBlock from '../../../components/Site/TeacherBlock';
import CourseBlock from '../../../components/Site/CourseBlock';
import HowWork from '../../../components/Site/HowWork';
import FooterMain from '../../../components/Common/FooterMain';
import CarouselHome from '../../../components/Site/Carousel/CarouselHome';
import MainSections from '../../../components/Site/MainSections';
import OnlineLearning from '../../../components/Site/OnlineLearning';
import OurAdvantages from '../../../components/Site/OurAdvantages';
import WhereToBegin from '../../../components/Site/WhereToBegin';
import connectorSearch from '../../../core/connectors/search';
import connectorTeachers from '../../../core/connectors/teachers';
import connectorCourses from '../../../core/connectors/courses';
import '../../../theme/styles/settings.scss';

function Home({ search, teachers, courses }) {

  if (search.search) {

    const [searchStepTeachers, setSearchStepTeachers] = useState(6);
    const [searchStepCourses, setSearchStepCourses] = useState(6);
    
    useEffect(() => {
      setSearchStepTeachers(6);
      setSearchStepCourses(6);
    }, [search.searchText]);

    const teachersSearchOutput = teachers.searchData.length > 0 ? teachers.searchData.slice(0, searchStepTeachers) : [];
    const coursesSearchOutput = courses.searchCourses.length > 0 ? courses.searchCourses.slice(0, searchStepCourses) : [];

    // $(document).ready(function(){
    //   $(window).scroll(function (){
    //       if ($(this).scrollTop('100px') > 0){
    //           $('#scroller').fadeIn();
    //       } else {
    //           $('#scroller').fadeOut();
    //       }
    //   });
      
    //   $('#scroller').click(function () {
    //       $('body,html').animate({scrollTop: 0}, 400); 
    //       return false;
    //   });
    // });
    

    return (
      <>
        <Helmet>
          <title>Море-маркетплейс для всех</title>
          <meta name="description" content="Море" />
          <meta name="keywords" content="Море" />
        </Helmet>
        {teachers.searchData.length > 0 &&
        <section className="section">
          Витрины
          <GridRow justify="left">
            {teachersSearchOutput.map(teacher => (
              <GridCol key={`${teacher.id}${Math.random()}`} width={{ mobile: 12, tablet: 6, desktop: 4 }}>
                <TeacherBlock teacher={teacher} />
              </GridCol>
            ))}
          </GridRow>
          {teachersSearchOutput.length >= searchStepTeachers && <div className="button-center m-t30">
            <Button 
              className="button button_secondary"
              onClick={() => setSearchStepTeachers(searchStepTeachers + 6)}
            >
              Показать ещё
            </Button>
          </div>}
        </section>}
        {courses.searchCourses.length > 0 &&
        <section className="section">
          Товары
          <GridRow justify="left">
            {coursesSearchOutput.map(course => (
              <GridCol key={`${course.id}${Math.random()}`} width={{ mobile: 12, tablet: 6, desktop: 4 }}>
                <CourseBlock course={course} />
              </GridCol>
            ))}
          </GridRow>

          {coursesSearchOutput.length >= searchStepCourses && <div className="button-center">
            <Button
              className="button button_secondary"
              onClick={() => setSearchStepCourses(searchStepCourses + 6)}
            >
              Показать ещё
            </Button>
          </div>}
        </section>}
        {
          teachers.searchData.length === 0 && courses.searchCourses.length === 0 &&
          <section className="section">
            {`Поиск по запросу "${search.searchText}" не дал результатов`}
          </section>
        }
        <FooterMain />
      </>
    )
  }

  return (
    <>
      <Helmet>
        <title>1Море-маркетплейс для всех</title>
        <meta name="description" content="Море" />
        <meta name="keywords" content="Home" />
      </Helmet>
      <ScrollTop
        text="Наверх"
        distance={50}
        breakpoint={900}
        style={{ backgroundColor: "#ffffff", color: '#1B60FF', border: '1px solid #1B60FF' }}
        className="scroll-your-role"
        speed={250}
        target={0}
      />
      <section className="section section_home_carousel">
        <CarouselHome />
      </section>
      <section className="section">
        <MainSections />
      </section>
      <section className="section">
        <OnlineLearning />
      </section>
      <section className="section">
        <OurAdvantages />
      </section>
      <section className="section">
        <HowWork />
      </section>
      <section className="section">
        <WhereToBegin />
      </section>
      {/* <div id="scroller" className="b-top" style={{display: 'none'}}>
        <span className="b-top-but">наверх</span>
      </div> */}
      <FooterMain />
    </>
  );
};

export default connectorCourses(connectorTeachers(connectorSearch(Home)));
