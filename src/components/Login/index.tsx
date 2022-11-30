import React from "react";
import { Field, Form, Formik } from "formik";
import { object, string } from "yup";
import { useNavigate } from "react-router-dom";
import { Card, TextField, Typography, Button } from "@mui/material";
import axios from "axios";

const initialValues = {
    email: '',
    password: '',
}

const URL = "https://reqres.in/api/register";
export const FormLogin = () => {
  const navigate = useNavigate();

  return (
    <Card sx={{width: "100%", alignSelf : 'center'}}>
      <Typography
        variant="subtitle1">STAR FOR FREE</Typography>
      <Typography sx={{ textAlign: 'left'}} variant="h2">Sign uo to Zoho.</Typography>
      <Typography variant="subtitle1">Already a member? <span style={{color: '#1b7cd6'}}>Log in</span></Typography>
      <br/>
        <Formik
        initialValues={initialValues}
        validationSchema={object({
          email: string().required("Please enter email").email("Invalid email"),
          password: string()
            .required("Please enter password")
            .min(6, "Password should be minimum 6 characters long")

        })}
        onSubmit={(values, formikHelpers) => {
          console.log(values);
          const sendPostLogin = async () => {
            try {
              const resp = await axios.post(URL, values);
              console.log("-----------")
              const { data } = resp;
              localStorage.setItem('logged', 'true');
              localStorage.setItem('id', data.id);
              localStorage.setItem('token', data.token);
              localStorage.setItem('email', values.email)
              alert("Login Succefull");
              navigate("/");
            } catch (error) {
              alert("Unregistered user :( ");
            }
          };
          sendPostLogin();
          formikHelpers.resetForm();
        }}  
        >
          {({ errors, isValid, touched, dirty }) => (
            <Form className="formulario">

              <Typography >
                E-mail
              </Typography>
              <Field
                name="email"
                type="email"
                as={TextField}
                variant="outlined"
                color="primary"
                label="Email"
                fullWidth
                error={Boolean(errors.email) && Boolean(touched.email)}
                helperText={Boolean(touched.email) && errors.email}
              />
              <br/>
              <Typography>
                Password
              </Typography>
              <Field
                name="password"
                type="password"
                as={TextField}
                variant="outlined"
                color="primary"
                label="Password"
                fullWidth
                error={Boolean(errors.password) && Boolean(touched.password)}
                helperText={Boolean(touched.password) && errors.password}
              />
              <br/>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                disabled={!isValid || !dirty}
              >
                Sign up
              </Button>
            </Form>
          )}    
        </Formik>
    </Card>
  )
}

