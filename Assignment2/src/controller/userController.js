const User = require("../models/userModel");

const registerUser = async (req, res) => {
    const { email, password , username} = req.body;

    if(!email || !password || !username){
        res.status(400).json({ message: 'All fields are required' });
        return 
    }


    const existingUser = await User.findOne({ email });
    if (existingUser) {
         res.status(400).json({ message: 'Email already in use' });
         return
    }

    const user = new User({ email, password , username});
    try {
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


const loginUser = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
};





module.exports = {registerUser, loginUser}