const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const chai = require('chai');
const expect = chai.expect;

const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

// Create a new schema that accepts a 'user' object.
// 'username' is a required field
const testSchema = new Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  password2: { type: String, required: true }
});

// Create a new collection called 'User'
const User = mongoose.model('User', testSchema);
describe('Database tests', function () {
  // Before starting the test, create a sandboxed database connection
  // Once a connection is established invoke done()

  before(function (done) {
    const uri = require("../config/keys").mongoURI;
    
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true } );
    const db = mongoose.connection
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', function () {
      console.log('We are connected to test database!');
      done();
    });
  });

  describe('Test Usernames', function () {
    // Save object with 'username' value of 'Mike"

    it('New user saved to test database', function (done) {
      var testUser = User({
        email: 'mike@example.com', 
        username: 'Mike',
        password: 'Mike123',
        password2: 'Mike123'
      });
      testUser.save(done);
    });

    it('Doesn\'t save user to database when all fields are not completed', function (done) {
      var wrongSave = User({
        username: 'Mike'
      });
      wrongSave.save(err => {
        if (err) { return done(); }
        throw new Error('Should generate error!');
      });
    });

    it('Doesn\'t save user with invalid email', function (){
      var wrongSave = User({
        username: 'Mike',
        email: 'mike.com',
        password: 'Mike123',
        password2: 'Mike123'
      });
      const { errors } = validateRegisterInput(wrongSave);
      expect(errors.email).to.equal('Email is invalid')
    });

    it('Should retrieve data from test database', function (done) {
      // Look up the 'Mike' user previously saved.
      User.find({ username: 'Mike' }, (err, username) => {
        if (err) { throw err; }
        if (username.length === 0) { throw new Error('No data!'); }
        done();
      });
    });
  });

  // After all tests are finished drop database and close connection
  after(function (done) {
    mongoose.connection.db.dropDatabase(function () {
      mongoose.connection.close(done);
    });
  });
  
});
