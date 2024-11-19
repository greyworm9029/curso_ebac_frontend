class Computador {
    constructor(cpu, gpu, ram) {
        this.cpu = cpu;
        this.gpu = gpu;
        this.ram = ram;

    }

    // Ligando o computador
    ligar() {
        return 'Ligando o computador...';
    }

    // Desligando o computador
    desligar() {
        return 'Desligando o computador...';
    }

}

// Notebook
class Notebook extends Computador {
    constructor(modelo, cpu, gpu, ram, tela) {
        super(cpu, ram, gpu);
        this.tela = tela;
        this.modelo = modelo;
    }

    ligar() {
        return 'Ligando o notebook...';
    }

    desligar() {
        return 'Desligando o notebook...';
    }
}

// Servidor
class Servidor extends Computador {
    constructor(nome, cpu, gpu, ram) {
        super(cpu, gpu, ram);
        this.nome = nome;
    }

    ligar() {
        return 'Iniciando os serviços...';
    }

    desligar() {
        return 'Encerrando os serviços...';
    }
}

// Instancias
const pc1 = new Computador(
    'Intel Core Ultra 5',
    'RTX 4080',
    '64GB');

const mac1 = new Notebook(
    'Notebook Asus Rog Strix',
    'AMD Ryzen 7 8840HS',
    'AMD Radeon 780M',
    '32GB',
    16.0);

const server1 = new Servidor(
    'Lenovo ThinkCenter',
    'Intel Xeon Platinum 8593Q',
    'RTX Quadro A5000',
    '256GB'
);

// Execuçao
console.log(pc1);
console.log(pc1.ligar());
console.log(pc1.desligar());

console.log(mac1);
console.log(mac1.ligar());
console.log(mac1.desligar());

console.log(server1);
console.log(server1.ligar());
console.log(server1.desligar());