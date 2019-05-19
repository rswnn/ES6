let nilai = [100,200,400,200];

for (let cur of nilai){
    console.log(cur * 2);
}
// 200
// 400
// 800
// 400

let kaliDua = nilai.map((el) => el * 2);
console.log(kaliDua); //[ 200, 400, 800, 400 ]

let ambilAngka = nilai.filter(el => el !== 200);
console.log(ambilAngka); //[ 100, 400 ]

let tambah = nilai.reduce((el, index) =>{
    return el + index;
}, 0);
console.log(tambah); // 900

let urut = nilai.sort();
console.log(urut); //[ 100, 200, 200, 400 ]

console.log(nilai.findIndex(el => el > 200)); // 2
console.log(nilai.find(el => el > 200)); // 400


const tahun = [1990, 1965, 1982, 1937];
console.log(tahun);

let umur6 = tahun.map((el) => 2019 - el);
console.log(`${umur6}`);

umur6 = tahun.map((el, index) => `Umur pada elemen ke ${index + 1} adalah : ${2019 - el}`);
console.log(umur6);

umur6 = tahun.map((el, index) => {
    const sekarang = new Date().getFullYear();
    const umur = sekarang - el;
    return `Umur pada elemen ke ${index + 1} adalah : ${umur}`;
});
console.log(umur6);