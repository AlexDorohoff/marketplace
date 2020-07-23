import React, {Component} from 'react';
import SelectPopup from "../../Common/SelectPopup";
import TeacherService from "../../../core/services/teachers"
import GridCol from "arui-feather/grid-col";


class DropList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: props.param,
            label: props.param.purchase.label,
            purchase: [
                {id: 0, type: 'request', name: 'Заявка'},
                {id: 1, type: 'release', name: 'Реализация'},
            ]
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (value, data) => {
        const newLabel = this.state.purchase.find(item => item.type == value);
        this.setState({label: newLabel.name});
        const purchaseId = newLabel.id;


        const date = new Date();
        let dd = date.getDate();
        dd = (dd > 9 ? '' : '0') + dd;
        let mm = date.getMonth() + 1;
        mm = (mm > 9 ? '' : '0') + mm;
        const YYYY = date.getFullYear();

        const dt = `${YYYY}-${mm}-${dd}`;
        const reqTime = new Date().toLocaleTimeString();
        const reqDate = `${dt} ${reqTime}`;
        const params = {
            teacher_id: data.user_id,
            course_id: data.course_id,
            id_purchase_status: purchaseId,
            request_id: data.id,
            message: '',
            requested_date: reqDate,
        }
console.log(params);
        TeacherService.updateTeacherRequest(data.id, params);
    };

    render() {
        return (
            <div>
                <SelectPopup
                    onChange={event => {
                        this.handleChange(event, this.state.options);
                    }}
                    options={this.state.purchase}
                />{this.state.label}</div>);

    }
}

export default DropList;