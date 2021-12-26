const res = require('express/lib/response')

const router = require('express').Router()
const places = require('../Models/places.js')

router.get('/', (req, res) => {
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'Images/H-Thai-M-L logo.png'
  }, {
    name: 'Burger King',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/Images/Burger King.png'
  }, {
    name: 'Applebees',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/Images/Applebees.jpeg'
  } ,  {
    name: 'Sarvanana Bhavan',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/Images/Sarvanana Bhavan.png'
  },  {
    name: 'Veggie Grill',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/Images/Veggie Grill.gif'
  }
]
    res.render('places/index', {places})
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

  router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  })

module.exports =  router