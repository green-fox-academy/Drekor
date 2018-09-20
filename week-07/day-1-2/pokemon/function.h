#include <stdio.h>
#include <string.h>
typedef enum {

    normal,
    fire,
    water,
    electric,
    grass,
    ice,
    fighting,
    poison,
    ground,
    flying,
    psychic,
    bug,
    rock,
    ghost,
    dragon,
    dark,
    steel,
    fairy

}typeOfThePokemon;

typedef struct {
   char nameOfThePokemon[256];
   float ageOfThePokemon;
   float strengthOfThePokemon;
   float speedOfThePokemon;
   typeOfThePokemon type;

}pokemon;

int getFasterPokemons (pokemon * poki, int numberOfPokis, int speed);

int getTypeCount (pokemon * poki, int length, typeOfThePokemon type);

typeOfThePokemon getTheStrongestOne (pokemon * poki, int length, int strength);
