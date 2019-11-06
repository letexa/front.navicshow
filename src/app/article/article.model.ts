export class Article {

  constructor(
      public id?: number,
      public title?: string,
      public categoryId?: number,
      public text?: string,
      public created?: object,
      public updated?: object) { }
}