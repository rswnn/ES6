const obj = {
    nama: 'Riswan',
    lahir: 1998,
    umur: function() {
        let hasil = `Nama kamu ${this.nama}, umur kamu adalah ${new Date().getFullYear() - this.lahir}`;
        return hasil;
    }
}

const biodata = obj.umur();
console.log(biodata); // Nama kamu Riswan, umur kamu adalah 21








let teman = ['Faisal', 'rizki', 'Ami', 'Wulan'];

function Orang(nama) {
    this.nama = nama;
}

Orang.prototype.temans = function (temen) {
    let arr = temen.map(el => `${this.nama} berteman dengan ${el}`);
    console.log(arr);
};

new Orang(obj.nama).temans(teman);