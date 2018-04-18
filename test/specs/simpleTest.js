describe('Simple Test: ', function() {
  beforeAll(function() {
    browser.url('http://hammer.s2stagehance.com/learn');
  });

  it('Check for learn tab', function() {
    browser.waitForVisible('.qa-learn-container');
  });
});
