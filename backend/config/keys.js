module.exports = {
  
  mongoURI : () => { 
    if ( process.env.NODE_ENV === 'development' ) { 
      return "mongodb+srv://new-user_1:new-user_1@wepick-2-g6h3l.mongodb.net/test?retryWrites=true&w=majority"  
   } else if ( process.env.NODE_ENV === 'test') {
     return 'mongodb://localhost/testDatabase'
   } else {
     return // return production URI
   }
  } 

}

 