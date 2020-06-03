import Photo1 from '../../theme/images/teacher1.jpg';
import Photo2 from '../../theme/images/teacher2.jpg';
import Photo3 from '../../theme/images/teacher3.jpg';
import Photo4 from '../../theme/images/teacher4.jpg';
import Photo5 from '../../theme/images/teacher5.jpg';
import Photo6 from '../../theme/images/teacher6.jpg';
import Photo7 from '../../theme/images/course1.jpg';
import Photo8 from '../../theme/images/course2.jpg';
import Photo9 from '../../theme/images/course3.jpg';
import Photo10 from '../../theme/images/course4.jpg';
import Photo11 from '../../theme/images/course5.jpg';
import Photo12 from '../../theme/images/course6.jpg';
import Banner1 from '../../theme/images/home-banner.jpg';
import Banner2 from '../../theme/images/home-banner2.jpg';
import Banner3 from '../../theme/images/home-banner3.jpg';
import Bannersuccess2 from '../../theme/images/account/bannersuccess2.svg';

export const teachers = [
  // {
  //   title: 'Барышева Светлана Валентиновна',
  //   subjects: ['Русский язык', 'Литература'],
  //   spec:
  //     [{
  //       sbj: 'Русский язык',
  //       price: '1500₽/60 мин.'
  //     }, {
  //       sbj: 'Литература',
  //       price: '1500₽/60 мин.'
  //     }],
  //   photo: Photo1
  // },
  // {
  //   title: 'Солдатов Михаил Юрьевич',
  //   subjects: ['Английский язык'],
  //   spec: [{
  //     sbj: 'Разговорный и письменный язык',
  //     price: '1500₽/45 мин.'
  //   }],
  //   photo: Photo2
  // },
  // {
  //   title: 'Чистополов Иван',
  //   subjects: ['Композиция'],
  //   spec: [{
  //     sbj: 'Основы фотографии',
  //     price: '0₽/45 мин.'
  //   }],
  //   photo: Photo3
  // },
  // {
  //   title: 'Браилова Светлана Аркадьевна',
  //   subjects: ['Обществознание, История'],
  //   spec: [{
  //     sbj: 'Обществознание',
  //     price: '450₽/60 мин.'
  //   }, {
  //     sbj: 'История Отечества с древнейших времён до начала XXI века',
  //     price: '450₽/60 мин.'
  //   }],
  //   photo: Photo4
  // },
  // {
  //   title: 'Сахбутдинова Роза Салимовна',
  //   subjects: ['Граждановедение'],
  //   spec: [{
  //     sbj: 'Английский язык ',
  //     price: '200₽/30 мин.'
  //   }],
  //   photo: Photo5
  // },
  // {
  //   title: 'Жукова Людмила Владимировна',
  //   subjects: ['Русский язык\n'],
  //   spec: [{
  //     sbj: 'Углубление и расширение знаний по русскому языку учеников 5-11 классов',
  //     price: '500₽/45 мин.'
  //   }],
  //   photo: Photo6
  // },
];

export const teachersBreadcrumbs = [
  {
    title: 'Курсы',
    link: '/courses',
  },
  {
    title: 'Все предметы',
    link: '/courses',
  },
  {
    title: 'Все преподаватели',
    link: '',
  },
];

export const teacherBreadcrumbs = [
  {
    title: 'Главная',
    link: '/',
  },
  {
    title: 'Курсы',
    link: '/courses',
  },
  {
    title: 'Русский язык',
    link: '/courses',
  },
  {
    title: 'Преподаватель',
    link: '/teachers',
  },
  {
    title: '',
    link: '',
  },
];

export const courses = [
  {
    id: 1,
    title:
      '«Понимание и преобразование ситуаций межличностного взаимодействия в произведениях живописи»',
    subjects: 'Культурология',
    price: '',
    photo: Photo7,
  },
  {
    id: 2,
    title: '«Русский без ошибок»',
    subjects: 'Русский язык',
    price: '10 000₽',
    photo: Photo8,
  },
  {
    id: 3,
    title: '«Квантовая физика»',
    subjects: 'Физика',
    price: '20 000₽',
    photo: Photo9,
  },
  {
    id: 4,
    title: '«История России»',
    subjects: 'История',
    price: '15 000₽',
    photo: Photo10,
  },
  {
    id: 5,
    title: '«Медико-биологические основы безопасности жизнедеятельности»',
    subjects: 'Биология',
    price: '12 000₽',
    photo: Photo11,
  },
  {
    id: 6,
    title: 'Курс по географии для 9 класса (базовый уровень)',
    subjects: 'География',
    price: '8 000₽',
    photo: Photo12,
  },
];

export const coursesBreadcrumbs = [
  {
    title: 'Курсы',
    link: '/courses',
  },
  {
    title: 'Все предметы',
    link: '',
  },
];

export const courseBreadcrumbs = [
  {
    title: 'Курсы',
    link: '/courses',
  },
  {
    title: '',
    link: '/courses',
  },
  {
    title: '',
    link: '',
  },
];

export const studentBreadcrumbs = [
  {
    title: 'Профиль',
    link: '/courses',
  },
  {
    title: 'Студент',
    link: '/courses',
  },
  {
    title: 'Денежных Екатерина',
    link: '',
  },
];

export const myteacherBreadcrumbs = [
  {
    title: 'Профиль',
    link: '/courses',
  },
  {
    title: 'Преподаватель',
    link: '/teacher',
  },
  {
    title: 'Барышева Светлана Валентиновна',
    link: '',
  },
];

export const myheadteacherBreadcrumbs = [
  {
    title: 'Профиль',
    link: '/courses',
  },
  {
    title: 'завуч',
    link: '/teacher',
  },
  {
    title: 'Барышева Светлана Валентиновна',
    link: '',
  },
];
export const myprocreation = [
  {
    title: 'Профиль',
    link: '/courses',
  },
  {
    title: 'Создание расписания  PRO',
    link: '',
  },
];

export const carousel = [
  {
    id: 1,
    title: 'Покупай с удовольствием!',
    txt: 'на МАРКЕТПЛЕЙСЕ «Море» Вы найдете море товаров на любой вкус и цвет',
    img: Banner1,
  },
  {
    id: 2,
    title: 'Фалеристика',
    txt:
      'ВИТРИНЫ СТАРИННЫХ ПРЕДМЕТОВ С ВОЗМОЖНОСТЬЮ ОБМЕНА, ПОИСКА, ОЦЕНКИ, ПОПОЛНЕНИЯ КОЛЛЕКЦИИ НОВЫМИ ЭКЗЕМПЛЯРАМИ, ПРИОБРЕТЕНИЯ ОРИГИНАЛЬНОГО ПОДАРКА, ПРОДАЖИ ИЗЛИШКОВ СВОИХ НАКОПЛЕНИЙ.',
    img: Banner2,
  },
  {
    id: 3,
    title: 'АКЦИЯ!',
    txt: 'Закажите два станка токарно-винторезных станка CW61160 и получите заточной станок MQ6025A в подарок',
    img: Banner3,
  },
];

export const carouselstudent = [
  {
    id: 1,
    img: Bannersuccess2,
  },
  {
    id: 2,
    img: Bannersuccess2,
  },
  {
    id: 3,
    img: Bannersuccess2,
  },
  {
    id: 4,
    img: Bannersuccess2,
  },
];

export const mycourseBreadcrumbs = [
  {
    title: 'Личный кабинет',
    link: '/',
  },
  {
    title: 'Преподаватель',
    link: '/courses',
  },
  {
    title: 'Барышева Светлана Валентиновна',
    link: '',
  },
];

export const files = [
  {
    id: 1,
    img: Bannersuccess2,
  },
  {
    id: 2,
    img: Bannersuccess2,
  },
  {
    id: 3,
    img: Bannersuccess2,
  },
  {
    id: 4,
    img: Bannersuccess2,
  },
  {
    id: 5,
    img: Bannersuccess2,
  },
  {
    id: 6,
    img: Bannersuccess2,
  },
];
export const myteacher1Breadcrumbs = [
  {
    title: 'Личный кабинет',
    link: '/my/teacher',
  },
  {
    title: 'Преподаватели',
    link: '/teachers',
  },
  {
    title: 'Барышева Светлана Валентиновна',
    link: '',
  },
];
export const mystudent1Breadcrumbs = [
  {
    title: 'Личный кабинет',
    link: '/my/student',
  },
  {
    title: 'Ученик',
    link: '/student',
  },
  {
    title: 'Денежных Екатерина',
    link: '',
  },
];
// ПРавила нашего дома
export const affiliateBreadcrumbs = [
  {
    
    title: 'Главная',
    
    link: '/',
  },
  {
    
    title: 'Правила Нашего Дома',
    
    link: '/pravila-of-our-house',
  },
  {
    
    title: 'Третьи Лица',
    
    link: '/third-party-policies',
  },
  {
    
    title: 'Партнерская политика',
    
    link: '',
  },
];

export const antiBreadcrumbs = [
  {
    
    title: 'Главная',
    
    link: '/',
  },
  {
    
    title: 'Правила Нашего Дома',
    
    link: '/pravila-of-our-house',
  },
  {
    
    title: 'Политика продавца',
    
    link: '/policy-experts',
  },
  {
    
    title: 'Антидискриминационная политика',
    
    link: '',
  },
];
export const cookieBreadcrumbs = [
  {
    
    title: 'Главная',
    
    link: '/',
  },
  {
    
    title: 'Правила Нашего Дома',
    
    link: '/pravila-of-our-house',
  },
  {
    
    title: 'Политика продавца',
    
    link: '/policy-experts',
  },
  {
    
    title: 'Файлы Cookie',
    
    link: '',
  },
];
export const aboutcookieBreadcrumbs = [
  {
    
    title: 'Главная',
    
    link: '/',
  },
  {
    
    title: 'Правила Нашего Дома',
    
    link: '/pravila-of-our-house',
  },
  {
    
    title: 'Согласие на обработку пользовательских данных',
    
    link: '',
  },
];

export const apiBreadcrumbs = [
  {
    
    title: 'Главная',
    
    link: '/',
  },
  {
    
    title: 'Правила Нашего Дома',
    
    link: '/pravila-of-our-house',
  },
  {
    
    title: 'Третьи лица',
    
    link: '/third-party-policies',
  },
  {
    
    title: 'Условия использования API',
    
    link: '',
  },
];

export const comBreadcrumbs = [
  {
    
    title: 'Главная',
    
    link: '/',
  },
  {
    
    title: 'Правила Нашего Дома',
    
    link: '/pravila-of-our-house',
  },
  {
    
    title: 'Политика продавца',
    
    link: '/policy-experts',
  },
  {
    
    title: 'Политика сообщества',
    
    link: '',
  },
];

export const forbidBreadcrumbs = [
  {
    
    title: 'Главная',
    
    link: '/',
  },
  {
    
    title: 'Правила Нашего Дома',
    
    link: '/pravila-of-our-house',
  },
  {
    
    title: 'Политика продавца',
    
    link: '/policy-experts',
  },
  {
    
    title: 'Политика запрещенных сделок',
    
    link: '',
  },
];

export const intellectBreadcrumbs = [
  {
    
    title: 'Главная',
    
    link: '/',
  },
  {
    
    title: 'Правила Нашего Дома',
    
    link: '/pravila-of-our-house',
  },
  {
    
    title: 'Политика продавца',
    
    link: '/policy-experts',
  },
  {
    
    title: 'Интеллектуальная собственность',
    
    link: '',
  },
];

export const marketBreadcrumbs = [
  {
    
    title: 'Главная',
    
    link: '/',
  },
  {
    
    title: 'Правила Нашего Дома',
    
    link: '/pravila-of-our-house',
  },
  {
    
    title: 'Политика продавца',
    
    link: '/policy-experts',
  },
  {
    
    title: 'Политика рекламы и маркетинга',
    
    link: '',
  },
];

export const pravBreadcrumbs = [
  {
    
    title: 'Главная',
    
    link: '/',
  },
  {
    
    title: 'Правила Нашего Дома',
    
    link: '',
  },
];

export const confBreadcrumbs = [
  {
    
    title: 'Главная',
    
    link: '/',
  },
  {
    
    title: 'Правила Нашего Дома',
    
    link: '/pravila-of-our-house',
  },
  {
    
    title: 'Политика конфиденциальности',
    
    link: '',
  },
];

export const refBreadcrumbs = [
  {
    
    title: 'Главная',
    
    link: '/',
  },
  {
    
    title: 'Правила Нашего Дома',
    
    link: '/pravila-of-our-house',
  },
  {
    
    title: 'Политика продавца',
    
    link: '/policy-experts',
  },
  {
    
    title: 'Реферальная политика',
    
    link: '',
  },
];

export const termsBreadcrumbs = [
  {
    
    title: 'Главная',
    
    link: '/',
  },
  {
    
    title: 'Правила Нашего Дома',
    
    link: '/pravila-of-our-house',
  },
  {
    
    title: 'Правила использования',
    
    link: '',
  },
];

export const thirdBreadcrumbs = [
  {
    
    title: 'Главная',
    
    link: '/',
  },
  {
    
    title: 'Правила Нашего Дома',
    
    link: '/pravila-of-our-house',
  },
  {
    
    title: 'Политика третьих лиц',
    
    link: '',
  },
];

export const expertsBreadcrumbs = [
  {
    
    title: 'Главная',
    
    link: '/',
  },
  {
    
    title: 'Правила Нашего Дома',
    
    link: '/pravila-of-our-house',
  },
  {
    
    title: 'Политика продавца',
    
    link: '',
  },
];

export const clientBreadcrumbs = [
  {
    
    title: 'Главная',
    
    link: '/',
  },
  {
    
    title: 'Правила Нашего Дома',
    
    link: '/pravila-of-our-house',
  },
  {
   
    title: 'Политика покупателя',
    
    link: '',
  },
];

export const sog152fzBreadcrumbs = [
  {
    
    title: 'Главная',
    
    link: '/',
  },
  {
    
    title: 'Правила Нашего Дома',
    
    link: '/pravila-of-our-house',
  },
  {
    
    title: 'Политика покупателя',
    
    link: '/policy-client',
  },
  {
    
    title: 'Политика персональных данных',
    
    link: '',
  },
];

export const arbitrationBreadcrumbs = [
  {
    
    title: 'Главная',
    
    link: '/',
  },
  {
    
    title: 'Правила Нашего Дома',
    
    link: '/pravila-of-our-house',
  },
  {
    
    title: 'Политика покупателя',
    
    link: '/policy-client',
  },
  {
    
    title: 'Арбитражные правила',
    
    link: '',
  },
];


export const userAgreementBreadcrumbs = [
  {
    
    title: 'Главная',
    
    link: '/',
  },
  {
    
    title: 'Правила Нашего Дома',
    
    link: '/pravila-of-our-house',
  },
  {
    
    title: 'Политика покупателя',
    
    link: '/policy-client',
  },
  {
    
    title: 'Пользовательское соглашение',
    
    link: '',
  },
];


export const trademarkBreadcrumbs = [
  {
    
    title: 'Главная',
    
    link: '/',
  },
  {
    
    title: 'Правила Нашего Дома',
    
    link: '/pravila-of-our-house',
  },
  {
    
    title: 'Политика покупателя',
    
    link: '/policy-client',
  },
  {
    
    title: 'Политика товарных знаков',
    
    link: '',
  },
];