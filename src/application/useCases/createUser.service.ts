import {CreateUserRepository} from '../../domain/repositories/createUser.repository'

export class CreateUserService {
    private createUserRepository: any
    constructor(db: any) {
        this.createUserRepository = new CreateUserRepository(db)
    }

    async execute(user: any) {
        if(!user){
            throw new Error('User not provided.')
        }
        return this.createUserRepository.execute(user)
    }
}
