// - Create a two dimensional array
//   which can contain the different shades of specified colors
// - In `colors[0]` store the shades of green:
//   `"lime", "forest green", "olive", "pale green", "spring green"`
// - In `colors[1]` store the shades of red:
//   `"orange red", "red", "tomato"`
// - In `colors[2]` store the shades of pink:
//   `"orchid", "violet", "pink", "hot pink"

int main()
{
/*
    char * PGreen = {"lime", "forest green", "olive", "pale green", "spring green"};
    char * PRed = {"orange red", "red", "tomato"};
    char * PPink = {"orchid", "violet", "pink", "hot pink"};
    char *colors = {PGreen,PRed,PPink};
*/
      char colors[3][5][20] =
 {
    {"lime", "forest green", "olive", "pale green", "spring green"},
    {"orange red", "red", "tomato"},
    {"orchid", "violet", "pink", "hot pink"} };

    printf("%s\n",colors[2][1]);

    return 0;
}
