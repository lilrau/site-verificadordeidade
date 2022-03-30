function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formano = window.document.querySelector('input#txtano')
    var res = window.document.querySelector('div#res')

    if (formano.value.length == 0 || formano.value > ano || formano.value < 1822) {
        window.alert('[ERRO]\nVerifique os dados e tente novamente.')
    }
    else {
        var formsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(formano.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (formsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 15) {
                // crianca
                img.setAttribute('src', 'menino.png')
            }
            else if (idade >= 15 && idade < 54) {
                // jovem/adulto
                img.setAttribute('src', 'homemjovem.png')
            }
            else {
                // idoso
                img.setAttribute('src', 'homemidoso.png')
            }
        }
        else if (formsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 15) {
                // crianca
                img.setAttribute('src', 'menina.png')
            }
            else if (idade >= 15 && idade < 54) {
                // jovem/adulta
                img.setAttribute('src', 'mulherjovem.png')
            }
            else {
                // idosa
                img.setAttribute('src', 'mulheridosa.png')
            }
        }
        res.style.textAllign = 'center'
        res.innerHTML = `Detectado ${genero} com ${idade} anos `
        res.appendChild(img)
    }
}
