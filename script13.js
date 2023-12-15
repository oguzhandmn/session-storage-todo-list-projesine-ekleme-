// Tarayici deopolama alanlari


// Local storgare 

// setitem

 localStorage.setItem("programlama","javascript");
 localStorage.setItem("bilgsayar",7000);

// getitem


// const value = localStorage.getItem("bilgsayar");

// console.log(value);
// console.log(typeof value);




// clear local storge

// localStorage.clear();

// console.log(localStorage.getItem("klavye"));

if(localStorage.getItem("bilgsayar") === null){
console.log("sorgulanan veri bulunamadi !");

}

else{

console.log("sorgulanan veri bulundu !");
}
