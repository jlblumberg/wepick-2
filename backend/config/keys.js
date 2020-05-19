const mongoURI = () => { 
  if ( process.env.NODE_ENV === 'development' ) { 
    console.log(`mongodb+srv://${process.env.MONGO_DB_CREDS}:${process.env.MONGO_DB_CREDS}@wepick-2-g6h3l.mongodb.net/test?retryWrites=true&w=majority`)
    return `mongodb+srv://${process.env.MONGO_DB_CREDS}:${process.env.MONGO_DB_CREDS}@wepick-2-g6h3l.mongodb.net/test?retryWrites=true&w=majority`  
  } else if ( process.env.NODE_ENV === 'test') {
    return 'mongodb://localhost/testDatabase'
  } else {
    return 'otherwise'
  }
} 

const port = () => {
  if (process.env.NODE_ENV === 'test') {
    return 5000;
  } else if (process.env.NODE_ENV === 'development') {
    return 3000;
  } else {
    return process.env.PORT;
  }
}

module.exports = {
  mongoURI: mongoURI(),
  port: port(),
  secretOrKey: "secret"
}
