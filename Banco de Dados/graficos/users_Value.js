import { getCSS } from './comum';


async function users_network() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json';
    const res = await fetch(url);
    const dados = await res.json();
    const nome_Redes = Object.values(dados);
    const quantidade_Users = Object.values(dados);

    const data = [
        {
            x: nome_Redes,
            y: quantidade_Users,
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')
            }
        }
    ];

    const layout = {
        plot_bgColor: getCSS('--bg-color'),
        paper_bgColor: getCSS('--bg-color'),
    };

    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('grafico-container').appendChild(grafico);
    Plotly.newPlot(grafico, data, layout)
}