import { browser, by, element, promise } from 'protractor';

export class HomePage {
    // eslint-disable-next-line class-methods-use-this
    public async getHeadline(): Promise<string> {
        const innerHtml = await element(by.css('wac-app h1')).getAttribute('innerHTML');

        // @todo Chrome does treat a <span> tag as line break but Safari doesn't which is why it is done manually here.
        return innerHtml.replace(/<span[^>]*>/g, ' ').replace(/<\/span>/g, '');
    }

    // eslint-disable-next-line class-methods-use-this
    public getSubHeadline(): promise.Promise<string> {
        return element(by.css('wac-app h2')).getText();
    }

    // eslint-disable-next-line class-methods-use-this
    public navigateTo(): promise.Promise<unknown> {
        return browser.get(browser.baseUrl);
    }
}
