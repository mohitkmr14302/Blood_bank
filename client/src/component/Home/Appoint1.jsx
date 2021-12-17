import React from "react";
import { makeStyles } from "@material-ui/core";
import { deleteappointment } from "../../service/api";
import swal from 'sweetalert';
const useStyle = makeStyles({
   
    container: {
        backgroundColor: '#3f6c5d',
        margin: '3rem',
    },
    button: {
        backgroundColor: '#3f8598',
        color: 'white',
        height: '2rem',
        cursor: 'pointer',
        borderRadius: 2,
        padding: 5,
        border: '2px solid green'
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
        padding: "1em",
        width: "5em",
        height: "3em",
        cursor: "pointer",
        borderRadius: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
        backgroundColor: "#ffffff",
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: "black",
            color: "white"
        }
    },
    tr: {
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: "black",
        }
    }
});
const Appoint1 = ({ post, ind, settoggle, toggle }) => {

    const deleteappoint = async () => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, Your appointment cancelled!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
            deleteappointment(post._id);
            settoggle(prev => !prev);
              swal("Your appointment cancelled!", {
                icon: "success",
              });
            } 
          });
       
        // window.alert('Deletion successfully !!');
    }
    const classes = useStyle();
    if (ind % 2 === 0) {
        return (
            <>
                <tr style={{ backgroundColor: "#f2f2f2" }}>
                    <td className={classes.th}>{post.name}</td>
                    <td className={classes.th}>{post.phone}</td>
                    <td className={classes.th}>{post.address}</td>
                    <td className={classes.th}>{new Date(post.date).toDateString()}</td>
                    <td className={classes.th}><button onClick={() => deleteappoint()} className={classes.bottom}>Delete</button></td>
                </tr>

            </>
        );
    } else {
        return (
            <>
                <tr >
                    <td className={classes.th}>{post.name}</td>
                    <td className={classes.th}>{post.phone}</td>
                    <td className={classes.th}>{post.address}</td>
                    <td className={classes.th}>{new Date(post.date).toDateString()}</td>
                    <td className={classes.th}><button onClick={() => deleteappoint()} className={classes.bottom}>Delete</button></td>
                </tr>

            </>
        );
    }
}
export default Appoint1;