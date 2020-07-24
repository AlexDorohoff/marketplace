import React, {Component} from 'react';
import SelectPopup from "../../Common/SelectPopup";
import CourseService from "../../../core/services/courses"
import {currentDate} from "../../../core/utils/common"
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
                {id: 3, type: 'delete', name: 'Реализация'},
            ]
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (value, data) => {
        const newLabel = this.state.purchase.find(item => item.type == value);
        this.setState({label: newLabel.name});
        const purchaseId = newLabel.id;

        const params = {
            teacher_id: data.user_id,
            course_id: data.course_id,
            id_purchase_status: purchaseId,
            request_id: data.id,
            message: '',
            requested_date: currentDate(),
        }
console.log(params);
        CourseService.updateCourseRequest(data.id, params);
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