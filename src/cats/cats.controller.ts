import { Controller, Get, Post, Body } from '@nestjs/common';
import {CatsService} from "./cats.service"
import {create} from 'domain'
import {CreateCatDto} from "./dto/create-cat.dto";

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {
    }

    @Get()
    getAll() {
        return this.catsService.findAll()
    }

    @Post()
    create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }

}
