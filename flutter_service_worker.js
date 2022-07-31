'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "3906fc5d38199c243ab81a45fee32c66",
"index.html": "55dd1f1fc917a11af7d27dca85a252b7",
"/": "55dd1f1fc917a11af7d27dca85a252b7",
"main.dart.js": "dbae1281f1639711a026d3c5dc65d44c",
"icons/logo-aerium-1.png": "c9c1749b275f61ebc563d6596ccf2569",
"icons/logo-aerium-2.png": "58b131c1e81194452cb702693c040a92",
"manifest.json": "2e28cebc1e27a999e5b0da349afad267",
".git/config": "822b50e31064442fe0064442e9463dd6",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/59/d02356c001abaf3d68d3854813e8ef3d413d1a": "295c11faa9044a848245c0ea77158f8b",
".git/objects/59/fc95ab9832a09ad68b487c17a1703e5422cacf": "1e488acd358ce2cb89784f67d484be5a",
".git/objects/59/c2f8447909e4df2649c959464483f42300cc08": "6beebbb98d4b3453820f97204b3dddae",
".git/objects/92/788eed4a3b65922be0f8d6abe177ffaf976842": "ff2438048b5b17fb37d5224acf9f2e94",
".git/objects/92/4be1bd2ebb96311b427463aa98cae27aa77188": "190b5f737ec4d491d1b0d7dc5e7ea00d",
".git/objects/0c/3a7bf574ca43f58e1b59334c9ada8bdd7ed3d1": "5f0680bd26f7988c33253c45ba103074",
".git/objects/6a/39b5e1b354f0f46f41da9f66c71ab6babf3fdc": "a411116f0d12d784f0f9d9bc26902310",
".git/objects/3c/6ccc2cc8ef5329ffa56c163ca6a8c8d7d68673": "4a26548d8f3bdc31f3b79343fbe4075b",
".git/objects/56/c749a269003548e8ba0649405b1a1507623f6b": "865ac3e6c73d14a534cc8e095902ec68",
".git/objects/67/320b0402016c756f8948b8de28d63a87f9c923": "50ef278059b326201291c629b203368f",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
".git/objects/0e/f81f0f29176823c7cf12cb16f86c3c5431611f": "770796668ab93d9cf4d2cf9ff472ea31",
".git/objects/0e/396c7da5f88c5fbe6c5db1c9dc73b2940b79f4": "8326f1271105d63850f289acec779373",
".git/objects/34/bf9e383dfff6ce8e12cc411f3437cf984c2da5": "7a7631ffc15482df6121f950df436095",
".git/objects/33/861b581ebd82a5378da7ef21413358f6674ec0": "2e671a3c1a8b40bf20eea85f6ff969d3",
".git/objects/33/6eb352836acc173ff314f90ba8cb3eb691faa8": "a99039138e0cef60869c905de7735c65",
".git/objects/a4/e8c22c3ef17219f5aa5be84954ab75ccc2e0bd": "ebea49dba7d32965357924ebec9b5b60",
".git/objects/b2/a1604c49929d442424055ccd5c75e507ca3780": "eacdcae8b442f4206bca5260e4aaef97",
".git/objects/b2/d5a5a8d36756a7f5911c8db9dcfaa6e8de0e41": "ee93ebe4c68186090e23d9d7da9f4e5f",
".git/objects/b2/af2e7c720ba7cb25087d5aa5f9dee7b20ba72d": "264200250ee2c2c5f81765d5e61f6970",
".git/objects/d9/358116aecd0bdb053326d73b7d6a496354d281": "b559e13011072fb95a20014bf886143f",
".git/objects/d7/0df43c4217f6b1861ce329afe30daf1212d045": "a9a9c93a38327a63df80e30ae4de7af0",
".git/objects/d0/f733de32ec113a26287fbcf25a450f77e530ab": "84cfc914ec588a225bf70d66dd475bdb",
".git/objects/df/78df02021bb98e27e985dc13e387bcd59295ac": "2b5bdc9e9adec8937483c898e2c0ba18",
".git/objects/bd/0c970b6cefcf5e25443a84695abe5fb3aee5ac": "8135f5d0bf66c0d2bd156bb68e6e0183",
".git/objects/d1/9b260f6ea18b537bd32560d56643cd7a45c0bc": "f7ff48fbe685bd8fd5dcb0508e40566c",
".git/objects/ae/24eab36512897aad631112d56e6b16a5bc61e6": "6dcb5a99d40a6368201b5187b1246f9c",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/451167a5fa28da949830049ceba43c3a780972": "c7bd3d4125b5509a4a14426201a3ca39",
".git/objects/c0/a39a067657a488fc93e86f9a944c635d22ecd3": "3d0e6c962d928617d587c99f4134541b",
".git/objects/ee/a4983eb16151cce709ad5ccfd3db0d9b942755": "59d1b8f83bb865c2f0eb041c0129cb23",
".git/objects/ee/c5de2a1c97c6bbb222dc9f3d8d8877efa6d084": "bf473316a24c8af97f065f87c8c122ee",
".git/objects/fc/c8f1c0965dde0066c8bf2766cfa54f9ed31c87": "7f047cfb52fd063a03a08e77f999e466",
".git/objects/fe/b006d66234e1b55600b00916023982706abf2d": "c05ea7c31475ad5922bc102ea1c204db",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/objects/ec/c299f2e309b55969e04e60e655ad26dc94a80f": "dd09381ffb9e7f6a5a2b88ceb4bf3fa3",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/608d6e3ef3bf3dec628591aaad3c0eea27768a": "69dba8403687a2ee13106652f4acd162",
".git/objects/20/67116ebace2e7cc7f0dc28a1e7035d938b3054": "d47b406b850ce1df0ae8a6dd89727768",
".git/objects/18/40e01c58d82cb78c7d9be1a22d85639591bc5d": "1997eca01bcae9b26b691be75f65df3d",
".git/objects/4b/86c6a9ec08aef98bed2c59979b315a3bb8ea0e": "c8b50e67833fbf154b2fe292a35d3373",
".git/objects/11/69a277ac08d419de5dffdc42793d73253dd6c1": "7f8c98a1bc8d46d64e62af2db9eba74e",
".git/objects/7d/d63f09dfd543d5ac9cd1f83ab02d0d17c6bce6": "147b43be14c05515e4f4e83df7862378",
".git/objects/7d/db048ddb9408d6720e936d8c39e5ecfa91c441": "cff6ca4b7db6caf1dbba938e72b084eb",
".git/objects/7c/180345ce119d172dbe1abd955b2602bfafb304": "e69dd978649584507defafa3da904c25",
".git/objects/7c/a1c9a9391d1c913338561b44f6e3f2b67ba54b": "4f2cf5445509e37e91227064b1ef4d95",
".git/objects/45/5d8f1bee7aab3bbaa71e4e6db52f59ad840351": "7aef85040665de8e54c81b06e12fd846",
".git/objects/87/55adb54b5af60c4e80eebc447a9ded77afb706": "67f266b95a291b74ed360e474a3463de",
".git/objects/74/f16af73c95cdf96c11210cf235ed16dabf5866": "20e5c6b6b5264aeb166e9a249e711789",
".git/objects/74/d3e804f4fe433c69858de3b026c394bc6464af": "6580943c1400dfdaca777da059ef0aac",
".git/objects/1a/3855aa035a49e7e7d223a86e49bc94c88d2a06": "aec72d790e9879289f826f6218734023",
".git/objects/17/8c3f1d90d96a494c0854acf9bfe734626c74d1": "3573d0abf65719021bb8af8c717e3c62",
".git/objects/8a/058ef508751a91ea2ebfe0e4c99a3ba77c0996": "025cea70ec43c79cef94802fcd1eda6a",
".git/objects/10/583f84db2b6d0881e180f3b6652c27874e6320": "d519c8667ddc72672a28b5529e45befb",
".git/objects/10/b115743178227747cbc8d2f48b79a5f0f4e3d2": "768b318b9b0f01942db548abffa3687d",
".git/objects/10/29778e9a7e3272fea5b7221d862c33cde6b0e2": "68f595a3c024685772199b72be469207",
".git/objects/81/89788e47f36329a5b94dd046b1fd7836feeef6": "0082bd62cec1d5ff38f82e5b7a6e9c88",
".git/objects/81/374692f900a94b3ba83ad0bb3837f72b34c5f4": "efc7feffe18849046864ecb98f1a7499",
".git/objects/44/e610b02bd6a0e414f203820e669a2fde0258d9": "325948974d5cf6281d9bccd9feebd08d",
".git/objects/2f/a0b9a31488909dc11f384d0d61e5d26c743e42": "4cc4d149eb4e260cac5be6249d6138ee",
".git/objects/2f/85fc9f0f81277bb403f36b43efd7c19d948388": "cbf0fdd4be1b813bf5a537edb0f3244b",
".git/objects/9f/dd7bd3a602f90de9aee5ddfc88cab66059b989": "e4e9bdc0fb58b9cf3ea18d6b5e1220a3",
".git/objects/6b/1485ccb0e3818acf6a652ec18a664f9ee43e9a": "6a4992a05b33a0826099fc1cb57f20f7",
".git/objects/07/416c258d6fee8864bd133dcc411d6f7a5854fd": "f4e397aa00b2d8c6bf9eaf6035b7c469",
".git/objects/38/130dae6bc6e4502432ffe6888c08d18574c385": "06c81e1e941a3fe74495944af07a9527",
".git/objects/00/8b1cafc565a90eed8a41dc3bbdf98516d29ccf": "d987628a057a08640bbb1f82b849d612",
".git/objects/00/585c4a557947dc62a687bcece887755de1b0ea": "a83d0de0f2a4c41594e17a81f0203711",
".git/objects/09/f088b001f9ada4d32162cb3df6272b2a3cebcc": "fbae0431082e942956d74e25205f953f",
".git/objects/09/3bfa2f2edfc3e82be9fbebbd05677056e5e4d6": "d76eb11250b7c20b6876e752ef077f53",
".git/objects/09/2218c35c707f8acb517feaa348fa5d2dc419f0": "9228eaf4e6a7c9e975d3442e1db12db0",
".git/objects/5d/e0abfe7c9420d68998664d68e3c02faf9e98e6": "bdafc81131f41b889def5d6daf685601",
".git/objects/96/125180285f7dd2008f90f03fce3f4c4de50ba8": "128ab3fec40348f6ace042809950c089",
".git/objects/3a/bc03c4882f068c75214d6fd37e70a01e33ea5c": "edee35c534f4a476161320252df337ef",
".git/objects/98/71eb68f33dfbc044957476acd09f83d20b411d": "ce3fd3fed5326a8a220393729a4bff87",
".git/objects/53/f96318bab3160806fcdf2929e044a8b43adf3d": "8229acac5c26f1e255baed8e6f55bdf5",
".git/objects/5b/1d7595446ff89181833d58ee8dba43e892d5af": "767aa5010419db6c888eef4ba9416516",
".git/objects/5b/236a6354a92d08b97b77e3a351b58c9b6f196c": "849dd01a57b53bda5762e02e38263c38",
".git/objects/37/7125b51b756b9537f2c5ee3aefd09fd6f8cdec": "8282dc6a7586b77e2075be882fc1d27e",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/01/f02872553f9e822875fac4a1d5bf2bfea78f35": "f8493666ae1fc4d9137ff6e6be8fc1dc",
".git/objects/39/ed42e0b5923574420bc1f1605b5c1a4bce62c3": "dce5a850e4a208edd89266e88e52766a",
".git/objects/52/90e8e4f0aaefb4c92fb38e40cab957f0fd4588": "3f5f0d611d92e21e445e63e22e6df83c",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/52/46ea05a5d23e0f7654637dc6f9a9f4a41088cc": "3b50cd4cb9f939c092ffaa96d08b7901",
".git/objects/55/bc17d809b537738874e350255894b838cc9135": "3cfba8edee49963aa53e60b3ff3767ca",
".git/objects/97/ed8c277cce8a4961aa2643f79f36efa71fc7f7": "bba34a693ea4c4f7af3b0a246cffec80",
".git/objects/64/6f500562f3ef30494d2795faf06113070f5a1e": "de107af9e063cd69366c14cacb1b3b9a",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/b1/6b0a229d54fc9b87c7d0a30e28c84bf64f2e75": "d545fe780a173ae31ef557581769451a",
".git/objects/b6/70865ee5e2deebfc0611c753c52bd76e0c6461": "ee502339b211c164712544dde248afc9",
".git/objects/a9/d95cf6ae020c8b1d02627feca110c0758d0fe4": "d6dddc9ddeedf00f48b8510c1f7f4889",
".git/objects/a9/8ebf1b010c2ec08150f89052db0b29fc1726ac": "b7b8f9390f2480140fe8e7eb02973f41",
".git/objects/d5/872d21810434d2dfadfdafeb86203047b0fb0e": "04f36eb43d761e29171cb0d3072757e8",
".git/objects/d5/d406087f3386241f86f11730f7c71716cc3bbc": "c98e6c48f952d1de66c8d243ccb2bfd7",
".git/objects/a8/29539912a1ae8291ff51a1d8c6ab5c5b5bb10a": "ed1c4b63204a1adf3453b14c5ed8b06e",
".git/objects/de/620179f0830c05d80924b9629ac86fb7622598": "5173caa1528eb2ef3125658351642be9",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/da558b122154d81458fa3d0b909e8b1e892717": "b3f30a38c927e4cc2e72d356f9f9c768",
".git/objects/ef/ab2115625abafd4d58ac2ba84a1f6230e748da": "ad3234e94a5d627b97e7d8c09aa2e0fb",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c4/f55931ac75c6b602171f1f349c8bbb25911e4f": "cdb178cb660684944608023996fa87ea",
".git/objects/c4/fb109c80d0e9e608d3fda9a1dbb913dcd118d8": "a329d9b485b1bbc79d84b9b4086188d6",
".git/objects/cd/8267b1a925c24a85ec31467ad022c689ba800a": "e3c99b7272a690553aea455b3dcf4720",
".git/objects/cd/0c3605f55465919721077d13d12126177bbcba": "7034ad78d17d383f73e492de093114eb",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/e8/ca24a641289684be3b7f1b15b9e4a0bc9c0b38": "d45c25dcc7fd65c153224a84bdc4a6c6",
".git/objects/fa/84cb53e2eba86b467c599e89d697c1487dc930": "8155906b26b2e03142d3172b299b1023",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e7/746e4b7eda5e72f4f9b654c3e37213b4da88e2": "3d80c363be00d96ff593a2c71ea784a5",
".git/objects/e7/c3d4d018dcda1d9db8f16bcb6a52dafc3b1a58": "9bcb2028bfc748554504406f9d224bbd",
".git/objects/cb/04778f9545f06c754e8e77a159b6956fffb338": "343049594a6574b1293aca76c48ca1cb",
".git/objects/cb/e2ee35a2b49fc777e1d9c60057d15899dd57bc": "e7815089e128f01542779187cf96650c",
".git/objects/f8/88837824f50d03a55fd6947242cd0d562ef1e5": "fa4aa795fd15e6121e7939fbbce2fb7e",
".git/objects/46/5a3c2bd7cf5f662bc98d1430e5ea7b58b8d3ca": "41417287caff8f23e0e2abd9971c2fa1",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/41/1d80cb302bb4bc63218000c68a020f250cb9b5": "1d3a47b6ef03d744c093d489fd3776a3",
".git/objects/41/18743ea8540705b23f2f3039141c2a40505a07": "846a02f6af59bd059f6d599d3dfb27aa",
".git/objects/70/104ceb53b83f61edce107a5cde576dfb591fc2": "35251a3fc0585db53a8479682dc7c946",
".git/objects/84/0cf7a11d4df33f701ee680376b57897249b037": "3189d42f201e5d59ec0e1c3a3050aba1",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/23/7cee87e60e95d5605b348b54becbf5d527105c": "7f05b8690020912e25aa317911e9d35f",
".git/objects/23/f01214bb6ff9f32e6d312b3f85a68c370966b9": "f74c9b1650d82a061e380f3ec931031a",
".git/objects/4f/2e5b959922535b96a51c8d19a209b6c30a0ad2": "bbe82e97bd50c1d13feca4ae4836baa6",
".git/objects/8d/2cca964542d7e8a3236bdba3464aea4e5a68b9": "9a48b94b92fa1cec79fd2d3ae9577bb3",
".git/objects/12/d6b82405257aa80e9fc0dcbf2d904abd49df71": "ed5a52b70614c5501b551838f1083a78",
".git/objects/8c/f9bc3408fc42a32972b7748749eec240e10145": "b7948af1e4ad088b5bc8c584c99d62c5",
".git/objects/1d/f5914c8f7b6d8291f0450a478712958542c9f3": "81b9c4b22ff7e60b9dd50ffe400daf10",
".git/objects/1d/189a4e93c48c284f9f11d3359ec9771c96c3e7": "bb4f197ac1b588f58491b73ea5c5dee8",
".git/objects/76/7330dc0a7ae745b3ce783bab8143fa7033be03": "0619f7d95c485d0198f34db6c6651cfb",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/1c/f52677642eb14b004541dfc47a5ed77c7fe399": "e6d2b974f81462dc4952dcc579f78ef9",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/40/871c318ffcb9d92c6ddb94c8464e9c3b10039c": "a45afdbc97fd332f4729b5d6f5554549",
".git/objects/40/91264ee1c08d70ea986bea2f9db19195e64337": "a60fc3a6a3d8b8ebc64178dd2603ecf7",
".git/objects/2b/66646167bdc8368d816f07cf7929edd50492ee": "ac7e4bebeb8738556034a019bfad8240",
".git/objects/47/b8cc37775cfbaf144eff995f60035b755fcaee": "e8f2c0b4d8d73729e2dd96a2a204f757",
".git/objects/8b/30e53606c395cc055a75f2c72644fed1c95e7e": "79b7af0fd15c2b2aaea0ecffbb84e656",
".git/objects/8b/29442bae816f67bd2ccfe0c46bfeb0d70419c9": "560ae2f4e832208cc99e878a1433be4e",
".git/objects/7f/8168823b2e761bfc215b4e573083e790eab9d7": "e3d064f5cd40159d0f5bc6cdb07956f8",
".git/objects/7a/34759fda65d08e609cdd381f5145ff24d68f7c": "5a8ff523e9f293a5daa50d562e7b65ae",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "840fec42fa19d8541d055e17d2037a66",
".git/logs/refs/heads/main": "f4775b52c09c5f1559a067360365fb30",
".git/logs/refs/remotes/origin/main": "c2d747244a3f5860f003728f23c02fdc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "304d1bd986a2c1f3b0b8cc45d1f1d415",
".git/refs/remotes/origin/main": "304d1bd986a2c1f3b0b8cc45d1f1d415",
".git/index": "61036ac30e8024a9d08670541b665606",
".git/COMMIT_EDITMSG": "fd0ac74aaef05ab143de70754dabdb7d",
"assets/AssetManifest.json": "b44e453fe5b8b310554c05875023fac0",
"assets/NOTICES": "788268dfe194137a6b0c9c0b71fd75bf",
"assets/FontManifest.json": "a78f950d25c1e29b92a4a309465e60cd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "c96dc22ca29a082af83cce866d35cebc",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/screenshots/8.jpg": "95799f71c9817f376085c3898b75d287",
"assets/assets/screenshots/9.jpg": "e727c315acf66548049c51eb6c6bbc9e",
"assets/assets/screenshots/5.gif": "63b922b2439e4b9d8c82cb0d70d49b29",
"assets/assets/screenshots/6.gif": "73e6970dd99c11e67c4ef508b6375487",
"assets/assets/screenshots/3.gif": "045c76d00225ca68992c0dfdeca8d667",
"assets/assets/screenshots/11.jpg": "865a19485fc0879161062afd25ce23bf",
"assets/assets/screenshots/10.jpg": "ee1b6eee2d5df5a5bfdcb686266b75a0",
"assets/assets/screenshots/4.jpg": "f114c609432d9115658f5477900f66a7",
"assets/assets/screenshots/7.jpg": "2a56579d6ae3958c6ef6e14285d436dd",
"assets/assets/screenshots/2.jpg": "e16664ace87aa12b2266e6f8127ca05f",
"assets/assets/screenshots/1.jpg": "396c571e13c03fa3ddd14f13c601b8ad",
"assets/assets/screenshots/0.jpg": "d7a4be69fcea5718ce8fdaa844ce0988",
"assets/assets/images/ios-down-arrow.png": "fa4679d2972f1d11355142a60ed34ede",
"assets/assets/images/DAVID_COBBINA_CV.pdf": "0516a6d443027d43295e07518ea5c67a",
"assets/assets/images/down-arrow.png": "4393cd5feeb20fb468c7eb223d1bbd06",
"assets/assets/images/about_portrait.png": "9091aa9c48c591ed4872c788cc954551",
"assets/assets/images/associate_android_dev.png": "496dc53d08eec0434eeeae9887955ec8",
"assets/assets/images/data_science_cert.png": "1364c23105bfbb8c9197f7ad1f9dd245",
"assets/assets/images/projects/retouche/retouche_cover.png": "7a1c659e8ea246c08fd120941ac51530",
"assets/assets/images/projects/aerium-v1/portfolio_cover.png": "44d787594b26ade2562489ced20d9914",
"assets/assets/images/projects/aerium-v1/portfolio_design_2.png": "415b12138860ce60055b3ce39e517fde",
"assets/assets/images/projects/aerium-v1/portfolio_design_3.png": "4b8a024161c0d3f30b858ac60b9286d0",
"assets/assets/images/projects/login_catalog/login7.jpeg": "34412e31d874c3147f29d3bc522efbd2",
"assets/assets/images/projects/login_catalog/login_catalog_cover.jpg": "8142a609044c0f5b26df2964fe9304c4",
"assets/assets/images/projects/login_catalog/login8.png": "2bf8b3ab8d940dfb5c48069195c2d039",
"assets/assets/images/projects/login_catalog/login9.png": "4eb5737139e26eb31c1bea5e6e2c0a6b",
"assets/assets/images/projects/login_catalog/login4.png": "f5eb46c00b1ad99b48dc75648ae232c0",
"assets/assets/images/projects/login_catalog/login5.png": "bafb620a4388df5ef86cff21ef895491",
"assets/assets/images/projects/watermark/watermark_cover.png": "49414031f29c6f81cbc5d9155955a0cc",
"assets/assets/images/projects/drop/drop_simple.png": "c4c00ba6b1933a304067dda102a922dd",
"assets/assets/images/projects/drop/drop_flowchart.png": "6601108c834215bb982c5fa49f586591",
"assets/assets/images/projects/drop/drop_minimal_design.png": "06c3434542050151428b3f66a0193244",
"assets/assets/images/projects/drop/drop_easy_access.gif": "7657c8f99a7a3a405cb71cb1f4bee892",
"assets/assets/images/projects/drop/drop_wireframes.gif": "155af5f6c5def746328626cfce09c163",
"assets/assets/images/projects/drop/drop_description.gif": "7a0eede4ed79d2468eeaec6d30347b3c",
"assets/assets/images/projects/drop/drop_thanks.gif": "7f63f39ed7c894ee6e0755f77a39afb5",
"assets/assets/images/projects/drop/drop_cover.png": "c50dd8fc206812051747e58cf5a8b345",
"assets/assets/images/projects/nimbus/nimbus.jpg": "9f925a888c2ff02c9f1206f99c2b155d",
"assets/assets/images/projects/nimbus/nimbus_cover.jpg": "454409edbf32cc8432d70c69155a6016",
"assets/assets/images/projects/outfitr/outfitr_2.jpeg": "b5c6638904552202a14d3d65f6d69116",
"assets/assets/images/projects/outfitr/outfitr_5.jpeg": "32317c7e7d7bf50c3ca110d6d393e670",
"assets/assets/images/projects/outfitr/outfitr_4.jpeg": "4f45a2d1f2735a813f9e3ce4ca83f351",
"assets/assets/images/projects/outfitr/outfitr_6.jpeg": "8a986255dfcd301d00891cf0a6288df8",
"assets/assets/images/projects/outfitr/outfitr_cover.jpg": "73c49501f831207eb63ca115c5b1dd31",
"assets/assets/images/projects/outfitr/outfitr_1.jpeg": "5a72c14039670e01bcbfaccbff889551",
"assets/assets/images/projects/otp_package/otp_cover.png": "6fc7ff3a9d1b6d8cbb81348c8f2df184",
"assets/assets/images/projects/aerium-v2/typography.jpg": "e16664ace87aa12b2266e6f8127ca05f",
"assets/assets/images/projects/aerium-v2/aerium_v2.jpg": "33ec4d62fe74fb6ee3b01301f92ceb9c",
"assets/assets/images/projects/aerium-v2/overall.jpg": "f114c609432d9115658f5477900f66a7",
"assets/assets/images/projects/aerium-v2/last.jpg": "ee1b6eee2d5df5a5bfdcb686266b75a0",
"assets/assets/images/projects/aerium-v2/first.jpg": "d7a4be69fcea5718ce8fdaa844ce0988",
"assets/assets/images/projects/alarm/alarm_cover.png": "c9cde17e2e766a2c36386223002b2a86",
"assets/assets/images/projects/markdown_editor/markdown_cover.png": "c91623d52abbd10e9dda85c8ddec9948",
"assets/assets/images/projects/foodybite/foodybite_home_flow.png": "f144497bae302b17e440392f547410e7",
"assets/assets/images/projects/foodybite/foodybite_cover.png": "969daa4932408c630eb26f795cd84840",
"assets/assets/images/projects/foodybite/foodybite_starting_flow.png": "77c7833485f0a71c95e3a74f3f01b7c4",
"assets/assets/images/projects/foodybite/foodybite_typography.png": "af6e1b156ad00cfb382824b30ba38a35",
"assets/assets/images/projects/foodybite/foodybite_home.png": "831c86f2e1dd6fa238acd532e41b3607",
"assets/assets/images/projects/foodybite/foodybite_review_favorite_notifications_flow.png": "e80ce1073e823a2fc83ddbf1515794f7",
"assets/assets/images/projects/fately/fately_cover.png": "4b4c4dac43216afa833c7f47ccf46a37",
"assets/assets/images/circle.png": "663d5187ada8666bfa87120d1665605f",
"assets/assets/images/right-arrow.png": "62a7bab73a0fe40acd3f4555adfcab91",
"assets/assets/images/android_basics_cert.png": "3279aee63a95e1b4df4e4999364f8749",
"assets/assets/images/works.png": "5c6f8eb3a22f703781aad6c2528cf0cd",
"assets/assets/images/david_legend.png": "53ea1f34c8af26fb2b0050bee9c1dd1c",
"assets/assets/images/me_main.png": "cd1e7288ccd4f774e7bf90923eb00e31",
"assets/assets/images/down-arrow-2.png": "de203dedb01f2871b4ebbec490c20a6c",
"assets/assets/images/google_play.png": "7c42f3803d546db3d393106501dba541",
"assets/assets/images/me_main_circle.png": "458526619f2c9136a0543560920be7f5",
"assets/assets/images/skills.png": "2bd1870ebedbbd39a41827675a2846c3",
"assets/assets/images/up-arrow.png": "d0c6457f5704962b99f0e6aa3e9b18e7",
"assets/assets/images/dev-about.jpg": "6f6bad0b76d6997ee4fdb103f215c8f3",
"assets/assets/fonts/visuelt/VisueltPro-Black.ttf": "691b6f9aa3ee625e3cd8da2f8849a126",
"assets/assets/fonts/visuelt/VisueltPro-ExtraLight.ttf": "90bfa0766e43260710e3c6ac0f78c9e9",
"assets/assets/fonts/visuelt/VisueltPro-Regular.ttf": "0f8cd2494eb8c5e3a33352b2dd38fd61",
"assets/assets/fonts/visuelt/VisueltPro-Bold.ttf": "18acd33c965a455418d4204f0f334ea8",
"assets/assets/fonts/visuelt/VisueltPro-Thin.ttf": "82d7b5b67c24f00acb08f2dccf1fd03b",
"assets/assets/fonts/visuelt/VisueltPro-Medium.ttf": "cf4dbc20776a2b309fe30a9bbfe7de0a",
"assets/assets/fonts/visuelt/VisueltPro-Light.ttf": "2a1df2ff00c2611bf1b7fdeeaeebfa59",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
