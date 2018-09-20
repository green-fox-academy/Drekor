#include "function.h"

int main()
{

    pokemon poki1;
    strcpy(poki1.nameOfThePokemon,"Kakuna");
    poki1.ageOfThePokemon = 100;
    poki1.speedOfThePokemon = 0.5;
    poki1.strengthOfThePokemon = 2.0;
    poki1.type = normal;

    pokemon poki2;
    strcpy(poki2.nameOfThePokemon,"Dustox");
    poki2.ageOfThePokemon = 2;
    poki2.speedOfThePokemon = 1.0;
    poki2.strengthOfThePokemon = 2.9;
    poki2.type = fire;

    pokemon poki3;
    strcpy(poki3.nameOfThePokemon,"Luxio");
    poki3.ageOfThePokemon = 1;
    poki3.speedOfThePokemon = 5.1;
    poki3.strengthOfThePokemon = 8.9;
    poki3.type = water;

    pokemon pokeball[] = {poki1,poki2,poki3};
    int numberOfPokis = sizeof(pokeball)/sizeof(pokemon);

    printf("%d pokemon faster than you!\n",getFasterPokemons(pokeball,numberOfPokis,3));
    printf("%d pokemon is written to that type!\n",getTypeCount(pokeball,numberOfPokis,fire));
    printf("%d is the strongest pokemon!",getTheStrongestOne(pokeball,numberOfPokis,2.8));
    // printf()

    return 0;
}
