window.onload = () => {
    console.log("betöltődött")

    let pascalhova = document.getElementById("pascal")
    pascalhova.innerHTML = ""

    var nfaktorialis = function (n)
    {
        if (n === 0 | n === 1)
        {
            return 1;
        }
        else
        {
            return n * nfaktorialis(n - 1);

        }
    }
    

    for (var s = 0; s < 10; s++)
    {
        let sor = document.createElement("div");
        sor.classList.add("sorba")
        pascalhova.appendChild(sor)
        
        for (var o = 0; o <= s; o++)
        {
            let elem = document.createElement("div")
            sor.appendChild(elem)
            elem.innerText = nfaktorialis(s)/ (nfaktorialis(o) * nfaktorialis(s-o))
            elem.classList.add("oszlopba")
        }
    }
}