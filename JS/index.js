// console.log("Hello World");
// var a=23;
// console.log("a = "+a);

// const myname="Ayush";
// console.log("hii....."+myname);
// function MessageChannel(){
//     return "welcome to JS";
// }
// const data=msg();
// console.log(data);


// const data=function msg(name){
//     return name+"Welcome to JS"
// }

// const msg=data("Rahul");
// console.log(msg);

// const data=(myname)=>{
//     console.log("hii....helloo  "+myname)
// }
// data("Ayush");

// (function(){
//     console.log("welcome to JS")
// })();

// (()=>{
//     console.log("Welcome to ABES")
// })();


// setTimeout(()=>{
//     console.log("hiii I m using Timeout")
// },1000);

// setInterval(() => {
//     console.log("hiii how r u")
// }, 1000);


// function greeting(msg="welcome"){
//     console.log("hii "+msg)
// }
// greeting("rahul");


function selectlanguage(lang){
    let data;
    if(lang=='java'){
        function javacompiler(){
            return "java compiler selected";
        }
        data = javacompiler();
    }else if(lang=='c'){
        function cCompiler(){
            return "c compiler selected"
        }
        data=cCompiler();
    }else{
        data="no such complier available"
    }return data;
}

const msg=selectlanguage('anaconda');
console.log(msg);