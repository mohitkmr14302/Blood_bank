import { useLocation } from "react-router-dom";
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import { useEffect, useState } from "react";
import { updatepost, getprofile } from "../../service/api";
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import swal from 'sweetalert';
const useStyle = makeStyles({
    maindiv: {
        display: "flex",
        flexDirection: "column "
    },
    container: {
        boxShadow: "0 4px 8px 0 rgb(0 0 0 / 20%)",
        margin: '3rem auto',
        marginBottom: "1em",
        width: '30%',
        padding: '1.5rem',
        border: "none",
        "@media (max-width: 900px)": {
            width: "50%"
        },
        "@media (max-width: 591px)": {
            width: "80%"
        },
    },
    input100: {
        display: 'inline-block',
        border: '1px solid black',
        width: '96%',
        marginBottom: "2em",
        borderRadius: '5px',
        padding: 5,
        height: 40,
        lineHeight: 1.5,
        fontSize: 14,
    },

    heading: {
        minWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 600,
    },
    image: {
        height: 170,
        width: 170
    },

    btn: {
        width: "100%",
        display: "inline-block",
        fontWeight: 400,
        lineHeight: 1.5,
        color: "rgb(25, 135, 84)",
        textAlign: "center",
        textDecoration: "none",
        verticalAlign: "middle",
        cursor: "pointer",
        backgroundColor: "transparent",
        border: "1px solid rgb(25, 135, 84)",
        padding: "0.375rem 0.75rem",
        fontSize: "1rem",
        borderRadius: "0.25rem",
        transition: "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: "rgb(25, 135, 84)",
            color: "black"
        }
    },
    line: {
        color: "black",
        height: 1,
        width: "-webkit-fill-available",
        margin: "25px 5px",
        opacity: "0.25",
        backgroundColor: "black",
    },
})
const initialvalue = {
    name: "",
    phone: "",
    email: "",
    address: "",
}
export default function Updateview({ match }) {
    const { search } = useLocation();
    const { id } = useParams();
    const [data, setdata] = useState({});
    const [post, setpost] = useState(initialvalue);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchdata = async () => {

            const data = await updatepost(search);
            let data2 = await getprofile(search);
            setdata(data2.data);
            setpost(data2.data);
        }
        fetchdata();
    }, [search])

    const handleChange = async (e) => {
        await setpost({ ...data, [e.target.name]: e.target.value });
    }

    const updateblog = async () => {
        await updatepost(id, post);
        swal({
            title: "Sucess!",
            text: "Your profile updated!",
            icon: "success",
            button: "Ok!",
          });
        navigate('/profile')
    }

    const classes = useStyle();
    return (
        <div className={classes.maindiv}>
            <div className={classes.container}>
                <div className={classes.heading}>
                    <img className={classes.image} src="https://redgold.herokuapp.com/static/media/profile.35557a25.jpg" alt="" />
                    <p style={{ margin: 0, fontSize: "2em" }}>Profile</p>
                    <hr className={classes.line} />
                    <div className={classes.field}>
                        <input type="text" className={classes.input100} onChange={(e) => handleChange(e)} name="name" required Value={data.name} />
                        <input type="text" className={classes.input100} onChange={(e) => handleChange(e)} name="email" required defaultValue={data.email} />
                        <input type="text" className={classes.input100} onChange={(e) => handleChange(e)} name="phone" required defaultValue={data.phone} />
                        <input type="text" className={classes.input100} onChange={(e) => handleChange(e)} name="address" required defaultValue={data.address} />
                        <Button onClick={() => updateblog()} className={classes.btn}>Update</Button>
                    </div>


                </div>
            </div>
            <div style={{textAlign: "center"}}>Copyright © 2021. All Rights Reserved.</div>
        </div>


    );
}