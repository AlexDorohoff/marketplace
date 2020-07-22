﻿import React from 'react';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import { NavLink } from 'react-router-dom';
import Button from 'arui-feather/button';

import { Link } from 'react-router-dom';

import '../../../../../theme/styles/settings.scss';
import './styles_sogl_person.scss';

export default function MainSections() {
  return (



<div className="main-sections">
   <div className="main-sections1">

      <h2 className="text-center main-sections1">Правила использования</h2>
      <GridRow>
            <div>

<ol class="wsnumber4">
  <li>Текст текст</li>
  <li>Текст текст</li>
  <li>Текст текст</li>
  <li>Текст текст</li>
  <li>Текст текст</li>
  <li>Текст текст</li>
  <li>Текст текст</li>
  <li>Текст текст</li>
  <li>Текст текст</li>
  <li>Текст текст</li>
  <li>Текст текст</li>
  <li>Текст текст</li>
  <li>Текст текст</li>
  <li>Текст текст</li>
  <li>Текст текст</li>
  <li>Текст текст</li>
  <li>Текст текст</li>
  <li>11Текст текст
  <ol>
                  <ul>
                    <li>наименование экспертной услуги;</li>
                    <li>Исполнителя услуги(в случае наличия выбора);</li>
                    <li>
                      наименование, местонахождение и полное описание предмета
                      экспертизы;
                    </li>
                    <li>координаты обратной связи;</li>
                    <li>
                      cкан-копии документов, необходимых для выполнения
                      экспертизы.
                    </li>
                  </ul>
  </ol>
  </li>
  <li>Текст текст</li>
  <li>Текст текст</li>
  <li>Текст текст</li>
  <li>Текст текст</li>
  <li>Текст текст</li>
  <li>Текст текст</li>
  <li>Текст текст</li>
  <li>Текст текст</li>
  <li>Текст текст</li>
</ol>

              <ol className="menu-list-terms">
                <li>
                  Сайт «Моё Образование» автоматизированная информационная
                  система, доступная в сети Интернет, обеспечивающая
                  взаимодействие между экспертом, предоставляющим экспертную
                  услугу, и пользователем, обратившимся за такой услугой.
                </li>

                <li>
                  Для комфортного и полноценного использования возможностей
                  «ЛИГА ЭКСПЕРТОВ» оборудование Пользователей должно
                  удовлетворять минимальным Техническим требованиям, указанным
                  на сайте.
                </li>                <li>
                  Все возможности системы «Моё Образование» доступны только
                  Пользователям, прошедшим обязательную бесплатную процедуру
                  регистрации. Набор сервисов различается для Заказчиков и
                  Исполнителей.
                </li>
                <li>
                  Форма регистрации требует заполнения базовой информации,
                  согласия с Пользовательским соглашением системы, подтверждения
                  прохождения процедуры регистрации.
                </li>
                <li>
                  Каждый зарегистрированный Пользователь становиться обладателем
                  Личного кабинета и профиля (аккаунта) в системе «ЛИГА
                  ЭКСПЕРТОВ». Он несет полную ответственность за все действия,
                  которые будут сделаны на сайте с профиля (аккаунта)
                  Пользователя.
                </li>
                <li>
                  Администрация «Моё Образование»{' '}
                  <a href="https://vsemoeobrazovanie.ru/" className="link_five">vsemoeobrazovanie.ru</a> не гарантирует
                  достоверность сведений, представленных Исполнителями Услуг в
                  качестве общедоступной информации.
                </li>
                <li>
                  Пользователь для работы на сайте авторизуется с использованием
                  логина и пароля
                </li>
                <li>
                  Администрация системы «Моё Образование» предоставляет
                  Пользователю возможность самостоятельно публиковать информацию
                  о себе. Администрация системы{' '}
                  <a href="https://vsemoeobrazovanie.ru/" className="link_five">vsemoeobrazovanie.ru</a> «ЛИГАЭКСПЕРТОВ»
                  оставляет за собой право проверки профилей Пользователей.
                </li>
                <li>
                  Экспертные услуги становятся доступны Пользователю полностью
                  после пополнения своего Лицевого счета.С этого момента
                  Пользователь получает статус Заказчика.
                </li>
                <li>
                  Информация о поступлениях на Лицевой счет отображается в
                  профиле (аккаунте) Заказчика в течение 24 (двадцати четырех)
                  часов с момента поступления средств на счет Администрации
                  сайта «ЛИГА ЭКСПЕРТОВ»{' '}
                  <a href="https://vsemoeobrazovanie.ru/" className="link_five">vsemoeobrazovanie.ru</a>.
                </li>
                <li>
                  Средства, находящиеся на Лицевом счетеЗаказчика, могут быть
                  использованы только на получение экспертных услуг
                  исполнителей-экспертов, зарегистрированных в системе «ЛИГА
                  ЭКСПЕРТОВ». Неиспользованные средства сохраняется на Лицевом
                  счете Заказчика.
                </li>
                <li>
                  Внесение средств на Лицевой счетЗаказчика не является фактом
                  оплаты.
                </li>
                <li>
                  Оплата может быть произведена Заказчиком любым из способов,
                  указанных на сайте» Моё Образование», без взимания комиссий за
                  перечисление платежа со стороны Администрации сайта.{' '}
                </li>
                <li>
                  Заказчик может в любое время отказаться от выполнения услуг
                  при условии оплаты исполнителю фактически понесенных им
                  расходов, связанных с исполнением обязательств по оказанию
                  услуги.
                </li>
                <li>
                  При расторжении Пользовательского соглашения произведенные
                  Заказчиком платежи за полученные услуги не возвращаются. При
                  расторжении Пользовательского соглашения и отказа Заказчика от
                  получения услуг, а также в случае не предоставления доступа к
                  ресурсам Сайта по вине Администрации системы{' '}
                  <a href="https://vsemoeobrazovanie.ru/" className="link_five">vsemoeobrazovanie.ru</a> «Моё Образование»
                  денежные средства возвращаются в полном объеме.
                  Гарантированный возврат денежных средств осуществляется на
                  основании письменного требования в течение 30 (тридцати)
                  календарных дней с момента получения такого требования при
                  условии согласия с ним Администрации сайта. Способ возврата
                  денежных средств оговаривается с Заказчикомдополнительно.
                  Сумма возврата не может превышать размер фактически внесенных
                  Заказчиком средств.
                </li>
                <li>
                  Информация о ценах отображается на сайте в разделе{' '}
                  <a href="/" className="link_five">Цены</a>
                </li>
                <li>
                  Списание с Лицевого счета средств Заказчика производятся в
                  соответствии с ценами и включает стоимость транспортных услуг
                  (в случае нахождения предмета экспертизы за пределами
                  территории нахождения эксперта). Общая сумма списания
                  округляется до ближайшего целого числа в рублях в большую
                  сторону и рассчитывается по формуле:
                  <br /><br />
                  Общая сумма списания = Цена экспертной услуги + стоимость
                  транспортных услуг.
		<br /><br />
                </li>
                <li>
                  Для заказа услуги Заказчик должен указать:
                  <ul className="menu-content__ps">
                    <li>наименование экспертной услуги;</li>
                    <li>Исполнителя услуги(в случае наличия выбора);</li>
                    <li>
                      наименование, местонахождение и полное описание предмета
                      экспертизы;
                    </li>
                    <li>координаты обратной связи;</li>
                    <li>
                      cкан-копии документов, необходимых для выполнения
                      экспертизы.
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/" className="link_five">Цены</a> на услуги могут изменяться Администрацией
                  сайта в одностороннем порядке при условии уведомления об этом
                  Пользователей непосредственно на сайте путем изменения
                  содержания информации о <a href="/" className="link_five">Ценах </a>(без
                  специального отдельного объявления). Изменение стоимости услуг
                  не влечет перерасчета стоимости за период, предварительно
                  оплаченный Заказчиком до уведомления об изменении цен.
                </li>
                <li>
                  Пользователи могут заполнить форму отзыва об оказанной услуге,
                  содержащую сведения о качестве, сроке выполнения и иную
                  информацию.
                </li>
                <li>
                  Пользователи вправе в течение 5 (пяти) календарных дней с
                  момента получения результатов экспертизыв электронном виде
                  направить Администратору сайта свои замечания по качеству
                  услуг, оказанных Исполнителем.
                </li>

                <li>
                  Администрация «Моё Образование»{' '}
                  <a href="https://vsemoeobrazovanie.ru/" className="link_five">vsemoeobrazovanie.ru</a> проводит
                  арбитражное рассмотрение в пятидневный срок с момента
                  получения замечаний проверку по факту поступивших замечаний в
                  отношении исполнителей.
                </li>
                <li>
                  По окончанию проверки Администрация сайта «Моё Образование»{' '}
                  <a href="https://vsemoeobrazovanie.ru/" className="link_five">vsemoeobrazovanie.ru</a> сообщает
                  исполнителю и Заказчику о наличии нарушения(ий) или об
                  отсутствии нарушения(ий) в действиях Исполнителя. В случае
                  наличия нарушения(ий) в действиях исполнителя, повлекших
                  оказание некачественной услуги, Администрация сайта производит
                  либо возврат денежных средств, уплаченных за услуги, либо
                  безвозмездное устранение недостатков выполненной услуги.
                </li>
                <li>
                  кспертная услуга считается надлежаще оказанной, если в течение
                  5 (пяти) календарных дней с момента получения Заказчиком
                  результатов экспертизы на бумажном носителе замечаний не
                  поступало. По истечении данного срока претензии Администрацией{' '}
                  <a href="https://vsemoeobrazovanie.ru/" className="link_five">«Моё Образование»</a>не принимаются.
                </li>
                <li>
                  Администрация оставляет за собой право удалить из системы
                  «ЛИГА ЭКСПЕРТОВ» при получении многократных замечаний на
                  качество образовательных услуг или иных непрофессиональных
                  действияпрофиль (аккаунт) Исполнителя услуг.
                </li>
                <li>
                  Администрация сайта не гарантирует постоянный или безусловный
                  доступ к предоставляемым ресурсам Сайта. Функционирование
                  Сайта может нарушаться действиями непреодолимых сил и иных
                  факторов, предотвращение или преодоление которых выходит за
                  пределы возможностей Администрации сайта.
                </li>
                <li>
                  Администрация системы «Моё Образование» осуществляет меры
                  контроля качества предоставляемых Исполнителями экспертных
                  услуг, ведет расчеты вознаграждений, принимает окончательное
                  решение о том, действительно состоялась сделка или нет.
                </li><br />

              <span className="prav-off">
                *данные Правила не являются публичной офертой, равно как и
                официальным текстом перевода{' '}
                <a href="/NotFound"  className="link_five">Пользовательского соглашения</a>.
              </span>
              </ol><br />

              Дата публикации 20.10.2019 <br />© 2020 ООО “СТП-Лаб”<hr />
            </div><br />
      </GridRow>
    </div>
</div>

  );
};