
import Post from "../schema/appoint-schema.js";
import appoint from '../schema/appoint-schema.js';
import Profile from "../schema/profile-schema.js";
import jwt from 'jsonwebtoken';

export const createappointt = async (req, res) => {
    try {
        const post = await new Post(req.body);
        post.save();

        res.status(200).json('blog saved successfully');
    } catch (error) {
        res.status(500).json(error)
    }
}

export const userappoint = async (req, res) => {
    try {
        const token1 = req.cookies['jwt'];
        const verifyuser = jwt.verify(token1, process.env.SECRET_KEY);
        const user = await Profile.findOne({ _id: verifyuser._id });
        let post = await appoint.find({ email: user.email });
        res.status(200).json(post);

    } catch (error) {
        res.status(500).json(error)
    }
}

export const deleteappointment = async (req, res) => {
    try {
        let post = await appoint.findById(req.params.id);
        await post.delete();
        res.status(200).json('Blog updated successfully');
    } catch (error) {
        res.status(500).json(error);
    }
}