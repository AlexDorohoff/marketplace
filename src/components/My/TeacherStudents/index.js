import React, { useState } from 'react';
import Type from 'prop-types';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Link from 'arui-feather/link';
import ExpansionPanelR from '../../Common/ExpansionPanelR';
import './styles.scss';
import SubjectLoad from '../../../theme/images/account/subject-load.svg';
import ImgChat2 from '../../../theme/images/account/img-chat2.svg';
import PicClose2 from '../../../theme/images/account/pic-close2.svg';
import PicSend from '../../../theme/images/account/pic-send.svg';
import PicPlus2 from '../../../theme/images/account/pic-plus2.svg';
import PicHat2 from '../../../theme/images/account/pic-hat2.svg';
import Button from 'arui-feather/button';
import Dialog from '../../Common/Dialog';
import ModalTeacherTasks from '../Forms/ModalTeacherTasks';
import ModalTeacherMessage from '../Forms/ModalTeacherMessage';

/**
 * Teacher students
 */
const TeacherStudents = ({ items = [] }) => {

  const [openPanelNumber, setOpenPanelNumber] = useState(0);
  const [idOpenModal, setIdOpenModal] = useState('');

  const handleClickExpand = (panelNumber) => {
    const newOpenPanelNumber = openPanelNumber !== panelNumber ? panelNumber : 0;
    setOpenPanelNumber(newOpenPanelNumber);
  };

  return (
    <div className="teacherstudents">
      <ExpansionPanelR
        className="teacherstudents-item"
        title={
          <div className="teacherstudents-element">
            <GridRow>
              <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }}>
                  Мухамедгалиева Ильмира
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }}>
                  Русский Язык
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 1, desktop: 1 }}>
                <Link pseudo onClick={() => setIdOpenModal('TeacherMessage')}><img className="" src={SubjectLoad} alt="" /></Link>
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 1, desktop: 1 }}>
                <Link pseudo onClick={() => setIdOpenModal('TeacherTasks')}><img className="" src={PicPlus2} alt="" /></Link>
              </GridCol>
            </GridRow>
            <GridRow>
              <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }}>
                  Болотов Михаил
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }}>
                  Русский Язык
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 1, desktop: 1 }}>
                <Link pseudo onClick={() => setIdOpenModal('TeacherMessage')}><img className="" src={SubjectLoad} alt="" /></Link>
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 1, desktop: 1 }}>
                <Link pseudo onClick={() => setIdOpenModal('TeacherTasks')}><img className="" src={PicPlus2} alt="" /></Link>
              </GridCol>
            </GridRow>
            <GridRow>
              <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }}>
                  Минаков Кирилл
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }}>
                  Литература
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 1, desktop: 1 }}>
                <Link pseudo onClick={() => setIdOpenModal('TeacherMessage')}><img className="" src={SubjectLoad} alt="" /></Link>
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 1, desktop: 1 }}>
                <Link pseudo onClick={() => setIdOpenModal('TeacherTasks')}><img className="" src={PicPlus2} alt="" /></Link>
              </GridCol>
            </GridRow>
            <Dialog isOpen={idOpenModal === 'TeacherTasks'} onClose={() => setIdOpenModal('')} title="">
              <ModalTeacherTasks />
            </Dialog>
            <Dialog isOpen={idOpenModal === 'TeacherMessage'} onClose={() => setIdOpenModal('')} title="">
              <ModalTeacherMessage />
            </Dialog>
          </div>
        }
        isExpanded={openPanelNumber === 1}
        onClickExpand={() => handleClickExpand(1)}
        content={
          <div>
            <GridRow>
              <GridCol width={{ mobile: 1, tablet: 1, desktop: 1 }}>
                <img className="" src={ImgChat2} alt="" />
              </GridCol>
              <GridCol width={{ mobile: 11, tablet: 5, desktop: 5 }}>
                      Мухамедгалиева Ильмира
                <div className="teacherstudents-hat">
                  <img className="" src={PicHat2} alt="" />
                  <img className="" src={PicHat2} alt="" />
                </div>
              </GridCol>
              <GridCol width={{ mobile: 9, tablet: 3, desktop: 3 }}>
                      Русский Язык
                <br />
                      Литература
              </GridCol>
              <GridCol width={{ mobile: 1, tablet: 1, desktop: 1 }}>
                <Link pseudo><img className="" src={PicClose2} alt="" /></Link>
              </GridCol>
              <GridCol width={{ mobile: 1, tablet: 1, desktop: 1 }}>
                <Link pseudo><img className="" src={PicPlus2} alt="" /></Link>
              </GridCol>
              <GridCol width={{ mobile: 1, tablet: 1, desktop: 1 }}>
                <Link pseudo><img className="" src={PicSend} alt="" /></Link>
              </GridCol>
            </GridRow>
            <GridRow>
              <GridCol width={{ mobile: 1, tablet: 1, desktop: 1 }}>
                <img className="" src={ImgChat2} alt="" />
              </GridCol>
              <GridCol width={{ mobile: 11, tablet: 5, desktop: 5 }}>
                      Болотов Михаил
                <div className="teacherstudents-hat">
                  <img className="" src={PicHat2} alt="" />
                  <img className="" src={PicHat2} alt="" />
                  <img className="" src={PicHat2} alt="" />
                  <img className="" src={PicHat2} alt="" />
                </div>
              </GridCol>
              <GridCol width={{ mobile: 9, tablet: 3, desktop: 3 }}>
                      Русский Язык
              </GridCol>
              <GridCol width={{ mobile: 1, tablet: 1, desktop: 1 }}>
                <Link pseudo><img className="" src={PicClose2} alt="" /></Link>
              </GridCol>
              <GridCol width={{ mobile: 1, tablet: 1, desktop: 1 }}>
                <Link pseudo><img className="" src={PicPlus2} alt="" /></Link>
              </GridCol>
              <GridCol width={{ mobile: 1, tablet: 1, desktop: 1 }}>
                <Link pseudo><img className="" src={PicSend} alt="" /></Link>
              </GridCol>
            </GridRow>
            <GridRow>
              <GridCol width={{ mobile: 1, tablet: 1, desktop: 1 }}>
                <img className="" src={ImgChat2} alt="" />
              </GridCol>
              <GridCol width={{ mobile: 11, tablet: 5, desktop: 5 }}>
                      Минаков Кирилл
                <div className="teacherstudents-hat">
                  <img className="" src={PicHat2} alt="" />
                </div>
              </GridCol>
              <GridCol width={{ mobile: 9, tablet: 3, desktop: 3 }}>
                      Русский Язык
              </GridCol>
              <GridCol width={{ mobile: 1, tablet: 1, desktop: 1 }}>
                <Link pseudo><img className="" src={PicClose2} alt="" /></Link>
              </GridCol>
              <GridCol width={{ mobile: 1, tablet: 1, desktop: 1 }}>
                <Link pseudo><img className="" src={PicPlus2} alt="" /></Link>
              </GridCol>
              <GridCol width={{ mobile: 1, tablet: 1, desktop: 1 }}>
                <Link pseudo><img className="" src={PicSend} alt="" /></Link>
              </GridCol>
            </GridRow>
            <GridRow>
              <GridCol width={{ mobile: 1, tablet: 1, desktop: 1 }}>
                <img className="" src={ImgChat2} alt="" />
              </GridCol>
              <GridCol width={{ mobile: 11, tablet: 5, desktop: 5 }}>
                      Абрамзон Роман
                <div className="teacherstudents-hat">
                  <img className="" src={PicHat2} alt="" />
                </div>
              </GridCol>
              <GridCol width={{ mobile: 9, tablet: 3, desktop: 3 }}>
                      Литература
              </GridCol>
              <GridCol width={{ mobile: 1, tablet: 1, desktop: 1 }}>
                <Link pseudo><img className="" src={PicClose2} alt="" /></Link>
              </GridCol>
              <GridCol width={{ mobile: 1, tablet: 1, desktop: 1 }}>
                <Link pseudo><img className="" src={PicPlus2} alt="" /></Link>
              </GridCol>
              <GridCol width={{ mobile: 1, tablet: 1, desktop: 1 }}>
                <Link pseudo><img className="" src={PicSend} alt="" /></Link>
              </GridCol>
            </GridRow>
            <GridRow>
              <GridCol width={{ mobile: 1, tablet: 1, desktop: 1 }}>
                <img className="" src={ImgChat2} alt="" />
              </GridCol>
              <GridCol width={{ mobile: 11, tablet: 5, desktop: 5 }}>
                Мамиашвили Зураб
                <div className="teacherstudents-hat">
                  <img className="" src={PicHat2} alt="" />
                </div>
              </GridCol>
              <GridCol width={{ mobile: 9, tablet: 3, desktop: 3 }}>
                Русский Язык
                <br />
                Литература
              </GridCol>
              <GridCol width={{ mobile: 1, tablet: 1, desktop: 1 }}>
                <Link pseudo><img className="" src={PicClose2} alt="" /></Link>
              </GridCol>
              <GridCol width={{ mobile: 1, tablet: 1, desktop: 1 }}>
                <Link pseudo><img className="" src={PicPlus2} alt="" /></Link>
              </GridCol>
              <GridCol width={{ mobile: 1, tablet: 1, desktop: 1 }}>
                <Link pseudo><img className="" src={PicSend} alt="" /></Link>
              </GridCol>
            </GridRow>
            <div className="teacherstudents-button">
              <Button className="button button_secondary">Показать ещё</Button>
            </div>
          </div>
        }
      />
    </div>
  );
};

TeacherStudents.propTypes = {
  items: Type.array.isRequired,
};

export default TeacherStudents;
