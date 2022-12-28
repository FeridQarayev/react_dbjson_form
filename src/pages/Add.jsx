import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "./style.css";
import axios from "axios";

function Add() {
  const validationSchema = Yup.object({
    subject: Yup.string().required("is a required"),
    description: Yup.string().required("is a required"),
    category: Yup.string().required("is a required"),
  });

  return (
    <div className="form">
      <div>
        <Formik
          initialValues={{ subject: "", description: "", category: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            // console.log(values);
            
            axios.post('http://localhost:3000/users', values)
              .then(response => console.log(response)
              );
          }}
        >

          {({ handleSubmit, handleChange, values, errors }) => (
            <form onSubmit={handleSubmit} className="form__container__modal">
              <div className="form__label">
                <label htmlFor="">Subject</label>
                <br />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  onChange={handleChange}
                  values={values.subject}
                />
                <br />
                {errors.subject && errors.subject}
              </div>
              <div className="form__label">
                <label htmlFor="">Description</label>
                <br />
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  onChange={handleChange}
                  values={values.description}
                />
                <br />
                {errors.description && errors.description}
              </div>
              <div className="form__label">
                <label htmlFor="">Category</label>
                <br />
                <select name="category" id="select" onChange={handleChange}>
                  <option value=""></option>
                  <option value="Idman">Idman</option>
                  <option value="Iqtisadiyyat ">Iqtisadiyyat </option>
                  <option value="Turme Heyati">Turme Heyati</option>
                </select>
                <br />
                {errors.category && errors.category}
              </div>
              <button className="btnn" type="submit">
                Add
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Add;
