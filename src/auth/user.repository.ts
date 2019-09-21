import { Repository, EntityRepository } from "typeorm";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import * as bcrypt from 'bcrypt';
import { User } from "./user.entity";
import { AuthCredentialDto } from "./dto/auth-credentials.dto";

@EntityRepository(User)
export class UserRepository extends Repository<User>{

    async signUp(authCredentialsDto: AuthCredentialDto): Promise<void> {
        const { username, password } = authCredentialsDto;

        // const exist = this.findOne({ username });
        // if ( exist) { // }
        const user = new User();
        user.username = username;
        user.salt =  await bcrypt.genSalt();
        user.password = await this.hashPassword(password, user.salt);

        try {
            await user.save();
        } catch (error) {
            if (error.code === '23505') { // Duplicate Username
                throw new ConflictException('Username already exis');
            }
                throw new InternalServerErrorException('Error en el servidor');
        }
    }

    async validateUserPassword(authCredentialsDto: AuthCredentialDto): Promise<string> {
        const { username, password } = authCredentialsDto;
        const user = await this.findOne({ username });
        if (user && await user.validatePassword(password)) {
            return user.username;
        } else {
            return null;
        }
    }

    private async hashPassword(password:string, salt:string): Promise<string>{
        return bcrypt.hash(password, salt);
    }


}