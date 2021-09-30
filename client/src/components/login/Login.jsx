import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import './styles.css';
import { withRouter } from 'react-router';
import { initiateLogin } from '../../redux/login/actions';
import { useDispatch } from 'react-redux';


const Login = ({
    history
}) => {
    const dispatch = useDispatch();

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleUserNameChange = e => setUserName(e.target.value);
    const handlePasswordChange = e => setPassword(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        const formData = {
            userName,
            password
        }
        if(userName && password){
           dispatch(initiateLogin(formData));
        }
    }
    return (
        <div id="login-form-container">
            <h4>Login</h4>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" value={userName} onChange={handleUserNameChange} placeholder="username" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={handlePasswordChange} placeholder="password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default withRouter(Login);