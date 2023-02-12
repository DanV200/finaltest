const express=require('express')
const router=express.Router()
const {User}=require('../model/User')

//get all user
router.get('/',async  (req, res) => {
 const allusers=await User.find();
 res.status(200).send(allusers);

})
//getuserbyName
router.get('/',async  (req, res) => {
  console.log(name)
const {name}=req.body
  const user=await User.find(name);
  res.status(200).send(user);
})



//add new user 
router.post('/signin',async  (req, res) => {
  const {id,name,password,balance}=req.body
  User.findOne({ name })
        .then(user => {
            if (!user) return res.status(400).json({ message: 'User not found' });
})
})


module.exports=router