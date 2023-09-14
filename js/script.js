function validate(){
    let ans1 = document.getElementById("jawaban-sisi-luas");
    let value1 = ans1.value;
    let pertama = document.getElementById("luas-1");
    let kedua = document.getElementById("luas-2");
    let ketiga = document.getElementById("luas-3");

    if(value1 < 0 || value1 == null){
        return;
    }
    else{
        kedua.innerText = "L = " + value1 + " x " + value1;
        ketiga.innerText = "L = " + value1 * value1;

        pertama.style.display = "block"
        kedua.style.display = "block"
        ketiga.style.display = "block"
    }
}

function validate2(){
    let ans2 = document.getElementById("jawaban-sisi-keliling");
    let value2 = ans2.value;
    let pertama2 = document.getElementById("keliling-1");
    let kedua2 = document.getElementById("keliling-2");
    let ketiga2 = document.getElementById("keliling-3");

    if(value2 < 0 || value2 == null){
        return;
    }
    else{
        kedua2.innerText = "K = " + 4 + " x " + value2;
        ketiga2.innerText = "K = " + 4 * value2;

        pertama2.style.display = "block";
        kedua2.style.display = "block";
        ketiga2.style.display = "block";
    }
}

function reset(){
    let pertama = document.getElementById("luas-1");
    let kedua = document.getElementById("luas-2");
    let ketiga = document.getElementById("luas-3");
    pertama.style.display = "none"
    kedua.style.display = "none"
    ketiga.style.display = "none"
}

function reset2(){
    let pertama2 = document.getElementById("keliling-1");
    let kedua2 = document.getElementById("keliling-2");
    let ketiga2 = document.getElementById("keliling-3");
    pertama2.style.display = "none";
    kedua2.style.display = "none";
    ketiga2.style.display = "none";
}