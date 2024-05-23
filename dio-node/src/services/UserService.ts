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
    
    console.log(db, 'default')
    this.db.push(user)
    console.log(db, 'updated db')
  };

  getAllUsers = () => {
    return db
  }
}