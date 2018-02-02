# Feed Reader Testing
## About the Project
-This project reinforces the reason to write tests
for JavaScript code. It utilizes the red-green workflow.
-Tests must pass as per their specified criteria.
-It used the Jasmine framework.
-Project file cloned from [https://github.com/udacity/frontend-nanodegree-feedreader].

## Steps to complete project
-This project contains 4 tests Suites and 7 tests.
1. First suite is for the RSS Feeds and contains three tests.
  -First test checks that the allFeeds array is defined and isn't empty.
  -Second test checks for the URL of each item in array to be defined and not empty.
  Third test loops through each item in the allFeeds array to make sure the name is defined and isn't empty.
2. Second suite is for The Menu, and contains two tests.
  -First test checks that the menu is hidden by default.
  -Test ensures that the menu changes visible to not visible when the icon is clicked.
3.  Third suite for tests for Initial entries and contains one test.
  -Test checks that the loadFeed function renders at least one entry item upon completion.  
  - The loadFeed function is asynchronous and needs to utilize the Jasmine done method to proceed.
4. Fourth suite testing the New Feed Selections and contains one test.  
  -Tests for new content to be different from a prior loadFeed. Uses the first entry from two loadFeed calls.

## Libraries
-[Jasmine](https://jasmine.github.io/)
  -included in start file


## Resources
-[Udacity course- Rethinking testing](https://classroom.udacity.com/nanodegrees/nd001/parts/e87c34bf-a9c0-415f-b007-c2c2d7eead73/modules/344255859875460/lessons/3769099021/concepts/38687287730923)
-[Udacity course -Writing Test Suites](https://classroom.udacity.com/nanodegrees/nd001/parts/e87c34bf-a9c0-415f-b007-c2c2d7eead73/modules/344255859875460/lessons/3773158892/concepts/38588987820923)
-Udacity Mentorship
-[DevDocs](http://devdocs.io/jasmine/global#afterAll)   
