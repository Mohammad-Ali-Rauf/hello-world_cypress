describe('main', () => {
  it('visits the development env of my app', () => {
    cy.visit('http://localhost:3000')
  })

  // it('testing out testing', () => {
  //   cy.get('button').then(($btn) => {
  //     const cls = $btn.attr('class')

  //     cy.wrap($btn).click().should('not.have.class', cls)
  //   })
  // })
})
