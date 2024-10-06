import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service';
import { Funcionarios } from '../../models/Funcionarios';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  funcionarios: Funcionarios[] = [];
  funcionariosGeral: Funcionarios[] = [];

  constructor(private serviceFuncionario: FuncionarioService) {}

  ngOnInit(): void {
    this.serviceFuncionario.GetFuncionarios().subscribe(response => {
      const dados = response.dados;

      dados.map((item) => {
        item.dataDeCriacao = new Date(item.dataDeCriacao!).toLocaleDateString('pt-BR')
        item.dataDeAlteracao = new Date(item.dataDeAlteracao!).toLocaleDateString('pt-BR')
      })

      this.funcionarios = response.dados;
      this.funcionariosGeral = response.dados;
    });
  }

  search(event : Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.funcionarios = this.funcionariosGeral.filter(funcionario => {
      return funcionario.nome.toLowerCase().includes(value);
    })
  }

  deletar(id: number) {
    this.serviceFuncionario.DeletarFuncionario(id).subscribe(response => {
      window.location.reload()
    })
  }
  
}

