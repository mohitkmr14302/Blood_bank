import { FormControl, InputBase, makeStyles } from '@material-ui/core'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginprofile } from '../../service/api';
import bcrypt from 'bcryptjs';
import { useContext } from 'react';
import { usercontext } from '../../App'
const useStyle = makeStyles({
    container: {
        boxShadow: '0px 1px 20px 4px rgb(218 202 202 / 64%)',
        padding: 20,
        width: "25%",
        border: '1px solid #b6adad',
        margin: '30px auto',
        marginBottom: 5,
        borderRadius: 4,
        "@media (max-width: 900px)": {
            width: "50%"
        },
        "@media (max-width: 591px)": {
            width: "80%"
        },
      },
    takefeild: {
        flex: 1,
        margin: "10PX 15px",
        borderRadius: '4px',
        border: '1px solid #b6adad',
        padding: "4px 8px"
    },
    component: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      },
      text: {
        margin: '10px 15px', 
      },
    btn: {
        margin: "0px 35px",
    },
    link: {
        borderRadius: 4,
        textDecoration: 'none',
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #198754",
         margin: "1.5rem 15px",
        height: 36,

        color: '#198754',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: "#198754",
            color: "white"
         }
    }

})

const initialvalue = {
    email: '',
    password: ''
}
const Login = ({ match }) => {
    const {state, dispatch} =useContext(usercontext);
    const [data, setdata] = useState(initialvalue);
    const classes = useStyle();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }

    const checkprofile = async () => {

        let res = await loginprofile(data.email);
        const ismatch = (await bcrypt.compare(data.password, res[0].password));

        if (ismatch) {
            navigate('/');
        dispatch({type: "USER", payload: true})
            console.log('correct login details');
        } else {
            window.alert('Invalid Email or password');
            navigate('/login');
        }
    }


    return (
        <div className={classes.component}>
            <FormControl className={classes.container}>
                <p className={classes.text} style={{fontSize: "1.5em", fontWeight: "600"   }}>Login</p>
                
                <InputBase onChange={(e) => handleChange(e)}
                    className={classes.takefeild}
                    placeholder='Email'
                    name="email"
                />
                <InputBase onChange={(e) => handleChange(e)}
                    type='password'
                    className={classes.takefeild}
                    placeholder='Password'
                    name="password"
                />
                <Link className={classes.link} to={`/login/${data.email}`} onClick={(e) => { checkprofile(e) }} >Log In </Link>

                <details className={classes.text}>
                    <summary>Need Help?</summary>
                    <div>
                        <Link to="/">Forgot password</Link>
                    </div>
                    <Link to="/">Other issues with Sign-In</Link>
                </details>
                <p className={classes.text}>Don't have an account ? <Link style={{textDecoration: 'none',color: "red"}} to="/register">Register</Link> </p>
               
            </FormControl>
            <p>Copyright © 2021. All Rights Reserved.</p>
            <div>
            </div>



        </div>
    );
}
export default Login;