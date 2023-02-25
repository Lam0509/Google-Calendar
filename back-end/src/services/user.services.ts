import User from "../entity/user";
import {AppDataSource} from "../data-source";

let userRepo = AppDataSource.getRepository(User)

class UserServices {

    static async getUserByEmail(email: string) {
        return await userRepo.findOneBy({email: email});
    }

}

export default UserServices;