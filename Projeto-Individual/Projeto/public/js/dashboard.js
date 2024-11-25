function dashboard() {
    // Coleta os valores do intervalo de episódios do formulário
    const episodioMin = document.getElementById("ipt_episodio_min").value;
    const episodioMax = document.getElementById("ipt_episodio_max").value;
    
    // Validação simples para garantir que os valores de intervalo são válidos
    if (!episodioMin || !episodioMax || episodioMin > episodioMax) {
        alert("Por favor, insira um intervalo válido.");
        return;
    }

    // ID do usuário (pode ser obtido após login, por exemplo)
    const idUsuario = 1;

    // Realiza a requisição para o backend para buscar os episódios no intervalo fornecido
    fetch(`/dashboard/dados?idUsuario=${idUsuario}&min=${episodioMin}&max=${episodioMax}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao buscar dados do backend.");
            }
            return response.json(); // Retorna os dados JSON do backend
        })
        .then(data => {
            console.log("Dados recebidos:", data); // Verificando os dados recebidos
            renderizarGrafico(data); // Chama a função para renderizar o gráfico
        })
        .catch(error => {
            console.error("Erro:", error);
            alert("Não foi possível carregar os dados. Tente novamente.");
        });
}

function renderizarGrafico(dados) {
    // Obtemos o contexto do canvas para desenhar o gráfico
    const ctx = document.getElementById('grafico').getContext('2d');

    // Extrair dados para o gráfico, utilizando o .map que faz do array em um novo array manipulável para o gráfico!
   //EIXO X
    const labels = dados.map(episodio => `Episódio ${episodio.numeroEpisodio}`);
    //EIXO Y
    const valores = dados.map(episodio => episodio.fkOds);

    // Criando o gráfico
    new Chart(ctx, {
        type: 'bar', // Tipo de gráfico (barras)
        data: {
            labels: labels, // Rótulos para os episódios
            datasets: [{
                label: 'ODS Associada', // NOME QUE VAI SER O "TÍTULO" DO GRÁFICO NO DASHBOARD.HTML
                data: valores, // Dados para o gráfico (fkOds dos episódios)
                backgroundColor: 'rgb(255, 255, 255);', 
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true // Garantir que o eixo Y comece em 0
                }
            }
        }
    });
}


// Expor a função `dashboard` ao escopo global, para ser puxada na dashboard.html e na rota.
window.dashboard = dashboard;

