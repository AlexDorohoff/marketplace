import React, { useState } from 'react';
import Helmet from 'react-helmet';
import Button from 'arui-feather/button';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import { NavLink } from 'react-router-dom';
import Breadcrumbs from '../../../components/Common/Breadcrumbs';
import Popup from 'arui-feather/popup';

import CourseTeacher from '../../../theme/images/SaleItems.jpg';
import HomeLogo1 from '../../../theme/images/home/home-logo1.jpg';
import Closemodal from '../../../theme/images/account/closemodal.svg';

import Footer from '../../../components/Common/Footer';
import { checkoutBreadcrumbs } from '../../../core/utils/testData';


import ModalTeacherCard from '../../../components/My/Forms/ModalTeacherCard';

import Dialog from "../../../components/Common/Dialog";
import IntlPhoneInput from 'arui-feather/intl-phone-input';
import EmailInput from 'arui-feather/email-input';
import Textarea from 'arui-feather/textarea';
import Input from 'arui-feather/input';
import Select from 'arui-feather/select';
import Sidebar from 'arui-feather/sidebar';

import './styles.scss';

/**
 * Checkout заполнение заявки на доставку и получение товара
 */



function toggleSidebar() {
    setState({ isOpen: !state.isOpen });
}
initialState = {
    isOpen: false
};
<div>
    <Button onClick={ toggleSidebar }>Выписка по счёту</Button>
    <Sidebar
        visible={ state.isOpen }
        onCloserClick={ toggleSidebar }
    >
        <Heading size='m'>
            Выписка по счёту
        </Heading>
        <Paragraph>
            100-дневный беспроцентный период начинается с момента образования задолженности по кредитной карте
            и возобновляется на следующий день после полного ее погашения. Беспроцентный период действует
            при условии внесения ежемесячного мин. платежа - 5% от суммы долга (мин. 320 руб.).
            Ставка - от 23,99% годовых, определяется индивидуально. Стоимость обслуживания карты - от 1190 р. до 6 990 руб.
            в год. АО «Альфа-Банк» не взимает комиссию за снятие наличных при месячном лимите снятия не более 50 000 руб.
            При снятии суммы выше лимита взимается комиссия на разницу в размере 3.9%-5,9%, мин. 300-500 руб.
            (зависит от категории карты). Банк оставляет за собой исключительное право на предоставление или отказ
            в предоставлении кредита. АО «Альфа-Банк». Ген. лицензия ЦБ РФ №1326 от 16.01.2015
        </Paragraph>
        <Paragraph>
            100-дневный беспроцентный период начинается с момента образования задолженности по кредитной карте
            и возобновляется на следующий день после полного ее погашения. Беспроцентный период действует
            при условии внесения ежемесячного мин. платежа - 5% от суммы долга (мин. 320 руб.).
            Ставка - от 23,99% годовых, определяется индивидуально. Стоимость обслуживания карты - от 1190 р. до 6 990 руб.
            в год. АО «Альфа-Банк» не взимает комиссию за снятие наличных при месячном лимите снятия не более 50 000 руб.
            При снятии суммы выше лимита взимается комиссия на разницу в размере 3.9%-5,9%, мин. 300-500 руб.
            (зависит от категории карты). Банк оставляет за собой исключительное право на предоставление или отказ
            в предоставлении кредита. АО «Альфа-Банк». Ген. лицензия ЦБ РФ №1326 от 16.01.2015
        </Paragraph>
        <Button view='extra'>Отправить</Button>
    </Sidebar>
</div>
