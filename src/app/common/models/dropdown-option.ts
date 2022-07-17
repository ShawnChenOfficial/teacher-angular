export class DropdownOption<T>{
    source: T;
    title: string;

    constructor(source: T, title: string) {
        this.source = source;
        this.title = title;
    }
}