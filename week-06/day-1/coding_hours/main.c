#include<stdio.h>

main()
{
  // An average Green Fox attendee codes 6 hours daily
  // The semester is 17 weeks long
  //
  // Print how many hours is spent with coding in a semester by an attendee,
  // if the attendee only codes on workdays.
  //
  // Print the percentage of the coding hours in the semester if the average
  // work hours weekly is 52

  char dailyCoding = 6;
  char oneSemester = 17;
  char days = 5;
  int weeklyCoding = dailyCoding * days;
  int attendeeCodingSum = weeklyCoding * oneSemester;
  printf("%d\n",attendeeCodingSum);

  char newAverageCodingHoursInTheWeek = 52;
  int newAttendeeCodingSum = newAverageCodingHoursInTheWeek * oneSemester;
  int daysSum = oneSemester * days;
  int AttendeeOneDayPersentage = newAttendeeCodingSum / daysSum;
  printf("%d\n",AttendeeOneDayPersentage);
}
