import { IsEmail, IsNotEmpty } from 'class-validator';
export class CreateUserDto {
    @IsEmail({}, { message: "Email phai la Email" })
    @IsNotEmpty({ message: "Email không được để trống" })
    email: string;

    @IsNotEmpty({ message: "Password không được để trống" })
    password: string;

    name: string;
}
