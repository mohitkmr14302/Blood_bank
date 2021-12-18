
import jwt from 'jsonwebtoken';
import profile from '../schema/profile-schema.js';


const auth = async (req, res, next) => {
    try {

        const token = req.cookies['jwt'];
        const verifyuser = jwt.verify(token, process.env.SECRET_KEY);
        const user = await profile.findOne({ _id: verifyuser._id });

        req.user = user;
        req.token = token;
        next();
    } catch (error) {
        res.status(401).json(error);
    }
}

export default auth;