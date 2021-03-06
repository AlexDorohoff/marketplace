import React, {useRef, useState} from 'react';
import Helmet from 'react-helmet';
import ScrollTop from "react-scrolltop-button";
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Button from 'arui-feather/button';
import Popup from 'arui-feather/popup';
import {FiChevronDown} from 'react-icons/fi';
import {useSelector} from 'react-redux';
import Breadcrumbs from '../../../components/Common/Breadcrumbs';
import connectorCourses from '../../../core/connectors/courses';
import CourseBlock from '../../../components/Site/CourseBlock';
import Footer from '../../../components/Common/Footer';
import './styles.scss';
// import Loader from '../../../components/Common/Loader';
import {getItemsByCategory} from "../../../core/actions/categories";

/**
 *  Showcase
 */

const Searchcase = ({match}) => {
    const categories = useSelector(state => state.categories.inputCategories);
    const {id} = match.params;
    let rub; // переменная вывода подкатегории
    let a;

    if (categories.length > 0) {
      categories.map((category) => {
              if (category.children.length !== 0) {
// --- ПОДКАТЕГОРИЯ начало
                  const childs = category.children;
                      if (childs.length > 0) {
                          childs.map((child) => {
                              if (child.id == id ) {
                                rub = child.name;  
                              }
                          });
                          return;
                      }
                  };
// --- ПОДКАТЕГОРИЯ ОКОНЧАНИЕ
      });
};

const list1 = [{
      title: 'Главная',
      link: '/',
    },{
      title: 'Все товары',
      link: '/goods',
    },{
      title: rub,
      link: '',
    },
  ];

    const courses = useSelector(state => state.courses);
    let filtered=[];
      
if (courses.courses && courses.courses.length) {
    filtered = courses.courses.filter(item => item.category_id === id); // заменить 0 на id когда база с курсами пополнится записями с id < 0
    // console.log(id);
} 
if (filtered.length === 0) {  
    a = 'Сейчас в данной категории нет активных товаров';
}
// console.log(filtered);
  const [step, setStep] = useState(8);
  const outputCourses =
    filtered.length ? filtered.slice(0, step) : [];
  const isOutputCourses = outputCourses.length > 0;
  const isGetMore = isOutputCourses && filtered.length > step;

// *************************
    return (
      <>
        <Helmet>
          <title>Море-Результаты поиска</title>
          <meta name="description" content="Море" />
          <meta name="keywords" content="Море" />
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
        <section className="section section_fullwidth1 breadcrumbs">
          <Breadcrumbs items={list1} />  
        </section>
        <br />
        <section className="section section_fullwidth1">
          <p className="our-advantages-item-heading">{rub}</p>
          <br />
          {a}
    
      
          {/* <div className="select-subject">
            Выбрать товар
            <Button
              ref={refTarget}
              size="m"
              onClick={() => {
                if (!refPopup.current.anchor)
                  refPopup.current.anchor = refTarget.current.control;
                setIsOpenPopup(true);
              }}
              className="button button_link"
            >
              <FiChevronDown className="select-subject-icon" />
            </Button>
            {isOpenPopup && <div className="popup-overlay" />}
            <Popup
              ref={refPopup}
              visible={isOpenPopup}
              onClickOutside={() => setIsOpenPopup(false)}
              mainOffset={10}
              height="adaptive"
            >
              <div className="courses-more-popup">
                <ul>
                  <li
                    onClick={() => {
                      getCoursesByTitle();
                      setStep(6);
                    }}
                  >
                    Все товары
                  </li>
                  {getCoursesTitles(courses.inputCourses).map(title => {
                    return (
                      <li
                        key={`${title}${Math.random()}`}
                        onClick={() => {
                          getCoursesByTitle(title);
                          setStep(6);
                        }}
                      >
                        {title}
                      </li>
                    );
                  })}
                </ul>

              </div>
            </Popup>
          </div> */}
  
          <GridRow justify="left">
            {isOutputCourses &&
              outputCourses.map(course => (
                <GridCol
                  key={`${course.id}${Math.random()}`}
                  width={{ mobile: 12, tablet: 4, desktop: 3 }}
                >
                  <CourseBlock course={course} />
                </GridCol>
              ))}
          </GridRow>
          {isGetMore && (
          <div className="button-center">
            <Button
              className="button button_secondary"
              onClick={() => setStep(step + 6)}
            >
              Показать ещё
            </Button>
          </div>
          )}
        </section>
        <Footer />
      </>


    );
};

export default connectorCourses(Searchcase);
