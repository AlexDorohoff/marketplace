import React from 'react';
import './styles.scss';
import Button from 'arui-feather/button';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Link from 'arui-feather/link';
import Popup from 'arui-feather/popup';
import Oval from '../../../../theme/images/oval.svg';
import Triangledown from '../../../../theme/images/account/triangledown.svg';
import Closemodal3 from '../../../../theme/images/account/closemodal3.svg';

/**
 * Modal7 form
 */
class Modal7Form extends React.Component {

    state = {
      isOpenPopup: false,
    };

    refPopup;

    refTarget;

    componentDidMount() {
      this.refPopup.setTarget(this.refTarget.control);
    }

    render() {
      const { values, errors, touched, setFieldValue, handleSubmit, handleBlur, isSubmitting } = this.props;

      return (
        <form onSubmit={handleSubmit} className="modal7_form">
          <div className="modal5_form-subhead">Документы</div>

          <div className="orange-stripe">
            <GridRow>
              <GridCol width={{ mobile: 12, tablet: 2, desktop: 2 }} className="form-field">
                <div className="fileatr">
                                Имя
                  <img src={Triangledown} className="filesorting" alt="" />
                </div>
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 2, desktop: 2 }} className="form-field">
                <div className="fileatr">
                                Дата
                  <img src={Triangledown} className="filesorting" />
                </div>
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 1, desktop: 1 }} className="form-field">
                            &nbsp;
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 7, desktop: 7 }} className="form-field">
                <div>
                                &nbsp;
                </div>
              </GridCol>
            </GridRow>
          </div>
          <div className="filelisting">
            <GridRow>
              <GridCol width={{ mobile: 12, tablet: 2, desktop: 2 }} className="form-field">
                <div className="filename">
                                Плакат.jpg
                </div>
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 2, desktop: 2 }} className="form-field">
                <div className="filedate">
                                2019-08-25 11:30
                </div>
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 1, desktop: 1 }} className="form-field">
                <Link pseudo><img src={Closemodal3} className="fileclose" /></Link>
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 7, desktop: 7 }} className="form-field" />

              <GridCol width={{ mobile: 12, tablet: 2, desktop: 2 }} className="form-field">
                <div className="filename">
                                Плакат.jpg
                </div>
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 2, desktop: 2 }} className="form-field">
                <div className="filedate">
                                2019-08-25 11:30
                </div>
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 1, desktop: 1 }} className="form-field">
                <Link pseudo><img src={Closemodal3} className="fileclose" /></Link>
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 7, desktop: 7 }} className="form-field" />

              <GridCol width={{ mobile: 12, tablet: 2, desktop: 2 }} className="form-field">
                <div className="filename">
                                Плакат.jpg
                </div>
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 2, desktop: 2 }} className="form-field">
                <div className="filedate">
                                2019-08-25 11:30
                </div>
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 1, desktop: 1 }} className="form-field">
                <Link pseudo><img src={Closemodal3} className="fileclose" /></Link>
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 7, desktop: 7 }} className="form-field" />

              <GridCol width={{ mobile: 12, tablet: 2, desktop: 2 }} className="form-field">
                <div className="filename">
                                Плакат.jpg
                </div>
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 2, desktop: 2 }} className="form-field">
                <div className="filedate">
                                2019-08-25 11:30
                </div>
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 1, desktop: 1 }} className="form-field">
                <Link pseudo><img src={Closemodal3} className="fileclose" /></Link>
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 7, desktop: 7 }} className="form-field" />
              <GridCol width={{ mobile: 12, tablet: 2, desktop: 2 }} className="form-field">
                <div className="filename">
                                Плакат.jpg
                </div>
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 2, desktop: 2 }} className="form-field">
                <div className="filedate">
                                2019-08-25 11:30
                </div>
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 1, desktop: 1 }} className="form-field">
                <Link pseudo><img src={Closemodal3} className="fileclose" /></Link>
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 7, desktop: 7 }} className="form-field" />
              <GridCol width={{ mobile: 12, tablet: 2, desktop: 2 }} className="form-field">
                <div className="filename">
                                Плакат.jpg
                </div>
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 2, desktop: 2 }} className="form-field">
                <div className="filedate">
                                2019-08-25 11:30
                </div>
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 1, desktop: 1 }} className="form-field">
                <Link pseudo><img src={Closemodal3} className="fileclose" /></Link>
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 7, desktop: 7 }} className="form-field" />
              <GridCol width={{ mobile: 12, tablet: 2, desktop: 2 }} className="form-field">
                <div className="filename">
                                Плакат.jpg
                </div>
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 2, desktop: 2 }} className="form-field">
                <div className="filedate">
                                2019-08-25 11:30
                </div>
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 1, desktop: 1 }} className="form-field">
                <Link pseudo><img src={Closemodal3} className="fileclose" /></Link>
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 7, desktop: 7 }} className="form-field" />
            </GridRow>
          </div>

          <hr className="modal5_form-hr" />
          <div className="modal5_form-material">
            <span className="bold">Материалы</span>
            <img src={Oval} className="discipline-dot" alt="" />
            <span className="modal5_form-grey">Материалы не загружены</span>
          </div>
          <div className="modal5_form-material2">
            <span className="bold">Выбор курса</span>
            <img src={Oval} className="discipline-dot" alt="" />
            <span className="modal5_form-grey">Ввод названия курса</span>
          </div>
          <div className="materialtxt-textarea">
            <textarea
              name="materialtxt"
              id="materialtxt"
              placeholder="Поэты “серебряного” века / Маяковский"
              value={values.materialtxt}
              onChange={value => setFieldValue('materialtxt', value)}
              onBlur={handleBlur}
              error={errors.materialtxt && touched.materialtxt && (<span>{errors.materialtxt}</span>)}
              disabled={isSubmitting}
            />
          </div>
          <Button
            ref={(target) => { this.refTarget = target; }}
            size="m"
            onClick={() => this.setState({ isOpenPopup: !this.state.isOpenPopup })}
            className="button button_link"
          >
            Pop Up окно
          </Button>
          <Popup
            ref={(popup) => { this.refPopup = popup; }}
            visible={this.state.isOpenPopup}
            onClickOutside={() => this.setState({ isOpenPopup: false })}
            mainOffset={10}
          >
            <div className="course-theme">
              <div className="course-theme-title">Темы курса</div>
              <ul>
                <li className="active">Поэты “золотого” века</li>
                <li>Поэты “серебряного” века</li>
                <li>Поэты XX века</li>
              </ul>
            </div>
          </Popup>
          <div className="text-center material-button">
            <Button className="button button_modalblue">Загрузить</Button>
          </div>
        </form>
      );
    }
}
export default Modal7Form;
