import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import File from "./file";
import Select from "./select";
import Radio from "./radio";
import TextArea from "./textArea";

class Form extends Component {
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

  renderSelect(name, label, options) {
    const { data, errors } = this.state;

    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderInput(name, label, type, styleLabel = " ", styleInput = " ") {
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

  renderFile(name, label, type) {
    const { data, errors } = this.state;
    return (
      <File
        name={name}
        value={data[name]}
        label={label}
        type={type}
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
        value={data[name]}
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
        name={name}
        label={label}
        id={id}
        onChange={this.handleChange}
        error={errors[id]}
        value={value}
        checked={data[name] === value ? true : false}
      />
    );
  }
}

export default Form;
