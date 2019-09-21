import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskRepository } from './task.repository';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFiterDto } from './dto/get-task-filter.dto';
import { TasksStatus } from './task-status.enum';
import { User } from '../auth/user.entity';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TaskRepository)
        private TaskRepository: TaskRepository
    ){ }

    async getTasks(filterDto: GetTasksFiterDto, user: User): Promise<Task[]>{
        return this.TaskRepository.getTasks(filterDto, user);
    }

    async getTaskById(
        id: number, 
        user: User
    ): Promise<Task> {
        const found = await this.TaskRepository.findOne({ where: { id, userId: user.id }});
        if (!found){
            throw new NotFoundException('Task not found');
        }
        return found;
    }

    async createTask(
        taskDto: CreateTaskDto,
        user: User
    ): Promise<Task> {
        return this.TaskRepository.createTask(taskDto, user);
    }

    // async deleteTask(id: number): Promise<Task> {
    //     const task = await this.getTaskById(id);
    //     return this.TaskRepository.remove(task);
    // }

    async deleteTask(
        id: number, user: User
    ): Promise<void> {
        const rows = await this.TaskRepository.delete({ id, userId: user.id});
        if (rows.affected === 0) {
            throw new NotFoundException(`Task wit ID ${id} not found`);
        }
    }

    async updateTaskStatus(
        id: number, status: TasksStatus, user: User
    ): Promise<Task> {
        const task = await this.getTaskById(id, user);
        task.status = status;
        await task.save();
        return task;
    }
}
