#include "function.h"

/*
Create a struct that represents a House
It should store:
 - The address of the house
 - The price in EUR
 - The number of rooms
 - The area of the house in square meters
The market price of the houses is 400 EUR / square meters
Create a function that takes a pointer to a house and decides if it's worth to buy
(if the price is lower than the calculated price from it's area)
Create a function that takes an array of houses (and it's length), and counts the
houses that are worth to buy.
*/

int main()
{

    house newHouse;
    newHouse.address = 1142;
    newHouse.theAreaOfTheHouseInSquareMeters = 251.9;
    newHouse.priceInEUR = 10000;
    newHouse.numberOfRooms = 5;

    house newHouse2;
    newHouse2.address = 1042;
    newHouse2.theAreaOfTheHouseInSquareMeters = 1000;
    newHouse2.priceInEUR = 251.9;
    newHouse2.numberOfRooms = 5;

    house garage[] = {newHouse,newHouse2};
    int numberOfHouses = sizeof(garage)/sizeof(house);

    calculateIfItsWorth(&newHouse);
    numberOfWorth(garage,numberOfHouses);

    return 0;
}
