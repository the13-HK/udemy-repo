// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name: string;
  outputName?: string; // ?はoptional
}

interface Greetable extends Named {
  readonly name: string;

  greet(phrase: string): void;
}
// interfaceはclassのようなもの。classのようなものを作ることができる。ただし構造のみ
// interfaceと宣言する箇所はtypeでも代替可能だが、interfaceは構造の宣言のみ。趣旨が明確になるため、interfaceを使うことが多い。
// interfaceは実際のJavascriptにはコンパイルされない。ただし、型のチェックを行うためにコンパイル時に使われる。
class Person implements Greetable {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}
let user1: Person;

user1 = new Person("Max", 30);

user1.greet("Hello I am");
console.log(user1);
