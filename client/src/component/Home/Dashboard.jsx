import { Box, makeStyles } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getprofile, userpost, createappointt, userappoint } from "../../service/api";
import Appoint1 from "./Appoint1";
import swal from 'sweetalert';
import Post1 from "./Post1"
const Dashboard = () => {
  const useStyle = makeStyles({
    container: {
      margin: "4em 15em",
      marginBottom: 0,
      "@media (max-width: 1000px)": {
        margin: "1.5em 1.5em",
        marginBottom: 0
      }
    },
    donatebox: {
      width: "40%",
      display: "flex",
      margin: "30px auto",
      padding: "1rem 1rem",
      justifyContent: "space-around",
      boxShadow: "0 4px 8px 0 rgb(0 0 0 / 20%)",
      border: "1px solid rgba(0,0,0,.125)",
      borderRadius: "0.25em",
      alignItems: "center",
      "@media (max-width: 900px)": {
        width: "60%",
      }
    },
    heading: {
      fontSize: "2rem",
      margin: "1em 0 0 0",
      fontWeight: "500",
    },
    searchdiv: {
      margin: "10px 0px"
    },
    searchbox: {
      borderRadius: 4,
      padding: "0.375rem 0.75rem",
      fontSize: "1rem",
      fontWeight: "400",
      lineHeight: "1.5",
      color: "#212529",
      backgroundColor: "#fff",
      backgroundClip: "padding-box",
      border: "1px solid #ced4da",
      transition: "border-color .15s"
    },
    line: {
      color: "black",
      backgroundColor: "black",
      height: 0.5,
      opacity: .25
    },
    table: {
      fontFamily: "arial, sans-serif",
      borderCollapse: "collapse",
      width: "100%",
      padding: "0.5rem 0.5rem",
      backgroundColor: "var(--bs-table-bg)",
      borderBottomWidth: 1,
      boxShadow: "inset 0 0 0 9999px var(--bs-table-accent-bg)",

    },
    th: {
      height: '2em',
      textAlign: "left",
      padding: 8,
      borderColor: "inherit",
      borderStyle: "solid",
      borderWidth: 0
    },
    bottom: {
      padding: "1.5em",
      width: "5em",
      height: "2.5em",
      cursor: "pointer",
      borderRadius: 4,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "1px solid #dc3545",
      color: "#dc3545",
      backgroundColor: "#ffffff",
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: "#dc3545",
        color: "white"
      }
    },
    para: {
      fontSize: '1em',
      fontStyle: "italic",
      fontWeight: "400"
    }
  });
  const classes = useStyle();
  const { search } = useLocation();
  const [toggle, settoggle] = useState(false);
  const [data, setdata] = useState([]);
  const [profile, setprofile] = useState({});
  const [appoint, setappoint] = useState([]);
  useEffect(() => {
    const fetchData = async () => {

      let data2 = await getprofile(search);
      let data1 = await userpost();
      let data3 = await userappoint();
      setappoint(data3.data);
      setdata(data1.data)
      setprofile(data2.data);
    }
    fetchData();

  }, [search, toggle]);

  const addappoint = async () => {
    const initialval = {
      name: profile.name,
      phone: profile.phone,
      email: profile.email,
      address: profile.address,
      date: new Date().toLocaleDateString(),

    }
    await createappointt(initialval);
    swal({
      title: "Success!!",
      text: "You appointment is initiated!",
      icon: "success",
      button: "Aww yiss!",
    });
    settoggle(prev => !prev);
  }
  return (
    <>
      <div className={classes.donatebox}>
        <p className={classes.para}>Become a donor and save a life!</p>
        <button className={classes.bottom} onClick={() => { addappoint() }}>Donate</button>
      </div>

      <Box className={classes.container}>
        <p className={classes.heading}>Appointments</p>
        <hr className={classes.line} />
        <div style={{ overflowX: "scroll"  }}>

          <table className={classes.table}>
            <tr style={{ borderBottom: "0.1px solid black" }}>
              <th className={classes.th}>Name</th>
              <th className={classes.th}>Phone</th>
              <th className={classes.th}>Address</th>
              <th className={classes.th}>Date</th>
              <th className={classes.th}>Action</th>
            </tr>
            {appoint.map(function (val, ind) {
              return <Appoint1 post={val} ind={ind} settoggle={settoggle} toggle={toggle} />

            })
            }


          </table>
        </div>


        <p className={classes.heading}>Bookings</p>
        <hr className={classes.line} />
        <div style={{ overflowX: "scroll" }}>
          <table className={classes.table}>
            <tr style={{ borderBottom: "1px solid black" }}>
              <th className={classes.th}>Name</th>
              <th className={classes.th}>Phone</th>
              <th className={classes.th}>Group</th>
              <th className={classes.th}>Date</th>
              <th className={classes.th}>Action</th>
            </tr>
            {data.map(function (val, ind) {
              // console.log(ind);
              return <Post1 post={val} ind={ind} settoggle={settoggle} toggle={toggle} />

            })
            }


          </table>
        </div>
      </Box>
      <Box><p style={{ textAlign: "center" }}>Copyright © 2021. All Rights Reserved.</p></Box>
    </>
  );
};
export default Dashboard;
