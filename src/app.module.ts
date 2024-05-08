import { Module } from '@nestjs/common';
import { DoctorsModule } from './doctors/doctors.module';
import { PatientsModule } from './patients/patients.module';
import { DatasourceModule } from './datasource/datasource.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
  imports: [DoctorsModule, PatientsModule, ReviewsModule, DatasourceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
