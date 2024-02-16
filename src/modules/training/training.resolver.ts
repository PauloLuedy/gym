import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { TrainingService } from './training.service';
import { CreateTrainingDTO } from './DTOs/training';
import { IsPublic } from '../auth/decorators/is-public.decorator';

@Resolver()
export class TrainingResolver {
  constructor(private readonly trainingService: TrainingService) {}

  @Mutation()
  @IsPublic()
  public async createTrainings(@Args('data') data: CreateTrainingDTO) {
    const result = await this.trainingService.createTrainings(data);

    return result;
  }
}
