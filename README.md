# Babel/Flow Generic Class Error

## Steps to reproduce

1. Clone this repo
2. Run `yarn install`
3. Run `yarn build`

**Notice the invalid output:

`export default new MyClass() < string > 'test';`

where the type `<string>` was not stripped
