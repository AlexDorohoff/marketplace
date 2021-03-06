﻿import React from 'react';
import GridRow from 'arui-feather/grid-row';
import '../../../../../theme/styles/settings.scss';

export default function MainSections() {
  return (
    <div className="">
      <div className="">
        <h2 className="text-center">Условия использования API</h2>
        <GridRow>
          <div>
            Публичный API Liga of Experts позволяет разработчикам подключаться к нашему 
            сообществу и создавать свои собственные приложения на базе Лиги Экспертов. 
            Эти условия объясняют ваши права и обязанности при использовании API Liga of Experts.
            <br /> 
            Это соглашение («Условия  использования API») между пользователем и ООО «Лига Визуалов» 
            (именуемое  в дальнейшем «Лига Экспертов») распространяется на использование 
            пользователем общедоступного интерфейса приложений Лиги Экспертов («API»), 
            отдельно или в сочетании с сайтом, приложением и / или любыми другими услугами, 
            предоставляемыми Лигой Экспертов в соответствии с Правилами использования  Лиги Экспертов
            («Правила Лиги Экспертов») и Политикой конфиденциальности. Используя API, вы 
            соглашаетесь с этими Условиями API, Политикой конфиденциальности и Правилами 
            использования Лиги Экспертов (именуемыми в дальнейшем «Правила»). Настоящие 
            Условия API также включают в себя Политику в области интеллектуальной собственности 
            Лиги Экспертов. 
            <br /> 
            Права интеллектуальной собственности на API Liga of Experts принадлежат Лиге 
            Экспертов, в то время как собственным контентом владеют пользователи API Liga of Experts.
            <hr />
            <ol>
              <li>
                <a href="#link-1" className="link_five">
                  1. Ваша ограниченная лицензия на использование API Лиги Экспертов.
                </a>
              </li>
              <li>
                <a href="#link-2" className="link_five">
                  2. Соглашение API и принятие изменений
                </a>
              </li>
              <li>
                <a href="#link-3" className="link_five">
                  3. Ваша конфиденциальность, интеллектуальная собственность и обязательства по безопасности
                </a>
              </li>
              <li>
                <a href="#link-4" className="link_five">
                  4. Использование API
                </a>
              </li>
              <li>
                <a href="#link-5" className="link_five">
                  5. Коммерческое использование
                </a>
              </li>
              <li>
                <a href="#link-6" className="link_five">
                  6. Торговые марки Лиги Экспертов
                </a>
              </li>
              <li>
                <a href="#link-7" className="link_five">
                  7. Возмещение ущерба Лиге Экспертов
                </a>
              </li>
            </ol>
            <hr />
            <div className="menu-content__text">
              <p className="menu-content__title" id="link-1">
                1. Пользование Лигой Экспертов
              </p>
              Лига Экспертов предоставляет ограниченную личную, не подлежащую сублицензированию, 
              не подлежащую передаче, неисключительную, отзывную лицензию для доступа и 
              использования нашего API для создания и запуска веб-сайтов и приложений, соответствующих 
              нашим политикам.
              <br /> 
              В Политиках подробно описывается использование персональной информации в Лиге Экспертов. 
              Пользуясь наши Услугами, вы также соглашаетесь с тем, что мы можем обрабатывать вашу 
              информацию способами, изложенными в наших Политиках. Пожалуйста, прочитайте их.
              <br />
              Лига Экспертов оставляет за собой право:
              <ol>
                <ul className="menu-content__ps">
                  <li>
                    лишать доступа к API  за нарушения данного Условия в частности и наших Политик в целом;
                  </li>
                  <li>
                    лишать или приостанавливать привилегий вашей учетной записи, включая все связанные 
                    с вами другие учетные записи;
                  </li>                
                  <li>
                    свзимать плату за доступ или использование API в будущем; 
                  </li>
                  <li>
                    при использовании, в рамках заключенных соглашений, сторонних API, условия их использования 
                    дополняют данные Условия использования API.
                  </li>
                </ul>
              </ol>
              <p className="menu-content__title" id="link-2">
                2. Соглашение API и принятие изменений
              </p>
              Принимая, а значит подписывая наши Условия использования API вы обязуетесь:
              <ol>
                <ul className="menu-content__ps">
                  <li>
                    предоставлять точные регистрационные данные;
                  </li>
                  <li>
                    обновлять свою регистрационную информацию, связываясь с нами
                    {' '} 
                    <a href="" className="link_five">developer@lvisual.com</a>
                    ;
                  </li>                
                  <li>
                    соблюдать требования Лиги Экспертов к безопасности доступа. Например, где это возможно 
                    применять двухфакторную проверку подлинности; 
                  </li>
                  <li>
                    нести ответственность за информирование Лиги Экспертов о любых изменениях в ваших регистрационных данных.
                  </li>
                </ul>
              </ol>
              Если информация вашего аккаунта будет неполной, устаревшей или неточной администрация 
              Лиги Экспертов может связаться с вами и оставляет за собой право приостановить или прекратить 
              ваш доступ к API, если не будет предоставлена точная и полная контактная информация. Помните, 
              что ваш API и безопасность аккаунта - ваша ответственность.
              <br />
              Лига Экспертов оставляет за собой право изменять настоящие Условия API в любое время. 
              Если мы считаем, что изменения существенны, мы отправим электронное письмо на адрес, 
              связанный с вашей учетной записью, или отправим вам сообщение через Liga of Experts Messages. 
              Вы соглашаетесь получать эти не рекламные, не маркетинговые сообщения, и вы несете 
              ответственность за внесение этих изменений в свои продукты.
              <br /> 
              Продолжение использования API - безусловное принятие обновленных Условий использования API. 
              В течении 30 дней  с момента отправления уведомления о существенных изменениях в API и 
              других политиках Лиги Экспертов вы обязаны принять данные изменения, связавшись с нами 
              {' '} 
              {' '}
              <a href="" className="link_five">developer@lvisual.com</a>
              ;, в противном случае  ваш 
              доступ к API может быть приостановлен или 
              прекращен. Для всех остальных обновлений продолжение использования API через 30 дней после 
              того, как мы уведомим вас об обновлении, будет означать ваше согласие с обновленными Условиями API.
              <p className="menu-content__title" id="link-3">
                3. Ваша конфиденциальность, интеллектуальная собственность и обязательства по безопасности
              </p>
              Используя наш API Liga of Experts, вы можете взаимодействовать с контентом и личной 
              информацией пользователей Лиги Экспертов. Помните, Лига Экспертов не владеет 
              пользовательским контентом.
              <br />
              Ваши сайты, приложения и иные ресурсы использующие API Liga of Experts являются полностью 
              вашей ответственностью и вы берете на себя обязательства  по защите личной информации 
              пользователей Лиги Экспертов. Это означает, что вы должны:  
              <ol>
                <ul className="menu-content__ps">
                  <li>
                    соблюдать все применимые законы РФ, включая интеллектуальную собственность, конфиденциальность, 
                    защиту персональных данных и иные законы.
                  </li>
                  <li>
                    обновлять свою регистрационную информацию, связываясь с нами
                    {' '} 
                    <a href="" className="link_five">developer@lvisual.com</a>
                    ;
                  </li>                
                  <li>
                    соблюдать все политики Лиги Экспертов, в том числе и
                    {' '} 
                    <a href="/privacy-policy" className="link_five">Политику конфиденциальности</a>
                    ,
                    {' '} 
                    <a href="/NotFound" className="link_five"> Соглашение о защите персональных данных</a>
                    ,
                    {' '} 
                    <a href="/NotFound" className="link_five"> Политику в области интеллектуальной собственности</a>
                    .
                  </li>
                  <li>
                    нести ответственность за информирование Лиги Экспертов о любых изменениях в ваших регистрационных данных.
                  </li>
                </ul>
              </ol>
              Вы соглашаетесь с тем, что Лига Экспертов и ее аффилированные лица не несут ответственности и 
              не контролируют контент, который вы и пользователи вашего приложения или ресурсов загружаете 
              или передаете через API Liga of Experts.
              <br />
              Вы обязаны предоставить нашим пользователям условия обслуживания и политику конфиденциальности 
              в своем приложении или ресурсе, которые должны быть четко обозначены и соответствовать всем 
              соответствующим требованиям законодательства и не нарушать Политик Лиги Экспертов.
              <br /> 
              Вы являетесь отдельным, независимым, не связанным с Лигой Экспертов объектом законодательства РФ.
              <br />
              При не соблюдении данных Условий ваш доступ к API может быть приостановлен или прекращен.
              <p className="menu-content__title" id="link-4">
                4. Использование API
              </p>
              Лига Экспертов оставляет за собой право отказать в обслуживании или доступе к API в 
              любое время и по любой причине.  Если приложение, контент или обработка данных не 
              соответствуют Политикам Лиги Экспертов учетная запись может быть удалена, временно 
              заблокирована,  приостановлен допуск к API или ко всем связанным с вами аккаунтам.
              <br />
              Получив доступ к содержанию контента  размещенного в Лиге Экспертов при использовании 
              API учитывайте быстрое его обновление. Это накладывает ограничения на временное отображение 
              информации в партнерских продуктах. Публиковаться  не могут:  
              <ol>
                <ul className="menu-content__ps">
                  <li>
                    списки старше 6  часов с момента их первого отображения;
                  </li>
                  <li>
                    любой другой контент Лиги Экспертов старше 24 часов, чем контент, отображаемый на самом ресурсе.
                  </li>
                </ul>
              </ol>
              После того как вы получили доступ, сохранили или отобразили контент Лиги Экспертов, вы не 
              будете кэшировать или хранить его дольше, чем это необходимо для предоставления услуг пользователям 
              вашего приложения. Вы несете полную ответственность за использование API, в том числе осуществляя 
              техническую поддержку, обратную связь с пользователями посредством средств электронных коммуникаций, 
              обязательно указываемых в ваших приложениях.
              <br />
              Используя API Liga of Experts  пользователь не может :
              <ol>
                <ul className="menu-content__ps">
                  <li>
                    Пробовать скопировать Лигу Экспертов, скопировать содержимое Лиги Экспертов или обойти обязательные 
                    наши процедуры.
                  </li>
                  <li>
                    Пытаться обойти любые функции безопасности или технические ограничения API.
                  </li>
                  <li>
                    Причинять вред Лиге Экспертов и нарушать наше взаимодействие с пользователем, например, изменяя 
                    внешний вид, содержание сайта, приложений или служб; распространение вирусов; или других 
                    вредоносных продуктов. 
                  </li>
                  <li>
                    Продавать, сдавать в аренду или иным образом передавать наш API или данные пользователя 
                    любому третьему лицу
                  </li>
                  <li>
                    Модифицировать API любым способом
                  </li>
                  <li>
                    Загружать, публиковать, собирать или хранить комбинации идентификаторов пользователей и паролей.
                  </li>
                  <li>
                    Передавать спам, нежелательные маркетинговые сообщения или любой другой контент, который 
                    нарушает политику Лиги Экспертов.
                  </li>
                  <li>
                    Использовать API или данные пользователей Лиги Экспертов в сторонней рекламной или 
                    маркетинговой платформе.
                  </li>
                  <li>
                    Использовать API для сбора, сканирования или иного запроса контента Лиги Экспертов для 
                    аналитики, машинного обучения, удаления контента и прочих действий, если они явно не 
                    разрешены нами.
                  </li>
                  <li>
                    Не отражать или искажать свои связи с Лигой экспертов и использование API Liga of Experts
                  </li>
                  <li>
                    Использовать API таким способом, который представляет угрозу защите данных ресурса, его 
                    функционированию или  безопасности Лиги Экспертов и ее пользователей.
                  </li>
                  <li>
                    Объединить программный код вашего приложения или веб-сайта с API Liga of Experts таким 
                    образом (например, используя лицензию на программное обеспечение), который несовместим с 
                    этими Условиями и общими Политиками Лиги Экспертов.
                  </li>
                  <li>
                    Загружать, публиковать, собирать, хранить, делиться, передавать или обрабатывать личную 
                    информацию или данные о членах Лиги Экспертов без специального и утвердительного разрешения с 
                    соответствующим уведомлением самого пользователя  и только в той степени, в которой это согласуется 
                    с вашими условиями обслуживания и нашей политикой конфиденциальности и Условия 
                    использования API Liga of Experts.
                  </li>
                  <li>
                    Превышение разумного объема запроса или разумного количества ключей API. По умолчанию 
                    назначается определенное количество вызовов в день ( Документация API Liga of Experts). 
                    По запросу Лига Экспертов может предоставить вам более высокие лимиты вызовов или дополнительно 
                    ограничить ваши вызовы API по нашему усмотрению. Вы не можете создавать дополнительные ключи 
                    API для преодоления этих ограничений.
                  </li>
                </ul>
              </ol>
              <p className="menu-content__title" id="link-5">
                5. Коммерческое использование
              </p>
              Лига Экспертов разрешает  коммерческое использование API, которое включает в себя:  
              <ol>
                <ul className="menu-content__ps">
                  <li>
                    Взимание с пользователей оплаты в тех частях вашего приложения, которые не интегрируются 
                    с нашим API.  Это могут консультации или участие в продаже ваших собственных продуктов 
                    или услуг, не конкурирующих с Лигой Экспертов. 
                  </li>
                  <li>
                    Отображение рекламы в вашем приложении не использующей или не собирающей информацию, 
                    связанную с данными пользователей, полученными через API и удовлетворяющей нашим Политикам. 
                  </li>
                  <li>
                    Любое использование, которое явно разрешено Лигой Экспертов. 
                  </li>
                </ul>
              </ol>
              <br />
              Запрещенные коммерческие использования включают (но не ограничиваются ими):
              <ol>
                <ul className="menu-content__ps">
                  <li>
                    Продажа или предоставление доступа любой третьей стороне API, информации о пользователях 
                    Лиги Экспертов. 
                  </li>
                  <li>
                    Взимание оплаты за использование или доступ к любой части вашего приложения, 
                    которая интегрируется с API и которую Лига Экспертов предоставляет участникам бесплатно.
                  </li>
                  <li>
                    Использование API в первую очередь для привлечения трафика на сторонние Интернет ресурсы или услуги. 
                  </li>
                  <li>
                    Использование API для определения информации о внутренних возможностях платформы Лиги Экспертов или 
                    для проведения маркетинговой аналитики без нашего разрешения .
                  </li>
                  <li>
                    Использование API для получения информации, отслеживания или опроса пользователей Лиги 
                    Экспертов или их контента. 
                  </li>
                  <li>
                    Использование API любым способом, который нарушает
                    {' '} 
                    <a href="/anti-discrimination-policy" className="link_five">Антидискриминационную политику</a>
                    {' '}
                    {' '}
                    Лиги Экспертов.
                  </li>
                  <li>
                    Использование API таким образом, который нарушает
                    {' '}
                    <a href="/privacy-policy" className="link_five">Политику конфиденциальности </a>
                    {' '}
                    и
                    {' '}
                    <a href="/soglasie-na-obrabotku-dannyh-152-fz" className="link_five">Соглашение по обработке и защите персональных данных </a>
                    {' '}
                    принятых в Лиге Экспертов.
                  </li>
                  Если вы не уверены, разрешено ли ваше приложение для коммерческого использования свяжитесь с 
                  нами по адресу
                  {' '} 
                  {' '}
                  <a href="developer@lvisual.com" className="link_five">developer@lvisual.com</a>
                  {' '}
                  .
                </ul>
              </ol>
              <p className="menu-content__title" id="link-6">
                6. Торговые марки Лиги Экспертов
              </p>
              Вы соглашаетесь не использовать товарные знаки Лиги Экспертов, логотипы, цвета подписи, 
              макет, текст или другие материалы без одобрения со стороны Лиги Экспертов. Вы не можете 
              создавать или использовать знак, который до степени смешения похож на наши торговые марки.
              <br />
              При публикации своего приложения, использующего API Liga of Experts, вы должны придерживаться 
              следующих принципов:
              <ol>
                <ul className="menu-content__ps">
                  <li>
                    указать , что оно было создано с использованием API Liga of Experts. Уведомление 
                    пользователей вашего приложения должно содержать фразу:«Это приложение использует API Liga of Experts, 
                    но не одобрено и не сертифицировано Лигой Экспертов». 
                  </li>
                  <li>
                    упоминания Лиги Экспертов должны быть менее заметными, чем информация о вашем собственном ресурсе. 
                  </li>
                  <li>
                    обязательно разместить во всех информационных блоках о вашем приложении уведомление следующего 
                    содержания: Термин «Лига Визуалов»  является товарным знаком ООО «Лига Визуалов». API Liga of Experts 
                    - является собственностью ООО «Лига Визуалов» 
                  </li>
                </ul>
              </ol>
              <br />
              <p className="menu-content__title" id="link-7">
                7. Возмещение ущерба Лиге Экспертов
              </p>
              При использовании API Liga of Experts в ваших ресурсах и приложениях  вы ( и ваши правопреемники) 
              соглашаетесь не предъявлять претензии к Лиге Экспертов или ее пользователям и берете на себя все 
              претензии в отношении интеллектуальной собственности, нарушения данных, безопасности или защиты данных, 
              связанных с вашим ресурсом или приложением.
              <br />
              Кроме того вы берете на себя обязательства не советовать, не помогать и не участвовать в претензиях 
              третьих лиц против Лиги Экспертов и ее пользователей в отношении интеллектуальной собственности, 
              нарушения данных, безопасности или защиты данных, связанных  с использованием API Liga of Experts.
              <br />
              Эти Условия API Liga of Experts обязывают вас отказываться от любых видов коллективных действий, исков, 
              групповых арбиражей и вы соглашаетесь решать все споры посредством обязательного индивидуального арбитража.
              <br />
              При предъявлении иска, штрафа  или иных расходов связанных с нарушения в отношении персональной информации 
              пользователей и Политик Лиги Экспертов в результате использования ваших ресурсов и приложений, вы соглашаетесь 
              защищать Лигу  экспертов и освободить ее от претензий, а также возместить  ущербы понесенный Лигой Экспертов.
              <br />
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
