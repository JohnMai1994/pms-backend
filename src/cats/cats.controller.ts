import {Controller, Get, Post, Body, Res, Param, NotFoundException, HttpStatus, Delete, Put} from '@nestjs/common';
import {CatsService} from "./cats.service"
import {CreateCatDto} from "./dto/create-cat.dto";
import {Cat} from "./interfaces/cat.interface";
import {ApiOperation, ApiTags} from "@nestjs/swagger";

@Controller('cat')
@ApiTags("测试猫")
export class CatsController {
    constructor(private readonly catsService: CatsService) {
    }

    @Get()
    @ApiOperation({summary: "全部猫", description: "获取全部猫"})
    async getAll() {
        let cats;
        let res;

        try {
            cats = await this.catsService.findAll()
            res = {
                error_code: 0,
                reason: "Success",
                result: {
                    total: cats.length,
                    list: cats
                }
            }

        } catch (e) {
            res = {
                error_code: 1,
                reason: "Something on Connecting Your Database",
                result: {e}
            }
        }
        return res;

    }

    @Post()
    @ApiOperation({summary: "创建猫", description: "创建一只猫"})
    create(@Body() createCatDto: CreateCatDto) {
        let cat;
        let res;

        try {
            cat = this.catsService.create(createCatDto);
            res =
                {
                    error_code: 0,
                    reason: "Success",
                    result: "创建成功"
                }
        } catch (e) {
            res = {
                error_code: "1",
                reason: "Something on Connecting Your Database",
                result: {e}
            }

        }
        return res


    }

    @Get(":id")
    @ApiOperation({summary: "单只猫", description: "获取一只猫"})
    async getById(@Param('id') id: string) {
        let cat;
        let res;

        try {
            cat = await this.catsService.findById(id);
            if (!cat) throw new NotFoundException("Cat Don't Exist")
            res = {
                error_code: 0,
                reason: "Success",
                result: cat
            }

        } catch (e) {
            res = {
                error_code: "1",
                reason: "Something on Connecting Your Database",
                result: {e}
            }
        }
        return res

    }

    @Put(':id')
    @ApiOperation({summary: "更新猫", description: "更新一只猫"})
    async update(@Param('id') id: string, @Body() data: Cat) {
        let cat;
        let res;

        try {
            cat = await this.catsService.updateById(id, data);
            if (!cat) throw new NotFoundException("Cat Don't Exist")
            res = {
                error_code: 0,
                reason: "Success",
                result: cat
            }

        } catch (e) {
            res = {
                error_code: "1",
                reason: "Something on Connecting Your Database",
                result: {e}
            }
        }
        return res

    }


    @Delete(':id')
    @ApiOperation({summary: "删除猫", description: "删除一只猫"})
    async remove(@Param("id") id: string) {
        let res;

        try {
            await this.catsService.remove(id)
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
                result: {e}
            }
        }
        return res


    }

}
