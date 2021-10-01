module.exports = {
    inv_prop: function (salary, age) {
        var base_amount = 0;
        if ( age < 31) {
            if ( salary < 50000 ) {
                base_amount = salary * 0.10;                
            } 
            else {
                base_amount = salary * 0.20;                
            }
        }
        else if ( age >= 31 && age < 45) {
            if ( salary < 150000 ) {
                base_amount = salary * 0.25;                
            } 
            else {
                base_amount = salary * 0.35;                
            }       
        }
        else if ( age >= 45 && age < 55) {
            if ( salary < 150000 ) {
                base_amount = salary * 0.20;                
            } 
            else {
                base_amount = salary * 0.30;                
            }      
        }
        else {
            if ( salary < 150000 ) {
                base_amount = salary * 0.10;                
            } 
            else {
                base_amount = salary * 0.25;                
            }   
        }

        var output = {
            "InvProposal_Amount": base_amount,
        }
        return output;
    },

    inv_cal: function (base_amount, age) {
        var hr_low = 0
            hr_high = 0
            mr_low = 0
            mr_high = 0
            lr_low = 0
            lr_high = 0;

        if ( age < 31) {
            hr_low = base_amount * 0;
            hr_high = base_amount * 0.30;
            mr_low = base_amount * 0.20;
            mr_high = base_amount * 0.50;
            lr_low = base_amount * 0;
            lr_high = base_amount * 0.50;
        }
        else if ( age >= 31 && age < 45) {
            hr_low = base_amount * 0;
            hr_high = base_amount * 0.30;
            mr_low = base_amount * 0;
            mr_high = base_amount * 0.30;
            lr_low = base_amount * 0;
            lr_high = base_amount * 0.40;       
        }
        else if ( age >= 45 && age < 55) {
            hr_low = base_amount * 0;
            hr_high = base_amount * 0.30;
            mr_low = base_amount * 0;
            mr_high = base_amount * 0.30;
            lr_low = base_amount * 0;
            lr_high = base_amount * 0.40;      
        }
        else {
            hr_low = base_amount * 0;
            hr_high = base_amount * 0.10;
            mr_low = base_amount * 0.50;
            mr_high = base_amount * 0.60;
            lr_low = base_amount * 0.50;
            lr_high = base_amount * 0.40;
                
        }

        var est_amnt = base_amount * 5;
        var est_inv_val = est_amnt + ( est_amnt * 0.16 );
        var est_bnk_val = est_amnt + ( est_amnt * 0.07 );
        var inv_gain = est_inv_val - est_amnt;
        var bnk_gain = est_bnk_val - est_amnt;

        var output = {
            "HighRisk_Low": hr_low,
            "HighRisk_High": hr_high,
            "MidRisk_Low": mr_low,
            "MidRisk_High": mr_high,
            "LowRisk_Low": lr_low,
            "LowRisk_High": lr_high,
            "Invested_Amount": est_amnt,
            "Estimated_Investment_Return": est_inv_val,
            "Estimated_Bank_Return": est_bnk_val,
            "Investment_Gain": inv_gain,
            "Bank_Gain": bnk_gain
        }
        return output;
    },
    
};
  
  