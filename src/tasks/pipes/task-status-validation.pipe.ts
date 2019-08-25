import { PipeTransform, ArgumentMetadata, BadRequestException } from "@nestjs/common";
import { TasksStatus } from '../task.model';

export class TasksStatusValidationPipe implements PipeTransform {
    readonly allowedStatus = [
        TasksStatus.OPEN,
        TasksStatus.IN_PROGRESS,
        TasksStatus.DONE,
    ]
    transform(value: any, metadata: ArgumentMetadata) {
        value = value.toUpperCase();
        if (!this.isStatusValid(value)){
            throw new BadRequestException(`${value} is an invalid status`);
        }
        return value;
    }

    private isStatusValid(status: any) {
        const idx = this.allowedStatus.indexOf(status);
        return idx !== -1;
    }
}