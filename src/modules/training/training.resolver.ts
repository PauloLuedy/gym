import { Mutation, Args, Resolver } from '@nestjs/graphql';
import { TrainingService } from './training.service';

@Resolver()
export class TrainingResolver {
  constructor(private readonly trainingService: TrainingService) {}

  @Mutation()
  public async createTrainings(@Args('data') data: any) {
    return await this.trainingService.createTraining(data);
  }
}
