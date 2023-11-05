import {CreateUserRepository} from '../../domain/repositories/createUser.repository'
import {CreateUserDto} from "../../domain/dtos/createUser.dto";

export class CreateUserService {
    private createUserRepository: any
    constructor(db: any) {
        this.createUserRepository = new CreateUserRepository(db)
    }

    async execute(user: CreateUserDto) {
        if(!user){
            throw new Error('User not provided.')
        }
        return this.createUserRepository.execute(user)
    }
}
