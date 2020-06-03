import React, { useState } from 'react';
import Helmet from 'react-helmet';
import Button from 'arui-feather/button';
import Modal1 from '../../../components/My/Forms/Modal1';
import Modal2 from '../../../components/My/Forms/Modal2';
import Modal3 from '../../../components/My/Forms/Modal3';
import Modal4 from '../../../components/My/Forms/Modal4';
import Modal5 from '../../../components/My/Forms/Modal5';
import Modal6 from '../../../components/My/Forms/Modal6';
import Modal7 from '../../../components/My/Forms/Modal7';
import Modal8 from '../../../components/My/Forms/Modal8';
import Dialog from '../../../components/Common/Dialog';
import ModalTeacherMessage from '../../../components/My/Forms/ModalTeacherMessage';
// import ModalTeacherHistory from '../../../components/My/TeacherHistory';
// import ModalTeacherHistoryOfStudent from '../../../components/My/TeacherHistoryOfStudent';
// import ModalTeacherReport from '../../../components/My/TeacherReport';
// import ModalTeacherAssessment from '../../../components/My/TeacherAssessment';
import ModalTeacherTasks from '../../../components/My/Forms/ModalTeacherTasks';
import ModalStudentMessage from '../../../components/My/Forms/ModalStudentMessage';
import ModalStudentHistory from '../../../components/My/Forms/ModalStudentHistory';
import ModalStudentHistoryTheme from '../../../components/My/Forms/ModalStudentHistoryTheme';
import ModalStudentAssessment from '../../../components/My/Forms/ModalStudentAssessment';
import ModalStudentReport from '../../../components/My/Forms/ModalStudentReport';
import ModalStudentTasks from '../../../components/My/Forms/ModalStudentTasks';
import ModalTeacherTimetablePro1 from '../../../components/My/Forms/ModalTeacherTimetablePro1';
import ModalTeacherCardCheck from '../../../components/My/Forms/ModalTeacherCardChek';
import ModalTeacherCard from '../../../components/My/Forms/ModalTeacherCard';
import CheckedPopup from '../../../components/Common/CheckedPopup';

/**
 * My modals
 */
export default function Modals() {
  const [idOpenModal, setIdOpenModal] = useState(0);
  const handleCloseModal = () => setIdOpenModal(0);
  const handleOpenModal = idModal => setIdOpenModal(idModal);
  return (
    <>
      <Helmet>
        <title>Modal windows</title>
      </Helmet>
      <section className="section">
        <div className="form-field">
          <Button className="button button_default" onClick={() => handleOpenModal(1)}>Dialog 1</Button>
          <Button className="button button_default" onClick={() => handleOpenModal(2)}>Dialog 2</Button>
          <Button className="button button_default" onClick={() => handleOpenModal(3)}>Dialog 3</Button>
          <Button className="button button_default" onClick={() => handleOpenModal(4)}>Dialog 4</Button>
        </div>
        <div className="form-field">
          <Button className="button button_default" onClick={() => handleOpenModal(5)}>Dialog 5</Button>
          <Button className="button button_default" onClick={() => handleOpenModal(6)}>Dialog 6</Button>
          <Button className="button button_default" onClick={() => handleOpenModal(7)}>Dialog 7</Button>
          <Button className="button button_default" onClick={() => handleOpenModal(8)}>Dialog 8</Button>
        </div>
        <div className="form-field">
          <Button className="button button_default" onClick={() => handleOpenModal(9)}>Teacher Message</Button>
          {/*<Button className="button button_default" onClick={() => handleOpenModal(10)}>Teacher History</Button>*/}
          {/*<Button className="button button_default" onClick={() => handleOpenModal(11)}>Teacher History of Student</Button>*/}
        </div>
        <div className="form-field">
          {/*<Button className="button button_default" onClick={() => handleOpenModal(12)}>Teacher Report</Button>*/}
          {/*<Button className="button button_default" onClick={() => handleOpenModal(13)}>Teacher Assessment</Button>*/}
          <Button className="button button_default" onClick={() => handleOpenModal(14)}>Teacher Tasks</Button>
        </div>
        <div className="form-field">
          <Button className="button button_default" onClick={() => handleOpenModal(15)}>Student Message</Button>
          <Button className="button button_default" onClick={() => handleOpenModal(16)}>Student History</Button>
          <Button className="button button_default" onClick={() => handleOpenModal(17)}>Student History Theme</Button>
        </div>
        <div className="form-field">
          <Button className="button button_default" onClick={() => handleOpenModal(18)}>Student Assessment</Button>
          <Button className="button button_default" onClick={() => handleOpenModal(19)}>Student Report</Button>
          <Button className="button button_default" onClick={() => handleOpenModal(20)}>Student Tasks</Button>
        </div>
        <div className="form-field">
          <Button className="button button_default" onClick={() => handleOpenModal(21)}>Teacher Timetable Pro1</Button>
          <Button className="button button_default" onClick={() => handleOpenModal(22)}>Teacher Card Check</Button>
          <Button className="button button_default" onClick={() => handleOpenModal(23)}>Teacher Card </Button>
        </div>
        <Dialog isOpen={idOpenModal === 1} onClose={handleCloseModal} title="Редактирование дисциплин">
          <Modal1 />
        </Dialog>
        <Dialog isOpen={idOpenModal === 2} onClose={handleCloseModal} title="Внимание !">
          <Modal2 />
        </Dialog>
        <Dialog isOpen={idOpenModal === 3} onClose={handleCloseModal} title="Загрузка файлов">
          <Modal3 />
        </Dialog>
        <Dialog isOpen={idOpenModal === 4} onClose={handleCloseModal} title="Новая дисциплина">
          <Modal4 />
        </Dialog>
        <Dialog isOpen={idOpenModal === 5} onClose={handleCloseModal} title="Загруженные файлы">
          <Modal5 />
        </Dialog>
        <Dialog isOpen={idOpenModal === 6} onClose={handleCloseModal} title="Новая дисциплина">
          <Modal6 />
        </Dialog>
        <Dialog isOpen={idOpenModal === 7} onClose={handleCloseModal} title="Загруженные файлы">
          <Modal7 />
        </Dialog>
        <Dialog isOpen={idOpenModal === 8} onClose={handleCloseModal} title="Место проведения">
          <Modal8 />
        </Dialog>
        <Dialog isOpen={idOpenModal === 9} onClose={handleCloseModal} title="Сообщение">
          <ModalTeacherMessage />
        </Dialog>
        <Dialog isOpen={idOpenModal === 14} onClose={handleCloseModal} title="Задание для учащихся">
          <ModalTeacherTasks />
        </Dialog>
        <Dialog isOpen={idOpenModal === 15} onClose={handleCloseModal} title="Сообщение">
          <ModalStudentMessage />
        </Dialog>
        <Dialog isOpen={idOpenModal === 16} onClose={handleCloseModal} title="История занятий">
          <ModalStudentHistory />
        </Dialog>
        <Dialog isOpen={idOpenModal === 17} onClose={handleCloseModal} title="История тем">
          <ModalStudentHistoryTheme />
        </Dialog>
        <Dialog isOpen={idOpenModal === 18} onClose={handleCloseModal} title="Оценка заданий">
          <ModalStudentAssessment />
        </Dialog>
        <Dialog isOpen={idOpenModal === 19} onClose={handleCloseModal} title="Отчет по пройденной теме">
          <ModalStudentReport />
        </Dialog>
        <Dialog isOpen={idOpenModal === 20} onClose={handleCloseModal} title="Просмотр задания">
          <ModalStudentTasks />
        </Dialog>
        <Dialog isOpen={idOpenModal === 21} onClose={handleCloseModal} title="Ваше «Расписание PRO»">
          <ModalTeacherTimetablePro1 />
        </Dialog>
        <Dialog isOpen={idOpenModal === 22} onClose={handleCloseModal} title="">
          <ModalTeacherCardCheck />
        </Dialog>
        <Dialog isOpen={idOpenModal === 23} onClose={handleCloseModal} title="">
          <ModalTeacherCard />
        </Dialog>
      </section>
    </>
  );
}
