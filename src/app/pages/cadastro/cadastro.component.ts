import { Component } from '@angular/core';
import { FuncionarioFormComponent } from "../../componentes/funcionario-form/funcionario-form.component";
import { Funcionarios } from '../../models/Funcionarios';
import { FuncionarioService } from '../../services/funcionario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FuncionarioFormComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  btnAcao = "Cadastrar";
  descTitulo = "Cadastrar Funcionário";

  constructor(private readonly funcionarioService: FuncionarioService, private readonly router: Router) { }
  
  criarFuncionario(funcionario : Funcionarios) {
    this.funcionarioService.CriarFuncionario(funcionario).subscribe(response => {
      this.router.navigate(['/home'])
    })
  }
}
