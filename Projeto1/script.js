function enviar() {
    const contacto = {};

    contacto.nome = document.getElementById("nome");
    contacto.email = document.getElementById("email");
    contacto.assunto = document.getElementById("escolha");
    contacto.mensagem = document.getElementById("mensagem");

    let nomeValue = contacto.nome.value;
    let mensagemValue = contacto.mensagem.value;
    let assuntoValue = contacto.assunto.value;
    let emailValue = contacto.email.value;

    var valoresString = emailValue.split("@");

    if(!nomeValue) {
        alert("Preencha tudo por favor.");
        return;
    }
    else if(!mensagemValue) {
        alert("Preencha tudo por favor.");
        return;
    }
    else if(assuntoValue == "") {
        alert("Preencha tudo por favor.");
        return;
    }
    else if(!valoresString[0] || !valoresString[1]) {
        alert("Preencha tudo por favor.");
        return;
    }
    else if(!emailValue || !emailValue.includes("@")) {
        alert("Preencha tudo por favor.");
        return;
    }
    else {
        alert(
            `Form enviado com sucesso! Agradecemos pelo seu feedback.\n` +
            `Nome: ${nomeValue}\n` +
            `Email: ${emailValue}\n` +
            `Assunto: ${assuntoValue}\n` +
            `Mensagem: ${mensagemValue}\n`
        );
    }
}

// json parse para guardar o cache do site



function mostraProduto() {
    var nome = document.getElementById("add-nome-produto").value;
    var img = document.getElementById("add-img-produto").value;

    if(!nome){
        alert("O produto precisa de um nome");
        return;
    }

    if(!document.getElementById("add-img-produto").value.includes("http")){
        alert("O produto precisa de uma imagem");
        return;
    }

    var divDestino = document.getElementById("listaProdutos");

    var divCarro = document.createElement("div");
    var nomeCarro = document.createElement("p");
    var br = document.createElement("br");
    var eliminarCarro = document.createElement("button");
    var imgTag = document.createElement('img');
    imgTag.src = img;
    imgTag.width = '200';

    divCarro.onclick = function(){
            arrayEmails.splice(1, 1);
            mostraProduto();
        }

    nomeCarro = nome;
    
    divCarro.append(imgTag);
    divCarro.append(br);
    divCarro.append(nomeCarro);
    divDestino.append(divCarro);
}


function eliminar1() {
    const element = document.getElementById("produto-num1");
    element.remove();
}

function eliminar2() {
    const element = document.getElementById("produto-num2");
    element.remove();
}

function eliminar3() {
    const element = document.getElementById("produto-num3");
    element.remove();
}

function eliminar4() {
    const element = document.getElementById("produto-num4");
    element.remove();
}

function eliminar5() {
    const element = document.getElementById("produto-num5");
    element.remove();
}

function eliminar6() {
    const element = document.getElementById("produto-num6");
    element.remove();
}

function eliminar7() {
    const element = document.getElementById("produto-num7");
    element.remove();
}

function eliminar8() {
    const element = document.getElementById("produto-num8");
    element.remove();
}
function eliminar9() {
    const element = document.getElementById("produto-num9");
    element.remove();
}
function eliminar10() {
    const element = document.getElementById("produto-num10");
    element.remove();
}
function eliminar11() {
    const element = document.getElementById("produto-num11");
    element.remove();
}
function eliminar12() {
    const element = document.getElementById("produto-num12");
    element.remove();
}

function editar1() {
    let img1 = document.getElementById("imagem1");
    let nome1 = document.getElementById("nome1");
    let imgNova = document.getElementById("add-img-produto").value;
    let nomeNovo = document.getElementById("add-nome-produto").value;
    var br = document.createElement("br");
    if(!document.getElementById("add-img-produto").value.includes("://")){
        alert("O produto precisa de uma imagem");
        return;
    }
    img1.src = imgNova;
    img1.width= "300";
    produto-num1.append(br);
    nome1.replace(nomeNovo);
}

function editar2() {
    let img1 = document.getElementById("imagem2");
    let nome1 = document.getElementById("nome2");
    let imgNova = document.getElementById("add-img-produto").value;
    let nomeNovo = document.getElementById("add-nome-produto").value;
    var br = document.createElement("br");
    if(!document.getElementById("add-img-produto").value.includes("://")){
        alert("O produto precisa de uma imagem");
        return;
    }
    img1.src = imgNova;
    img1.width= "300";
    produto-num1.append(br);
    nome1.replaceWith(nomeNovo);
}

function editar3() {
    let img1 = document.getElementById("imagem3");
    let nome1 = document.getElementById("nome3");
    let imgNova = document.getElementById("add-img-produto").value;
    let nomeNovo = document.getElementById("add-nome-produto").value;
    var br = document.createElement("br");
    if(!document.getElementById("add-img-produto").value.includes("://")){
        alert("O produto precisa de uma imagem");
        return;
    }
    img1.src = imgNova;
    img1.width= "300";
    produto-num1.append(br);
    nome1.replaceWith(nomeNovo);
}

function editar4() {
    let img1 = document.getElementById("imagem4");
    let nome1 = document.getElementById("nome4");
    let imgNova = document.getElementById("add-img-produto").value;
    let nomeNovo = document.getElementById("add-nome-produto").value;
    var br = document.createElement("br");
    if(!document.getElementById("add-img-produto").value.includes("://")){
        alert("O produto precisa de uma imagem");
        return;
    }
    img1.src = imgNova;
    img1.width= "300";
    produto-num1.append(br);
    nome1.replaceWith(nomeNovo);
}

function editar5() {
    let img1 = document.getElementById("imagem5");
    let nome1 = document.getElementById("nome5");
    let imgNova = document.getElementById("add-img-produto").value;
    let nomeNovo = document.getElementById("add-nome-produto").value;
    var br = document.createElement("br");
    if(!document.getElementById("add-img-produto").value.includes("://")){
        alert("O produto precisa de uma imagem");
        return;
    }
    img1.src = imgNova;
    img1.width= "300";
    produto-num1.append(br);
    nome1.replaceWith(nomeNovo);
}

function editar6() {
    let img1 = document.getElementById("imagem6");
    let nome1 = document.getElementById("nome6");
    let imgNova = document.getElementById("add-img-produto").value;
    let nomeNovo = document.getElementById("add-nome-produto").value;
    var br = document.createElement("br");
    if(!document.getElementById("add-img-produto").value.includes("://")){
        alert("O produto precisa de uma imagem");
        return;
    }
    img1.src = imgNova;
    img1.width= "300";
    produto-num1.append(br);
    nome1.replaceWith(nomeNovo);
}

function editar7() {
    let img1 = document.getElementById("imagem7");
    let nome1 = document.getElementById("nome7");
    let imgNova = document.getElementById("add-img-produto").value;
    let nomeNovo = document.getElementById("add-nome-produto").value;
    var br = document.createElement("br");
    if(!document.getElementById("add-img-produto").value.includes("://")){
        alert("O produto precisa de uma imagem");
        return;
    }
    img1.src = imgNova;
    img1.width= "300";
    produto-num1.append(br);
    nome1.replaceWith(nomeNovo);
}

function editar8() {
    let img1 = document.getElementById("imagem8");
    let nome1 = document.getElementById("nome8");
    let imgNova = document.getElementById("add-img-produto").value;
    let nomeNovo = document.getElementById("add-nome-produto").value;
    var br = document.createElement("br");
    if(!document.getElementById("add-img-produto").value.includes("://")){
        alert("O produto precisa de uma imagem");
        return;
    }
    img1.src = imgNova;
    img1.width= "300";
    produto-num1.append(br);
    nome1.replaceWith(nomeNovo);
}

function editar9() {
    let img1 = document.getElementById("imagem9");
    let nome1 = document.getElementById("nome9");
    let imgNova = document.getElementById("add-img-produto").value;
    let nomeNovo = document.getElementById("add-nome-produto").value;
    var br = document.createElement("br");
    if(!document.getElementById("add-img-produto").value.includes("://")){
        alert("O produto precisa de uma imagem");
        return;
    }
    img1.src = imgNova;
    img1.width= "300";
    produto-num1.append(br);
    nome1.replaceWith(nomeNovo);
}

function editar10() {
    let img1 = document.getElementById("imagem10");
    let nome1 = document.getElementById("nome10");
    let imgNova = document.getElementById("add-img-produto").value;
    let nomeNovo = document.getElementById("add-nome-produto").value;
    var br = document.createElement("br");
    if(!document.getElementById("add-img-produto").value.includes("://")){
        alert("O produto precisa de uma imagem");
        return;
    }
    img1.src = imgNova;
    img1.width= "300";
    produto-num1.append(br);
    nome1.replaceWith(nomeNovo);
}

function editar11() {
    let img1 = document.getElementById("imagem11");
    let nome1 = document.getElementById("nome11");
    let imgNova = document.getElementById("add-img-produto").value;
    let nomeNovo = document.getElementById("add-nome-produto").value;
    var br = document.createElement("br");
    if(!document.getElementById("add-img-produto").value.includes("://")){
        alert("O produto precisa de uma imagem");
        return;
    }
    img1.src = imgNova;
    img1.width= "300";
    produto-num1.append(br);
    nome1.replaceWith(nomeNovo);
}

function editar12() {
    let img1 = document.getElementById("imagem12");
    let nome1 = document.getElementById("nome12");
    let imgNova = document.getElementById("add-img-produto").value;
    let nomeNovo = document.getElementById("add-nome-produto").value;
    var br = document.createElement("br");
    if(!document.getElementById("add-img-produto").value.includes("://")){
        alert("O produto precisa de uma imagem");
        return;
    }
    img1.src = imgNova;
    img1.width= "300";
    produto-num1.append(br);
    nome1.replaceWith(nomeNovo);
}