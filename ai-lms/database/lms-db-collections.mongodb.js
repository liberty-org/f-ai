/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = "lms-test";

// Create a new database.
use(database);

// The prototype form to create a collection:
// Create the 'users' collection
db.createCollection("users");

// You can enforce a unique constraint on email if desired:
db.users.createIndex({ email: 1 }, { unique: true });
// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/
