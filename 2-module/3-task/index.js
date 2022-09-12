let calculator = {
  var1: undefined,
  var2: undefined,
  read: function(a, b){
    this.var1 = a;
    this.var2 = b;
  },
  sum: function(){
    result = this.var1 + this.var2;
    return result
  },
  mul: function(){
    result = this.var1 * this.var2;
    return result
  }
};


// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
