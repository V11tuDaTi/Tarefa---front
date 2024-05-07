Projeto de Formulário de Contato com Validação de Padrões

Este projeto trata-se de um formulário de contato que realiza validações nas entradas do usuário utilizando padrões de expressões regulares (Regex). O formulário contempla campos para o nome, e-mail e telefone do usuário.

Padrões de Expressões Regulares Utilizados

Os seguintes padrões de expressões regulares são empregados para validar as entradas do usuário:

Nome: ^[a-zA-ZÀ-ú\s']+$
Este padrão de expressão regular valida o campo do nome, verificando se contém somente letras (incluindo letras acentuadas), espaços e apóstrofos. Essa validação é útil para aceitar nomes que possam incluir caracteres especiais, como acentos ou apóstrofos.
Telefone: ^[0-9]{2} [0-9]{4,5}-[0-9]{4}$
Este padrão de expressão regular valida o campo do telefone, assegurando que esteja no formato adequado, conforme o padrão brasileiro (XX) XXXX-XXXX ou (XX) XXXXX-XXXX.
E-mail: ^[^\s@]+@[^\s@]+\.[^\s@]{2,}$
Este padrão de expressão regular valida o campo do e-mail, garantindo que esteja no formato correto, com um nome de usuário seguido por um domínio.
Instruções de Utilização

Para utilizar este projeto, simplesmente clone o repositório e abra o arquivo index.html em seu navegador. A partir daí, você poderá preencher o formulário e observar as validações em funcionamento.