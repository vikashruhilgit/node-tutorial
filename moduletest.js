require('./moduleinclude1');

var ModInc = require('./moduleinclude');
console.log(ModInc);
var modinc = new ModInc();

//modinc.updatevar = 'hello include test';
console.log(modinc.updatevar);

//console.log(moduledata);
