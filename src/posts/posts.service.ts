import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Posts, PostsDocument } from './schema/post.schema';

@Injectable()
export class PostsService {
  constructor( @InjectModel(Posts.name) private postModel: Model<PostsDocument> ) {}

  async create(createPostDto: CreatePostDto): Promise<Posts> {
    const createdPost = new this.postModel(CreatePostDto);
    return createdPost.save();
  }

  async findAll(): Promise<Posts[]> {
    return this.postModel.find().exec();
  }

  async findOne(id: string): Promise<Posts> {
    return this.postModel.findById(id).exec();
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    console.log(updatePostDto);
    return await this.postModel.updateOne({_id: id}, updatePostDto).exec();
  }

  async remove(id: string) {
    return this.postModel.deleteOne({_id: id}).exec();
  }
}
