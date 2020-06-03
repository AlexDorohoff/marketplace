import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import ruLocale from '@fullcalendar/core/locales/ru';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
// import CoursesServices from '../../../core/connectors/courses';

/**
 * Student calendar
 */
class CourseCalendar extends Component {
  calendarComponentRef = React.createRef();

  state = {
    calendarWeekends: true,
    calendarEvents: [],
  };

  componentDidMount() {
    const { description } = this.props.course;
    if (description.calendar) {
      const calendarEvents = JSON.parse(description.calendar);
      if (calendarEvents.length > 0) {
        this.setState({ calendarEvents });
      }
    }
  }

  handleEventClick = arg => {
    this.props.onSelect(arg);
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
        eventClick={this.handleEventClick}
      />
    );
  }
}

export default CourseCalendar;
