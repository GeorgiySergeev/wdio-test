import { expect } from "@wdio/globals";
import { Key } from "webdriverio";

describe("Homework#1", () => {
  it("main page", async () => {
    await browser.url("https://webdriver.io/");
    await browser.pause(2000);
  });

  it("go to API link", async () => {
    await browser.url("https://webdriver.io/docs/api");

    let subtitle = await $(
      "#docusaurus_skipToContent_fallback > div > main > div > div > div.col.docItemCol_VOVn > div > article > nav > ul > li.breadcrumbs__item.breadcrumbs__item--active > span"
    );

    console.log(await subtitle.getText());

    let webDriverLink = await $(
      '//*[@id="docusaurus_skipToContent_fallback"]/div/main/div/div/div[1]/div/article/div[2]/p[1]/a[1]'
    );
    let atributeWebDreiveLink = webDriverLink.getAttribute("href");
    console.log(atributeWebDreiveLink);
  });

  it("search test", async () => {
    let inputSearchBtn = await $(".DocSearch-Button");
    await inputSearchBtn.click();
    await browser.pause(2000);

    let doSearch = await $(".DocSearch-Input");
    await doSearch.setValue("All is done");
    await browser.pause(2000);

    await doSearch.clearValue();
    await browser.pause(2000);
  });
});

//========================================================

describe("Homework#2", () => {
  it("go to API", async () => {
    await browser.url("https://webdriver.io");
    await browser.pause(2000);
    let apiClick = await $('//*[@id="__docusaurus"]/nav/div[1]/div[1]/a[3]');
    await apiClick.click();
    await browser.pause(2000);

    let link = await $(
      '//*[@id="__docusaurus"]/footer/div/div[1]/div[1]/ul/li[3]/a'
    );
    await link.scrollIntoView();
    await browser.pause(2000);

    let isDisplayed = await link.isDisplayed();
    let isEnabled = await link.isEnabled();
    console.log(isDisplayed);
    console.log(isEnabled);

    let outerHTML = await $(
      '//*[@id="docusaurus_skipToContent_fallback"]/div/main/div/div/div[1]/div/nav/a'
    ).getHTML();
    console.log(outerHTML);

    var innerHTML = await $(
      '//*[@id="docusaurus_skipToContent_fallback"]/div/main/div/div/div[1]/div/nav/a'
    ).getHTML();
    console.log(innerHTML);

    let pginationLink = await $(".pagination-nav__link--next");

    await pginationLink.click();
    await browser.pause(2000);

    let getTitle = await $(".anchorWithStickyNavbar_LWe7");

    console.log(getTitle);

    await browser.waitUntil(
      async () => {
        return getTitle.isDisplayed();
      },
      5000,
      "test"
    );
  });
});

//============================================================

describe("Homework#3", () => {
  it("Test Case#1 Subsctibe", async () => {
    await browser.url("https://github.com/");

    let signupBtn = await $(".HeaderMenu-link--sign-up");
    await signupBtn.click();
    await browser.pause(2000);

    let title = await $(
      "/html/body/div[1]/div[4]/main/div[2]/text-suggester/div[1]/typing-effect/span[1]"
    );
    let isExisting = await title.isExisting();
    console.log(isExisting);

    let input = await $("#email");
    await input.setValue("mytestmail@gmail.com");
    await browser.pause(2000);

    let continueBtn = await $(".js-continue-button");
    await continueBtn.click();

    let password = await $("#password");
    await password.setValue("Mypassword7852");
    await browser.pause(2000);

    // на этом этапе тесты фейлятся.

    let continuePassBtn = await $('//*[@id="opt-in-container"]/div[2]/button');
    await continuePassBtn.click();

    let userName = await $("#login");
    await userName.setValue("user-testuser");
    await browser.pause(2000);

    await continueBtn.click();

    let inputY = await $("#opt_in");
    await inputY.setValue("Y");
  });

  it("Test Case #2", async () => {
    await browser.url("https://github.com/");

    let title = await $(
      "body > div.logged-out.env-production.page-responsive.header-overlay.home-campaign > div.application-main > main > div.position-relative.overflow-hidden > div.container-xl.position-relative.z-2 > div > div > div > h2"
    );
    await title.scrollIntoView();
    await browser.pause(2000);
    let isExisting = await title.isExisting();
    console.log(isExisting);

    const link = await $(
      "/html/body/div[1]/div[4]/main/div[4]/div[1]/div/div/div/div/div/a[2]"
    );

    let linkIsVisible = link.isDisplayed();
    console.log(linkIsVisible);
    await link.click();

    await browser.pause(2000);

    let secondTitle = await $("/html/body/div[1]/div[4]/main/div/div[1]/h1");
    let isExistingSecondTitle = secondTitle.isExisting();
    console.log(isExistingSecondTitle);

    let enterpriseBlock = await $(
      "/html/body/div[1]/div[4]/main/div/div[2]/div/div/div[1]/a/div"
    );
    await enterpriseBlock.click();

    await browser.pause(2000);
  });

  xit("Test Case#3 subscribe", async () => {
    await browser.url("https://github.com/");

    let subsctibeBtn = await $(
      "/html/body/div[1]/footer/div[1]/div/div[1]/div/a"
    );
    await subsctibeBtn.scrollIntoView();

    await browser.pause(2000);

    const subsctibeBtnisClickable = subsctibeBtn.isClickable();
    console.log(subsctibeBtnisClickable);

    await subsctibeBtn.click();
    await browser.pause(2000);

    let title = await $('//*[@id="hero-section-brand-heading"]');
    let titleIsExisting = title.isExisting();
    console.log(titleIsExisting);

    let emailInput = await $('//*[@id=":R8d7m:"]');
    await emailInput.setValue("mytestmail@gmail.com");
    await browser.pause(2000);

    const selectBox = await $('//*[@id="country"]');
    await selectBox.selectByIndex(7);
    await browser.pause(2000);

    const checkBox = $('//*[@id="gated-agree-marketingEmailOptin1"]');
    await checkBox.click();
    await browser.pause(2000);

    const secondSubsctibeBtn = await $('//*[@id="form"]/form/div/button');
    await secondSubsctibeBtn.click();
    await browser.pause(2000);

    const thanksTitle = await $('//*[@id="hero-section-brand-heading"]');
    const thanksTitleIsExist = thanksTitle.isExisting();
    console.log(thanksTitleIsExist);
  });

  it("Tast Case# 4 search", async () => {
    await browser.url("https://github.com/");

    const search = await $(
      "/html/body/div[1]/div[1]/header/div/div[2]/div/div/qbsearch-input/div[1]/button"
    );
    await browser.pause(2000);
    await search.click();
    await browser.pause(2000);

    const searchInput = await $('//*[@id="query-builder-test"]');
    await searchInput.setValue("javascript");
    await browser.pause(2000);

    await browser.keys([Key.Enter]); // waitUntil
    await browser.pause(5000);

    const spanLink = await $(
      "/html/body/div[1]/div[4]/main/react-app/div/div/div[1]/div/div/main/div[2]/div/div[1]/div[4]/div/div/div[1]/div/div[1]/h3/div/div[2]/a"
    );

    const atrr = await spanLink.getAttribute("href");
    console.log(atrr);
  });

  it("Test Case#5 Pricing", async () => {
    await browser.url("https://github.com/");
    await browser.pause(2000);

    const pricingLink = $(
      "/html/body/div[1]/div[1]/header/div/div[2]/div/nav/ul/li[4]/a"
    );
    await pricingLink.click();
    await browser.pause(2000);

    const title = await $(".h2-mktg");
    const titleIsDisplayed = title.isDisplayed();
    console.log(titleIsDisplayed);

    const featureLink = await $(
      "/html/body/div[1]/div[4]/main/div[2]/div[2]/div[3]/a"
    );
    await featureLink.scrollIntoView();
    await browser.pause(2000);
    await featureLink.click();
    await browser.pause(2000);

    const compareTitle = await $("/html/body/div[1]/div[4]/main/div[4]/h1");
    const compareTitleIsExisted = compareTitle.isExisting();
    console.log(compareTitleIsExisted);
  });
});
