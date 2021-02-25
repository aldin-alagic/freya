import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import { Spinner } from "./../spinner/Spinner";
import { authenticateUser } from "./../../store/auth";

import { AUTH_TOKEN, USER } from "../../config.json";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please provide a valid e-mail address")
    .required("Please provide your e-mail address"),
  password: yup.string().required("Please provide your password"),
});

export function Login(props) {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);

  const onSubmit = (data) => {
    dispatch(authenticateUser(data.email, data.password));
  };

  useEffect(() => {
    if (token) {
      localStorage.setItem(AUTH_TOKEN, token);
      localStorage.setItem(USER, JSON.stringify(user));

      props.history.push(
        props.location.state
          ? props.location.state.from.pathname
          : "/profile/details"
      );
    }
  });

  return (
    <div className="col-md-4 mx-auto">
      <h1 className="mb-5 text-center">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="text-dark font-weight-bold" htmlFor="email">
          E-mail
        </label>
        <input
          name="email"
          type="email"
          className={errors.email ? "form-control is-invalid" : "form-control"}
          ref={register}
        />
        <div className="invalid-feedback">{errors.email?.message}</div>

        <label className="text-dark font-weight-bold mt-3" htmlFor="password">
          Password
        </label>
        <input
          name="password"
          type="password"
          className={
            errors.password ? "form-control is-invalid" : "form-control"
          }
          ref={register}
        />
        <div className="invalid-feedback">{errors.password?.message}</div>

        <button className="btn btn-primary mt-3">Login</button>
      </form>
      {loading && <Spinner />}
    </div>
  );
}
