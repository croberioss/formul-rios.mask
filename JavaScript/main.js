$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(XX) XXXXX-XXXX'
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: 'XXX.XXX.XXX-XX'
    })

    $('#cep').mask('00000.000', {
        placeholder: 'XXXXX.XXX'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, insira o seu email',
            cpf: 'Por favor, insira o seu CPF',
            cep: 'Por favor, insira o seu CEP',
            telefone: 'Por favor, insira o seu telefone',
            endereco: 'Por favor, insira o seu endereco',
        },
        submitHandler: function(form) {

        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert('Existem campos errados')
            }
        }
    })
})