import { useLocation } from "react-router-dom";
import { makeStyles } from '@material-ui/styles';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getprofile } from "../../service/api";
const useStyle = makeStyles({
    maindiv: {
        display: "flex",
        flexDirection: "column "
    },
    container: {
        boxShadow: "0 4px 8px 0 rgb(0 0 0 / 20%)",
        margin: '3rem auto',
        marginBottom: "1em",
        borderRadius: "0.25em",
        width: '33.3333%',
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
        backgroundColor: "#e9ecef"
    },

    heading: {
        minWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 600,
    },
    line: {
        color: "black",
        height: 1,
        width: "-webkit-fill-available",
        margin: "25px 5px",
        opacity: "0.25",
        backgroundColor: "black",
    },
    image: {
        height: 170,
        width: 170
    },

    btn: {
        width: "100%",
        display: "inline-block",
        fontWeight: 500,
        lineHeight: 1.5,
        color: "#f7ba06",
        textAlign: "center",
        textDecoration: "none",
        verticalAlign: "middle",
        cursor: "pointer",
        backgroundColor: "transparent",
        border: "2px solid #f7ba06",
        padding: "0.375rem 0.75rem",
        fontSize: "1rem",
        borderRadius: "0.25rem",
        transition: "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: "#f7ba06",
            color: "black"
        }
    }
})
export default function Profile() {
    const { search } = useLocation();
    const [data, setdata] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            let data2 = await getprofile(search);
            setdata(data2.data);
        }
        fetchData();

    }, [search]);


    const classes = useStyle();
    return (
        <div className={classes.maindiv}>
            <div className={classes.container}>
                <div className={classes.heading}>
                    <img className={classes.image} src="https://redgold.herokuapp.com/static/media/profile.35557a25.jpg" alt="" />
                    <p style={{ margin: 0, fontSize: "2em" }}>Profile</p>
                    <hr className={classes.line} />
                    <div className={classes.field}>
                        <input type="text" className={classes.input100} name="name" value={data.name} />
                        <input type="text" className={classes.input100} name="email" required value={data.email} />
                        <input type="text" className={classes.input100} name="phone" required value={data.phone} />
                        <input type="text" className={classes.input100} name="email" required value={data.address} />
                        <Link to={`/update/${data._id}`}><button className={classes.btn} >Edit Profile</button></Link>
                    </div>


                </div>
            </div>
            <div style={{ textAlign: "center", marginBottom: "10px" }}>Copyright © 2021. All Rights Reserved.</div>
        </div>


    );
}