const {
  models: { User },
} = require("../db");

const requireToken = async (req, res, next) => {
  try {
    
    //console.log('cookies :', req.cookies)
    //result of the console.log('cookies :', req.cookies)
    /* 
    req.cookies : {
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE5Mzc2MzM0fQ.Jbr0MN577u5KZOds1SG6U6TFXIKb8aDhZKwm9uqfeD0',
      io: '-FP82zbvRvBfL52HAAAC'
    } 
    */

    //if not use cookies
    const token = req.headers.authorization; 


    //use cookies to show result of api request on browser
    //const token = req.cookies.token 

    const user = await User.findByToken(token);
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

const isAdmin = (req, res, next) => {
  console.log("User is admin:  ===>", req.user.isAdmin);
  if (!req.user.isAdmin) {
    return res.status(403).send("Not authorized");
  } else {
    next();
  }
};

const isLoggedInUser = (req, res, next) => {
  if (req.user.id !== Number(req.params.id)) {
    return res.status(403).send("Please login to correct account.");
  } else {
    next();
  }
};

module.exports = {
  requireToken,
  isAdmin,
  isLoggedInUser,
};
