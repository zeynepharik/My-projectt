function hesapla() {
    let boy = prompt("Boyunuzu giriniz");
    let kilo = prompt("Kilonuzu giriniz");
    let cinsiyet = prompt("Cinsiyeti giriniz(erkek/kadın)");
    let yas = prompt("Yaşı Giriniz");
    let sonuc = kilo / (boy * boy) * 10000;

    let endexresult = document.getElementById("endexresult");
    let endextext = document.getElementById("endextext");
    let endeximg = document.getElementById("endeximg");

    endexresult.innerHTML = "sonuc: " + sonuc.toFixed(2);
    endeximg.style.width = "250px";
    if (cinsiyet == "kadın") {
        if (yas < 50) { 
            var text = "Yaşlısınız";
        }
        if (sonuc < 16) {
        endextext.innerHTML = "Zayıf ve Gençsiniz";
        endeximg.src = "zayif(1).png";
        endextext.style.color = "purple"
    }
        else if (sonuc < 22) {
        endextext.innerHTML = "Normal  ve Gençsiniz";
        endeximg.src = "normal.png";
        endextext.style.color = "green";
    }
       else if (sonuc < 27) {
        endextext.innerHTML = "Fazla Kilolu  ve Gençsiniz";
        endeximg.src = "kilolu.png";
        endextext.style.color = "orange";
    }
       else if (sonuc < 32) {
        endextext.innerHTML = "Obez  ve Gençsiniz";
        endeximg.src = "kilolu.png";
        endextext.style.color = "red";
    }
       else if (sonuc > 32) {
        endextext.innerHTML = "Aşırı Obez  ve Gençsiniz";
        endeximg.src = "obez.png";
        endextext.style.color = "brown";
    }
       else {
        alert("Lütfen cinsiyet giriniz")
    }
}
if (cinsiyet == "erkek") {
    if(yas > 50) {
        var text ="Gençsiniz";
    } else {
        var text = "Yaşlısınız";
}
        if (sonuc < 18) {
        endextext.innerHTML = "Zayıf";
        endeximg.src = "zayif(1).png";
        endextext.style.color = "purple";
    }
        else if (sonuc < 25) {
        endextext.innerHTML = "Normal";
        endeximg.src = "normal.png";
        endextext.style.color = "green";
    }
       else if (sonuc < 30) {
        endextext.innerHTML = "Fazla Kilolu";
        endeximg.src = "kilolu.png";
        endextext.style.color = "orange";
    }
       else if (sonuc < 35) {
        endextext.innerHTML = "Obez";
        endeximg.src = "obez.png";
        endextext.style.color = "red";
    }
      else if (sonuc > 35) {
        endextext.innerHTML = "Aşırı Obez";
        endeximg.src = "obez.png";
        endextext.style.color = "brown";
    }
    else {
        alert("Lütfen cinsiyet giriniz")
    }
   
}

   }