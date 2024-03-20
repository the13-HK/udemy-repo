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
  outputName?: string; // ?��optional
}

interface Greetable extends Named {
  readonly name: string;

  greet(phrase: string): void;
}
// interface��class�̂悤�Ȃ��́Bclass�̂悤�Ȃ��̂���邱�Ƃ��ł���B�������\���̂�
// interface�Ɛ錾����ӏ���type�ł���։\�����Ainterface�͍\���̐錾�̂݁B��|�����m�ɂȂ邽�߁Ainterface���g�����Ƃ������B
// interface�͎��ۂ�Javascript�ɂ̓R���p�C������Ȃ��B�������A�^�̃`�F�b�N���s�����߂ɃR���p�C�����Ɏg����B
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
