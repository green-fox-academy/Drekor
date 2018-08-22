'use strict';

import { StringedInstrument } from "./stringedInstrument";

export class BassGuitar extends StringedInstrument {
  voice: string;

  constructor(numberOfStrings: number = 4) {
    super();
    this.name = 'Bass Guitar';
    this.numberOfStrings = numberOfStrings;
    this.voice = 'Duum-duum-duum';

  }
  sound(): string {
    return this.voice;
  }

  play() {
    return super.play()
  }
}