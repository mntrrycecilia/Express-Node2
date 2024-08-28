const { requireAdmin, requireLogin } = require('../middleware/auth');
const jwt = require('jsonwebtoken');
const {SECRET_KEY } = require('../config');


describe('Authorizaion Middleware', function () {
  it('should throw a 401 error if user is not logged in (requireLogin)', function () {
    const req = { curr_username: null };
    const res = {};
    const next = jest.fn();


    requireLogin(req, res, next); //Test BUG#5

    rxpect(next).toHaveBeenCalledWith(expect.objectContaining({ status: 401, message: 'Unauthorized '}));

    });

    it('should throw a 401 error if user is not admin (requireAdmin)', function () {
      const req = {curr_admin: null };
      const res = {};
      const next = jest.fn();

      requireAdmin(req, res, next); //Test Bug#5

      expect(next).toHaveBeenCalledWith(expect.objectContaining({ staus: 401, message: 'Unauthorized '}));

    });

});