// backend1/src/models/UserModel.ts
// This file defines a User model for interacting with the users table in a database using Knex.js.
// It includes methods for adding a user and retrieving a user by their ID.
// It is part of the backend1/src/models directory, which contains data access logic for the application.
// The User model is used to encapsulate the logic for interacting with user data in the database
// and provides a clean interface for other parts of the application to use when working with user data
// without needing to know the details of the database implementation.
import knex from "../db/knex";

class User {
  public static table = "users";

  public static async addUser(
    id: string,
    firstName: string,
    lastName: string
  ) {
    const insertedValue = await knex(this.table)
      .insert({
        id,
        firstName,
        lastName,
      })
      .returning("*");
    return insertedValue;
  }

  public static async getUserById(id: string) {
    const user = await knex(this.table).where({ id }).first();
    return user;
  }
}

export default User;
