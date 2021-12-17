import { AppBar, Toolbar, Typography, makeStyles, Box } from '@material-ui/core';
import { NavLink } from "react-router-dom";
import { logout } from '../service/api';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { usercontext } from '../App';
import { FaBars } from 'react-icons/fa';
import { useEffect, useState } from 'react';
const useStyle = makeStyles({
    container: {
        background: "black",
        position: "inherit"
    },
    component: {
        display: "flex",
        "@media (max-width: 900px)": {
            display: "block"
        }
    },
    leftbox: {
        display: "flex",
        '&> *': {
            padding: 20
        },
        "@media (max-width: 900px)": {
            display: "block",
        }
    },
    rightbox1: {
        display: "flex",
        justifyContent: "space-between",
        '&> *': {
            padding: 0
        },
        "@media (max-width: 900px)": {
            margin: " 0px -12px",
            justifyContent: "flex-start",
        }
    },
    rightbox: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        '&> *': {
            padding: 0
        },
        "@media (max-width: 900px)": {
            margin: " 0px -12px",
            display: "block"
        }
    },
    innerbox1: {
        display: "flex",
        "@media (max-width: 900px)": {
            display: "block",
            '&> *': {
                borderBottom: "1px solid",
                margin: 0
            },
        }
    },
    innerbox2: {
        display: "flex",
    },
    btn1: {
        color: '#fff',
        backgroundColor: '#0d6efd',
        borderColor: '#0d6efd',
        margin: "12px 8px",
        padding: "8px",
        borderRadius: 4,
        cursor: "pointer",
        width: 82,
        textAlign: "center"
    },
    btn2: {
        color: '#fff',
        backgroundColor: '#dc3545',
        borderColor: '#dc3545',
        margin: "12px 8px",
        padding: "8px",
        borderRadius: 4,
        cursor: "pointer",
        width: 82,
        textAlign: "center"
    },
    link: {
        textDecoration: "none",
        color: "inherit",
        "&:hover": {
            color: "#b6d8f4",
        },

    },
    icon: {
        cursor: "pointer",
        height: '2.7em',
        width: '25px',
        display: "none",
        float: "right",
        marginRight: "40px",
        "@media (max-width: 900px)": {
            display: "block",
            marginTop: "20px"
        }
    },
    check: {
        display: "none",
        cursor: "pointer",
    },

})

const Header = () => {
    const [set, setset] = useState(true);
    const { state, dispatch } = useContext(usercontext);
    const navigate = useNavigate();

    useEffect(() => {
        const updateWindowDimensions = () => {
            const newHeight = window.innerWidth;
            if (newHeight < 900) {
                setset(false);
            } else {
                setset(true);
            }
        };
        updateWindowDimensions();

    }, []);
    function updateset(e) {
        setset(!set);
        console.log(set);
    }
    function updateset1() {
        if (window.innerWidth < 900) {
            console.log(set);
            if (set === true)
                setset(false);

            console.log(set);
        }
    }

    const trylogout = async () => {
        await logout();
        dispatch({ type: "USER", payload: false })
        navigate('/');
    }
    const classes = useStyle();

    if (state) {
        return (
            <AppBar className={classes.container}>
                <Toolbar className={classes.component}>
                    <Box className={classes.leftbox}>
                        <input type="checkbox" id="check" className={classes.check} onChange={(e) => { updateset(e) }} />
                        <label htmlFor="check">
                            <FaBars className={classes.icon} />
                        </label>
                        <NavLink className={classes.link} to={'/'}> <Typography>RedGold</Typography></NavLink>
                    </Box>
                    {set ?
                        <Box className={classes.rightbox}>
                            <Box className={classes.innerbox1}>
                                <Box><NavLink style={{ padding: "20px", display: "flex" }} onClick={() => updateset1()} className={classes.link} to={'/bank'}>Bank</NavLink> </Box>
                                <Box><NavLink style={{ padding: "20px", display: "flex" }} onClick={() => updateset1()} className={classes.link} to={'/profile'}>Profile</NavLink> </Box>
                            </Box>
                            <Box className={classes.innerbox2}>
                                <NavLink className={classes.link} to='/dashboard'><Typography onClick={() => updateset1()} className={classes.btn1}>Dashboard</Typography></NavLink>
                                <button className={classes.btn2} onClick={() => { trylogout(); updateset1() }}><Typography >Logout</Typography></button>
                            </Box>
                        </Box> : null}
                </Toolbar>
            </AppBar>
        );
    } else {
        return (
            <AppBar className={classes.container}>
                <Toolbar style={{ justifyContent: "space-between" }} className={classes.component}>
                    <Box className={classes.leftbox}>
                        <input type="checkbox" id="check" className={classes.check} onChange={(e) => { updateset(e) }} />
                        <label htmlFor="check">
                            <FaBars className={classes.icon} />
                        </label>
                        <NavLink className={classes.link} to={'/'}> <Typography>RedGold</Typography></NavLink>
                    </Box>
                    {set ?
                        <Box className={classes.rightbox1}>
                            <NavLink className={classes.link} onClick={() => updateset1()} to={'/login'}><Typography style={{ backgroundColor: '#198754' }} className={classes.btn2}>LogIn</Typography></NavLink>
                            <NavLink className={classes.link} onClick={() => updateset1()} to={'/register'}><Typography style={{ backgroundColor: '#0d6efd' }} className={classes.btn2}>Register</Typography></NavLink>

                        </Box> : null}
                </Toolbar>
            </AppBar>
        );
    }

}

export default Header;
