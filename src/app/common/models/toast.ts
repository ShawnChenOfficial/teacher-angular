export enum ToastEventType{
    Success,
    Error
}

export class ToastEvent{
    message!: string | string[];
    title!: string;
    type!: ToastEventType;
}