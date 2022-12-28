import React, { useRef } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "./style.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Helmet from "react-helmet";


function Add() {
  const subjectInputRef = useRef()
  const descriptionInputRef = useRef()

  const validationSchema = Yup.object({
    subject: Yup.string().required("is a required"),
    description: Yup.string().required("is a required"),
    category: Yup.string().required("is a required"),
  });

  return (
    <div className="form">
      <Helmet>
        <title>Add</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
      <div>
        <Formik
          initialValues={{ subject: "", description: "", category: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            // console.log(values);

            axios
              .post("http://localhost:3000/users", values)
              .then((response) => console.log(response));
              toast.success('Added!')
              subjectInputRef.current.value=''
              descriptionInputRef.current.value=''
          }}
        >
          {({ handleSubmit, handleChange, values, errors }) => (
            <form onSubmit={handleSubmit} className="form__container__modal">
              <div className="form__label">
                <label htmlFor="">Subject</label>
                <br />
                <input
                ref={subjectInputRef}
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
                ref={descriptionInputRef}
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
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default Add;
