import {Body, Controller, Delete, Get, NotFoundException, Param, Post, Put} from '@nestjs/common';
import {ApiOperation, ApiTags} from "@nestjs/swagger";
import {UserLoginInterface} from "./class/user-login.interface";
import {UserLoginService} from "./user-login.service";

@Controller('User')
@ApiTags("User Login用户登录")
export class UserLoginController {
    constructor(private readonly userLoginService: UserLoginService) {
    }

    @Get("users")
    @ApiOperation({summary: "全部用户表", description: "获取全部用户表"})
    async getAll() {

        let userLogin;
        let res;

        try {
            userLogin = await this.userLoginService.findAll();
            res = {
                error_code: 0,
                reason: "Success",
                result: {
                    total: userLogin.length,
                    list: userLogin
                }
            }
        } catch (e) {
            res = {
                error_code: 1,
                reason: "Something wrong on Connecting Your Database",
                e
            }
        }
        return res
    }


    @Post("login")
    @ApiOperation({summary: "登录", description: "根据用户名和密码返回True/False"})
    async login(@Body() userLoginInterface: UserLoginInterface) {
        const inputPassword = userLoginInterface.password
        const user = await this.userLoginService.findByName(userLoginInterface.username)

        if (user[0] === undefined) {
            return {value:false}
        } else {
            const realPassword = await user[0].password
            const res = {value: !(inputPassword !== realPassword)}
            return res;
        }
    }


    @Post()
    @ApiOperation({summary: "新增用户", description: "新增新的用户"})
    async create(@Body() userLoginInterface: UserLoginInterface) {

        let userLogin;
        let res;

        try {
            userLogin = this.userLoginService.create(userLoginInterface);
            res =
                {
                    error_code: 0,
                    reason: "Success",
                    result: "创建成功"
                }
        } catch (e) {
            res = {
                error_code: "1",
                reason: "Something wrong on Connecting Your Database",
                e
            }

        }
        return res
    }

    @Put(":id")
    @ApiOperation({summary: "更新用户名和密码", description: "更新用户名和密码"})
    async update(@Param("id") id: string, @Body() data: UserLoginInterface) {
        let userLogin;
        let res;

        try {
            userLogin = await this.userLoginService.updateById(id, data);
            if (!userLogin) throw new NotFoundException("Cat Don't Exist")
            res = {
                error_code: 0,
                reason: "Success",
                result: userLogin
            }
        } catch (e) {
            res = {
                error_code: "1",
                reason: "Go to call John Mai fix it~, If you fire him, So sorry~",
                e
            }
        }
        return res

    }

    @Delete(":id")
    @ApiOperation({summary: "删除用户", description: "删除用户"})
    async remove(@Param("id") id: string) {
        let res;

        try {
            await this.userLoginService.remove(id)
            res =
                {
                    error_code: 0,
                    reason: "Success",
                    result: "删除成功"
                }
        } catch (e) {
            res = {
                error_code: "1",
                reason: "Something on Connecting Your Database",
                e
            }
        }
        return res
    }

}
