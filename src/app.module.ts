import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { JobService } from './job/job.service';
import { QuestionService } from './question/question.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaService, JobService, QuestionService],
})
export class AppModule {}
