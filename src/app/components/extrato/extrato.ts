import { Component, input } from '@angular/core';
import { TransacaoCompoent } from "./transacao/transacao";
import type { Transacao } from '../../models/transacao';

@Component({
  selector: 'app-extrato',
  imports: [TransacaoCompoent],
  templateUrl: './extrato.html',
  styleUrl: './extrato.css',
})
export class Extrato {
  transacoes = input.required<Transacao[]>();
}
