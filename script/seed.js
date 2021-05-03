"use strict";

const {
  db,
  models: { User, Product, Order, Order_Product },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */

const users = [
  {
    username: "AJ123",
    isAdmin: true,
    email: "ab@harvard.edu",
    password: "123",
  },
  {
    username: "LE123",
    isAdmin: true,
    email: "cd@kickstarter.com",
    password: "123",
  },
  {
    username: "Sonni",
    isAdmin: true,
    email: "rose@google.com",
    password: "123",
  },
  {
    username: "GraceHopper",
    isAdmin: false,
    email: "GH@google.com",
    password: "456",
  },
  {
    username: "Katharyn",
    isAdmin: false,
    email: "klancaster4@youtu.be",
    password: "V4dyPct",
  },
  {
    username: "Carling",
    isAdmin: false,
    email: "cmcandie5@spotify.com",
    password: "5Xun8tUtrtko",
  },
  {
    username: "Viole",
    isAdmin: false,
    email: "vreiling6@multiply.com",
    password: "TKk3xYKpngs",
  },
  {
    username: "Shell",
    isAdmin: false,
    email: "sricardin7@bbc.co.uk",
    password: "W6605jW1NL",
  },
  {
    username: "Della",
    isAdmin: false,
    email: "dpestor8@pinterest.com",
    password: "MtZ0MkU49q",
  },
  {
    username: "Leo",
    isAdmin: false,
    email: "ltedridge9@techcrunch.com",
    password: "mddfIEh3",
  },
  {
    username: "Carolyne",
    isAdmin: false,
    email: "cepiscopia@sphinn.com",
    password: "dQMzv5ahHS",
  },
  {
    username: "Cloe",
    isAdmin: false,
    email: "cadenotb@ifeng.com",
    password: "TcYtlT4zJuH",
  },
  {
    username: "Dorella",
    isAdmin: false,
    email: "dhabensc@biblegateway.com",
    password: "4gUnlNT",
  },
  {
    username: "Gonzalo",
    isAdmin: false,
    email: "gvassied@wordpress.org",
    password: "ZTAIB89q",
  },
  {
    username: "Lewie",
    isAdmin: false,
    email: "lnapolitano19@indiatimes.com",
    password: "sAPlyoAY2Mh",
  },
  {
    username: "Lauri",
    isAdmin: false,
    email: "ldockreay1a@columbia.edu",
    password: "GBo1BcZdK",
  },
  {
    username: "Tabbie",
    isAdmin: false,
    email: "tupjohn1b@dailymotion.com",
    password: "XE3RY0iN1m",
  },
  {
    username: "Kirstyn",
    isAdmin: false,
    email: "keric1c@springer.com",
    password: "UzEjdtX",
  },
  {
    username: "Kameko",
    isAdmin: false,
    email: "khullin1d@opera.com",
    password: "OwTMBD",
  },
  {
    username: "Marty",
    isAdmin: false,
    email: "mmahaddie1e@house.gov",
    password: "YaMxsBxb7wA",
  },
  {
    username: "Shara",
    isAdmin: false,
    email: "sstait1f@wisc.edu",
    password: "icVvQdaWzTe",
  },
  {
    username: "Kippy",
    isAdmin: false,
    email: "krodger1g@microsoft.com",
    password: "4U1PCq",
  },
  {
    username: "Keelia",
    isAdmin: false,
    email: "kvolcker1h@newsvine.com",
    password: "0NJ0WP",
  },
  {
    username: "Leon",
    isAdmin: false,
    email: "lseeney1i@yahoo.com",
    password: "httUVIiSD",
  },
  {
    username: "Edithe",
    isAdmin: false,
    email: "epluck1j@icq.com",
    password: "UPBnEAMr",
  },
  {
    username: "Debra",
    isAdmin: false,
    email: "dhawkridge1k@omniture.com",
    password: "5JIUPAc972q",
  },
  {
    username: "Glenda",
    isAdmin: false,
    email: "gjeannequin1l@about.com",
    password: "F0E50qu9",
  },
  {
    username: "Andi",
    isAdmin: false,
    email: "abilborough1m@parallels.com",
    password: "RO9DreApl2",
  },
  {
    username: "Elly",
    isAdmin: false,
    email: "elonie1n@va.gov",
    password: "wwetLnjF60",
  },
  {
    username: "Jeffrey",
    isAdmin: false,
    email: "jstickley1o@t.co",
    password: "Jl27tRWmHDAU",
  },
  {
    username: "Kathrine",
    isAdmin: false,
    email: "koddy1p@nsw.gov.au",
    password: "or5F2Yf49v",
  },
  {
    username: "Alfonso",
    isAdmin: false,
    email: "abeardow1q@toplist.cz",
    password: "Qv0mls",
  },
  {
    username: "Janna",
    isAdmin: false,
    email: "jarchdeacon1r@bloomberg.com",
    password: "DfgkOmVBEG",
  },
  {
    username: "Lindy",
    isAdmin: false,
    email: "lmaciocia1s@about.com",
    password: "wuPHICsQV",
  },
  {
    username: "Dottie",
    isAdmin: false,
    email: "dgerner1t@qq.com",
    password: "8hJJ8yL1s",
  },
  {
    username: "Perla",
    isAdmin: false,
    email: "pworsnup1u@baidu.com",
    password: "KaNUfuaW",
  },
  {
    username: "Eloise",
    isAdmin: false,
    email: "evezey1v@e-recht24.de",
    password: "KF9wYvU9",
  },
  {
    username: "Linell",
    isAdmin: false,
    email: "lbauduin1w@usnews.com",
    password: "35lQuDJzN",
  },
  {
    username: "Steffie",
    isAdmin: false,
    email: "stedridge1x@1688.com",
    password: "rCDfqK1B",
  },
  {
    username: "Cyndy",
    isAdmin: false,
    email: "csineath1y@zimbio.com",
    password: "BILiBz4d",
  },
  {
    username: "Tanya",
    isAdmin: false,
    email: "tcharnley1z@google.ru",
    password: "2D2J8qF",
  },
  {
    username: "Myrwyn",
    isAdmin: false,
    email: "mbarby20@edublogs.org",
    password: "nIpJCx",
  },
  {
    username: "Brendis",
    isAdmin: false,
    email: "blongcake21@google.cn",
    password: "4csNxYzNs",
  },
  {
    username: "Hamilton",
    isAdmin: false,
    email: "hlunn22@pbs.org",
    password: "zEdaZTyd1z",
  },
  {
    username: "Leonora",
    isAdmin: false,
    email: "lhonatsch23@elpais.com",
    password: "3ScvnwS6",
  },
  {
    username: "Nikolaos",
    isAdmin: false,
    email: "nglencrash24@nasa.gov",
    password: "iKDA6VouAn",
  },
  {
    username: "Cybil",
    isAdmin: false,
    email: "ccrottagh25@webnode.com",
    password: "KD0OcARmbg",
  },
  {
    username: "Ainslie",
    isAdmin: false,
    email: "alomond26@yelp.com",
    password: "KUnKBIS",
  },
  {
    username: "Celestyn",
    isAdmin: false,
    email: "cgerhartz27@amazon.co.uk",
    password: "LFWXK8",
  },
  {
    username: "Bettina",
    isAdmin: false,
    email: "bberrie28@webs.com",
    password: "Z9E8U7sz",
  },
  {
    username: "Shirline",
    isAdmin: false,
    email: "smillbank29@smh.com.au",
    password: "pUfnvRi",
  },
  {
    username: "Tommy",
    isAdmin: false,
    email: "tlordon2a@csmonitor.com",
    password: "cz6uAO2q",
  },
  {
    username: "George",
    isAdmin: false,
    email: "gboame2b@google.es",
    password: "hmg8ZVDj1",
  },
  {
    username: "Dorolisa",
    isAdmin: false,
    email: "dhuegett2c@diigo.com",
    password: "ahYBdnMrqJmx",
  },
  {
    username: "Bamby",
    isAdmin: false,
    email: "bmcalinion2d@yale.edu",
    password: "KORR8Rj7wQ",
  },
  {
    username: "Pepillo",
    isAdmin: false,
    email: "ppriddy2e@bravesites.com",
    password: "Kq5mYN7BZ8e",
  },
  {
    username: "Kelly",
    isAdmin: false,
    email: "kschimaschke2f@xinhuanet.com",
    password: "Nnm5Asd1",
  },
  {
    username: "Phaidra",
    isAdmin: false,
    email: "pdel2g@google.nl",
    password: "F770XIONZI",
  },
  {
    username: "Farlie",
    isAdmin: false,
    email: "fgarmanson2h@amazonaws.com",
    password: "7VpCJRXG",
  },
  {
    username: "Christan",
    isAdmin: false,
    email: "cparlor2i@t-online.de",
    password: "JLpfxds0oMs",
  },
];

const products = [
  {
    name: "Congo",
    description:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sitet, cursus id, turpis.",
    image:
      "https://2018.ahmedabad.wordcamp.org/files/2018/09/WCAhmedabad-Tickets.jpg",
    price: 171.6,
    date: "2021-01-21",
    time: "6:58",
  },
  {
    name: "Almost Married",
    description:
      "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    image:
      "https://2018.ahmedabad.wordcamp.org/files/2018/09/WCAhmedabad-Tickets.jpg",
    price: 352.47,
    date: "2022-10-08",
    time: "4:59",
  },
  {
    name: "Afstiros katallilo",
    description:
      "Phasellus sitet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
    image:
      "https://2018.ahmedabad.wordcamp.org/files/2018/09/WCAhmedabad-Tickets.jpg",
    price: 299.3,
    date: "2021-04-25",
    time: "3:11",
  },
  {
    name: "Guess Who's Coming to Dinner",
    description:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    image:
      "https://2018.ahmedabad.wordcamp.org/files/2018/09/WCAhmedabad-Tickets.jpg",
    price: 382.62,
    date: "2020-09-20",
    time: "12:45",
  },
  {
    name: "For Ever Mozart",
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
    image:
      "https://2018.ahmedabad.wordcamp.org/files/2018/09/WCAhmedabad-Tickets.jpg",
    price: 382.62,
    date: "2022-09-11",
    time: "11:37",
  },
  {
    name: "Aral, Fishing in an Invisible Sea",
    description:
      "Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sitet nulla.",
    image:
      "https://2018.ahmedabad.wordcamp.org/files/2018/09/WCAhmedabad-Tickets.jpg",
    price: 217.04,
    date: "2021-05-05",
    time: "5:04",
  },
  {
    name: "Broken Arrow",
    description:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sitet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    image:
      "https://2018.ahmedabad.wordcamp.org/files/2018/09/WCAhmedabad-Tickets.jpg",
    price: 364.45,
    date: "2020-09-08",
    time: "12:15",
  },
  {
    name: "Papa",
    description:
      "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    image:
      "https://2018.ahmedabad.wordcamp.org/files/2018/09/WCAhmedabad-Tickets.jpg",
    price: 430.19,
    date: "2022-05-23",
    time: "3:27",
  },
  {
    name: "44 Minutes: The North Hollywood Shoot-Out",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    image:
      "https://2018.ahmedabad.wordcamp.org/files/2018/09/WCAhmedabad-Tickets.jpg",
    price: 19.26,
    date: "2022-05-09",
    time: "8:01",
  },
  {
    name: "Dying of the Light",
    description:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    image:
      "https://2018.ahmedabad.wordcamp.org/files/2018/09/WCAhmedabad-Tickets.jpg",
    price: 420.75,
    date: "2021-11-24",
    time: "8:17",
  },
  {
    name: "Misfortunates, The (De helaasheid der dingen)",
    description:
      "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
    image:
      "https://2018.ahmedabad.wordcamp.org/files/2018/09/WCAhmedabad-Tickets.jpg",
    price: 141.27,
    date: "2021-09-12",
    time: "3:53",
  },
  {
    name: "Franz Kafka's a Country Doctor",
    description:
      "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
    image:
      "https://2018.ahmedabad.wordcamp.org/files/2018/09/WCAhmedabad-Tickets.jpg",
    price: 40.28,
    date: "2021-11-14",
    time: "5:40",
  },
  {
    name: "Skin Deep",
    description:
      "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
    image:
      "https://2018.ahmedabad.wordcamp.org/files/2018/09/WCAhmedabad-Tickets.jpg",
    price: 76.22,
    date: "2020-08-25",
    time: "7:18",
  },
  {
    name: "Hacks (Sink or Swim) (Big Twist, The)",
    description:
      "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sitet, cursus id, turpis.",
    image:
      "https://2018.ahmedabad.wordcamp.org/files/2018/09/WCAhmedabad-Tickets.jpg",
    price: 325.69,
    date: "2021-12-30",
    time: "6:20",
  },
  {
    name: "Young Törless, The (Junge Törless, Der)",
    description:
      "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sitet sapien dignissim vestibulum.",
    image:
      "https://2018.ahmedabad.wordcamp.org/files/2018/09/WCAhmedabad-Tickets.jpg",
    price: 180.82,
    date: "2021-12-23",
    time: "6:38",
  },
  {
    name: "End of the Line",
    description:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    image:
      "https://2018.ahmedabad.wordcamp.org/files/2018/09/WCAhmedabad-Tickets.jpg",
    price: 51.55,
    date: "2022-01-08",
    time: "7:49",
  },
  {
    name: "Wrong Man, The",
    description:
      "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sitet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    image:
      "https://2018.ahmedabad.wordcamp.org/files/2018/09/WCAhmedabad-Tickets.jpg",
    price: 80.46,
    date: "2020-11-18",
    time: "11:54",
  },
  {
    name: "The Spectacular Now",
    description:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sitet sapien dignissim vestibulum.",
    image:
      "https://2018.ahmedabad.wordcamp.org/files/2018/09/WCAhmedabad-Tickets.jpg",
    price: 337.42,
    date: "2021-06-04",
    time: "5:29",
  },
  {
    name: "Time in the Minors",
    description:
      "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
    image:
      "https://2018.ahmedabad.wordcamp.org/files/2018/09/WCAhmedabad-Tickets.jpg",
    price: 27.63,
    date: "2022-04-13",
    time: "5:00",
  },
  {
    name: "Charley Varrick",
    description:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    image:
      "https://2018.ahmedabad.wordcamp.org/files/2018/09/WCAhmedabad-Tickets.jpg",
    price: 95.59,
    date: "2020-12-10",
    time: "6:45",
  },
  {
    name: "Sexy Nights of the Living Dead",
    description:
      "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    image:
      "https://2018.ahmedabad.wordcamp.org/files/2018/09/WCAhmedabad-Tickets.jpg",
    price: 128.79,
    date: "2022-09-05",
    time: "7:06",
  },
  {
    name: "In a Town This Size",
    description: "Duis bibendum. Morbi non quam nec dui luctus rutrum.",
    image:
      "https://2018.ahmedabad.wordcamp.org/files/2018/09/WCAhmedabad-Tickets.jpg",
    price: 369.98,
    date: "2020-11-23",
    time: "8:20",
  },
  {
    name: "Sandra of a Thousand Delights (Vaghe stelle dell'Orsa...)",
    description:
      "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
    image:
      "https://2018.ahmedabad.wordcamp.org/files/2018/09/WCAhmedabad-Tickets.jpg",
    price: 499.47,
    date: "2020-08-28",
    time: "9:15",
  },
  {
    name: "Chloe",
    description:
      "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    image:
      "https://2018.ahmedabad.wordcamp.org/files/2018/09/WCAhmedabad-Tickets.jpg",
    price: 257.3,
    date: "2021-09-15",
    time: "11:13",
  },
  {
    name: "Somersault",
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
    image:
      "https://2018.ahmedabad.wordcamp.org/files/2018/09/WCAhmedabad-Tickets.jpg",
    price: 300.82,
    date: "2022-07-01",
    time: "8:31",
  },
  {
    name: "Pina",
    description:
      "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
    image:
      "https://2018.ahmedabad.wordcamp.org/files/2018/09/WCAhmedabad-Tickets.jpg",
    price: 252.82,
    date: "2021-09-26",
    time: "3:38",
  },
  {
    name: "Ace Ventura: When Nature Calls",
    description:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    image:
      "https://2018.ahmedabad.wordcamp.org/files/2018/09/WCAhmedabad-Tickets.jpg",
    price: 144.87,
    date: "2020-09-20",
    time: "3:17",
  },
  {
    name: "Man Who Never Was, The",
    description:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    image:
      "https://2018.ahmedabad.wordcamp.org/files/2018/09/WCAhmedabad-Tickets.jpg",
    price: 216.52,
    date: "2021-04-08",
    time: "1:36",
  },
  {
    name: "Never a Dull Moment",
    description:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    image:
      "https://2018.ahmedabad.wordcamp.org/files/2018/09/WCAhmedabad-Tickets.jpg",
    price: 294.29,
    date: "2022-01-26",
    time: "3:26",
  },
  {
    name: "Sixth of the World, A (Shestaya chast mira)",
    description:
      "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    image:
      "https://2018.ahmedabad.wordcamp.org/files/2018/09/WCAhmedabad-Tickets.jpg",
    price: 203.76,
    date: "2022-11-22",
    time: "8:26",
  },
  {
    name: "Ninja",
    description: "Duis mattis egestas metus. Aenean fermentum.",
    image:
      "https://2018.ahmedabad.wordcamp.org/files/2018/09/WCAhmedabad-Tickets.jpg",
    price: 454.99,
    date: "2020-11-13",
    time: "10:00",
  },
  {
    name: "Everyday People",
    description:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    image:
      "https://2018.ahmedabad.wordcamp.org/files/2018/09/WCAhmedabad-Tickets.jpg",
    price: 30.06,
    date: "2022-11-07",
    time: "4:32",
  },
  {
    name: "Spring is Here",
    description:
      "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    image:
      "https://2018.ahmedabad.wordcamp.org/files/2018/09/WCAhmedabad-Tickets.jpg",
    price: 377.55,
    date: "2021-10-23",
    time: "10:45",
  },
  {
    name: "Executive Decision",
    description:
      "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
    image:
      "https://2018.ahmedabad.wordcamp.org/files/2018/09/WCAhmedabad-Tickets.jpg",
    price: 400.45,
    date: "2021-03-27",
    time: "10:18",
  },
  {
    name: "Att stjäla en tjuv",
    description:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    image:
      "https://2018.ahmedabad.wordcamp.org/files/2018/09/WCAhmedabad-Tickets.jpg",
    price: 138.51,
    date: "2021-04-28",
    time: "9:02",
  },
  {
    name: "Paths of Hate",
    description: "Nulla nisl. Nunc nisl.",
    image:
      "https://2018.ahmedabad.wordcamp.org/files/2018/09/WCAhmedabad-Tickets.jpg",
    price: 479.74,
    date: "2022-02-20",
    time: "10:39",
  },
  {
    name: "Hell Town (Born to the West)",
    description: "Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    image:
      "https://2018.ahmedabad.wordcamp.org/files/2018/09/WCAhmedabad-Tickets.jpg",
    price: 325.12,
    date: "2021-06-17",
    time: "4:03",
  },
  {
    name: "Fifth Cord, The (Giornata nera per l'ariete)",
    description:
      "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    image:
      "https://2018.ahmedabad.wordcamp.org/files/2018/09/WCAhmedabad-Tickets.jpg",
    price: 475.36,
    date: "2020-09-02",
    time: "8:46",
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });

    // seed your database here!
    const newUsers = await Promise.all(
      users.map((user) => {
        return User.create(user);
      })
    );
    const newProducts = await Promise.all(
      products.map((product) => {
        return Product.create(product);
      })
    );

    const newOrder = await Order.create({
      userId: 1,
      isFulfilled: false,
      buyerEmail: "iris@gmail.com",
      totalAmount: 100,
    });

    //const newProduct = await Product.create(products[0])
    const newOrder_Product = await Order_Product.create({
      quantity: 1,
      productId: 1,
      orderId: 1,
    });
  } catch (err) {
    console.log(err);
  }
};

async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
