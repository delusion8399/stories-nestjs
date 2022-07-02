import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateStoryDTO } from './dto/create-story.dto';
import { Story } from './interface/story.interface';
import { StoryService } from './story.service';

@Controller('/')
export class StoryController {
  constructor(private readonly storyService: StoryService) {}

  @Get('')
  async findAll(): Promise<Story[]> {
    return this.storyService.findAll();
  }

  @Get('/random')
  async findOne(): Promise<Story[]> {
    return this.storyService.findOne();
  }

  @Post('/create')
  createStory(@Body() createStoryDTO: CreateStoryDTO) {
    return this.storyService.createStory(createStoryDTO);
  }
}
