export class SearchResult {
    source: any;

    title: string;
    sub: string;

    constructor(title: string, sub: string, source: any) {
        this.title = title;
        this.sub = sub;
        this.source = source;
    }
}