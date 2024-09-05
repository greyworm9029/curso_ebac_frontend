$(document).ready(function() {
    // Funçao para adiconar um novo item
    function novoItem() {
        let li = $('<li></li>');
        let inputValor = $('#input').val();
        li.append(inputValor);

        if (inputValor === '') {
            alert("Digite alguma coisa.")
        } else {
            $('#lista').prepend(li);
            $('#input').val(''); // Limpa o campo de dados
        }

        addEventHandlers(li);
    }

    // Funçao para adicionar Manipuladores de Evento/Event Handlers para listar os itens
    function addEventHandlers(li) {
        // Riscando itens da lista ao clicar duas vezes neles
        li.on('dblclick', function() {
            li.toggleClass('strike2');
            if (li.hasClass('strike2')) {
                li.append(' (irrelevante)')
            } else {
                li.contents().filter(function() {
                    return this.nodeType === 3 && this.nodeValue.includes(' (irrelevante)');
                }).remove();
            }
        })

        // Funçao para adicionar uma checkbox para marcar os itens
        let marcarItens = $('<input type="checkbox" class="marcarItens">');
        li.append(marcarItens); // Usando 'prepend' para colocar a checkbox no início

        marcarItens.on("change", function() {
            if (this.checked) {
                $(this).css('accent-color', 'green');
                li.addClass("strike");
                li.append(' (concluida)');
            } else {
                $(this).css('accent-color', '');
                li.contents().filter(function() {
                    return this.nodeType === 3 && this.nodeValue.includes(' (concluida)');
                }).remove();
            };
        })

        // Adicionando a class 'REMOVER' (DISPLAY: NONE) do css:
        let removerBotao = $('<button class="removerBotao">X</button>');
        li.append(removerBotao);

        removerBotao.on("click", function() {
            li.addClass("remover");
        })
    }

    // Reorganizando os itens
    $('#lista').sortable();

    // Adicionando funçao do botao 'Adicionar'
    $('#botao').on("click", novoItem);

    // Adicionando o evento 'keydown' no campo de informaçoes
    $('#input').on('keydown', function(event) {
        if (event.which === 13) {
            novoItem();
            event.preventDefault();
        };
    });
});