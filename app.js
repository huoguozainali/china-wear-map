/* ============================================================
   中国穿衣地图 · 赏秋出片本命穿衣大法
   首页 TOP20 目的地（贴点位迷你卡 + 气象特效 + 第二层详情页）
   ============================================================ */
const DESTINATIONS = [
  {
    id: 'kanas', name: '喀纳斯', region: '西北 · 新疆', shortAddress: '新疆·喀纳斯',
    address: '新疆阿勒泰地区布尔津县喀纳斯景区', window: '9月中下旬', monthChip: '9月',
    temp: '4°C', weather: 'snow', vibe: '裹进白桦金里',
    scene: '金黄白桦 · 湖泊山林 · 油画感秋色',
    summary: '白桦金、湖泊与冷空气把画面拉得格外饱满，越有层次与质地，越撑得起这片北疆秋色。',
    advice: '山野机能风 · 驼棕系层搭', lookTitle: '山野机能驼棕 LOOK',
    lookDesc: '抓绒 + 壳层 + 工装裤 + 靴子，驼棕大地色叠搭，远景近景都立得住。',
    tags: ['北疆金色', '山野机能', '驼棕层搭'],
    coords: [87.0, 48.7],
    image: './assets/kanas.jpg', look: './assets/look_kanas.jpg'
  },
  {
    id: 'aershan', name: '阿尔山', region: '北境 · 内蒙古', shortAddress: '内蒙古·阿尔山',
    address: '内蒙古自治区兴安盟阿尔山市', window: '9月中下旬', monthChip: '9月',
    temp: '3°C', weather: 'snow', vibe: '穿够厚才敢野',
    scene: '森林 · 火山地貌 · 金色草甸',
    summary: '气温掉得快，清晨与傍晚已近初冬边缘，穿搭要有体积感，才压得住开阔的北地。',
    advice: '高地保暖风 · 北地旅行', lookTitle: '北地保暖叠穿 LOOK',
    lookDesc: '羽绒背心 / 毛呢外套 + 围巾叠穿，深色厚质地，是冷调松林前最稳的镜头。',
    tags: ['北地草甸', '保暖叠穿', '毛呢羽绒'],
    coords: [119.94, 47.18],
    image: './assets/aershan.jpg', look: './assets/look_aershan.jpg'
  },
  {
    id: 'daocheng', name: '稻城亚丁', region: '高原 · 四川', shortAddress: '四川·稻城亚丁',
    address: '四川省甘孜藏族自治州稻城县亚丁景区', window: '9月下旬—10月上旬', monthChip: '9-10月',
    temp: '5°C', weather: 'snow', vibe: '冲锋衣也能拍封面',
    scene: '雪山 · 草甸 · 金黄树林 · 高原光感',
    summary: '日照强但空气很冷，昼夜温差极大，穿搭需要强对比与足够能量，才配得上这片高原。',
    advice: '高原户外美学 · 亮色冲锋', lookTitle: '高原亮色机能 LOOK',
    lookDesc: '亮色壳层 + 抓绒中层 + 利落工装裤，墨镜与帽款点睛，高原大片感直接拉满。',
    tags: ['高原光感', '亮色冲锋', '机能层次'],
    coords: [100.30, 28.47],
    image: './assets/daocheng.jpg', look: './assets/look_daocheng.jpg'
  },
  {
    id: 'changbaishan', name: '长白山', region: '东北 · 吉林', shortAddress: '吉林·长白山',
    address: '吉林省延边朝鲜族自治州安图县长白山景区', window: '9月下旬—10月上旬', monthChip: '9-10月',
    temp: '6°C', weather: 'snow', vibe: '整座山为你层林尽染',
    scene: '层林尽染 · 山脊云雾 · 冷杉红叶',
    summary: '早晚凉意重、山上风大，拍照久站容易冷，深色调与厚针织比甜美风更贴这片山色。',
    advice: '山地旅行风 · 酒红苔绿奶白', lookTitle: '山地酒红针织 LOOK',
    lookDesc: '深酒红针织 + 奶白长大衣 + 苔绿阔腿裤 + 靴履，色调克制又有秋意。',
    tags: ['层林尽染', '山地旅行', '酒红针织'],
    coords: [128.06, 42.01],
    image: './assets/changbaishan.jpg', look: './assets/look_changbaishan.jpg'
  },
  {
    id: 'jiuzhaigou', name: '九寨沟', region: '高原 · 四川', shortAddress: '四川·九寨沟',
    address: '四川省阿坝藏族羌族自治州九寨沟县', window: '10月中上旬', monthChip: '10月',
    temp: '12°C', weather: 'leaf', vibe: '撞色撞进童话里',
    scene: '彩林 · 海子 · 瀑布 · 蓝绿金红撞色',
    summary: '白天舒适、入夜转凉，景区步行时间长，柔和针织与撞色层搭最容易出片。',
    advice: '彩林出片风 · 柔和针织撞色', lookTitle: '彩林撞色针织 LOOK',
    lookDesc: '米白针织 + 焦糖外套 + 深蓝裤装撞色叠搭，呼应彩林与海子的蓝绿金红。',
    tags: ['彩林海子', '柔和针织', '焦糖撞色'],
    coords: [103.92, 33.16],
    image: './assets/jiuzhaigou.jpg', look: './assets/look_jiuzhaigou.jpg'
  },
  {
    id: 'xiangshan', name: '香山', region: '华北 · 北京', shortAddress: '北京·香山',
    address: '北京市海淀区香山公园', window: '10月下旬—11月上旬', monthChip: '10-11月',
    temp: '13°C', weather: 'leaf', vibe: '一件风衣过整个秋',
    scene: '红叶 · 山道 · 公园城市感',
    summary: '典型的城市秋日早晚凉、中午尚可，通勤与旅行两用，最适合时髦克制的街拍穿法。',
    advice: '都市赏秋风 · 通勤街拍', lookTitle: '都市通勤风衣 LOOK',
    lookDesc: '风衣 + 西装 + 酒红针织叠穿 + 乐福鞋，城市感与秋意可以同时成立。',
    tags: ['红枫配色', '都市通勤', '风衣叠穿'],
    coords: [116.19, 39.99],
    image: './assets/xiangshan.jpg', look: './assets/look_xiangshan.jpg'
  },
  {
    id: 'qixiashan', name: '栖霞山', region: '华东 · 南京', shortAddress: '南京·栖霞山',
    address: '江苏省南京市栖霞区栖霞山风景区', window: '11月中上旬', monthChip: '11月',
    temp: '15°C', weather: 'leaf', vibe: '新中式红到出片',
    scene: '枫叶 · 寺院 · 石阶古意',
    summary: '早晚偏凉、白天舒适，适合轻外套与层次穿法，新中式与复古文艺都很对味。',
    advice: '新中式秋游风 · 复古文艺', lookTitle: '新中式复古 LOOK',
    lookDesc: '立领新中式外套 + 酒红 / 驼色 / 深棕调，层层红透的石阶古意里很有故事感。',
    tags: ['枫叶古寺', '新中式', '酒红驼色'],
    coords: [118.95, 32.15],
    image: './assets/qixiashan.jpg', look: './assets/look_qixiashan.jpg'
  },
  {
    id: 'tianpingshan', name: '天平山', region: '华东 · 苏州', shortAddress: '苏州·天平山',
    address: '江苏省苏州市吴中区天平山风景区', window: '11月中下旬', monthChip: '11月',
    temp: '16°C', weather: 'leaf', vibe: '江南的奶咖味',
    scene: '江南红枫 · 园林 · 古典景框',
    summary: '温差中等、湿润感更强，体感不刺骨但早晚有凉意，奶咖针织叠搭最贴江南气质。',
    advice: '江南轻复古 · 奶咖针织', lookTitle: '江南奶咖针织 LOOK',
    lookDesc: '奶咖针织 + 半裙 / 大衣 + 披肩式层搭，古典园林景框里温柔又高级。',
    tags: ['江南红枫', '轻复古', '奶咖色'],
    coords: [120.55, 31.30],
    image: './assets/tianpingshan.jpg', look: './assets/look_tianpingshan.jpg'
  },
  {
    id: 'tengchong', name: '腾冲银杏村', region: '西南 · 云南', shortAddress: '云南·腾冲',
    address: '云南省保山市腾冲市固东镇江东银杏村', window: '11月中下旬', monthChip: '11月',
    temp: '18°C', weather: 'glow', vibe: '站进一场银杏雨',
    scene: '银杏雨 · 村落 · 暖黄光感',
    summary: '白天相对温和、早晚偏凉，适合“轻保暖、重氛围”的穿法，暖调文艺最治愈。',
    advice: '暖调文艺风 · 奶油姜黄焦糖', lookTitle: '暖调银杏文艺 LOOK',
    lookDesc: '奶油白毛衣 + 姜黄 / 焦糖色长裙，落满银杏的村落里，慢秋治愈感拉满。',
    tags: ['银杏暖黄', '暖调文艺', '毛衣长裙'],
    coords: [98.49, 25.02],
    image: './assets/tengchong.jpg', look: './assets/look_tengchong.jpg'
  },
  {
    id: 'wuyuan', name: '婺源篁岭', region: '华东 · 江西', shortAddress: '江西·婺源',
    address: '江西省上饶市婺源县篁岭 / 石城', window: '11月中下旬', monthChip: '11月',
    temp: '15°C', weather: 'leaf', vibe: '晒秋人家的复古感',
    scene: '晒秋 · 徽派村落 · 晨雾',
    summary: '清晨偏凉、白天舒适，适合拍晨雾与日出时段的层搭，复古暖色系最有古村氛围。',
    advice: '古村氛围风 · 复古夹克', lookTitle: '古村复古夹克 LOOK',
    lookDesc: '复古夹克 + 针织马甲 + 低饱和暖色，白墙黑瓦与晒秋之间格外出片。',
    tags: ['晒秋古村', '复古夹克', '低饱暖色'],
    coords: [117.86, 29.25],
    image: './assets/wuyuan.jpg', look: './assets/look_wuyuan.jpg'
  },
  {
    id: 'linzhi', name: '林芝', region: '高原 · 西藏', shortAddress: '西藏·林芝',
    address: '西藏自治区林芝市米林县雅鲁藏布大峡谷', window: '10月中下旬', monthChip: '10月',
    temp: '8°C', weather: 'snow', vibe: '雪山脚下的高级感',
    scene: '南迦巴瓦雪山 · 金黄杨林 · 高原秋色',
    summary: '高原日照强、空气却冷，昼夜温差大，亮色机能与层叠穿法既保暖又压得住雪山背景。',
    advice: '高原户外风 · 亮色机能', lookTitle: '高原亮色机能 LOOK',
    lookDesc: '亮色冲锋衣 + 抓绒中层 + 工装裤 + 登山靴，墨镜点睛，雪山前直接出大片。',
    tags: ['雪山秋色', '亮色机能', '层叠保暖'],
    coords: [94.36, 29.65],
    image: './assets/linzhi.jpg', look: './assets/look_linzhi.jpg'
  },
  {
    id: 'zhangye', name: '张掖', region: '西北 · 甘肃', shortAddress: '甘肃·张掖',
    address: '甘肃省张掖市临泽县七彩丹霞景区', window: '9月下旬—10月', monthChip: '9-10月',
    temp: '12°C', weather: 'leaf', vibe: '大地色穿在大地上',
    scene: '七彩丹霞 · 层叠彩岩 · 日落金光',
    summary: '西北秋日昼暖夜凉、风大干爽，大地色廓形外套与丹霞撞色，旷野感十足。',
    advice: '西北旷野风 · 大地色廓形', lookTitle: '旷野大地色 LOOK',
    lookDesc: '驼色长风衣 + 大地色阔腿裤，迎风走在彩岩之间，画面张力直接拉满。',
    tags: ['七彩丹霞', '大地色', '旷野廓形'],
    coords: [100.13, 38.93],
    image: './assets/zhangye.jpg', look: './assets/look_zhangye.jpg'
  },
  {
    id: 'xian', name: '西安', region: '西北 · 陕西', shortAddress: '陕西·西安',
    address: '陕西省西安市长安区古观音禅寺 / 西安城墙', window: '11月中上旬', monthChip: '11月',
    temp: '14°C', weather: 'leaf', vibe: '千年银杏当背景板',
    scene: '古寺银杏 · 城墙古意 · 金色落叶',
    summary: '古都秋日早晚偏凉、白天舒适，新中式与复古文艺在千年银杏下格外有故事。',
    advice: '新中式古都风 · 复古文艺', lookTitle: '新中式古都 LOOK',
    lookDesc: '立领新中式外套 + 酒红驼色调，古寺金黄银杏树下，东方氛围拉满。',
    tags: ['古寺银杏', '新中式', '酒红驼色'],
    coords: [108.95, 34.27],
    image: './assets/xian.jpg', look: './assets/look_xian.jpg'
  },
  {
    id: 'zhangjiajie', name: '张家界', region: '华中 · 湖南', shortAddress: '湖南·张家界',
    address: '湖南省张家界市武陵源风景区', window: '10月—11月上旬', monthChip: '10-11月',
    temp: '14°C', weather: 'leaf', vibe: '云海里走出大片',
    scene: '峰林 · 云海 · 秋林',
    summary: '山间湿润多雾、早晚转凉，登高久站需要保暖，山系机能深色调最贴峰林气质。',
    advice: '山系机能风 · 深色利落', lookTitle: '山系机能 LOOK',
    lookDesc: '冲锋衣 + 针织层叠 + 工装裤，深色利落，云海峰林前探索感十足。',
    tags: ['峰林云海', '山系机能', '深色层叠'],
    coords: [110.48, 29.34],
    image: './assets/zhangjiajie.jpg', look: './assets/look_zhangjiajie.jpg'
  },
  {
    id: 'chongqing', name: '重庆', region: '西南 · 重庆', shortAddress: '重庆·山城',
    address: '重庆市渝中区山城步道 / 洪崖洞一带', window: '11月—12月上旬', monthChip: '11-12月',
    temp: '17°C', weather: 'glow', vibe: '山城自带氛围感',
    scene: '山城层叠 · 两江暮色 · 暖调街景',
    summary: '秋冬温和湿润、体感舒适，山城阶梯与街景适合时髦慵懒的街拍穿法。',
    advice: '都市街拍风 · 慵懒高级', lookTitle: '都市街拍 LOOK',
    lookDesc: '风衣 + 针织 + 阔腿裤，慵懒利落，山城阶梯里 street 感拉满。',
    tags: ['山城街景', '都市街拍', '风衣阔腿'],
    coords: [106.55, 29.56],
    image: './assets/chongqing.jpg', look: './assets/look_chongqing.jpg'
  },
  {
    id: 'hangzhou', name: '杭州', region: '华东 · 浙江', shortAddress: '浙江·杭州',
    address: '浙江省杭州市西湖北山街 / 满觉陇', window: '11月中下旬', monthChip: '11月',
    temp: '16°C', weather: 'leaf', vibe: '西湖边的温柔梧桐',
    scene: '梧桐金黄 · 西湖远山 · 江南秋光',
    summary: '江南秋日温润、早晚微凉，奶咖针织与长大衣在梧桐林荫里温柔又高级。',
    advice: '江南温柔风 · 奶咖针织', lookTitle: '江南温柔 LOOK',
    lookDesc: '奶咖针织 + 长大衣 / 半裙，金黄梧桐道上，文艺优雅。',
    tags: ['梧桐金黄', '江南温柔', '奶咖针织'],
    coords: [120.15, 30.27],
    image: './assets/hangzhou.jpg', look: './assets/look_hangzhou.jpg'
  },
  {
    id: 'conghua', name: '从化', region: '华南 · 广东', shortAddress: '广东·从化',
    address: '广东省广州市从化区石门国家森林公园', window: '12月—次年1月', monthChip: '12-1月',
    temp: '20°C', weather: 'glow', vibe: '岭南暖秋不用裹',
    scene: '流溪红叶 · 暖黄山谷 · 岭南暖秋',
    summary: '岭南暖秋来得晚、白天温暖，轻薄针织外搭一件风衣就够，色彩可以明快起来。',
    advice: '岭南暖秋风 · 轻薄明快', lookTitle: '岭南暖秋 LOOK',
    lookDesc: '轻薄针织 + 风衣外搭 + 明快色裤装，红叶溪谷里明媚出片。',
    tags: ['流溪红叶', '岭南暖秋', '轻薄明快'],
    coords: [113.74, 23.74],
    image: './assets/conghua.jpg', look: './assets/look_conghua.jpg'
  },
  {
    id: 'mohe', name: '漠河', region: '极北 · 黑龙江', shortAddress: '黑龙江·漠河',
    address: '黑龙江省大兴安岭地区漠河市北极村', window: '9月下旬—10月', monthChip: '9-10月',
    temp: '-2°C', weather: 'snow', vibe: '最北的雪先到了',
    scene: '北极村 · 白桦初雪 · 极北清冷',
    summary: '中国最北早早入冬，初雪与白桦交织，厚羽绒与毛呢叠穿是极北里最暖的镜头。',
    advice: '极北保暖风 · 厚质叠穿', lookTitle: '极北保暖 LOOK',
    lookDesc: '厚羽绒 / 毛呢大衣 + 围巾叠穿，深色保暖，初雪白桦前格外有氛围。',
    tags: ['极北初雪', '保暖叠穿', '毛呢羽绒'],
    coords: [122.37, 53.00],
    image: './assets/mohe.jpg', look: './assets/look_mohe.jpg'
  },
  {
    id: 'taihang', name: '太行山', region: '华北 · 山西', shortAddress: '山西·太行山',
    address: '山西省长治市壶关县太行山大峡谷', window: '10月中下旬', monthChip: '10月',
    temp: '11°C', weather: 'leaf', vibe: '硬朗山系也能美',
    scene: '红岩峡谷 · 层林尽染 · 雄浑山势',
    summary: '北方山区秋来早、早晚偏凉，山地旅行风夹克与针织马甲衬得起雄浑红岩峡谷。',
    advice: '山地旅行风 · 硬朗有型', lookTitle: '山地旅行 LOOK',
    lookDesc: '旅行夹克 + 针织马甲 + 工装裤，硬朗有型，红叶峡谷前张力十足。',
    tags: ['红岩峡谷', '山地旅行', '硬朗夹克'],
    coords: [113.65, 36.05],
    image: './assets/taihang.jpg', look: './assets/look_taihang.jpg'
  },
  {
    id: 'qiandongnan', name: '黔东南', region: '西南 · 贵州', shortAddress: '贵州·黔东南',
    address: '贵州省黔东南州西江千户苗寨', window: '10月—11月', monthChip: '10-11月',
    temp: '18°C', weather: 'glow', vibe: '梯田金里的故事感',
    scene: '苗寨吊脚楼 · 金黄梯田 · 远山薄雾',
    summary: '黔东南秋日温和多雾、体感舒适，复古暖色与民族编织元素在梯田苗寨里很有故事。',
    advice: '复古民族风 · 暖色编织', lookTitle: '复古民族 LOOK',
    lookDesc: '复古暖色外套 + 编织元素 + 阔腿裤，金黄梯田苗寨间温暖有故事。',
    tags: ['苗寨梯田', '复古民族', '暖色编织'],
    coords: [108.18, 26.49],
    image: './assets/qiandongnan.jpg', look: './assets/look_qiandongnan.jpg'
  }
];

const MAP_PROJECTION = { minx: 0.9075712110370514, miny: 0.05238381856676326, scale: 534.7697265801904, width: 971, height: 640, padding: 0 };

const chinaMap = document.getElementById('chinaMap');
const detailScreen = document.getElementById('detailScreen');
const scenicImage = document.getElementById('scenicImage');
const sceneBadge = document.getElementById('sceneBadge');
const sceneCaption = document.getElementById('sceneCaption');
const lookImage = document.getElementById('lookImage');
const lookTitle = document.getElementById('lookTitle');
const lookDesc = document.getElementById('lookDesc');
const detailRegion = document.getElementById('detailRegion');
const detailTitle = document.getElementById('detailTitle');
const detailTime = document.getElementById('detailTime');
const detailSummary = document.getElementById('detailSummary');
const detailTags = document.getElementById('detailTags');
const detailAddress = document.getElementById('detailAddress');
const detailWindow = document.getElementById('detailWindow');
const detailAdvice = document.getElementById('detailAdvice');
const commerceProducts = document.getElementById('commerceProducts');
const backBtn = document.getElementById('backBtn');
const detailBackdrop = document.querySelector('.detail-backdrop');
let mapRunner;
let runnerCurrent = { x: 486, y: 228 };
let runnerMoving = false;

function projectPoint(lon, lat) {
  const x = lon * Math.PI / 180;
  const safeLat = Math.max(Math.min(lat, 85), -85);
  const y = Math.log(Math.tan(Math.PI / 4 + (safeLat * Math.PI / 180) / 2));
  const px = (x - MAP_PROJECTION.minx) * MAP_PROJECTION.scale + MAP_PROJECTION.padding;
  const py = MAP_PROJECTION.height - ((y - MAP_PROJECTION.miny) * MAP_PROJECTION.scale + MAP_PROJECTION.padding);
  return [px, py];
}

/* ── TOP12 白名单：地域分布均匀、代表性最强的 12 个目的地 ──
   仅这 12 个会在地图上渲染并按此顺序编号；其余数据保留但不展示。 */
const TOP12 = [
  'kanas', 'mohe', 'changbaishan', 'xiangshan',
  'xian', 'jiuzhaigou', 'linzhi', 'daocheng', 'tengchong',
  'zhangjiajie', 'hangzhou', 'conghua'
];

/* 实际参与渲染与编号的目的地（按 TOP12 顺序） */
const VISIBLE = TOP12
  .map(id => DESTINATIONS.find(d => d.id === id))
  .filter(Boolean);

const PROVINCE_TRAVEL_ICONS = [
  { name: '新疆', icon: '🐫', vibe: '丝路驼影', coords: [86.6, 41.8] },
  { name: '西藏', icon: '🏔️', vibe: '雪山圣境', coords: [88.7, 31.2] },
  { name: '青海', icon: '💧', vibe: '高原蓝湖', coords: [96.0, 35.7] },
  { name: '甘肃', icon: '🌈', vibe: '丹霞丝路', coords: [103.6, 38.4] },
  { name: '宁夏', icon: '🍇', vibe: '贺兰酒庄', coords: [106.1, 37.3] },
  { name: '内蒙古', icon: '⛺', vibe: '草原毡房', coords: [112.2, 43.7] },
  { name: '黑龙江', icon: '❄️', vibe: '极北雪林', coords: [128.0, 47.7] },
  { name: '吉林', icon: '🌋', vibe: '长白天池', coords: [126.2, 43.7] },
  { name: '辽宁', icon: '⛵', vibe: '海岸假日', coords: [122.6, 41.5] },
  { name: '北京', icon: '🏯', vibe: '古都红墙', coords: [116.4, 40.2] },
  { name: '天津', icon: '🌉', vibe: '海河桥影', coords: [117.3, 39.1] },
  { name: '河北', icon: '🧱', vibe: '长城山海', coords: [115.2, 38.4] },
  { name: '山西', icon: '🏮', vibe: '古城灯火', coords: [112.4, 37.8] },
  { name: '陕西', icon: '🥁', vibe: '秦风鼓点', coords: [108.9, 34.3] },
  { name: '河南', icon: '🥋', vibe: '嵩山武韵', coords: [113.6, 34.7] },
  { name: '山东', icon: '🌊', vibe: '海岱日出', coords: [118.0, 36.4] },
  { name: '江苏', icon: '🪷', vibe: '园林水岸', coords: [119.4, 32.9] },
  { name: '上海', icon: '🏙️', vibe: '摩登天际', coords: [121.5, 31.2] },
  { name: '浙江', icon: '🍵', vibe: '西湖茶香', coords: [120.2, 29.2] },
  { name: '安徽', icon: '⛰️', vibe: '徽州黄山', coords: [117.2, 31.6] },
  { name: '福建', icon: '🏯', vibe: '土楼山海', coords: [118.2, 26.1] },
  { name: '江西', icon: '🌾', vibe: '晒秋梯田', coords: [115.7, 27.7] },
  { name: '湖北', icon: '🪽', vibe: '江城鹤影', coords: [112.5, 30.9] },
  { name: '湖南', icon: '🪨', vibe: '奇峰云海', coords: [111.8, 27.7] },
  { name: '重庆', icon: '🚠', vibe: '山城索道', coords: [107.9, 30.1] },
  { name: '四川', icon: '🐼', vibe: '熊猫雪山', coords: [102.9, 30.6] },
  { name: '贵州', icon: '🌉', vibe: '苗岭吊桥', coords: [106.7, 26.8] },
  { name: '云南', icon: '🌾', vibe: '云上梯田', coords: [101.5, 25.0] },
  { name: '广西', icon: '🛶', vibe: '漓江竹筏', coords: [108.7, 23.8] },
  { name: '广东', icon: '🌴', vibe: '湾区椰影', coords: [113.5, 23.3] },
  { name: '海南', icon: '🥥', vibe: '海岛椰风', coords: [109.7, 19.2] },
  { name: '香港', icon: '🚋', vibe: '港岛叮叮', coords: [114.2, 22.3] },
  { name: '澳门', icon: '🎠', vibe: '南欧街角', coords: [113.6, 22.2] },
  { name: '台湾', icon: '🌺', vibe: '海岛花路', coords: [121.0, 23.8] }
];

/* 迷你杂志卡尺寸（viewBox 900×640 单位）—— 悬浮贴点位、地图标注式 */
const CARD_W = 98;
const CARD_H = 126;
const VB_W = MAP_PROJECTION.width;
const VB_H = MAP_PROJECTION.height;
/* 地图陆地内容中心（中国轮廓质心，新底图含周边国家）—— 卡片初始向"远离中心"方向外推 */
const CONTENT_CENTER = [484, 301];
const OUT_OFFSET = 66;   // 点位→卡片初始外推距离：优先贴近目的地坐标，仅必要时外推
const CARD_GAP = 18;      // 卡片之间的最小间距（保证呼吸感）
const ITERATIONS = 240;   // 碰撞避让迭代次数

/* ── 卡片悬浮布局：算法生成，不手写坐标 ──
   1) 初始：把点位沿"远离地图内容中心"的方向外推 OUT_OFFSET，作为卡片中心；
   2) 迭代式排斥：相互重叠的卡片沿连心线方向互相推开（留 CARD_GAP 间距），
      并辅以一根弱弹簧把卡片拉回各自锚点，保证引线短、不乱跑；
   3) 全程把卡片中心钳制在画布 [0,900]×[0,640] 内（可略微出血到边缘）。 */
const MANUAL_CARD_POS = {
  kanas: { x: 238, y: 156 },
  mohe: { x: 715, y: 74 },
  changbaishan: { x: 762, y: 206 },
  xiangshan: { x: 603, y: 242 },
  xian: { x: 520, y: 326 },
  jiuzhaigou: { x: 382, y: 326 },
  linzhi: { x: 330, y: 438 },
  daocheng: { x: 482, y: 494 },
  tengchong: { x: 328, y: 572 },
  zhangjiajie: { x: 568, y: 458 },
  hangzhou: { x: 702, y: 430 },
  conghua: { x: 674, y: 556 }
};

function layoutCards() {
  const pos = {};
  VISIBLE.forEach(d => {
    const [px, py] = projectPoint(d.coords[0], d.coords[1]);
    const manual = MANUAL_CARD_POS[d.id] || { x: px, y: py };
    const c = { id: d.id, px, py, x: manual.x, y: manual.y, ax: manual.x, ay: manual.y };
    c.x = Math.max(CARD_W / 2, Math.min(VB_W - CARD_W / 2, c.x));
    c.y = Math.max(CARD_H / 2, Math.min(VB_H - CARD_H / 2, c.y));
    pos[c.id] = c;
  });
  return pos;
}

const CARD_POS = layoutCards();

function buildPointMarkup(item) {
  const [x, y] = projectPoint(item.coords[0], item.coords[1]);
  const left = (x / MAP_PROJECTION.width * 100).toFixed(2);
  const top = (y / MAP_PROJECTION.height * 100).toFixed(2);
  const card = CARD_POS[item.id];
  let side = 'top';
  if (card) {
    const dx = card.x - card.px;
    const dy = card.y - card.py;
    if (Math.abs(dx) > Math.abs(dy)) {
      side = dx > 0 ? 'left' : 'right';
    } else {
      side = dy > 0 ? 'top' : 'bottom';
    }
  }
  return `<button class="map-pin pin-side-${side}" data-id="${item.id}" style="left:${left}%;top:${top}%;" aria-label="${item.name}"><span class="pin-dot"></span><span class="pin-label">${item.name}</span></button>`;
}

/* 引线层：从每个点位的编号钉到对应卡片中心，画一条短虚线（SVG，低透明度）。
   该 SVG 铺满 .map-shell，pointer-events:none，z-index 介于底图与卡片之间。
   stroke 等样式直接写成属性，避免被外层样式影响、保证稳定渲染。 */
function buildLeaderLines() {
  const parts = VISIBLE.map(item => {
    const c = CARD_POS[item.id];
    if (!c) return '';
    const x1 = c.px.toFixed(1);
    const y1 = c.py.toFixed(1);
    const x2 = c.x.toFixed(1);
    const y2 = c.y.toFixed(1);
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#8a4a28" stroke-width="1.6" stroke-dasharray="6 5" stroke-linecap="round" opacity="0.62" /><circle cx="${x1}" cy="${y1}" r="2.4" fill="#8a4a28" opacity="0.7" />`;
  }).join('');
  return `<svg class="map-leaders" viewBox="0 0 ${VB_W} ${VB_H}" preserveAspectRatio="none" aria-hidden="true">${parts}</svg>`;
}

function buildProvinceIcons() {
  return PROVINCE_TRAVEL_ICONS.map((item, index) => {
    const [x, y] = projectPoint(item.coords[0], item.coords[1]);
    const safeX = Math.max(18, Math.min(VB_W - 18, x));
    const safeY = Math.max(18, Math.min(VB_H - 18, y));
    const left = (safeX / VB_W * 100).toFixed(2);
    const top = (safeY / VB_H * 100).toFixed(2);
    const delay = ((index % 9) * 0.16).toFixed(2);
    const scale = (0.82 + ((index % 5) * 0.035)).toFixed(2);
    return `
      <span class="province-landmark" style="left:${left}%;top:${top}%;--delay:${delay}s;--scale:${scale};" aria-label="${item.name}代表旅行元素：${item.vibe}" title="${item.name} · ${item.vibe}">
        <i class="landmark-glow"></i>
        <b>${item.icon}</b>
      </span>
    `;
  }).join('');
}

function buildAutumnAtmosphere() {
  return `
    <div class="terrain-ridges" aria-hidden="true">
      <i class="ridge ridge-west"></i>
      <i class="ridge ridge-north"></i>
      <i class="ridge ridge-south"></i>
      <i class="ridge ridge-east"></i>
    </div>
    <div class="map-fog-layer" aria-hidden="true">
      <i class="fog fog-a"></i>
      <i class="fog fog-b"></i>
      <i class="fog fog-c"></i>
      <i class="fog fog-d"></i>
    </div>
    <div class="living-map-particles" aria-hidden="true">
      <i style="--x:18%;--y:22%;--d:0s;--r:-18deg;">🍂</i>
      <i style="--x:33%;--y:16%;--d:-1.2s;--r:12deg;">✨</i>
      <i style="--x:55%;--y:19%;--d:-2.1s;--r:22deg;">🍁</i>
      <i style="--x:76%;--y:28%;--d:-0.7s;--r:-8deg;">🍂</i>
      <i style="--x:23%;--y:62%;--d:-2.8s;--r:18deg;">✨</i>
      <i style="--x:48%;--y:70%;--d:-1.8s;--r:-22deg;">🍁</i>
      <i style="--x:69%;--y:67%;--d:-3.2s;--r:10deg;">🍂</i>
      <i style="--x:84%;--y:52%;--d:-2.4s;--r:28deg;">✨</i>
    </div>
  `;
}

/* 气象特效粒子：高寒飘雪花/冰晶、中温落叶、暖秋金色光晕 */
function buildWeatherLayer(weather) {
  if (weather === 'snow') {
    return `<span class="wx wx-snow">${'<i></i>'.repeat(7)}</span>`;
  }
  if (weather === 'leaf') {
    return `<span class="wx wx-leaf">${'<i></i>'.repeat(5)}</span>`;
  }
  return `<span class="wx wx-glow"></span>`;
}

/* 迷你杂志卡（纯 HTML 绝对定位，避免 SVG foreignObject 的图层合成问题）：
   LOOK 大片作主图 + 情绪短句 + 气温 + 气象特效 + 与点位对应的编号 */
function buildMiniCard(item) {
  const pos = CARD_POS[item.id];
  if (!pos) return '';
  // pos.x / pos.y 为卡片中心（viewBox 单位）→ 转左上角百分比定位
  const left = ((pos.x - CARD_W / 2) / VB_W * 100).toFixed(3);
  const top = ((pos.y - CARD_H / 2) / VB_H * 100).toFixed(3);
  const w = (CARD_W / VB_W * 100).toFixed(3);
  const h = (CARD_H / VB_H * 100).toFixed(3);
  return `
    <div class="mini-card-pos" style="left:${left}%;top:${top}%;width:${w}%;height:${h}%;">
      <div class="mini-card wx-on-${item.weather}" data-open-second="${item.id}">
        <div class="mini-photo">
          <img class="mini-look-img" src="${item.look}" alt="${item.name} LOOK" loading="lazy" />
          ${buildWeatherLayer(item.weather)}
          <span class="mini-chips">
            <span class="mini-month">${item.monthChip}</span>
            <span class="mini-temp">🌡️${item.temp}</span>
          </span>
          <span class="mini-scenic"><img src="${item.image}" alt="${item.name} 秋景" loading="lazy" /></span>
          <span class="mini-caption">
            <i class="mini-vibe">${item.vibe}</i>
            <i class="mini-name">${item.name}</i>
          </span>
        </div>
        <div class="mini-foot">
          <span class="mini-go">🔥 100万人在看</span>
        </div>
      </div>
    </div>
  `;
}

function buildMapRunner() {
  const left = (runnerCurrent.x / VB_W * 100).toFixed(3);
  const top = (runnerCurrent.y / VB_H * 100).toFixed(3);
  return `
    <div class="map-runner" id="mapRunner" style="left:${left}%;top:${top}%;" aria-hidden="true">
      <span class="runner-glow"></span>
      <span class="runner-emoji" data-stand="🧍‍♀️" data-run="🏃‍♀️">🧍‍♀️</span>
    </div>
  `;
}

function setRunnerPosition(x, y) {
  if (!mapRunner) return;
  runnerCurrent = { x, y };
  mapRunner.style.left = `${(x / VB_W * 100).toFixed(3)}%`;
  mapRunner.style.top = `${(y / VB_H * 100).toFixed(3)}%`;
}

function animateRunnerTo(item) {
  return new Promise(resolve => {
    if (!mapRunner) {
      resolve();
      return;
    }
    const [targetX, targetY] = projectPoint(item.coords[0], item.coords[1]);
    const startX = runnerCurrent.x;
    const startY = runnerCurrent.y;
    const dx = targetX - startX;
    const dy = targetY - startY;
    const distance = Math.hypot(dx, dy);
    const duration = Math.min(1500, Math.max(820, distance * 2.4));
    const arc = Math.min(92, Math.max(36, distance * 0.16));
    const controlX = (startX + targetX) / 2;
    const controlY = (startY + targetY) / 2 - arc;
    const startTime = performance.now();
    const runnerEmoji = mapRunner.querySelector('.runner-emoji');
    if (runnerEmoji) runnerEmoji.textContent = runnerEmoji.dataset.run;
    mapRunner.classList.add('is-running');
    mapRunner.style.setProperty('--runner-direction', dx < 0 ? '-1' : '1');

    function step(now) {
      const t = Math.min(1, (now - startTime) / duration);
      const ease = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      const x = (1 - ease) * (1 - ease) * startX + 2 * (1 - ease) * ease * controlX + ease * ease * targetX;
      const y = (1 - ease) * (1 - ease) * startY + 2 * (1 - ease) * ease * controlY + ease * ease * targetY;
      setRunnerPosition(x, y);
      if (t < 1) {
        requestAnimationFrame(step);
        return;
      }
      setRunnerPosition(targetX, targetY);
      mapRunner.classList.remove('is-running');
      if (runnerEmoji) runnerEmoji.textContent = runnerEmoji.dataset.stand;
      mapRunner.classList.add('has-arrived');
      window.setTimeout(() => {
        mapRunner.classList.remove('has-arrived');
        resolve();
      }, 180);
    }
    requestAnimationFrame(step);
  });
}

async function travelToDetail(id) {
  if (runnerMoving) return;
  const item = DESTINATIONS.find(destination => destination.id === id);
  if (!item) return;
  runnerMoving = true;
  await animateRunnerTo(item);
  runnerMoving = false;
  openDetail(id);
}

function renderMap() {
  const pointsMarkup = VISIBLE.map(buildPointMarkup).join('');
  const cards = VISIBLE.map(buildMiniCard).join('');
  const leaders = buildLeaderLines();
  const landmarks = buildProvinceIcons();
  const atmosphere = buildAutumnAtmosphere();

  chinaMap.innerHTML = `
    <div class="map-shell">
      <img class="map-base" src="./assets/china_base.svg" alt="中国地图" />
      ${atmosphere}
      ${leaders}
      <div class="province-landmarks">${landmarks}</div>
      ${buildMapRunner()}
      <div class="map-cards-html">${cards}</div>
      <div class="map-pins">${pointsMarkup}</div>
    </div>
  `;

  mapRunner = document.getElementById('mapRunner');

  chinaMap.querySelectorAll('.mini-card').forEach(card => {
    card.addEventListener('click', () => travelToDetail(card.dataset.openSecond));
  });
  chinaMap.querySelectorAll('.map-pin').forEach(point => {
    point.addEventListener('click', () => travelToDetail(point.dataset.id));
  });
}

function buildProducts(itemId) {
  const productMap = {
    hangzhou: [
      { name: '秋季新款奶咖针织衫', price: '¥129', image: './assets/product_hangzhou_knit.png' },
      { name: '气质通勤羊毛长大衣', price: '¥399', image: './assets/product_hangzhou_coat.png' },
      { name: '高腰复古A字半身裙', price: '¥169', image: './assets/product_hangzhou_skirt.png' }
    ],
    kanas: [
      { name: '金秋厚羽绒服', price: '¥459', image: './assets/product_kanas_1.png' },
      { name: '白桦毛绒外套', price: '¥299', image: './assets/product_kanas_2.png' },
      { name: '焦糖秋冬短靴', price: '¥239', image: './assets/product_kanas_3.png' }
    ],
    mohe: [
      { name: '极北保暖羽绒服', price: '¥499', image: './assets/product_mohe_1.png' },
      { name: '冰雾厚围巾', price: '¥99', image: './assets/product_mohe_2.png' },
      { name: '白色雪地靴', price: '¥269', image: './assets/product_mohe_3.png' }
    ],
    changbaishan: [
      { name: '山系专业冲锋衣', price: '¥399', image: './assets/product_changbaishan_1.png' },
      { name: '户外保暖抓绒衫', price: '¥189', image: './assets/product_changbaishan_2.png' },
      { name: '机能登山裤', price: '¥219', image: './assets/product_changbaishan_3.png' }
    ],
    zhangye: [
      { name: '丹霞驼色大衣', price: '¥429', image: './assets/product_zhangye_1.png' },
      { name: '大地格纹围巾', price: '¥89', image: './assets/product_zhangye_2.png' },
      { name: '咖色宽腿裤', price: '¥179', image: './assets/product_zhangye_3.png' }
    ],
    jiuzhaigou: [
      { name: '童话彩色针织', price: '¥159', image: './assets/product_jiuzhaigou_1.png' },
      { name: '湖蓝拼色外套', price: '¥299', image: './assets/product_jiuzhaigou_2.png' },
      { name: '撞色半身裙', price: '¥169', image: './assets/product_jiuzhaigou_3.png' }
    ],
    daocheng: [
      { name: '高原专业冲锋衣', price: '¥459', image: './assets/product_daocheng_1.png' },
      { name: '户外速干裤', price: '¥199', image: './assets/product_daocheng_2.png' },
      { name: '机能户外帽', price: '¥89', image: './assets/product_daocheng_3.png' }
    ],
    linzhi: [
      { name: '雪山羊绒大衣', price: '¥599', image: './assets/product_linzhi_1.png' },
      { name: '奶白高领毛衣', price: '¥229', image: './assets/product_linzhi_2.png' },
      { name: '烟灰色直筒裤', price: '¥199', image: './assets/product_linzhi_3.png' }
    ],
    xian: [
      { name: '经典卡其风衣', price: '¥399', image: './assets/product_xian_1.png' },
      { name: '黑色高领打底', price: '¥119', image: './assets/product_xian_2.png' },
      { name: '复古直筒裤', price: '¥189', image: './assets/product_xian_3.png' }
    ],
    zhangjiajie: [
      { name: '云海轻薄羽绒', price: '¥359', image: './assets/product_zhangjiajie_1.png' },
      { name: '山雾抓绒衫', price: '¥179', image: './assets/product_zhangjiajie_2.png' },
      { name: '黑色运动裤', price: '¥159', image: './assets/product_zhangjiajie_3.png' }
    ],
    tengchong: [
      { name: '银杏米色毛衣', price: '¥169', image: './assets/product_tengchong_1.png' },
      { name: '暖棕格纹外套', price: '¥289', image: './assets/product_tengchong_2.png' },
      { name: '米咖阔腿裤', price: '¥189', image: './assets/product_tengchong_3.png' }
    ],
    conghua: [
      { name: '岭南薄针织开衫', price: '¥139', image: './assets/product_conghua_1.png' },
      { name: '奶白通勤衬衫', price: '¥129', image: './assets/product_conghua_2.png' },
      { name: '卡其休闲裤', price: '¥159', image: './assets/product_conghua_3.png' }
    ]
  };
  const products = productMap[itemId] || [];
  return products.map(product => `
    <article class="commerce-product-card">
      <img src="${product.image}" alt="${product.name}" loading="lazy" />
      <div class="commerce-product-copy">
        <strong>${product.name}</strong>
        <span>${product.price}</span>
      </div>
    </article>
  `).join('');
}

function fillSecondLayer(item) {
  scenicImage.style.backgroundImage =
    `linear-gradient(180deg, rgba(26,18,12,0.04), rgba(26,18,12,0.34)), url('${item.image}')`;
  sceneBadge.textContent = item.shortAddress;
  sceneCaption.textContent = item.scene;
  lookImage.src = item.look;
  lookImage.alt = `${item.name} ${item.lookTitle}`;
  lookTitle.textContent = item.lookTitle;
  lookDesc.textContent = item.lookDesc;
  detailRegion.textContent = '';
  detailRegion.classList.add('hidden');
  detailTitle.textContent = item.shortAddress;
  detailTime.textContent = `${item.window} · 🌡️${item.temp}`;
  detailSummary.textContent = item.summary;
  detailTags.innerHTML = item.tags.map(tag => `<span>${tag}</span>`).join('');
  detailAddress.textContent = item.address;
  detailWindow.textContent = item.window;
  detailAdvice.textContent = item.advice;

  const hasProducts = buildProducts(item.id).trim() !== '';
  commerceProducts.classList.toggle('hidden', !hasProducts);
  commerceProducts.innerHTML = hasProducts ? buildProducts(item.id) : '';
}

function openDetail(id) {
  const item = DESTINATIONS.find(destination => destination.id === id);
  if (!item) return;
  fillSecondLayer(item);
  detailScreen.classList.remove('hidden');
  detailScreen.scrollTop = 0;
  document.body.style.overflow = 'hidden';
}

function closeDetail() {
  detailScreen.classList.add('hidden');
  document.body.style.overflow = '';
}

backBtn.addEventListener('click', closeDetail);
detailBackdrop.addEventListener('click', closeDetail);
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !detailScreen.classList.contains('hidden')) {
    closeDetail();
  }
});

renderMap();
