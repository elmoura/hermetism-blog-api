import request from 'supertest';
import { app } from '../../../app';

const updateUserPayload = {
  firstName: 'El Pistoleiro',
  lastName: 'Moura',
  phone: '40028922',
  interests: ['Xesque rownlies', 'tresken', 'bresken'],
};

test('Should update user successfully', async () => {
  const userId = '5fbd0484ce5b291fa44ad4ba';

  const updatedUserResponse = await request(app)
    .put(`/users/${userId}`).
    send(updateUserPayload);

  expect(updatedUserResponse.status).toBe(200);
  expect(updatedUserResponse.body).toHaveProperty('_id');
});

test('Should return that user does not exists', async () => {
  try {
    const invalidUserId = '5fbd0484ce5b291fa44ad4bb';

    await request(app).put(`/users/${invalidUserId}`).send(updateUserPayload);

  } catch (error) {
    const userDontExistMessage = 'Parece que esse usuário não existe';

    expect(error.status).toBe(400);
    expect(error.body.message).toBe(userDontExistMessage);
  }
});

test('Should return that the request is invalid when the ID is not a valid format', async () => {
  try {
    const invalidId = '123456';

    await request(app).put(`/users/${invalidId}`).send(updateUserPayload);

  } catch (error) {
    const invalidRequestMessage = 'Requisição inválida';

    expect(error.status).toBe(400);
    expect(error.body.message).toBe(invalidRequestMessage);
  }
});