describe('Auth/Sessions', () => {
  describe('sessions', () => {
    it('should expire after 10 days', () => {});
    it('should create an http-only cookie that expires in 10 days', () => {});
    it('should contain the user id', () => {});
  });

  describe('auth', () => {
    describe('login', () => {
      it('should respond with the user', () => {});
      it('should create a session in the database', () => {});
      it('should respond with 401 and an error when the user does not exist', () => {});
      it('should respond with 401 and an error when the user info is incorrect', () => {});
    });
    xdescribe('logout', () => {
      it('should remove the session from the database when a user logs out', () => {});
      it('should remove the session cookie when a user logs out', () => {});
    });
    describe('signup', () => {
      it('should create a user in the database', () => {});
      it('should return the user information', () => {});
      it('should log a user in once the account is created', () => {});
      it('should create a session when the signup is complete', () => {});
      it('should return 400 with an error when a user already exists', () => {});
    });
    describe('get', () => {
      it('should return the user info', () => {});
      it('should return 401 and an error when the user is not logged in', () => {});
    });
  });
});
