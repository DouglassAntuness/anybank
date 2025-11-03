import { Component, input, Pipe, type PipeTransform } from '@angular/core';
import { TipoTransacao, type Transacao } from '../../../models/transacao';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'valorTransacao',
})
export class ValorTransacaoPipe implements PipeTransform {
  transform(valor: number, tipo: string): string {
    const prefixo = tipo === TipoTransacao.SAQUE ? '-' : '';
    return `${prefixo} ${valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
  }
}

@Component({
  selector: 'app-transacao',
  imports: [DatePipe, ValorTransacaoPipe],
  templateUrl: './transacao.html',
  styleUrls: ['./transacao.css'],
})
export class TransacaoComponent {
  transacao = input.required<Transacao>();
}
