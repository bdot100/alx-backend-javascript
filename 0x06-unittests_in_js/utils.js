class Utils {
    static calculateNumber(type, a, b) {
        const roundedA = Math.round(a);
        const roundedB = Math.round(b);
        let c = 0;
      
        switch (type) {
          case 'SUM':
            c = roundedA + roundedB;
            break;
          case 'SUBTRACT':
            c = roundedA - roundedB;
            break;
          case 'DIVIDE':
            if (roundedB === 0) {
              c = 'Error';
            }else{
                c = roundedA / roundedB;
            }
            break;
        }
        return c;
    }
}

module.exports = Utils;