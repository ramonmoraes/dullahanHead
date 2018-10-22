const puppeteer = require('puppeteer');

async function getNewPage() {
  const browser = await puppeteer.launch();
  return await browser.newPage();
}

async function getResponse(reqOptions = {}) {
  const { url, params, body, json } = reqOptions;
  const page = await getNewPage();
  return await page.goto(url);
}

async function getHeaders(reqOptions = {}) {
  const res = await getResponse(reqOptions);
  return res.headers();
}

async function getHtml(reqOptions = {}) {
  const { url, params, body, json } = reqOptions;
  const page = await getNewPage();
  await page.goto(url);
  return page.evaluate(() => document.documentElement.outerHTML)
}

module.exports = {
  getResponse,
  getHeaders,
  getHtml
}