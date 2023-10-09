var DataTypes = require("sequelize").DataTypes;
var _Cardetails = require("./Cardetails");
var _Employee = require("./Employee");
var _carrent = require("./carrent");
var _cartable = require("./cartable");
var _company = require("./company");
var _company2 = require("./company2");
var _dicetable = require("./dicetable");
var _extable = require("./extable");
var _rolltable = require("./rolltable");
var _sales = require("./sales");
var _slicetable = require("./slicetable");
var _studentdetails = require("./studentdetails");
var _studentstipend = require("./studentstipend");
var _users = require("./users");

function initModels(sequelize) {
  var Cardetails = _Cardetails(sequelize, DataTypes);
  var Employee = _Employee(sequelize, DataTypes);
  var carrent = _carrent(sequelize, DataTypes);
  var cartable = _cartable(sequelize, DataTypes);
  var company = _company(sequelize, DataTypes);
  var company2 = _company2(sequelize, DataTypes);
  var dicetable = _dicetable(sequelize, DataTypes);
  var extable = _extable(sequelize, DataTypes);
  var rolltable = _rolltable(sequelize, DataTypes);
  var sales = _sales(sequelize, DataTypes);
  var slicetable = _slicetable(sequelize, DataTypes);
  var studentdetails = _studentdetails(sequelize, DataTypes);
  var studentstipend = _studentstipend(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);


  return {
    Cardetails,
    Employee,
    carrent,
    cartable,
    company,
    company2,
    dicetable,
    extable,
    rolltable,
    sales,
    slicetable,
    studentdetails,
    studentstipend,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
