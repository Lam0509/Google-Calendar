import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import {useState} from "react";

export default function LoginForm() {

    const [account, setAccount] = useState({
        email: '',
        password: '',
    })

    const handleChange = (event) => {
        setAccount({...account, [event.target.name]: event.target.value})
    }

    const handleSubmit = () => {
        alert(account)
    }

    return (
        <MDBContainer fluid>

            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                <MDBCol col='12'>

                    <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
                        <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                            <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                            <p className="text-white-50 mb-3">Please enter your login and password!</p>

                            <MDBInput wrapperClass='mb-4 w-100' name='email' label='Email address' id='formControlLg' type='email' size="lg" onChange={(event) => handleChange(event)}/>
                            <MDBInput wrapperClass='mb-4 w-100' name='password' label='Password' id='formControlLg' type='password' size="lg" onChange={(event) => handleChange(event)}/>
                            <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

                            <MDBBtn size='lg' onClick={handleSubmit}>
                                Login
                            </MDBBtn>

                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>
            </MDBRow>

        </MDBContainer>
    );
}