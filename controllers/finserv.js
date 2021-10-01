var calculator = require("./calculator");

exports.inv_prop = (req, res) =>{
    var salary = parseInt(req.params.salary);
    var age = parseInt(req.params.age); 
    output = calculator.inv_prop(salary, age); 
    res.send(output);    
}

exports.inv_cal = (req, res) =>{
    var inv_amnt = parseInt(req.params.inv_amnt);
    var age = parseInt(req.params.age); 
    output = calculator.inv_cal(inv_amnt, age); 
    res.send(output);    
}