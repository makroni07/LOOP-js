//tugas 1
console.log('LOOPING PERTAMA');

var angka=0;

		while(angka<=20){
			console.log(angka + '- i love coding');
			angka +=2;
		}



console.log('LOOPING KEDUA');

var angka=20;

		while(angka>=0){
			console.log(angka + '- i love coding');
			angka -=2;
		}


//tugas 2
console.log('LOOP PERTAMA');
for(var angka = 1; angka <=20; angka++) {
	console.log(angka + ' - i love coding');
}



console.log('LOOP KEDUA');
for(var angka = 20; angka >=1; angka++) {
	console.log(angka + ' - i will become fullstack devwloper');
}


//tugas 3
//ganjil-genap
for (var angka=1; angka<= 100; angka++) {
	if(angka%20===0){
		console.log('GENAP')
	}

	else{
		console.log('GANJIL')
	}
}


//counter penambahan 2

for (var angka=1; angka<= 100; angka+=2) {
	if(angka%3===0){
		console.log(angka + ' kelipatan 3')
	}

	else{
		console.log('')
	}
}




//counter penambahan 5

for (var angka=1; angka<= 100; angka+=5) {
	if(angka%6===0){
		console.log(angka + ' kelipatan 6')
	}

	else{
		console.log('')
	}
}


//counter penambahan 9

for (var angka=1; angka<= 100; angka+=9) {
	if(angka%10===0){
		console.log(angka + ' kelipatan 10')
	}

	else{
		console.log('')
	}
}


