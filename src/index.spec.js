const index = require('./index');

test('handler returns "Hello, World!"', (done) => {
  index.handler(null, null, (err, message) => {
    expect(message).toBe('Hello, World!');
    done();
  });
});

test('helloWorld logs "Hello, World!"', (done) => {
  const loggerStub = {
    info(message) {
      expect(message).toBe('Hello, World!');
      done();
    },
  };
  index.helloWorld(loggerStub);
});
