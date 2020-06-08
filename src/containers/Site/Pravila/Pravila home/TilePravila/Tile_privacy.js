﻿import React from 'react';
import GridRow from 'arui-feather/grid-row';
import '../../../../../theme/styles/settings.scss';

export default function MainSections() {
  return (
    <div className="">
      <div className="">
        <h2 className="text-center">Политика конфиденциальности</h2>
        <GridRow>
          <div>
            Настоящая политика конфиденциальности разработана ООО «СТП-Лаб» в целях описания процедуры 
            сбора, использования, раскрытия, передачи и хранения информации на нашем Сайте, через наши 
            приложения и иные интерактивные услуги, принадлежащие или контролируемые ООО «СТП-Лаб», а 
            также процедуру сбора информации о Пользователе, которая хранится в базах данных Компании
            <hr />
            <ol>
              <li>
                <a href="#link-1" className="link_five">
                  1. Сбор и использование личной информации
                </a>
              </li>
              <li>
                <a href="#link-1_1" className="link_five menu_link">
                  Собираемая информация
                </a>
              </li>
              <li>
                <a href="#link-1_2" className="link_five menu_link">
                  Порядок использования полученной информации
                </a>
              </li>
              <li>
                <a href="#link-2" className="link_five">
                  2. Обработка персональных данных
                </a>
              </li>
              <li>
                <a href="#link-3" className="link_five">
                  3. Сбор и использования данных, не являющихся персональными
                </a>
              </li>
              <li>
                <a href="#link-4" className="link_five">
                  4. Доступность и актуализация персональных данных
                </a>
              </li>
              <li>
                <a href="#link-5" className="link_five">
                  5. Раскрытие информации третьим лицам
                </a>
              </li>
              <li>
                <a href="#link-6" className="link_five">
                  6. Информационная безопасность
                </a>
              </li>
              <li>
                <a href="#link-7" className="link_five">
                  7. Дети
                </a>
              </li>
              <li>
                <a href="#link-8" className="link_five">
                  8. Сторонние сайты и услуги
                </a>
              </li>
              <li>
                <a href="#link-9" className="link_five">
                  9. Соответствие законодательству
                </a>
              </li>
              <li>
                <a href="#link-10" className="link_five">
                  10. Изменения
                </a>
              </li>
              <li>
                <a href="#link-11" className="link_five">
                  11. Контактная информация
                </a>
              </li>
            </ol>
            <hr />
            <div className="menu-content__text">
              <p className="menu-content__title" id="link-1">
                1. Сбор и использование личной информации
              </p>
              ООО «СТП-Лаб» рассматривает личную информацию Пользователя, указанную 
              при регистрации на Сайте, и иные предоставленные данные в качестве 
              конфиденциальной информации, при условии, что такая информация может 
              быть использована для идентификации Пользователя и контактов с ним. 
              ООО «СТП-Лаб» обеспечивает защиту конфиденциальных данных в целях: 
              предотвращения утечки, хищения, искажения, подделки информации, предотвращения 
              несанкционированных действий по уничтожению, искажению, блокировки информации, 
              защиты права на неприкосновенность частной жизни и поддержанию конфиденциальности 
              персональных данных.
              <br />
              <p className="menu-content__title1" id="link-1_1">
                Собираемая информация
              </p>
              <b>Информация, предоставляемая Вами лично.</b>
              {' '}
              К примеру, для входа в Профиль, 
              Вам необходимо пройти регистрацию. Для регистрации Вам понадобится ввести ряд 
              персональных данных, таких как имя и фамилия, адрес электронной почты, номер 
              телефона, информация о платежной карте и иную информацию, в том числе связанную 
              с персональной. Не рекомендуется вводить персональные данные лиц, не достигших 
              16 лет. Компания также рекомендует не использовать персональные данные в качестве 
              пароля для Сайта. 
              <br />
              <br />
              <b>Информация, поступающая в связи с использованием ресурсов Сайта.</b>
              {' '}
              Мы 
              осуществляем сбор информации об услугах, которые Вы используете, и порядке их 
              использования. В данную категорию входят следующие данные: 
              <br />
              <br />
              <em>Информация об устройстве.</em>
              {' '}
              Мы собираем информацию об используемых Вами 
              при входе на Сайт устройствах, в том числе: модель устройства, версия операционной 
              системы, уникальные идентификаторы устройств и информация о мобильной сети.
              Журнал данных. Компания производит автоматический сбор и хранения определенной информации 
              в серверных журналах данных, при использовании Вами ресурсов Сайта. К такой информации 
              относятся: порядок использования Сайта, протоколы интернет-адресов, информация 
              об устройстве выхода и cookies, которые помогут определить Ваш браузер.
              <br />
              <br />
              <em>Информация о местоположении.</em>
              {' '}
              Мы собираем и обрабатываем данные о Вашем фактическом
              местоположении. Cookies и анонимные идентификаторы. Компания самостоятельно или с 
              привлечением третьих лиц может запрашивать с Вашего устройства о cookies и анонимных 
              идентификаторах более одного раза.
              <br />
              <p className="menu-content__title1" id="link-1_2">
                Порядок использования полученной информации
              </p>
              ООО «СТП-Лаб» использует информацию, полученную от Пользователей для: регистрации 
              Пользователя на Сайте; выполнения своих обязательств перед Пользователем; оценки и анализа 
              работы Сайта; обеспечения, поддержки, защиты и улучшения сервиса. «Мое Образование»
              вправе осуществлять информационные и рекламные рассылки на указанные электронные адреса 
              Пользователей. Отписаться от рассылок, проводимых ООО «СТП-Лаб» можно перейдя по соответствующей 
              ссылке в конце каждого из электронных сообщений.
              <br />
              <br />
              Компания вправе использовать указанное Вами при регистрации имя, в процессе использования 
              Вами ресурсов Сайта. Компания вправе публиковать информацию, указанную Вами при регистрации, 
              при этом, любая опубликованная информация будет доступна к просмотру только иным 
              зарегистрированным Пользователям в целях оказания услуг. Мы также можем использовать Ваш 
              логин, фотографию Профиля для опубликования иным Пользователям без ограничений. Вы вправе 
              самостоятельно в личном кабинете ограничивать видимость той или иной информации.
              <br />
              <br />
              Мы записываем любые Ваши действия, произведенные на Сайте, чтобы помочь в разрешении 
              любых проблемных ситуаций. Компания вправе использовать адрес Вашей электронной почты 
              для уведомления о предстоящих изменениях и улучшениях на Сайте.
              <br />
              <br />  
              Компания вправе осуществлять иные действия с Вашими персональными данными, указанными на 
              Сайте, только с Вашего личного разрешения.
              <p className="menu-content__title" id="link-2">
                2. Обработка персональных данных
              </p>
              Персональные данные Пользователя обрабатывается в соответствии с Федеральным законом 
              Российской Федерации «О персональных данных» № 152-ФЗ.
              <br />
              <br />
              Предоставляя свои персональные данные, Посетитель Сайта, Пользователь соглашается на их 
              обработку компанией, в том числе в целях выполнения компанией обязательств перед Посетителем 
              Сайта, Пользователем в рамках Публичной оферты и Политики конфиденциальности, продвижения компанией 
              товаров и услуг, проведения электронных и sms рассылок и оповещений, контроля результатов 
              маркетинговых акций, клиентской поддержки, проведение розыгрышей призов среди Посетителей Сайта, 
              Пользователей, контроля удовлетворенности Посетителя Сайта, Пользователя, а также качества услуг, 
              оказываемых компанией.
              <br />
              <br /> 
              Под обработкой персональных данных понимается любое действие (операция) или совокупность действий 
              (операций), совершаемых с использованием средств автоматизации или без использования таких средств 
              с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение 
              (обновление, изменение) извлечение, использование, передачу (в том числе передачу третьим лицам, 
              не исключая трансграничную передачу, если необходимость в ней возникла в ходе исполнения обязательств), 
              обезличивание, блокирование, удаление, уничтожение персональных данных.
              <br />
              <br />
              Обработка персональных данных, осуществляемая без использования средств автоматизации, осуществляется 
              таким образом, чтобы в отношении каждой категории персональных данных можно было определить места 
              хранения персональных данных (материальных носителей). Компанией установлен перечень лиц, 
              осуществляющих обработку персональных данных либо имеющих к ним доступ. Обеспечивается раздельное 
              хранение персональных данных (материальных носителей), обработка которых осуществляется в различных целях. 
              Компания обеспечивает сохранность персональных данных и принимает меры, исключающие несанкционированный 
              доступ к персональным данным.
              <br />
              <br />
              Обработка персональных данных, осуществляемая с использованием средств автоматизации, проводится при 
              условии выполнения следующих действий: компания проводит технические мероприятия, направленные на 
              предотвращение несанкционированного доступа к персональным данным и (или) передачи их лицам, не имеющим 
              права доступа к такой информации; защитные инструменты настроены на своевременное обнаружение фактов 
              несанкционированного доступа к персональным данным; технические средства автоматизированной обработки 
              персональных данных изолированы в целях недопущения воздействия на них, в результате которого может быть 
              нарушено их функционирование; компания производит резервное копирование данных, с тем, чтобы иметь возможность 
              незамедлительного восстановления персональных данных, модифицированных или уничтоженных вследствие 
              несанкционированного доступа к ним; осуществляет постоянный контроль за обеспечением уровня защищенности 
              персональных данных.
              <br />
              <br /> 
              ООО «СТП-Лаб» имеет право отправлять информационные, в том числе рекламные сообщения, на электронную почту 
              и мобильный телефон Пользователя с его согласия, выраженного посредством совершения им конклюдентных действий. 
              Пользователь вправе отказаться от получения рекламной и другой информации без объяснения причин отказа путем 
              информирования ООО «СТП-Лаб» о своем отказе по телефону (836) 241-02-97 либо посредством направления соответствующего 
              заявления на электронный адрес компании:
              {' '} 
              {' '}
              <a href="support@teachr.ru" className="link_five">support@teachr.ru</a> 
              заказе и этапах его обработки, отправляются автоматически и не могут быть отклонены Пользователем/Покупателем.
              <br />
              Продавец вправе осуществлять записи телефонных разговоров с Пользователем/Покупателем. При этом Продавец обязуется: 
              предотвращать попытки несанкционированного доступа к информации, полученной в ходе телефонных переговоров, 
              и/или передачу ее третьим лицам, не имеющим непосредственного отношения к исполнению Заказов, в соответствии 
              с п.4 ст.16 Федерального закона «Об информации, информационных технологиях и о защите информации».
              <br />
              <br /> 
              <p className="menu-content__title" id="link-3">
                3. Сбор и использования данных, не являющихся персональными
              </p>
              Компания может собирать информацию, которая может косвенно затрагивать интересы какого либо лица. Компания 
              вправе собирать, использовать, передавать и раскрывать любую информацию, не относящуюся к персональным данным. 
              Мы вправе собирать такую информацию, как: Ваш род деятельности, язык, индекс, код города, уникальный идентификатор 
              устройства, URL, местоположение и часовой пояс по Вашему местонахождению.
              <br />
              <br /> 
              Компания вправе собирать информацию о действиях Пользователя на Сайте. Эта информация обобщается и используется 
              для улучшения сервиса и услуг и чтобы понять, какие части Сайта представляют наибольший интерес. Обобщенные 
              данные не являются персональными, в соответствии с настоящей Политикой конфиденциальности.
              <br />
              <br />
              В случае если персональная информация будет комбинироваться с не персональной, то такая комбинация будет 
              относиться к персональным данным до момента исключения персональных данных из комбинации.
              <p className="menu-content__title" id="link-4">
                4. Доступность и актуализация персональных данных
              </p>
              Компания предоставляет доступ к Вашим персональным данным каждый раз при Вашем входе на сайт. Если какие-либо
              из персональных данных утратили свою актуальность или записаны неверно, компания предоставляет Вам возможность 
              самостоятельно вносить необходимые корректировки, кроме отдельных данных, которые необходимы для законности 
              осуществления деятельности. До внесения корректировки Ваших персональных данных в Вашем Профиле, компания может 
              попросить Вас пройти процедуру идентификации.
              <br />
              <br />
              Возможность исправлять персональные данные предоставляется безвозмездно, за исключением случаев, когда 
              процесс замены данных будет иметь существенное значение для Компании. Мы всесторонне охраняем предоставленные 
              Вами персональные данные от случайного или злонамеренного уничтожения. В связи с данным фактом, в случае 
              расторжения Пользовательского соглашения, Компания не сможет единовременно исключить с серверов Компании все 
              произведенные копии данных.
              <p className="menu-content__title" id="link-5">
                5. Раскрытие информации третьим лицам
              </p>
              Компания не раскрывает Ваши персональные данные третьим лицам, не являющимся доверенными лицами или партнерами 
              ООО «СТП-Лаб», за исключением следующих случаев: 
              <ol>
                <li>
                  <ul className="menu-content__ps">
                    <li>
                      ООО «СТП-Лаб» вправе раскрывать Ваши персональные данные третьим лицам по Вашему непосредственному разрешению. 
                      Вы вправе запретить передачу персональных данных третьим лицам полностью или в части; 
                    </li>
                    <li>
                      компания вправе раскрыть Ваши персональные данные по запросам государственных органов при наличии законных 
                      оснований. Компания также вправе раскрыть Ваши персональные данные, если мы установим, что такое раскрытие 
                      необходимо для целей национальной безопасности или других вопросов государственной важности;  
                    </li>
                    <li>
                      компания также может раскрывать информацию о Вас, если такое раскрытие необходимо для обеспечения 
                      Пользовательского соглашения или защиты операций и пользователей. Кроме того, в случае проведения реорганизации, 
                      ООО «СТП-Лаб» вправе передать любые персональные данные пользователей реорганизованному лицу.
                    </li>
                  </ul>
                </li>
                <p className="menu-content__title" id="link-6">
                  6. Информационная безопасность
                </p>
                Для обеспечения безопасности персональных данных и конфиденциальной информации ООО «СТП-Лаб» использует 
                современные методы информационной безопасности, включая шифрование данных при передаче и использовании их в сети 
                Интернет с помощью протоколов SSL.
                <br />
                <br /> 
                В целях защиты от несанкционированного доступа к охраняемой информации, Компания осуществляет физическую защиту 
                собранной, хранящейся и обрабатываемой информации.
                <br />
                <br /> 
                Мы ограничиваем доступ к персональным данным сотрудников, подрядчиков и агентов ООО «СТП-Лаб», которым указанная 
                информация необходима для осуществления профессиональной деятельности и которые подписали обязательства о 
                неразглашении конфиденциальной информации.
                <p className="menu-content__title" id="link-7">
                  7. Дети
                </p>
                Мы осознаем важность принятия дополнительных мер предосторожности для безопасности и конфиденциальности детей, 
                использующих Сайт. Соответственно, Компания не собирает, не использует и не раскрывает персональные данные лиц, 
                не достигших 16 лет без согласия родителей. Если Компании станет известно о наличии на сайте персональных данных 
                несовершеннолетних детей, размещенных без согласия родителей, Компания обязуется принять все меры по исключению 
                данной информации в кратчайшие сроки.
                <br />
                <br />  
                Разрешение родителей на использование данного Сайта необходимо всем лицам, не достигшим возраста совершеннолетия.
                <p className="menu-content__title" id="link-8">
                  8. Сторонние сайты и услуги
                </p>
                На Сайте могут содержаться ссылки на сторонние ресурсы. Настоящая Политика конфиденциальности, а также 
                {' '} 
                {' '}
                <a href="/policy-useragreement" className="link_five">Пользовательское соглашение</a>
                {' '}
                и иные Правила, 
                размещенные на Сайте, не обеспечивают работу таких сторонних ресурсов. 
                Внимательно ознакомьтесь с Пользовательским соглашением, Политикой конфиденциальности и Правилами, размещенными 
                на сторонних ресурсах.
                <p className="menu-content__title" id="link-9">
                  9. Соответствие законодательству
                </p>
                Компания регулярно пересматривает соответствие Политики конфиденциальности действующему законодательству. Мы также 
                придерживаемся собственных локальных актов. При получении замечания или претензии, Компания в обязательном порядке 
                связывается с их отправителем. Компания напрямую сотрудничает с органами государственной власти, органы на местах, 
                чтобы оперативно разрешать любые возникающие споры.
                <p className="menu-content__title" id="link-10">
                  10. Изменения
                </p>
                Данная Политика конфиденциальности может быть изменена с течением времени. Без Вашего личного согласия, Компания 
                не вправе уменьшить объем Ваших прав в связи с производимыми изменениями. Любые изменения Политики конфиденциальности 
                будут доступны просмотру на данной странице, а в случае, если изменения носят особо значимый характер, мы уведомим о 
                них лично (в том числе с помощью рассылки по электронной почте).
                <p className="menu-content__title" id="link-11">
                  11. Контактная информация
                </p>
                Если у Вас есть какие либо вопросы, замечания или комментарии относительно Политики конфиденциальности, свяжитесь с нами: 
                через формы обратной связи Сайта; по телефону
              </ol>
              <br />
            </div>
            Дата публикации 20.10.2019 
            {' '}
            <br />
            © 2020 ООО “СТП-Лаб”
            <hr />
          </div>
          <br />
        </GridRow>
      </div>
    </div>
  );
}