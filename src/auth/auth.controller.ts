import { Controller, Post, Body, ValidationPipe, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthCredentialDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';
import { GetUser } from './get-user.decorator';
import { User } from './user.entity';

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
    ): Promise<object> {
        return this.authService.signIn(authCredentialDto);
    }

    @Post('/test')
    @UseGuards(AuthGuard())
    test(@GetUser() user: User){
        console.log(user);
    }

}
