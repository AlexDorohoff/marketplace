import React, { useState } from 'react';
import Type from 'prop-types';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import ExpansionPanelR from '../../Common/ExpansionPanelR';
import './styles.scss';
import ImgChat from '../../../theme/images/account/img-chat1.svg';
import ImgChat2 from '../../../theme/images/account/img-chat2.svg';
import ImgChat3 from '../../../theme/images/account/img-chat3.svg';

/**
 * Teacher chat
 */
const TeacherChat = ({ items = [] }) => {

  const [openPanelNumber, setOpenPanelNumber] = useState(0);

  const handleClickExpand = (panelNumber) => {
    const newOpenPanelNumber = openPanelNumber !== panelNumber ? panelNumber : 0;
    setOpenPanelNumber(newOpenPanelNumber);
  };

  return (
    <div className="teacherchat">
      <ExpansionPanelR
        className="teacherchat-item"
        title={(
          <div className="teacherchat-block">
            <div className="teacherchat-block-pic">
              <img className="" src={ImgChat} alt="" />
            </div>
            <div className="teacherchat-block-title">
              Rain Man
            </div>
            <div className="teacherchat-block-date">
              2020-05-25  11:30
            </div>
            <div className="teacherchat-block-reading">
              Не прочитано: (20)
            </div>
          </div>
        )}
        isExpanded={openPanelNumber === 1}
        onClickExpand={() => handleClickExpand(1)}
        content={(
          <div>
            {/* <hr className="hr2orange" /> */}
            <div className="teacherchat-frame">
              <GridRow>
                <GridCol width={{ mobile: 1, tablet: 1, desktop: 1 }}>
                  <img className="" src={ImgChat2} alt="" />
                  <br />
                  13:30
                </GridCol>
                <GridCol width={{ mobile: 11, tablet: 6, desktop: 6 }}>
                  <div className="teacherchat-teacher">
                    Добрый день. Хотелось бы подробнее узнать об ордене Святого Станислава.
                  </div>
                </GridCol>
                <GridCol width={{ mobile: 12, tablet: 5, desktop: 5 }} />
              </GridRow>
              <GridRow>
                <GridCol width={{ mobile: 12, tablet: 7, desktop: 7 }} />
                <GridCol width={{ mobile: 12, tablet: 5, desktop: 5 }}>
                  <div className="teacherchat-student">
                    Лента самодел. Имеются небольшие вмятины на тыльной части ордена
                  </div>
                  <div className="teacherchat-student-time">13:45</div>
                </GridCol>
              </GridRow>
              <div className="teacherchat-notreading">
                Не прочитанное сообщение
              </div>
              <hr className="hr1blue" />
              <GridRow>
                <GridCol width={{ mobile: 1, tablet: 1, desktop: 1 }}>
                  <img className="" src={ImgChat2} alt="" />
                  <br />
                  14:15
                </GridCol>
                <GridCol width={{ mobile: 11, tablet: 6, desktop: 6 }}>
                  <div className="teacherchat-teacher">
                    Спасибо.
                  </div>
                </GridCol>
                <GridCol width={{ mobile: 12, tablet: 5, desktop: 5 }} />
              </GridRow>
            </div>
            <GridRow>
              <GridCol width={{ mobile: 12, tablet: 10, desktop: 10 }}>
                <div className="teacherchat-send">
                  Написать сообщение .....
                </div>
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 2, desktop: 2 }}>
                <div className="teacherchat-send-pic">
                  <img className="" src={ImgChat3} alt="" />
                </div>
              </GridCol>
            </GridRow>
          </div>
)}
      />

    </div>
  );
};

TeacherChat.propTypes = {
  items: Type.array.isRequired,
};

export default TeacherChat;
