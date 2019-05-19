function Biodata (nama, lahir, kewarganegaraan = 'Indonesia', pekerjaan = 'Karyawan Swasta'){
this.nama = nama;
this.lahir = lahir;
this.kewarganegaraan = kewarganegaraan;
this.pekerjaan = pekerjaan;

}


const riswan = new Biodata('Riswan' , 1998);
console.log(riswan);