const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Create a new user
router.post('/', async (req, res) => {
  const user = new User({
    name: req.body.name,
    age: req.body.age,
    nationality: req.body.nationality,
    specification: req.body.specification
  });

  try {
    const newUser = await user.save(); // Save the new user to the database
    res.status(201).json(newUser); // Respond with the created user
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users
    res.json(users); // Respond with the list of users
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a specific user by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Update user
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a specific user by ID
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id); // Delete user
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// get a user by id
router.get('/:id',async(req,res)=>{
  try{
    const user=await User.findById(req.params.id);
    if(!user){
      return res.status(404).json({message:"user not found"})
    }
    res.json(user);
  }catch(err){
    res.status(500).json({message:err.message})
  }
});
module.exports = router;
