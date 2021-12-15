interface IGeoSearchModel {
    id?: number;
    name?: string;
    latitude?: number;
    longitude?: number;
    admin1?: string;
    admin2?: string;
    admin3?: string;
    admin4?: string;
}

export class GeoSearchModel implements IGeoSearchModel {
    id = 0;
    name = '';
    latitude = 0;
    longitude = 0;
    addInfo = '';

    constructor(d?: IGeoSearchModel) {
        if (d) {
            this.id = d.id || 0;
            this.name = d.name || '';
            this.latitude = d.latitude || 0;
            this.longitude = d.longitude || 0;
            if (d.admin1) {
                this.addInfo = d.admin1;
            } else if (d.admin2) {
                this.addInfo = d.admin2;
            } else if (d.admin3) {
                this.addInfo = d.admin3;
            } else if (d.admin4) {
                this.addInfo = d.admin4;
            }
        }
    }
}
