function calcular() {
    var txtpeso = document.querySelector('input#txtpeso')
    var txtaltura = document.getElementById('txtalt')
    var img =document.getElementById('imagem')
    var res = document.getElementById('res')
    var peso = Number(txtpeso.value)
    var altura = Number(txtaltura.value)
    var imc = peso / (altura * altura)
    var imc = imc.toFixed(2)
    
    
    if (imc < 18.5) {
        res.innerHTML= `<p> O seu IMC é ${imc}.<strong> Peso abaixo do normal</strong>. <p> Neste caso, é necessária a busca por um especialista, para verificar a existência de algum problema de saúde causador do índice abaixo do normal, ou analisar se sua saúde não está sendo afetada.</p> `
        img.src='youngman.png'
    } else if (imc > 18.5 && imc < 24.9) {
        res.innerHTML= `<p> O seu IMC é ${imc}. <strong> </p><p> Peso dentro no normal</strong>. São pesos considerados normais pela OMS. No entanto, mesmo nesta faixa de peso, deve-se ter atenção e cuidado com possíveis problemas metabólicos, principalmente se houver acúmulo de gordura na região interna do abdômen.</p>`
    } else if (imc > 24.9 && imc < 29.9) {
        res.innerHTML= `<p> O seu IMC é ${imc}. <strong></p><p> Peso pré obesidade.</strong> Peso em pré-obesidade ou acima do peso, representando um risco maior para a saúde. Nesta causa, é imprescindível uma consulta com um especialista, pois pode estar relacionado à pressão alta, colesterol alto ou diabetes, podendo apontar até para o hipotireoidismo. Este é o seu índice? Se sim, é tempo de consultar um profissional, realizar exames e pensar em uma reeducação alimentar e exercícios físicos.</p>`
    } else if (imc > 29.9 && imc < 34.9) {
        res.innerHTML= `<p> O seu IMC é ${imc}. <strong></p><p> Obesidade grau 1.</strong> Este índice indica obesidade grau um. Este peso aumenta riscos para várias doenças, como diabetes, hipertensão arterial, o infarto do miocárdio e diversos tipos de câncer. A obesidade já é considerada uma comorbidade e necessita de tratamento profissional. O indicado é consultar um especialista e receber acompanhamento adequado.</p>`
    } else if (imc > 34.9 && imc < 39.9) {
        res.innerHTML= `<p> O seu IMC é ${imc}. <strong></p><p> Obesidade grau 2.</strong> Indica obesidade grau dois. Este peso já representa risco elevado para as doenças supracitadas. Como em todos os casos, mas neste impreterivelmente, deve-se buscar um profissional especializado e receber as orientações e medidas adequadas para obter uma saúde equilibrada.</p>`
    }else {
        res.innerHTML = `<p> O seu IMC é ${imc}. <strong></p><p> Obesidade grau 3 ou mórbida.</strong> Indica obesidade grau três ou mórbida. O peso neste grau apresenta problemas extremamente graves e necessita de tratamento profissional com o máximo de recursos disponíveis, incluindo até cirurgia.</p>`

    }


}