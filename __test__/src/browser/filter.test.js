'use strict';
// eslint-disable-next-line no-unused-vars,no-redeclare
/* global global, expect, SetTimeout, chai, expect, describe, it, before, afterEach, beforeEach  */

const expect = chai.expect;

// eslint-disable-next-line no-undef
describe('LazyFilter test suit', function () {
  // eslint-disable-next-line no-undef
  it(`should omit "email" from the given object`, () => {
    const payload = {
      firstName: 'Pallab',
      email: 'test_lazy@gmail.com'
    };
    const newPayload = LazyFilter.omit(payload, 'email');
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
    const newPayload = LazyFilter.omit(payload, 'email');
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
    const newPayload = LazyFilter.pick(payload, 'firstName');
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
    const newPayload = LazyFilter.pick(payload, ['firstName', 'email']);
    // eslint-disable-next-line no-unused-expressions
    expect(newPayload).to.have.all.keys(['firstName', 'email']);
  });

  // eslint-disable-next-line no-undef
  it('should return "undefined" for empty json object in omit', () => {
    const payload = undefined;
    const newPayload = LazyFilter.omit(payload, 'email');
    expect(newPayload).to.be.equal(undefined);
  });

  // eslint-disable-next-line no-undef
  it('should return "undefined" for empty json object in pick', () => {
    const payload = undefined;
    const newPayload = LazyFilter.pick(payload, 'email');
    expect(newPayload).to.be.equal(undefined);
  });

  // eslint-disable-next-line no-undef
  it('should return the exact object for no keys to omit', () => {
    const payload = {
      firstName: 'Pallab',
      email: 'test_lazy@gmail.com',
      password: 'test',
      id: 1
    };
    const newPayload = LazyFilter.omit(payload, undefined);
    expect(payload).to.be.equal(newPayload);
  });

  // eslint-disable-next-line no-undef
  it('should return the exact object for no keys to pick', () => {
    const payload = {
      firstName: 'Pallab',
      email: 'test_lazy@gmail.com',
      password: 'test',
      id: 1
    };
    const newPayload = LazyFilter.pick(payload, undefined);
    expect(payload).to.be.equal(newPayload);
  });

  // eslint-disable-next-line no-undef
  it('should return the exact object for empty array keys to omit', () => {
    const payload = {
      firstName: 'Pallab',
      email: 'test_lazy@gmail.com',
      password: 'test',
      id: 1
    };
    const newPayload = LazyFilter.omit(payload, []);
    expect(payload).to.be.equal(newPayload);
  });
  // eslint-disable-next-line no-undef
  it('should return the exact object for empty array keys to pick', () => {
    const payload = {
      firstName: 'Pallab',
      email: 'test_lazy@gmail.com',
      password: 'test',
      id: 1
    };
    const newPayload = LazyFilter.pick(payload, []);
    expect(payload).to.be.equal(newPayload);
  });
});
