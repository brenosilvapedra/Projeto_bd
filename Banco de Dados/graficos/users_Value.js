import { getCSS } from './comum';


async function users_network() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json';
    const res = await fetch(url);
    const dados = await res.json()
}