export interface Funcionarios{
  id?: number;
  nome: string;
  sobrenome: string;
  departamento: string;
  ativo: boolean;
  turno: string;
  dataDeCriacao?: string;
  dataDeAlteracao?: string;
}