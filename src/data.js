const data = {
  products: [
    {
      id: 0,
      name: 'Abandoned Chair',
      details:
        'This chair was found abandoned on the street. We found it. Trying to make some money out of it. Nobody wants it. Do you?',
      imgSrc:
        'https://cdn.pixabay.com/photo/2016/11/19/15/50/chair-1840011_960_720.jpg',
      price: 20.98,
      relatedProducts: [6, 7, 9],
      features: ['new'],
      shipping: {
        width: '60cm',
        height: '80cm',
        length: '60cm',
        weight: '25kg',
      },
      inCart: false,
      inWishlist: false,
      quantity: 0,
    },

    {
      id: 1,
      name: 'Rocking Horse',
      details:
        'Wooden rocking horse for riding. Let your child ride a horse from an early age. Wood from sustainable sources. Caring about environment.',
      imgSrc:
        'https://cdn.pixabay.com/photo/2012/04/13/21/32/rocking-horse-33719_960_720.png',
      price: 245.39,
      relatedProducts: [5, 6, 7],
      features: ['trending', 'popular', 'new'],
      shipping: {
        width: '30cm',
        height: '120cm',
        length: '110cm',
        weight: '80kg',
      },
      inCart: false,
      inWishlist: false,
      quantity: 0,
    },

    {
      id: 2,
      name: 'Sleeping Pillows',
      details:
        'Sleep like never before with these soft and silky pillows. Once you put your head onto them, you will fall asleep instantly. Guaranteed.',
      imgSrc:
        'https://cdn.pixabay.com/photo/2015/11/07/11/22/pillows-1031079_960_720.jpg',
      price: 12.99,
      relatedProducts: [0, 5, 7],
      features: ['popular', 'trending'],
      shipping: {
        width: '60cm',
        height: '10cm',
        length: '80cm',
        weight: '1kg',
      },
      inCart: false,
      inWishlist: false,
      quantity: 0,
    },

    {
      id: 3,
      name: 'Kitchen Top',
      details:
        'Kitchen top, pure quality, mesmerized. Tap not included, chairs neither. You want to eat, then eat. You want to sleep, then sleep. It will hold.',
      imgSrc:
        'https://cdn.pixabay.com/photo/2016/12/30/07/59/kitchen-1940174_960_720.jpg',
      price: 680.99,
      relatedProducts: [4, 6, 8],
      features: ['new', 'popular'],
      shipping: {
        width: '80cm',
        height: '100cm',
        length: '600cm',
        weight: '450kg',
      },
      inCart: false,
      inWishlist: false,
      quantity: 0,
    },

    {
      id: 4,
      name: 'Complete Kitchen',
      details:
        'Buy this luxurious kitchen, premium at its best. Do you want to impress your friends. Show off yourself as success. This is for you.',
      imgSrc:
        'https://cdn.pixabay.com/photo/2017/06/13/22/42/kitchen-2400367_960_720.jpg',
      price: 45210.89,
      relatedProducts: [7, 8, 3],
      features: ['new', 'trending'],
      shipping: {
        width: '500cm',
        height: '250cm',
        length: '800cm',
        weight: 'NA',
      },
      inCart: false,
      inWishlist: false,
      quantity: 0,
    },

    {
      id: 5,
      name: 'Adorable Dog',
      details:
        'We are selling this lazy dog. He is of no use to us. Sleeps all day, eats a lot. Took over sofa for himself. All he is giving is this adorable look. Maybe worthed',
      imgSrc:
        'https://cdn.pixabay.com/photo/2018/03/18/18/06/australian-shepherd-3237735_960_720.jpg',
      price: 50.99,
      relatedProducts: [1, 6, 7],
      features: ['new'],
      shipping: {
        width: '30cm',
        height: '60cm',
        length: '100cm',
        weight: '70kg',
      },
      inCart: false,
      inWishlist: false,
      quantity: 0,
    },

    {
      id: 6,
      name: 'Garden Chair',
      details:
        'Do you like being lazy and outdoor at the same time? If so this chair is for you. Lying down and sleeping all day long. Sounds like a fun.',
      imgSrc:
        'https://cdn.pixabay.com/photo/2020/05/21/13/11/hanging-chair-5200722_960_720.jpg',
      price: 40.98,
      relatedProducts: [1, 2, 7],
      features: ['trending', 'popular', 'new'],
      shipping: {
        width: '90cm',
        height: '100cm',
        length: '80cm',
        weight: '30kg',
      },
      inCart: false,
      inWishlist: false,
      quantity: 0,
    },

    {
      id: 7,
      name: 'Brown Leather Sofa',
      details:
        'Premium quality leather sofa. For luxury in mind. Hard built to last. Manufactured by highest specs. Suit yourself in superior luxury.',
      imgSrc:
        'https://images.unsplash.com/photo-1573866926487-a1865558a9cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
      price: 9930.98,
      relatedProducts: [2, 4, 8],
      features: ['trending', 'popular', 'new'],
      shipping: {
        width: '490cm',
        height: '90cm',
        length: '80cm',
        weight: '130kg',
      },
      inCart: false,
      inWishlist: false,
      quantity: 0,
    },

    {
      id: 8,
      name: 'Tea Room Complete',
      details:
        'Premium quality tea guest room. Impress your guests by bringing them into this traditional tea table room. Build to impress by old standards. Be like a queen for once.',
      imgSrc:
        'https://images.unsplash.com/photo-1507452786732-f2dc0a2e7b7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1313&q=80',
      price: 17630.98,
      relatedProducts: [3, 4, 7],
      features: ['popular', 'new'],
      shipping: {
        width: '600cm',
        height: '450cm',
        length: '800cm',
        weight: 'NA',
      },
      inCart: false,
      inWishlist: false,
      quantity: 0,
    },

    {
      id: 9,
      name: 'Plastic Meeting Chairs',
      details:
        'Do you have many people coming to your meetings? Affordable and solid plastic chairs to accomodate many guests. By only one or as many as you wish.',
      imgSrc:
        'https://images.unsplash.com/photo-1553110503-b4388ef57dbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80',
      price: 17.98,
      relatedProducts: [0, 5, 6],
      features: ['popular', 'trending'],
      shipping: {
        width: '50cm',
        height: '45cm',
        length: '100cm',
        weight: '6kg',
      },
      inCart: false,
      inWishlist: false,
      quantity: 0,
    },
  ],
};

export default data;
