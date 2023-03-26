const puppeteer = require("puppeteer");

(async function abrirLinks() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto("https://twitter.com/i/flow/login");
  await page.waitForTimeout(1000)
  await page.type('[class="css-1dbjc4n r-1roi411 r-z2wwpe r-rs99b7 r-18u37iz"]', "HelenaAcervo");
 await page.click('[class="css-18t94o4 css-1dbjc4n r-sdzlij r-1phboty r-rs99b7 r-ywje51 r-usiww2 r-2yi16 r-1qi8awa r-1ny4l3l r-ymttw5 r-o7ynqc r-6416eg r-lrvibr r-13qz1uu"]');
 await page.waitForTimeout(1000)
  await page.type('[type="password"]', "Lucas007")
  await page.waitForTimeout(1000)
  await page.click('[class="css-1dbjc4n r-pw2am6"]');
  await page.waitForTimeout(1000)
  await page.goto("https://twitter.com/compose/tweet");
  await page.waitForTimeout(1000)
  await page.type('[class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"]', "Teste")
  await page.waitForTimeout(800)
  await page.click('[class="css-18t94o4 css-1dbjc4n r-l5o3uw r-42olwf r-sdzlij r-1phboty r-rs99b7 r-19u6a5r r-2yi16 r-1qi8awa r-1ny4l3l r-ymttw5 r-o7ynqc r-6416eg r-lrvibr"]');


  await browser.close();

  /*setInterval(() => {
    abrirLinks();
  }, 210000); 
*/  
})();
