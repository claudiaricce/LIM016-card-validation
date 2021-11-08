//*const cl = console.log;

const validator={
      isValid:function(creditCardNumber){
        let sumaTotal = 0;
        let revserNum = [...creditCardNumber].reverse(); // obteniendo array inverso  
        for (let index = 1; index < revserNum.length; index = index + 2) {
          revserNum[index] = revserNum[index] * 2;
          if (revserNum[index] >= 10) {
            revserNum[index] = revserNum[index] - 9;
          }
        }
        for (let value of revserNum) {
          sumaTotal = sumaTotal + parseInt(value);
        }
        if (sumaTotal % 10 === 0) {
          //alert ('Es una tarjeta valida');
          return true;
        }
       else //alert ('la tarjeta es invalida');
         return false;
       },

      maskify:function(creditCardNumber){
       let vis = creditCardNumber.slice(-4),
       countNum = '';
  
      for(var i = (creditCardNumber.length)-4; i>0; i--){
      countNum += '#';
      }
      let mask= countNum+vis;
      return mask;
      }
    };

export default validator;
