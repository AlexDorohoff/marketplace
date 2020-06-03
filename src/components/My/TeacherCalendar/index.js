import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import ruLocale from '@fullcalendar/core/locales/ru';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import Button from 'arui-feather/button';
import { map, uniqBy } from 'lodash';
import Modal from '../../Common/Modal';
import CoursesServices from '../../../core/services/courses';

/**
 * Teacher calendar
 */
class TeacherCalendar extends Component {
  calendarComponentRef = React.createRef();

  state = {
    calendarWeekends: true,
    calendarEvents: [],
    idOpenModal: '',
    clickedDateTime: '',
    courseId: '',
    clickedEvent: null,
  };

  componentDidMount() {
    const { courses } = this.props.profileData;

    let calendarEvents = [];

    courses.forEach(course => {
      if (course.description.calendar) {
        const calendar = JSON.parse(course.description.calendar);
        calendarEvents = [...calendarEvents, ...calendar];
      }
    });

    if (calendarEvents.length > 0) {
      this.setState({ calendarEvents });
    }
  }

  setIdOpenModal = id => {
    this.setState({ idOpenModal: id });
  };

  storeCalendar = calendarEvents => {
    const errors = [];

    const uniqueIds = map(uniqBy(calendarEvents, 'id'), item => item.id);

    uniqueIds.forEach(id => {
      const part = calendarEvents.filter(item => item.id === id);

      const course = this.props.profileData.courses.find(c => c.id === +id);

      const descr = JSON.parse(course.description);

      const data = {
        description: `${JSON.stringify({ ...descr, calendar: part })}`,
      };

      CoursesServices.updateCourse(id, data).catch(e => errors.push(e));
    });

    const promise = new Promise((resolve, reject) => {
      if (errors.length > 0) {
        return reject(errors);
      }
      return resolve();
    });
    return promise;
  };

  handleAdd = () => {
    const { courses } = this.props.profileData;

    const course = courses.find(c => c.id === +this.state.courseId);

    const calendarEvents = [...this.state.calendarEvents];
    const event = {
      title: course.title,
      start: this.state.clickedDateTime,
      id: this.state.courseId,
    };
    calendarEvents.push(event);
    this.storeCalendar(calendarEvents)
      .then(() => {
        this.setState({
          calendarEvents,
          idOpenModal: '',
          courseId: 0,
        });
      })
      .catch(errors => {
        console.error('Не удалось сохранить календарь', errors);
      });
  };

  removeCalendarRecord = record => {
    const errors = [];

    CoursesServices.getCourse(record.id)
      .then(course => {
        const cal = JSON.parse(course.description.calendar);

        const recDate = new Date(record.start);
        const calendar = cal.filter(c => {
          const dt = new Date(c.start);
          return dt.getTime() !== recDate.getTime();
        });

        const descr = course.description;

        const data = {
          description: {
            ...descr,
            calendar: JSON.stringify(calendar),
          },
        };

        CoursesServices.updateCourse(record.id, data).catch(e =>
          errors.push(e)
        );
      })
      .catch(e => console.log(e.message));

    const promise = new Promise((resolve, reject) => {
      if (errors.length > 0) {
        return reject(errors);
      }
      return resolve();
    });
    return promise;
  };

  handleRemove = () => {
    const ev = this.state.clickedEvent;
    const evDate = new Date(ev.start);

    const calendarEvents = this.state.calendarEvents.filter(lesson => {
      const lessonDate = new Date(lesson.start);
      return lessonDate.getTime() !== evDate.getTime();
    });

    this.removeCalendarRecord(ev)
      .then(() => {
        this.setState({
          calendarEvents,
          idOpenModal: '',
          courseId: 0,
        });
      })
      .catch(() => {
        console.error('Не удалось сохранить календарь');
      });
  };

  handleDateClick = arg => {
    this.setIdOpenModal('AddEventModal');
    this.setState({ clickedDateTime: arg.dateStr });
  };

  handleEventClick = arg => {
    this.setIdOpenModal('RemoveEventModal');
    this.setState({ clickedEvent: arg.event });
  };

  render() {
    const { courses } = this.props.profileData;

    return (
      <>
        <Modal
          open={this.state.idOpenModal === 'AddEventModal'}
          onClose={() => this.setIdOpenModal('')}
          title="Добавить занятие?"
        >
          <span>Выберите курс из списка</span>
          <br />
          <select
            onChange={e => {
              this.setState({ courseId: e.target.value });
            }}
          >
            <option value="0">&nbsp;</option>
            {courses &&
              courses.map(course => (
                <option value={course.id} key={course.id}>
                  {course.title}
                </option>
              ))}
          </select>
          <br />
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              className="button button_default button_modal"
              onClick={() => this.handleAdd()}
            >
              Ок
            </Button>
            <Button
              className="button button_cancel button_modal"
              onClick={() => this.setIdOpenModal('')}
            >
              Отмена
            </Button>
          </div>
        </Modal>
        <Modal
          open={this.state.idOpenModal === 'RemoveEventModal'}
          onClose={() => this.setIdOpenModal('')}
          title="Удалить занятие?"
        >
          <br />
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              className="button button_default button_modal"
              onClick={() => this.handleRemove()}
            >
              Ок
            </Button>
            <Button
              className="button button_cancel button_modal"
              onClick={() => this.setIdOpenModal('')}
            >
              Отмена
            </Button>
          </div>
        </Modal>

        <FullCalendar
          locale="ru"
          locales={[ruLocale]}
          defaultView="timeGridWeek"
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          editable
          header={{
            left: 'prev,next today',
            center: 'title',
            right: 'timeGridWeek,timeGridDay,listWeek',
          }}
          ref={this.calendarComponentRef}
          weekends={this.state.calendarWeekends}
          events={this.state.calendarEvents}
          dateClick={this.handleDateClick}
          eventClick={this.handleEventClick}
        />
      </>
    );
  }
}

export default TeacherCalendar;
