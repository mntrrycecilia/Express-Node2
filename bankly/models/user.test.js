const User = require('../models/user');
const db = require('../db');

describe('User.update', function () {
  it('should not allow an update with no data provided', async function () {
    try {
      await User.update('existinguser', {});//Test BUG # 4
    }catch(err) {
      expect(err.status).toBe(404);
      expect(err.message).toBe('No data provided');
    }
  });
});