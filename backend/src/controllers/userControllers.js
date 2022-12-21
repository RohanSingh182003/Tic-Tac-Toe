const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");
const userModel = require("../models/userModel");

// declear variables
const JWTSecretKey = process.env.JWTSecretKey || "SecretKey";
const passwordEncrypt =
  process.env.passwordEncrypt || "SecretPasswordEncryptKey";

const getUsers = async (req, res) => {
  try {
    let users = await userModel.find();
    res.send(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getUser = async (req, res) => {
  let _id = req.params.id;
  try {
    let user = await userModel.findOne({ _id });
    if (user) return res.status(200).send(user);
    res.status(401).send("user not found!");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const addUser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let { name, username, email, password } = req.body;
    const existingUser = await userModel.findOne({ username, email });
    if (existingUser) return res.status(500).send("user already exists");
    // Encrypt
    const encryptedPassword = CryptoJS.AES.encrypt(
      password,
      passwordEncrypt
    ).toString();
    const token = jwt.sign({ username, encryptedPassword }, JWTSecretKey);
    let response = await userModel.create({
      name,
      username,
      email,
      password: encryptedPassword,
      token,
    });
    res.status(200).send({ response, token });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    let _id = req.params.id;
    let user = await userModel.findOne({ _id });
    if (!user) return res.status(401).send(user);
    let password = req.body.password;
    const encryptedPassword = CryptoJS.AES.encrypt(
      password,
      passwordEncrypt
    ).toString();
    let response = await userModel.findByIdAndUpdate(
      { _id },
      { password: encryptedPassword }
    );
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    let _id = req.params.id;
    const existingUser = await userModel.findOne({ _id });
    if (!existingUser) return res.status(500).send("user doesn't exists");
    let respnse = await userModel.findByIdAndDelete({ _id });
    res.status(200).send(respnse);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getUsers, addUser, deleteUser, getUser, updateUser };
