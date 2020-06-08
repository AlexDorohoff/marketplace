﻿import React from 'react';
import GridRow from 'arui-feather/grid-row';
import '../../../../../theme/styles/settings.scss';

export default function MainSections() {
  return (
    <div className="">
      <div className="">
        <h2 className="text-center">Арбитражные правила (Политика разрешения споров)</h2>
        <GridRow>
          <div>
            <hr />
            <div className="menu-content__text">
              <ol className="wsnumber4">
                <li>
                  В настоящем документе и вытекающих или связанных с ним отношениях Сторон применяются следующие термины и определения:
                  <br />
                  <br />
                  <em><b>Пользователь</b></em>
                  {' '}
                  – дееспособное физическое лицо, присоединившееся к Пользовательскому Соглашению в собственном интересе либо выступающее от имени и в интересах представляемого им юридического лица.
                  <br />
                  <br />
                  <em><b>Исполнитель</b></em>
                  {' '}
                  – Пользователь, прошедший регистрацию и верификацию в Системе, имеющий свою личную страницу (Профиль/аккаунт) на Сайте и намеренный использовать либо использующий Систему в целях оказания услуг образовательного характера на возмездной основе;
                  <br />
                  <br />
                  <em><b>Заказчик</b></em>
                  {' '}
                  – Пользователь, прошедший процедуру регистрациив Системе, имеющий свою личную страницу (Профиль/аккаунт) на Сайте и намеренный использовать или использующий Систему в целях получения услуг образовательного характера.
                  <br />
                  <br />
                  <em><b>Сайт</b></em>
                  {' '}
                  – автоматизированная информационная система, доступная в сети Интернет, обеспечивающая работу Системы и доступ Пользователя к ней.
                  <br />
                  <br /> 
                  <em><b>Система</b></em>
                  {' '}
                  - программы для ЭВМ и/или базы данных, в том числе Сайт, предназначенные для предоставления доступа к Сервису с использованием Устройства в информационных целях.
                  <br />
                  <br />
                  <em><b>Устройство</b></em>
                  {' '}
                  – персональный компьютер, планшет, мобильный телефон, коммуникатор, смартфон, иное устройство, позволяющее использовать Систему и/или Сервис по их функциональному назначению.
                  <br />
                  <br />
                  <em><b>Сервис</b></em>
                  {' '}
                  – комплекс услуг, предоставляемых Пользователю при использовании Системы.
                  <br />
                  <br />
                  <em><b>Контент</b></em>
                  {' '}
                  – изображения, текстовые, аудио- и видеоматериалы, а также прочие объекты авторских и (или) смежных прав, а равно не являющиеся таковыми информация и сообщения любого характера.
                  <br />
                  <br />
                  <em><b>Личный кабинет</b></em>
                  {' '}
                  – персональный раздел Системы, к которому Пользователь получает доступ после прохождения  регистрации и/или авторизации, регистрации и/или верификации в Системе. Личный кабинет предназначен для хранения персональных данных Пользователя, просмотра и управления доступными функциональными возможностями Системы и соответствующими условиями использования Системы.
                  <br />
                  <br />
                  <em><b>Положение о тарифах</b></em>
                  {' '}
                  – Приложение № 1 к Пользовательскому Соглашению, являющееся неотъемлемой частью Соглашения и определяющее размеры комиссионного вознаграждения, получаемого ООО «АААААААА» при использовании Системы в рамках раздела 7 Пользовательского Соглашения.
                  <br />
                  <br />
                  <em><b>Регистрация Пользователя</b></em>
                  {' '}
                  – процесс создания учетной записи Пользователя в Системе в целях получения доступа к ее функциональным возможностям
                  <br />
                  <br />
                  <em><b>Авторизация Пользователя</b></em>
                  {' '}
                  – процедура идентификации Пользователя для предоставления доступа к функциональным возможностям Системы.
                  <br />
                  <br />
                  <em><b>Верификация Пользователя</b></em>
                  {' '}
                  – совокупность технических средств Системы, направленных на подтверждение данных учетной записи Пользователя.
                  <br />
                  <br /> 
                  <em><b>Администрация Системы</b></em>
                  {' '}
                  – лица, уполномоченные ООО «АААААААА» на осуществление управления Системой и другие действия, связанные с использованием Системы. Администрация Системы действует от имени ООО «АААААААА», кроме отдельно оговоренных случаев.
                  <br />
                  <br />
                  <em><b>Оператор</b></em>
                  {' '}
                  – лицо, уполномоченное от имени ООО «АААААААА» осуществлять действия по формированию заявок на рассмотрение и разрешение споров в соответствии с положениями настоящих Арбитражных правил.
                  <br />
                  <br />
                  <em><b>Профиль Пользователя</b></em>
                  {' '}
                  - это специально отведённое место на сайте Системы, в котором отображаются данные Пользователя.
                  <br />
                  <br />
                  <em><b>Заявитель</b></em>
                  {' '}
                  – лицо, направляющее заявку для рассмотрения спора, указанного в п. 3.3настоящих Арбитражных Правил, в соответствии с положениями настоящих Правил.
                  <br />
                  <br />
                </li>
                <li>
                  В настоящих Арбитражных Правилах (Правилах) могут быть использованы иные термины и определения, не указанные в п. 1 Правил. В этом 
                  случае толкование такого термина производится в соответствии с текстом Правил. В случае отсутствия однозначного толкования термина 
                  или определения в тексте Правил и иных документов, следует руководствоваться его толкованием, определенным: в первую очередь – 
                  законодательством Российской Федерации, и в последующем – обычаями делового оборота и научной доктриной.
                  <br />
                  <br />
                </li>
                <li>
                  Настоящие Арбитражные Правила являются неотъемлемой частью Пользовательского соглашения, заключенного между ООО «АААААААА» и 
                  Пользователем на условиях, размещенных в сети Интернет, и доступных на Сайте Системы. Арбитражные правила определяют права и 
                  обязанности ООО «АААААААА», Пользователей и третьих лиц  в случае возникновения споров, прямо или косвенно связанных с использованием 
                  Системы, регулируют порядок рассмотрения и разрешения данных споров. Принятие Пользователем условий Пользовательского соглашения 
                  означает полное и безоговорочное принятие Пользователем условий настоящих Правил.
                  <br />
                  <br />
                  <ol>
                    <li>
                      Принимая условия Пользовательского Соглашения, настоящих Арбитражных Правил, Пользователь соглашается, что любые споры и 
                      разногласия, возникающие в связи с использованием Системы, подлежат рассмотрению и разрешению посредством использования 
                      технических средств, ресурсов, предоставляемых Администрацией Системы, и в порядке, предусмотренном настоящими Арбитражными 
                      Правилами.
                      {' '}
                      <b>
                        Возможность использования технических средств и ресурсов в целях рассмотрения и разрешения споров, предусмотренных п 3.3. 
                        Настоящих Правил, предоставляется только лицам, получившим статус Пользователя в порядке, предусмотренном Пользовательским 
                        Соглашением.
                      </b>
                      <br />
                    </li>
                    <li>
                      Настоящие Арбитражные Правила не лишают Пользователя права на разрешение споров, возникающих в связи с использованием Системы, 
                      путем переговоров, медиации, в судебном порядке и/или иным образом. В случае рассмотрения и разрешения указанных споров в 
                      порядке, предусмотренном п. 3.2 Арбитражных Правил, ООО «АААААААА» не несет ответственность за результаты рассмотрения и 
                      разрешения данных споров.
                      <br />
                    </li>
                    <li>
                      Споры, указанные в п. 3.1 настоящих Арбитражных правил включают в себя: споры, связанные с ненадлежащим оказанием Исполнителями
                      услуг, предусмотренныхразделом 7 Пользовательского Соглашения, споры, связанные с нарушением прав Пользователейи/или третьих 
                      лиц, споры, связанные с размещением Пользователями Контента, не соответствующего требованиям законодательства РФ, условиям 
                      Пользовательского Соглашения (Спорного Контента).
                      <br />
                    </li>
                  </ol>
                </li>
                <li>
                  Спор, указанный в п. 3.3 настоящих Арбитражных правил, может быть инициирован Пользователем посредством направления телефонограммы в 
                  соответствии с номером телефона, указанном на Сайте Системы, посредством оставления заявки по форме, размещенной на Сайте Системы, 
                  направления соответствующего заявления на адрес электронной почты Системы, размещенный на Сайте Системы, направления заявления в 
                  письменной форме по юридическому адресу ООО «АААААААА» 
                  {' '}
                  {' '}
                  <b>(для использования средств Системы для рассмотрения и разрешения споров третьим лицам необходимо получить статус Пользователя, исходя из п. 3.1 Арбитражных Правил).</b>
                  <ol>
                    <li>
                      В случае инициирования спора путем направления телефонограммы в соответствии с п. 4 настоящих Арбитражных Правил Заявитель 
                      обязуется предоставить Оператору свои учетные данные в целях идентификации Пользователя. После прохождения Пользователем 
                      процедуры идентификации Оператор на основании данных, предоставленных Пользователем, формирует заявку. После формирования 
                      заявки на адрес электронной почты Пользователя, предоставленный Пользователем при прохождении процедуры регистрации в Системе, 
                      направляется уведомление о принятии заявки к рассмотрению. Заявка подлежит рассмотрению в течение 5 рабочих дней с момента 
                      направления уведомления о принятии заявки к рассмотрению.
                      <br />
                    </li>
                    <li>
                      Пользователь вправе оставить заявку, заполнив ее по форме, размещенной в Системе. При этом максимальное количество знаков при 
                      заполнении заявки составляет750 знаков. После подтверждения Пользователем формирования заявки на адрес электронной почты 
                      Пользователя, предоставленный Пользователем при прохождении процедуры регистрации в Системе, направляется уведомление о 
                      принятии заявки к рассмотрению. Заявка подлежит рассмотрению в течение 5 рабочих дней с момента направления уведомления о 
                      принятии заявки к рассмотрению.
                      <br />
                    </li>
                    <li>
                      Пользователь вправе оставить заявку путем направления ее на адрес электронной почты Системы, размещенный на Сайте Системы. 
                      При этом максимальное количество знаков в направленной заявке не должно быть более 750 знаков. После направления Пользователем 
                      заявки Пользователю Системой будет направлено сообщение с гиперссылкой для прохождения идентификации. В случае успешного 
                      прохождения Пользователем идентификации Пользователю на адрес электронной почты, предоставленный Пользователем при прохождении 
                      процедуры регистрации в Системе, будет направлено уведомление о принятии заявки к рассмотрению. Заявка подлежит рассмотрению в 
                      течение 5 рабочих дней с момента направления уведомления о принятии заявки к рассмотрению.
                      <br />
                    </li>
                    <li>
                      Пользователь вправе оставить заявку посредством направления заявления по адресу местонахождения ООО «АААААААА». В заявлении 
                      должны быть обязательно указаны данные, позволяющие установить личность Пользователя, а также его контактные данные 
                      (номер телефона, почтовый адрес, адрес электронной почты). После получения ООО «АААААААА» заявления Оператор звонит 
                      Пользователю по номеру телефона, указанному в заявлении. Пользователь обязуется предоставить Оператору учетные данные в целях 
                      идентификации Пользователя. После прохождения Пользователем процедуры идентификации Оператор на основании данных, 
                      предоставленных Пользователем, формирует заявку. После формирования заявки на адрес электронной почты Пользователя, 
                      предоставленный Пользователем при прохождении процедуры регистрации в Системе, направляется уведомление о принятии заявки к 
                      рассмотрению. Заявка подлежит рассмотрению в течение 5 рабочих дней с момента направления уведомления о принятии заявки к 
                      рассмотрению.
                      <br />
                    </li>
                  </ol>
                </li>
                <li>
                  Во всех случаях, указанных в п.п. 4.1 – 4.4Правил заявка может быть принята к рассмотрению, если она соответствует всем 
                  требованиям, указанным в п. 5.1.1 – 5.1.6 настоящих Арбитражных правил. В случае оставления Пользователем Заявки, не 
                  соответствующей одному или нескольким требованиям, указанным в пунктах 5.1.1 – 5.1.6 настоящих Арбитражных Правил, 
                  Администрация Системы не позднее двух рабочих дней с момента получения заявки направляет Заявителю уведомление об отказе в 
                  рассмотрении заявки с указанием причины (указанием соответствующего пункта Арбитражных правил). Получение такого уведомления 
                  не лишает Заявителя возможности повторно обратиться к Администрации Системы с приемлемой и обоснованной заявкой.
                  <br />
                  <li>
                    <ol>
                      <li>
                        Заявка является приемлемой при соблюдении всех следующих условий:
                        <br />
                      </li>
                      <ol>
                        <li>
                          Заявка направлена в соответствии с требованиями п. 4.1 – 4.4 настоящих Арбитражных Правил. При этом заявка должна 
                          обязательно быть составлена на русском языке.
                        </li>
                        <li>
                          Заявка позволяет установить личность Заявителя.Администрация Системы не рассматривает анонимные заявки либо заявки, 
                          не позволяющие с точностью идентифицировать Заявителя.
                        </li>
                        <li>
                          Заявка позволяет Администрации Системы связаться с Заявителем.В случае направления заявки в соответствии с п. 4.4 
                          Арбитражных Правил Заявитель обязан указать в заявке следующие контактные данные: ФИО Заявителя, логин Пользователя, 
                          зарегистрированный в Системе,номер телефона Заявителя, адрес электронной почты Заявителя, почтовый адрес Заявителя.
                        </li>
                        <li>
                          В случае направления заявки в соответствии с п. 4.3 настоящих Правил Сервис гарантирует получение заявки только в 
                          случае отправления электронного письма поадресу электронной почты Системы, размещенной на сайте Системы, с указанием 
                          в теме письма слова «Заявка». В случае направления заявки с использованием электронной почты Заявитель выражает 
                          согласие на ведение дальнейшей переписки с Сервисом в электронном виде по адресу электронной почты, указанному в заявке.
                        </li>
                        <li>
                          Заявитель не злоупотребляет правом на направление заявки. Заявитель считается злоупотребляющим правом на 
                          направление заявки в случае:
                          <ol>
                            <ul>
                              <li>
                                Повторного предъявления претензий против одного и того же Пользователя в отношении одного 
                                Спорного Контента, если после предъявления первой претензии Заявитель отказался от нее, либо признал 
                                встречную претензию, либо не обратился за судебной или административной защитой.
                              </li>
                              <li>
                                Предъявления Администрации Системы недостоверных, неполных или утративших силу документовили сведений.
                              </li>
                              <li>
                                Использования заявки в качестве метода недобросовестной конкуренции.
                              </li>
                            </ul>
                          </ol>
                        </li>
                        <li>
                          Заявка позволяет установить сущность спора. Заявителем в заявке должны быть изложены обстоятельства спора, в 
                          чем, по мнению Заявителя, нарушаются его права. Заявителем обязательно должен быть указан URL-адрес страницы 
                          лица, допустившего, по мнению Заявителя, его нарушения прав либо URL-адрес страницы, на которой размещен 
                          спорный контенти сохраненную электронную копию материалов (скрин экрана), с указанием даты и времени 
                          копирования.
                        </li>
                      </ol>
                    </ol>
                  </li>
                  <li>
                    <br />
                  </li>
                </li>
                <li>
                  Порядок рассмотрения заявок и вынесения решения по результатам их рассмотрения определяется настоящими Правилами.
                  <br />
                  <li>
                    <ol>
                      <li>
                        ООО «АААААААА» определяет лиц, ответственных за рассмотрение заявок Заявителей.
                        <br />
                      </li>
                      <li>
                        Каждая получаемая Администрацией Системы заявка регистрируется и передается на рассмотрение ответственному лицу. 
                        Ответственное лицо проверяет заявку на ее соответствие настоящим Арбитражным Правилам в течение 5 (пяти) рабочих 
                        дней с момента получения Заявки. По окончании проверки ответственное лицо обязано принять одно из следующих решений:
                        <br />
                      </li>
                      <ol>
                        <li>
                          <em>Об отказе в рассмотрении заявки</em>
                          . Решение принимается в случае, если полученная претензия не отвечает 
                          требованиям, указанным в пунктах 5.1.1 – 5.1.6Арбитражных Правил
                        </li>
                        <li>
                          <em>Об отсутствии нарушения</em>
                          .
                          Решение принимается в случае, если по указанному Заявителем URL-адресу не обнаружен спорный контент либо к 
                          указанному Заявителем URL-адресу невозможно получить доступ, либо по указанному Заявителем URL-адресу 
                          невозможно определить лицо, по мнению Заявителя, допустившее нарушение прав Заявителя.
                        </li>
                        <li>
                          <em>О принятии мер по прекращению нарушения</em>
                          .
                          Решение принимается в случае, если заявка соответствует требованиям, указанным в п. 5.1.1 – 5.1.6настоящих 
                          правил, Сервисом выявлено нарушение.
                          <br />
                          В зависимости от вида нарушения и требований Заявителя Администрация Системы по своему усмотрению вправе 
                          предпринять все, несколько или одну из указанных мер, направленных на прекращение нарушения законодательства 
                          Российской Федерации:
                          <ol>
                            <ul>
                              <li>
                                <b>6.2.3.1</b>
                                {' '}
                                {' '}
                                В случае получения Администрацией Системы от Заявителя приемлемой и обоснованной заявки о ненадлежащем 
                                оказании услуг, предусмотренных разделом 7 Пользовательского Соглашения, со стороны Исполнителя, при 
                                условии, что Заявителем Администрации Системы была направлена заявка способами, предусмотренными 
                                п. 4.1 – 4.3 настоящих Арбитражных Правил, не позднее одного рабочего дня с момента ненадлежащего 
                                оказания услуг Исполнителем, Администрация Системыблокирует перечисление денежных средств Исполнителю, 
                                предусмотренных п. 7.2.5 Пользовательского Соглашения, до вынесения соответствующего решения. В случае 
                                принятия решения в пользу Заявителя, Администрация Системы возвращает соответствующую сумму в пользу 
                                Заявителя. В случае принятия решения в пользу Исполнителя, Администрация Системы перечисляет ему 
                                данную сумму в соответствии с условиями п. 7.2.5 Пользовательского Соглашения.
                              </li>
                              <li>
                                <b>6.2.3.2</b>
                                {' '}
                                <em>Блокирование Спорного Контента.</em>
                                {' '}
                                Блокирование представляет собой ограничение доступа любых лиц к Спорному Контенту по указанному Заявителем URL-адресу
                              </li>
                              <li>
                                <b>6.2.3.3</b>
                                {' '}
                                <em>Удаление Спорного Контента.</em>
                                {' '}
                                Блокирование учетной записи представляет собой временное приостановление доступа Пользователя к Сайту.
                              </li>
                              <li>
                                <b>6.2.3.4</b>
                                {' '}
                                <em>Блокирование учетной записи Пользователя, разместившего Спорный Контент.</em>
                                {' '}
                                Удаление представляет собой окончательное изъятие Спорного Контента с указанного Заявителем URL-адреса.
                              </li>
                              <li>
                                <b>6.2.3.5</b>
                                {' '}
                                <em>Удаление учетной записи Пользователя, разместившего Спорный Контент.</em>
                                {' '}
                                Удаление учетной записи представляет собой окончательное изъятие учетных данных Пользователя из Системы.
                              </li>
                            </ul>
                          </ol>
                        </li>
                      </ol>
                      <li>
                        Ответственное лицо направляет  Заявителю  решение, принятое по результатам рассмотрения заявки, в течение 1 
                        (одного) рабочего дня с момента принятия такого решения. В случае принятия ответственным лицом решения, 
                        указанного в пункте 5.2.3 Регламента, Администрация Системы в течение 3 (трех) рабочих дней с момента принятия 
                        такого решения принимает одну или несколько мер, предусмотренных п. 6.2.3.1 – 6.2.3.5 настоящих Арбитражных Правил.
                      </li>
                      <li>
                        В случае принятия ответственным лицом решения о принятии мер, предусмотренных п. 6.2.3.1 – 6.2.3.5 Правил, 
                        в отношении Спорного Контента или Пользователя либо снятии таких мер, то Администрация Системы направляет 
                        сообщение  о таком решении Заявителю, а также Пользователю в течение 2 (двух) рабочих  дней с момента принятия 
                        такого решения.
                      </li>
                      <li>
                        Пользователь, в отношение которого приняты меры, предусмотренные п. 6.2.3.1 – 6.2.3.5 Правил, вправе оспорить решение 
                        Администрации Системы, направив Администрации Системы в течение 10 (десяти) календарных дней с момента получения 
                        уведомления, предусмотренного п. 6.4 Правил, встречную заявку. 
                      </li>
                      <li>
                        Все положения настоящих Арбитражных Правил, относящиеся к рассмотрению заявок, распространяются на встречные заявки, 
                        если Правилами прямо не установлено иных положений. Встречная заявка должна отвечать требованиям приемлемости заявки, при 
                        этом дополнительным требованием для признания встречной заявки приемлемой является указание во встречной заявке на Заявителя 
                        первоначальной заявки и номер первоначальной заявки. 
                      </li>
                      <li>
                        В случае, если встречная заявка отвечает требованиям приемлемости и обоснованности, Администрация Системынаправляет заявку 
                        Пользователю, разместившему Спорный Контент, а встречную заявку – Заявителю первоначальной заявки. При этом Заявитель и 
                        Пользователь могут совершить следующие действия:
                        <ol>
                          <li>
                            Заявитель либо Пользователь могут отозвать заявку/встречную заявку;
                          </li>
                          <li>
                            Заявитель либо Пользователь могут признать встречную заявку/заявку;
                          </li>
                          <li>
                            Стороны могут заключить мировое соглашение.
                          </li>
                        </ol>
                      </li>
                      <li>
                        В случае отзыва встречной заявки Пользователем либо признания заявкиПервоначального Заявителя, Администрация Системы 
                        продолжает применение мер, предусмотренных п. п. 6.2.3.1 – 6.2.3.5 Правил.
                      </li>
                      <li>
                        В случае отзыва заявки Первоначальным Заявителем либо признания встречной заявки Первоначальным Заявителем Администрация 
                        Системы прекращает применение мер, предусмотренных п. 6.2.3.1 – 6.2.3.5, за исключением случаев, когда применение таких мер 
                        необходимо в целях защиты прав и интересов третьих лиц.
                      </li>
                    </ol>
                  </li>
                  <li>
                    <br />
                  </li>
                </li>
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