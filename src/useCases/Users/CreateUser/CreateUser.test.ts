import request from 'supertest';
import { app } from '../../../app';
import { User } from '../../../models/User';

describe('Create user use cases', () => {
  it('Should create user successfully', async () => {
    const userPayload = {
      firstName: 'Gabriel',
      lastName: 'Moura',
      email: 'test@mail.com',
      password: '12345678',
      phone: '40028922',
      interests: ['foo', 'test']
    };

    const createdUserResponse = await request(app).post('/users').send(userPayload);

    expect(createdUserResponse.status).toBe(201);
    expect(createdUserResponse.body).toHaveProperty('_id');

    return User.deleteOne({ email: userPayload.email });

  });

  it('Should return that user already exists', async () => {
    try {
      const alreadyCreatedUser = {
        firstName: 'Gabriel',
        lastName: 'Moura',
        email: 'gabriel.moura.hue@gmail.com',
        password: '12345678',
        phone: '11991420521',
        interests: ['Tarot', 'Hermetismo', 'Umbanda', 'Cabala']
      };

      await request(app).post('/users').send(alreadyCreatedUser);

    } catch (error) {
      const userAlreadyExistsMessage = 'Hmmm, parece que já existe um usuário com esse e-mail';

      console.log(error);
      expect(error.statusCode).toEqual(400);
      expect(error.message).toEqual(userAlreadyExistsMessage);
    }
  });
});