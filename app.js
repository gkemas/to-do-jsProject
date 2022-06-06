const giris =document.getElementById("giris");
const ekle =document.getElementById("ekle");
const list =document.getElementById("liste");


ekle.addEventListener("click",function(){
   console.log("e");
   add();
});
function add(){

    row =`  <input type="checkbox" name="todo" id="">${giris.value}</input>   `
 }
