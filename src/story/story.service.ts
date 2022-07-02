import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Story, StoryDocument } from './schema/story.schema';

@Injectable()
export class StoryService {
  constructor(
    @InjectModel(Story.name) private storyModel: Model<StoryDocument>,
  ) {}
  findAll() {
    return this.storyModel.find({});
  }
  findOne() {
    return this.storyModel.aggregate([{ $sample: { size: 1 } }]);
  }
  createStory(story) {
    return this.storyModel.create({ ...story });
  }

  createMany(stories) {
    return this.storyModel.insertMany(stories);
  }
}
