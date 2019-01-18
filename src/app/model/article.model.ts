export class Article {
    
    constructor(
        public id?: number,
        public title?: string,
        public text?: string,
        public category_id?: number,
        public created?: string,
        public updated?: string
    ) { }
}