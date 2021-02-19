export class Gem {
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public imageUrl: string,
        public price: number,
        public userId: string,
        public type: string
    ) {}
}
