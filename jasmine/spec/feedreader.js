/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  /* Suite for the RSS feeds definitions, the allFeeds variable in the app.*/

  describe('RSS Feeds', function() {
    /* First test - checks that the allFeeds variable has been defined
      and that it is not empty.*/
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    /* test that loops through each feed in the allFeeds object and ensures it has a URL defined
      and that the URL is not empty.*/
    it('should have a URL defined', function(){
     allFeeds.forEach(function(feed) {
      expect(feed.url).toBeDefined();
      expect(feed.url).not.toBe('');
     });
    });

    /* test that loops through each feedvin the allFeeds object and ensures it has a name defined
      and that the name is not empty. */
   it('should have a name defined', function(){
    allFeeds.forEach(function(feed){
     expect(feed.name).toBeDefined();
     expect(feed.name).not.toBe('');
    });
   });
  });


  /* new test suite for"The menu" */
  describe('The Menu', function(){
    /* test that ensures the menu element is hidden by default */
     it('should be hidden by default', function(){
       expect($('body').hasClass('menu-hidden')).toBe(true);
     });

     /* ensures the menu changes visibility when menu icon is clicked. This test
       should have two expectations: does the menu display when
       clicked and does it hide when clicked again. */
    it('should toggle menu display', function(){
      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).toBe(false);
      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
  });

  /* new test suite named "Initial Entries" */
  describe('Initial Entries', function(){
    /*test that ensures when the loadFeed function is called and completes its work, there is at least
      a single .entry element within the .feed container.
      loadFeed() is asynchronous so this test will require
      Jasmine's beforeEach and asynchronous done() function. */
    beforeEach(function(done){
     loadFeed(0,(done));
   });

   it('should have at least one entry', function(){
     var entries = $('.feed .entry');
     expect(entries.length).toBeGreaterThan(0);
   });
  });

  /* test suite for "New Feed Selection" */
  describe('New Feed Selection', function(){
    /*  test ensuring when a new feed is loaded by the loadFeed function that
    the content actually changes.
    loadFeed() is asynchronous. */
   var feedBefore,
       feedAfter;
   beforeEach(function(done){
    loadFeed(0, function(){
     feedBefore = $('.feed').find('h2').first().text();
     done();
    });
   });

   /*invoke loadFeed after everything is done to reload Udacity as landing page*/
   afterAll(function(done) {
    loadFeed(0, done);
   });

   it('should load new content', function(done){
    loadFeed(1, function(){
      feedAfter = $('.feed').find('h2').first().text();
      expect(feedBefore).not.toBe(feedAfter);
      console.log(feedBefore, feedAfter);
      done();
    });
   });
  });
}());
