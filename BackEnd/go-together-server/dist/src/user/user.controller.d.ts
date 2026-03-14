import { UserCreateDto } from "./dto/user-create.dto";
import { UserService } from "./user.service";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    create(dto: UserCreateDto): void;
}
