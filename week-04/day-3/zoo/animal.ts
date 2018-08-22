'use strict'

export abstract class Animal {

  protected name: string;
  protected age: number;
  protected gender: string;
  protected livingPlace: string;
  protected smile: boolean;

  getName(): string {
    return this.name;
  }
  abstract breed(): string
}
