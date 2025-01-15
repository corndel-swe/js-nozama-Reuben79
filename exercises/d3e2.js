// https://tech-docs.corndel.com/express/sending-errors.html

export class AppError extends Error {
  constructor(message, code) {
    super(message)
    this.code = code
  }
}

export class Account {
  constructor(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
  }

  updateUsername(newUsername, password) {
    if (!newUsername) { throw new AppError('New username is required', 400) 

    } 
    
    if (!password) { throw new AppError('Password is required', 401) 

    } 
    
    if (password !== this.password) { throw new AppError('Incorrect password', 403) 

    }
    this.username = newUsername
    // If newUsername is not given, throw an AppError with code 400 (Bad Request)
    // If password is not given, throw an AppError with code 401 (Unauthorized)
    // If password is given but not correct, throw an AppError with code 403 (Forbidden)
    // If newUsername is given and password is correct, update the username
  }
}
