import React, { useEffect, useState } from 'react';
import Link from 'arui-feather/link';
import Button from 'arui-feather/button';
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
    <div className="teacheracadem-request-detail">
      <div className="teacheracadem-lesson-detail-title">
        <div className="teacheracadem-lesson-detail-1">#</div>
        <div className="teacheracadem-lesson-detail-2">Дата / Время</div>
        <div className="teacheracadem-lesson-detail-3">Покупатель</div>
        <div className="teacheracadem-lesson-detail-4">Товар</div>
        <div className="teacheracadem-lesson-detail-5">Сумма</div>
        <div className="teacheracadem-lesson-detail-6">Статус</div>
      </div>

      {data &&
        data.map(r => (
          <div key={r.id}>
            <div className="teacheracadem-reguest-detail-dataheader">
              <div className="teacheracadem-lesson-detail-1">{r.id}</div>
              <div className="teacheracadem-lesson-detail-2">
                <div className="teacheracadem-lesson-theme1">Тема</div>
                <div className="teacheracadem-lesson-subject1">
                  <span>{r.course.description.subject}</span>
                </div>
                <div className="teacheracadem-lesson-subject1">
                  {r.course.title}
                </div>
              </div>
            </div>
            <div className="teacheracadem-reguest-detail-data">
              <div className="teacheracadem-lesson-detail-2">
                {r.requested_date}
              </div>
              <div className="teacheracadem-lesson-detail-3">
                <img
                  className="teacheracadem-lesson-detail-avatar"
                  src={`${config.baseUrl}/avatars/${r.user.image}`}
                  alt="r.user.name"
                />
                {r.user.name}
              </div>
              <div className="teacheracadem-lesson-detail-4">
                {r.course.description.subject}
              </div>
              <div className="teacheracadem-lesson-detail-5">
                {r.course.price}
              </div>
              <div className="teacheracadem-lesson-detail-6">
                <SelectPopup
                  onChange={value => {}}
                  value="request"
                  options={statusTypes}
                />
              </div>
            </div>
          </div>
        ))}

      {listCount < requests.length && (
        <Link pseudo>
          <div className="teacheracadem-lessons-button">
            <Button
              className="button button_secondary"
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
