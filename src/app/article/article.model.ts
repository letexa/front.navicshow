export class Article {

  constructor(
      public id?: number,
      public name?: string,
      public categoryId?: number,
      public text?: string,
      public created?: object,
      public updated?: object) { }
}