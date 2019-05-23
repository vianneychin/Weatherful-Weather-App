const express = require('express');
const router = express.Router();
const fetch = require('node-fetch')


router.get('/', async (req, res) => {
  
  try {
    const weather = await fetch( "https://api.darksky.net/forecast/bed695cbee335748582f13a6271e393e/34.053691,-118.242767")
    console.log('hit')
    const weatherJson = await weather.json()
    // console.log(weatherJson)
    return res.json({
      data: weatherJson,
      success: true
    })
  } catch(err){
    console.log(err)
  }
});
router.post('/', (req, res) => {
})
router.put('/', (req, res) => {
  return res.json({data:'Received a PUT HTTP method'})
})
router.delete('/', (req, res) => {
  return res.json({data:'Received a DELETE HTTP method'})
})

module.exports = router