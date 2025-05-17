function gerar() {
    let num = document.querySelector("#txtn")
    let tab = document.querySelector("#seltab")

    //Caso não for digitado:
    if (num.value.length == 0) {
        window.alert("Por favor, Digite um Número")

    } else {
        let n = Number(num.value)
        tab.innerHTML = ""

        for (let c = 1; c <= 10; c++) {

            let item = document.createElement("option")
            item.text = `${n} x ${c} = ${n * c}`
            tab.appendChild(item)
        }
    }

}