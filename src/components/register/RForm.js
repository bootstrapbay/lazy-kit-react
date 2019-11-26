import React from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  CustomInput,
  Button
} from 'reactstrap';

const RForm = () => {
  return (
    <div className="register-form">
      <div className="mb-5">
        <h1>Register</h1>
        <p className="lead">Create an account to start playing.</p>
      </div>
      <Form>
        <FormGroup>
          <Label for="email">Email address</Label>
          <Input type="email" name="email" id="email" placeholder="Enter email" />
          <FormText color="muted" className="text-small">
            We'll never share your email with anyone else.
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="Password" />
        </FormGroup>
        <FormGroup>
          <Label for="password_confirmation">Password Confirmation</Label>
          <Input type="password" name="password_confirmation" id="password_confirmation" placeholder="Password Confirmation" />
        </FormGroup>
        <FormGroup>
          <CustomInput type="checkbox" id="remember" label="Remember me" />
        </FormGroup>
        <Button type="submit" color="primary" className="btn-block">Submit</Button>
      </Form>

      <p className="small my-4 text-center">Already have an account? <a href="#a">Log in</a>.</p>
    </div>
  );
};

export default RForm;
