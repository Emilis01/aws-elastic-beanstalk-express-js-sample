const request = require('supertest');
const { app } = require('../app');

test('Neturi būti XSS tipo scenarijaus atsakyme', async () => {
  const res = await request(app).get('/');
  expect(res.status).toBe(200);

  // Pritaikyta reguliarioji išraiška, kuri aptinka ir ' arba " ir bet kokius tarpus
  expect(res.text).not.toMatch(/<script>\s*alert\s*\((.*?)\)\s*;<\/script>/i);
});
