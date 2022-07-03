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

export abstract class SearchResultable {
    abstract toSearchResult(): SearchResult;
}

export class SearchEvent {
    data?: any;
    func: Function;

    constructor(func: Function, data?: any) {
        this.func = func;
        this.data = data;
    }
}