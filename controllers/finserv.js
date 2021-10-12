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

// route the call to emi rates and get the data to be sent to caller
exports.emi_rate = (req, res) =>{
    
    var l_type = req.params.l_type; 
    output = calculator.emi_rate(l_type); 
    res.send(output);    
}

// route the call to emi calculator and get the data to be sent to caller
exports.emi_cal = (req, res) =>{
    
    var l_type = req.params.l_type; 
    var loan_amnt = parseInt(req.params.p_amount);
    var i_rate = parseInt(req.params.i_rate);
    var i_time = parseInt(req.params.i_time);
    output = calculator.emi_cal(l_type, loan_amnt, i_rate, i_time); 
    res.send(output);    
}

// similar routes to be written for other calculators