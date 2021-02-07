import React from "react";
import Joi from "joi-browser";

import { Input } from "./input/Input";
import { File } from "./file/File";
import { SelectBox } from "./selectBox/SelectBox";
import { Radio } from "./radio/Radio";
import { TextArea } from "./textArea/TextArea";
import { SwitchBox } from "./switchBox/SwitchBox";
import { Phone } from "./phone/Phone";

export class Form extends React.Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ id, value }) => {
    const obj = { [id]: value };
    const schema = { [id]: this.schema[id] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) {
      console.log(errors);
      return;
    }

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  renderButton(label) {
    return <button className="btn btn-primary mt-3">{label}</button>;
  }

  renderSelect(name, label, placeholder, options, styleLabel) {
    const { data, errors } = this.state;

    return (
      <SelectBox
        name={name}
        value={data[name]}
        label={label}
        placeholder={placeholder}
        options={options}
        onChange={this.handleChange}
        styleLabel={styleLabel}
        error={errors[name]}
      />
    );
  }

  renderInput(name, label, type, styleLabel, styleInput) {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        value={data[name]}
        label={label}
        type={type}
        styleLabel={styleLabel}
        styleInput={styleInput}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderPhone(name, label, styleLabel) {
    const { data, errors } = this.state;
    return (
      <Phone
        name={name}
        value={data[name]}
        label={label}
        styleLabel={styleLabel}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderSwitchBox(name, label) {
    const { data, errors } = this.state;
    return (
      <SwitchBox
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderFile(name, label) {
    const { data, errors } = this.state;
    return (
      <File
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderTextArea(name, label, columns, rows, styleLabel, styleTextArea) {
    const { data, errors } = this.state;
    return (
      <TextArea
        name={name}
        value={data[name] ? data[name] : "Short description..."}
        label={label}
        onChange={this.handleChange}
        columns={columns}
        rows={rows}
        styleLabel={styleLabel}
        styleTextArea={styleTextArea}
        error={errors[name]}
      />
    );
  }

  renderRadio(name, label, id, value) {
    const { data, errors } = this.state;
    return (
      <Radio
        id={id}
        name={name}
        label={label}
        onChange={this.handleChange}
        error={errors[id]}
        value={value}
        checked={data[name] === value ? true : false}
      />
    );
  }
}
