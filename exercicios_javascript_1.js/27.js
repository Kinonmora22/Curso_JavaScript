const height = (alt1, alt2, taxa1, taxa2) => {
    if (alt1 === alt2) return 'As duas crianças têm a mesma altura.';
    var ano_s = 0
    let anos = 0;
    const cresc1 = alt1 * (taxa1 / 100);
    const cresc2 = alt2 * (taxa2 / 100);

    let maior = alt1 > alt2 ? { nome: "Criança 1", altura: alt1, cresc: cresc1 } :
        { nome: "Criança 2", altura: alt2, cresc: cresc2 };
    let menor = alt1 < alt2 ? { nome: "Criança 1", altura: alt1, cresc: cresc1 } :
        { nome: "Criança 2", altura: alt2, cresc: cresc2 };

    while (menor.altura <= maior.altura) {
        menor.altura += menor.cresc;
        maior.altura += maior.cresc;
        anos++;

        if (anos > 1) {
            ano_s = 's'
        } if (anos <= 1) {
            ano_s = ''
        }
        if (anos > 21) {
            return `${menor.nome} não irá passar a ${maior.nome} até os 21 anos.\n
` +
                `Criança 1 terminou com ${alt1 > alt2 ? maior.altura.toFixed(2) : menor.altura.toFixed(2)}cm\n` +
                `Criança 2 terminou com ${alt2 > alt1 ? maior.altura.toFixed(2) : menor.altura.toFixed(2)}cm`;
        }
    }

    return `Levará ${anos} ano${ano_s} para a inversão de altura.\n` +
        `Criança 1: ${alt1 > alt2 ? maior.altura.toFixed(2) : menor.altura.toFixed(2)}cm\n` +
        `Criança 2: ${alt2 > alt1 ? maior.altura.toFixed(2) : menor.altura.toFixed(2)}cm`;
}

console.log(height(250, 300, 10, 2)); 