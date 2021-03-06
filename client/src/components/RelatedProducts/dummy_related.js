const related = [14373, 15034, 14586];

const currentProduct = [{
  id: 14931,
  campus: 'hr-sfo',
  name: 'Manuela Pants',
  slogan: 'Nemo ratione deserunt.',
  description:
    'Rerum quia tempore aperiam reiciendis. Eum a enim. Saepe magni tenetur et. Sit est beatae.',
  category: 'Pants',
  default_price: '398.00',
  created_at: '2021-02-23T02:49:03.102Z',
  updated_at: '2021-02-23T02:49:03.102Z',
  features: [
    {
      feature: 'Non-GMO',
      value: null,
    },
    {
      feature: 'Material',
      value: '"FullControl Skin"',
    },
  ],
  thumbnail_url:
    'https://images.unsplash.com/photo-1532244769164-ff64ddeefa45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
}];

const relatedProducts = [
  {
    id: 14373,
    campus: 'hr-sfo',
    name: 'Gwendolyn Sweater',
    slogan: 'In in dolorum et odit deserunt reprehenderit.',
    description:
      'Aliquid magni praesentium. Vero est a. Nihil odio earum et. Natus ad velit ad.',
    category: 'Sweater',
    default_price: '987.00',
    created_at: '2021-02-23T02:49:03.102Z',
    updated_at: '2021-02-23T02:49:03.102Z',
    features: [
      {
        feature: 'Frame',
        value: '"AllLight Composition Resin"',
      },
      {
        feature: '5 Year Warranty',
        value: null,
      },
      {
        feature: 'Fabric',
        value: '"FullControlSkin"',
      },
      {
        feature: 'Non-GMO',
        value: null,
      },
    ],
    thumbnail_url:
      'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 15034,
    campus: 'hr-sfo',
    name: 'Rodrigo Sweater',
    slogan: 'Explicabo nulla quae aut ducimus blanditiis repellat ut odio.',
    description:
      'Accusantium facilis quo quia ut. Quas a et consequatur praesentium voluptatem. Quis totam numquam. Ut rerum porro rem debitis nesciunt et facere mollitia. Dicta maxime itaque ab modi.',
    category: 'Sweater',
    default_price: '878.00',
    created_at: '2021-02-23T02:49:03.102Z',
    updated_at: '2021-02-23T02:49:03.102Z',
    features: [
      {
        feature: 'Lifetime Guarantee',
        value: null,
      },
      {
        feature: 'Stitching',
        value: '"Double Stitch"',
      },
      {
        feature: 'Lifetime Guarantee',
        value: null,
      },
      {
        feature: 'Non-GMO',
        value: null,
      },
    ],
    thumbnail_url:
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 14586,
    campus: 'hr-sfo',
    name: 'Kassandra Tank Top',
    slogan: 'Rem et minima est vero beatae repellendus sed.',
    description:
      'Provident sed quia. Quo soluta facilis temporibus omnis. Incidunt et eum qui quo iste cum sunt. Et praesentium et quasi provident sunt est. Tempore placeat ab eum iste magni numquam ab atque.',
    category: 'Tank Top',
    default_price: '649.00',
    created_at: '2021-02-23T02:49:03.102Z',
    updated_at: '2021-02-23T02:49:03.102Z',
    features: [
      {
        feature: 'Lifetime Guarantee',
        value: null,
      },
    ],
    thumbnail_url:
      'https://images.unsplash.com/photo-1547257965-087be799b084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
  },
];

const relatedProductsStyles = [
  {
    product_id: '14373',
    results: [
      {
        style_id: 72701,
        name: 'Plum',
        original_price: '987.00',
        sale_price: null,
        'default?': true,
        photos: [
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1459947727010-6267d2c1232f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
          },
        ],
        skus: {
          420346: {
            quantity: 53,
            size: 'XS',
          },
          420347: {
            quantity: 15,
            size: 'S',
          },
          420348: {
            quantity: 42,
            size: 'M',
          },
          420349: {
            quantity: 33,
            size: 'L',
          },
          420350: {
            quantity: 8,
            size: 'XL',
          },
          420351: {
            quantity: 49,
            size: 'XXL',
          },
        },
      },
      {
        style_id: 72702,
        name: 'Grey',
        original_price: '987.00',
        sale_price: null,
        'default?': false,
        photos: [
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
          },
        ],
        skus: {
          420352: {
            quantity: 22,
            size: 'XS',
          },
          420353: {
            quantity: 5,
            size: 'S',
          },
          420354: {
            quantity: 36,
            size: 'M',
          },
          420355: {
            quantity: 40,
            size: 'L',
          },
          420356: {
            quantity: 51,
            size: 'XL',
          },
          420357: {
            quantity: 50,
            size: 'XXL',
          },
        },
      },
      {
        style_id: 72703,
        name: 'Grey',
        original_price: '987.00',
        sale_price: null,
        'default?': false,
        photos: [
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1503449377594-32dd9ac4467c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1548133464-29abc661eb5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
          },
        ],
        skus: {
          420358: {
            quantity: 52,
            size: 'XS',
          },
          420359: {
            quantity: 34,
            size: 'S',
          },
          420360: {
            quantity: 38,
            size: 'M',
          },
          420361: {
            quantity: 27,
            size: 'L',
          },
          420362: {
            quantity: 37,
            size: 'XL',
          },
          420363: {
            quantity: 37,
            size: 'XXL',
          },
        },
      },
      {
        style_id: 72704,
        name: 'Mint green',
        original_price: '987.00',
        sale_price: null,
        'default?': false,
        photos: [
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1511766566737-1740d1da79be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
          },
        ],
        skus: {
          420364: {
            quantity: 34,
            size: 'XS',
          },
          420365: {
            quantity: 46,
            size: 'S',
          },
          420366: {
            quantity: 43,
            size: 'M',
          },
          420367: {
            quantity: 3,
            size: 'L',
          },
          420368: {
            quantity: 33,
            size: 'XL',
          },
          420369: {
            quantity: 51,
            size: 'XXL',
          },
        },
      },
      {
        style_id: 72705,
        name: 'Turquoise',
        original_price: '987.00',
        sale_price: null,
        'default?': false,
        photos: [
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
          },
        ],
        skus: {
          420370: {
            quantity: 17,
            size: 'XS',
          },
          420371: {
            quantity: 28,
            size: 'S',
          },
          420372: {
            quantity: 57,
            size: 'M',
          },
          420373: {
            quantity: 51,
            size: 'L',
          },
          420374: {
            quantity: 3,
            size: 'XL',
          },
          420375: {
            quantity: 3,
            size: 'XXL',
          },
        },
      },
      {
        style_id: 72706,
        name: 'White',
        original_price: '987.00',
        sale_price: null,
        'default?': false,
        photos: [
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1560095633-6803ba0461cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
          },
        ],
        skus: {
          420376: {
            quantity: 46,
            size: 'XS',
          },
          420377: {
            quantity: 6,
            size: 'S',
          },
          420378: {
            quantity: 3,
            size: 'M',
          },
          420379: {
            quantity: 45,
            size: 'L',
          },
          420380: {
            quantity: 7,
            size: 'XL',
          },
          420381: {
            quantity: 9,
            size: 'XXL',
          },
        },
      },
      {
        style_id: 72707,
        name: 'Lime',
        original_price: '987.00',
        sale_price: null,
        'default?': false,
        photos: [
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1558014356-f7c41bc744f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
          },
        ],
        skus: {
          420382: {
            quantity: 5,
            size: 'XS',
          },
          420383: {
            quantity: 39,
            size: 'S',
          },
          420384: {
            quantity: 13,
            size: 'M',
          },
          420385: {
            quantity: 59,
            size: 'L',
          },
          420386: {
            quantity: 18,
            size: 'XL',
          },
          420387: {
            quantity: 28,
            size: 'XXL',
          },
        },
      },
      {
        style_id: 72708,
        name: 'Orange',
        original_price: '987.00',
        sale_price: null,
        'default?': false,
        photos: [
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1559304022-afbf28f53c4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1656&q=80',
          },
        ],
        skus: {
          420388: {
            quantity: 7,
            size: 'XS',
          },
          420389: {
            quantity: 26,
            size: 'S',
          },
          420390: {
            quantity: 16,
            size: 'M',
          },
          420391: {
            quantity: 1,
            size: 'L',
          },
          420392: {
            quantity: 27,
            size: 'XL',
          },
          420393: {
            quantity: 47,
            size: 'XXL',
          },
        },
      },
      {
        style_id: 72709,
        name: 'Indigo',
        original_price: '987.00',
        sale_price: null,
        'default?': false,
        photos: [
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1479756212843-6314ad5121dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
          },
        ],
        skus: {
          420394: {
            quantity: 24,
            size: 'XS',
          },
          420395: {
            quantity: 30,
            size: 'S',
          },
          420396: {
            quantity: 47,
            size: 'M',
          },
          420397: {
            quantity: 8,
            size: 'L',
          },
          420398: {
            quantity: 21,
            size: 'XL',
          },
          420399: {
            quantity: 1,
            size: 'XXL',
          },
        },
      },
      {
        style_id: 72710,
        name: 'Fuchsia',
        original_price: '987.00',
        sale_price: '557.00',
        'default?': false,
        photos: [
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1498098662025-04e60a212db4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
          },
        ],
        skus: {
          420400: {
            quantity: 40,
            size: 'XS',
          },
          420401: {
            quantity: 18,
            size: 'S',
          },
          420402: {
            quantity: 8,
            size: 'M',
          },
          420403: {
            quantity: 24,
            size: 'L',
          },
          420404: {
            quantity: 32,
            size: 'XL',
          },
          420405: {
            quantity: 2,
            size: 'XXL',
          },
        },
      },
      {
        style_id: 72711,
        name: 'Orchid',
        original_price: '987.00',
        sale_price: '562.00',
        'default?': false,
        photos: [
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1505248254168-1de4e1abfa78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80',
          },
        ],
        skus: {
          420406: {
            quantity: 46,
            size: 'XS',
          },
          420407: {
            quantity: 42,
            size: 'S',
          },
          420408: {
            quantity: 48,
            size: 'M',
          },
          420409: {
            quantity: 5,
            size: 'L',
          },
          420410: {
            quantity: 36,
            size: 'XL',
          },
          420411: {
            quantity: 26,
            size: 'XXL',
          },
        },
      },
    ],
  },
  {
    product_id: '15034',
    results: [
      {
        style_id: 76950,
        name: 'Orchid',
        original_price: '878.00',
        sale_price: null,
        'default?': true,
        photos: [
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1461551449292-b63f7419ac93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1970&q=80',
          },
        ],
        skus: {
          444970: {
            quantity: 17,
            size: 'XS',
          },
          444971: {
            quantity: 57,
            size: 'S',
          },
          444972: {
            quantity: 53,
            size: 'M',
          },
          444973: {
            quantity: 18,
            size: 'L',
          },
          444974: {
            quantity: 45,
            size: 'XL',
          },
          444975: {
            quantity: 14,
            size: 'XXL',
          },
        },
      },
      {
        style_id: 76951,
        name: 'Plum',
        original_price: '878.00',
        sale_price: null,
        'default?': false,
        photos: [
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80',
          },
        ],
        skus: {
          444976: {
            quantity: 29,
            size: 'XS',
          },
          444977: {
            quantity: 53,
            size: 'S',
          },
          444978: {
            quantity: 37,
            size: 'M',
          },
          444979: {
            quantity: 8,
            size: 'L',
          },
          444980: {
            quantity: 52,
            size: 'XL',
          },
          444981: {
            quantity: 48,
            size: 'XXL',
          },
        },
      },
      {
        style_id: 76952,
        name: 'Black',
        original_price: '878.00',
        sale_price: null,
        'default?': false,
        photos: [
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1541006008768-d181e7f9f3d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
          },
        ],
        skus: {
          444982: {
            quantity: 27,
            size: 'XS',
          },
          444983: {
            quantity: 52,
            size: 'S',
          },
          444984: {
            quantity: 41,
            size: 'M',
          },
          444985: {
            quantity: 34,
            size: 'L',
          },
          444986: {
            quantity: 38,
            size: 'XL',
          },
          444987: {
            quantity: 4,
            size: 'XXL',
          },
        },
      },
      {
        style_id: 76953,
        name: 'Magenta',
        original_price: '878.00',
        sale_price: null,
        'default?': false,
        photos: [
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
          },
        ],
        skus: {
          444988: {
            quantity: 36,
            size: 'XS',
          },
          444989: {
            quantity: 22,
            size: 'S',
          },
          444990: {
            quantity: 6,
            size: 'M',
          },
          444991: {
            quantity: 15,
            size: 'L',
          },
          444992: {
            quantity: 49,
            size: 'XL',
          },
          444993: {
            quantity: 37,
            size: 'XXL',
          },
        },
      },
      {
        style_id: 76954,
        name: 'Olive',
        original_price: '878.00',
        sale_price: null,
        'default?': false,
        photos: [
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1459947727010-6267d2c1232f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
          },
        ],
        skus: {
          444994: {
            quantity: 41,
            size: 'XS',
          },
          444995: {
            quantity: 50,
            size: 'S',
          },
          444996: {
            quantity: 48,
            size: 'M',
          },
          444997: {
            quantity: 25,
            size: 'L',
          },
          444998: {
            quantity: 35,
            size: 'XL',
          },
          444999: {
            quantity: 58,
            size: 'XXL',
          },
        },
      },
      {
        style_id: 76955,
        name: 'Plum',
        original_price: '878.00',
        sale_price: null,
        'default?': false,
        photos: [
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1474494819794-90f9664b530d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80',
          },
        ],
        skus: {
          445000: {
            quantity: 7,
            size: 'XS',
          },
          445001: {
            quantity: 39,
            size: 'S',
          },
          445002: {
            quantity: 16,
            size: 'M',
          },
          445003: {
            quantity: 49,
            size: 'L',
          },
          445004: {
            quantity: 31,
            size: 'XL',
          },
          445005: {
            quantity: 43,
            size: 'XXL',
          },
        },
      },
      {
        style_id: 76956,
        name: 'Plum',
        original_price: '878.00',
        sale_price: null,
        'default?': false,
        photos: [
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
          },
        ],
        skus: {
          445006: {
            quantity: 4,
            size: 'XS',
          },
          445007: {
            quantity: 39,
            size: 'S',
          },
          445008: {
            quantity: 0,
            size: 'M',
          },
          445009: {
            quantity: 22,
            size: 'L',
          },
          445010: {
            quantity: 10,
            size: 'XL',
          },
          445011: {
            quantity: 55,
            size: 'XXL',
          },
        },
      },
      {
        style_id: 76957,
        name: 'Grey',
        original_price: '878.00',
        sale_price: null,
        'default?': false,
        photos: [
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1520904549193-5ab0027b3fa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
          },
        ],
        skus: {
          445012: {
            quantity: 9,
            size: 'XS',
          },
          445013: {
            quantity: 53,
            size: 'S',
          },
          445014: {
            quantity: 11,
            size: 'M',
          },
          445015: {
            quantity: 16,
            size: 'L',
          },
          445016: {
            quantity: 3,
            size: 'XL',
          },
          445017: {
            quantity: 6,
            size: 'XXL',
          },
        },
      },
      {
        style_id: 76958,
        name: 'Violet',
        original_price: '878.00',
        sale_price: null,
        'default?': false,
        photos: [
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1514613818067-e207c3441db0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1548861216-17dd1ac80d5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80',
          },
        ],
        skus: {
          445018: {
            quantity: 43,
            size: 'XS',
          },
          445019: {
            quantity: 54,
            size: 'S',
          },
          445020: {
            quantity: 15,
            size: 'M',
          },
          445021: {
            quantity: 56,
            size: 'L',
          },
          445022: {
            quantity: 8,
            size: 'XL',
          },
          445023: {
            quantity: 50,
            size: 'XXL',
          },
        },
      },
      {
        style_id: 76959,
        name: 'Pink',
        original_price: '878.00',
        sale_price: null,
        'default?': false,
        photos: [
          {
            thumbnail_url:
              'https://images.unsplash.com/11/converse-fields.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80',
          },
        ],
        skus: {
          445024: {
            quantity: 39,
            size: 'XS',
          },
          445025: {
            quantity: 21,
            size: 'S',
          },
          445026: {
            quantity: 27,
            size: 'M',
          },
          445027: {
            quantity: 36,
            size: 'L',
          },
          445028: {
            quantity: 21,
            size: 'XL',
          },
          445029: {
            quantity: 3,
            size: 'XXL',
          },
        },
      },
      {
        style_id: 76960,
        name: 'Blue',
        original_price: '878.00',
        sale_price: null,
        'default?': false,
        photos: [
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1422728221357-57980993ea99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1459501462159-97d5bded1416?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
          },
        ],
        skus: {
          445030: {
            quantity: 39,
            size: 'XS',
          },
          445031: {
            quantity: 38,
            size: 'S',
          },
          445032: {
            quantity: 46,
            size: 'M',
          },
          445033: {
            quantity: 25,
            size: 'L',
          },
          445034: {
            quantity: 47,
            size: 'XL',
          },
          445035: {
            quantity: 42,
            size: 'XXL',
          },
        },
      },
    ],
  },
  {
    product_id: '14586',
    results: [
      {
        style_id: 74116,
        name: 'Turquoise',
        original_price: '649.00',
        sale_price: null,
        'default?': true,
        photos: [
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1547257965-087be799b084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=962&q=80',
          },
        ],
        skus: {
          428401: {
            quantity: 7,
            size: 'XS',
          },
          428402: {
            quantity: 44,
            size: 'S',
          },
          428403: {
            quantity: 26,
            size: 'M',
          },
          428404: {
            quantity: 16,
            size: 'L',
          },
          428405: {
            quantity: 40,
            size: 'XL',
          },
          428406: {
            quantity: 53,
            size: 'XXL',
          },
        },
      },
      {
        style_id: 74117,
        name: 'Salmon',
        original_price: '649.00',
        sale_price: null,
        'default?': false,
        photos: [
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
          },
        ],
        skus: {
          428407: {
            quantity: 21,
            size: 'XS',
          },
          428408: {
            quantity: 58,
            size: 'S',
          },
          428409: {
            quantity: 27,
            size: 'M',
          },
          428410: {
            quantity: 59,
            size: 'L',
          },
          428411: {
            quantity: 18,
            size: 'XL',
          },
          428412: {
            quantity: 17,
            size: 'XXL',
          },
        },
      },
      {
        style_id: 74118,
        name: 'Lime',
        original_price: '649.00',
        sale_price: null,
        'default?': false,
        photos: [
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1527431016-15eb83515018?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
          },
        ],
        skus: {
          428413: {
            quantity: 4,
            size: 'XS',
          },
          428414: {
            quantity: 52,
            size: 'S',
          },
          428415: {
            quantity: 53,
            size: 'M',
          },
          428416: {
            quantity: 38,
            size: 'L',
          },
          428417: {
            quantity: 24,
            size: 'XL',
          },
          428418: {
            quantity: 35,
            size: 'XXL',
          },
        },
      },
      {
        style_id: 74119,
        name: 'Magenta',
        original_price: '649.00',
        sale_price: null,
        'default?': false,
        photos: [
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
          },
        ],
        skus: {
          428419: {
            quantity: 1,
            size: 'XS',
          },
          428420: {
            quantity: 53,
            size: 'S',
          },
          428421: {
            quantity: 56,
            size: 'M',
          },
          428422: {
            quantity: 52,
            size: 'L',
          },
          428423: {
            quantity: 34,
            size: 'XL',
          },
          428424: {
            quantity: 22,
            size: 'XXL',
          },
        },
      },
      {
        style_id: 74120,
        name: 'Grey',
        original_price: '649.00',
        sale_price: null,
        'default?': false,
        photos: [
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1527431016-15eb83515018?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
          },
        ],
        skus: {
          428425: {
            quantity: 5,
            size: 'XS',
          },
          428426: {
            quantity: 33,
            size: 'S',
          },
          428427: {
            quantity: 17,
            size: 'M',
          },
          428428: {
            quantity: 13,
            size: 'L',
          },
          428429: {
            quantity: 48,
            size: 'XL',
          },
          428430: {
            quantity: 52,
            size: 'XXL',
          },
        },
      },
      {
        style_id: 74121,
        name: 'Red',
        original_price: '326.00',
        sale_price: null,
        'default?': false,
        photos: [
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1551506448-074afa034c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=938&q=80',
          },
        ],
        skus: {
          428431: {
            quantity: 11,
            size: 'XS',
          },
          428432: {
            quantity: 7,
            size: 'S',
          },
          428433: {
            quantity: 39,
            size: 'M',
          },
          428434: {
            quantity: 39,
            size: 'L',
          },
          428435: {
            quantity: 44,
            size: 'XL',
          },
          428436: {
            quantity: 29,
            size: 'XXL',
          },
        },
      },
    ],
  },
];

module.exports = {
  related,
  relatedProducts,
  relatedProductsStyles,
  currentProduct,
};
