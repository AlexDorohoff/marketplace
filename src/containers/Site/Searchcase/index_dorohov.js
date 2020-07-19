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

     let id = match.params.id

    const courses = useSelector(state => state.courses);
    let filtered=[];
    if (courses.courses && courses.courses.length) {
        filtered = courses.courses.filter(item => item.category_id === id); // заменить 0 на id когда база с курсами пополнится записями с id < 0
        console.log(id);
    }
    console.log(filtered);
    return (
        <p>Serchcase</p>
    );
};

export default connectorCourses(Searchcase);
