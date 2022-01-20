import { User } from "./User";


// RESPOSTAS DOS EXERCÍCIOS DA TARDE

// // ------------------------------ EXERCÍCIO 1 ------------------------------

// // a. *Seria possível imprimir a senha (`password`) atrelada a essa instância?*
// Não, pois trata-se de um atributo privado, que não tem um getter relacionado

// // b. Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
// Apenas 1 vez, antes dos 3 consoles acima


class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(
		id: string,
		email: string,
		name: string,
		password: string
	){
		console.log("Chamando o construtor da classe User")
		this.id = id
		this.email = email
		this.name = name 
		this.password = password
	}

	public getId(): string {
		return this.id
	}

	public getEmail(): string {
		return this.email
	}

	public getName(): string {
		return this.name
	}
}


// // ------------------------------ EXERCÍCIO 2 ------------------------------



// // a. Quantas vezes a mensagem "Chamando o construtor da classe Customer" foi impressa no terminal? 
// Uma vez

// // b. Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal? Por quê?
// Duas vezes. A primeira quando eu instanciei o newUser e a segunda quando instancie o newConsumer. Acredito que esse segundo chamado aconteceça justamente por Consumer ser um filho de User, logo quando o filho é chamado o pai também é

class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }

  public getCreditCard(): string {
    return this.creditCard;
  }
}

// // ------------------------------ EXERCÍCIO 3 ------------------------------

// console.log(`
// Id: ${newConsumer.getId()}
// Nome: ${newConsumer.getName()}
// Email: ${newConsumer.getEmail()}
// Valor total da compra: ${newConsumer.purchaseTotal}
// Cartão de crédito: ${newConsumer.getCreditCard()}
// `)

// // a. Seria possível imprimir a senha (password) atrelada a essa instância? Por quê?
// Não é possível, pois ele não consegue acessar propriedades privadas da classe pai



// // ------------------------------ EXERCÍCIO 4 e 5 ------------------------------

// newConsumer.introduceYourself()




