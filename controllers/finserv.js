var calculator = require("./calculator");

exports.investment = (req, res) =>{
    var inv_amnt = parseInt(req.params.inv_amnt);
    var age = parseInt(req.params.age); 
    output = calculator.investment_cal(inv_amnt, age); 
    res.send(output);    
}