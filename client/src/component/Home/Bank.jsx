import { Box, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getprofile, createpost } from "../../service/api";
import { useLocation } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
const Bank = () => {
  const useStyle = makeStyles({
    container: {
      margin: "2em 15em",
      "@media (max-width: 900PX)": {
        margin: "1em 1em",
      }
    },
    heading: {
      fontSize: "2rem",
      margin: "10px 0",
    },
    searchdiv: {
      margin: "10px 0px",display: "flex"
    },
    searchbox: {
      borderRadius: 4,
      padding: "0.375rem 0.75rem",
      fontSize: "1rem",
      fontWeight: "400",
      lineHeight: "1.5",
      backgroundColor: "#fff",
      backgroundClip: "padding-box",
      border: "1px solid #e0e4e8",
      transition: "border-color .15s",
    },
    searchbox1: {
      borderRadius: 4,
      padding: "0.375rem 0.75rem",
      fontSize: "1rem",
      fontWeight: "400",
      lineHeight: "1.5",
      color: "#68def6",
      backgroundColor: "#fff",
      backgroundClip: "padding-box",
      border: "1px solid #68def6",
      transition: "border-color .15s",
      margin: "0 0 0 20px", 
      cursor: "pointer",
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: "#68def6",
        color: "black"
      }
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
      borderBottom: " 1px solid #e7eaed",
      textAlign: "left",
      padding: 8,
      borderColor: "inherit",
      borderStyle: "solid",
      borderWidth: 0
    },
    bottom: {
      padding: "0.5em",
      width: "5em",
      height: "3em",
      cursor: "pointer",
      borderRadius: 4,
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: "black",
        color: "white"
      }
    },
    hello: {
      textAlign: "center",
      fontSize: "1.5em",
      color: "red"
    }
  });
  const initialval = {
    name: "",
    phone: "",
    group: "",
    email: "",
    date: new Date().toLocaleDateString()
  }
  const classes = useStyle();
  const { search } = useLocation();
  const [data, setdata] = useState({});
  const [book, setbook] = useState(initialval);
  const [val, setval] = useState('');
  const [val1, setval1] = useState('');
  // const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      let data2 = await getprofile(search);
      setdata(data2.data);
    }
    fetchData();

  }, [search]);
  const updatechange = (e) => {
    setval(e.target.value);
  }
  const searchval = () => {
    setval1(val);
    console.log(val);
    console.log(val1);
  }
  const savebooking = async (x) => {
    book.name = data.name;
    book.email = data.email;
    book.phone = data.phone;
    if (x === 1) book.group = "B-";
    else if (x === 2) book.group = "B+";
    else if (x === 3) book.group = "A+";
    else if (x === 4) book.group = "A-";
    else if (x === 5) book.group = "O+";
    else if (x === 6) book.group = "O-";
    else if (x === 7) book.group = "AB+";
    else if (x === 8) book.group = "AB-";
    await createpost(book);
    // navigate('/dashboard');
    swal({
      title: "Sucess!",
      text: "Your booking initiated!",
      icon: "success",
      button: "Ok",
    });
  }
  if (val1 === '') {

    return (
      <Box className={classes.container}>
        <p className={classes.heading}>Blood Bank</p>
        <hr className={classes.line} />
        <div className={classes.searchdiv}>

          <input className={classes.searchbox} type="text" name="name" onChange={(e) => { updatechange(e) }} placeholder="Group (e.g. B+)" />
          <input className={classes.searchbox1} type="submit" onClick={(e) => { searchval(e) }} value="Search" />
        </div>
        <hr className={classes.line} />
        <table className={classes.table}>
          <tr style={{ borderBottom: "1px solid black" }}>
            <th style={{ borderBottom: "1px solid black" }} className={classes.th}>Group</th>
            <th style={{ borderBottom: "1px solid black" }} className={classes.th}>Price</th>
            <th style={{ borderBottom: "1px solid black" }} className={classes.th}>Quantity</th>
            <th style={{ borderBottom: "1px solid black" }} className={classes.th}>Action</th>
          </tr>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <td className={classes.th}>B-</td>
            <td className={classes.th}>Rs. 2000</td>
            <td className={classes.th}>500 ml</td>
            <td className={classes.th}><button onClick={() => savebooking(1)} className={classes.bottom}>Book</button></td>
          </tr>

          <tr>
            <td className={classes.th}>B+</td>
            <td className={classes.th}>Rs. 1000</td>
            <td className={classes.th}>500 ml</td>
            <td className={classes.th}><button onClick={() => savebooking(2)} className={classes.bottom}>Book</button></td>
          </tr>

          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <td className={classes.th}>A+</td>
            <td className={classes.th}>Rs. 1100</td>
            <td className={classes.th}>500 ml</td>
            <td className={classes.th}><button onClick={() => savebooking(3)} className={classes.bottom}>Book</button></td>
          </tr>

          <tr>
            <td className={classes.th}>A-</td>
            <td className={classes.th}>Rs. 1600</td>
            <td className={classes.th}>500 ml</td>
            <td className={classes.th}><button onClick={() => savebooking(4)} className={classes.bottom}>Book</button></td>
          </tr>

          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <td className={classes.th}>O-</td>
            <td className={classes.th}>Rs. 4000</td>
            <td className={classes.th}>500 ml</td>
            <td className={classes.th}><button onClick={() => savebooking(5)} className={classes.bottom}>Book</button></td>
          </tr>

          <tr>
            <td className={classes.th}>O+</td>
            <td className={classes.th}>Rs. 3600</td>
            <td className={classes.th}>500 ml</td>
            <td className={classes.th}><button onClick={() => savebooking(6)} className={classes.bottom}>Book</button></td>
          </tr>

          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <td className={classes.th}>AB+</td>
            <td className={classes.th}>Rs. 1250</td>
            <td className={classes.th}>500 ml</td>
            <td className={classes.th}><button onClick={() => savebooking(7)} className={classes.bottom}>Book</button></td>
          </tr>

          <tr>
            <td className={classes.th}>AB-</td>
            <td className={classes.th}>Rs. 1250</td>
            <td className={classes.th}>500 ml</td>
            <td className={classes.th}><button onClick={() => savebooking(8)} className={classes.bottom}>Book</button></td>
          </tr>

        </table>
        <p style={{ textAlign: "center" }}>Copyright © 2021. All Rights Reserved.</p>
      </Box>
    );
  } else if (val1 === 'A+') {
    return (
      <Box className={classes.container}>
        <p className={classes.heading}>Blood Bank</p>
        <hr className={classes.line} />
        <div className={classes.searchdiv}>

          <input className={classes.searchbox} type="text" name="name" onChange={(e) => { updatechange(e) }} placeholder="Group (e.g. B+)" />
          <input className={classes.searchbox1} type="submit" onClick={(e) => { searchval(e) }} value="Search" />
        </div>
        <hr className={classes.line} />
        <table className={classes.table}>
          <tr style={{ borderBottom: "1px solid black" }}>
            <th style={{ borderBottom: "1px solid black" }} className={classes.th}>Group</th>
            <th style={{ borderBottom: "1px solid black" }} className={classes.th}>Price</th>
            <th style={{ borderBottom: "1px solid black" }} className={classes.th}>Quantity</th>
            <th style={{ borderBottom: "1px solid black" }} className={classes.th}>Action</th>
          </tr>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <td className={classes.th}>A+</td>
            <td className={classes.th}>Rs. 1100</td>
            <td className={classes.th}>500 ml</td>
            <td className={classes.th}><button onClick={() => savebooking(3)} className={classes.bottom}>Book</button></td>
          </tr>

        </table>
        <p style={{ textAlign: "center" }}>Copyright © 2021. All Rights Reserved.</p>
      </Box>
    );
  }
  else if (val1 === 'A-') {
    return (
      <Box className={classes.container}>
        <p className={classes.heading}>Blood Bank</p>
        <hr className={classes.line} />
        <div className={classes.searchdiv}>

          <input className={classes.searchbox} type="text" name="name" onChange={(e) => { updatechange(e) }} placeholder="Group (e.g. B+)" />
          <input className={classes.searchbox1} type="submit" onClick={(e) => { searchval(e) }} value="Search" />
        </div>
        <hr className={classes.line} />
        <table className={classes.table}>
          <tr style={{ borderBottom: "1px solid black" }}>
            <th style={{ borderBottom: "1px solid black" }} className={classes.th}>Group</th>
            <th style={{ borderBottom: "1px solid black" }} className={classes.th}>Price</th>
            <th style={{ borderBottom: "1px solid black" }} className={classes.th}>Quantity</th>
            <th style={{ borderBottom: "1px solid black" }} className={classes.th}>Action</th>
          </tr>
          <tr>
            <td className={classes.th}>A-</td>
            <td className={classes.th}>Rs. 1600</td>
            <td className={classes.th}>500 ml</td>
            <td className={classes.th}><button onClick={() => savebooking(4)} className={classes.bottom}>Book</button></td>
          </tr>

        </table>
        <p style={{ textAlign: "center" }}>Copyright © 2021. All Rights Reserved.</p>
      </Box>
    );
  }
  else if (val1 === 'B+') {
    return (
      <Box className={classes.container}>
        <p className={classes.heading}>Blood Bank</p>
        <hr className={classes.line} />
        <div className={classes.searchdiv}>

          <input className={classes.searchbox} type="text" name="name" onChange={(e) => { updatechange(e) }} placeholder="Group (e.g. B+)" />
          <input className={classes.searchbox1} type="submit" onClick={(e) => { searchval(e) }} value="Search" />
        </div>
        <hr className={classes.line} />
        <table className={classes.table}>
          <tr style={{ borderBottom: "1px solid black" }}>
            <th style={{ borderBottom: "1px solid black" }} className={classes.th}>Group</th>
            <th style={{ borderBottom: "1px solid black" }} className={classes.th}>Price</th>
            <th style={{ borderBottom: "1px solid black" }} className={classes.th}>Quantity</th>
            <th style={{ borderBottom: "1px solid black" }} className={classes.th}>Action</th>
          </tr>
          <tr>
            <td className={classes.th}>B+</td>
            <td className={classes.th}>Rs. 1000</td>
            <td className={classes.th}>500 ml</td>
            <td className={classes.th}><button onClick={() => savebooking(2)} className={classes.bottom}>Book</button></td>
          </tr>


        </table>
        <p style={{ textAlign: "center" }}>Copyright © 2021. All Rights Reserved.</p>
      </Box>
    );
  }
  else if (val1 === 'B-') {
    return (
      <Box className={classes.container}>
        <p className={classes.heading}>Blood Bank</p>
        <hr className={classes.line} />
        <div className={classes.searchdiv}>

          <input className={classes.searchbox} type="text" name="name" onChange={(e) => { updatechange(e) }} placeholder="Group (e.g. B+)" />
          <input className={classes.searchbox1} type="submit" onClick={(e) => { searchval(e) }} value="Search" />
        </div>
        <hr className={classes.line} />
        <table className={classes.table}>
          <tr style={{ borderBottom: "1px solid black" }}>
            <th style={{ borderBottom: "1px solid black" }} className={classes.th}>Group</th>
            <th style={{ borderBottom: "1px solid black" }} className={classes.th}>Price</th>
            <th style={{ borderBottom: "1px solid black" }} className={classes.th}>Quantity</th>
            <th style={{ borderBottom: "1px solid black" }} className={classes.th}>Action</th>
          </tr>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <td className={classes.th}>B-</td>
            <td className={classes.th}>Rs. 2000</td>
            <td className={classes.th}>500 ml</td>
            <td className={classes.th}><button onClick={() => savebooking(1)} className={classes.bottom}>Book</button></td>
          </tr>

        </table>
        <p style={{ textAlign: "center" }}>Copyright © 2021. All Rights Reserved.</p>
      </Box>
    );
  }
  else if (val1 === 'O+') {
    return (
      <Box className={classes.container}>
        <p className={classes.heading}>Blood Bank</p>
        <hr className={classes.line} />
        <div className={classes.searchdiv}>

          <input className={classes.searchbox} type="text" name="name" onChange={(e) => { updatechange(e) }} placeholder="Group (e.g. B+)" />
          <input className={classes.searchbox1} type="submit" onClick={(e) => { searchval(e) }} value="Search" />
        </div>
        <hr className={classes.line} />
        <table className={classes.table}>
          <tr style={{ borderBottom: "1px solid black" }}>
            <th style={{ borderBottom: "1px solid black" }} className={classes.th}>Group</th>
            <th style={{ borderBottom: "1px solid black" }} className={classes.th}>Price</th>
            <th style={{ borderBottom: "1px solid black" }} className={classes.th}>Quantity</th>
            <th style={{ borderBottom: "1px solid black" }} className={classes.th}>Action</th>
          </tr>
          <tr>
            <td className={classes.th}>O+</td>
            <td className={classes.th}>Rs. 3600</td>
            <td className={classes.th}>500 ml</td>
            <td className={classes.th}><button onClick={() => savebooking(6)} className={classes.bottom}>Book</button></td>
          </tr>

        </table>
        <p style={{ textAlign: "center" }}>Copyright © 2021. All Rights Reserved.</p>
      </Box>
    );
  }
  else if (val1 === 'O-') {
    return (
      <Box className={classes.container}>
        <p className={classes.heading}>Blood Bank</p>
        <hr className={classes.line} />
        <div className={classes.searchdiv}>

          <input className={classes.searchbox} type="text" name="name" onChange={(e) => { updatechange(e) }} placeholder="Group (e.g. B+)" />
          <input className={classes.searchbox1} type="submit" onClick={(e) => { searchval(e) }} value="Search" />
        </div>
        <hr className={classes.line} />
        <table className={classes.table}>
          <tr style={{ borderBottom: "1px solid black" }}>
            <th style={{ borderBottom: "1px solid black" }} className={classes.th}>Group</th>
            <th style={{ borderBottom: "1px solid black" }} className={classes.th}>Price</th>
            <th style={{ borderBottom: "1px solid black" }} className={classes.th}>Quantity</th>
            <th style={{ borderBottom: "1px solid black" }} className={classes.th}>Action</th>
          </tr>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <td className={classes.th}>O-</td>
            <td className={classes.th}>Rs. 4000</td>
            <td className={classes.th}>500 ml</td>
            <td className={classes.th}><button onClick={() => savebooking(5)} className={classes.bottom}>Book</button></td>
          </tr>

        </table>
        <p style={{ textAlign: "center" }}>Copyright © 2021. All Rights Reserved.</p>
      </Box>
    );
  }
  else if (val1 === 'AB+') {
    return (
      <Box className={classes.container}>
        <p className={classes.heading}>Blood Bank</p>
        <hr className={classes.line} />
        <div className={classes.searchdiv}>

          <input className={classes.searchbox} type="text" name="name" onChange={(e) => { updatechange(e) }} placeholder="Group (e.g. B+)" />
          <input className={classes.searchbox1} type="submit" onClick={(e) => { searchval(e) }} value="Search" />
        </div>
        <hr className={classes.line} />
        <table className={classes.table}>
          <tr style={{ borderBottom: "1px solid black" }}>
            <th style={{ borderBottom: "1px solid black" }} className={classes.th}>Group</th>
            <th style={{ borderBottom: "1px solid black" }} className={classes.th}>Price</th>
            <th style={{ borderBottom: "1px solid black" }} className={classes.th}>Quantity</th>
            <th style={{ borderBottom: "1px solid black" }} className={classes.th}>Action</th>
          </tr>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <td className={classes.th}>AB+</td>
            <td className={classes.th}>Rs. 1250</td>
            <td className={classes.th}>500 ml</td>
            <td className={classes.th}><button onClick={() => savebooking(7)} className={classes.bottom}>Book</button></td>
          </tr>

        </table>
        <p style={{ textAlign: "center" }}>Copyright © 2021. All Rights Reserved.</p>
      </Box>
    );
  }
  else if (val1 === 'AB-') {
    return (
      <Box className={classes.container}>
        <p className={classes.heading}>Blood Bank</p>
        <hr className={classes.line} />
        <div className={classes.searchdiv}>

          <input className={classes.searchbox} type="text" name="name" onChange={(e) => { updatechange(e) }} placeholder="Group (e.g. B+)" />
          <input className={classes.searchbox1} type="submit" onClick={(e) => { searchval(e) }} value="Search" />
        </div>
        <hr className={classes.line} />
        <table className={classes.table}>
          <tr style={{ borderBottom: "1px solid black" }}>
            <th style={{ borderBottom: "1px solid black" }} className={classes.th}>Group</th>
            <th style={{ borderBottom: "1px solid black" }} className={classes.th}>Price</th>
            <th style={{ borderBottom: "1px solid black" }} className={classes.th}>Quantity</th>
            <th style={{ borderBottom: "1px solid black" }} className={classes.th}>Action</th>
          </tr>
          <tr>
            <td className={classes.th}>AB-</td>
            <td className={classes.th}>Rs. 1250</td>
            <td className={classes.th}>500 ml</td>
            <td className={classes.th}><button onClick={() => savebooking(8)} className={classes.bottom}>Book</button></td>
          </tr>

        </table>
        <p style={{ textAlign: "center" }}>Copyright © 2021. All Rights Reserved.</p>
      </Box>
    );
  } else {
    return (
      <Box className={classes.container}>
        <p className={classes.heading}>Blood Bank</p>
        <hr className={classes.line} />
        <div className={classes.searchdiv}>

          <input className={classes.searchbox} type="text" name="name" onChange={(e) => { updatechange(e) }} placeholder="Group (e.g. B+)" />
          <input className={classes.searchbox1} type="submit" onClick={(e) => { searchval(e) }} value="Search" />
        </div>
        <hr className={classes.line} />
        <table className={classes.table}>


          <div className={classes.hello}>*No blood group available.</div>

        </table>
        <p style={{ textAlign: "center" }}>Copyright © 2021. All Rights Reserved.</p>
      </Box>
    );

  }
};
export default Bank;
