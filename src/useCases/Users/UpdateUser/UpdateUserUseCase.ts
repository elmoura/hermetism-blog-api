import { User } from '../../../models/User'
import { UpdateUserDTO } from '../UpdateUser/UpdateUserDTO'

export class UpdateUserUseCase {
  async execute(_id: string, updateUserPayload: UpdateUserDTO) {
    return User.findOneAndUpdate({ _id }, updateUserPayload, {
      new: true,
      omitUndefined: true
    });
  }
}