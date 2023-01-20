const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10
const jwt = require('jsonwebtoken');
const monment = require("moment");

const userSchema = mongoose.Schema()


module.exports = {User}