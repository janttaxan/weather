export class WordForms {
  private readonly one: string;
  private readonly few: string;
  private readonly many: string;
  private readonly zero: string;

  constructor(one: string, few: string, many: string, zero = '') {
    this.one = one;
    this.few = few;
    this.many = many;
    this.zero = zero;
  }

  public choosePlural(value: number): string {
    if (value <= 0) {
      return this.zero;
    }
    const dozens = value % 100;
    if (dozens >= 5 && dozens <= 20) {
      return this.many;
    }
    const ending = value % 10;
    if (ending === 1) {
      return this.one;
    }
    if (ending >= 2 && ending <= 4) {
      return this.few;
    }
    return this.many;
  }

  public getPlural(value: number, space = '\xa0', hasNumberOne = false): string {
    if (value <= 1 && !hasNumberOne) {
      return this.choosePlural(value);
    }
    return `${value}${space}${this.choosePlural(value)}`;
  }
}
