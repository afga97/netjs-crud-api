// import { Injectable, NotFoundException } from '@nestjs/common';
// import { Task, TasksStatus } from './task.model';
// import { CreateTaskDto } from './dto/create-task.dto';
// import { GetTasksFiterDto } from './dto/get-task-filter.dto';

// @Injectable()
// export class TasksService {

    // private tasks: Task[] = [];

    // getAllTasks(): Task[] {
    //     return this.tasks;
    // }

    // getTaskWithFilters(filterDto: GetTasksFiterDto ): Task[] {
    //     const { status, search } = filterDto;

    //     let tasks = this.getAllTasks();

    //     if (status) {
    //         tasks = tasks.filter(task => task.status === status);
    //     }

    //     if (search) {
    //         tasks = tasks.filter(task => 
    //                 task.title.includes(search) || task.description.includes(search)
    //             )
    //     }
    //     return tasks;
    // }

    // createTask(taskDto: CreateTaskDto): Task {
    //     const { title, description } = taskDto;
    //     const task: Task = {
    //         id: String(Math.floor(Math.random() * 10000) + 10000),
    //         title,
    //         description,
    //         status: TasksStatus.OPEN,
    //     };
    //     this.tasks.push(task);
    //     return task;
    // }

    // getTaskById(id: string): Task {
    //     const found = this.tasks.find( task => task.id === id);
    //     if (!found){
    //         throw new NotFoundException('Task not found');
    //     }
    //     return found;
    // }

    // deleteTask(id: string): void {
    //     // let id_task = this.tasks.findIndex( task => task.id === id);
    //     // this.tasks.splice(id_task);
    //     const found = this.getTaskById(id);
    //     this.tasks = this.tasks.filter( task => task.id !== found.id);
    // }

    // updateTaskStatus(id: string, status?: TasksStatus): Task {
    //     const task = this.getTaskById(id);
    //     task.status = status;
    //     return task;
    // }
// }
