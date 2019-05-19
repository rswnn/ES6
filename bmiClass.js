class Orang {
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }
}

class Pria extends Orang {
    constructor(nama, umur, tinggi = 165, berat = 60) {
        super(nama, umur);
        this.tinggi = tinggi;
        this.berat = berat;
    }

    cekPensiun(){
        const pensiun = 55 - this.umur;
        if (pensiun > 0) {
            console.log(`${this.nama} masa pensiun anda, ${pensiun} tahun lagi`);
        } else {
            console.log(`${this.nama} anda harus pensiun tahun ini`);
        }
    }
}

class Wanita extends Orang {
    constructor(nama, umur, tinggi = 160, berat = 50) {
        super(nama, umur);
        this.tinggi = tinggi;
        this.berat = berat;
    }

    cekBmi() {
        const bmi = Math.round(this.berat / (this.tinggi * this.tinggi));
        const rating = new Map();
        rating.set(19, 'Anda kurus');
        rating.set(20, 'Sedikit normal');
        rating.set(21, 'normal');
        rating.set(23, 'normal');
        rating.set(22, 'sangat Normal');
        rating.set(30, 'sedikit gendut');
        rating.set(32, 'anda gendut');
        rating.set(33, 'sangat gendut');

        console.log(`${this.nama} bmi anda adalah ${bmi} : ${rating.get(bmi)} `);

    }
}

const pria = [new Pria('riswan', 24), new Pria('Madrois', 55, 1.65, 70), new Pria('Komar', 54, 1.59, 68)];
const wanita = [new Wanita('Bella' , 19, 1.55, 45), new Wanita('Ulan', 20, 1.55, 71), new Wanita('Milah', 49, 1.55, 50)];

const rataBerat = (berat) => {
    const hasil = berat.reduce((cur, index) => cur + index, 0);
    return `Total semua berat : ${hasil} \nRata rata berat${hasil / berat.length}`
}

const rataUmur = (umur) => {
    const hasil = umur.reduce((cur, index) => cur + index, 0);
    return `Total semua Umur pria : ${hasil} \nRata rata umur : ${hasil / umur.length}`;
}
const laporanPria = (lapor) => {
    console.log('======Laporan Pria=======')
    lapor.forEach(el => el.cekPensiun());

    const umur = lapor.map((el) => el.umur);
    const hasilUmur = rataUmur(umur);
    console.log(hasilUmur);
}

const laporanWanita = (lapor) => {
    console.log('======Laporan Wanita=======')
    lapor.forEach(el => el.cekBmi());

    const berat = lapor.map((el) => el.berat);
    const hasilBerat = rataBerat(berat);
    console.log(hasilBerat);
}
laporanPria(pria);
laporanWanita(wanita);