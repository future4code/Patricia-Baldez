import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

enum USER_ROLES {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}

type User = {
  id: number,
  name: string,
  email: string,
  type: USER_ROLES,
  age: number
}

let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: USER_ROLES.ADMIN,
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: USER_ROLES.NORMAL,
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: USER_ROLES.NORMAL,
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: USER_ROLES.NORMAL,
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: USER_ROLES.ADMIN,
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: USER_ROLES.ADMIN,
      age: 60
  }
]

app.get("/users", (req: Request, res: Response) => {
  try {
    let type = req.query.type as string
    let search = req.query.search as string

    if (type) {
      type = type.toUpperCase()

      if (type in USER_ROLES) {
        const result = users.filter(user => user.type === type)
        return res.status(200).send(result)
      }

      throw new Error("Invalid type")
    }

    if (search) {
      search = search.toLowerCase()

      const result = users.filter(
        user => user.name.toLowerCase().includes(search)
      )

      console.log(result, search)

      if (result.length === 0) {
        return res.status(204).send("No user was found")
      }
      
      return res.status(200).send(result)
    }

    res.status(200).send(users)
  } catch (err) {
    res.status(400).send(err.message)
  }
})

app.post("/users", (req: Request, res: Response) => {
  try {
    const { name, email, age } = req.body
    let type = req.body.type as string
    
    if (!name || !email || !age || !type) {
      throw new Error("Missing data in body to create user")
    }

    if (typeof name !== "string") {
      throw new Error("Invalid name")
    }

    if (typeof email !== "string") {
      throw new Error("Invalid email")
    }

    if (typeof age !== "number") {
      throw new Error("Invalid age")
    }

    type = type.toUpperCase()
    if (!(type in USER_ROLES)) {
      throw new Error("Invalid type")
    }

    users.forEach(user => {
      if (user.email === email) {
        throw new Error("Email already exists")
      }
    })

    const newUser: User = {
      id: users.length + 1,
      name,
      email,
      age,
      type: type === USER_ROLES.NORMAL
        ? USER_ROLES.NORMAL
        : USER_ROLES.ADMIN
    }

    users.push(newUser)

    res.status(200).send({
      message: "user created successfuly",
      user: newUser
    })
  } catch (err) {
    res.status(400).send(err.message)
  }
})

app.put("/users/:id", (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)

    if (isNaN(id)) {
      throw new Error("Invalid id")
    }

    users.forEach(user => {
      if (user.id === id) {
        user.name += "-ALTERADO"
        return res.status(200).end()
      }
    })
    res.status(204).send("User not found")
  } catch (err) {
    res.status(400).send(err.message)
  }
})

app.patch("/users/:id", (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)

    if (isNaN(id)) {
      throw new Error("Invalid id")
    }

    users.forEach(user => {
      if (user.id === id) {
        user.name += "-REALTERADO"
        return res.status(200).end()
      }
    })
    res.status(204).send("User not found")
  } catch (err) {
    res.status(400).send(err.message)
  }
})

app.delete("/users/:id", (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)

    if (isNaN(id)) {
      throw new Error("Invalid id")
    }

    for (let i = 0; i < users.length; i++) {
      if (users[i].id === id) {
        users.splice(i, 1)
        return res.status(200).end()
      }
    }

    res.status(204).send("User not found")
  } catch (err) {
    res.status(400).send(err.message)
  }
})

app.listen(3003, () => {
  console.log("Server is running at http://localhost:3003")
})
