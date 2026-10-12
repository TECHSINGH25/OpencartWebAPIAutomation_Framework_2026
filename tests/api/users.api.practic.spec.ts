
/*

import {test, expect, request, APIResponse} from '@playwright/test';

let Auth_Token = {
    Authorization: 'Bearer a0f108116dafaa4f1c883360eaceed4e43cb36b45f3b82b5572ff1dc195ee63b'
};


test('verify API sends 200 status code', async({request})=>{

        let response:APIResponse = await request.get('https://gorest.co.in/public/v2/users',{headers: Auth_Token});
        let jsonBody = await response.json();
        console.log(jsonBody);
        console.log(response.status());
        console.log(response.statusText());
        expect(response.status()).toBe(200);

})

test('create a user POST api', async({request})=>{

     // user JS object:
        let  userData = {
            name: 'Jason lee',
            email: 'jasonlee421@gmail.com',
            gender:'male',
            status: 'active'
        }
        let response = await request.post('https://gorest.co.in/public/v2/users', {headers: Auth_Token, data: userData});
        let jsonBody = await response.json();
        console.log(jsonBody);
        console.log(response.status());
        console.log(response.statusText);
        expect(response.status()).toBe(201);
})

test('update a user PUT api', async({request})=>{

     // user JS object:
        let  userData = {
            name: 'Jason jason',
            email: 'jason2026@gmail.com',
            gender:'male',
            status: 'inactive'
        }
        let response = await request.put('https://gorest.co.in/public/v2/users/8633554', {headers: Auth_Token, data: userData});
        let jsonBody = await response.json();
        console.log(jsonBody);
        console.log(response.status());
        console.log(response.statusText);
        expect(response.status()).toBe(200);
})


test('Delete  a user delete api', async({request})=>{

       
        let response = await request.delete('https://gorest.co.in/public/v2/users/8633554', {headers: Auth_Token});
        console.log(response.status()); // 204
        console.log(response.statusText); // no content
        expect(response.status()).toBe(204);
})


test('create dynamic user  POST api', async({request})=>{

     // user JS object:
        let  userData = {
            name: 'Jason lee',
            email: `pwautomation_${Date.now()}@open.com`,
            gender:'male',
            status: 'active'
        }
        let response = await request.post('https://gorest.co.in/public/v2/users', {headers: Auth_Token, data: userData});
        let jsonBody = await response.json();
        console.log(jsonBody);
        console.log(response.status());
        console.log(response.statusText);
        expect(response.status()).toBe(201);
})



*/





