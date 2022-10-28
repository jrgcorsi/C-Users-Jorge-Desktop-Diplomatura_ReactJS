
// mongoose npm i -S mongoose
// bcrypt-nodejs npm i bcryptp-nodejs

const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
});

// https://mongoosejs.com/docs/guide.html

userSchema.methods.encryptPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

userSchema.methods.comparePassword= function (password) {
  return bcrypt.compareSync(password, this.password); // Verdadero o Falso
};

module.exports = mongoose.model('user', userSchema);