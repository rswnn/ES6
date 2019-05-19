const masuk = process.stdin;
masuk.setEncoding('utf-8');

const pertanyaan =  new Map();
pertanyaan.set('tanya', 'Indonesia merdeka pada tahun?');
pertanyaan.set(1, '1995');
pertanyaan.set(2, '1955');
pertanyaan.set(3, '1946');
pertanyaan.set(4, '1945');
pertanyaan.set('benar', 4);
pertanyaan.set(true, 'Anda benar');
pertanyaan.set(false, 'Anda Salah');

console.log(pertanyaan.get('tanya'));
for (let [key, value] of pertanyaan.entries()) {
    if (typeof(key) === 'number'){
        console.log(`${key} : ${value}`);
    }
}
console.log('Masukan jawaban :');
masuk.on('data', function(data) {
    console.log(pertanyaan.get(parseInt(data) === pertanyaan.get('benar')));
    process.exit();
})