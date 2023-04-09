const express = require('express');
const router = express.Router();


const {createUser,getUserById,updateUserById,deleteUserById} = require('../controller/user.controller');

router.post('/',createUser);
router.get('/:id',getUserById);
router.put('/:id',updateUserById);
router.delete('/:id',deleteUserById);

module.exports = router;