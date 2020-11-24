import { env } from 'process';
import { browser, by, element } from 'protractor';

export class HomePage {
    public async getHeadline(): Promise<string> {
        const innerHtml = await element(by.css('wac-app h1')).getAttribute('innerHTML');

        // @todo Chrome does treat a <span> tag as line break but Safari doesn't which is why it is done manually here.
        return innerHtml.replace(/<span[^>]*>/g, ' ').replace(/<\/span>/g, '');
    }

    public async getSubHeadline(): Promise<string> {
        return element(by.css('wac-app h2')).getText();
    }

    public async navigateTo(): Promise<unknown> {
        return browser.get(env.IS_SMOKE_TEST === 'true' ? '/web-audio-conference-2019' : '/');
    }
}
