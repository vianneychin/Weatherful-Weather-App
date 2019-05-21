const express = require('express');
const router = express.Router();

const User = require('../models/User')

router.get('/:name', async (req, res) => {
    try {
      const foundUser = await User.findOne({username: req.params.name})
      if(foundUser) {
        res.json({
          user: foundUser
        })
      } else {
        const createdUser = await User.create({username: req.params.name})
        res.json({
          user: createdUser
        })
      } 
    } catch(err) {
      res.json(err)
    }

/* GET users listing. */
router.get('/', (req, res) => {
  return res.json({data:'Received a GET HTTP method users'});
});

router.post('/', async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.json({user})
  } catch(err) {
    res.json({err})
  }
})
router.post("/users/login", async(req,res)=>{
  const foundUser = await User.find({name:req.body.name})
  res.json({
    data:foundUser,
    success: true
  })
})
})

module.exports = router;
