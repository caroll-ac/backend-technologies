export class Empresa{
    private readonly colaboradores: Colaborador[] = [];
    constructor(
        public readonly nome: string,
        protected readonly cnpj: string,
    ) {}

    adicionaMembro(colaboradores: Colaborador): void {
        this.colaboradores.push(colaboradores);
    }

    mostrarMembro(): void{
        for (const colaborador of this.colaboradores){
            console.log(`${colaborador.nome} ${colaborador.sobrenome}`);
        }
    }

    mostrarEmpresa(): void{
        console.log(`
🏢 EMPRESA: ${this.nome}
📜 CNPJ: ${this.cnpj}
👥 Colaboradores: ${this.colaboradores.length}
        `);
    }
}// end class Empresa

export class Colaborador{
    constructor(
        public readonly nome: string,
        public readonly sobrenome: string,
    ) {}
} //end class Colaboradores

const empresa = new Empresa("Bazar", "00.000.000/01");
const colaborador1 = new Colaborador("Ana", "Clara");
const colaborador2 = new Colaborador("Jonas", "Paulo");
const colaborador3 = new Colaborador("Carlos", "Caio");
empresa.adicionaMembro(colaborador1);
empresa.adicionaMembro(colaborador2);
empresa.adicionaMembro(colaborador3);

empresa.mostrarEmpresa();
empresa.mostrarMembro();