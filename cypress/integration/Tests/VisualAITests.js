/// <reference types="Cypress" />
import { loginPage } from "../Pages/LoginPage"
import {mainPage} from "../Pages/MainPage"

import '@applitools/eyes-cypress/commands'



describe('App V1',()=>
{
    
    
    it('Login Page UI Elements Test',()=>
    { 
        cy.eyesOpen({appName:'Hackathon'})
        loginPage.GoTo_V1()
       cy.eyesCheckWindow('login page')
       cy.eyesClose()


    })
    it('Data-Driven Test, a.click the login button without entering any data',()=>
    {
        cy.eyesOpen({appName:'Hackathon'})
        
        loginPage.GoTo_V1()
        //If you don’t enter the username and password and click the login button, it should throw an error
        cy.get(loginPage.login_btn).click()
        //should throw an error
        // cy.get(loginPage.alertDiv).should('be.visible')
        // .should('contain.text','Both Username and Password must be present')
        cy.eyesCheckWindow('a.click the login button without entering any data')
        cy.get(loginPage.username_txtfield).type("yasser")
        cy.get(loginPage.login_btn).click()
        cy.eyesCheckWindow('b.only enter the username and click login')

        //If you only enter the password and click the login button, it should throw an error
        cy.get(loginPage.username_txtfield).clear()
        cy.get(loginPage.password_txtfield).type("password")
        cy.get(loginPage.login_btn).click()
        //should throw an error
        cy.eyesCheckWindow('c.only enter the Password and click login')
        //If you enter both username (any value) and password (any value), it should log you in.
        cy.get(loginPage.password_txtfield).clear()
        cy.get(loginPage.username_txtfield).type("yasser")
        cy.get(loginPage.password_txtfield).type("password")
        cy.get(loginPage.login_btn).click()
        cy.eyesCheckWindow('d.enter both username and password')

        cy.eyesClose()
     })
  

    it('Table Sort Test',()=>
    {
        cy.eyesOpen({appName:'Hackathon'})
        loginPage.GoTo_V1()
        loginPage.login()
        cy.eyesCheckWindow('Table Before sort')
        cy.get('div[class="logo-label"]').should('contain.text',"ACME")
        cy.get(mainPage.recentTransactionsTable.amountTitle).click()
        cy.eyesCheckWindow('Table after sort')
        // //check by description that the image appear in the first place
        // cy.get('table[id="transactionsTable"] >tbody > tr >td >img').eq(0).should('have.attr','src','img/company3.png')
        // //check by the amount text that it viewed in the first row after ascending sort
        // cy.get('td[class="text-right bolder nowrap"]').get('span[class="text-danger"]').eq(0).should('have.text','- 320.00 USD')
        // //check by description that the image appear in the last row
        // cy.get('table[id="transactionsTable"] >tbody > tr >td >img').eq(5).should('have.attr','src','img/company1.png')
        // //check that the biggest amount viewed in the last row
        // cy.get('td[class="text-right bolder nowrap"]').get('span[class="text-success"]').eq(3).should('have.text','+ 1,250.00 USD')


    })
    it('Canvas Chart Test',()=>
    {
        
        const red_data = [10,20,30,40,50,60,70]
        const blue_data = [8,9,-10,10,40,60,40]
        const yellow_data= [5,10,15,20,25,30,35]
        cy.eyesOpen({appName:'Hackathon'})
        loginPage.GoTo_V1()
        loginPage.login()
        cy.eyesCheckWindow('Canvas chart Test before click on compare expenses')
        cy.get(mainPage.compareExpenses).click().wait(2000)
        cy.eyesCheckWindow('Canvas chart Test After click on compare expenses')
    //     .then(()=>{
    //         cy.wait(100)
    //         .then(()=>
    //         {
    //         cy.window().its('barChartData').its('datasets')
    //         .should('have.length',2).its('0').its('data')
    //         .should('have.members',red_data)
    //         .each((redbar,index)=>{console.log(redbar == red_data[index])}).should('have.length',7)


    //         cy.window().its('barChartData').its('datasets')
    //         .should('have.length',2).its('1').its('data').should('have.members',blue_data,blue_data).should('have.length',7).each((bluebar,index)=>
    //         {console.log(bluebar == blue_data[index])})})
    //    })
       cy.get(mainPage.showDataForNextYear_btn).click().wait(2000)
       cy.eyesCheckWindow('Canvas chart Test After click on showDataforNextYear')
    //    .then(()=>{
       
        
    //     cy.window().its('barChartData').its('datasets')
    //     .should('have.length',3).its('0').its('data')
    //     .should('have.members',red_data)

    //     cy.window().its('barChartData').its('datasets')
    //     .should('have.length',3).its('1').its('data')
    //     .should('have.members',blue_data)

    //     cy.window().its('barChartData').its('datasets')
    //     .should('have.length',3).its('2').its('data')
    //     .should('have.members',yellow_data)
    //     cy.window().its('barChartData').its('datasets')
    //     .should('have.length',3).its('2').its('label').should('equal',2019)
        
    //     })
        cy.eyesClose()
 
    })
    it('DynamicContent Test',()=>
    {
        cy.eyesOpen({appName:'Hackathon'})
        cy.visit('https://demo.applitools.com/hackathon.html?showAd=true')
        cy.eyesCheckWindow('Dynamic Content test before Login')
        loginPage.login()
        cy.wait(2000)
        cy.eyesCheckWindow('Dynamic Content test After Login')
        cy.eyesClose()
        

    })
})
describe.only('App V2',()=>
{
    
    
    it('Login Page UI Elements Test',()=>
    { 
        
        cy.eyesOpen({appName:'Hackathon'})
        loginPage.GoTo_V2()
       cy.eyesCheckWindow('login page')
       cy.eyesClose()


    })
    it('Data-Driven Test, a.click the login button without entering any data',()=>
    {
        cy.eyesOpen({appName:'Hackathon'})
        
        loginPage.GoTo_V2()
        //If you don’t enter the username and password and click the login button, it should throw an error
        cy.get(loginPage.login_btn).click()
        //should throw an error
        // cy.get(loginPage.alertDiv).should('be.visible')
        // .should('contain.text','Both Username and Password must be present')
        cy.eyesCheckWindow('a.click the login button without entering any data')
        cy.get(loginPage.username_txtfield).type("yasser")
        cy.get(loginPage.login_btn).click()
        cy.eyesCheckWindow('b.only enter the username and click login')

        //If you only enter the password and click the login button, it should throw an error
        cy.get(loginPage.username_txtfield).clear()
        cy.get(loginPage.password_txtfield).type("password")
        cy.get(loginPage.login_btn).click()
        //should throw an error
        cy.eyesCheckWindow('c.only enter the Password and click login')
        //If you enter both username (any value) and password (any value), it should log you in.
        cy.get(loginPage.password_txtfield).clear()
        cy.get(loginPage.username_txtfield).type("yasser")
        cy.get(loginPage.password_txtfield).type("password")
        cy.get(loginPage.login_btn).click()
        cy.eyesCheckWindow('d.enter both username and password')

        cy.eyesClose()
     })
  

    it('Table Sort Test',()=>
    {
        cy.eyesOpen({appName:'Hackathon'})
        loginPage.GoTo_V2()
        loginPage.login()
        cy.eyesCheckWindow('Table Before sort MainPage')
      //  cy.get('div[class="logo-label"]').should('contain.text',"ACME")
        cy.get(mainPage.recentTransactionsTable.amountTitle).click().wait(2000)
        cy.eyesCheckWindow('Table after sort')
        // //check by description that the image appear in the first place
        // cy.get('table[id="transactionsTable"] >tbody > tr >td >img').eq(0).should('have.attr','src','img/company3.png')
        // //check by the amount text that it viewed in the first row after ascending sort
        // cy.get('td[class="text-right bolder nowrap"]').get('span[class="text-danger"]').eq(0).should('have.text','- 320.00 USD')
        // //check by description that the image appear in the last row
        // cy.get('table[id="transactionsTable"] >tbody > tr >td >img').eq(5).should('have.attr','src','img/company1.png')
        // //check that the biggest amount viewed in the last row
        // cy.get('td[class="text-right bolder nowrap"]').get('span[class="text-success"]').eq(3).should('have.text','+ 1,250.00 USD')


    })
    it('Canvas Chart Test',()=>
    {
        const red_data = [10,20,30,40,50,60,70]
        const blue_data = [8,9,-10,10,40,60,40]
        const yellow_data= [5,10,15,20,25,30,35]
        cy.eyesOpen({appName:'Hackathon'})
        
        
        loginPage.GoTo_V2()
        loginPage.login()
        cy.eyesCheckWindow('Canvas chart Test before click on compare expenses')
        cy.get(mainPage.compareExpenses).click().wait(2000)
        cy.eyesCheckWindow('Canvas chart Test After click on compare expenses')
    //     .then(()=>{
    //         cy.wait(100)
    //         .then(()=>
    //         {
    //         cy.window().its('barChartData').its('datasets')
    //         .should('have.length',2).its('0').its('data')
    //         .should('have.members',red_data)
    //         .each((redbar,index)=>{console.log(redbar == red_data[index])}).should('have.length',7)


    //         cy.window().its('barChartData').its('datasets')
    //         .should('have.length',2).its('1').its('data').should('have.members',blue_data,blue_data).should('have.length',7).each((bluebar,index)=>
    //         {console.log(bluebar == blue_data[index])})})
    //    })
       cy.get(mainPage.showDataForNextYear_btn).click().wait(2000)
       cy.eyesCheckWindow('Canvas chart Test After click on showDataforNextYear')
    //    .then(()=>{
       
        
    //     cy.window().its('barChartData').its('datasets')
    //     .should('have.length',3).its('0').its('data')
    //     .should('have.members',red_data)

    //     cy.window().its('barChartData').its('datasets')
    //     .should('have.length',3).its('1').its('data')
    //     .should('have.members',blue_data)

    //     cy.window().its('barChartData').its('datasets')
    //     .should('have.length',3).its('2').its('data')
    //     .should('have.members',yellow_data)
    //     cy.window().its('barChartData').its('datasets')
    //     .should('have.length',3).its('2').its('label').should('equal',2019)
        
    //     })
    cy.eyesClose()
        
 
    })
    it('DynamicContent Test',()=>
    {
        cy.eyesOpen({appName:'Hackathon'})
        cy.visit('https://demo.applitools.com/hackathonV2.html?showAd=true')
        cy.eyesCheckWindow('Dynamic Content test before Login')
        loginPage.login()
        cy.wait(2000)
        cy.eyesCheckWindow('Dynamic Content test After Login')
        
        // cy.get('img[src="img/flashSale.gif"]').should('be.visible').should('exist')
        // cy.get('img[src="img/flashSale2.gif"]').should('be.visible').should('exist')
        cy.eyesClose()

        

    })
})