const input = document.querySelector('input[name="price"]')
input.addEventListener('keydown', function(event) {
    
    setTimeout(function() {
        let { value } = event.target

        //first time passing through "replace and NumberFormat"
        //1 will transform in -> R$1,00 real
        //second time
        //R$1,00 will transform in -> 100
        //to fix the problem you've gotta do this: R$1,00 -> 100 / 100
        //this will return number 1 again
        //another exemple: R$180,23 -> 18023 / 100 will return 180.23
        value = value.replace(/\D/g, "")

        value = Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value/100)

        event.target.value = value
    }, 1)
})