import Post from "../schema/post-schema.js";
import Profile from "../schema/profile-schema.js";
import jwt from 'jsonwebtoken';
export const createpost = async (req, res) => {
    try {
        const post = await new Post(req.body);
        post.save();

        res.status(200).json('appointment created successfully');
    } catch (error) {
        res.status(500).json(error)
    }
}

export const userpost = async (req, res) => {
    try {
        const token1 = req.cookies['jwt'];
        const verifyuser = jwt.verify(token1, "mynameismohitkumarfromnationalinstituteoftechnologyagartala");
        const user = await Profile.findOne({ _id: verifyuser._id });
        let post = await Post.find({ email: user.email });
        res.status(200).json(post);

    } catch (error) {
        res.status(500).json(error)
    }
}

export const deletepost = async (req, res) => {
    try {
        let post = await Post.findById(req.params.id);
        await post.delete();
        res.status(200).json('deleted successfully');
    } catch (error) {
        res.status(500).json(error);
    }
}