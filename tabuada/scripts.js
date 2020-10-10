function calcular() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('txttab')
    if (num.value.length == 0) {
        window.alert('Digite um número')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        let c = 1
        while (c <= 10) {            
            let item = document.createElement('option')
            item.text = `${c} x ${n} = ${c*n}`
            c++
            tab.appendChild(item)
        }
    }
}
