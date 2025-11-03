import { Component, computed, signal } from '@angular/core';
import { BannerComponent } from "./components/banner/banner";
import { FormNovaTransacao } from './components/form-nova-transacao/form-nova-transacao';
import { TipoTransacao, type Transacao } from './models/transacao';
import { Extrato } from "./components/extrato/extrato";

@Component({
  selector: 'app-root',
  imports: [BannerComponent, FormNovaTransacao, Extrato],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // assim ele se torna reativo alterando todo o escopo
  transacoes = signal<Transacao[]>([]);
  // assim ele é apenas uma variavel
  // transacoes: Transacao[] = [];

  // computed identifica quando a funcao do callback é alterada, ou seja, quando alterar o this.transacoes vai atualizar o saldo
  saldo = computed(() => {
    return this.transacoes().reduce((acc, transacao) => {
      switch (transacao.tipo) {
        case TipoTransacao.DEPOSITO:
          return acc + transacao.valor;
        case TipoTransacao.SAQUE:
          return acc - transacao.valor
        default:
          throw new Error("Tipo de transação identificado");
      }
    }, 0);
  });

  processarTransacao(transacao: Transacao) {
    if(transacao.tipo == TipoTransacao.SAQUE && transacao.valor > this.saldo()) return alert("Saldo indisponível");
    this.transacoes.update((listaAtual) => [transacao, ...listaAtual]);
  }
}
