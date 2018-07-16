// @flow

class MyClass<T> {
  foo: T;

  constructor(foo: T) {
    this.foo = foo;
  }
}

export default new MyClass<string>('test');
