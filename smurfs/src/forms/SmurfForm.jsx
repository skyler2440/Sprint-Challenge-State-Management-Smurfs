import React from "react";
import { connect } from "react-redux";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

function SmurfFrm({ values, errors, touched }) {
  return (
    <div className="form-card">
      <h1>Add a Smurf</h1>
      <Form className="ui form">
        <div className="field">
          {touched.Name && errors.Name && <p>{errors.Name}</p>}
          <Field type="text" name="name" placeholder="Name" />
        </div>
        <div className="field">
          {touched.age && errors.age && <p>{errors.age}</p>}
          <Field type="text" name="age" placeholder="Age" />
        </div>
        <div className="field">
          {touched.height && errors.height && <p>{errors.height}</p>}
          <Field type="height" name="height" placeholder="Height" />
        </div>
        <button className="ui button" type="submit">
          Submit
        </button>
        <button className="ui button" type="reset">
          Reset Form
        </button>
      </Form>
    </div>
  );
}

const SmurfForm = withFormik({
  mapPropsToValues({ name, age, height }) {
    return {
      name: name || "",
      age: age || "",
      height: height || ""
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("is required"),
    age: Yup.number().required("is required"),
    height: Yup.string().required("is required")
  }),

  handleSubmit(values, formikBag) {}
})(SmurfFrm);

export default connect(
  null,
  {}
)(SmurfForm);
