// Selecionando elementos DOM.

// Elementos número
const inputNumber = document.getElementById("numero");
const btnNumber = document.getElementById("btnNumber");

// Elementos Data
const dia = document.getElementById("dia");
const mes = document.getElementById("mes");
const btnData = document.getElementById("btnData");

// Elementos Aleatorio
const btnAleatorio = document.getElementById("btnAleato");

// Elemento curiosidade
const curiosidade = document.getElementById("curiosidade");

// Adicionando eventos nos Buttons
btnNumber.addEventListener("click", e => {
    const valorInputNum = inputNumber.value;
    if(valorInputNum === "") {
        alert("Digite um número para descobrir uma curiosidade!");
        e.targetDefault();
    }
    fetch(`http://numbersapi.com/${valorInputNum}`)
        .then(res => {
            if (!res.ok) throw new Error(`Erro: ${res.status}`);

            return res.text();
        })
        .then(texto => {
            const h3 = document.createElement('h3');
            const p = document.createElement("p");
            curiosidade.innerText = '';
            h3.innerText = "Curiosidade:";
            p.innerText =  `💡 " ${texto} "`;
            p.style.fontWeight = "bold";


            curiosidade.classList.remove("hidden");
            curiosidade.classList.add("block");
            curiosidade.appendChild(h3);
            curiosidade.appendChild(p);
        })
        .catch(err => {
            console.log(err);
        });
});

btnData.addEventListener("click", () => {
    fetch(`http://numbersapi.com/${mes.value}/${dia.value}/date`)
    .then(res => {
        if (!res.ok) throw new Error(`Erro: ${res.status}`);

        return res.text();
    })
    .then(texto => {
        const h3 = document.createElement('h3');
        const p = document.createElement("p");
        curiosidade.innerText = '';
        h3.innerText = "Curiosidade:";
        p.innerText =  `💡 " ${texto} "`;
        p.style.fontWeight = "bold";


        curiosidade.classList.remove("hidden");
        curiosidade.classList.add("block");
        curiosidade.appendChild(h3);
        curiosidade.appendChild(p);
    })
    .catch(err => {
        console.log(err);
    })
});


btnAleatorio.addEventListener("click", () => {
    fetch("http://numbersapi.com/random/trivia")
    .then(res => {
        if(!res.ok) throw new Error(`Erro: ${res.status}`);

        return res.text();
    })
    .then(texto => {
        const h3 = document.createElement('h3');
        const p = document.createElement("p");
        curiosidade.innerText = '';
        h3.innerText = "Curiosidade:";
        p.innerText =  `💡 " ${texto} "`;
        p.style.fontWeight = "bold";


        curiosidade.classList.remove("hidden");
        curiosidade.classList.add("block");
        curiosidade.appendChild(h3);
        curiosidade.appendChild(p);
    })
    .catch(err => {
        console.log(err);
    });
});