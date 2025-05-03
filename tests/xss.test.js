const request = require('supertest'); // HTTP testų biblioteka
const { app } = require('../app');    // Importuojama Express aplikacija

test('Neturi būti XSS tipo scenarijaus atsakyme', async () => {
  const res = await request(app).get('/');
  expect(res.status).toBe(200); // Tikimasi, kad atsakymas sėkmingas

  // Patikrinama, ar atsakyme nėra kenksmingo <script> elemento
  expect(res.text).not.toMatch(/<script>alert\(.*\)<\/script>/);
});
