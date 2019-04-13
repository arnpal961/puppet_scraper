// import puppeteer from "puppeteer";
const puppeteer = require("puppeteer")

const run = async (query) => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto("https://duckduckgo.com/")
    // Dom element selector

    const searchField = "#search_form_input_homepage"
    const searchButton = "#search_button_homepage"
    await page.click(searchField)
    await page.keyboard.type(query)
    await page.click(searchButton)

    // 
    // await page.screenshot({path: 'test.png'})
    // browser.close();//*[@id="rld-1"]/a
}

run("site:linkedin.com/in/ 'software developer'+'- Present '")