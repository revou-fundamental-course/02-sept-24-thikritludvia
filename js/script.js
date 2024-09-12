document.addEventListener('DOMContentLoaded', () => {

    function hitungLuasSegitiga() {
        let alas = document.getElementById('panjang-alas').value;
        let tinggi = document.getElementById('tinggi').value;
        alas = Number(alas);
        tinggi = Number(tinggi);
        
        if (!isNaN(alas) && !isNaN(tinggi)) {
            let luas = 0.5 * alas * tinggi;
            document.getElementById('result-luas').textContent = 'Luas Segitiga: ' + luas;
        } else {
            document.getElementById('result-luas').textContent = 'Masukkan nilai yang valid untuk alas dan tinggi.';
        }
    }

    function hitungKelilingSegitiga() {
        let sisiA = document.getElementById('sisi-a').value;
        let sisiB = document.getElementById('sisi-b').value;
        let sisiC = document.getElementById('sisi-c').value;
        sisiA = Number(sisiA);
        sisiB = Number(sisiB);
        sisiC = Number(sisiC);
        
        if (!isNaN(sisiA) && !isNaN(sisiB) && !isNaN(sisiC)) {
            let keliling = sisiA + sisiB + sisiC;
            document.getElementById('result-keliling').textContent = 'Keliling Segitiga: ' + keliling;
        } else {
            document.getElementById('result-keliling').textContent = 'Masukkan nilai yang valid untuk semua sisi.';
        }
    }

    function tampilkanBagian(bagian) {
        if (bagian === 'luas') {
            document.getElementById('luas-segitiga').style.display = 'block';
            document.getElementById('form-luas-segitiga').style.display = 'block';
            document.getElementById('keliling-segitiga').style.display = 'none';
            document.getElementById('form-keliling-segitiga').style.display = 'none';
        } else if (bagian === 'keliling') {
            document.getElementById('keliling-segitiga').style.display = 'block';
            document.getElementById('form-keliling-segitiga').style.display = 'block';
            document.getElementById('luas-segitiga').style.display = 'none';
            document.getElementById('form-luas-segitiga').style.display = 'none';
        }
    }

    document.getElementById('show-luas').addEventListener('click', () => {
        tampilkanBagian('luas');
    });

    document.getElementById('show-keliling').addEventListener('click', () => {
        tampilkanBagian('keliling');
    });

    document.getElementById('hitungan-luas').addEventListener('click', (event) => {
        event.preventDefault();
        hitungLuasSegitiga();
    });

    document.getElementById('hitungan-keliling').addEventListener('click', (event) => {
        event.preventDefault();
        hitungKelilingSegitiga();
    });

    tampilkanBagian('luas');
});
