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


  const [ idSubMenu, setIdSubMenu ] = useState('');
  const handleClickMenuItem = (newIdSubMenu) => (event) => {
    event.preventDefault();
    setIdSubMenu(newIdSubMenu !== idSubMenu ? newIdSubMenu : '');
  };
  return (
    <div className={`header-menu-mobile${isOpen ? ' header-menu-mobile-open' : ''}`}>
      <section className="section header-menu-mobile-wrapper">
        <ul className="header-menu-mobile-menu">
          {/* <li>
            <Link pseudo className="link_third" onClick={handleClickMenuItem('subjects')}>Разделы</Link>
            <ul className={`header-menu-mobile-sub-menu ${idSubMenu === 'subjects' ? 'header-menu-mobile-sub-menu-open' : ''}`}>
              <li><Link pseudo>Алгебра</Link></li>
              <li><Link pseudo>Астрономия</Link></li>
              <li><Link pseudo>Биология</Link></li>
              <li><Link pseudo>География</Link></li>
              <li><Link pseudo>ИЗО</Link></li>
              <li><Link pseudo>Иностранный язык</Link></li>
            </ul>
          </li> */}

<b>Разделы</b>
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
                    <MobileIcon size='m' colored={ true } />
                    <b>Популярные разделы</b>
                  </Link>
                  <ul
                    className={`header-menu-mobiles-sub-menu ${
                                        idSubMenu === 'subjects'
                                            ? 'header-menu-mobiles-sub-menu-open'
                                            : ''
                                    }`}
                  >


                    {/* <li>
                      <Link
                        pseudo
                        className="link6 link6_third"
                        onClick={navTo('/shops')}
                      >
                                          Все витрины по разделам
                      </Link> */}
                      <ul>
                        {/* <li className="bold14">Популярные разделы</li> */}
                        {renderCategory()}
                      </ul>
                    {/* </li> */}






{/* ************************ */}



          {/* <li>
            <Link pseudo className="link5" onClick={handleClickMenuItem('courses')}>
              <b>777Товары</b>
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
                        <b>777Все товары</b>
                      </Link>
                    </li>
                    <li className="bold14">777Популярные товары</li>
                    {renderCourses()}
                  </ul>
                </li> */}


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
                    <MobileIcon size='m' colored={ true } />
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
                      {/* <Link
                        pseudo
                        className="link6 link6_third"
                        onClick={navTo('/shops')}
                      >
                                          Все витрины по разделам
                      </Link> */}
                      <ul>
                        {/* <li className="bold14">Популярные разделы</li> */}
                        {/* {renderCategory()} */}

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
                  {firstCol(startCol=startCol+7, finishCol=finishCol+7)}
                </li>
              </ul>
            </GridCol>
          </GridRow>
                        
                      </ul>
                    </li>

                  </ul>
                </li>

{/* <Link
  pseudo
  className="link6 link6_third"
  onClick={navTo('/shops')}
>
Полный список разделов
</Link> */}



{/* </li> */}

                {/* <li className="bold14">Полный список разделов</li> */}

{/* <GridRow>
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
                  {firstCol(startCol=startCol+7, finishCol=finishCol+7)}
                </li>
              </ul>
            </GridCol>
          </GridRow> */}
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

          {/* <li><Link pseudo className="link_third">Учебные заведения</Link></li> */}
          {/* <li>
            <Link pseudo className="link_third" onClick={handleClickMenuItem('teachers')}>Витрины</Link>
            <ul className={`header-menu-mobile-sub-menu ${idSubMenu === 'teachers' ? 'header-menu-mobile-sub-menu-open' : ''}`}>
              <li><Link pseudo onClick={navTo('/teachers')}>Все преподаватели</Link></li>
              <li><Link pseudo onClick={navTo('/teacher')}>Барышев<br/>Светлана Валентиновна</Link></li>
              <li><Link pseudo>Браилова<br/>Светлана Аркадьевна</Link></li>
              <li><Link pseudo>Жукова<br/>Людмила Владимировна</Link></li>
              <li><Link pseudo>Сахбутдинова<br/>Роза Салимовна</Link></li>
              <li><Link pseudo>Солдатов<br/>Михаил Юрьевич</Link></li>
            </ul>
          </li> */}
          {/* <li>
            <Link pseudo className="link_third" onClick={handleClickMenuItem('courses')}>Товары</Link>
            <ul className={`header-menu-mobile-sub-menu ${idSubMenu === 'courses' ? 'header-menu-mobile-sub-menu-open' : ''}`}>
              <li><Link pseudo onClick={navTo('/courses')}>{renderCourses()}</Link></li>
              <li><Link pseudo onClick={navTo('/course')}>Курс «История России»</Link></li>
              <li><Link pseudo>Курс «Квантовая физика»</Link></li>
              <li><Link pseudo>Курс «Курс по географии для 9 класса (базовый уровень)»</Link></li>
              <li><Link pseudo>Курс «Медико-биологические основы безопасности жизнедеятельности»</Link></li>
            </ul>
          </li> */}

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
                    <li className="bold14">Популярные товары</li>
                    {renderCourses()}
                  </ul>
                </li>


          <li><Link pseudo className="link_third">F.A.Q.</Link></li>
          <li><Link pseudo className="link_third">О нас</Link></li>
        </ul>
      </section>
    </div>
  )
}
