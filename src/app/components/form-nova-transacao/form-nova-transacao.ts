import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TipoTransacao, Transacao } from '../../models/transacao';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-form-nova-transacao',
  imports: [FormsModule, KeyValuePipe],
  templateUrl: './form-nova-transacao.html',
  styleUrl: './form-nova-transacao.css',
})
export class FormNovaTransacao {
  tipoTransacao = "";
  valorTransacao = "";

  transacaoCriada = output<Transacao>();

  tipoTransacaoEnum = TipoTransacao;

  handleSalvarTransacao() {
    const transacao = new Transacao(
      this.tipoTransacao as TipoTransacao,
      Number(this.valorTransacao)
    );

    this.transacaoCriada.emit(transacao);

    this.tipoTransacao = "";
    this.valorTransacao = "";
  }
}
