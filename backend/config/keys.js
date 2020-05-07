const mongoURI = () => { 
  if ( process.env.NODE_ENV === 'development' ) { 
    return "mongodb+srv://new-user_1:new-user_1@wepick-2-g6h3l.mongodb.net/test?retryWrites=true&w=majority"  
  } else if ( process.env.NODE_ENV === 'test') {
    return 'mongodb://localhost/testDatabase'
  } else {
    return 'otherwise'
  }
} 

const port = () => {
  if (process.env.NODE_ENV === 'test') {
    return 27017;
  } else if (process.env.NODE_ENV === 'development') {
    return 3000;
  } else {
    return process.env.PORT;
  }
}

module.exports = {
  mongoURI: mongoURI(),
  port: port()
}
