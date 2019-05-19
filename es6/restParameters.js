function barangExpired5(limit) {
    var args = Array.prototype.slice.call(arguments, 1);
    args.forEach((el) => {
        console.log((2019 - el) >= limit);
    })
}
barangExpired5(0,2019, 2018, 2018, 2017);


function barangExpired6(masa, ...tahun) {
  let hasil = tahun.filter(el => el > masa);
  console.log(hasil);
}
barangExpired6(2019, 2020,2021,2022,2019);
// [ 2020, 2021, 2022 ]