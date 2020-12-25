/*let a= ()=>{
    document.write("bikash");
}
a();
(function (){document.write("bikash");})();
function show(a,b="thank"){
    document.write(a+b);
}
show('bikash');
let fees={
    rahul:200,
    ashmit:300,
    sonu:400,
    total:function(){
        return(200+300+400);
    }
}
document.write(fees.total());
function mobile(model_no){
    return{
        model:model_no,
        price:function(){
            return("price is 3000");
        }
    };
}
let samsung=mobile("galaxy");
document.write(samsung.model+samsung.price());*/
let mobile=function(model_no){
   this.model=model_no;
    this.price=function(){
        document.write(this.model+"price is 3000");
    }
}
let samsung= new mobile("galaxy");
samsung.price();
/*if(mobile.hasOwnProperty("model")){
    document.write('available');
}
else{
    document.write("not available");
}
for(let specs in samsung){
    document.write(samsung[specs]);
}*/
mobile.prototype.ram="5gb";
samsung.__proto__.color="green";
document.write(samsung.color=samsung.ram);
console.log(Object.getPrototypeOf(mobile));