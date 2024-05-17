const db = [
  {
    name: 'test',
    email: 'test@example.com'
  }
]

export class UserService {
  createUser = (name: string, email: string) => {
    const user = {
      name,
      email,
    }

    
    db.push(user)
    console.log('DB atualizado!')
    console.log(db)
  };
  
  getAllUsers = () => {
    return db
  }
}