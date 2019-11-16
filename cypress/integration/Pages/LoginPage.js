const loginPage=
{
    url1: 'https://demo.applitools.com/hackathon.html',
    url2:'https://demo.applitools.com/hackathonV2.html',
    logoIcon_img:'img[src="img/logo-big.png"]',
    header:'h4[class="auth-header"]',
    label:'label[for]',
    username_malecircleIcon:'div[class="pre-icon os-icon os-icon-user-male-circle"]',
    username_txtfield:'input[id="username"]',
    password_fingerprintIcon:'div[class="pre-icon os-icon os-icon-fingerprint"]',
    password_txtfield:'input[id="password"]',
    login_btn:'button[id="log-in"]',
    rememberMe_chkbx:'input[type="checkbox"]',
    twitterIcon_img:'img[src="img/social-icons/twitter.png"]',
    facebookIcon_img:'img[src="img/social-icons/facebook.png"]',
    linkedinIcon_img:'img[src="img/social-icons/linkedin.png"]',
    alertDiv:'div[id*="random_id"]',

    GoTo_V1: function()
    {
        cy.visit(this.url1)
    },
    GoTo_V2: function()
    {
        cy.visit(this.url2)
    },
    login: function()
    {
        cy.get(loginPage.username_txtfield).type("yasser")
        cy.get(loginPage.password_txtfield).type("password")
        cy.get(loginPage.login_btn).click()

    },
    assertions:
    {
        AssertLoginFormheader: function()
        {
            cy.get(this.header).should('contain','Login Form').should('be.visible')
        },
        AssertuserNamelabel: function()
    {
        cy.get(this.label).eq(0).should('be.visible').should('have.text','Username')
    },
    Assertpasswordlabel: function()
    {
        cy.get(this.label).eq(1).should('be.visible').should('have.text','Password')

    }
    }
    
}
export {loginPage}