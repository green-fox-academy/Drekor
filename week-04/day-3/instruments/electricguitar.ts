'use strict';

import { StringedInstrument } from "./stringedInstrument";

export class ElectricGuitar extends StringedInstrument {
  voice: string;

  constructor(numberOfStrings: number = 6) {
    super();
    this.name = 'Electric Guitar';
    this.numberOfStrings = numberOfStrings;
    this.voice = 'Twang';

  }

  sound(): string {
    return this.voice;
  }

  play() {
    return super.play()
  }
}