# Testing and Debugging
[Return back to READ.me file](../README.md)

## 1. Testing

For the testing of the site I followed the exact same process I did for project 1, as it seemed to be the most robust way of testing my project as I went along. I intend to use this same process for all my ptojects, both for the course material as well as any future work I undertake - albeit with additional practices as I learn more languages and tools.

As I went along I tested the website on my phone and laptop using both Google and Brave (a Google based browser), as well as testing it in MS Edge on my work laptop. I tested the site for responsiveness continually in Google and Brave as I went along and made the necessary changes to my style.css file using media querries to improve performance. I tested it in Ms Edge very occassionally, as it is not a browser I like using, but did so to make sure there were no errors that did not show up in Google or Brave. Other than my own testing two separate methods were also used for testing purposes: informal and formal testing.

 **Informal manual (live) testing** was done through friends and family who use different OS and devices, for feedback. In particular my girlfriend tested the site on Firefox on her laptop and on her mobile (which dates back to a pre 2018 model). My parents tested the site on their Google tablet and Amazon Kindle. 3 close friends tested the site on the different Apple devices (2 phones and 1 laptop) and a work colleague ran it through MS Edge as he wanted to keep up-to-date with the changes as I went along. My work colleague was very polite, but he did send me screen shots when he had questions about the development of the website.

This was incredibly useful as it gave me a full understanding of each user experience. As this core group is very close to me their feedback was honest and to the point, which was both frustrating and extremely valuable. 

**Formal (automated) testing** of the website was validated using the W3C Validation tools.

### 1.1 HTML and CSS Code Validation

I used the [W3C Validator website to validate all my HTML](https://validator.w3.org/) and [W3C Validator](https://jigsaw.w3.org/css-validator/) CSS files, as shown below with the corresponding screenshots, as recommended by the Code Institutes' course material:
| Page | URL | Screenshot| Notes |
|----------|----------|----------|----------|
| Home    | [W3C HTML](https://validator.w3.org/)   | screenshot   | Pass: No Errors   |
| Battle   | [W3C HTML](https://validator.w3.org/)   | screenshot   | Pass: No Errors   |
| style.css   | [W3C CSS](https://jigsaw.w3.org/css-validator/)   | screenshot   | Pass: No Errors   |

### 1.2 Javascript Validation
For my Javascript I used the [JShint Validator](https://jshint.com/) to validate my js files, as shown below with the corresponding screenshots, as recommended by the Code Institutes' course material:
| Page | URL | Screenshot| Notes |
|----------|----------|----------|----------|
| script.js   | [JShint](https://jshint.com/)   | screenshot   | Pass: No Errors   |
 

### 1.3 Browswer Compatibility

## 2. Debugging
2.1 The first bug I encounted, when live testing, was when I tried to auto populate the Battle Cards with the randomly selected band data, namely: Band Name, Song Title and Band's Origin. The first thing I did was to add console logs to the various js functions to try and debug the error, as shown here:

![alt text](assets/imgs/documentation/console.log.2-function-not-working-added-console.logs.png)

However, everything appeared to be working (see short snippet below):

![alt text](assets/imgs/documentation/console.log.1-first-randomly-selected-bands.png)

After a quick Google search it returned the possibility that there was an error in trying to iopen extension and suggested that I open the website in Incognito mode. This resolved the issue and everything worked. I deleted and my cache and cookies and didn't have the problem again.

2.2 The second major issue was trying to get the corresponding Youtube videos to play when the Launch button was pressed.


----------********





