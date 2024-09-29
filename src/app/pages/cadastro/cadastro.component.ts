import { Component } from '@angular/core';
import { FuncionarioFormComponent } from "../../componentes/funcionario-form/funcionario-form.component";
import { Funcionarios } from '../../models/Funcionarios';
import { FuncionarioService } from '../../services/funcionario.service';
import { response } from 'express';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FuncionarioFormComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  constructor(private funcionarioService: FuncionarioService, private router: Router) { }
  
  criarFuncionario(funcionario : Funcionarios) {
    this.funcionarioService.CriarFuncionario(funcionario).subscribe(response => {
      this.router.navigate(['/'])
    })
  }
}
