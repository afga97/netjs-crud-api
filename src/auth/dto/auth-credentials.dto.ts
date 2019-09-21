import { IsString, MaxLength, MinLength, Matches } from "class-validator";

export class AuthCredentialDto{
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string;

    @IsString()
    @MinLength(5)
    @MaxLength(20)
    // @Matches(
    //     /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
    //     { message: 'The password must contain more than one capital letter, lowercase letter and special characters. '})
    password: string;
}