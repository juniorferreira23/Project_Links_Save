const request = require('supertest')
const linkRoute = require('../routes/linkRoute')



test('Testando redirecionamento da página', async () => {
    const res = request(linkRoute).get('/:title')
    
})