import React, { useState } from 'react';
import Type from 'prop-types';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Link from 'arui-feather/link';
import ExpansionPanelR from '../../Common/ExpansionPanelR';
import './styles.scss';
import SubjectLoad from '../../../theme/images/account/subject-load.svg';
import SubjectEdit from '../../../theme/images/account/subject-edit.svg';
import ImgChat2 from '../../../theme/images/account/img-chat2.svg';
import PicHat2 from '../../../theme/images/account/pic-hat2.svg';
import PicStar2 from '../../../theme/images/account/pic-star2.svg';
import PicClose2 from '../../../theme/images/account/pic-close2.svg';
import PicSend from '../../../theme/images/account/pic-send.svg';
import PicRecord from '../../../theme/images/account/pic-record.svg';
import PicReview from '../../../theme/images/account/pic-review.svg';
import Button from 'arui-feather/button';

/**
 * Students teachers
 */
const StudentsTeachers = ({ items = [] }) => {
  const [openPanelNumber, setOpenPanelNumber] = useState(0);
  const step = 8;
  const [count, setCount] = useState(step);

  const handleClickExpand = panelNumber => {
    const newOpenPanelNumber =
      openPanelNumber !== panelNumber ? panelNumber : 0;
    setOpenPanelNumber(newOpenPanelNumber);
  };

  return (
    <div className="studentsteachers">
      <ExpansionPanelR
        className="studentsteachers-item"
        title={
          <div className="studentsteachers-element">
            {
              items.length > 0 && items.map(item => {
                return (
                  <GridRow key={`${item.id}Teacher`}>
                    <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }}>
                      {item.name && item.name}
                    </GridCol>
                    <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }}>
                      {item.courses && item.courses.map((course, index) => {
                        if (item.courses.length - 1 === index) {
                          return course.title
                        } else {
                          return `${course.title}, `
                        }
                      })}
                    </GridCol>
                    <GridCol width={{ mobile: 12, tablet: 1, desktop: 1 }}>
                      <Link pseudo>
                        <img className="" src={SubjectLoad} alt="" />
                      </Link>
                    </GridCol>
                    <GridCol width={{ mobile: 12, tablet: 1, desktop: 1 }}>
                      <Link pseudo>
                        <img className="" src={SubjectEdit} alt="" />
                      </Link>
                    </GridCol>
                  </GridRow>
                )
              })
            }
          </div>
        }
        isExpanded={openPanelNumber === 1}
        onClickExpand={() => handleClickExpand(1)}
        content={
          <div>
            <div>
              {
                items.length > 0 && items.slice(0, count).map(item => {
                  return (
                    <GridRow key={`${item.id}Teacher`}>
                      <GridCol width={{ mobile: 1, tablet: 1, desktop: 1 }}>
                        <img className="" src={ImgChat2} alt="" />
                      </GridCol>
                      <GridCol width={{ mobile: 11, tablet: 4, desktop: 4 }}>
                        <div className="studentsteachers-lname">
                          {item.name && item.name}
                        </div>
                        <div className="studentsteachers-star">
                          <img className="" src={PicStar2} alt="" />
                          <img className="" src={PicStar2} alt="" />
                          <img className="" src={PicStar2} alt="" />
                          <img className="" src={PicStar2} alt="" />
                          <img className="" src={PicStar2} alt="" />
                        </div>
                      </GridCol>
                      <GridCol width={{ mobile: 8, tablet: 3, desktop: 3 }}>
                        <div className="studentsteachers-subject">
                          {item.courses && item.courses.map((course, index) => {
                            if (item.courses.length - 1 === index) {
                              return course.title
                            } else {
                              return `${course.title}\n`
                            }
                          })}
                        </div>
                      </GridCol>
                      <GridCol width={{ mobile: 1, tablet: 1, desktop: 1 }}>
                        <Link pseudo>
                          <img className="" src={PicClose2} alt="" />
                        </Link>
                      </GridCol>
                      <GridCol width={{ mobile: 1, tablet: 1, desktop: 1 }}>
                        <Link pseudo>
                          <img className="" src={PicRecord} alt="" />
                        </Link>
                      </GridCol>
                      <GridCol width={{ mobile: 1, tablet: 1, desktop: 1 }}>
                        <Link pseudo>
                          <img className="" src={PicSend} alt="" />
                        </Link>
                      </GridCol>
                      <GridCol width={{ mobile: 1, tablet: 1, desktop: 1 }}>
                        <Link pseudo>
                          <img className="" src={PicReview} alt="" />
                        </Link>
                      </GridCol>
                    </GridRow>
                  )
                })
              }
              {items.length > count &&
                <div className="studentsteachers-button">
                  <Button 
                    className="button button_secondary"
                    onClick={() => setCount(count + step)}
                  >
                    Показать ещё
                  </Button>
                </div>
              }
            </div>
          </div>
        }
      />
    </div>
  );
};

StudentsTeachers.propTypes = {
  items: Type.array.isRequired,
};

export default StudentsTeachers;
