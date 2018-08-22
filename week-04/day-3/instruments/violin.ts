
'use strict';

import { StringedInstrument } from "./stringedInstrument";

export class Violin extends StringedInstrument {
  voice: string;

  constructor(numberOfStrings: number = 4) {
    super();
    this.name = 'Violin';
    this.numberOfStrings = numberOfStrings;
    this.voice = 'Screech';

  }
  sound(): string {
    return this.voice;
  }

  play() {
    return super.play()
  }
}