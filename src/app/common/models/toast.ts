export enum ToastEventType{
    Success,
    Error
}

export class ToastEvent{
    message!: string;
    title!: string;
    type!: ToastEventType;
}