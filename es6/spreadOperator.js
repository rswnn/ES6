const angka = [200, 250, 320, 1200];
const tambahEmpatAngka = (a,b,c,d) => {
    return a + b + c + d;
}
const tambah = tambahEmpatAngka(...angka);
console.log(tambah); // 1970
// ... adalah spread operator

const saudara = ['Firman', 'Irwan', 'Mahmud'];
const teman = ['Ade', 'Sony', 'Tuak'];

const keluarga = [...saudara, 'Bella', ...teman];
console.log(` keluarga besar ${keluarga}`);
// Firman,Irwan,Mahmud,Bella,Ade,Sony,Tuak