import { minify } from 'html-minifier';
import { JSDOM } from 'jsdom';

export default (indexHtml) => {
    const jsdom = new JSDOM(indexHtml);
    const options = {
        caseSensitive: true,
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        minifyCSS: true,
        removeComments: true
    };

    jsdom.window.document.head.innerHTML = minify(jsdom.window.document.head.innerHTML, { ...options, removeComments: true });

    return minify(jsdom.serialize(), { ...options, removeComments: false });
};
