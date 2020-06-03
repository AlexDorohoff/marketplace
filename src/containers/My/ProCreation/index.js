import React from 'react';
import Helmet from 'react-helmet';
import { files, myprocreation } from '../../../core/utils/testData';
import Breadcrumbs from '../../../components/Common/Breadcrumbs';
import ProCreationForm from '../../../components/My/Forms/ProCreationForm';
import './styles.scss';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Button from 'arui-feather/button';
import Pencil from '../../../theme/images/account/pencil.svg';
import Link from 'arui-feather/link';

/**
 * Timetable Pro Creation
 */
class Procreation extends React.Component {

  render() {
    return (
      <>
        <Helmet>
          <title>Timetable Pro Creation</title>
          <meta name="description" content="Timetable Pro Creation" />
          <meta name="keywords" content="Timetable Pro Creation" />
        </Helmet>
        <section className="section breadcrumbs">
          <Breadcrumbs items={myprocreation} />
        </section>
        <section className="section">
          <GridRow>
            <GridCol width={{ mobile: 12, tablet: 9, desktop: 9 }} className="form-field">
              <h1 className="student-title">Профиль создания расписания PRO</h1>
            </GridCol>
            <GridCol width={{ mobile: 12, tablet: 9, desktop: 3 }} className="form-field right-poz">
              <div className="student-pencil">
                <Link pseudo><img src={Pencil} alt="" /></Link>
              </div>
              <div className="student-refresh">
                <Button type="submit" className="button button_default button_modal">Образец</Button>
              </div>
            </GridCol>
          </GridRow>
          <ProCreationForm formType="procreationform" />
        </section>
      </>
    );
  }
}

export default Procreation;
