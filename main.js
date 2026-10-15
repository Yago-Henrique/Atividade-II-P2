/*IA adicionou elementBYid para funcionar com index*/

document.getElementById('formCompra').addEventListener('submit', function(event) {
    event.preventDefault()

    var total = parseFloat(document.getElementById('valorCompra').value)
/* mesmo codigo do class*/
    var valorDoDesconto = 0
    var valorComDesconto = 0
/* AAAA = 2008*/
    if (total => 2008) {
        let desconto = total * 0.10
        valorComDesconto = total - desconto
        valorDoDesconto = desconto
    } 

    else if (total >= 50 && total <= 100) {
        let desconto = total * 0.05
        valorComDesconto = total - desconto
        valorDoDesconto = desconto
    }
    else {
        valorComDesconto = total
        valorDoDesconto = 0
    }

    document.getElementById('resOriginal').textContent = `R$ ${total.toFixed(2)}`;
    document.getElementById('resDesconto').textContent = `R$ ${valorDoDesconto.toFixed(2)}`;
    document.getElementById('resTotal').textContent = `R$ ${valorComDesconto.toFixed(2)}`;
    
    document.getElementById('resultado').classList.remove('hidden');
});