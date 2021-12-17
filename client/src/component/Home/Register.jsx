import { FormControl, Button, InputBase, makeStyles } from '@material-ui/core'
import { useState } from 'react';
import { saveprofile } from '../../service/api';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

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
  link: {
    flex: 1,
    margin: "0 15px",
    border: "1px solid #0d6efd",
    color: "#0d6efd",
    borderRadius: '4px',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: "#0d6efd",
      color: "white"
    }
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
    margin: "10px 15px"
  },
  btn1: {
    margin: 25,
    marginTop: 0,
    marginBottom: 0
  },
  line: {
    color: "black",
    backgroundColor: "black",
    height: 0.5,
    opacity: .25
  },
  btn2: {
    margin: '1px 21px',
    display: "flex",
    width: '18rem',
    color: "white",
    backgroundColor: '#3f51b5',
    borderRadius: 4,
    textDecoration: "none",
    height: 36,
    alignItems: "center",
    justifyContent: "center"
  }

})

const initialvalue = {
  name: "",
  address: "",
  phone: "",
  email: "",
  password: "",
  cpassword: "",
}


const Register = () => {
  const navigate = useNavigate();

  const [profile, setprofile] = useState(initialvalue);
  const classes = useStyle();
  const handleChange = (e) => {
    setprofile({ ...profile, [e.target.name]: e.target.value });
  }
  const updateprofile = async () => {
    if (profile.password !== profile.cpassword) {
      window.alert('Password and Confirm password are no matching');
    }
    await saveprofile(profile);
    navigate('/login');
  }
  return (
    <div className={classes.component}>
      <FormControl className={classes.container}>
        <p className={classes.text} style={{ fontSize: "1.5em", fontWeight: "600" }}>Register</p>
        <InputBase onChange={(e) => handleChange(e)}
          type='text'
          placeholder='Name (e.g. Mohit Kumar)'
          className={classes.takefeild}
          name="name"
        />


        <InputBase onChange={(e) => handleChange(e)}
          type='text'
          className={classes.takefeild}
          placeholder='Phone no. (e.g. +91-97987XXXXX)'
          name="phone"
        />

        <InputBase onChange={(e) => handleChange(e)}
          type='text'
          className={classes.takefeild}
          placeholder="Address (e.g. Mumbai, India)"
          name="address"
        />

        <InputBase onChange={(e) => handleChange(e)}
          type='email'
          className={classes.takefeild}
          placeholder='Email (e.g. abc@gmail.com)'
          name="email"
        />

        <InputBase onChange={(e) => handleChange(e)}
          type='password'
          className={classes.takefeild}
          placeholder='Password'
          name="password"
        />

        <InputBase onChange={(e) => handleChange(e)}
          type='password'
          className={classes.takefeild}
          placeholder='Confirm password'
          name="cpassword"
        />
        <hr />
        <Button onClick={() => updateprofile()} className={classes.link} >Register</Button>
        <p className={classes.text}>Already have an account ?  <Link style={{ textDecoration: 'none', color: "red" }} to="/login">Login</Link> </p>
      </FormControl>
      <p>Copyright © 2021. All Rights Reserved.</p>
      <div>
      </div>



    </div>
  );
}
export default Register;