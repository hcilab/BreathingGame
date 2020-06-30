let trainingData = [
  {'label': 'stack', 'data': [164.02793944478228,164.97748921312615,165.4609850265589,165.5898404495943,165.20977760573032,164.68151430650735,165.23576505937478,167.33091873135243,170.1204969015228,173.4384923773407,176.6804687375888,179.1474272301445,181.02464147470704,181.97497964662065,182.45907539005466,182.34933010188018,182.02676299399036,181.30319343611944,180.03542673701028,178.35355715434417,176.35657897375344,174.35887840540448,172.12157091769845,169.70193627553476,167.1435611022469,164.9577267712291,162.81631747943592,160.94777032394228,159.5259128636266,158.6830179237548,158.28068033161495,158.21358167081695,158.16252342957733,158.36272825334157,158.75412989139394,159.29102136414755,159.9386222756551,160.67046673486058,161.22735848953354,161.6511212474827,161.97358045704692,162.45801068685572,162.82663437089334,162.8680786768571,162.89961542210267,162.92361308058813,163.1809311490736,163.37673547452204,163.7647885851685,164.06007479657035,164.28477070610396,164.69480865895846,165.00682407722854,165.48330717949395,166.08494077784508,166.78180674215417,167.79019631102813,169.03563751647044,170.22240422878008,172.55980912743553,175.5337266186178,179.948222663607,184.26363043488345,188.02552325283196,191.60528008903276,195.28549908921278,198.8031068237625,201.95791946676067,204.5976085819225,206.84531816962905,209.03381099103675,210.93818601827746,212.62636366240318,214.15002746957327,215.3094484372852,216.19170144745988,216.86304550250003,217.13484268804405,217.34166479302672,217.2599873562002,217.19783550065313,217.15054149513537,216.8754962396594,216.42714531571414,216.08597591885052,215.82636553078203,215.62881688130568,215.2394364398905,214.94314020572835,214.71767572667133,214.78516738361117,214.8365246724261,214.87560463036476,214.6662850184491,214.50700477180524,214.3858016187001,214.29357295486915,214.46244944296166,214.59095478667763,214.9277972233164]},
  {'label': 'stack', 'data': [214.29357295486915,214.46244944296166,214.59095478667763,214.9277972233164,215.18411504225804,215.37915823504156,215.52757494367407,215.40145434239275,215.30548378189388,214.99339845352554,214.51686215367587,213.6761308513966,212.08015354560007,209.90947724903015,207.30148790683302,204.36072836154506,201.16674973401751,198.0191430986265,194.90682289567857,191.82135364860278,188.99537366604773,186.36685016488028,183.888579746876,181.52464332713492,179.247708537468,177.2760342333507,175.53664569062957,173.97401332010088,172.5458822819843,171.2200990611814,170.21125389625328,169.20452323189528,168.19940158147176,167.19550429857878,166.19253868931384,165.19028203036606,164.188564842041,163.1872581599893,162.18626384972106,161.42456446011562,160.60589758820453,159.98293894575454,159.26984584318228,158.72722279788687,158.31431771126694,157.76106334465842,157.34006843088181,156.78065816873618,156.11592174710773,155.61009536886667,155.225190440237,154.93229981519957,154.7094268098052,154.30077598268747,154.22887331133742,154.17415949297052,154.37158263172623,154.76086756666518,156.96954891474965,158.88928625553103,160.58915374117413,163.79511341407883,166.95183693940317,169.11486567944624,170.5217495506938,171.59230766973826,173.12411280796212,175.48501498078303,178.71586977661707,182.3696515131232,186.58431367368485,190.74765929412837,194.632898740449,198.0674580788909,200.9200184211694,203.5687680550622,205.58431495543678,207.11803080975068,208.0460435865139,208.51315098177815,208.62953575639185,208.00092623908375,207.04447592049723,206.07761473598288,205.10283147824478,204.36107719972372,203.79664463962726,203.60620098387363,203.70034148332942,204.01103423996668,204.24745364880627,204.427355290161,204.56425014461044,204.42936207161793,204.3267199668532,204.0095579750684,203.76821584847448,203.10645385338307,202.36383361991858,201.32062767044187]},
  {'label': 'stack', 'data': [203.76821584847448,203.10645385338307,202.36383361991858,201.32062767044187,200.04869319167983,198.84176661441467,197.2061928829804,195.2444431959613,193.27354949531878,190.81758327634088,187.99250462851072,184.88655254426993,181.32781462390213,177.66358981589275,174.15815274633945,170.53448683573282,167.05991276617644,163.69878905608581,160.66305180112016,157.87491501871673,155.5142452509508,153.2397961965073,151.27001339465238,149.29300695330357,147.54956095927338,145.98384110048053,144.31430343686145,142.56576636459923,140.9961724866017,139.5627441396639,137.9938727463685,136.56099416894588,135.47065556601314,134.64097028229304,134.24868448258042,133.950177437009,133.7230306569801,133.7892421791477,134.07868258226557,134.77704461343473,135.78657260357883,136.5547656352418,137.61743102077972,138.90417301684514,140.36142449104926,141.94842392094893,143.63415412048641,145.15595556237648,146.55301660029224,147.6161001052692,148.90316026630143,150.12159662222805,151.04875696576053,151.7542729317262,152.2911302096551,152.93870510085782,153.6705297601003,154.46646367174515,155.07212383229455,157.92356879251832,160.33241246088298,162.88257632060825,166.73556287716082,171.10180850655874,175.38050047263323,179.35351188744465,182.85486067127908,186.23635840678946,189.0485419056136,191.66656707214642,193.89779163463567,195.83468307157494,197.5476038427749,199.0900957537574,200.50290105466917,201.8170222664532,202.8169933098602,203.33885682832857,203.4969078793575,203.37811846132803,202.57055484093493,201.23887346668994,199.26931125006328,197.05341543783982,194.4110166318543,191.6831306772678,188.8901938944793,186.0477571538723,183.16765377793178,180.497945471534,178.22739299710335,176.9777469404939,176.0268378006735,175.3032503597246,174.5135844998378,173.91269396799572,173.21639343477906,172.20843412661043,171.20237754855447,170.19776883923313]},
  {'label': 'stack', 'data': [193.57397389633712,192.00241794858965,190.32843935523815,188.5765229895756,186.52624321545443,184.48798318453842,182.45886949038845,180.43671563513104,178.41985781900374,176.16797276198525,173.97630264736665,171.5913954345872,169.05944584783188,166.41560542877644,163.68662248913805,161.13190818710916,158.70980234602044,156.86671840259362,155.22517976595316,153.97606279823765,153.0255562647892,152.54133240786146,152.1728657617769,151.89248372909847,151.67912904670249,151.51677834232441,151.3932387465862,151.29923218361114,150.98864134497143,150.9913567135065,151.2324801771892,151.41596133509648,151.7946372204203,152.0827878999503,152.30205407805028,152.468903092382,152.5958656445854,152.6924768815565,152.7659925044477,152.82193368663852,152.8645017251293,153.13595079013461,153.10345077169734,153.31777734104568,153.4808675957796,153.60496994701887,153.46034751111662,153.350298113213,153.02749959522154,152.78186839472676,152.59495710705443,152.21367108926387,151.92353424828787,151.4636994913721,151.1137915547643,150.84753163800133,150.4058658540878,150.0697834662405,150.0531012245471,151.95286478212205,154.83281947977048,161.08827300465623,166.56548684828917,172.16767649900532,178.10402281095554,183.57747154962215,188.45962450007977,192.65277796817963,196.3216422572434,199.35249525916987,201.89785818089433,204.31284815669116,206.38957455743704,208.20890173423228,209.83236283091406,211.06772382518312,212.246820073616,213.3831020701394,214.4868048709458,215.32665954450007,215.965740891558,216.6911024497376,217.24306108770486,217.9021272497424,218.40363888490748,218.78526054096156,219.0756527834496,219.2966246626904,218.98665717076247,218.5117324232537,217.9112846436977,216.97626379602423,216.02570921260298,215.06333434517416,214.33102214162557,214.0128316838842,213.7707069535499,213.8255211126275,213.86723155102146,213.89897080781736]},
  {'label': 'stack', 'data': [213.89897080781736,213.92312256600417,214.1805578955442,214.37645144994514,214.28645801149705,213.9789209309768,213.2667883638617,212.7248962310839,211.83443287984306,210.91778400146626,209.74215221175865,208.36944924646565,207.08584361728708,205.87003596242027,204.70581868635986,203.34180151277266,201.82574805043916,200.1940036724351,198.71328235146837,197.34748093482239,195.83006976562197,194.1972922503851,192.2376703238826,190.0293385036244,187.87080990990685,185.75017872166634,183.65838529036748,181.5885357419006,179.29632700895,177.07397288441334,174.90477411954683,172.77602354164765,170.6780517194393,168.84255799265088,167.20679507653261,165.9620731016269,164.7758536825987,163.87320858447646,162.70823287019573,161.82175301574483,160.9081353504751,159.97386736409572,158.78482844142718,157.64098063876614,156.29246346882104,155.0272618459037,153.82545858665802,152.6718978542832,152.03316137146692,151.54711945885154,151.41632660003512,151.31680071891543,151.48012444222434,151.60440444968924,151.93803164722993,152.19190285320553,152.62414153713664,152.95305044135003,153.2033312961013,153.39378070459284,154.01681625347348,154.96902510104934,157.1279448868903,159.00981652634061,161.15898482730432,164.46777948644237,168.18086899892245,171.96254653597381,175.79641563486953,179.90905674934987,183.99477019173813,188.05999321656293,192.10962420615763,195.6692761019534,198.85608194574107,201.75917327954792,204.20731688281734,206.3092712968996,207.9087383245951,209.12584120539287,210.05198685065858,210.51767346569724,210.39391988425075,209.82163604317532,208.90804634104327,207.4956851857902,205.9428447198261,204.28310753714433,202.54202807005652,200.73905177923493,198.88897554751168,197.2421161796016,195.74989321625068,194.61439693152656,193.51129201243813,192.67189229265827,192.27221436299928,191.72902510593232,191.31568916455495,190.76210694213108]},
  {'label': 'stack', 'data': [204.28310753714433,202.54202807005652,200.73905177923493,198.88897554751168,197.2421161796016,195.74989321625068,194.61439693152656,193.51129201243813,192.67189229265827,192.27221436299928,191.72902510593232,191.31568916455495,190.76210694213108,189.8627481016187,188.7002730413276,187.33758159424497,185.58347971030787,183.77059410545368,181.67392022918767,179.60035694137747,177.06626504168946,174.42079444508317,171.69057103361322,169.13491280350482,166.47303146355185,163.96937763908775,161.58612589956095,159.0554360332187,156.65161141292256,154.58338120879074,152.77051915143576,151.39103486430122,150.34132626086364,149.5425580817641,148.93474120586865,148.71128456839918,148.54124685428053,148.1728006603975,147.65337696706342,147.01906803612468,146.29733801351694,145.5090855426996,144.9092705190601,144.69190283326253,144.5264984629344,144.40063520215,144.30486046304333,144.2319813671595,143.93746732198625,143.71335898676648,143.54282536795233,143.4130590425842,143.3143142946767,143.23917519205014,143.1819986346821,143.13849054637404,143.34444060447223,143.50115681347899,143.8594661042765,144.8492906416541,147.2758910385393,153.6644823303356,159.4820636195744,164.62608174851036,169.97472852700398,175.2400287746101,180.20284985798958,184.45738715912117,187.9339038089068,190.81839126416904,193.2523783804471,195.34356051801424,196.45671601248895,196.8256491977862,196.38921456927633,195.81805556773492,194.90532180412086,193.97172641632145,192.78319930268373,191.1616265101862,189.2105307365137,187.00868683066182,185.0941523921563,183.3982440174163,181.86869756662907,180.22668579652924,178.2600371304935,176.2854155871565,174.30472714043015,172.3194221273946,170.33060417157432,168.33911306731812,166.10653062645878,163.92954869817186,162.03393280190113,160.11336313160382,158.41286229082797,157.11887845979564,155.89517358719633,154.96400420395946]},
  {'label': 'stack', 'data': [167.61107017035255,165.55253164311125,163.7470443972772,162.13411469608604,160.9067674911409,159.49471205419488,158.42021866958956,157.60259069029604,156.74136536206817,156.08602216970965,155.10922905420713,153.8878309417173,152.48030242370126,151.1701965417443,149.93422371095332,148.7546618899388,147.61802561932248,146.7531104598149,146.09495951699802,145.59414431128766,145.21305259819644,144.92306361197785,144.70239858768235,144.29542790783225,144.22480373240876,143.93200555267111,143.70920289285982,143.5396628183161,143.6497097468942,143.73344916225955,143.79717006548088,143.84565802649217,143.88255459016554,143.9106307637664,143.6929379016459,143.2882288671331,142.98026845078113,142.74592819654424,142.56760867286545,142.67097494304357,142.74963075965792,143.0485405587423,143.27599381114754,143.44907272053155,143.58077586637268,143.68099442382822,143.75725501118416,143.81528495425587,143.62038519663992,143.472077633962,143.35922406545833,143.7514634049371,144.28899232053988,145.17613551318956,146.09025794086998,147.02491002255954,147.9751839961691,148.9373453355888,149.90855228015192,153.03815742510326,156.61489397115827,161.72715804503335,167.7688134755394,173.80051087448035,179.8246307812348,185.3648702028254,190.05878981737345,194.10870848823728,197.1904648457953,199.7745623082816,201.74091260584652,203.4762498842402,204.79674225083295,206.04061860207963,206.98713732628227,207.4683266885708,207.595427034269,207.4530859005939,207.10571521953005,206.36327156182372,205.32019997639466,204.0483677409841,202.84151896505867,201.68411888321324,200.56434642792988,199.71226366688228,199.30293466858794,199.46957317139058,199.83543275997727,200.5919454183064,201.40666548451975,202.2656780572949,202.91933746937576,203.41673487721758,203.5561686180989,203.66226971600744,203.50394935641725,202.90536217521037,202.44987158363176,201.86421208464603]},
  {'label': 'stack', 'data': [202.90536217521037,202.44987158363176,201.86421208464603,201.17950149585835,200.6584759194031,200.2620052706854,199.96031379449326,199.49168662137598,198.89603093556192,198.2037138206158,197.4378428894162,196.8550589366733,196.1725364740273,195.4141187127427,194.35889174858644,192.83875274192846,190.96484227487235,188.58267474692295,185.81375267993792,182.51147531662724,179.0424023169393,175.4464073826168,171.75383211896877,167.98776475137922,164.16577409817367,160.54028624835738,157.0643257873204,153.70214711264737,150.42654986639266,147.21683613266237,144.29631320548137,141.83490515715292,139.4838000358095,137.45568635358063,135.91240789739223,134.9771185278091,133.78730239096973,132.6428631727997,131.77201041671657,131.3483985262871,131.74322578910423,132.52178118988786,133.83138896896511,135.54509721918927,137.08818835664678,138.7405068582268,140.47594113351994,142.27462175642404,143.88237200706502,145.34483517013908,146.45768594981575,147.30450171180993,148.1879372724427,149.0992384043223,149.79268641774152,150.5594178979651,151.3819139028822,152.2468435200436,153.38311991152912,155.68210456527586,158.1486720014064,161.69898923968185,165.35680639048076,168.6183103759555,171.33918549747813,173.64867299026886,176.12323248590153,178.96245955329152,182.0791777751937,185.16799366302317,188.2355774712956,191.0479476583907,193.42705766040405,195.47648145428238,197.27503290960516,198.88268487110818,200.34507324177272,201.6969243323163,202.72560565441947,203.74743049929117,204.7640379573421,205.77667528258016,206.54723434032223,206.89452846548176,207.397856644915,207.78086058720794,208.07230467042436,208.05501971665865,207.8028096323397,207.13277774332326,206.14480737020438,204.91490400427153,203.26184625147596,201.28679222469972,198.827660235603,196.00017261786923,193.1314446689924,190.70944963525776,188.8664500098866,187.4640327580722]},
  {'label': 'stack', 'data': [205.77667528258016,206.54723434032223,206.89452846548176,207.397856644915,207.78086058720794,208.07230467042436,208.05501971665865,207.8028096323397,207.13277774332326,206.14480737020438,204.91490400427153,203.26184625147596,201.28679222469972,198.827660235603,196.00017261786923,193.1314446689924,190.70944963525776,188.8664500098866,187.4640327580722,186.3968734808203,185.5848263375386,184.72784770616016,183.83667878348203,182.9194930056168,181.98250988973254,181.03046213249095,180.06695104522964,179.09471701979643,178.11584533757247,177.1319227783614,176.14415679079258,175.15346617417833,173.92149285860768,172.98403166341978,172.03162011518558,171.306889427407,170.51635362210354,169.91480111158077,169.21799685046892,168.68776868141856,168.28429538634157,167.97727529698673,167.98270780139646,167.98684162638475,167.98998723064844,168.23143807910097,168.1761111344733,168.13401049561918,168.10197431860178,168.31665384472794,168.719069902983,169.26434271922594,169.67926412990744,169.75593835652413,169.33616860818196,168.77769062682353,167.87460639391497,166.94835374680144,166.00447126225822,167.43774571638085,169.00650000605017,173.54703338125344,178.67552001934376,184.2514054456825,189.45056407727216,194.12399795211454,198.1583281473303,201.22822256694903,203.32517932622505,204.6817862009862,205.4750291791251,206.07864169326143,206.298899052021,206.22744507450497,205.45590101563783,204.3906856901554,202.8629461120983,200.98325204513964,198.8357407522335,196.48443587585007,193.97805574424504,191.11461499377174,188.21852876824826,185.2976012043035,182.59682802694192,180.06357973974124,177.8968655311846,175.77000555846197,173.91252960221644,172.49909669099458,171.66261235090005,170.78703841113168,170.1207767464702,169.37473252195022,168.8070355584348,168.61410787848027,168.46730095405334,168.11653206177604,167.84961700701552,167.40745270057528]},
];

let sonar;
let t0 = Date.now();


let game;

// global game options
let gameOptions = {

    // platform speed range, in pixels per second
    platformSpeedRange: [100, 100],

    // mountain speed, in pixels per second
    mountainSpeed: 25,

    // spawn range, how far should be the rightmost platform from the right edge
    // before next platform spawns, in pixels
    spawnRange: [80, 300],

    // platform width range, in pixels
    platformSizeRange: [90, 600],
    //platformSizeRange: [90, 300],

    // a height range between rightmost platform and next platform to be spawned
    platformHeightRange: [-5, 5],

    // a scale to be multiplied by platformHeightRange
    platformHeighScale: 20,

    // platform max and min height, as screen height ratio
    platformVerticalLimit: [0.3, 0.9],
    // platformVerticalLimit: [0.4, 0.8],

    // player gravity
    playerGravity: 900,

    // player jump force
    jumpForce: 400,

    // player starting X position
    playerStartPosition: 200,

    // consecutive jumps allowed
    jumps: 5,

    // % of probability a coin appears on the platform
    coinPercent: 75,

    // % of probability a fire appears on the platform
    firePercent: 25
}

window.onload = function() {

    // object containing configuration options
    let gameConfig = {
        type: Phaser.AUTO,
        width: 1334,
        height: 750,
        // scene: [preloadGame, playGame, endGame],
        scene: [preloadGame, playGame],
        backgroundColor: 0x0c88c7,

        // physics settings
        physics: {
            default: "arcade"
        }
    }
    game = new Phaser.Game(gameConfig);
    window.focus();
    resize();
    window.addEventListener("resize", resize, false);
}

// preloadGame scene
class preloadGame extends Phaser.Scene{
    constructor(){
        super("PreloadGame");
    }
    async preload(){
        this.load.image("platform", "platform.png");

        // player is a sprite sheet made by 24x48 pixels
        this.load.spritesheet("player", "player.png", {
            frameWidth: 24,
            frameHeight: 48
        });

        // the coin is a sprite sheet made by 20x20 pixels
        this.load.spritesheet("coin", "coin.png", {
            frameWidth: 20,
            frameHeight: 20
        });

        // the fire is a sprite sheet made by 32x58 pixels
        this.load.spritesheet("fire", "fire.png", {
            frameWidth: 40,
            frameHeight: 70
        });

        // mountains are a sprite sheet made by 512x512 pixels
        this.load.spritesheet("mountain", "mountain.png", {
            frameWidth: 512,
            frameHeight: 512
        });

        sonar = new BreathingSonarJS();
        await sonar.init();
        sonar.trainingData = trainingData;
        sonar.register('stack', () => console.log('Stack!'));
    }
    create(){

        // setting player animation
        this.anims.create({
            key: "run",
            frames: this.anims.generateFrameNumbers("player", {
                start: 0,
                end: 1
            }),
            frameRate: 8,
            repeat: -1
        });

        // setting coin animation
        this.anims.create({
            key: "rotate",
            frames: this.anims.generateFrameNumbers("coin", {
                start: 0,
                end: 5
            }),
            frameRate: 15,
            yoyo: true,
            repeat: -1
        });

        // setting fire animation
        this.anims.create({
            key: "burn",
            frames: this.anims.generateFrameNumbers("fire", {
                start: 0,
                end: 4
            }),
            frameRate: 15,
            repeat: -1
        });

        this.scene.start("PlayGame");

    }
}

// playGame scene
class playGame extends Phaser.Scene{
    constructor(){
        super("PlayGame");
    }
    create(){

        //var score text
        var score = 0;
        var scoreText;
        // var finalScoreText;

        //generates the score text
        scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000'});

        // group with all active mountains.
        this.mountainGroup = this.add.group();

        // group with all active platforms.
        this.platformGroup = this.add.group({

            // once a platform is removed, it's added to the pool
            removeCallback: function(platform){
                platform.scene.platformPool.add(platform)
            }
        });

        // platform pool
        this.platformPool = this.add.group({

            // once a platform is removed from the pool, it's added to the active platforms group
            removeCallback: function(platform){
                platform.scene.platformGroup.add(platform)
            }
        });

        // group with all active coins.
        this.coinGroup = this.add.group({

            // once a coin is removed, it's added to the pool
            removeCallback: function(coin){
                coin.scene.coinPool.add(coin)
            }
        });

        // coin pool
        this.coinPool = this.add.group({

            // once a coin is removed from the pool, it's added to the active coins group
            removeCallback: function(coin){
                coin.scene.coinGroup.add(coin)
            }
        });

        // group with all active fires.
        this.fireGroup = this.add.group({

            // once a firecamp is removed, it's added to the pool
            removeCallback: function(fire){
                fire.scene.firePool.add(fire)
            }
        });

        // fire pool
        this.firePool = this.add.group({

            // once a fire is removed from the pool, it's added to the active fire group
            removeCallback: function(fire){
                fire.scene.fireGroup.add(fire)
            }
        });

        // adding a mountain
        this.addMountains()

        // keeping track of added platforms
        this.addedPlatforms = 0;

        // number of consecutive jumps made by the player so far
        this.playerJumps = 0;

        // adding a platform to the game, the arguments are platform width, x position and y position
        this.addPlatform(game.config.width, game.config.width / 2, game.config.height * gameOptions.platformVerticalLimit[1]);

        // adding the player;
        this.player = this.physics.add.sprite(gameOptions.playerStartPosition, game.config.height * 0.7, "player");
        this.player.setGravityY(gameOptions.playerGravity);
        this.player.setDepth(2);

        // the player is not dying
        this.dying = false;

        // setting collisions between the player and the platform group
        this.platformCollider = this.physics.add.collider(this.player, this.platformGroup, function(){

            // play "run" animation if the player is on a platform
            if(!this.player.anims.isPlaying){
                this.player.anims.play("run");
            }
        }, null, this);

        // setting collisions between the player and the coin group, adding to score
        this.physics.add.overlap(this.player, this.coinGroup, function(player, coin){
            
            coin.disableBody(true, true);

            score += 10;
            scoreText.setText("Score: " + score);

            
            }, null, this);

        // this.physics.add.overlap(this.player, this.coinGroup, function(player, coin){

        //     this.tweens.add({
        //         targets: coin,
        //         y: coin.y - 100,
        //         alpha: 0,
        //         duration: 800,
        //         ease: "Cubic.easeOut",
        //         callbackScope: this,
        //         onComplete: function(){
        //             this.coinGroup.killAndHide(coin);
        //             this.coinGroup.remove(coin);
        //         }
        //     });

        // }, null, this);

        // setting collisions between the player and the fire group
        this.physics.add.overlap(this.player, this.fireGroup, function(player, fire){

            this.dying = true;
            this.player.anims.stop();
            this.player.setFrame(2);
            this.player.body.setVelocityY(-200);
            this.physics.world.removeCollider(this.platformCollider);

        }, null, this);

        sonar.register('stack', () => this.jump());

    }

    // adding mountains
    addMountains(){
        let rightmostMountain = this.getRightmostMountain();
        if(rightmostMountain < game.config.width * 2){
            let mountain = this.physics.add.sprite(rightmostMountain + Phaser.Math.Between(100, 350), game.config.height + Phaser.Math.Between(0, 100), "mountain");
            mountain.setOrigin(0.5, 1);
            mountain.body.setVelocityX(gameOptions.mountainSpeed * -1)
            this.mountainGroup.add(mountain);
            if(Phaser.Math.Between(0, 1)){
                mountain.setDepth(1);
            }
            mountain.setFrame(Phaser.Math.Between(0, 3))
            this.addMountains()
        }
    }

    // getting rightmost mountain x position
    getRightmostMountain(){
        let rightmostMountain = -200;
        this.mountainGroup.getChildren().forEach(function(mountain){
            rightmostMountain = Math.max(rightmostMountain, mountain.x);
        })
        return rightmostMountain;
    }

    // the core of the script: platform are added from the pool or created on the fly
    addPlatform(platformWidth, posX, posY){
        this.addedPlatforms ++;
        let platform;
        if(this.platformPool.getLength()){
            platform = this.platformPool.getFirst();
            platform.x = posX;
            platform.y = posY;
            platform.active = true;
            platform.visible = true;
            this.platformPool.remove(platform);
            let newRatio =  platformWidth / platform.displayWidth;
            platform.displayWidth = platformWidth;
            platform.tileScaleX = 1 / platform.scaleX;
        }
        else{
            platform = this.add.tileSprite(posX, posY, platformWidth, 32, "platform");
            this.physics.add.existing(platform);
            platform.body.setImmovable(true);
            platform.body.setVelocityX(Phaser.Math.Between(gameOptions.platformSpeedRange[0], gameOptions.platformSpeedRange[1]) * -1);
            platform.setDepth(2);
            this.platformGroup.add(platform);
        }
        this.nextPlatformDistance = Phaser.Math.Between(gameOptions.spawnRange[0], gameOptions.spawnRange[1]);

        // if this is not the starting platform...
        if(this.addedPlatforms > 1){

            // is there a coin over the platform?
            if(Phaser.Math.Between(1, 100) <= gameOptions.coinPercent){
                if(this.coinPool.getLength()){
                    let coin = this.coinPool.getFirst();
                    coin.x = posX;
                    coin.y = posY - 50; //coin height off platform
                    // coin.y = posY - 96;
                    coin.alpha = 1;
                    coin.active = true;
                    coin.visible = true;
                    this.coinPool.remove(coin);
                }
                else{
                    let coin = this.physics.add.sprite(posX, posY - 50, "coin"); //coin height off platform
                    // let coin = this.physics.add.sprite(posX, posY - 96, "coin");
                    coin.setImmovable(true);
                    coin.setVelocityX(platform.body.velocity.x);
                    coin.anims.play("rotate");
                    coin.setDepth(2);
                    this.coinGroup.add(coin);
                }
            }

            // is there a fire over the platform?
            if(Phaser.Math.Between(1, 100) <= gameOptions.firePercent){
                if(this.firePool.getLength()){
                    let fire = this.firePool.getFirst();
                    fire.x = posX - platformWidth / 2 + Phaser.Math.Between(1, platformWidth);
                    fire.y = posY - 46;
                    fire.alpha = 1;
                    fire.active = true;
                    fire.visible = true;
                    this.firePool.remove(fire);
                }
                else{
                    let fire = this.physics.add.sprite(posX - platformWidth / 2 + Phaser.Math.Between(1, platformWidth), posY - 46, "fire");
                    fire.setImmovable(true);
                    fire.setVelocityX(platform.body.velocity.x);
                    fire.setSize(8, 2, true)
                    fire.anims.play("burn");
                    fire.setDepth(2);
                    this.fireGroup.add(fire);
                }
            }
        }
    }

    // the player jumps when on the ground, or once in the air as long as there are jumps left and the first jump was on the ground
    // and obviously if the player is not dying
    jump(){
        if((!this.dying) && (this.player.body.touching.down || (this.playerJumps > 0 && this.playerJumps < gameOptions.jumps))){
            if(this.player.body.touching.down){
                this.playerJumps = 0;
            }
            this.player.setVelocityY(gameOptions.jumpForce * -1);
            this.playerJumps ++;

            // stops animation
            this.player.anims.stop();
        }
    }

    update(){

        // Busy wait for two seconds to allow sonar's rolling window to stabalize
        if (Date.now() < t0 + 2000) {
            return;
        }

        // game over
        // if(this.player.y > game.config.height){
        //     this.scene.start("PlayGame");
        // }

        // temporary game over
        if(this.player.y > game.config.height){
            this.scene.pause("PlayGame");
            // finalScoreText = this.add.text(windowWidth/2, windowHeight/2, 'Score: ' + score, { fontSize: '32px', fill: '#000'});
        }

        this.player.x = gameOptions.playerStartPosition;

        // recycling platforms
        let minDistance = game.config.width;
        let rightmostPlatformHeight = 0;
        this.platformGroup.getChildren().forEach(function(platform){
            let platformDistance = game.config.width - platform.x - platform.displayWidth / 2;
            if(platformDistance < minDistance){
                minDistance = platformDistance;
                rightmostPlatformHeight = platform.y;
            }
            if(platform.x < - platform.displayWidth / 2){
                this.platformGroup.killAndHide(platform);
                this.platformGroup.remove(platform);
            }
        }, this);

        // recycling coins
        this.coinGroup.getChildren().forEach(function(coin){
            if(coin.x < - coin.displayWidth / 2){
                this.coinGroup.killAndHide(coin);
                this.coinGroup.remove(coin);
            }
        }, this);

        // recycling fire
        this.fireGroup.getChildren().forEach(function(fire){
            if(fire.x < - fire.displayWidth / 2){
                this.fireGroup.killAndHide(fire);
                this.fireGroup.remove(fire);
            }
        }, this);

        // recycling mountains
        this.mountainGroup.getChildren().forEach(function(mountain){
            if(mountain.x < - mountain.displayWidth){
                let rightmostMountain = this.getRightmostMountain();
                mountain.x = rightmostMountain + Phaser.Math.Between(100, 350);
                mountain.y = game.config.height + Phaser.Math.Between(0, 100);
                mountain.setFrame(Phaser.Math.Between(0, 3))
                if(Phaser.Math.Between(0, 1)){
                    mountain.setDepth(1);
                }
            }
        }, this);

        // adding new platforms
        if(minDistance > this.nextPlatformDistance){
            let nextPlatformWidth = Phaser.Math.Between(gameOptions.platformSizeRange[0], gameOptions.platformSizeRange[1]);
            let platformRandomHeight = gameOptions.platformHeighScale * Phaser.Math.Between(gameOptions.platformHeightRange[0], gameOptions.platformHeightRange[1]);
            let nextPlatformGap = rightmostPlatformHeight + platformRandomHeight;
            let minPlatformHeight = game.config.height * gameOptions.platformVerticalLimit[0];
            let maxPlatformHeight = game.config.height * gameOptions.platformVerticalLimit[1];
            let nextPlatformHeight = Phaser.Math.Clamp(nextPlatformGap, minPlatformHeight, maxPlatformHeight);
            this.addPlatform(nextPlatformWidth, game.config.width + nextPlatformWidth / 2, nextPlatformHeight);
        }
    }
};

// class endGame extends Phaser.Scene{
//     constructor(){
//         super("EndGame");
//     }
//     create(){
//         scoreText.setText("Score: " + score);
//     }
// };

function resize(){
    let canvas = document.querySelector("canvas");
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let windowRatio = windowWidth / windowHeight;
    let gameRatio = game.config.width / game.config.height;
    if(windowRatio < gameRatio){
        canvas.style.width = windowWidth + "px";
        canvas.style.height = (windowWidth / gameRatio) + "px";
    }
    else{
        canvas.style.width = (windowHeight * gameRatio) + "px";
        canvas.style.height = windowHeight + "px";
    }
}
