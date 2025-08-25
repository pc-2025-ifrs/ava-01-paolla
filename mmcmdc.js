function mcc(...numbers) {
    for (number of numbers) {
        if (isNaN(number)) { // nn é numero
            return "Esse número não é válido.";
        }
        else if (!Number.isInteger(number)) { // n é inteiro
            return "Não é possível fazer MMC de números decimais.";
        }
        else if (number == 0) { //igual a zero
            return "O resultado do MMC é 0, porque um dos números é 0.";
        }
        else if (number < 0) { //negativo
            number = Math.abs(number);
        }
    }

  let mcc = Math.max(...numbers);
  let multiplo = false;

  while (!multiplo) {
    multiplo = true;
    for (const number of numbers) {
      if (mcc % number !== 0) {
        multiplo = false;
        break; 
      }
    }
    
    if (!multiplo) {
      mcc++;
    }
  }
  
  return mcc;
}

function mdc(...numbers) {
    if (numbers.length === 0) { return null; }

    let result = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        let a = Math.abs(result);
        let b = Math.abs(numbers[i]);

        while (b) {
            let temp = a; 
            a = b;
            b = temp % b;
        }

        result = a;
    }

    return result;
}
