let re;
let str;

// Literal characters
re = /Hello/i;
re = /hell/i;
re = /lo w/i;
re = /low/i;

// Meta characters
re = /^hello/;// Must start with ^
re = /hello$/;// Must end with $
re = /rld$/;
re = /^hello$/;// Must start and end with ^ $
re = /h.llo/;// Match any one characters .
re = /h*llo/;// Zero or more time
re = /he?llo/;// e? Optional
re = /he?a?llo/;
re = /hello\?/;// Escping character \?

str = 'hello World';

console.log(re.exec(str))







function reTest(re, str){
    if(re.test(str)){
        console.log(`'${str}' matches '${re.source}'`);
    }
    else{
        console.log(`'${str}' doesn't matche '${re.source}'`);
    }
}
reTest(re, str);