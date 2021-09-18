var calculator = require("./calculator");

exports.investment = (req, res) =>{
    var val = parseInt(req.params.inv_amt);
    amount = calculator.investment_cal(val); //val * 0.16;
    var cost = {
        "cost": amount
    }
    res.send(cost);    
}