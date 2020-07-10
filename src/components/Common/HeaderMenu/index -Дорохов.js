import React, { useState } from 'react';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Link from 'arui-feather/link';
import { useSelector } from 'react-redux';
import './styles.scss';
import CategoriesServices from '../../../core/services/categories';

function HeaderMenu({ isOpen, navTo, onClose }) {
  const courses = useSelector(state => state.courses.inputCourses);
  const teachers = useSelector(state => state.teachers.inputData);
  const categories = useSelector(state => state.categories.inputCategories);

  const renderCategory = () => {
    if (categories.length > 0) {
      const list = [];
      categories.map((category, index) => {
        if (index < 5) {
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

  const renderSection = () => {
    if (courses.length > 0) {
      const list = [];
      courses.map((course, index) => {
        if (index < 5) {
          let description;
          let courseName;
          try {
            description = JSON.parse(course.description);
            courseName = course.category[0].name;
          } catch (e) {
            console.log(e);
          }

          list.push(
            <li key={index + Math.random()}>
              <Link
                pseudo
                className="link6 link6_third"
                key={course.id}
                onClick={navTo(`/good/${course.id}`)}
              >
                {description && description.subject}
              </Link>
              <p>{course.name}+1</p>
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
    // <div
    //   className={`header-menu${isOpen ? ' header-menu-open' : ''}`}
    //   // onClick={onClose}
    // >
    <div
      className={`header-menu-mobiles${
        isOpen ? ' header-menu-mobiles-open' : ''
      }`}
    >
      {/* <section className="section header-menu-wrapper"> */}
      <section className="section section_fullwidth header-menu-mobiles-wrapper">
        <GridRow>
          <GridCol width={{ mobile: 3, tablet: 3, desktop: 3 }}>
            {/* <ul className="header-menu-menu"> */}
            <ul className="header-menu-mobiles-menu">
              <li>
                {/* <Link pseudo className="link_third" onClick={handleClickMenuItem('teachers')}>Разделы (Отделы)</Link> */}
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
                      {renderSection()}
                      {renderCategory()}
                    </ul>
                  </li>
                  {/* <li>
                    <Link
                      pseudo
                      className="link6 link6_third"
                      onClick={navTo('/shops')}
                    >
                      Поп/ный Раздел 1
                    </Link>
                  </li>
                  <li>
                    <Link pseudo className="link6 link6_third">
                      Поп/ный Раздел 2
                    </Link>
                  </li>
                  <li>
                    <Link pseudo className="link6 link6_third">
                      Поп/ный Раздел 3
                    </Link>
                  </li>
                  <li>
                    <Link pseudo className="link6 link6_third">
                      Поп/ный Раздел 4
                    </Link>
                  </li>
                  <li>
                    <Link pseudo className="link6 link6_third">
                      Поп/ный Раздел 5
                    </Link>
                  </li> */}
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

          <GridCol width={{ mobile: 3, tablet: 3, desktop: 3 }}>
            <ul className="header-menu-menu">
              <li>
                <Link
                  pseudo
                  className="link5"
                  onClick={handleClickMenuItem('subjects1')}
                >
                  <b>Раздел 1u</b>
                </Link>
                <ul
                  className={`header-menu-mobiles-sub-menu ${
                    idSubMenu === 'subjects1'
                      ? 'header-menu-mobiles-sub-menu-open'
                      : ''
                  }`}
                >
                  {renderTeachers()}
                </ul>
              </li>

              <li>
                <ul className="header-menu-menu">
                  <li>
                    <Link pseudo className="link5">
                      Раздел 2
                    </Link>
                  </li>
                  <li>
                    <Link pseudo className="link5">
                      Раздел 3
                    </Link>
                  </li>
                  <li>
                    <Link pseudo className="link5">
                      Раздел 4
                    </Link>
                  </li>
                  <li>
                    <Link pseudo className="link5">
                      Раздел 5
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </GridCol>
          <GridCol width={{ mobile: 3, tablet: 3, desktop: 3 }}>
            <ul className="header-menu-menu">
              <li>
                <Link
                  pseudo
                  className="link5"
                  onClick={handleClickMenuItem('subjects2')}
                >
                  <b>Раздел 6u</b>
                </Link>
                <ul
                  className={`header-menu-mobiles-sub-menu ${
                    idSubMenu === 'subjects2'
                      ? 'header-menu-mobiles-sub-menu-open'
                      : ''
                  }`}
                >
                  {renderTeachers()}
                </ul>
              </li>

              <li>
                <ul className="header-menu-menu">
                  <li>
                    <Link pseudo className="link5">
                      Раздел 7
                    </Link>
                  </li>
                  <li>
                    <Link pseudo className="link5">
                      Раздел 8
                    </Link>
                  </li>
                  <li>
                    <Link pseudo className="link5">
                      Раздел 9
                    </Link>
                  </li>
                  <li>
                    <Link pseudo className="link5">
                      Раздел 10
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </GridCol>
          <GridCol width={{ mobile: 3, tablet: 3, desktop: 3 }}>
            <ul className="header-menu-menu">
              <li>
                <Link
                  pseudo
                  className="link5"
                  onClick={handleClickMenuItem('subjects3')}
                >
                  <b>Раздел 11u</b>
                </Link>
                <ul
                  className={`header-menu-mobiles-sub-menu ${
                    idSubMenu === 'subjects3'
                      ? 'header-menu-mobiles-sub-menu-open'
                      : ''
                  }`}
                >
                  {renderTeachers()}
                </ul>
              </li>

              <li>
                <ul className="header-menu-menu">
                  <li>
                    <Link pseudo className="link5">
                      Раздел 12
                    </Link>
                  </li>
                  <li>
                    <Link pseudo className="link5">
                      Раздел 13
                    </Link>
                  </li>
                  <li>
                    <Link pseudo className="link5">
                      Раздел 14
                    </Link>
                  </li>
                  <li>
                    <Link pseudo className="link5">
                      Раздел 15
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </GridCol>

          {/* 
          <GridCol width={{ mobile: 3, tablet: 3, desktop: 3 }}>
            <ul className="header-menu-menu">
              <li>
                Товары
                <ul className="header-menu-submenu">
                  <li>
                    <Link pseudo onClick={() => { navTo('/courses')() }}>
                      Все товары
                    </Link>
                  </li>
                  {renderCourses()}
                </ul>
              </li>
            </ul>
          </GridCol> */}

          {/* <GridCol width={{ mobile: 3, tablet: 3, desktop: 3 }}>
            <ul className="header-menu-menu">
              <li>
                Витрины
                <ul className="header-menu-submenu">
                  <li>
                    <Link pseudo onClick={() => { navTo('/teachers')() }}>
                      Все Витрины
                    </Link>
                  </li>
                  {renderTeachers()}
                </ul>
              </li>
            </ul>
          </GridCol> */}
        </GridRow>
      </section>
    </div>
  );
}

export default HeaderMenu;
