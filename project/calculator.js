let calculation = '';
      let result = document.querySelector('.js-answer')
      function updateCalculation(value) {
        calculation += value;
        result.innerHTML = `<button class="result-btn">${calculation}</button>` 
      };

      function evalCalculation(){
        try {
          calculation = eval(calculation);
          result.innerHTML = `<button class="result-btn">${calculation}</button>`;
        } catch (e) {
          result.innerHTML = `<button class="result-btn">Error</button>`;
        }
      };
  