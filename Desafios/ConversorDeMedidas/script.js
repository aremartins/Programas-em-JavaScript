function Converter(){
    let dist = Number.parseFloat(prompt("Digite a distância em metros"))
    let dm = (`${dist * 10}`)
    let cm = `${dm * 10}`
    let mm = `${cm * 10}`
    let dam = `${dist / 10}`
    let hm = `${dam / 10}`
    let km = `${hm / 10}`
    let res = document.getElementById('res')
    res.innerHTML = `<h1>A distância de ${dist} metros corresponde à:</h1> <p>${km} quilômetros (Km)</p>`
    res.innerHTML += `<p>${hm} hectômetros (Hm)</p>`
    res.innerHTML += `<p>${dam} decâmetros (Dam)</p>`
    res.innerHTML += `<p>${dm} decímetros (dm)</p>`
    res.innerHTML += `<p>${cm} centímetros (cm)</p>`
    res.innerHTML += `<p>${mm} milímetros (mm)</p>`







    
}