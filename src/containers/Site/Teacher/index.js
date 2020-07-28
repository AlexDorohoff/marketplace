import React, {useEffect, useRef, useState} from 'react';
import Helmet from 'react-helmet';
import ScrollTop from "react-scrolltop-button";
import Type from 'prop-types';
import GridCol from 'arui-feather/grid-col';
import GridRow from 'arui-feather/grid-row';
import Button from 'arui-feather/button';
import Popup from 'arui-feather/popup';
import {NavLink, useLocation} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Breadcrumbs from '../../../components/Common/Breadcrumbs';
import TeacherCourses from '../../../components/Site/TeacherCourses';
import HowWork from '../../../components/Site/HowWork';
import UseNavigation from '../../../core/connectors/navigation';
import RequestForm01 from '../../../components/Site/Forms/RequestForm01';
import Footer from '../../../components/Common/Footer';
import './styles.scss';
import connectorTeachers from '../../../core/connectors/teachers';
import config from '../../../config';
import {yearsPlural} from '../../../core/utils/common';
import Loader from '../../../components/Common/Loader';
import Carousel from '../../../components/Site/Carousel/CarouselBase';

/**
 * Teacher
 */
const Teacher = ({navigationTo, getTeacher, teachers, match}) => {
    const [isOpenPopup, setIsOpenPopup] = useState(false);
    const teachers1 = useSelector(state => state.teachers.inputData);
    const {id} = match.params;

    const location = useLocation();

    const navTo = to => () => {
        navigationTo(to);
    };

    const settings = {
        dots: true,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    useEffect(() => {
        getTeacher(match.params.id);
        window.scrollTo({
            top: 0,
            behavior: 'instant',
        });
    }, [location]);

    const refPopup = useRef(null);
    const refTarget = useRef(null);

    const {teacher} = teachers;

    const teacherCourses = teacher ? teacher.courses : [];

    const fio = teacher ? teacher.name.split(' ') : [];

    if (teachers.teacherFetching) {
        return <Loader/>;
    }
    const list111 = [{
        title: 'Главная',
        link: '/',
    }, {
        title: 'Все витрины',
        link: '/shops',
    }, {
        title: `${fio[0]} ${fio[1]} ${fio[2]}`,
        link: '',
    },
    ];

// ***************************
    const renderTeach = () => {
        if (teachers1.length > 0) {
            const list = [];
            teachers1.map((teacher, index) => {
                if (index < 5 && teacher.id == id) {
                    if (teacher.categories.length !== 0) {
                        // --- Children вывод начало
                        const childs = teacher.categories;
                        const renderCatChild = () => {
                            if (childs.length > 0) {
                                const list1 = [];
                                childs.map((child, index) => {
                                    if (child.pivot.user_id == id) {
                                        list1.push(
                                            <li key={index + Math.random()}>
                                                {/* <Link
                                                      pseudo
                                                      className="link6 link6_third"
                                                      key={child.id}
                                                      onClick={navTo(`/searchcase/${child.id}`)}
                                                    > */}
                                                {child.name}
                                                {/* </Link> */}
                                            </li>
                                        );
                                    }
                                });
                                return list1;
                            }
                        };
                        // ---  вывод ОКОНЧАНИЕ
                        list.push(
                            <p>
                                {renderCatChild()}
                            </p>
                        );
                    }
                }
            });
            return list;
        }
    };

// ******************************
    return (
        <>
            <Helmet>
                <title>Море-витрина</title>
                <meta name="description" content="Море"/>
                <meta name="keywords" content="Море"/>
            </Helmet>
            <ScrollTop
                text="Наверх"
                distance={50}
                breakpoint={900}
                style={{backgroundColor: "#ffffff", color: '#1B60FF', border: '1px solid #1B60FF'}}
                className="scroll-your-role"
                speed={250}
                target={0}
            />
            <section className="section section_fullwidth1 breadcrumbs">
                <Breadcrumbs items={list111}/>
            </section>
            <section className="section section_fullwidth">
                <GridRow>
                    <GridCol width={{mobile: 0, tablet: 6}}>
                        {teacher && (
                            <img
                                style={{width: '100%'}}
                                src={`${config.baseUrl}/avatars/${
                                    teacher.image
                                }?${Date.now().toString()}`}
                                alt={teacher.name}
                            />
                        )}
                    </GridCol>

                    <GridCol width={{mobile: 12, tablet: 6}}>
                        <div className="teacher-about">
                            {teacher && (
                                <h1>
                                    {fio[0]}
                                    <br/>
                                    {`${fio[1]} ${fio[2]}`}
                                </h1>
                            )}
                            <div className="teacher-expir">
                                Стаж работы:&nbsp;
                                {teacher &&
                                teacher.profile &&
                                yearsPlural(teacher.profile.experience)}
                            </div>

                            <div className="teacher-expir">
                                {teacher && teacher.profile && teacher.profile.edo}
                            </div>
                            <div className="teacher-more">
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
                                    Подробнее...
                                </Button>
                                {isOpenPopup && <div className="popup-overlay"/>}
                                <Popup
                                    ref={refPopup}
                                    visible={isOpenPopup}
                                    onClickOutside={() => setIsOpenPopup(false)}
                                    mainOffset={10}
                                    height="adaptive"
                                >
                                    <div className="teacher-more-popup">
                                        {teacher && teacher.profile && teacher.profile.yourself}
                                    </div>
                                </Popup>
                            </div>
                            <div className="teacher-button">
                                <button
                                    type="button"
                                    className="button button_default showcase"
                                    onClick={navTo(`/showcase/${teacher && teacher.id}`)}
                                >
                                    Посмотреть витрину
                                </button>
                            </div>
                            <div className="teacher-subject">
                                {/* // ---- КАТЕГОРИИ */}
                                {renderTeach()}
                            </div>
                        </div>
                    </GridCol>
                </GridRow>
                <br/>
                <div className="hr2"/>
            </section>

            <section className="section">
                <h2>О магазине</h2>
                <GridRow>
                    <GridCol width={{mobile: 12, tablet: 6, desktop: 6}}>
                        <p>{teacher && teacher.profile && teacher.profile.yourself}</p>
                    </GridCol>
                    <GridCol width={{mobile: 12, table: 6, desktop: 6}}>
                        {teacher && (
                            <img
                                className="teacher-image"
                                src={`${config.baseUrl}/avatars/${
                                    teacher.image
                                }?${Date.now().toString()}`}
                                alt={teacher.name}
                            />
                        )}
                    </GridCol>

                    <NavLink className="link link_third" to="/TeacherReviewAll01">
                        <div className="teacher-button">
                            <Button className="button button_default">
                                Отзывы о магазине
                            </Button>
                        </div>
                    </NavLink>
                </GridRow>
            </section>
            <section className="section">
                {teacher && (
                    <TeacherCourses items={teacherCourses} teacherId={teacher.id}/>
                )}
            </section>
            <section>
                <Carousel settings={settings} className="docs-browser-carousel">
                    {teacher && teacher.profile.documents.map(item => (
                        <img key={item.id} style={{height: '10px'}} className="" src={item.img} alt=""/>
                    ))}
                </Carousel>
            </section>
            {/* <section className="section section_fullwidth">
        <div className="hr2" />
      </section>
      <section className="section">
        <HowWork />
      </section> */}
            <section className="section">
                <RequestForm01 formType="teacher"/>
            </section>
            <Footer/>
        </>
    );
};

Teacher.propTypes = {
    navigationTo: Type.func.isRequired,
    getTeacher: Type.func.isRequired,
    teachers: Type.object.isRequired,
    match: Type.object.isRequired,
};

export default UseNavigation(connectorTeachers(Teacher));
