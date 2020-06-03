import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import ruLocale from '@fullcalendar/core/locales/ru';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';

/**
 * Student calendar
 */
export default class StudentCalendar extends React.Component {
  calendarComponentRef = React.createRef();

  state = {
    calendarWeekends: true,
    calendarEvents: [{ title: 'Событие', date: new Date() }],
  };

  handleDateClick = arg => {
    console.log(arg);
  };

  handleEventClick = arg => {
    console.log(arg);
  };

  render() {
    return (
      <FullCalendar
        locale="ru"
        locales={[ruLocale]}
        defaultView="timeGridWeek"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
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
    );
  }
}
