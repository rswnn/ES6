const cetakGambar = () => {
    let string = ['P', 'R', 'O', 'G', 'R','A', 'M', 'M', 'E', 'R'];
    let cetak = '';

    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < string.length; j++) {
            if (i === j){
                cetak += ' '+string[i];
            } else if ((i+j) === string.length - 1) {
                cetak += ' '+string[i];
            } else {
                cetak += ' = ';
            }
        }
        cetak += '\n';
    }
    console.log(cetak);
}
cetakGambar();