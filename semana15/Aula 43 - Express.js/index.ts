import express, { Express, Request, Response } from "express";
import cors from "cors";
import { countries, country } from "./countries";

const app: Express = express();

app.use(express.json());
app.use(cors());

//endpoint 1
app.get("/countries", (req: Request, res: Response) => {
  const result = countries.map((country: country) => {
    return { id: country.id, name: country.name };
  });

  res.status(200).send(result);
});

//endpoint 3
app.get("/countries/search", (req: Request, res: Response) => {
  let result: country[] = countries;
  try {
    if (!req.query.name && !req.query.capital && !req.query.continent) {
      throw new Error("Invalid Parameters");
    }
    if (req.query.name) {
      result = result.filter((country) =>
        country.name.includes(req.query.name as string)
      );
    }

    if (req.query.capital) {
      result = result.filter((country) =>
        country.capital.includes(req.query.capital as string)
      );
    }

    if (req.query.continent) {
      result = result.filter((country) =>
        country.continent.includes(req.query.continent as string)
      );
    }
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//endpoint 2, mais para baixo pela prioridade
app.get("/countries/:id", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const result: country | undefined = countries.find(
      (country) => country.id === Number(req.params.id)
    );

    if (!result) {
      errorCode = 404;
      throw new Error();
    }
    //deu tudo certo
    res.status(200).send(result);
  } catch (error) {
    //deu tudo errado
    console.log(error);
    res.status(errorCode).send(error.message);
  }
});

//endpoint 4
app.post("/countries/:id", (req: Request, res: Response) => {
  let errorCode: number = 400;
  //inicio de um sonho
  try {
    const countryIndex: number = countries.findIndex(
      (country) => country.id === Number(req.params.id)
    );

    if (countryIndex === -1) {
      errorCode = 404;
      throw new Error();
    }

    if (!req.body.name && !req.body.capital) {
      throw new Error("Invalid Parameters");
    }

    if (req.body.name) {
      countries[countryIndex].name = req.body.name;
    }
    if (req.query.capital) {
      countries[countryIndex].capital = req.body.capital;
    }

    //deu tudo certo
    res.status(200).send("Country successfully updated");
  } catch (error) {
    //deu tudo errado
    console.log(error);
    res.status(errorCode).send(error.message);
  }
});

//endpoint 5 - Deletar país
app.delete("/countries/:id", (req: Request, res: Response) => {
  let errorCode: number = 400;
  //inicio de um sonho
  try {
    const authorization = req.headers.authorization as string;
    if (!authorization || authorization.length < 10) {
      errorCode = 401;
      throw new Error("Unauthorized");
    }
    const countryIndex: number = countries.findIndex(
      (country) => country.id === Number(req.params.id)
    );

    if (countryIndex === -1) {
      errorCode = 404;
      throw new Error();
    }
    countries.splice(countryIndex, 1);

    //deu tudo certo
    res.status(200).send("Delete Country successfully");
  } catch (error) {
    //deu tudo errado
    console.log(error);
    res.status(errorCode).send(error.message);
  }
});

//endpoint 6 - Criar país
app.post("/countries", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const authorization: string = req.headers.authorization as string;
    if (!authorization || authorization.length < 10) {
      errorCode = 401;
      throw new Error("Unauthorized");
    }
    if (!req.body.name && !req.body.capital && !req.body.continent) {
      throw new Error("Invalid Parameters");
    }
    const countryName: number = countries.findIndex(
      (country) => country.name === req.body.name
    );

    if (countryName !== -1) {
      errorCode = 409;
      throw new Error("country already exists");
    }

    const newCountry: country = {
      id: Date.now(),
      name: req.body.name,
      capital: req.body.capital,
      continent: req.body.continent,
    };

    countries.push(newCountry);

    //deu tudo certo
    res.status(200).send({ message: "Success!", conuntry: newCountry });
  } catch (error) {
    //deu tudo errado
    console.log(error);
    res.status(errorCode).send(error.message);
  }
});

app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003");
});
