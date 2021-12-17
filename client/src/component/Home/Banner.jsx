import { Box, makeStyles } from "@material-ui/core";
const Banner = () => {
    const useStyle = makeStyles({
        image: {
            display: "block",
            background: `url(${"https://redgold.herokuapp.com/static/media/home.9fd0a4f1.svg"}) center/100% no-repeat`,
            height: 400,
            maxWidth: 400,
            margin: "0 auto",
        },
        container: {

        },
        text1: {
            fontWeight: 300,
            fontSize: '5rem',
            margin: 10,
            lineHeight: 1.2,
            textAlign: 'center'
        },
        text2: {
            fontWeight: 300,
            fontSize: '3rem',
            margin: 10,
            lineHeight: 1.2,
            textAlign: 'center'
        }
    });
    const classes = useStyle();
    return (
        <Box className={classes.container}>

            <Box className={classes.image}>
            </Box>
            <Box >
                <p className={classes.text1}>Welcome to Redgold</p>
                <p className={classes.text2}>The Online Blood Bank</p>
                <p style={{ textAlign: 'center' }}>Copyright © 2021. All Rights Reserved.</p>
            </Box>
        </Box>
    )
}
export default Banner;