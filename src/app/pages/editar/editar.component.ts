import { Component, OnInit } from '@angular/core';
import { FuncionarioFormComponent } from '../../componentes/funcionario-form/funcionario-form.component';
import { FuncionarioService } from '../../services/funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionarios } from '../../models/Funcionarios';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FuncionarioFormComponent, CommonModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit {
  btnAcao: string = "Editar";
  descTitulo: string = "Editar Funcionário"
  funcionario!: Funcionarios;

  constructor(private readonly funcionarioService: FuncionarioService, private readonly router: Router, private readonly route: ActivatedRoute) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.funcionarioService.GetFuncionarioId(id).subscribe(response => {
      this.funcionario = response.dados;
    });
  }

  editarFuncionario(funcionario: Funcionarios){
    this.funcionarioService.EditarFuncionario(funcionario).subscribe(response => {
      this.router.navigate(['/']);
    })
  }
}
