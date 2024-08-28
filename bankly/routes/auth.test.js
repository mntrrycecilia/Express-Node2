

const { authUser } = require('../middleware/auth');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config');

it('should reject invalid JWT tokens', async function () {
  const invalidToken = 'invalid.token.string';
  const req = {body: { _token: invalidToken } };
  const res = {};
  const next = jest.fn()
;

await authUser(req, res, next);

expect(next).toHaveBeenCalledWith(expect.objectContaining({ status: 401 })); // test BUG#1
});