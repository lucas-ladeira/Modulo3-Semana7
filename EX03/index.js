let objDevInHouse = {
    plataforma: "DevInHouse",
    cursos: {
        dados: ["SQL"],
        backend: ["Java", "Spring"],
        frontend: ["Javascript", "React"]},
    inovacao_constante: true
};

let objUser = {
    nome: 'Lucas',
    idade: 29,
    cidade: 'Joinville'
};

console.table(objDevInHouse);

objDevInHouse['user'] = objUser;

console.table(objDevInHouse);

console.table(objUser);
objUser.nome = 'Lucas Ladeira da Rocha Bellinazzi';
objUser['idade'] = objUser.idade.toString();

console.table(objUser);