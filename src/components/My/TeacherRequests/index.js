import React, { useEffect, useState } from 'react';
import Link from 'arui-feather/link';
import Button from 'arui-feather/button';
import GridRow from 'arui-feather/grid-row/grid-row';
import GridCol from 'arui-feather/grid-col/grid-col';
import config from '../../../config';
import SelectPopup from '../../Common/SelectPopup';
import UseProfile from '../../../core/connectors/profile';
import Loader from '../../Common/Loader';
// import { getRequests } from './../../../core/actions/profile';

const statusTypes = [
  { type: 'request', name: 'Заявка' },
  { type: 'accepted', name: 'Принят' },
  { type: 'rejected', name: 'Отклонен' },
  { type: 'moved', name: 'Перенесен' },
  { type: 'message', name: 'Сообщение' },
];

const TeacherRequests = ({ getRequests, profile }) => {
  useEffect(() => {
    getRequests();
  }, []);
  const [listCount, setListCount] = useState(4);
  while (profile.requestsFetching) {
    return <Loader />;
  }
  const { requests } = profile;

  let data;
  if (requests) {
    data = requests.slice(0, listCount);
  }

  return (
    <div className="academ-request-detail">
      {/* <div className="academ-lesson-detail-title">
        <div className="academ-lesson-detail-1">#</div>
        <div className="academ-lesson-detail-2">Дата / Время</div>
        <div className="academ-lesson-detail-3">Покупатель</div>
        <div className="academ-lesson-detail-4">Товар</div>
        <div className="academ-lesson-detail-5">Сумма</div>
        <div className="academ-lesson-detail-6">Статус</div>
      </div> */}
      <br />
      <GridRow className="academ-lesson-detail-title">
        <GridCol width={{ mobile: 12, tablet: 1, desktop: 1 }}>
          №
        </GridCol>
        <GridCol width={{ mobile: 12, tablet: 2, desktop: 2 }}>
          Дата
        </GridCol>
        <GridCol width={{ mobile: 12, tablet: 3, desktop: 3 }}>
          Продавец
        </GridCol>
        <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }}>
          Товар
        </GridCol>
        <GridCol width={{ mobile: 12, tablet: 1, desktop: 1 }}>
          Сумма
        </GridCol>
        <GridCol width={{ mobile: 12, tablet: 1, desktop: 1 }}>
          Статус
        </GridCol>
      </GridRow>
      <div className="hr2" />
      <br />
      {data &&
        data.map(r => (
          <div key={r.id}>
            <GridRow>
              <GridCol width={{ mobile: 12, tablet: 1, desktop: 1 }}>
                {r.id}
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 2, desktop: 2 }}>
                {r.requested_date}
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 3, desktop: 3 }}>
                <img
                  className="academ-lesson-detail-avatar"
                  src={`${config.baseUrl}/avatars/${r.user.image}`}
                  alt="r.user.name"
                />
                {r.user.name}
                {/* {noname.teachers.name} */}
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }}>
                <span>{/*r.course.description.subject*/}</span>
                {r.course.title}
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 1, desktop: 1 }}>
                {r.course.price}
              </GridCol>    
              <GridCol width={{ mobile: 12, tablet: 1, desktop: 1 }}>
                {r.purchase.label}
                {/*r.course.description.subject*/}
              </GridCol>             
            </GridRow>
            <br />
          </div>
        ))}

      {listCount < requests.length && (
        <Link pseudo>
          <div className="academ-lessons-button">
            <Button
              className="button button_settings-form"
              onClick={() => setListCount(listCount + 4)}
            >
              Показать ещё
            </Button>
          </div>
        </Link>
      )}
    </div>
  );
};

export default UseProfile(TeacherRequests);
