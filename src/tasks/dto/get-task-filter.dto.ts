import { TasksStatus } from "../task.model";

export class GetTasksFiterDto {
    status: TasksStatus;
    search: string;
}