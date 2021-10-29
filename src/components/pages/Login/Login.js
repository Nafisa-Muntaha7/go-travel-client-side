import React from 'react';
import { Form, Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();

    const handleForm = e => {
        e.preventDefault();
    }

    return (
        <div className="m-5">
            <h1 className="text-center text-info">Login</h1>
            <Form onSubmit={handleForm} className="mt-3">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button className="mb-5" variant="dark" type="submit">
                    Submit
                </Button>
                <h5 className="mb-3">Do you want to login with google?</h5>
                <button onClick={signInUsingGoogle} className="btn btn-dark mx-3">Google Sign in</button>
                <br />

            </Form>
        </div>
    );
};

export default Login;