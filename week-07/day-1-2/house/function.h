#include <stdio.h>


typedef struct {
    int address;
    float priceInEUR;
    int numberOfRooms;
    float theAreaOfTheHouseInSquareMeters;
}house;

void calculateIfItsWorth (house * pointedHouse);
int numberOfWorth (house * hs, int length);
