import React from "react";
import { Field, Form, Formik } from "formik";
import { object, string } from "yup";
import { Card, TextField, CardHeader, Divider, Typography, Button } from "@mui/material";

const initialValues = {
    email: '',
    password: '',
}

export const FormLogin = () => {
  return (
    <Card>
        <Typography>STAR FOR FREE</Typography>
        <CardHeader title='Sign uo to Zoho'/>
        <Typography>aLREADI A MEMBER? Log in</Typography>
        <Divider/>
        <Formik
          initialValues={initialValues}
          validationSchema={object({
            email: string().required("Please enter email").email("Invalid email"),
            password: string()
              .required("Please enter password")
              .min(7, "Password should be minimum 7 characters long"),
          })}
          onSubmit={(values, formikHelpers) => {
            console.log(values);
            formikHelpers.resetForm();
          }}  
        >
            {({ errors, isValid, touched, dirty }) => (
                <form>
                    <Field
                        name="email"
                        type="email"
                        as={TextField}
                        variant="outlined"
                        color="primary"
                        label="Email"
                        fullWidt
                        error={Boolean(errors.email) && Boolean(touched.email)}
                        helperText={Boolean(touched.email) && errors.email}
                        />
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
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="large"
                            disabled={!isValid || !dirty}
                            >
                            Sign up
                        </Button>
                </form>
            )}    
        </Formik>
    </Card>
  )
}

