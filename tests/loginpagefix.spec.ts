import { CsvHelper } from '../src/utils/CsvHelper';
import { test, expect } from '../src/fixtures/pagefixtures';
import { ExcelHelper } from '../src/utils/ExcelHelper';
import { JsonHelper } from '../src/utils/JsonHelper';

import * as allure from "allure-js-commons";
import { log, meta, testData } from 'reporting-labs'; // coming from reporting lab lib


test.beforeEach(async ({ loginPage }) => {
    await loginPage.goToLoginPage();
});

//AAA
// test('login page title test', async ({ loginPage }) => {
//     meta({ priority: 'P2', severity: 'minor', owner: 'Naveen', story: 'US025', epic: 'ep300', feature: 'F25', issue: 'bug25' });

//     let pageTitle = await loginPage.getLoginPageTitle();
//     console.log('Login page title : ', pageTitle);
//     await log('Login page title : ', pageTitle); // show in reporting lab
//     expect(pageTitle).toBe('Account Login');
// });


test('login page title test', async ({ loginPage }) => {
    meta({ priority: 'P2', severity: 'minor', owner: 'Naveen', story: 'US025', epic: 'ep300', feature: 'F25', issue: 'bug25' });

    let pageTitle = await loginPage.getPageTitle();
    console.log('Login page title : ', pageTitle);
    await log('Login page title : ', pageTitle); // show in reporting lab
    expect(pageTitle).toBe('Account Login');
});


test.skip('forgot pwd link exist test', async ({ loginPage }) => {
    meta({ priority: 'P2', severity: 'critical', owner: 'Charanjit', story: 'US100', epic: 'ep300', feature: 'F29', issue: 'bug31' });

    expect(await loginPage.isForgottenPwdLinkExist()).toBeTruthy();
});

test.skip('user is able to login to app with valid credentials', async ({ loginPage, homePage }) => {
        
    meta({ priority: 'P1', severity: 'Blocker', owner: 'Charanjit', story: 'US101', epic: 'ep300', feature: 'F30', issue: 'bug34' });
    // await testData({username:process.env.APP_USERNAME!, password: process.env.APP_PASSWORD!}, 'Login')

    await loginPage.doLogin(process.env.APP_USERNAME!, process.env.APP_PASSWORD!);
    expect.soft(await homePage.isLogoutLinkExist()).toBeTruthy();
    expect.soft(await homePage.getHomePageTitle()).toBe('My Account');
});


//DD_1: read csv data directly fromn the CSV file and loop the test method row wise...
let testCSVData = CsvHelper.readCsv('src/testdata/logindata.csv');
for (let row of testCSVData) {
    test(`login to app with invalid credentials with csv data - ${row.username} - ${row.password}`, async ({ loginPage, homePage }) => {
        
        meta({ priority: 'P2', severity: 'Critical', owner: 'Alex', story: 'US101', epic: 'ep300', feature: 'F30', issue: 'bug37' });
        await testData(testCSVData, 'Invalid Login Data');

        await loginPage.doLogin(row.username, row.password);
        expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();
    });
};

//DD_2: read xlsx data directly fromn the excel file and loop the test method row wise...
// let testExcelData = ExcelHelper.readExcel('src/testdata/opencarttestdata.xlsx', 'login');
// for (let row of testExcelData) {
//     test(`login to app with invalid credentials with Excel Data- ${row.username} - ${row.password}`, async ({ loginPage, homePage }) => {
//         await loginPage.doLogin(row.username, row.password);
//         expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();
//     });
// };

//DD_3: read JSON data directly fromn the JSON file and loop the test method row wise...
let testJSONData = JsonHelper.readJson('src/testdata/logindata.json');
for (let row of testJSONData) {
    test(`login to app with invalid credentials with JSON Data- ${row.username} - ${row.password}`, async ({ loginPage, homePage }) => {
        meta({ priority: 'P2', severity: 'Critical', owner: 'Daniel', story: 'US102', epic: 'ep300', feature: 'F31', issue: 'bug39' });
        await testData(testJSONData, 'Invalid Login Data');
        await loginPage.doLogin(row.username, row.password);
        expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();
    });
};

//common features test:
test('App logo exists on Login Page', async ({ basePage }) => {
    expect(await basePage.isLogoVisible()).toBeTruthy();
});

test('Search Box exists on Login Page', async ({ basePage }) => {
    expect(await basePage.isSearchBoxVisible()).toBeTruthy();
});


test('Cart exists on Login Page', async ({ basePage }) => {
    expect(await basePage.isCartButtonVisible()).toBeTruthy();
});


test('Footers exists on Login Page', async ({ basePage }) => {
    expect(await basePage.getPageFootersCount()).toBe(16);
});