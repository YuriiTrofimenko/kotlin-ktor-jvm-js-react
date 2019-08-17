import React, {Component} from 'react';
import './App.css';

import sample from 'reactjssample'

import TextField from "@material-ui/core/es/TextField/TextField";
//const {sample} = require('reactjssample');

class TransferEditor extends Component {
    get item() {
        return this.props.item
    }

    render() {
        return [
            this.field("Date", "time", {type: "datetime-local"},
                value => sample.localDateTimeFromText(value)),
        this.field("Partner", "partner"),
            this.field("Description", "description"),
        this.field("Amount", "amount", {type: "number"},
            value => Number.parseInt(value, 10))
    ]
    }

    field(title, name, props, valueProvider) {
        return React.createElement(TextField, {
            key: name,
            label: title,
            InputLabelProps: {shrink: true},
            value: this.item[name].toString(),
            onChange: this.update.bind(this, name, valueProvider || (value => value)),
    ...props
    });
    }

    update(field, value, event) {
        this.item[field] = value(event.target.value);
        this.props.edit(this.item)
    }
}

export default TransferEditor;