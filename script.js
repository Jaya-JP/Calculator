let dis = document.getElementById('play');
      
      function ap(value) {
        dis.value += value;
      }
      function clearDisplay() {
        dis.value = '';
      }
    function calculate() {
        dis.value = eval(dis.value);
      }