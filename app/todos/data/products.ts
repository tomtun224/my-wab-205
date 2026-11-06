export type Product = {
  id: number;
  title: string;
  thumbnailUrl: string;
  price: number;
};

type ProductPhoto = Pick<Product, "id" | "title" | "thumbnailUrl">;

const photos: ProductPhoto[] = [
  {
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "thumbnailUrl": "https://picsum.photos/seed/1/150"
  },
  {
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "thumbnailUrl": "https://picsum.photos/seed/2/150"
  },
  {
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "thumbnailUrl": "https://picsum.photos/seed/3/150"
  },
  {
    "id": 4,
    "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    "thumbnailUrl": "https://picsum.photos/seed/4/150"
  },
  {
    "id": 5,
    "title": "natus nisi omnis corporis facere molestiae rerum in",
    "thumbnailUrl": "https://picsum.photos/seed/5/150"
  },
  {
    "id": 6,
    "title": "accusamus ea aliquid et amet sequi nemo",
    "thumbnailUrl": "https://picsum.photos/seed/6/150"
  },
  {
    "id": 7,
    "title": "officia delectus consequatur vero aut veniam explicabo molestias",
    "thumbnailUrl": "https://picsum.photos/seed/7/150"
  },
  {
    "id": 8,
    "title": "aut porro officiis laborum odit ea laudantium corporis",
    "thumbnailUrl": "https://picsum.photos/seed/8/150"
  },
  {
    "id": 9,
    "title": "qui eius qui autem sed",
    "thumbnailUrl": "https://picsum.photos/seed/9/150"
  },
  {
    "id": 10,
    "title": "beatae et provident et ut vel",
    "thumbnailUrl": "https://picsum.photos/seed/10/150"
  },
  {
    "id": 11,
    "title": "nihil at amet non hic quia qui",
    "thumbnailUrl": "https://picsum.photos/seed/11/150"
  },
  {
    "id": 12,
    "title": "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
    "thumbnailUrl": "https://picsum.photos/seed/12/150"
  },
  {
    "id": 13,
    "title": "repudiandae iusto deleniti rerum",
    "thumbnailUrl": "https://picsum.photos/seed/13/150"
  },
  {
    "id": 14,
    "title": "est necessitatibus architecto ut laborum",
    "thumbnailUrl": "https://picsum.photos/seed/14/150"
  },
  {
    "id": 15,
    "title": "harum dicta similique quis dolore earum ex qui",
    "thumbnailUrl": "https://picsum.photos/seed/15/150"
  },
  {
    "id": 16,
    "title": "iusto sunt nobis quasi veritatis quas expedita voluptatum deserunt",
    "thumbnailUrl": "https://picsum.photos/seed/16/150"
  },
  {
    "id": 17,
    "title": "natus doloribus necessitatibus ipsa",
    "thumbnailUrl": "https://picsum.photos/seed/17/150"
  },
  {
    "id": 18,
    "title": "laboriosam odit nam necessitatibus et illum dolores reiciendis",
    "thumbnailUrl": "https://picsum.photos/seed/18/150"
  },
  {
    "id": 19,
    "title": "perferendis nesciunt eveniet et optio a",
    "thumbnailUrl": "https://picsum.photos/seed/19/150"
  },
  {
    "id": 20,
    "title": "assumenda voluptatem laboriosam enim consequatur veniam placeat reiciendis error",
    "thumbnailUrl": "https://picsum.photos/seed/20/150"
  },
  {
    "id": 21,
    "title": "ad et natus qui",
    "thumbnailUrl": "https://picsum.photos/seed/21/150"
  },
  {
    "id": 22,
    "title": "et ea illo et sit voluptas animi blanditiis porro",
    "thumbnailUrl": "https://picsum.photos/seed/22/150"
  },
  {
    "id": 23,
    "title": "harum velit vero totam",
    "thumbnailUrl": "https://picsum.photos/seed/23/150"
  },
  {
    "id": 24,
    "title": "beatae officiis ut aut",
    "thumbnailUrl": "https://picsum.photos/seed/24/150"
  },
  {
    "id": 25,
    "title": "facere non quis fuga fugit vitae",
    "thumbnailUrl": "https://picsum.photos/seed/25/150"
  },
  {
    "id": 26,
    "title": "asperiores nobis voluptate qui",
    "thumbnailUrl": "https://picsum.photos/seed/26/150"
  },
  {
    "id": 27,
    "title": "sit asperiores est quos quis nisi veniam error",
    "thumbnailUrl": "https://picsum.photos/seed/27/150"
  },
  {
    "id": 28,
    "title": "non neque eligendi molestiae repudiandae illum voluptatem qui aut",
    "thumbnailUrl": "https://picsum.photos/seed/28/150"
  },
  {
    "id": 29,
    "title": "aut ipsam quos ab placeat omnis",
    "thumbnailUrl": "https://picsum.photos/seed/29/150"
  },
  {
    "id": 30,
    "title": "odio enim voluptatem quidem aut nihil illum",
    "thumbnailUrl": "https://picsum.photos/seed/30/150"
  },
  {
    "id": 31,
    "title": "voluptate voluptates sequi",
    "thumbnailUrl": "https://picsum.photos/seed/31/150"
  },
  {
    "id": 32,
    "title": "ad enim dignissimos voluptatem similique",
    "thumbnailUrl": "https://picsum.photos/seed/32/150"
  },
  {
    "id": 33,
    "title": "culpa ipsam nobis qui fuga magni et mollitia",
    "thumbnailUrl": "https://picsum.photos/seed/33/150"
  },
  {
    "id": 34,
    "title": "vitae est facere quia itaque adipisci perferendis id maiores",
    "thumbnailUrl": "https://picsum.photos/seed/34/150"
  },
  {
    "id": 35,
    "title": "tenetur minus voluptatum et",
    "thumbnailUrl": "https://picsum.photos/seed/35/150"
  },
  {
    "id": 36,
    "title": "expedita rerum eaque",
    "thumbnailUrl": "https://picsum.photos/seed/36/150"
  },
  {
    "id": 37,
    "title": "totam voluptas iusto deserunt dolores",
    "thumbnailUrl": "https://picsum.photos/seed/37/150"
  },
  {
    "id": 38,
    "title": "natus magnam iure rerum pariatur molestias dolore nisi",
    "thumbnailUrl": "https://picsum.photos/seed/38/150"
  },
  {
    "id": 39,
    "title": "molestiae nam ullam et rerum doloribus",
    "thumbnailUrl": "https://picsum.photos/seed/39/150"
  },
  {
    "id": 40,
    "title": "est quas voluptates dignissimos sint praesentium nisi recusandae",
    "thumbnailUrl": "https://picsum.photos/seed/40/150"
  },
  {
    "id": 41,
    "title": "in voluptatem doloremque cum atque architecto deleniti",
    "thumbnailUrl": "https://picsum.photos/seed/41/150"
  },
  {
    "id": 42,
    "title": "voluptatibus a autem molestias voluptas architecto culpa",
    "thumbnailUrl": "https://picsum.photos/seed/42/150"
  },
  {
    "id": 43,
    "title": "eius hic autem ad beatae voluptas",
    "thumbnailUrl": "https://picsum.photos/seed/43/150"
  },
  {
    "id": 44,
    "title": "neque eum provident et inventore sed ipsam dignissimos quo",
    "thumbnailUrl": "https://picsum.photos/seed/44/150"
  },
  {
    "id": 45,
    "title": "praesentium fugit quis aut voluptatum commodi dolore corrupti",
    "thumbnailUrl": "https://picsum.photos/seed/45/150"
  },
  {
    "id": 46,
    "title": "quidem maiores in quia fugit dolore explicabo occaecati",
    "thumbnailUrl": "https://picsum.photos/seed/46/150"
  },
  {
    "id": 47,
    "title": "et soluta est",
    "thumbnailUrl": "https://picsum.photos/seed/47/150"
  },
  {
    "id": 48,
    "title": "ut esse id",
    "thumbnailUrl": "https://picsum.photos/seed/48/150"
  },
  {
    "id": 49,
    "title": "quasi quae est modi quis quam in impedit",
    "thumbnailUrl": "https://picsum.photos/seed/49/150"
  },
  {
    "id": 50,
    "title": "et inventore quae ut tempore eius voluptatum",
    "thumbnailUrl": "https://picsum.photos/seed/50/150"
  },
  {
    "id": 51,
    "title": "non sunt voluptatem placeat consequuntur rem incidunt",
    "thumbnailUrl": "https://picsum.photos/seed/51/150"
  },
  {
    "id": 52,
    "title": "eveniet pariatur quia nobis reiciendis laboriosam ea",
    "thumbnailUrl": "https://picsum.photos/seed/52/150"
  },
  {
    "id": 53,
    "title": "soluta et harum aliquid officiis ab omnis consequatur",
    "thumbnailUrl": "https://picsum.photos/seed/53/150"
  },
  {
    "id": 54,
    "title": "ut ex quibusdam dolore mollitia",
    "thumbnailUrl": "https://picsum.photos/seed/54/150"
  },
  {
    "id": 55,
    "title": "voluptatem consequatur totam qui aut iure est vel",
    "thumbnailUrl": "https://picsum.photos/seed/55/150"
  },
  {
    "id": 56,
    "title": "vel voluptatem esse consequuntur est officia quo aut quisquam",
    "thumbnailUrl": "https://picsum.photos/seed/56/150"
  },
  {
    "id": 57,
    "title": "vero est optio expedita quis ut molestiae",
    "thumbnailUrl": "https://picsum.photos/seed/57/150"
  },
  {
    "id": 58,
    "title": "rem pariatur facere eaque",
    "thumbnailUrl": "https://picsum.photos/seed/58/150"
  },
  {
    "id": 59,
    "title": "modi totam dolor eaque et ipsum est cupiditate",
    "thumbnailUrl": "https://picsum.photos/seed/59/150"
  },
  {
    "id": 60,
    "title": "ea enim temporibus asperiores placeat consectetur commodi ullam",
    "thumbnailUrl": "https://picsum.photos/seed/60/150"
  },
  {
    "id": 61,
    "title": "quia minus sed eveniet accusantium incidunt beatae odio",
    "thumbnailUrl": "https://picsum.photos/seed/61/150"
  },
  {
    "id": 62,
    "title": "dolorem cumque quo nihil inventore enim",
    "thumbnailUrl": "https://picsum.photos/seed/62/150"
  },
  {
    "id": 63,
    "title": "facere animi autem quod dolor",
    "thumbnailUrl": "https://picsum.photos/seed/63/150"
  },
  {
    "id": 64,
    "title": "doloremque culpa quia",
    "thumbnailUrl": "https://picsum.photos/seed/64/150"
  },
  {
    "id": 65,
    "title": "sed voluptatum enim eaque cumque qui sunt",
    "thumbnailUrl": "https://picsum.photos/seed/65/150"
  },
  {
    "id": 66,
    "title": "provident rerum voluptatem illo asperiores qui maiores",
    "thumbnailUrl": "https://picsum.photos/seed/66/150"
  },
  {
    "id": 67,
    "title": "veritatis labore ipsum unde aut quam dolores",
    "thumbnailUrl": "https://picsum.photos/seed/67/150"
  },
  {
    "id": 68,
    "title": "architecto aut quod qui ullam vitae expedita delectus",
    "thumbnailUrl": "https://picsum.photos/seed/68/150"
  },
  {
    "id": 69,
    "title": "et autem dolores aut porro est qui",
    "thumbnailUrl": "https://picsum.photos/seed/69/150"
  },
  {
    "id": 70,
    "title": "quam quos dolor eum ea in",
    "thumbnailUrl": "https://picsum.photos/seed/70/150"
  },
  {
    "id": 71,
    "title": "illo qui vel laboriosam vel fugit deserunt",
    "thumbnailUrl": "https://picsum.photos/seed/71/150"
  },
  {
    "id": 72,
    "title": "iusto sint enim nesciunt facilis exercitationem",
    "thumbnailUrl": "https://picsum.photos/seed/72/150"
  },
  {
    "id": 73,
    "title": "rerum exercitationem libero dolor",
    "thumbnailUrl": "https://picsum.photos/seed/73/150"
  },
  {
    "id": 74,
    "title": "eligendi quas consequatur aut consequuntur",
    "thumbnailUrl": "https://picsum.photos/seed/74/150"
  },
  {
    "id": 75,
    "title": "aut magni quibusdam cupiditate ea",
    "thumbnailUrl": "https://picsum.photos/seed/75/150"
  },
  {
    "id": 76,
    "title": "magni nulla et dolores",
    "thumbnailUrl": "https://picsum.photos/seed/76/150"
  },
  {
    "id": 77,
    "title": "ipsum consequatur vel omnis mollitia repellat dolores quasi",
    "thumbnailUrl": "https://picsum.photos/seed/77/150"
  },
  {
    "id": 78,
    "title": "aperiam aut est amet tenetur et dolorem",
    "thumbnailUrl": "https://picsum.photos/seed/78/150"
  },
  {
    "id": 79,
    "title": "est vel et laboriosam quo aspernatur distinctio molestiae",
    "thumbnailUrl": "https://picsum.photos/seed/79/150"
  },
  {
    "id": 80,
    "title": "et corrupti nihil cumque",
    "thumbnailUrl": "https://picsum.photos/seed/80/150"
  },
  {
    "id": 81,
    "title": "error magni fugiat dolorem impedit molestiae illo ullam debitis",
    "thumbnailUrl": "https://picsum.photos/seed/81/150"
  },
  {
    "id": 82,
    "title": "voluptate voluptas molestias vitae illo iusto",
    "thumbnailUrl": "https://picsum.photos/seed/82/150"
  },
  {
    "id": 83,
    "title": "quia quasi enim voluptatem repellat sit sint",
    "thumbnailUrl": "https://picsum.photos/seed/83/150"
  },
  {
    "id": 84,
    "title": "aliquam dolorem ut modi ratione et assumenda impedit",
    "thumbnailUrl": "https://picsum.photos/seed/84/150"
  },
  {
    "id": 85,
    "title": "ullam delectus architecto sint error",
    "thumbnailUrl": "https://picsum.photos/seed/85/150"
  },
  {
    "id": 86,
    "title": "qui vel ut odio consequuntur",
    "thumbnailUrl": "https://picsum.photos/seed/86/150"
  },
  {
    "id": 87,
    "title": "eos nihil sunt accusantium omnis",
    "thumbnailUrl": "https://picsum.photos/seed/87/150"
  },
  {
    "id": 88,
    "title": "inventore veritatis magnam enim quasi",
    "thumbnailUrl": "https://picsum.photos/seed/88/150"
  },
  {
    "id": 89,
    "title": "id at cum incidunt nulla dolor vero tenetur",
    "thumbnailUrl": "https://picsum.photos/seed/89/150"
  },
  {
    "id": 90,
    "title": "et quae eligendi vitae maxime in",
    "thumbnailUrl": "https://picsum.photos/seed/90/150"
  },
  {
    "id": 91,
    "title": "sunt quo laborum commodi porro consequatur nam delectus et",
    "thumbnailUrl": "https://picsum.photos/seed/91/150"
  },
  {
    "id": 92,
    "title": "quod non quae",
    "thumbnailUrl": "https://picsum.photos/seed/92/150"
  },
  {
    "id": 93,
    "title": "molestias et aliquam natus repellendus accusamus dolore",
    "thumbnailUrl": "https://picsum.photos/seed/93/150"
  },
  {
    "id": 94,
    "title": "et quisquam aspernatur",
    "thumbnailUrl": "https://picsum.photos/seed/94/150"
  },
  {
    "id": 95,
    "title": "magni odio non",
    "thumbnailUrl": "https://picsum.photos/seed/95/150"
  },
  {
    "id": 96,
    "title": "dolore esse a in eos sed",
    "thumbnailUrl": "https://picsum.photos/seed/96/150"
  },
  {
    "id": 97,
    "title": "labore magnam officiis nemo et",
    "thumbnailUrl": "https://picsum.photos/seed/97/150"
  },
  {
    "id": 98,
    "title": "sed commodi libero id nesciunt modi vitae",
    "thumbnailUrl": "https://picsum.photos/seed/98/150"
  },
  {
    "id": 99,
    "title": "magnam dolor sed enim vel optio consequuntur",
    "thumbnailUrl": "https://picsum.photos/seed/99/150"
  },
  {
    "id": 100,
    "title": "et qui rerum",
    "thumbnailUrl": "https://picsum.photos/seed/100/150"
  },
  {
    "id": 101,
    "title": "incidunt alias vel enim",
    "thumbnailUrl": "https://picsum.photos/seed/101/150"
  },
  {
    "id": 102,
    "title": "eaque iste corporis tempora vero distinctio consequuntur nisi nesciunt",
    "thumbnailUrl": "https://picsum.photos/seed/102/150"
  },
  {
    "id": 103,
    "title": "et eius nisi in ut reprehenderit labore eum",
    "thumbnailUrl": "https://picsum.photos/seed/103/150"
  },
  {
    "id": 104,
    "title": "et natus vero quia totam aut et minima",
    "thumbnailUrl": "https://picsum.photos/seed/104/150"
  },
  {
    "id": 105,
    "title": "veritatis numquam eius",
    "thumbnailUrl": "https://picsum.photos/seed/105/150"
  },
  {
    "id": 106,
    "title": "repellat molestiae nihil iste autem blanditiis officiis",
    "thumbnailUrl": "https://picsum.photos/seed/106/150"
  },
  {
    "id": 107,
    "title": "maiores ipsa ut autem",
    "thumbnailUrl": "https://picsum.photos/seed/107/150"
  },
  {
    "id": 108,
    "title": "qui tempora vel exercitationem harum iusto voluptas incidunt",
    "thumbnailUrl": "https://picsum.photos/seed/108/150"
  },
  {
    "id": 109,
    "title": "quidem ut quos non qui debitis exercitationem",
    "thumbnailUrl": "https://picsum.photos/seed/109/150"
  },
  {
    "id": 110,
    "title": "reiciendis et velit laborum recusandae",
    "thumbnailUrl": "https://picsum.photos/seed/110/150"
  },
  {
    "id": 111,
    "title": "quos rem nulla ea amet",
    "thumbnailUrl": "https://picsum.photos/seed/111/150"
  },
  {
    "id": 112,
    "title": "laudantium quibusdam inventore",
    "thumbnailUrl": "https://picsum.photos/seed/112/150"
  },
  {
    "id": 113,
    "title": "hic nulla consectetur",
    "thumbnailUrl": "https://picsum.photos/seed/113/150"
  },
  {
    "id": 114,
    "title": "consequatur quaerat sunt et",
    "thumbnailUrl": "https://picsum.photos/seed/114/150"
  },
  {
    "id": 115,
    "title": "unde minus molestias",
    "thumbnailUrl": "https://picsum.photos/seed/115/150"
  },
  {
    "id": 116,
    "title": "et iure eius enim explicabo",
    "thumbnailUrl": "https://picsum.photos/seed/116/150"
  },
  {
    "id": 117,
    "title": "dolore quo nemo omnis odio et iure explicabo",
    "thumbnailUrl": "https://picsum.photos/seed/117/150"
  },
  {
    "id": 118,
    "title": "et doloremque excepturi libero earum",
    "thumbnailUrl": "https://picsum.photos/seed/118/150"
  },
  {
    "id": 119,
    "title": "quisquam error consequatur",
    "thumbnailUrl": "https://picsum.photos/seed/119/150"
  },
  {
    "id": 120,
    "title": "eos quia minima modi cumque illo odit consequatur vero",
    "thumbnailUrl": "https://picsum.photos/seed/120/150"
  },
  {
    "id": 121,
    "title": "commodi sed enim sint in nobis",
    "thumbnailUrl": "https://picsum.photos/seed/121/150"
  },
  {
    "id": 122,
    "title": "consequatur quos odio harum alias",
    "thumbnailUrl": "https://picsum.photos/seed/122/150"
  },
  {
    "id": 123,
    "title": "fuga sint ipsa quis",
    "thumbnailUrl": "https://picsum.photos/seed/123/150"
  }
];

let products: Product[] | undefined;

export const fetchProducts = async (): Promise<Product[]> => {
  if (!products) {
    products = photos.map((photo) => ({
      ...photo,
      price: Math.round((10 + Math.random() * 90) * 100) / 100,
    }));
  }

  return products;
};
