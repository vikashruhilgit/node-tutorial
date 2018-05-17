var methods = {};

this.updatevar = 'hello';

this.updateServer = function () {
  console.log('initial method chwck.');
};

this.updateServer1 = function () {
  console.log('initial method chwck1.');
};

methods.updateServer2 = function () {
  console.log('initial method chwck2.');
};

exports.methods = methods;
