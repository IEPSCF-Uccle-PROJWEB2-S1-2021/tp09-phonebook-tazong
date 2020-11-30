const express = require('express');
const { body, validationResult } = require('express-validator');
const { restart } = require('nodemon');
const router = new express.Router();

class user {
  constructor(lastName,firstName,birthDate,phoneNumber,emailAddress){
    this.lastName = lastName;
    this.firstName = firstName;
    this.birthDate = birthDate;
    this.phoneNumber = phoneNumber;
    this.emailAddress = emailAddress;
  }
}

const users = [
  new user ('Thoumamo', 'valeri', '19/03/1999', '0455581215', 'valeri@yahoo.fr'),
  new user ('Ngatchou', 'vanol', '01/03/2000', '0455581215', 'vanolnga@yahoo.fr'),
  new user ('Tazong', 'francklin', '11/11/1985', '0453381215', 'francklindjo@yahoo.fr'),
];

const router = new express.Router();
