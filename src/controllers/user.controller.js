import User from "../models/user.model.js";
import bcrypt from "bcrypt";

const registerUser = async (req, res) => {

    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
    return res.status(400).json({
        message: "All fields are required",
    });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        return res.status(400).json({
            message: "User already exists",
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
    fullName,
    email,
    password: hashedPassword,
    });

    // console.log(fullName);
    // console.log(email);
    // console.log(password);

    const createdUser = await User.findById(user._id).select("-password");

    res.status(201).json({
        message: "User registered successfully",
        user: createdUser,
    });

};
export { registerUser };