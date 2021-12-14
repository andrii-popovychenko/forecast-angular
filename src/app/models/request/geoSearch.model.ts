interface IGeoSearchRequestModel {
    name: string;
    count?: number;
    format?: string;
    language?: string;
} 

export class GeoSearchRequestModel implements IGeoSearchRequestModel {
    name = '';
    count = 10;
    format = 'json';
    language = 'en';

    constructor(d?: IGeoSearchRequestModel) {
        if (d) {
            Object.assign(this, d);
        }
    }

    get url() {
        return `?name=${this.name}&count=${this.count}&format=${this.format}&language=${this.language}`;
    }
}
