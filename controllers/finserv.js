var calculator = require("./calculator");

// route the call to propsal amount and get the data to be sent to caller
exports.inv_prop = (req, res) =>{
    var salary = parseInt(req.params.salary);
    var age = parseInt(req.params.age); 
    output = calculator.inv_prop(salary, age); 
    res.send(output);    
}

// route the call to investment calculator and get the data to be sent to caller
exports.inv_cal = (req, res) =>{
    var inv_amnt = parseInt(req.params.inv_amnt);
    var age = parseInt(req.params.age); 
    output = calculator.inv_cal(inv_amnt, age); 
    res.send(output);    
}

// similar routes to be written for other calculators