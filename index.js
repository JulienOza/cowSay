const {user} = require("./information");

let cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello I'm ${user.name} from ${user.campus} campus`,
    e : "oO",
    T : "U "
}));
