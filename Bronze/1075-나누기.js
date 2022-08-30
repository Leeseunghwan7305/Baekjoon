let fs = require('fs');
let input = fs
	.readFileSync('../text.txt')
	.toString()
	.split('\r\n')
	.map((i) => +i);

213132;
asdad;
asdads;
goal = goal + '';
goal = goal.substr(0, goal.length - 2);
let result = '';
for (let i = 0; i < 100; i++) {
	if (i < 10) {
		result = goal + '0' + i;
		if (result % a == 0) {
			console.log('0' + i);
			break;
		}
	} else {
		result = goal + i;
		if (result % a == 0) {
			console.log(String(i));
			break;
		}
	}
}
