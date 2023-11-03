const jwt = require("jsonwebtoken");

const authorizationMiddleware = {
    authUser: async (req, res, next) => {
        const authHeader = req.headers.authorization;
        let token = authHeader.split(" ")[1];
        token = token.toString();
        if (!token) {
            req.authenticated = false;
            return res.status(401).json({msg: 'unauthorized'});
        }
        else {
            jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, decoded) => {
                if (err) {
                    return res.status(500).json ({msg: err.message});
                }
                req.user= decoded;
                req.authenticated = true;
                next();
            });
        }
    }
};

module.exports = authorizationMiddleware;