const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const chai = require('chai');
const expect = chai.expect;

// Create a new schema that accepts a 'user' object.
// 'username' is a required field
const testSchema = new Schema({
  username: { type: String, required: true }
});

// Create a new collection called 'User'
const User = mongoose.model('User', testSchema);
describe('Database tests', function () {
  // Before starting the test, create a sandboxed database connection
  // Once a connection is established invoke done()

  before(function (done) {
    mongoose.connect('mongodb://localhost/testDatabase', { useNewUrlParser: true, useUnifiedTopology: true } );
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', function () {
      console.log('We are connected to test database!');
      done();
    });
  });

  describe('Test Database', function () {
    // Save object with 'username' value of 'Mike"

    it('New user saved to test database', function (done) {
      var testUser = User({
        username: 'Mike'
      });
      testUser.save(done);
    });

    it('Doesn\'t save incorrect format to database', function (done) {
      // Attempt to save with wrong info. An error should trigger.
      var wrongSave = User({
        notUsername: 'Not Mike'
      });
      wrongSave.save(err => {
        if (err) { return done(); }
        throw new Error('Should generate error!');
      });
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