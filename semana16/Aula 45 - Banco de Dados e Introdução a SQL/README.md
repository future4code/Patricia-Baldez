# Labenu | Full-Stack Web Development Bootcamp
Desenvolvimento de aplicações completas, incluindo frontend Web com React e backend com Node.js.

![Screenshot_1](https://e-tinet.com/wp-content/uploads/2018/10/MySQL-banco-de-dados-linux-1024x512-1-2.png)
<br>

## Aula 45 - Banco de Dados e Introdução ao SQL



### Exercício 1

Começaremos pela tabela de atores. Nós vamos guardar as seguintes informações: id, nome, salário, data de nascimento e sexo (que possui as opções `female` e `male`)

```sql
CREATE TABLE Actor (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
```

<br>

*a) Nesta tabela, utilizamos o FLOAT para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. 
Explique os demais comandos que estão nessa query.*

Os comando são:
* __VARCHAR(X)__: pode criar uma string com até X caracteres
* __PRIMARY KEY__: identificador único do item
* __NOT NULL__: não aceita valor nulo
* __DATE__: representa uma data no formato _YYYY-MM-DD_

<br>

*b) O comando `SHOW` é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: `SHOW DATABASES` e `SHOW TABLES`. Explique os resultados.*

O comando `SHOW DATABASES` trouxe as informações dos bancos de dados existentes, no meu caso: *information_schema* e *patricia_dias*

O comando `SHOW TABLES` trouxe as tabelas existentes: Actor e PROFESSORES_LABENU.

<br>

*c) O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. Utilize o comando `SHOW Actor` e explique os resultados.*

O comando `SHOW Actor` gerou erro: <span style="color:red">Error Code: 1064. You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'Actor' at line 1</span>

Já o comando `DESCRIBE Actor` tras as informações referentes a tabela Actors (campo, tipo, se aceita nulo, se é chave primária, etc.)

<br><br>

### Exercício 2

O próximo passo é colocar dados nessa tabela. Vamos começar criando a linha de um ator brasileiro muito famoso.

```sql
INSERT INTO Actor (id, name, salary, birth_date)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
```

Atente-se a 3 fatos nessa query:

1. A ordem dos valores (`VALUES`) é definida pela lista colocada depois do nome da tabela (`ACTOR`): `(id, name, salary, birth_date)`.
2. Os valores `VARCHAR` (strings) devem ser indicados com `"`
3. As datas seguem o padrão: `YYYY-MM-DD`

<br>

*a. Escreva uma query que crie a atriz `Glória Pires`, com o id `002`, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963*

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```

<br>

*b. Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior `002`. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.*

O erro gerado foi: <span style="color:red">Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'</span>
Significa que não é possível criar uma entrada com uma chave primária já existente no banco de dados.

<br>

*Tente usar as queries abaixo. Você vai reparar que elas vão gerar um erro. Anote as mensagens de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esses erros aconteceram. Por fim, corrija individualmente cada query para que funcione, teste o comando e anote-o também como resposta*

*c.*

```sql
INSERT INTO Actor (id, name, salary)
VALUES(
    "003", 
    "Fernanda Montenegro",
    300000,
    "1929-10-19", 
    "female"
);
```

O erro gerado foi: <span style="color:red">Error Code: 1136. Column count doesn't match value count at row 1</span>
Não é possível inserir dados se o número de valores não corresponde ao número de colunas informados nos parênteses

<br>

*d.*

```sql
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
);
```

O erro gerado foi: <span style="color:red">Error Code: 1364. Field 'name' doesn't have a default value</span>
O campo nome não aceita um valor nulo.

<br>

*e.*

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
```

O erro gerado foi: <span style="color:red">Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1</span>
A data de nascimento deveria estar entre aspas.

<br><br>




