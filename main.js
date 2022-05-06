
    function anvaodi() {
    let nhaptien = document.getElementById('nhapsotien').value;

    let chon1 = document.getElementById('currency1').value;
    let chon2 = document.getElementById('currency2').value;

    if (chon1 == chon2) {
    document.write(nhaptien + 'VND');
}
    else {
    if (chon1 == "VND" && chon2 == "USD") {

    document.write(nhaptien/24000 + 'USD')
}
    else
{
    document.write(nhaptien * 24000 +'VND')
}
}
}
