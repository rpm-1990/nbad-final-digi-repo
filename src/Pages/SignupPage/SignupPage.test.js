const puppeteer = require('puppeteer');

describe('Signup Page', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3001/Pages/SignupPage');
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should submit signup form successfully', async () => {
    await page.waitForSelector('input[name="username"]');
    await page.type('input[name="username"]', 'JohnDoe');

    await page.waitForSelector('input[name="email"]');
    await page.type('input[name="email"]', 'johndoe@example.com');

    await page.waitForSelector('input[name="password"]');
    await page.type('input[name="password"]', 'password123');

    await page.waitForSelector('button[type="submit"]');
    await page.click('button[type="submit"]');
  });
});

