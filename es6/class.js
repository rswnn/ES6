class Orang {
    constructor(nama, tahunKelahiran, job = 'programmer'){
        this.nama = nama;
        this.tahunKelahiran = tahunKelahiran;
        this.job = job;
    }

    umur() {
        const hasil = new Date().getFullYear() - this.tahunKelahiran;
        console.log(hasil);
    }

    kerja() {
        if (this.job === 'programmer') {
            console.log('apa yg kau lakukan lagi setelah ini?')
        } else {
            console.log('kerjalah sesuai apa yang anda impikan !!');
        }
    }
}

const riswan = new Orang('Riswan', 1998, 'programmer');
riswan.kerja();
riswan.umur();