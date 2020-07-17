import React, { useState } from 'react';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Link from 'arui-feather/link';
import MobileIcon from 'arui-feather/icon/ui/arrow-right';
import {useSelector} from 'react-redux';
import './styles.scss';

export default function HeaderMenu({ isOpen, navTo, onClose }) {
  const courses = useSelector(state => state.courses.inputCourses);
  const teachers = useSelector(state => state.teachers.inputData);
  const categories = useSelector(state => state.categories.inputCategories);
  let startCol = 0;
  let finishCol = 7;

  // --------первая колонка меню
  const firstCol = () => {
      if (categories.length > 0) {
          const list = [];
          categories.map((category, index) => {
              if (index >= startCol && index < finishCol) {
                  if (category.children.length !== 0) {
// --- Children вывод начало
                      let parent;
                      parent = category.id;
                      // alert((child));
                      // alert('GHBDTN')
                      // alert((category.id));
                      const childs = category.children;
                      const renderCategoryChild = () => {
                          if (childs.length > 0) {
                              const list1 = [];
                              childs.map((child, index) => {
                                  if (child.parent_id == parent ) {
                                      list1.push(
                                        <li key={index + Math.random()}>
                                          <Link
                                            pseudo
                                            className="link6 link6_third"
                                            key={child.id}
                                            onClick={navTo(`/showcase/${child.id}`)}
                                          >
                                            {child.name}
                                          </Link>
                                        </li>
                                      );
                                  }
                              });
                              return list1;
                          }
                      };
// --- Children вывод ОКОНЧАНИЕ
                      const subj = `subjects01${index}`;
                      list.push(
                          
                        <li key={index + Math.random()}>
                          <Link
                            pseudo
                            className="link5"
                            key={category.id}
                            onClick={handleClickMenuItem1(subj)}
                          >
                            <b>{category.name}</b>
                          </Link>
                          <ul
                            className={`header-menu-mobiles-sub-menu ${
                                      idSubMenu1 === subj
                                          ? 'header-menu-mobiles-sub-menu-open'
                                          : ''
                                  }`}
                          >
                            <li>
                              <ul>
                                {renderCategoryChild()}
                              </ul>
                            </li>
                          </ul>

                        </li>
                      );
                  } else {
                      list.push(
                        <li key={index + Math.random()}>
                          <Link
                            pseudo
                            className="link5"
                            key={category.id}
                            onClick={navTo(`/shop/${category.id}`)}
                            // onClick={navTo(`/shops`)}
                          >
                            {category.name}
                          </Link>
                        </li>
                      );
                  }
              }
          });
          return list;
      }
  };

  // *******************


  const renderCategory = () => {
    if (categories.length > 0) {
        const list = [];

        categories.map((category, index) => {
            if (index < 4 && category.parent_id <= 0) {
                list.push(
                  <li key={index + Math.random()}>
                    <Link
                      pseudo
                      className="link6 link6_third"
                      key={category.id}
                      onClick={navTo(`/shop/${category.id}`)}
                      // onClick={navTo(`/shops`)}
                    >
                      {category.name}
                    </Link>
                  </li>
                );
            }
        });
        return list;
    }
};
  const renderTeachers = () => {
    if (teachers.length > 0) {
        const list = [];
        teachers.map((teacher, index) => {
            if (index < 5) {
                list.push(
                  <li key={index + Math.random()}>
                    <Link
                      pseudo
                      className="link6 link6_third"
                      key={teacher.id}
                      onClick={navTo(`/shop/${teacher.id}`)}
                    >
                      {teacher.name}
                    </Link>
                  </li>
                );
            }
        });
        return list;
    }
};
  const renderCourses = () => {
    if (courses.length > 0) {
        const list = [];
        courses.map((course, index) => {
            if (index < 5) {
                list.push(
                  <li key={index + Math.random()}>
                    <Link
                      pseudo
                      className="link6 link6_third"
                      key={course.id}
                      onClick={navTo(`/good/${course.id}`)}
                    >
                      {course.title}
                    </Link>
                  </li>
                );
            }
        });
        return list;
    }
};

  const [ idSubMenu4, setIdSubMenu4 ] = useState('');
  const [ idSubMenu3, setIdSubMenu3 ] = useState('');
  const [ idSubMenu2, setIdSubMenu2 ] = useState('');
  const [ idSubMenu1, setIdSubMenu1 ] = useState('');
  const [ idSubMenu, setIdSubMenu ] = useState('');
  const handleClickMenuItem = (newIdSubMenu) => (event) => {
    event.preventDefault();
    setIdSubMenu(newIdSubMenu !== idSubMenu ? newIdSubMenu : '');
  };

  const handleClickMenuItem1 = (newIdSubMenu1) => (event) => {
    event.preventDefault();
    setIdSubMenu1(newIdSubMenu1 !== idSubMenu1 ? newIdSubMenu1 : '');
  };
  const handleClickMenuItem2 = (newIdSubMenu2) => (event) => {
    event.preventDefault();
    setIdSubMenu2(newIdSubMenu2 !== idSubMenu2 ? newIdSubMenu2 : '');
  };
  const handleClickMenuItem3 = (newIdSubMenu3) => (event) => {
    event.preventDefault();
    setIdSubMenu3(newIdSubMenu3 !== idSubMenu3 ? newIdSubMenu3 : '');
  };
  const handleClickMenuItem4 = (newIdSubMenu4) => (event) => {
    event.preventDefault();
    setIdSubMenu4(newIdSubMenu4 !== idSubMenu4 ? newIdSubMenu4 : '');
  };

  return (
    <div className={`header-menu-mobile${isOpen ? ' header-menu-mobile-open' : ''}`}>
      <section className="section header-menu-mobile-wrapper">
        <ul className="header-menu-mobile-menu">

          {/* <b>Разделы</b> */}

          <li>
            <Link
              pseudo
              className="link5"
                    // className="link5"
              onClick={handleClickMenuItem4('subjects222')}
            >
              {/* <MobileIcon size='m' colored /> */}
              <b>Разделы</b>
            </Link>
            <ul
              className={`header-menu-mobiles-sub-menu ${
                                        idSubMenu4 === 'subjects222'
                                            ? 'header-menu-mobiles-sub-menu-open'
                                            : ''
                                    }`}
            >
              <ul>








          <li>
            <Link
              pseudo
              className="link6 link6_third"
                        // className="link5"
              onClick={navTo('/shops')}
            >
              {/* <MobileIcon size='m' colored={ true } /> */}
              <b>Все витрины по разделам</b>
            </Link>
          </li>
          <li>
            <Link
              pseudo
              className="link6 link6_third"
                    // className="link5"
              onClick={handleClickMenuItem('subjects')}
            >
              <MobileIcon size='m' colored />
              <b>Популярные разделы</b>
            </Link>
            <ul
              className={`header-menu-mobiles-sub-menu ${
                                        idSubMenu === 'subjects'
                                            ? 'header-menu-mobiles-sub-menu-open'
                                            : ''
                                    }`}
            >
              <ul>
                {renderCategory()}
              </ul>
            </ul>
          </li>
          <li>




            <li>
              <Link
                pseudo
                    // className="link5"
                className="link6 link6_third"
                onClick={handleClickMenuItem('subjects111')}
              >
                <MobileIcon size='m' colored />
                <b>Полный список разделов</b>
              </Link>
              <ul
                className={`header-menu-mobiles-sub-menu ${
                                        idSubMenu === 'subjects111'
                                            ? 'header-menu-mobiles-sub-menu-open'
                                            : ''
                                    }`}
              >


                <li>
                  <ul>
                    <GridRow>
                      <GridCol width={{mobile: 6}}>
                        <ul className="header-menu-menu">
                          <li>
                            {firstCol()}
                          </li>
                        </ul>
                      </GridCol>
                      <GridCol width={{mobile: 6}}>
                        <ul className="header-menu-menu">
                          <li>
                            {firstCol(startCol+=7, finishCol+=7)}
                          </li>
                        </ul>
                      </GridCol>
                    </GridRow>
                        
                  </ul>
                </li>

              </ul>
            </li>
          </li>

          </ul>
          </ul>
          </li>
          
          <li>
            <Link
              pseudo
              className="link5"
              onClick={handleClickMenuItem('teachers')}
            >
              <b>Витрины</b>
            </Link>
            <ul
              className={`header-menu-mobiles-sub-menu ${
                                        idSubMenu === 'teachers'
                                            ? 'header-menu-mobiles-sub-menu-open'
                                            : ''
                                    }`}
            >
              <li>
                <Link
                  pseudo
                  className="link6 link6_third"
                  onClick={navTo('/shops')}
                >
                  <b>Все витрины</b>
                </Link>
              </li>


              <li>
            <Link
              pseudo
              className="link6 link6_third"
                    // className="link5"
              onClick={handleClickMenuItem2('teachers01')}
            >
              <MobileIcon size='m' colored />
              <b>Популярные витрины</b>
            </Link>
            <ul
              className={`header-menu-mobiles-sub-menu ${
                                        idSubMenu2 === 'teachers01'
                                            ? 'header-menu-mobiles-sub-menu-open'
                                            : ''
                                    }`}
            >
              <ul>
              {renderTeachers()}
              </ul>
            </ul>
          </li>
            </ul>
          </li>

          <li>
            <Link pseudo className="link5" onClick={handleClickMenuItem('courses')}>
              <b>Товары</b>
            </Link>
            <ul
              className={`header-menu-mobiles-sub-menu ${
              idSubMenu === 'courses'
              ? 'header-menu-mobiles-sub-menu-open'
              : ''
              }`}
            >
              <li>
                <Link
                  pseudo
                  className="link6 link6_third"
                  onClick={navTo('/goods')}
                >
                  <b>Все товары</b>
                </Link>
              </li>


              <li>
            <Link
              pseudo
              className="link6 link6_third"
                    // className="link5"
              onClick={handleClickMenuItem3('courses01')}
            >
              <MobileIcon size='m' colored />
              <b>Популярные товары</b>
            </Link>
            <ul
              className={`header-menu-mobiles-sub-menu ${
                                        idSubMenu3 === 'courses01'
                                            ? 'header-menu-mobiles-sub-menu-open'
                                            : ''
                                    }`}
            >
              <ul>
              {renderCourses()}
              </ul>
            </ul>
          </li>

              {/* <li className="bold14">Популярные товары</li>
              {renderCourses()} */}
            </ul>
          </li>


          {/* <li><Link pseudo className="link_third">F.A.Q.</Link></li>
          <li><Link pseudo className="link_third">О нас</Link></li> */}
        </ul>
      </section>
    </div>
  )
}
