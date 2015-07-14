
var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;

for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		self = this;
		var input = document.querySelector('.screen');
		var inputVal = input.innerHTML;
		var btnVal = self.innerHTML;
		
		if(btnVal == 'C') {
			erase();
		}		
		else if(btnVal == '=') {
			equal();
		}
		else if(operators.indexOf(btnVal) > -1) {
			addOperators();
		}		
		else if(btnVal == '.') {
			checkDecimal();
		}
		else {
			append();
		}
		function equal(){
			var equation = inputVal;
			var lastChar = equation[equation.length - 1];
			
			equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
			
			if(operators.indexOf(lastChar) > -1 || lastChar == '.'){
				equation = equation.replace(/.$/, '');
			}
			
			if(equation){
				input.innerHTML = eval(equation);
			}
				
			decimalAdded = false;
		}
		function erase(){
			input.innerHTML = '';
			decimalAdded = false;
		}
		function addOperators(){

			var lastChar = inputVal[inputVal.length - 1];
			
			if(inputVal != '' && operators.indexOf(lastChar) == -1){
				input.innerHTML += btnVal;
			} 		
			else if(inputVal == '' && btnVal == '-'){
				input.innerHTML += btnVal;
			} 						
			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
				input.innerHTML = inputVal.replace(/.$/, btnVal);
			}			
			decimalAdded =false;
		}
		function checkDecimal(){
			if(!decimalAdded) {
				input.innerHTML += btnVal;
				decimalAdded = true;
			}
		}
		function append(){
			input.innerHTML += btnVal;
		}
		e.preventDefault();
	} //End of Anonymous Function
}
