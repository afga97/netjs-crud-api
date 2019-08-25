import { Controller, Get, Post, Delete, Body, Param, Patch, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TasksStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFiterDto } from './dto/get-task-filter.dto';
import { TasksStatusValidationPipe } from './pipes/task-status-validation.pipe';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService){}

    @Get()
    getTasks(@Query() filterDto: GetTasksFiterDto ): Task[] {
        if (Object.keys(filterDto).length) {
            return this.tasksService.getTaskWithFilters(filterDto)
        }
        return this.tasksService.getAllTasks()
    }

    @Post()
    @UsePipes(ValidationPipe)
    createTask(@Body() createTaskDto: CreateTaskDto): Task {
        return this.tasksService.createTask(createTaskDto);
    }

    @Get(':id')
    getTaskById(@Param('id') id: string ): Task{
        return this.tasksService.getTaskById(id);
    }

    @Delete(':id')
    deleteTask(@Param('id') id: string): void {
        this.tasksService.deleteTask(id);
    }

    @Patch('/:id/status')
    updateTaskStatus(
        @Param('id') id: string,
        @Body('status', TasksStatusValidationPipe) status: TasksStatus,
    ): Task {
        return this.tasksService.updateTaskStatus(id, status)
    }
}

