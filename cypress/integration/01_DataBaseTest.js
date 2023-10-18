describe('DataBase Testi',()=>{

    it('Test 1',()=>{
        cy.task("DATABASE",{
            dbConfig : Cypress.env('DB'),
            sql :'select * from physician'
        }).
        then((result) => {
            console.log(result)
         expect(result.rowCount).to.equal(658)
       // expect(result.rows[16].id).to.eq('alime')
        // expect(result.rows[16].first_name).to.eq('alime')
        // expect(result.rows[16].last_name).to.eq('cann')
        // expect(result.rows[16].phone).to.eq('5667890909')
         

        })

       
    })
    it.skip('Test 2',()=>{
        cy.task("DATABASE",{
            dbConfig : Cypress.env('DB'),
            sql :'select * from physician'
        }).
        then((result) => {
            console.log(result)
            expect(result.rowCount).to.equal(658)
       assert.equal(result.rows[16].id, '277670')
         assert.equal(result.rows[16].first_name,'alime')
         assert.equal(result.rows[16].last_name, 'cann')
         assert.equal(result.rows[16].phone, '5667890909')
        })


    })

    it.skip('Test 3',()=>{
        cy.task("DATABASE",{
            dbConfig : Cypress.env('DB'),
            sql :'select * from physician'
        }).
        then((result) => {
            console.log(result)
       assert.equal(result.rowCount, 658)

       assert.equal(result.rows[16].id).to.have.string('277670')
         assert.equal(result.rows[16].first_name).to.have.string('alime')
          assert.equal(result.rows[16].last_name).to.have.string('cann')
         expect(result.rows[16].phone).to.have.string('5667890909')
        })
    }) 
})
/*resources :npmjs.com  =>plugins
            :docs.cypress.io
            :gitter.im => github hesabi ile giris yapilir


*/