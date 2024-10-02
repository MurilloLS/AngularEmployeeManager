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
  funcionario!: Funcionarios;

  constructor(private funcionarioService: FuncionarioService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.funcionarioService.GetUsuarioId(id).subscribe(response => {
      this.funcionario = response.dados;
    })
  }
}
