import { Injectable } from "@nestjs/common";
import { Doctor } from "src/doctors/doctor.entity";
import { Patient } from "src/patients/patient.entity";
import { Review } from "src/reviews/review.entity";

@Injectable()
export class DatasourceService {
    private doctors: Doctor[] = [];

    getDoctors(): Doctor[] {
        return this.doctors;
    }

    private patients: Patient[] = [];

    getPatients(): Patient[] {
        return this.patients;
    }

    private reviews: Review[] = [];

    getReviews(): Review[] {
        return this.reviews;
    }
}