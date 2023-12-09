import React, { useState } from 'react';
import './Cadastro.css'; // Importa o arquivo de estilo
const Cadastro = () => {
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Verifique se todos os campos obrigatórios estão preenchidos
    const camposObrigatorios = [
      'nome',
      'sobrenome',
      'cpf',
      'cep',
      'rua',
      'numero',
      'cidade',
      'estado',
      'email',
      'login',
      'pass',
      'passconfirm',
    ];
    const camposFaltando = [];

    camposObrigatorios.forEach((campo) => {
      const input = document.getElementById(campo);
      if (!input.value) {
        camposFaltando.push(input.previousElementSibling.textContent.replace(':', ''));
      }
    });

    // Exiba mensagens apropriadas
    if (camposFaltando.length > 0) {
      setMensagem(`Faltam campos a serem preenchidos: ${camposFaltando.join(', ')}`);
    } else {
      setMensagem('Cadastro efetuado com sucesso!');
      event.target.reset(); // Limpe o formulário após o envio bem-sucedido
    }
  };

  const renderFieldset = (legend, inputs) => (
    <fieldset>
      <legend>
        <h3>{legend}</h3>
      </legend>
      {inputs}
    </fieldset>
  );

  const renderInput = (type, name, id, label, required = false) => (
    <div className="form-group">
      <label htmlFor={id}>{label}:</label>
      <input type={type} name={name} id={id} required={required} />
    </div>
  );

  const renderSelect = (id, label, options) => (
    <div className="form-group">
      <label htmlFor={id}>{label}:</label>
      <select name={id} id={id} required>
        <option value="">Selecione {label.toLowerCase()}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="container">
      <h1>Cadastro de usuário</h1>
      <form onSubmit={handleSubmit}>
        {renderFieldset('Dados Pessoais', [
          renderInput('text', 'nome', 'nome', 'Nome', true),
          renderInput('text', 'sobrenome', 'sobrenome', 'Sobrenome', true),
          renderInput('text', 'cpf', 'cpf', 'CPF', true),
          renderInput('text', 'telefone', 'telefone', 'Telefone'),
        ])}
        {renderFieldset('Dados de Endereço', [
          renderInput('text', 'cep', 'cep', 'CEP', true),
          renderInput('text', 'rua', 'rua', 'Rua', true),
          renderInput('text', 'numero', 'numero', 'Número', true),
          renderInput('text', 'cidade', 'cidade', 'Cidade', true),
          renderSelect('estado', 'Estado', [
            'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal',
            'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul',
            'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro',
            'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina',
            'São Paulo', 'Sergipe', 'Tocantins',
          ]),
        ])}
        {renderFieldset('Dados de Login', [
          renderInput('email', 'email', 'email', 'E-mail', true),
          renderInput('file', 'imagem', 'imagem', 'Imagem de perfil'),
          renderInput('text', 'login', 'login', 'Login de usuário', true),
          renderInput('password', 'pass', 'pass', 'Senha', true),
          renderInput('password', 'passconfirm', 'passconfirm', 'Confirme a senha', true),
        ])}
        <div className="button-container">
          <input type="submit" value="Enviar" />
          <input type="reset" value="Limpar" />
        </div>
      </form>
      <p id="mensagem">{mensagem}</p>
    </div>
  );
};

export default Cadastro;
