main()
{
    double massInKg = 81.2;
    double heightInM = 1.78;

    // Print the Body mass index (BMI) based on these values

    double bme = ( massInKg / heightInM ) /heightInM;

    printf("The BME is: %.2f",bme);
}
