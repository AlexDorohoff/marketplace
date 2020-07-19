import React, {useRef, useState} from 'react';
import Helmet from 'react-helmet';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Button from 'arui-feather/button';
import Popup from 'arui-feather/popup';
import {FiChevronDown} from 'react-icons/fi';
import {useSelector} from 'react-redux';
import connectorCourses from '../../../core/connectors/courses';
import CourseBlock from '../../../components/Site/CourseBlock';
import Footer from '../../../components/Common/Footer';
import './styles.scss';
import Loader from '../../../components/Common/Loader';
import {getItemsByCategory} from "../../../core/actions/categories";

/**
 *  Showcase
 */

const Searchcase = ({match}) => {
    const categories = useSelector(state => state.categories.inputCategories);
    let id = match.params.id;
    // const id1 = id;
    let rub; // переменная вывода подкатегории
    let parent;
    let mom;
    let a;
    let id_cat;
    // const outputCourses = [];


    if (categories.length > 0) {
      categories.map((category) => {
              if (category.children.length !== 0) {
// --- ПОДКАТЕГОРИЯ начало
                  const childs = category.children;
                      if (childs.length > 0) {
                          childs.map((child) => {
                              if (child.id == id ) {
                                rub = child.name;  
                                parent = child.parent_id;
                                mom = category.name;
                                id_cat = 0;
                                // alert('id1111'+id1) 
                                // alert('id'+id) 
                                // alert('child.id'+child.id) 
                                // alert('parent='+parent)  
                                // alert('id_cat'+id_cat)  

                                // if (id == parent && category.id == parent){
                                //   alert(parent+'fhe')
                                //   if (courses.fetching) {
                                //     return <Loader />;
                                //   }   
                            
                                // } else{
                            
                                //   alert ('ГОВНО')
                                // }


                                // if (courses.fetching) {
                                //   return <Loader />;
                                // }    
                              }
                          });
                          return;
                      }
                  };
// --- ПОДКАТЕГОРИЯ ОКОНЧАНИЕ
          // return;
      });
};


     
    const courses = useSelector(state => state.courses);
    // let id_cat = category_id;
    let filtered=[];

    // alert('courses.annotation='+ courses) 
    // alert('parent='+parent) 
    // if ((courses.category_id == id_cat)) {
    if ((parent == 1)) {
      // if ((id_cat == 0)) {
    if (courses.courses && courses.courses.length) {
        filtered = courses.courses.filter(item => item.category_id == 0); // заменить 0 на id когда база с курсами пополнится записями с id < 0
      }
  } else{
        a = 'Сейчас в данной категории нет активных товаров';
  }
    console.log(filtered);


    // alert((id));
// *******

    const [step, setStep] = useState(8);
    
// if ((id_cat == parent)) {
  

//     const outputCourses =
//     filtered.length ? filtered.slice(0, step) : [];

// }
    // const outputCourses = '';
    const outputCourses =
    filtered.length ? filtered.slice(0, step) : [];

  const isOutputCourses = outputCourses.length > 0;
  const isGetMore = isOutputCourses && filtered.length > step;

    // if (categories.id == parent){
    //   alert('fhe')

    // } else{

    //   alert ('ГОВНО')
    // }
    



  // if (courses.fetching) {
  //   return <Loader />;
  // }

// *************************
    return (
        // <p>Serchcase</p>

        <>
        <Helmet>
          <title>Море-Результаты поиска</title>
          <meta name="description" content="Море" />
          <meta name="keywords" content="Море" />
        </Helmet>
        <section className="section section_fullwidth1">
          <p className="our-advantages-item-heading">{rub}</p>
    <p className="our-advantages-item-heading">{rub}{'// parent='}{parent}{' ** '}{mom}</p>
    <br />
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
