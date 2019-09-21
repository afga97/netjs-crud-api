import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthCredentialDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService,
    ){}

    @Post('/signUp')
    async signUp(
        @Body(ValidationPipe) authCredentialDto: AuthCredentialDto
    ): Promise<void> {
        return this.authService.signUp(authCredentialDto)
    }

    @Post('/signIn')
    async signIn(
        @Body() authCredentialDto: AuthCredentialDto
    ): Promise<string>{
        return this.authService.signIn(authCredentialDto);
    }


}
