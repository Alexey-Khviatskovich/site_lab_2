import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Doctor } from "src/doctors/doctor.entity";

@Injectable()
export class DoctorsService {
    constructor(private readonly datasourceService: DatasourceService){}
    
    create(doctor: Doctor) {
        this.datasourceService.getDoctors().push(doctor);
        return doctor;
    }

    findOne(id: number) {
        return this.datasourceService
        .getDoctors()
        .find((doctor) => doctor.id === id);
    }

    findAll(): Doctor[] {
        return this.datasourceService.getDoctors();
    }

    update(id: number, updatedDoctor: Doctor) {
        const index = this.datasourceService
        .getDoctors()
        .findIndex((doctor) => doctor.id === id);
        this.datasourceService.getDoctors()[index] = updatedDoctor;
        return this.datasourceService.getDoctors()[index];
    }

    remove(id: number) {
        const index = this.datasourceService
        .getDoctors()
        .findIndex((doctor) => doctor.id === id);
        this.datasourceService.getDoctors().splice(index, 1);
        return HttpStatus.OK;
    }
}