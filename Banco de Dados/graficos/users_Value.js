import { getCSS, tickConfig } from './comum.js';


async function users_network() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json';
    const res = await fetch(url);
    const dados = await res.json();
    const nome_Redes = Object.keys(dados);
    const quantidade_Users = Object.values(dados);

    const data = [
        {
            x: nome_Redes,
            y: quantidade_Users,
            type: 'bar',
            marker: {
                color: "purple",
            }
        }
    ];

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'nome das redes sociais',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'bilhões de usuários ativos',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        }
    };

    const grafico = document.createElement('div');
    grafico.className = 'graficos';
    document.getElementById('graficos-container').appendChild(grafico);
    Plotly.newPlot(grafico, data, layout)
}

users_network()