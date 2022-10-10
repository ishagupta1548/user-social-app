import { test } from '@japa/runner'

test('register a new user', async ({ client }) => {
    const response = await client.post('/register').form({ email: "test2@gmail.com", password: "twest", name: "Isha Gupta2" })
    console.log(response.body())
    // response.assertStatus(200)
})
