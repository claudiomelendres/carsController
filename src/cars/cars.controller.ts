import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor(public carService: CarsService){

    }
    

    @Get()
    getAllCars() {
        return this.carService.findAll();
    }

    @Get(':id')
    getCarById( @Param('id', ParseIntPipe) id: number ) {
        console.log({id});
        
        return this.carService.findOneById(id);
    }
}
