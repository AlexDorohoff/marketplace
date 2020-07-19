import React, { useState, useEffect } from 'react';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import { NavLink } from 'react-router-dom';
import './styles.scss';
import Button from 'arui-feather/button';
import { useSelector } from 'react-redux';
import config from '../../../config';

const MainSectionsCourseItem = ({ id, big }) => {
  const { courses } = useSelector(state => state.courses);
  const course =
    courses.length > 0
      ? courses.filter(course => course.id === +id)[0]
      : undefined;

  return (
    <NavLink className="link link_third" to={`/good/${id}`}>
      {course && (
        <div className="main-sections-item">
          <img
            className="main-sections-item-bg"
            src={`${config.baseUrl}/courses/${course.image}`}
            alt={course.title}
          />
          <div className="slider_text">
            {/* <p className="main-sections-lesson">Предмет</p> */}
            <p className="main-sections-heading101">{!big && course.title.length > 10 ? `${course.title.slice(0, 10)}...` : course.title}</p>
            <p className="main-sections-description101">{!big && course.annotation.length > 25 ? `${course.annotation.slice(0, 25)}...` : course.annotation}</p>
          </div>
        </div>

      )}
    </NavLink>
  );
};

const popularIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

/**
 * Main sections
 */
const MainSections = () => {

  const getRandomIds = (startIds = []) => {
    const ids = [];
    let newIds = startIds;
    const {length} = startIds;
    for (let i = 0; i < length; i++) {
      const index = Math.floor( Math.random() * ( length - i) );
      ids[i] = newIds[index];
      newIds = newIds.filter((id, ind) => ind !== index);
    };
    return ids;
  };

  const getRowsIds = (step = 3) => {
    const ids = popularIds ? getRandomIds(popularIds) : [];
    const rowsIds = [];
    for (let i = 0; i < ids.length; i += step) {
      rowsIds.push(ids.slice(i, i + step))
    };
    return rowsIds;
  };

  const getPopular = (step = 3) => {
    const rowsIds = getRowsIds();
    let bigIndexes = [];
    let prevBigIndex = Math.floor(Math.random() * step);

    bigIndexes = rowsIds.map(rowIds => {
      let bigIndex = Math.floor(Math.random() * step);
      if (bigIndex === prevBigIndex) {
        if (prevBigIndex == 0) {
          bigIndex = prevBigIndex + 1
        } else {
          bigIndex = prevBigIndex - 1
        }
      };
      prevBigIndex = bigIndex;
      return bigIndex;
    });
    return {rowsIds, bigIndexes};
  };

  const [popular, setPopular] = useState({rowsIds: [], bigIndexes: []});

  useEffect(() => {
    setPopular(getPopular());
  }, []);

  const [count, setCount] = useState(2)

  const {rowsIds, bigIndexes} = popular;

  return (
    <div className="main-sections">
      <h2 className="text-center">Популярные товары</h2>
      {
        rowsIds.slice(0, count).map((rowIds, indx) => {
          return (
            <GridRow key={`row${Math.random()}`} justify="left">
              {
                rowIds.map((id, index) => {
                  const width = index === bigIndexes[indx] ? 6 : 3;
                  const big = width === 6;

                  return (
                    <GridCol
                      key={`col${Math.random()}`}
                      width={{ mobile: 12, tablet: width, desktop: width }}
                      className="m-b20"
                    >
                      <MainSectionsCourseItem id={id} big={big} />
                    </GridCol>
                  )
                })
              }
            </GridRow>
          )
        })
      }
      
      {count < rowsIds.length && <div className="text-center m-t10">
        <Button className="button button_secondary" onClick={() => setCount(count + 2)}>Еще</Button>
      </div>}
    </div>
  );
}

export default MainSections;
