var jmlAngkot= 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

// while(noAngkot <= angkotBeroperasi){
//     console.log('Angkot No. '+ noAngkot+' beroperasi dengan baik');
//     noAngkot ++;
// }
// for(noAngkot = angkotBeroperasi + 1; noAngkot<=jmlAngkot; noAngkot++ ){
//     console.log('Angkot No. '+ noAngkot+' sedang tidak beroperasi');
// }
for(noAngkot =1; noAngkot<=jmlAngkot; noAngkot++){
    if(noAngkot <= angkotBeroperasi && noAngkot !== 5 ){
        console.log('Angkot No. '+ noAngkot+' beroperasi dengan baik');
    }
    else if(noAngkot === 8 || noAngkot === 10 || noAngkot === 5){
        console.log('Angkot No. '+ noAngkot+' sedang lembur');
    }
    else{
        console.log('Angkot No. '+ noAngkot+' sedang tidak beroperasi');
    }
}
// var angka = prompt('masukan angka');
// switch(angka){
//     case '1':
//         alert('anda memasukkan angka 1');
//         break;
//     case 2:
//         alert('anda memasukkan angka 2');
//         break;
//     default:
//         alert('anda memasukkan angka salah');
//         break;

// }


// GAME SUWIT sederhana

// menangkap pilihan player
// var p = prompt('Pilih: gajah,semut,orang')
// menangkap pilihan computer
// membangkitkan bilangan random
// var comp = Math.random();
// if( comp <= 0.34){
//     comp = 'gajah';
// }else if(comp >= 0.34 && comp < 0.67){
//     comp = 'orang'
// }else{
//     comp = 'semut'
// }

// menentuka rules
// var hasil = '';

// if(p == comp){
//     hasil = 'SERi'
// }else if(p == 'gajah'){
//     hasil = (comp == 'orang') ? 'Menang': 'Kalah';
// }else if(p == 'orang'){
//     hasil = (comp == 'gajah') ? 'Kalah' : 'Menang';
// }else{
//     hasil = 'Anda memasukkan pilihan yang salah!'
// }
// // menampilkan hasilnya
// alert('Kamu memilih :'+ p +'dan komputer memilih '+ comp +'\nMaka hasilnya kamu: ' + hasil);


// var s = '';
// for(i = 10; i > 0; i--){
//   for(var j = 0; j < i; j++){
//     s += '*';+
//   }
//     s += '\n';
// }
// console.log(s);

function jumlahVolumeDuaKubus(a,b){
    return  a*a*a + b*b*b;

}
console.log(jumlahVolumeDuaKubus(1,2));

function tambah(){
    var hasil = 0;
   for(i=0; i < arguments.length; i++){
     hasil += arguments[i] *2;
   }
   return hasil;
}
var coba = tambah(5,10);
console.log(coba);

// Rekursif
// function tampilAngka(n){
//     if(n === 0){
//         return;
//     }
//     console.log(n);
//     tampilAngka(n-1);
   
// };
// tampilAngka(10);

function faktorial(n){
    if(n==0) return 1;
    return n* faktorial(n-1);
}
var cetak = faktorial(3);
console.log(cetak);


// hari.splice(3,0,'kamis');
// console.log(hari.join(' - '));
var angka = [1,2,3,4,5,6,7,8];
angka.forEach(function(e){
    console.log(e);
}

);
