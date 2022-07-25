let re;
let str;

re = /hello/;
re = /hello/i; // i =  Case in sensitive
re = /Hello/;


str = 'Hello World';

let result = re.exec(str);// String or null
result = re.test(str);// True or false

result = str.match(re);// String or null
result = str.search(re);// Fitst or -1
result = str.replace(re, 'Lokman');// Replacement



console.log(result);