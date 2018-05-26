export default `
# Tile Tap

Simple Android game to test color-distinguishing skill.

[Google PlayStore Listing](https://play.google.com/store/apps/details?id=com.jhchoe.tiletap)

![tiletap_mobile1](https://user-images.githubusercontent.com/8836645/40570628-a6c5097c-605a-11e8-976f-439337076e0e.png)
![tiletap_mobile2](https://user-images.githubusercontent.com/8836645/40570626-a6a61d8c-605a-11e8-8e1e-0beac6884281.png)
![tiletap_mobile3](https://user-images.githubusercontent.com/8836645/40570627-a6b638e8-605a-11e8-9b9c-38a7eed97d3b.png)

------

### Motivation

Although mildly, I'm color blind.
I found out that I am by taking a simple test where one can try to see if they can read a number or a letter from a card with colored bubbles (Ishihara test, picture shown below).
As frustrating as it was, I was intrigued by the design of that test mechanism; simple, yet effective.

![ishihara test](https://upload.wikimedia.org/wikipedia/commons/d/d2/Ishihara-Test.svg)

Initially, I wanted to make a game where it utilizes this testing mechanism plus "fun".
Instead, my focus shifted quickly to more "fun" and less of the actual "test" :)

### Game

* Grid
  + Game starts with 2x2 grid. Every time user successfully tap the different shaded tile, grid grows by one row and column until 6x6
    - Limits to 6x6 as the largest grid due to the game was designed for mobile devices which has smaller screen real estate
* Tile
  + Base color gets generated by random values of "red", "green", and "blue"
  + Target color then gets generated based off of base color rgb value
    - Intensity of shading for target color lowers as level progresses until the limit
    - Limit on shading intensity was added because at certain point, it's humanly impossible to distinguish target color from the base color

### Leaderboard

Currently, TileTap writes the best score locally to the device its installed.
At one point, it featured "Google+ leaderboard". Unfortunately, in spirit of adding "Facebook API" to the app, it was lost somewhere during development.

------

### Future Plans

Currently, I do not have enough time to spare on this project unfortunately.
However, I have some future plans/ideas for when I do.

* Re-make TileTap bottom up but as a web app
  + This will enable me to deploy this game to various platforms (Android, iOS, browsers) without writing separate app for each
* Leaderboard
  + Add various leaderboard platforms such as for Google+ and Facebook
* Achievement
  + Add various achievements for users to get motivated to come back to play more TileTap
`;
