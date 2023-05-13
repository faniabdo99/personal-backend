const express = require('express')
const router = express.Router();
const ContactRequestModel = require('../models/ContactRequest')

const handleErrors = (err, res) => {
      // Return a success
      if(err.name == 'SequelizeValidationError'){
        // Map and return the errors
        const errors = err.errors.map(error => error.message)
        return res.json({
                success: false,
                message: errors
            })
    }else{
        // Return a generic error
        return res.json({
                success: false,
                message: 'The contact request was not saved'
            })
    }
}


// Get all contact requests
router.get('/' , (req, res) => {
    // Get all contact requests
    ContactRequestModel.findAll()
        .then((data) => {
            return res.json({
                success: true,
                data: data,
                count: data.length
            })
        })
        .catch((err) => {
            handleErrors(err, res)
        })
})

// Create a post request
router.post('/', (req, res) => {

	console.log(req.body)
    ContactRequestModel.create(req.body)
    .then(() => {
        // Return a success
        res.json({
            success: true,
            message: 'The contact request has been saved'
        })
    })
    .catch(err => {
        // Return a success
        handleErrors(err, res)
    })
})

// Update a contact request
router.put('/:id', (req, res) => {
    // Fetch the record by id
    ContactRequestModel.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(() => {
        // Return a success
        res.json({
            success: true,
            message: 'The contact request has been updated'
        })
    })
    .catch(err => {
        handleErrors(err, res)
    })

});

// Delete a contct request
router.delete((req, res) => {
    ContactRequestModel.destroy({
        where: { id: req.id}
    })
    .then(() => {
        // Return a success response
        res.json({
            success: true,
            message: 'The contact request has been deleted'
        })
    })
    .catch((err) => {
        handleErrors(err, res)
    })
})

module.exports = router
