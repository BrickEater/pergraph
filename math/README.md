"git add --all" seems to add all the changes to a queue

"git commit -m '...'" seems to commit the changes to a second phase of the queue with a message

"git push origin main" seems to push all the commits within the queue to the GitHub repos

2022/08/15:
To do list:
    Label each input field
    Write a for loop where one of the fields is the number of times it loops
    The fields will be:
        How much invested annually
        How many years invested
        Growth per year
    Put a box for the total to be displayed in
Things completed:


2022/08/14:
- I put the button on the page to activate the function.
- The value in the first bar is suppose to be logged to the console
- logs show null and I'm assuming that the value is being considered a string
- Maybe I can log value type to the console to debug
- Needed to parse the element as a number
- needed to add the button listener
- needed to move the script tag to the bottom of the html body so that the page could load first
- document.getelementbyid was very important
- declared the sum function before pulling everything from the html file