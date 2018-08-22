'use strict'

export abstract class Animal {

  protected name: string;
  protected age: number;
  protected gender: string;
  protected livingPlace: string;
  protected smile: boolean;

  constructor(name: string, age: number, gender: string, livingPlace: string, smile: boolean) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.livingPlace = livingPlace;
    this.smile = smile;
  }

  getName(): string {
    return this.name;
  }
  abstract breed(): string
}
