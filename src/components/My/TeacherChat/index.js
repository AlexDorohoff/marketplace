import React, { useState } from 'react';
import Type from 'prop-types';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import ExpansionPanelR from '../../Common/ExpansionPanelR';
// import './styles.scss';
import ImgChat from '../../../theme/images/account/img-chat1.svg';
import ImgChat2 from '../../../theme/images/account/img-chat2.svg';
import ImgChat3 from '../../../theme/images/account/img-chat3.svg';
import '../../../theme/styles/settings.scss';

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
    <div className="chat">
      <ExpansionPanelR
        className="chat-item"
        title={(
          <div className="chat-block">
            <GridRow>
              <GridCol width={{ mobile: 12, tablet: 2, desktop: 2 }}>
                <div className="chat-block-pic">
                  <img className="" src={ImgChat} alt="" />
                </div>
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }}>
                <div className="block-title">
                  Rain Man
                </div>
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 3, desktop: 3 }}>
                <div className="block-date">  
                  2020-08-25 11:30
                </div>
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 3, desktop: 3 }}>
                <div className="chat-block-reading">
                  Не прочитано:
                  {' '}
                  (20)
                </div>
              </GridCol>
            </GridRow>


            {/* <div className="chat-block-pic">
              <img className="" src={ImgChat} alt="" />
            </div>
            <div className="chat-block-title">
              Rain Man
            </div>
            <div className="chat-block-date">
              2020-05-25  11:30
            </div>
            <div className="chat-block-reading">
              Не прочитано: (20)
            </div> */}

          </div>
        )}
        isExpanded={openPanelNumber === 1}
        onClickExpand={() => handleClickExpand(1)}
        content={(
          <div>
            {/* <hr className="hr2orange" /> */}
            <div className="chat-frame">
              <GridRow>
                <GridCol width={{ mobile: 1, tablet: 1, desktop: 1 }}>
                  <img className="" src={ImgChat2} alt="" />
                  <br />
                  13:30
                </GridCol>
                <GridCol width={{ mobile: 11, tablet: 6, desktop: 6 }}>
                  <div className="chat-teacher">
                    Добрый день. Хотелось бы подробнее узнать об ордене Святого Станислава.
                  </div>
                </GridCol>
                <GridCol width={{ mobile: 12, tablet: 5, desktop: 5 }} />
              </GridRow>
              <GridRow>
                <GridCol width={{ mobile: 12, tablet: 7, desktop: 7 }} />
                <GridCol width={{ mobile: 12, tablet: 5, desktop: 5 }}>
                  <div className="chat-student">
                    Лента самодел. Имеются небольшие вмятины на тыльной части ордена
                  </div>
                  <div className="chat-student-time">13:45</div>
                </GridCol>
              </GridRow>
              <div className="chat-notreading">
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
                  <div className="chat-teacher">
                    Спасибо.
                  </div>
                </GridCol>
                <GridCol width={{ mobile: 12, tablet: 5, desktop: 5 }} />
              </GridRow>
            </div>
            <GridRow>
              <GridCol width={{ mobile: 12, tablet: 10, desktop: 10 }}>
                <div className="chat-send">
                  Написать сообщение .....
                </div>
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 2, desktop: 2 }}>
                <div className="chat-send-pic">
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
