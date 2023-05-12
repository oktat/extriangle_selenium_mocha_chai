const { Builder, By } = require("selenium-webdriver");
const chrome = require('chromedriver');
const expect = require('chai').expect;
const url = 'http://localhost:3000';

describe('Háromszög területszámítás', function() {
    var driver = null;
    before(function() {
        driver = new Builder().forBrowser("chrome").build();
    });
    it('30, 35 bemenetre 525 eredmény', async function() {
        await driver.get(url);
        await driver.findElement(By.id('base')).sendKeys('30');
        await driver.findElement(By.id('height')).sendKeys('35');
        await driver.findElement(By.id('calcButton')).click();
        const areaStr = await driver.findElement(By.id('area')).getAttribute('value');
        const area = parseFloat(areaStr);
        expect(area).to.be.closeTo(525, 0.9);
    });
    it('130, 135 bemenetre 8775 eredmény', async function() {
        await driver.get(url);
        await driver.findElement(By.id('base')).sendKeys('130');
        await driver.findElement(By.id('height')).sendKeys('135');
        await driver.findElement(By.id('calcButton')).click();
        const areaStr = await driver.findElement(By.id('area')).getAttribute('value');
        const area = parseFloat(areaStr);
        expect(area).to.be.closeTo(8775, 0.9);
        await driver.quit(); // Utolsó tesztben lezárjuk
    });
});
