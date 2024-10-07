import { Component, EventEmitter, Input, OnInit, Output, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Funcionarios } from '../../models/Funcionarios';

@Component({
  selector: 'app-funcionario-form',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './funcionario-form.component.html',
  styleUrl: './funcionario-form.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class FuncionarioFormComponent implements OnInit {
  @Input() btnAcao!: string;
  @Input() descTitulo!: string;
  @Input() dadosFuncionario: Funcionarios | null = null;
  @Output() onSubmit = new EventEmitter<Funcionarios>();

  funcionarioForm!: FormGroup;

  ngOnInit(): void {
    
    this.funcionarioForm = new FormGroup({
      id: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.id : 0),
      nome: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.nome :'', [Validators.required]),
      sobrenome: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.sobrenome : '', [Validators.required]),
      departamento: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.departamento : '', [Validators.required]),
      turno: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.turno : '', [Validators.required]),
      ativo: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.ativo : true),
      dataDeCriacao: new FormControl(new Date()),
      dataDeAlteracao: new FormControl(new Date()),
    });
  }

  submit() {
    this.onSubmit.emit(this.funcionarioForm.value);
  }
}
