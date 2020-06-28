const Product = require('./model/product')
 
class FakeDb {

  constructor() {
    this.products = [
      {
        coverImage: './assets/img/original.jpg',
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens',
        heading1:'サンプルテキスト①',
        heading2:'サンプルテキスト②',
        heading3:'サンプルテキスト③',
        headingtext1:'apple banana cow',
        headingtext2:'apple banana cow',
        headingtext3:'apple banana cow'
      },
      {
        coverImage: './assets/img/original.jpg',
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras',
        heading1:'サンプルテキスト①',
        heading2:'サンプルテキスト②',
        heading3:'サンプルテキスト③',
        headingtext1:'apple banana cow',
        headingtext2:'apple banana cow',
        headingtext3:'apple banana cow'
      },
      {
        coverImage: './assets/img/original.jpg',
        name: 'Phone Standard',
        price: 299,
        description: '',
        heading1:'サンプルテキスト①',
        heading2:'サンプルテキスト②',
        heading3:'サンプルテキスト③',
        headingtext1:'apple banana cow',
        headingtext2:'apple banana cow',
        headingtext3:'apple banana cow'
      },
      {
        coverImage: './assets/img/original.jpg',
        name: 'Phone Special',
        price: 399,
        description: '',
        heading1:'サンプルテキスト①',
        heading2:'サンプルテキスト②',
        heading3:'サンプルテキスト③',
        headingtext1:'apple banana cow',
        headingtext2:'apple banana cow',
        headingtext3:'apple banana cow'
      }
    ]
  }

  async initDb() {
      await this.cleanDb()
      this.pushProductsToDb()
  }

  async cleanDb() {
      await Product.deleteMany({})
  }

  pushProductsToDb() {
      this.products.forEach(
          (product) => {
              const newProduct = new Product(product)
              newProduct.save()
          }
      )
  }
}

module.exports = FakeDb