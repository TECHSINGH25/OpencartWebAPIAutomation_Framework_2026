



// // CDP protopl



// import{test, expect} from '@playwright/test';



// test('intercept and log requests', async({page})=>{


//    await page.route('**/*', async(route)=>{

//     console.log(route.request().method(), route.request().url());
//     await route.continue(); // url1--capture, capture...
//    } );

//    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');

// })



// // 7:39 - mocking of data

// test('mock data', async({page})=>{

// let fakeProduct = [
//      {name: 'Fake Macbook Pro', price: '$599'},
//       {name: 'Fake iphone 18 ', price: '$5999'}


// ];

// await page.route('**/index.php?route=product/search&search=macbook', async(route)=>{
//     await route.fulfill{
//         status : 200,
//         contentType: 'application/json',
//         body: JSON.stringify(fakeProduct)


//     });



// })




// })

