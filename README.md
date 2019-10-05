# Friend-Finder
Node and Express Servers

## Screen Shot of App Cycle:
![](images/screen-shot.png)

## Link to full app demo on Github Pages:


## User Guide:


## About the project:
In this activity, we were tasked in building a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from a user's servey, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.  We used npm express to hadle the routing.

## MVP Objectives:
1. The survey should have 10 questions of our choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

2. The server.js file should require the basic npm packages we've used in class: express, body-parser and path.

3. The htmlRoutes.js file should include two routes:
  a. A GET Route to /survey which should display the survey page.
  b. A default, catch-all route that leads to home.html which displays the home page.

4. The apiRoutes.js file should contain two routes:
  a. A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
  b. A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

5. I saved the application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below.
```
{
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
}
```

6. Determine the user's most compatible friend using the following as a guide:
  * I converted each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
  * With that done, I compared the difference between current user's scores against those from other users, question by question. I added up the differences to calculate the totalDifference.
    * Example:
      * User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
      * User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
    * Total Difference: 2 + 1 + 2 = 5

  * I used the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
  * The closest match will be the user with the least amount of difference.

7. When the current user's most compatible friend is determined, the result is displayed as a modal pop-up. The modal displays both the name and picture of the closest match.

## Stretch Goals
  

## Techology Stack:
  * Node.js
  * JavaScript
  * npm express
  * npm body-parser
  * npm path
  * Heroku
  * Typed.js (for index.html jumbotron affect).

## Methodology:


## Problems That I Overcame:


## Problems Still Facing:


## Code Snippets:


## Link to my Portfolio Page on Github where this app is listed in the portfolio section.

https://olisun.github.io/Updated-Portfolio-Page/

## You can also reach me on LinkedIn.
https://www.linkedin.com/in/oliver-sun-4b6baba/
