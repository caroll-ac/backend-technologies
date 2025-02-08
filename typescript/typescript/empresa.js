"use strict";
exports.__esModule = true;
exports.Colaborador = exports.Empresa = void 0;
var Empresa = /** @class */ (function () {
    function Empresa(nome, cnpj) {
        this.nome = nome;
        this.cnpj = cnpj;
        this.colaboradores = [];
    }
    Empresa.prototype.adicionaMembro = function (colaboradores) {
        this.colaboradores.push(colaboradores);
    };
    Empresa.prototype.mostrarMembro = function () {
        for (var _i = 0, _a = this.colaboradores; _i < _a.length; _i++) {
            var colaborador = _a[_i];
            console.log("".concat(colaborador.nome, " ").concat(colaborador.sobrenome));
        }
    };
    Empresa.prototype.mostrarEmpresa = function () {
        console.log("\n\uD83C\uDFE2 EMPRESA: ".concat(this.nome, "\n\uD83D\uDCDC CNPJ: ").concat(this.cnpj, "\n\uD83D\uDC65 Colaboradores: ").concat(this.colaboradores.length, "\n        "));
    };
    return Empresa;
}()); // end class Empresa
exports.Empresa = Empresa;
var Colaborador = /** @class */ (function () {
    function Colaborador(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    return Colaborador;
}()); //end class Colaboradores
exports.Colaborador = Colaborador;
var empresa = new Empresa("Bazar", "00.000.000/01");
var colaborador1 = new Colaborador("Ana", "Clara");
var colaborador2 = new Colaborador("Jonas", "Paulo");
var colaborador3 = new Colaborador("Carlos", "Caio");
empresa.adicionaMembro(colaborador1);
empresa.adicionaMembro(colaborador2);
empresa.adicionaMembro(colaborador3);
empresa.mostrarEmpresa();
empresa.mostrarMembro();
