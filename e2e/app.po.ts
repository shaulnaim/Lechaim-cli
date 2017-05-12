import { browser, element, by } from 'protractor';

export class LechaimCliPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('lechaim-app h1')).getText();
  }
}
