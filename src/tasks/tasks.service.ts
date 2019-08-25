import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFiterDto } from './dto/get-task-filter.dto';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TasksStatus } from './task-status.enum';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TaskRepository)
        private TaskRepository: TaskRepository
    ){ }

    async getTasks(filterDto: GetTasksFiterDto): Promise<Task[]>{
        return this.TaskRepository.getTasks(filterDto);
    }

    async getTaskById(id: number): Promise<Task> {
        const found = await this.TaskRepository.findOne(id);
        if (!found){
            throw new NotFoundException('Task not found');
        }
        return found;
    }

    async createTask(taskDto: CreateTaskDto): Promise<Task> {
        return this.TaskRepository.createTask(taskDto);
    }

    // async deleteTask(id: number): Promise<Task> {
    //     const task = await this.getTaskById(id);
    //     return this.TaskRepository.remove(task);
    // }

    async deleteTask(id: number): Promise<void> {
        const rows = await this.TaskRepository.delete(id);
        if (rows.affected === 0) {
            throw new NotFoundException(`Task wit ID ${id} not found`);
        }
    }

    async updateTaskStatus(id: number, status?: TasksStatus): Promise<Task> {
        const task = await this.getTaskById(id);
        task.status = status;
        await task.save();
        return task;
    }
}
