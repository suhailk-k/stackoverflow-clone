import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
  try {
    const token =
      req.headers.authorization &&
      req.headers.authorization.split('Bearer ')[1];
    // const token = req.headers.authorization.split('Bearer ')[1]

    // console.log(process.env.JWT_SECRET, token);
    let decodeData = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decodeData?.id;
    next();
  } catch (error) {
    console.log(error);
  }
};
export default auth;
