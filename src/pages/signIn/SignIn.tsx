import React, { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux';
import { loginUserAction } from '../../redux/slice/loginSlice';
import { AppDispatch } from '../../redux/store/store';
import { useNavigate } from 'react-router';

function SignIn() {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [pswd, setPswd] = useState("")
    const [errors, setErrors] = useState({});

    const validate = () => {
        let err = {};

        if (!email.trim()) {
            err.email = "Username is required";
        }

        if (!pswd.trim()) {
            err.pswd = "Password is required";
        } else if (pswd.length < 6) {
            err.pswd = "Password must be at least 6 characters long";
        }

        setErrors(err);
        return Object.keys(err).length === 0;
    };

    const handleLogin = (e: any) => {
        e.preventDefault();
        if (validate()) {
            const payload = {
                username: email,
                password: pswd

            }
            dispatch(loginUserAction({ payload, navigate }));        }
    }
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw", backgroundColor: "#121212" }}>
            <MDBContainer fluid>

                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12'>

                        <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
                            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                <div>
                                    <MDBInput wrapperClass='mb-4 w-100' labelClass='text-white' label='UserName' id='formControlLg' type='text' size="lg" onChange={(e) => setEmail(e.target.value)} />
                                    {errors.email && <p className="text-danger">{errors.email}</p>}
                                </div>
                                <div>
                                    <MDBInput wrapperClass='mb-4 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" onChange={(e) => setPswd(e.target.value)} />
                                    {errors.pswd && <p className="text-danger">{errors.pswd}</p>}
                                </div>

                                <p className="small mb-3 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
                                <MDBBtn outline className='mx-2 px-5' color='white' size='lg' onClick={(event) => handleLogin(event)}>
                                    Login
                                </MDBBtn>

                                <div className='d-flex flex-row mt-3 mb-5'>
                                    <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                                        <MDBIcon fab icon='facebook-f' size="lg" />
                                    </MDBBtn>

                                    <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                                        <MDBIcon fab icon='twitter' size="lg" />
                                    </MDBBtn>

                                    <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                                        <MDBIcon fab icon='google' size="lg" />
                                    </MDBBtn>
                                </div>

                                <div>
                                    <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a></p>

                                </div>
                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>
                </MDBRow>

            </MDBContainer>

        </div>
    );
}

export default SignIn;