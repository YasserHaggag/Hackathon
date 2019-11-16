/// <reference types="Cypress" />
import { loginPage } from "../Pages/LoginPage"
import { mainPage } from "../pages/MainPage"


describe('App V1',()=>
{
    
    it('Login Page UI Elements Test',()=>
    {
        loginPage.GoTo_V1()
        cy.get(loginPage.logoIcon_img).should('be.visible')
        cy.get(loginPage.header).should('contain','Login Form').should('be.visible')
        cy.get(loginPage.label).eq(0).should('be.visible').should('have.text','Username')
        cy.get(loginPage.username_malecircleIcon).should('be.visible')
        cy.get(loginPage.username_txtfield).should('be.visible').should('have.attr','placeholder','Enter your username')
        cy.get(loginPage.password_fingerprintIcon).should('be.visible')
        cy.get(loginPage.label).eq(1).should('be.visible').should('have.text','Password')
        cy.get(loginPage.password_txtfield).should('be.visible').should('have.attr','placeholder','Enter your password')
        cy.get(loginPage.login_btn).should('be.visible').should('contain','Log In')
        cy.get(loginPage.rememberMe_chkbx).should('be.visible')
        cy.get(loginPage.twitterIcon_img).should('be.visible')
        cy.get(loginPage.facebookIcon_img).should('be.visible')
        cy.get(loginPage.linkedinIcon_img).should('be.visible')

    })
    it('Data-Driven Test, a.click the login button without entering any data',()=>
    {
        loginPage.GoTo_V1()
        //If you don’t enter the username and password and click the login button, it should throw an error
        cy.get(loginPage.login_btn).click()
        //should throw an error
        cy.get(loginPage.alertDiv).should('be.visible')
        .should('contain.text','Both Username and Password must be present')
     })
    it('Data-Driven Test, b.only enter the username and click login',()=>
    {
        loginPage.GoTo_V1()
        
        //If you only enter the username and click the login button, it should throw an error
        cy.get(loginPage.username_txtfield).type("yasser")
        cy.get(loginPage.login_btn).click()
        //should throw an error 
        cy.get(loginPage.alertDiv).should('be.visible')
        .should('contain.text','Password must be present')
        
        
        
    })
    it('Data-Driven Test, c.only enter the Password and click login',()=>
    {
        loginPage.GoTo_V1()
                
        //If you only enter the password and click the login button, it should throw an error
        cy.get(loginPage.password_txtfield).type("password")
        cy.get(loginPage.login_btn).click()
        //should throw an error
        cy.get(loginPage.alertDiv).should('be.visible')
        .should('contain.text','Username must be present')


    })
    it('Data-Driven Test, d.enter both username and password',()=>
    {
        loginPage.GoTo_V1()

        //If you enter both username (any value) and password (any value), it should log you in.
        cy.get(loginPage.username_txtfield).type("yasser")
        cy.get(loginPage.password_txtfield).type("password")
        cy.get(loginPage.login_btn).click()
        cy.get('div[class="logo-label"]').should('contain.text',"ACME")
        

    })
    it('Table Sort Test',()=>
    {
        loginPage.GoTo_V1()
        loginPage.login()
        cy.get('div[class="logo-label"]').should('contain.text',"ACME")
        cy.get(mainPage.recentTransactionsTable.amountTitle).click()
        //check by description that the image appear in the first place
        cy.get('table[id="transactionsTable"] >tbody > tr >td >img').eq(0).should('have.attr','src','img/company3.png')
        //check by the amount text that it viewed in the first row after ascending sort
        cy.get('td[class="text-right bolder nowrap"]').get('span[class="text-danger"]').eq(0).should('have.text','- 320.00 USD')
        //check by description that the image appear in the last row
        cy.get('table[id="transactionsTable"] >tbody > tr >td >img').eq(5).should('have.attr','src','img/company1.png')
        //check that the biggest amount viewed in the last row
        cy.get('td[class="text-right bolder nowrap"]').get('span[class="text-success"]').eq(3).should('have.text','+ 1,250.00 USD')


    })
    it('Canvas Chart Test',()=>
    {
        const red_data = [10,20,30,40,50,60,70]
        const blue_data = [8,9,-10,10,40,60,40]
        const yellow_data= [5,10,15,20,25,30,35]
        loginPage.GoTo_V1()
        loginPage.login()
        cy.get(mainPage.compareExpenses).click()
        .then(()=>{
            cy.wait(100)
            .then(()=>
            {
            cy.window().its('barChartData').its('datasets')
            .should('have.length',2).its('0').its('data')
            .should('have.members',red_data)
            .each((redbar,index)=>{console.log(redbar == red_data[index])}).should('have.length',7)


            cy.window().its('barChartData').its('datasets')
            .should('have.length',2).its('1').its('data').should('have.members',blue_data,blue_data).should('have.length',7).each((bluebar,index)=>
            {console.log(bluebar == blue_data[index])})})
       })
       cy.get(mainPage.showDataForNextYear_btn).click()
       .then(()=>{
       
        
        cy.window().its('barChartData').its('datasets')
        .should('have.length',3).its('0').its('data')
        .should('have.members',red_data)

        cy.window().its('barChartData').its('datasets')
        .should('have.length',3).its('1').its('data')
        .should('have.members',blue_data)

        cy.window().its('barChartData').its('datasets')
        .should('have.length',3).its('2').its('data')
        .should('have.members',yellow_data)
        cy.window().its('barChartData').its('datasets')
        .should('have.length',3).its('2').its('label').should('equal',2019)
        
        })
        
 
    })
    it('DynamicContent Test',()=>
    {
        cy.visit('https://demo.applitools.com/hackathon.html?showAd=true')
        loginPage.login()
        cy.get('img[src="img/flashSale.gif"]').should('be.visible').should('exist')
        cy.get('img[src="img/flashSale2.gif"]').should('be.visible').should('exist')

        

    })
})

describe('App v2',()=>
{
    it('Login Page UI Elements Test',()=>
    {
        loginPage.GoTo_V2()
        cy.get(loginPage.logoIcon_img).should('be.visible')
        cy.get(loginPage.header).should('contain','Login Form').should('be.visible')
        cy.get(loginPage.label).eq(0).should('be.visible').should('have.text','Username')
        cy.get(loginPage.username_malecircleIcon).should('be.visible')
        cy.get(loginPage.username_txtfield).should('be.visible').should('have.attr','placeholder','Enter your username')
        cy.get(loginPage.password_fingerprintIcon).should('be.visible')
        cy.get(loginPage.label).eq(1).should('be.visible').should('have.text','Password')
        cy.get(loginPage.password_txtfield).should('be.visible').should('have.attr','placeholder','Enter your password')
        cy.get(loginPage.login_btn).should('be.visible').should('contain','Log In')
        cy.get(loginPage.rememberMe_chkbx).should('be.visible')
        cy.get(loginPage.twitterIcon_img).should('be.visible')
        cy.get(loginPage.facebookIcon_img).should('be.visible')
        cy.get(loginPage.linkedinIcon_img).should('be.visible')

    })
    it('Data-Driven Test, a.click the login button without entering any data',()=>
    {
        loginPage.GoTo_V2()
        //If you don’t enter the username and password and click the login button, it should throw an error
        cy.get(loginPage.login_btn).click()
        //should throw an error
        cy.get(loginPage.alertDiv).should('be.visible')
        .should('contain.text','Both Username and Password must be present')
     })
    it('Data-Driven Test, b.only enter the username and click login',()=>
    {
        loginPage.GoTo_V2()
        
        //If you only enter the username and click the login button, it should throw an error
        cy.get(loginPage.username_txtfield).type("yasser")
        cy.get(loginPage.login_btn).click()
        //should throw an error 
        cy.get(loginPage.alertDiv).should('be.visible')
        .should('contain.text','Password must be present')
        
        
        
    })
    it('Data-Driven Test, c.only enter the Password and click login',()=>
    {
        loginPage.GoTo_V2()
                
        //If you only enter the password and click the login button, it should throw an error
        cy.get(loginPage.password_txtfield).type("password")
        cy.get(loginPage.login_btn).click()
        //should throw an error
        cy.get(loginPage.alertDiv).should('be.visible')
        .should('contain.text','Username must be present')


    })
    it('Data-Driven Test, d.enter both username and password',()=>
    {
        loginPage.GoTo_V2()

        //If you enter both username (any value) and password (any value), it should log you in.
        cy.get(loginPage.username_txtfield).type("yasser")
        cy.get(loginPage.password_txtfield).type("password")
        cy.get(loginPage.login_btn).click()
        cy.get('div[class="logo-label"]').should('contain.text',"ACME")
        

    })
    it('Table Sort Test',()=>
    {
        loginPage.GoTo_V2()
        loginPage.login()
        cy.get('div[class="logo-label"]').should('contain.text',"ACME")
        cy.get(mainPage.recentTransactionsTable.amountTitle).click()
        //check by description that the image appear in the first place
        cy.get('table[id="transactionsTable"] >tbody > tr >td >img').eq(0).should('have.attr','src','img/company3.png')
        //check by the amount text that it viewed in the first row after ascending sort
        cy.get('td[class="text-right bolder nowrap"]').get('span[class="text-danger"]').eq(0).should('have.text','- 320.00 USD')
        //check by description that the image appear in the last row
        cy.get('table[id="transactionsTable"] >tbody > tr >td >img').eq(5).should('have.attr','src','img/company1.png')
        //check that the biggest amount viewed in the last row
        cy.get('td[class="text-right bolder nowrap"]').get('span[class="text-success"]').eq(3).should('have.text','+ 1,250.00 USD')


    })
    it('Canvas Chart Test',()=>
    {
        const red_data = [10,20,30,40,50,60,70]
        const blue_data = [8,9,-10,10,40,60,40]
        const yellow_data= [5,10,15,20,25,30,35]
        loginPage.GoTo_V2()
        loginPage.login()
        cy.get(mainPage.compareExpenses).click()
        .then(()=>{
            cy.wait(100)
            .then(()=>
            {
            cy.window().its('barChartData').its('datasets')
            .should('have.length',2).its('0').its('data')
            .should('have.members',red_data)
            .each((redbar,index)=>{console.log(redbar == red_data[index])}).should('have.length',7)


            cy.window().its('barChartData').its('datasets')
            .should('have.length',2).its('1').its('data').should('have.members',blue_data,blue_data).should('have.length',7).each((bluebar,index)=>
            {console.log(bluebar == blue_data[index])})})
       })
       cy.get(mainPage.showDataForNextYear_btn).click()
       .then(()=>{
       
        
        cy.window().its('barChartData').its('datasets')
        .should('have.length',3).its('0').its('data')
        .should('have.members',red_data)

        cy.window().its('barChartData').its('datasets')
        .should('have.length',3).its('1').its('data')
        .should('have.members',blue_data)

        cy.window().its('barChartData').its('datasets')
        .should('have.length',3).its('2').its('data')
        .should('have.members',yellow_data)
        cy.window().its('barChartData').its('datasets')
        .should('have.length',3).its('2').its('label').should('equal',2019)
        
        })
        
 
    })
    it('DynamicContent Test',()=>
    {
        cy.visit('https://demo.applitools.com/hackathonV2.html?showAd=true')
        loginPage.login()
        cy.get('img[src="img/flashSale.gif"]').should('be.visible').should('exist')
        cy.get('img[src="img/flashSale2.gif"]').should('be.visible').should('exist')

        

    })
})