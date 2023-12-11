// const express = require("express");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error("User is not authorized");
      }
      req.session.user = decoded.user;
      console.log("session from decoded",req.session.user.id);

      console.log("decodeddd",decoded);
      req.user = decoded.user;
      next();
    });
    if (!token) {
      res.status(401);
      throw new Error("Token is missing or User is not Authorized");
    }
  }
});

module.exports = validateToken;
