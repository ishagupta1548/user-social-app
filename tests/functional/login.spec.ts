import { test } from '@japa/runner'

test('login an existing user', async ({ client }) => {
    const response = await client.post('/login').form({ email: "test2@gmail.com", password: "twest" })
    console.log(response.body())
    // response.assertStatus(200)
})
