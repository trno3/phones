export class Phone {
  id?: number;
  name?: string;
  manufacturer?: string;
  description?: string;
  color?: string;
  price?: number;
  imageFileName?: string;
  screen?: string;
  processor?: string;
  ram?: number;

  constructor() {
    this.id = null!;
    this.name = '';
    this.manufacturer = '';
    this.description = '';
    this.color = '';
    this.price = 0;
    this.imageFileName = 'IPhone_7.png';
    this.screen = '';
    this.processor = '';
    this.ram = 0;
  }
}
