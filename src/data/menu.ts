export type MenuItem = {
  name: string;
  jp?: string;
  note?: string;
  veg?: boolean;
};

export type MenuCategory = {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "entrees",
    title: "Entrées",
    items: [
      { name: "Salade d'algues", jp: "海藻サラダ", veg: true },
      { name: "Salade de choux", jp: "キャベツサラダ", veg: true },
      { name: "Edamame", jp: "枝豆", veg: true },
      { name: "Soupe miso", jp: "味噌汁", veg: true },
      { name: "Riz sauté japonais", jp: "日本チャーハン", veg: true },
      { name: "Nouilles sautées", jp: "焼きそば", veg: true },
      { name: "Riz nature", jp: "ご飯", veg: true },
      { name: "Riz vinaigré", jp: "酢飯", veg: true },
      { name: "Udon, soupe miso", jp: "うどん", veg: true },
      { name: "Nems poulet", note: "2 pièces", jp: "チキン春巻き" },
      { name: "Accras de morue", note: "2 pièces", jp: "タラのフリッター" },
      { name: "Gyoza poulet", note: "3 pièces", jp: "餃子" },
      { name: "Beignet de calamar", note: "4 pièces", jp: "イカフライ" },
      { name: "Crevette panée", note: "3 pièces", jp: "エビフライ" },
      { name: "Raviolis aux crevettes", note: "4 pièces", jp: "蒸し蝦餃子" },
      { name: "Bouchées aux crevettes", note: "4 pièces", jp: "シュウマイ" },
      { name: "Karaage de poulet", note: "2 pièces" },
      {
        name: "Takoyaki",
        note: "2 boulettes au poulpe · uniquement le week-end",
        jp: "タコ焼き",
      },
    ],
  },
  {
    id: "yakitori",
    title: "Yakitori",
    subtitle: "2 brochettes",
    items: [
      { name: "Poulet", jp: "焼き鳥" },
      { name: "Boulettes de poulet", jp: "つくね" },
      { name: "Aile de poulet", jp: "手羽先" },
      { name: "Boeuf", jp: "牛肉" },
      { name: "Boeuf et fromage", jp: "牛肉チーズ" },
      { name: "Courgette", jp: "ズッキーニ", veg: true },
    ],
  },
  {
    id: "sushi",
    title: "Sushi",
    subtitle: "2 pièces",
    items: [
      { name: "Saumon", jp: "サーモン寿司" },
      { name: "Thon", jp: "マグロ寿司" },
      { name: "Daurade" },
      { name: "Saumon cheese" },
      { name: "Saumon mayo" },
      { name: "Thon mayo" },
      { name: "Poulpe" },
      { name: "Crevette" },
      { name: "Omelette", note: "uniquement le week-end", veg: true },
      { name: "Anguille", note: "uniquement jour férié" },
    ],
  },
  {
    id: "gunkan",
    title: "Gunkan",
    subtitle: "2 pièces",
    items: [
      { name: "Saumon", jp: "サーモン寿司船" },
      { name: "Salade d'algues", jp: "海藻サラダ軍艦", veg: true },
      { name: "Thon cuit", jp: "マグロ寿司船" },
    ],
  },
  {
    id: "temaki",
    title: "Temaki",
    subtitle: "1 pièce",
    items: [
      { name: "Saumon et avocat", jp: "サーモンアボカド手巻き" },
      { name: "Thon et avocat", jp: "マグロアボカド手巻き" },
      { name: "Surimi avocat", jp: "カニカマアボカド手巻き" },
      { name: "Crevette panée et avocat", jp: "蝦フライアボカド手巻き" },
      { name: "Concombre et radis", jp: "きゅうり大根手巻き", veg: true },
    ],
  },
  {
    id: "soir",
    title: "Servi uniquement le soir",
    items: [
      { name: "Sashimi saumon", note: "3 pièces", jp: "サーモン刺身" },
      { name: "Sashimi thon", note: "3 pièces", jp: "まぐろ刺身" },
      { name: "Tataki saumon", note: "3 pièces", jp: "半熟サーモン焼き" },
    ],
  },
  {
    id: "hosomaki",
    title: "Hoso-maki",
    subtitle: "3 pièces",
    items: [
      { name: "Saumon", jp: "サーモン巻き" },
      { name: "Thon", jp: "マグロ巻き" },
      { name: "Thon cuit", jp: "熟すマグロ巻き" },
      { name: "Surimi", jp: "カニスティック巻き" },
      { name: "Radis", jp: "大根巻き", veg: true },
      { name: "Avocat", jp: "アボカド巻き", veg: true },
      { name: "Saumon avocat", jp: "サーモンアボカド巻き" },
      { name: "Thon avocat", jp: "マグロアボカド巻き" },
      { name: "Thon cuit avocat", jp: "熟すマグロアボカド巻き" },
      { name: "Surimi avocat", jp: "カニスティックアボカド巻き" },
      { name: "Cheese avocat", jp: "アボカドチーズ巻き", veg: true },
      { name: "Crevette panée & concombre", jp: "海老フライときゅうり巻き" },
      { name: "Saumon cheese", jp: "サーモンチーズ巻き" },
    ],
  },
  {
    id: "california",
    title: "California",
    subtitle: "3 pièces",
    items: [
      { name: "Saumon avocat aux herbes", jp: "サーモンアボカドハーブ巻き" },
      { name: "Thon cuit avocat aux herbes", jp: "マグロアボカドハーブ巻き" },
      {
        name: "Crevette panée & concombre aux herbes",
        jp: "パセリ海老フライきゅうり巻き",
      },
      { name: "Saumon avocat croustillant", jp: "サーモンアボカドオニオンフライ巻き" },
      { name: "Saumon cheese croustillant", jp: "サーモンチーズオニオンフライ巻き" },
      { name: "Cheese avocat croustillant", jp: "チーズアボカドクリスピー巻き", veg: true },
      { name: "Crevette panée & concombre croustillant" },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      { name: "Mochi glacé", note: "1 pièce · vanille, fraise, thé vert ou yuzu" },
      { name: "Dorayaki pancakes fourrés", note: "haricots rouges ou matcha" },
      { name: "Perles de coco", note: "2 pièces" },
      { name: "Lychée au sirop" },
      { name: "Maki nutella banane", note: "6 pièces" },
      { name: "Boule glacée", note: "2 boules · vanille, fraise, chocolat, café ou noix de coco" },
    ],
  },
  {
    id: "boissons",
    title: "Boissons & bières",
    items: [
      {
        name: "Limonade Ramune",
        note: "sangaria, fraise, yuzu, lychée, mangue ou framboise · 20cl · 5,00 €",
      },
      { name: "Thé vert macha en bouteille", note: "500ml · 6,50 €" },
      { name: "Thé genmaicha macha en bouteille", note: "500ml · 6,50 €" },
      { name: "Thé mugicha en bouteille", note: "500ml · 6,50 €" },
      { name: "Thé oolong en bouteille", note: "500ml · 6,50 €" },
      { name: "Granini", note: "fraise, orange, lychée, mangue ou abricot · 22cl · 3,50 €" },
      { name: "Tsing Tao", note: "33cl · 5,50 €" },
      { name: "Kirin Ichiban", note: "33cl · 5,50 €" },
      { name: "Asahi", note: "33cl · 5,50 €" },
    ],
  },
];
