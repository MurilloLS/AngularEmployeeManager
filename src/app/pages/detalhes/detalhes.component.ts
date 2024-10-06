import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionarios } from '../../models/Funcionarios';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent implements OnInit{

  funcionario!: Funcionarios;
  id!:number

  constructor(private readonly funcionarioService: FuncionarioService, private readonly route: ActivatedRoute, private readonly router: Router){}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.funcionarioService.GetFuncionarioId(this.id).subscribe(response => {
      
      const dados = response.dados;

      dados.dataDeCriacao = new Date(dados.dataDeCriacao!).toLocaleDateString('pt-BR');

      dados.dataDeAlteracao = new Date(dados.dataDeAlteracao!).toLocaleDateString('pt-BR');
      
      this.funcionario = response.dados; 
    })
  }

  inativaFuncionario() {
    this.funcionarioService.InativaFuncionario(this.id).subscribe(response => {
      this.router.navigate(['/']);
    })
  }
}
