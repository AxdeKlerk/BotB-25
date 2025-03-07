# Testing and Debugging

Return back to [READ.me](../README.md) file

## 1. Testing

For the testing of the site I followed the exact same process I did for project 1, as it seemed to be the most robust way of testing my project as I went along. I intend to use this same process for all my ptojects, both for the course material as well as any future work I undertake - albeit with additional practices as I learn more languages and tools.

As I went along I tested the website on my phone and laptop using both Google and Brave (a Google based browser), as well as testing it in MS Edge on my work laptop. I tested the site for responsiveness continually in Google and Brave as I went along and made the necessary changes to my style.css file using media querries to improve performance. I tested it in Ms Edge very occassionally, as it is not a browser I like using, but did so to make sure there were no errors that did not show up in Google or Brave. Other than my own testing two separate methods were also used for testing purposes: informal and formal testing.

 **Informal manual (live) testing** was done through friends and family who use different OS and devices, for feedback. In particular my girlfriend tested the site on Firefox on her laptop and on her mobile (which dates back to a pre 2018 model). My parents tested the site on their Google tablet and Amazon Kindle. 3 close friends tested the site on the different Apple devices (2 phones and 1 laptop) and a work colleague ran it through MS Edge as he wanted to keep up-to-date with the changes as I went along. My work colleague was very polite, but he did send me screen shots when he had questions about the development of the website.

This was incredibly useful as it gave me a full understanding of each user experience. As this core group is very close to me their feedback was honest and to the point, which was both frustrating and extremely valuable. 

**Formal (automated) testing** of the website was validated using the W3C Validation tools.

### 1.1 HTML and CSS Code Validation

I used the [W3C Validator website to validate all my HTML](https://validator.w3.org/) and [W3C Validator](https://jigsaw.w3.org/css-validator/) CSS files, as shown below with the corresponding screenshots, as recommended by the Code Institutes' course material:
| Page | URL | Score| Notes |
|----------|----------|----------|----------|
| Home    | [W3C HTML](https://validator.w3.org/)   | 100%   | Pass: No Errors   |
| Battle   | [W3C HTML](https://validator.w3.org/)   | 100%   | Pass: No Errors   |
| style.css   | [W3C CSS](https://jigsaw.w3.org/css-validator/)   | 100%   | Pass: No Errors   |

#### 1.1.1 Home Page

![W3C Home page html validation](assets/imgs/documentation/index-html-validation.png)

#### 1.1.2

![W3C Battle page html validation](assets/imgs/documentation/play-html-validation.png)

#### 1.1.3

![W3C css validation](assets/imgs/documentation/css-validation.png)

### 1.2 Javascript Validation

For my Javascript I used the [JShint Validator](https://jshint.com/) to validate my js files, as shown below with the corresponding screenshots, as recommended by the Code Institutes' course material:
| Page | URL | Screenshot| Notes |
|----------|----------|----------|----------|
| script.js   | [JShint](https://jshint.com/)   | screenshot   | Pass: No Errors   |
 

### 1.3 Browswer Compatibility

### 2. Lighthouse

 - The first run of Lighthouse gave a value of 86 for SEO and 66 for performance. To improve the SEO meta tags where added to include a description, keywords and author for search engines. This simple addition increased the performance to 91.

 - An *"Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')"* was highlighted under performance which meant that JavaScript was trying to attach an event listener to an element that doesn't exist (null). At first, I thought that this was an easy fix by moving the bandData array to above the functions and moving the functions for the iframe population to below the functions for random bandData popultaion of cards. However, this did not fix the error.
  
  - What I missed was that *"document.getElementById("#go").addEventListener"click", function ()[...]"* was trying to select the elementID "#go" before it is loaded in the DOM. To fix this I wrapped the script into 'DOMContentLoaded' to ensure that the script runs only after the DOM is fully loaded. This worked.

  After running Lighthouse at the completion point of my project my index.html and my play.html pages both passed with 100% as seen below:

  #### 2.1 Lighthouse index.html

  ![Lighthouse score for index.html](assets/imgs/documentation/lighthouse-index-page.png)

  Please see discusion around the performance score below in Bugs Unresolved section.

  #### 2.2 Lighthouse play.html

  ![Lighhouse score for play.html](assets/imgs/documentation/lighthouse-play-page.png)

## 3. Debugging

2.1 The first bug I encounted, when live testing, was when I tried to auto populate the Battle Cards with the randomly selected band data, namely: Band Name, Song Title and Band's Origin. The first thing I did was to add console logs to the various js functions to try and debug the error, as shown here:

![alt text](assets/imgs/documentation/console.log.2-function-not-working-added-console.logs.png)

However, everything appeared to be working (see short snippet below):

![alt text](assets/imgs/documentation/console.log.1-first-randomly-selected-bands.png)

After a quick Google search it returned the possibility that there was an error in trying to open disabled extensions and suggested that I open the website in Incognito mode. This resolved the issue and everything worked. I deleted all my cache and cookies and didn't have the problem again.

2.2 The second major issue was trying to get the corresponding Youtube videos to play in the iframe pop-up when the Launch button was pressed.

2.3 After I had managed to append the iframe in the Battle Modal that not all Youtube videos were playing. After spending a lot of time trying to identify which videos weren't playing and tying to find different videos for the bands affected, I turned to Google and then later *Perplexity* to find out why they weren't playing. 

![Image of video not playing](assets/imgs/documentation/video-error.png)

However, it was during my second meeting with my mentor that he explained to me that some bands don't like their videos embeded outside of Youtube and that they put a block on them to stop copyright infringement. This resulted in me going back to find 8 new bands that did allow their videos to be embeded and replace the ones previously identified.

Complexity was added because I had alphabetised my bandData array so I tried to replace 'similar for similar' (alphabetically) so as not have to rejig the id numbering and bandData placement in the array. This wan't a necesity for the functionality of the website, but I deemed it as such to satisfy my need for order and the attention to detail that it enlists.

2.4


----------********

## 3. Bugs Unresolved

Possibly, the greatest 'bug' that will always remain unresolved is my own imposter-syndrom. Having completed the course material I was left feeling like there were elements in the course that I did not understand, leaving large gaps in my learning. Following a conversation with my mentor, he suggested that the only way to learn was to tackle the subject matter 'head-on' and just keep practicing. 

Although, this was extremely good advice I still struggled with self-doubt throughtout this project. In order to over-come this enough to complete the project I joined the Slack 'Imposter Syndrome' group. Even though I didn't contribute much due to feeling like an imposter in the group, it was encouraging to see others struggling and their coping techniques and mechanisms. The greatest piece of advice came from a newsletter I subscribe to by Sahil Bloom, where he adopted a technique given to him by a friend of his to have a 'Coaching Session' With yourself by emailing yourself and then giving yourself advise. This I practised sporadically until it became inbedded into my daily routine. 

coulnd't change img to images after mentor meeting