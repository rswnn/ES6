class Mobil {
    constructor(merek, type, tahun) {
        this.merek = merek;
        this.type = type;
        this.tahun = tahun;
    }

    cekWarna() {
        const warna = ['merah', 'hitam', 'putih'];
        warna.map((el, index) => console.log(`${index + 1} : ${el}`))
    }
}

class MobilBaru extends Mobil {
    constructor(merek, type, tahun, tranmisi, gigi = 0) {
        super(merek, type, tahun);
        this.tranmisi = tranmisi;
        this.gigi = gigi;
    }

    cekTranmisi() {
        if (this.tranmisi !== 'auto') {
            this.gigi++;
            console.log(this.gigi);
        } else {
            console.log('Ini mobil matic')
        }
    }
}

const alphard = new MobilBaru('Toyota', 'Alphard', 2017, 'auto');
alphard.cekWarna();
alphard.cekTranmisi();
alphard.cekTranmisi();
alphard.cekTranmisi();
alphard.cekTranmisi();