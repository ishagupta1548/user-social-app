import { test } from '@japa/runner'
// import User from 'App/Models/User'

test('get users from db', async ({ client }) => {
  // const user = await User.find(1)
  // console.log(user)
  const response = await client.get('/users/:id').bearerToken('Nw.16WQ5E8g8xKKbnULu4EzrpT1-nmL-eve57iNDRRGi5cxaYydGd-VAn08jMdC')
  console.log(response.body())
  response.assertStatus(200)
})
