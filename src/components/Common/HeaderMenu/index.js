import React, {useState} from 'react';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Link from 'arui-feather/link';
import {useSelector} from 'react-redux';
import './styles.scss';

function HeaderMenu({isOpen, navTo, onClose}) {
    const courses = useSelector(state => state.courses.inputCourses);
    const teachers = useSelector(state => state.teachers.inputData);
    const categories = useSelector(state => state.categories.inputCategories);
    let startCol = 0;
    let finishCol = 5;

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
                              onClick={handleClickMenuItem(subj)}
                            >
                              <b>{category.name}</b>
                            </Link>
                            <ul
                              className={`header-menu-mobiles-sub-menu ${
                                        idSubMenu === subj
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
                if (index < 5 && category.parent_id <= 0) {
                    list.push(
                      <li key={index + Math.random()}>
                        <Link
                          pseudo
                          className="link6 link6_third"
                          key={category.id}
                          onClick={navTo(`/shop/${category.id}`)}
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

    const [idSubMenu, setIdSubMenu] = useState('');
    const handleClickMenuItem = newIdSubMenu => event => {
        event.preventDefault();
        setIdSubMenu(newIdSubMenu !== idSubMenu ? newIdSubMenu : '');
    };

    return (
      <div
        className={`header-menu-mobiles${
                isOpen ? ' header-menu-mobiles-open' : ''
            }`}
      >
        <section className="section section_fullwidth header-menu-mobiles-wrapper">
          <GridRow>
            <GridCol width={{mobile: 3, tablet: 3, desktop: 3}}>
              <ul className="header-menu-mobiles-menu">
                <li>
                  <Link
                    pseudo
                    className="link5"
                    onClick={handleClickMenuItem('subjects')}
                  >
                    <b>Разделы</b>
                  </Link>
                  <ul
                    className={`header-menu-mobiles-sub-menu ${
                                        idSubMenu === 'subjects'
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
                                          Все разделы
                      </Link>
                      <ul>
                        <li className="bold14">Популярные разделы</li>
                        {renderCategory()}
                      </ul>
                    </li>
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
                    <li className="bold14">Популярные витрины</li>
                    {renderTeachers()}
                  </ul>
                </li>
                <li>
                  <Link
                    pseudo
                    className="link5"
                    onClick={handleClickMenuItem('courses')}
                  >
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
                    <li className="bold14">Популярные товары</li>
                    {renderCourses()}
                  </ul>
                </li>
              </ul>
            </GridCol>
            <GridCol width={{mobile: 3, tablet: 3, desktop: 3}}>
              <ul className="header-menu-menu">
                <li>
                  {firstCol()}
                </li>
              </ul>
            </GridCol>
            <GridCol width={{mobile: 3, tablet: 3, desktop: 3}}>
              <ul className="header-menu-menu">
                <li>
                  {firstCol(startCol=startCol+5, finishCol=finishCol+5)}
                </li>
              </ul>
            </GridCol>
            <GridCol width={{mobile: 3, tablet: 3, desktop: 3}}>
              <ul className="header-menu-menu">
                <li>
                  {firstCol(startCol=startCol+5, finishCol=finishCol+5)}
                </li>
              </ul>
            </GridCol>
          </GridRow>
        </section>
      </div>
    );
}

export default HeaderMenu;
