const User = require('../models/user');
const db = require('../db');





it('should throw a 404 error if the user is not found', async function () {
  try {
    await User.get('nonexistentuser');

  }catch (err) {
    expect(err.status).toBe(404);
    expect(err.message).toBe('No such user');
  }
});

describe('User.getAll', function () {
  it() ('should return a list of all users regardless of the passed parameters', async function () {
    const users = await User.getAll('someusername', 'somepassword'); //test BUG#3
    expect(users).toBeInstanceOf(Array);
    expect(users.length).toBeGreaterThan(0);
  });
});