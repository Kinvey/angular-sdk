import expect from 'expect';
import regeneratorRuntime from 'regenerator-runtime'; // eslint-disable-line no-unused-vars

describe('User', function() {
  // describe('login()', function() {
  //   it('should not login a user when provided an incorrect username', function() {
  //     const username = 'tester';
  //     const password = 'test';

  //     // Open /login
  //     browser.get('/#/login');

  //     // Input username and password
  //     const usernameInput = element(by.model('username'));
  //     usernameInput.sendKeys(username);
  //     const passwordInput = element(by.model('password'));
  //     passwordInput.sendKeys(password);

  //     // Click the login button
  //     const loginButton = browser.findElement(by.id('login'));
  //     loginButton.click();

  //     // Sleep 5 seconds
  //     return browser.sleep(5000).then(() => {
  //       // Check to see if an active user exists
  //       return browser.executeScript(function() {
  //         try {
  //           return JSON.parse(this.localStorage.getItem('kid_HkTD2CJckinvey_user'));
  //         } catch (error) {
  //           return null;
  //         }
  //       });
  //     }).then(user => {
  //       expect(user).toEqual(null);
  //     });
  //   });

  //   it('should not login a user when provided an incorrect password', function() {
  //     const username = 'test';
  //     const password = 'tester';

  //     // Open /login
  //     browser.get('/#/login');

  //     // Input username and password
  //     const usernameInput = element(by.model('username'));
  //     usernameInput.sendKeys(username);
  //     const passwordInput = element(by.model('password'));
  //     passwordInput.sendKeys(password);

  //     // Click the login button
  //     const loginButton = browser.findElement(by.id('login'));
  //     loginButton.click();

  //     // Sleep 5 seconds
  //     return browser.sleep(5000).then(() => {
  //       // Check to see if an active user exists
  //       return browser.executeScript(function() {
  //         try {
  //           return JSON.parse(this.localStorage.getItem('kid_HkTD2CJckinvey_user'));
  //         } catch (error) {
  //           return null;
  //         }
  //       });
  //     }).then(user => {
  //       expect(user).toEqual(null);
  //     });
  //   });

  //   it('should login a user', function() {
  //     const username = 'test';
  //     const password = 'test';

  //     // Open /login
  //     browser.get('/#/login');

  //     // Input username and password
  //     const usernameInput = element(by.model('username'));
  //     usernameInput.sendKeys(username);
  //     const passwordInput = element(by.model('password'));
  //     passwordInput.sendKeys(password);

  //     // Click the login button
  //     const loginButton = browser.findElement(by.id('login'));
  //     loginButton.click();

  //     // Sleep 5 seconds
  //     return browser.sleep(5000).then(() => {
  //       // Check to see if an active user exists
  //       return browser.executeScript(function() {
  //         try {
  //           return JSON.parse(this.localStorage.getItem('kid_HkTD2CJckinvey_user'));
  //         } catch (error) {
  //           return null;
  //         }
  //       });
  //     }).then(user => {
  //       expect(user.username).toEqual(username);
  //       expect(user._kmd).toIncludeKey('authtoken');
  //     });
  //   });
  // });

  describe('loginWithMIC()', function() {
    it('should login a user', async function() {
      const username = 'test';
      const password = 'test';

      // Open /login
      browser.get('/#/login');

      // Click the loginWithMIC button
      const loginWithMICButton = browser.findElement(by.id('loginWithMIC'));
      await loginWithMICButton.click();

      // Switch to the MIC window
      browser.ignoreSynchronization = true;
      const handles = await browser.getAllWindowHandles();
      await browser.switchTo().window(handles[1]);


      // Login
      const usernameInput = element(by.name('username'));
      usernameInput.sendKeys(username);
      const passwordInput = element(by.name('password'));
      passwordInput.sendKeys(password);
      const loginButton = browser.findElement(by.tagName('button'));
      await loginButton.click();

      // Switch to the App window
      browser.ignoreSynchronization = false;
      await browser.switchTo().window(handles[0]);

      // Sleep 5 seconds
      await browser.sleep(5000);

      // Get the active user
      const activeUser = await browser.executeScript(function() {
        try {
          return JSON.parse(this.localStorage.getItem('kid_HkTD2CJckinvey_user'));
        } catch (error) {
          return null;
        }
      });

      // Check that the active user exists
      expect(activeUser).toNotEqual(null);
      expect(activeUser._kmd).toIncludeKey('authtoken');
    });
  });
});
