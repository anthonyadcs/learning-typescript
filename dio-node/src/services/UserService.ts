export interface IUser{
  name: string;
  email: string
}

const db = [
  {
    name: 'default database',
    email: 'defaultdb@example.com'
  }
]

export class UserService {
  db: IUser[]

  constructor(database = db){
    this.db = database
  }

  createUser = (name: string, email: string) => {
    const user = {
      name,
      email,
    }
    
    this.db.push(user)

  };

  getAllUsers = () => {
    return db
  }

  deleteUser = (name: string, email: string) => {
    for(let i = 0; i < this.db.length; i++) {
        if(this.db[i].name === name && this.db[i].email === email) {
            this.db.splice(i, 1)
            console.log('Usuário deletado', this.db)
            return
        }
    }
  }
}