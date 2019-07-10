'use strict';

const { expect } = require('chai');
const {
  omit,
  pick
} = require('../../src/filter');

// eslint-disable-next-line no-undef
describe('LazyFilter test suit', function () {
  // eslint-disable-next-line no-undef
  it(`should omit "email" from the given object`, () => {
    const payload = {
      firstName: 'Pallab',
      email: 'test_lazy@gmail.com'
    };
    const newPayload = omit(payload, 'email');
    // eslint-disable-next-line no-unused-expressions
    expect(newPayload).to.not.have.all.keys('email');
  });

  // eslint-disable-next-line no-undef
  it(`should omit "email", "password", "id" from the given object`, () => {
    const payload = {
      firstName: 'Pallab',
      email: 'test_lazy@gmail.com',
      password: 'test',
      id: 1
    };
    const newPayload = omit(payload, 'email');
    // eslint-disable-next-line no-unused-expressions
    expect(newPayload).to.not.have.all.keys('email', 'password', 'id');
  });

  // eslint-disable-next-line no-undef
  it(`should only show "firstName" from the given object`, () => {
    const payload = {
      firstName: 'Pallab',
      email: 'test_lazy@gmail.com',
      password: 'test',
      id: 1
    };
    const newPayload = pick(payload, 'firstName');
    // eslint-disable-next-line no-unused-expressions
    expect(newPayload).to.have.all.keys('firstName');
  });

  // eslint-disable-next-line no-undef
  it(`should show "firstName", "email" from the given object`, () => {
    const payload = {
      firstName: 'Pallab',
      email: 'test_lazy@gmail.com',
      password: 'test',
      id: 1
    };
    const newPayload = pick(payload, ['firstName', 'email']);
    // eslint-disable-next-line no-unused-expressions
    expect(newPayload).to.have.all.keys(['firstName', 'email']);
  });
});
