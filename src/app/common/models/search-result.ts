/**
 * object that used for display search result
 */
export class SearchResultView {
    source: any;

    title: string;
    sub: string;

    constructor(title: string, sub: string, source: any) {
        this.title = title;
        this.sub = sub;
        this.source = source;
    }
}

/**
 * object that used to define how to convert object/raw result to SearchResultView
 */
export abstract class SearchResultObject {
    abstract toSearchResult(): SearchResultView;
}

export class SearchEvent {
    data?: any;
    func: Function;

    constructor(func: Function, data?: any) {
        this.func = func;
        this.data = data;
    }
}