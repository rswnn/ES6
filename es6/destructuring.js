const mobil = {
    merek: 'Toyota',
    type: 'Alphard'
}

const {merek, type} = mobil;
console.log(merek + ' : ' + type); // Toyota : Alphard

const {merek: a, type: b} = mobil;
console.log(a + ' : ' + b); // Toyota : Alphard

const KelilingLingkaran = (r, d) => {
    const phi = 3.14;
    const jariJari = 2 * phi * r;
    const diameter = phi * d;
    return [jariJari, diameter];
}

const [jariJari, diameter] = KelilingLingkaran(20,20);
console.log(`Keliling Lingkaran dengan jari-jari : ${Math.round(jariJari)}`);
// Keliling Lingkaran dengan jari-jari : 126
console.log(`Keliling lingkaran dengan dimater : ${Math.round(diameter)}`);
// Keliling lingkaran dengan dimater : 63