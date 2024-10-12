import { Component, inject, OnInit } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service';
import { Funcionarios } from '../../models/Funcionarios';
import { RouterModule } from '@angular/router';
import { ConfirmationDialogService } from '../../shared/services/confirmation-dialog/confirmation-dialog.service';


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

  search(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value.trim().toLowerCase();
  
    this.funcionarios = this.funcionariosGeral.filter(funcionario => {

      const fullName = `${funcionario.nome} ${funcionario.sobrenome}`.toLowerCase().trim();
      
      return fullName.includes(value) || 
             funcionario.nome.toLowerCase().includes(value) || 
             funcionario.sobrenome.toLowerCase().includes(value) ||
             funcionario.departamento.toLowerCase().includes(value);
    });
  }
  

  deletar(id: number) {
    this.serviceFuncionario.DeletarFuncionario(id).subscribe(response => {
      window.location.reload()
    })
  }


  confirmationService = inject(ConfirmationDialogService);

  async openModal(id: number) {
    const confirmed = await this.confirmationService.confirm(
      "Tem certeza disso?", 
      "Não será possível recuperar o funcionário.", 
      "Confirmar", 
      "Cancelar"
    );
  
    if (confirmed) {
      this.deletar(id);
    }
  }
   
}

