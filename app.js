/* =====================================================================
   الشاشة التفاعلية — الشركة الوطنية للخدمات الزراعية
   كل النصوص في كائن CONTENT بالأسفل؛ عدّلها من هنا مباشرة.
   ===================================================================== */

const IDLE_SECONDS = 90;          // الرجوع لشاشة البداية بعد هذه المدة بدون لمس
const IDLE_WARN_SECONDS = 10;     // التنبيه قبل الرجوع بعدد ثوانٍ

/* ---------- أيقونات ---------- */
const I = {
  arrow: '<svg viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6"/></svg>',
  services: '<svg viewBox="0 0 24 24"><path d="M12 22V12"/><path d="M12 12C12 7 8 4 3 4c0 5 4 8 9 8z"/><path d="M12 15c0-4 3-7 9-7 0 5-4 7-9 7z"/></svg>',
  works: '<svg viewBox="0 0 24 24"><path d="M8 21h8M12 17v4"/><path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/></svg>',
  about: '<svg viewBox="0 0 24 24"><path d="M3 21h18"/><path d="M5 21V8l7-4 7 4v13"/><path d="M9 21v-5h6v5"/><path d="M9 11h.01M15 11h.01"/></svg>',
  app: '<svg viewBox="0 0 24 24"><rect x="6" y="2" width="12" height="20" rx="3"/><path d="M11 18h2"/></svg>',
  market: '<svg viewBox="0 0 24 24"><path d="M3 9l2-5h14l2 5"/><path d="M3 9h18v2a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0z"/><path d="M5 13v8h14v-8"/><path d="M10 21v-5h4v5"/></svg>',
  numbers: '<svg viewBox="0 0 24 24"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
  tap: '<svg viewBox="0 0 24 24"><path d="M9 11V5a2 2 0 0 1 4 0v5"/><path d="M13 10a2 2 0 0 1 4 0v1a2 2 0 0 1 3 1.7V15a7 7 0 0 1-7 7h-1a6 6 0 0 1-5-2.7L4 15a2 2 0 0 1 3-2.5L9 14"/></svg>',
  check: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/></svg>',
  eye: '<svg viewBox="0 0 24 24"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
  target: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>',
  heart: '<svg viewBox="0 0 24 24"><path d="M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11z"/></svg>',
  cow: '<svg viewBox="0 0 24 24"><path d="M6 8c-2 0-3-2-3-3M18 8c2 0 3-2 3-3"/><path d="M6 8h12v6a6 6 0 0 1-12 0z"/><path d="M9 15h.01M15 15h.01M10 18h4"/></svg>',
  plant: '<svg viewBox="0 0 24 24"><path d="M12 22V10"/><path d="M12 10C12 6 9 3 4 3c0 5 3 7 8 7z"/><path d="M12 14c0-4 3-6 8-6 0 4-3 6-8 6z"/><path d="M7 22h10"/></svg>',
  fish: '<svg viewBox="0 0 24 24"><path d="M2 12s4-6 11-6c4 0 7 3 8 6-1 3-4 6-8 6-7 0-11-6-11-6z"/><path d="M2 12l-0 0M5 9l-3-3v12l3-3"/><path d="M16 11h.01"/></svg>',
  build: '<svg viewBox="0 0 24 24"><path d="M3 21h18M5 21V9l7-5 7 5v12"/><path d="M9 13h6M9 17h6"/></svg>',
  gear: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/></svg>',
  star: '<svg viewBox="0 0 24 24"><path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z"/></svg>',
  map: '<svg viewBox="0 0 24 24"><path d="M12 21s-7-6-7-12a7 7 0 0 1 14 0c0 6-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>',
  grid: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
  doc: '<svg viewBox="0 0 24 24"><path d="M14 3H6v18h12V7z"/><path d="M14 3v4h4M9 12h6M9 16h6"/></svg>',
  user: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
  briefcase: '<svg viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V4h6v3M3 12h18"/></svg>',
  bolt: '<svg viewBox="0 0 24 24"><path d="M13 2L4 14h7l-1 8 9-12h-7z"/></svg>',
  shield: '<svg viewBox="0 0 24 24"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/></svg>',
  megaphone: '<svg viewBox="0 0 24 24"><path d="M3 11v2a1 1 0 0 0 1 1h3l6 4V6L7 10H4a1 1 0 0 0-1 1z"/><path d="M17 8a5 5 0 0 1 0 8"/></svg>',
  users: '<svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0 1 14 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M22 20a7 7 0 0 0-4-6.3"/></svg>',
  monitor: '<svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
  bird: '<svg viewBox="0 0 24 24"><path d="M16 7h.01"/><path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.3-2.3L2 20"/><path d="M20 7l2 .5-2 .5"/></svg>',
  meat: '<svg viewBox="0 0 24 24"><path d="M15 4a6 6 0 0 1 5 7c-1 4-6 6-10 7-3 1-6-1-6-4 0-2 1-3 3-4l2-1c2-1 2-5 6-5z"/><circle cx="7" cy="17" r="1.5"/></svg>',
  apple: '<svg viewBox="0 0 24 24"><path d="M12 7c-2-2-7-2-7 4 0 5 3 10 7 9 4 1 7-4 7-9 0-6-5-6-7-4z"/><path d="M12 7c0-2 1-4 3-4"/></svg>',
  fire: '<svg viewBox="0 0 24 24"><path d="M12 22c4 0 7-3 7-7 0-5-5-7-5-12-3 2-4 5-4 7-1-1-2-2-2-4-2 2-3 5-3 9 0 4 3 7 7 7z"/></svg>',
  wheat: '<svg viewBox="0 0 24 24"><path d="M12 22V8"/><path d="M12 8c-2 0-4-2-4-5 2 0 4 2 4 5zM12 8c2 0 4-2 4-5-2 0-4 2-4 5z"/><path d="M12 13c-2 0-4-2-4-4 2 0 4 2 4 4zM12 13c2 0 4-2 4-4-2 0-4 2-4 4z"/><path d="M12 18c-2 0-4-2-4-4 2 0 4 2 4 4zM12 18c2 0 4-2 4-4-2 0-4 2-4 4z"/></svg>',
  palm: '<svg viewBox="0 0 24 24"><path d="M12 22c0-6 0-10-1-13"/><path d="M11 9C9 5 5 5 3 7M11 9c2-4 6-4 8-2M11 9c-4 0-6 3-6 6M11 9c4 0 7 2 7 6"/><path d="M8 22h8"/></svg>',
  steth: '<svg viewBox="0 0 24 24"><path d="M6 3v6a5 5 0 0 0 10 0V3"/><path d="M11 14v2a5 5 0 0 0 10 0v-2"/><circle cx="21" cy="12" r="2"/></svg>',
  syringe: '<svg viewBox="0 0 24 24"><path d="M18 2l4 4M20 4l-9.5 9.5M15 5l4 4M7.5 12.5l4 4M14 6l-9 9v4h4l9-9"/><path d="M2 22l3-3"/></svg>',
  calendar: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4M8 14h3M8 17h6"/></svg>',
  box: '<svg viewBox="0 0 24 24"><path d="M21 8l-9-5-9 5v8l9 5 9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/></svg>',
  horse: '<svg viewBox="0 0 24 24"><path d="M5 21c0-5 2-8 5-10L8 6l4 2 3-4 2 3c2 1 3 3 3 5l-2 1-3-1-2 3v6"/><path d="M15 9h.01"/></svg>',
  port: '<svg viewBox="0 0 24 24"><path d="M2 20h20"/><path d="M4 20V10l8-6 8 6v10"/><path d="M8 20v-6h8v6"/></svg>',
  flask: '<svg viewBox="0 0 24 24"><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3"/><path d="M7 15h10"/></svg>',
  phone: '<svg viewBox="0 0 24 24"><path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2"/></svg>',
};

/* ---------- المحتوى (من ملف العرض "الشاشة التفاعلية - نسخة S") ---------- */
const CONTENT = {
  company: 'الشركة الوطنية للخدمات الزراعية',
  tagline: 'خدمات متكاملة لقطاع زراعي مستدام',

  // شريط التواصل في شاشة البداية
  contact: {
    label: 'المنصات الرسمية',
    handle: 'agriserv_sa',
    phone: '920020300',
  },

  // الترتيب كما في الملف: يمين ← يسار، الصف الأول ثم الثاني
  home: [
    { to: 'about',          title: 'عن الشركة', icon: 'about',    img: 'home/about' },
    { to: 'services-intro', title: 'خدماتنا',  icon: 'services', img: 'home/services' },
    { to: 'competitions',   title: 'منافسات أسواق النفع العام والمسالخ', icon: 'market', img: 'home/competitions' },
    { to: 'app',            title: 'تطبيق الخدمات الزراعية', icon: 'app', img: 'home/app' },
    { to: 'works',          title: 'أبرز مشاركاتنا', icon: 'works', img: 'home/works' },
    { to: 'numbers',        title: 'الشركة في أرقام', icon: 'numbers', img: 'home/numbers' },
  ],

  about: {
    intro: 'شركة حكومية، تُعنى بتقديم وتطوير الخدمات الزراعية، وتمكين المزارعين والمربين والمنشآت التجارية، من خلال رفع كفاءة التشغيل وتعزيز جودة الخدمات والإنتاجية؛ بما يسهم في تنمية القطاع الزراعي وتحقيق مستهدفاته.',
    vision: 'أن نكون الشركة الموثوقة والرائدة في تقديم الخدمات للقطاع الزراعي في المملكة.',
    mission: 'تقديم خدمات ذات جودة وكفاءة عالية، لتمكين نمو القطاع الزراعي والمساهمة في الاستدامة الاقتصادية والتنمية الاجتماعية للمملكة.',
    values: ['شريك موثوق', 'العميل أولاً', 'أداء متميز', 'فريق واحد'],
    fields: [['الثروة الحيوانية', 'cow'], ['الثروة النباتية', 'plant'], ['الثروة السمكية', 'fish']],
  },

  servicesIntro: 'تقدم الشركة مجموعة من الخدمات الزراعية لتلبية احتياجات المستفيدين، إلى جانب تطوير خدمات ذات القيمة المضافة التي توفر حلولاً وخيارات تخدم القطاع الزراعي.',
  // صورتان تتبدلان: القطاع النباتي والقطاع الحيواني
  servicesIntroImgs: ['pages/services-plant', 'pages/services-animal'],

  // 14 خدمة — more: صفحة تُفتح من زر "للمزيد" داخل نافذة الخدمة
  services: [
    { t: 'خدمات المحاجر', icon: 'shield',
      d: 'أذونات الاستيراد والتصدير والعبور للثروة النباتية والحيوانية والسمكية، وفسح الإرساليات من خلال المحاجر في المنافذ الجمركية، وإجراء الفحوصات والكشوفات المخبرية.' },
    { t: 'إصدار التراخيص، التصاريح، الشهادات وتسجيل المدخلات الزراعية', icon: 'doc',
      d: 'تشمل إصدار التراخيص والتصاريح والشهادات المتعلقة بالثروة النباتية والحيوانية والسمكية، وتراخيص المنشآت البيطرية وأسواق النفع العام ومزاولة المهن الزراعية والبيطرية وتسجيل المدخلات الزراعية.' },
    { t: 'العيادات البيطرية', icon: 'steth',
      d: 'تقديم العلاج والتحصين وخدمات البرامج الوقائية لملاك الإبل، والخيل، والماشية، والحيوانات الأليفة والفطرية من خلال العيادات البيطرية الثابتة والمتنقلة والافتراضية.' },
    { t: 'أسواق النفع العام والمسالخ', icon: 'market',
      d: 'إدارة وتطوير أسواق النفع العام والمسالخ المسندة للشركة من قبل وزارة البيئة والمياه والزراعة من خلال طرحها كمنافسات.' },
    { t: 'الاستشارات والتسويق الزراعي', icon: 'plant',
      d: 'تقديم خدمة الاستشارات والتسويق الزراعي للمزارعين والمشاريع الزراعية لتتحول إلى خدمات استشارية متكاملة من الإنتاج إلى التسويق.' },
    { t: 'خدمات المسار السريع', icon: 'bolt', more: 'fasttrack',
      d: 'تسهل وتسرّع إتمام كافة الإجراءات المتعلقة بأذونات الاستيراد والتصدير والعبور للإرساليات الحيوانية والنباتية عبر المنافذ الحدودية والكشف الميداني لإصدار وتجديد التراخيص الزراعية.' },
    { t: 'حجر طيور الزينة المستوردة', icon: 'bird',
      d: 'خدمة لحجر الطيور الحيّة المستوردة للمنشأة التي لا تملك مركز بيع وتوزيع الطيور وذلك بهدف تطبيق الإجراءات المحجرية لمتابعة الحالة الصحية بعد الفسح المشروط خلال الأيام الثلاثة الأولى؛ بهدف التأكد من سلامة الطيور.' },
    { t: 'أذونات المنتجات الغذائية', icon: 'apple',
      d: 'تتيح للمستفيد التقدم بطلب الحصول على أذونات استيراد المنتجات الغذائية وذلك للتأكد من مطابقتها للمواصفات والاشتراطات الصحية والفنية المعتمدة قبل دخولها إلى المملكة.' },
    { t: 'خدمات تحصين المواشي المستوردة', icon: 'syringe',
      d: 'خدمة حجز موعد لتحصين المواشي المستوردة في منفذي الخمرة والحديثة.' },
    { t: 'الخدمات المحجرية الخاصة', icon: 'port',
      d: 'تشمل إنهاء إجراءات فسح الإرساليات الحيوانية والنباتية في المنافذ الجمركية التي لا تتوفر فيها الخدمات المحجرية.' },
    { t: 'خدمات محجر الخيل الدولي', icon: 'horse',
      d: 'خدمة إذن التصدير الدائم أو المؤقت تشمل زيارة ميدانية لسحب العينات وتحليلها في المختبر المرجعي الدولي لإصدار الإذن.' },
    { t: 'الاستشارات الفنية لخدمات التسجيل', icon: 'flask',
      d: 'خدمة إلكترونية لحجز موعد مع مستشارين مختصين في مجال تسجيل المدخلات الزراعية (مبيدات، أسمدة، بذور، أو محسنات التربة)، لتسهيل الحصول على شهادة التسجيل.' },
    { t: 'خدمة حجز موعد الإجراء المحجري', icon: 'calendar',
      d: 'تمكّن المستورد والمخلص الجمركي من حجز موعد مسبق للحصول على الخدمات المحجرية عند المنافذ.' },
    { t: 'فسح السلع المقيدة', icon: 'box',
      d: 'خدمة إلكترونية تتيح للمصدّرين تقديم طلب إصدار إذن فسح للسلع المقيّدة ومطابقة البيانات والمرفقات المطلوبة إلكترونياً.' },
  ],

  fastTrack: {
    licenses: {
      t: 'الكشف الميداني للتراخيص',
      d: 'يُسهّل ويسرّع إنجاز إجراءات الكشف الميداني، لإصدار أو تجديد التراخيص الزراعية.',
      items: ['ترخيص الثروة الحيوانية', 'ترخيص الثروة السمكية', 'ترخيص الثروة النباتية', 'ترخيص الدواجن', 'ترخيص المنشآت البيطرية'],
    },
    permits: {
      t: 'إصدار الأذونات',
      d: 'يُسهّل ويسرّع إصدار موافقات واعتمادات أذونات الإرساليات الحيوانية والنباتية عبر المنافذ الحدودية.',
      items: ['أذونات الصقور', 'أذونات تنقل الإبل', 'أذونات المواشي', 'أذونات النحل', 'أذونات الحيوانات الأليفة', 'أذونات بيض التفقيس/الصيصان',
              'المنتجات النباتية (زهور مقطوفة)', 'أذونات الخضار والفواكه', 'أذونات المخلفات الحيوانية', 'أذونات الطيور الحيّة', 'أذونات المستلزمات الطبية', 'أذونات الكائنات الفطرية'],
    },
  },

  competitions: {
    intro: 'تقوم الشركة بطرح مواقع أسواق النفع العام والمسالخ المسندة لها كمنافسات في منصة فرص وعلى موقع الشركة بهدف:',
    goals: [['تطوير البنية التحتية', 'build'], ['تطوير نماذج التشغيل', 'gear'], ['ضمان تقديم الخدمة بجودة مميزة', 'star']],
    stat: { n: 900, plus: true, label: 'منافسة طُرحت لأسواق النفع العام والمسالخ' },
  },

  platform: {
    intro: 'منصة رقمية موحدة تهدف إلى تمكين المزارعين والمنتجين المحليين والمستثمرين من:',
    mgmt: ['إدارة المواقع', 'إدارة الوحدات', 'إدارة العقود'],
    cats: [['الطيور', 'bird'], ['اللحوم', 'meat'], ['الخضار والفواكه', 'apple'], ['المواشي', 'cow'],
           ['الحطب والفحم', 'fire'], ['الأسماك', 'fish'], ['الأعلاف', 'wheat'], ['التمور', 'palm']],
    qr: 'assets/qr/markets-platform.jpg',
  },

  app: {
    slogan: 'موثوقية .. كفاءة .. جودة .. سرعة',
    intro: 'منصة رقمية تتيح للعملاء الوصول إلى خدمات الشركة الوطنية للخدمات الزراعية والاستفادة منها، إلى جانب الربط بمقدمي الخدمات الزراعية للحصول على خدماتهم بسهولة.',
  },

  // أبرز مشاركاتنا — الصور في assets/img/works/<id>/ (ext.jpg للبطاقة، 1.jpg 2.jpg ... للعرض)
  // الفيديو في assets/video/works/<id>.mp4 يُعرض أولاً ثم تتبدل الصور
  works: [
    { id: 'hajj',  title: 'أعمال موسم الحج 1447 هـ', imgs: 4 },
    { id: 'camel', title: 'مهرجان الملك عبد العزيز للإبل', imgs: 6 },
    { id: 'taif',  title: 'موسم سباقات الطائف', imgs: 3 },
    { id: 'cup',   title: 'كأس السعودية', imgs: 7 },
    { id: 'rabwa', title: 'موسم التمور بالربوة', imgs: 13 },
  ],

  // stats: n = الرقم كما يُكتب، u = الوحدة، t = الوصف، k = عنوان صغير فوق الرقم
  workDetails: {
    hajj: {
      sub: 'جاهزية تشغيلية وخدمات محجرية متكاملة لخدمة موسم الحج',
      items: [
        ['استقبال الإرساليات الحيوانية', 'استقبال وفسح الإرساليات عبر 4 محاجر رئيسية ومحجرين مساندين، لتلبية احتياجات السوق المحلي ومشروع المملكة للإفادة من الهدي والأضاحي.'],
        ['الفحص والإجراءات المحجرية', 'تنفيذ إجراءات الكشف الظاهري والتشخيص والتحاليل المخبرية للإرساليات الحيوانية الواردة.'],
        ['جاهزية الأسواق والمسالخ', 'متابعة تنفيذ الخطط التشغيلية لأسواق النفع العام والمسالخ، ورفع جاهزيتها خلال موسم الحج.'],
      ],
      stats: [
        { k: 'الإرساليات الحيوانية', pre: 'فسح', n: '+2', u: 'مليون', t: 'رأسًا من الماشية' },
        { k: 'الإرساليات النباتية', pre: 'فسح', n: '+120', u: 'طنًا', t: 'من الخضار والفواكه' },
        { k: 'نفايات المسالخ', n: '+867', u: 'طنًا', t: 'عالجتها الشركة في العاصمة المقدسة بطريقة آمنة وفق الاشتراطات البيئية خلال موسم الحج' },
      ],
    },
    camel: {
      sub: 'خدمات بيطرية متكاملة لصحة وسلامة الإبل المشاركة',
      items: [
        ['الإشراف والخدمات البيطرية', 'تقديم الخدمات البيطرية والإشراف على سلامة الإبل المشاركة، عبر عيادة الصياهد الثابتة والعيادات الميدانية المتنقلة.'],
        ['الخدمات الرقمية', 'إتاحة تسجيل وترقيم الإبل، والخدمات العيادية البيطرية، والتحصين عبر تطبيق «الخدمات الزراعية»، إلى جانب حجز المواعيد إلكترونياً.'],
        ['استكمال إجراءات المشاركة', 'استكمال إجراءات الإبل المشاركة في المهرجان بعد التحقق من سلامتها.'],
      ],
      stats: [
        { n: '+30', u: 'يومًا', t: 'من خدمة الإبل المشاركة' },
        { n: '+50', u: 'كادرًا وطنيًا', t: 'لتقديم الخدمات البيطرية والإشراف على الإبل' },
        { n: '20', u: 'فرقة بيطرية', t: 'للعيادات الميدانية المتنقلة طوال المهرجان' },
      ],
    },
    taif: {
      sub: 'خدمات بيطرية وقائية لصحة وسلامة الخيل المشاركة',
      items: [
        ['الفحص الوقائي', 'إجراء الفحوصات الوقائية للخيل المشاركة، للتحقق من سلامتها والالتزام بإجراءات الأمن الوقائي.'],
        ['أذونات التنقل', 'تقديم خدمات الفحص الوقائي اللازمة لإصدار أذونات تنقل الخيل إلكترونياً، بما يسهّل استكمال إجراءات مشاركتها في السباقات.'],
      ],
    },
    cup: {
      sub: 'خدمات محجرية وإشراف بيطري لصحة وسلامة الخيل المشاركة',
      items: [
        ['استقبال الخيل وإجراءات الفسح', 'استقبال الخيل القادمة من خارج المملكة عبر المنافذ البرية والجوية، واستكمال إجراءات الفسح وفق الاشتراطات البيطرية المعتمدة.'],
        ['الإشراف البيطري خلال السباقات', 'إجراء الفحوصات الصحية للخيل المشاركة، وتطبيق إجراءات الأمن الحيوي طوال فترة السباقات.'],
        ['إجراءات مغادرة الخيل', 'إعداد شهادات عودة الخيل وتسليمها للمُلّاك، ومرافقتها إلى المنافذ لاستكمال إجراءات المغادرة.'],
      ],
      sub2: 'محجر الخيل الدولي بالجنادرية .. الوجهة الأولى لخدمات الخيل في المملكة',
      items2: [
        ['خدمات متكاملة', 'إصدار شهادات تصدير الخيل وأذونات استيرادها وتصديرها وعبورها عبر أراضي المملكة.'],
        ['الرقابة البيطرية والمتابعة', 'الإشراف على الحجر المؤقت للخيل المشاركة في البطولات الدولية، ومتابعة صحتها وسلامتها.'],
        ['بنية تحتية مطورة', 'وحدة مخصصة لفصل عينات الدم، ومحطة لتحلية المياه، إضافة إلى الإسطبلات والمستودعات، ونظام لإدارة المخزون بهدف تنظيم العمليات ورفع كفاءة العمل.'],
        ['مرافق التدريب والضيافة', 'ميادين تدريب متخصصة للخيل، وغرف ضيافة مجهزة لمرافقيها.'],
      ],
    },
    rabwa: {
      logo: 'assets/img/works/rabwa/logo.png',
      sub: 'موسم متكامل يجمع بين المنتج المحلي ودعم المنتجين والمزارعين',
      items: [
        ['تنظيم الموسم', 'نظّمت الشركة الوطنية للخدمات الزراعية موسم التمور بالربوة السنوي، الذي يجمع المزارعين والعارضين المحليين لعرض وتسويق التمور السعودية ومنتجاتها.'],
        ['دعم المنتجين وتسويق التمور', 'إتاحة منافذ لبيع التمور والمنتجات الزراعية والصناعات التحويلية، بما يعزّز حضور المنتج المحلي.'],
        ['تجربة ثقافية وتراثية', 'تقديم فعاليات تراثية وثقافية وتجارب ضيافة وأنشطة تعليمية، بالتعاون مع الجهات ذات العلاقة.'],
        ['المسؤولية المجتمعية', 'دعم الأسر المنتجة والتعاون مع جمعية «خيرات» للاستفادة من فائض التمور وإيصاله إلى المستحقين.'],
      ],
    },
  },

  // شعارات شريط المشاركات (تتحرك بشكل متواصل) — كل شعار ملف مستقل
  partners: [
    'assets/img/works/rabwa/logo.png',
    ...Array.from({ length: 12 }, (_, k) => `assets/img/partners/${k + 1}.png`),
  ],

  // الشركة في أرقام — n = الرقم، unit = الوحدة بعد الرقم، plus = إظهار علامة +، stamp = ختم السنة
  // الترتيب صفاً صفاً من اليمين كما في الملف
  numbers: [
    { n: 280, plus: true, unit: '', label: 'خدمة مُطلقة حتى الآن' },
    { n: 70, plus: true, unit: 'ألف', label: 'عميل في تطبيق الخدمات الزراعية', stamp: '2026' },
    { n: 15, plus: true, unit: 'مليون', label: 'رأسًا من الماشية المستوردة تم تحصينها حتى الآن' },
    { n: 550, plus: true, unit: 'ألف زائر', label: 'في موسم التمور بالربوة', stamp: '2026' },
    { n: 900, plus: true, unit: 'ألف', label: 'إذن مُصدر حتى الآن' },
    { n: 30, plus: true, unit: 'ألف', label: 'خدمة تم تنفيذها عبر تطبيق الخدمات الزراعية', stamp: '2026' },
    { n: 60, plus: true, unit: '', label: 'مذكرة تعاون' },
    { n: 2500, plus: true, unit: 'طن', label: 'متوسط كمية المبيعات في موسم التمور بالربوة', stamp: '2026' },
    { n: 121, plus: true, unit: 'ألف', label: 'ترخيص مُصدر حتى الآن' },
    { n: 180, plus: true, unit: 'ألف', label: 'خدمة قُدّمت عبر العيادات الثابتة والمتنقلة' },
    { n: 9, plus: false, unit: '', label: 'شهادات آيزو', badge: 'assets/img/iso-stamp.svg' },   // ختم شعار الآيزو
    { n: 100, plus: true, unit: 'مشارك', label: 'في معرض التمور بالربوة', stamp: '2026' },
  ],
};

/* ---------- أدوات ---------- */
const img = name => `assets/img/${name}.jpg`;
const rise = (i, extra = '', style = '') => `class="rise ${extra}" style="--i:${i};${style}"`;
const head = (eyebrow, title, i = 0) =>
  `<div ${rise(i)}>${eyebrow ? `<div class="eyebrow">${eyebrow}</div>` : ''}<h2 class="title">${title}</h2></div>`;
const goBtn = (to, label, cls = '') => `<button class="btn ${cls}" data-go="${to}"><span>${label}</span>${I.arrow}</button>`;
// علامة + تظهر على يمين الرقم (قبله في القراءة العربية) مثل: 30+ ؛ تُكتب في المحتوى "+30"
const num = s => { const m = s.match(/^\+([\s\S]*)$/); return `<bdi class="n" dir="ltr">${m ? m[1] + '+' : s}</bdi>`; };
const qrBox = (src, title) => `
  <div class="qr-box glass"><img src="${src}" alt="">${title ? `<b>${title}</b>` : ''}</div>`;
const stamp = y => `<span class="stamp">${y}</span>`;

/* ---------- الشاشات ---------- */
const SCREENS = {
  start: { bg: 'video', topbar: false, html: () => { const c = CONTENT.contact; return `
    <img class="start-logo rise" style="--i:0" src="assets/logo/agriserv-logowhite.svg" alt="${CONTENT.company}">
    <div ${rise(1, 'tag')}>${CONTENT.tagline}</div>
    <button ${rise(2, 'start-btn')} data-go="home"><span>اكتشف المزيد</span>${I.arrow}</button>
    <div ${rise(4, 'contact')}>
      <div class="c-item"><img class="c-logo" src="assets/logo/agriserv-leaf-green.png" alt=""><span class="c-lbl">${c.label}</span><bdi dir="ltr">${c.handle}</bdi></div>
      <span class="c-sep"></span>
      <div class="c-item"><span class="c-ic">${I.phone}</span><span class="c-lbl">الرقم الموحد</span><bdi class="ph" dir="ltr">${c.phone}</bdi></div>
    </div>` } },

  home: { bg: 'video', html: () => `
    <div class="home-head">${head(CONTENT.tagline, CONTENT.company)}</div>
    <div class="tiles">
      ${CONTENT.home.map((t, i) => `
        <button ${rise(i + 1, 'tile')} data-go="${t.to}">
          <div class="tile-img" style="background-image:url(${img(t.img)})"></div>
          <div class="tile-icon">${I[t.icon]}</div>
          <b>${t.title}</b>
          <small><span>استعرض</span>${I.arrow}</small>
        </button>`).join('')}
    </div>` },

  about: { html: () => { const a = CONTENT.about; return `
    <div class="about-grid">
      <div class="intro">
        ${head('من نحن', 'عن الشركة')}
        <p ${rise(1, 'lead')}>${a.intro}</p>
        <div ${rise(2)}>
          <div class="eyebrow">مجالات عملنا</div>
          <div class="fields">${a.fields.map(([f, ic]) => `<div class="field">${I[ic]}<span>${f}</span></div>`).join('')}</div>
        </div>
      </div>
      <div class="about-cards">
        <div ${rise(2, 'glass')}><h3>${I.eye}<span>رؤيتنا</span></h3><p>${a.vision}</p></div>
        <div ${rise(3, 'glass')}><h3>${I.target}<span>رسالتنا</span></h3><p>${a.mission}</p></div>
        <div ${rise(4, 'glass')}><h3>${I.heart}<span>قيمنا</span></h3>
          <div class="chips">${a.values.map(v => `<span class="chip">${v}</span>`).join('')}</div></div>
      </div>
    </div>`; } },

  'services-intro': { html: () => `
    <div class="split">
      <div class="hero-intro">
        <div ${rise(0)}><div class="eyebrow">${CONTENT.company}</div><h1 class="title">خدماتنا</h1></div>
        <p ${rise(1, 'lead')}>${CONTENT.servicesIntro}</p>
        <div ${rise(2)}>${goBtn('services', 'اكتشف الخدمات')}</div>
      </div>
      <div ${rise(1, 'photo slides')} data-slides="${CONTENT.servicesIntroImgs.map(img).join(',')}"></div>
    </div>` },

  services: { html: () => `
    <div class="page-head">${head('تعرّف على خدماتنا', 'خدماتنا')}</div>
    <div class="svc-grid">
      ${CONTENT.services.map((s, i) => `
        <button ${rise(i + 1, 'svc glass' + (s.t.length > 40 ? ' long' : ''))} data-modal="${i}">
          <span class="ic">${I[s.icon]}</span>
          <b>${s.t}</b>
          <span class="tap">${I.tap}<span>للمزيد</span></span>
        </button>`).join('')}
    </div>` },

  fasttrack: { html: () => { const f = CONTENT.fastTrack; const list = items =>
      `<div class="ft-list">${items.map(x => `<div class="ft-item">${I.check}<span>${x}</span></div>`).join('')}</div>`; return `
    <div class="page-head">${head('خدماتنا', 'خدمات المسار السريع')}</div>
    <div class="ft-cols">
      <div ${rise(1, 'ft-col glass')}><h3><span class="num">1</span><span>${f.licenses.t}</span></h3><p>${f.licenses.d}</p>${list(f.licenses.items)}</div>
      <div ${rise(2, 'ft-col glass two')}><h3><span class="num">2</span><span>${f.permits.t}</span></h3><p>${f.permits.d}</p>${list(f.permits.items)}</div>
    </div>`; } },

  competitions: { html: () => { const c = CONTENT.competitions; return `
    <div class="split" style="grid-template-columns:1.15fr 1fr">
      <div class="col">
        ${head('', 'منافسات أسواق النفع العام والمسالخ')}
        <p ${rise(1, 'lead')}>${c.intro}</p>
        <div class="goals three">${c.goals.map(([g, ic], i) => `<div ${rise(i + 2, 'goal glass')}><span class="ic">${I[ic]}</span><span>${g}</span></div>`).join('')}</div>
        <div ${rise(5, 'big-stat')}>
          <b>${num((c.stat.plus ? '+' : '') + `<span data-count="${c.stat.n}">${c.stat.n}</span>`)}</b><span>${c.stat.label}</span>
        </div>
        <div ${rise(6)}>${goBtn('platform', 'تعرّف على منصة أسواق النفع العام')}</div>
      </div>
      <div class="col center">
        <div ${rise(2, 'mockup')}><img src="assets/img/pages/competitions-mockup.png" alt=""></div>
        <div ${rise(4)}>${qrBox('assets/qr/competitions.png', 'اطّلع على المنافسات المطروحة')}</div>
      </div>
    </div>`; } },

  platform: { html: () => { const p = CONTENT.platform; return `
    <div class="split" style="grid-template-columns:1.15fr 1fr">
      <div class="col">
        ${head('', 'منصة أسواق النفع العام')}
        <p ${rise(1, 'lead')}>${p.intro}</p>
        <div ${rise(2, 'mgmt')}>${p.mgmt.map(m => `<div class="glass">${m}</div>`).join('')}</div>
        <div ${rise(3)}><div class="eyebrow">في مختلف مدن المملكة وتشمل:</div>
          <div class="cats">${p.cats.map(([c, ic]) => `<div class="cat glass">${I[ic]}<span>${c}</span></div>`).join('')}</div></div>
      </div>
      <div class="col center">
        <div ${rise(2, 'mockup')}><img src="assets/img/pages/platform-mockup.png" alt=""></div>
        <div ${rise(4)} data-qr-wrap>${qrBox(p.qr, 'للاطلاع على المنصة').replace('<img ', '<img data-qr ')}</div>
      </div>
    </div>`; } },

  app: { html: () => { const a = CONTENT.app; return `
    <div class="split">
      <div class="col">
        ${head(a.slogan, 'تطبيق الخدمات الزراعية')}
        <p ${rise(2, 'lead')}>${a.intro}</p>
        <div ${rise(3)}><div class="eyebrow">حمّل التطبيق الآن</div>${qrBox('assets/qr/app.png')}</div>
        <div ${rise(4, 'choices')}>
          <button class="choice" data-go="app-client"><span class="ic">${I.user}</span><span>اطلب خدمات زراعية متنوعة</span></button>
          <button class="choice" data-go="app-provider"><span class="ic">${I.briefcase}</span><span>قدّم خدماتك عبر التطبيق!</span></button>
        </div>
      </div>
      <div ${rise(2, 'mockup')}><img src="assets/img/pages/app-mockup.png" alt=""></div>
    </div>`; } },

  'app-client': { html: () => `
    <div class="split">
      <div class="col">
        ${head('تطبيق الخدمات الزراعية', 'يقدم لك تطبيق الخدمات الزراعية:')}
        <div ${rise(1, 'stat-pair')}>
          <div class="glass"><b>${num('+170')}</b><span>خدمة</span></div>
          <div class="glass"><b>${num('+120')}</b><span>مقدم خدمة</span></div>
        </div>
        <div ${rise(2, 'goal glass')}><span class="ic">${I.shield}</span><span>مقدمو خدمات مرخصون ومؤهلون</span></div>
        <div ${rise(3)}><div class="eyebrow">حمّل التطبيق الآن وتصفح الخدمات</div>
          <div class="row qr-row">${qrBox('assets/qr/app.png')}${goBtn('app-provider', 'هل أنت مقدم خدمة؟', 'ghost')}</div></div>
      </div>
      <div ${rise(2, 'photo', `background-image:url(${img('pages/app-client')})`)}></div>
    </div>` },

  'app-provider': { html: () => `
    <div class="split">
      <div class="col">
        ${head('تطبيق الخدمات الزراعية', 'سجّل كمقدم خدمة واستفد من:')}
        <div class="goals">
          ${[['حملات تسويقية', 'megaphone'], ['الوصول لأكبر عدد من العملاء', 'users'], ['إدارة الخدمات إلكترونياً', 'monitor']]
            .map(([t, ic], i) => `<div ${rise(i + 1, 'goal glass')}><span class="ic">${I[ic]}</span><span>${t}</span></div>`).join('')}
        </div>
        <div ${rise(4)}><div class="eyebrow">حمّل التطبيق وسجّل كمقدم خدمة الآن</div>
          <div class="row qr-row">${qrBox('assets/qr/app.png')}${goBtn('app-client', 'هل تبحث عن خدمة؟', 'ghost')}</div></div>
      </div>
      <div ${rise(2, 'photo', `background-image:url(${img('pages/app-provider')})`)}></div>
    </div>` },

  works: { html: () => `
    <div class="page-head">${head('أعمالنا', 'أبرز مشاركاتنا')}</div>
    <div class="works">
      ${CONTENT.works.map((w, i) => `
        <button ${rise(i + 1, 'tile')} data-go="work-${w.id}">
          <div class="tile-img" style="background-image:url(${img(`works/${w.id}/ext`)})"></div>
          <div class="tile-icon">${I.works}</div>
          ${w.stamp ? stamp(w.stamp) : ''}
          <b>${w.title}</b><small><span>اطّلع على الأعمال</span>${I.arrow}</small>
        </button>`).join('')}
    </div>
    <div ${rise(6, 'marquee')}>
      <div class="track">${[0, 1].map(() => CONTENT.partners.map(src => `<span class="logo"><img src="${src}" alt=""></span>`).join('')).join('')}</div>
    </div>` },

  numbers: { html: () => `
    <div class="page-head">${head('الشركة في أرقام', 'أرقام تعكس الجهود')}</div>
    <div class="numbers">
      ${CONTENT.numbers.map((n, i) => `
        <div ${rise(i + 1, 'number glass')}>
          ${n.stamp ? stamp(n.stamp) : ''}
          ${n.badge ? `<img class="badge" src="${n.badge}" alt="" onerror="this.remove()">` : ''}
          <b>${num((n.plus ? '+' : '') + `<span data-count="${n.n}">0</span>`)}${n.unit ? `<span class="u">${n.unit}</span>` : ''}</b>
          <span>${n.label}</span>
        </div>`).join('')}
    </div>` },
};

// صفحات تفاصيل الأعمال
const itemsGrid = (items, cls = '') => `<div class="w-items ${cls}" style="--n:${items.length}">${items.map(([t, d]) =>
  `<div class="w-item glass"><b>${t}</b><p>${d}</p></div>`).join('')}</div>`;
for (const w of CONTENT.works) {
  const d = CONTENT.workDetails[w.id];
  const imgs = Array.from({ length: w.imgs }, (_, k) => img(`works/${w.id}/${k + 1}`));
  SCREENS['work-' + w.id] = { html: () => `
    <div class="work-detail ${d.items2 ? 'dense' : ''}">
      <div ${rise(0, 'media')} data-media="assets/video/works/${w.id}.mp4" data-slides="${imgs.join(',')}"></div>
      <div class="col">
        <div ${rise(1, 'w-head')}>
          <div><div class="eyebrow">أبرز مشاركاتنا</div><h2 class="title">${w.title}</h2></div>
        </div>
        <div ${rise(2, 'subhead')}>${d.sub}</div>
        <div ${rise(3)}>${itemsGrid(d.items)}</div>
        ${d.stats ? `<div ${rise(4, 'w-stats')}>${d.stats.map(s => `
          <div class="w-stat">${s.k ? `<small>${s.k}</small>` : ''}<b>${s.pre ? `<span class="pre">${s.pre}</span>` : ''}${num(s.n)}<span class="u">${s.u}</span></b><span>${s.t}</span></div>`).join('')}</div>` : ''}
        ${d.items2 ? `<div ${rise(4, 'subhead')}>${d.sub2}</div><div ${rise(5)}>${itemsGrid(d.items2)}</div>` : ''}
      </div>
    </div>` };
}

/* =====================================================================
   المحرك
   ===================================================================== */
const stage = document.getElementById('stage');
const screensEl = document.getElementById('screens');
const bgVideo = document.getElementById('bgVideo');
const backBtn = document.getElementById('backBtn');
let current = null;
let navStack = [];

// تكبير المسرح ليملأ أي شاشة مع الحفاظ على النسبة
function fit() {
  const s = Math.min(innerWidth / 1920, innerHeight / 1080);
  stage.style.transform = `translate(-50%, -50%) scale(${s})`;
}
addEventListener('resize', fit); fit();

// بناء كل الشاشات مرة واحدة
for (const [id, s] of Object.entries(SCREENS)) {
  const el = document.createElement('section');
  el.className = 'screen'; el.id = 's-' + id;
  el.innerHTML = s.html();
  screensEl.appendChild(el);
}

/* ضبط الطرفين بالتطويل: تُملأ المسافة الزائدة في كل سطر بحرف التطويل (ـ) داخل الكلمات، وما يتبقى يُوزّع على الفراغات */
const KASHIDA_SEL = '.lead, .about-cards p, .modal-card p, .ft-col > p, .w-item p';
const KASHIDA_PER_SLOT = 2;                              // أقصى تطويل في الوصلة الواحدة بين حرفين
const KASHIDA_PER_WORD = 5;                              // أقصى تطويل في الكلمة الواحدة
const DUAL_JOIN = 'بتثجحخسشصضطظعغفقكلمنهيئى';            // حروف تتصل بما بعدها
const AR_LETTER = /[\u0621-\u063A\u0641-\u064A]/;
const AR_MARK = /[\u064B-\u065F\u0670]/;
// مواضع التطويل الممكنة في الكلمة (من آخرها لأولها)
function kashidaSlots(w) {
  const slots = [];
  for (let i = 0; i < w.length; i++) {
    if (!DUAL_JOIN.includes(w[i])) continue;
    let j = i + 1;
    while (AR_MARK.test(w[j] || '')) j++;
    const next = w[j];
    if (!next || !AR_LETTER.test(next) || next === 'ء') continue;
    if (w[i] === 'ل' && 'اأإآ'.includes(next)) continue;  // لا نكسر لام الألف
    slots.push(j);
  }
  return slots.reverse();
}
function justifyKashida(el) {
  const raw = el.dataset.raw ?? (el.dataset.raw = el.textContent.trim().replace(/\s+/g, ' '));
  el.classList.remove('kashida');
  el.textContent = '';
  // قياس عرض كل كلمة وعرض الفراغ وعرض حرف التطويل
  const measure = t => { const m = document.createElement('span'); m.style.whiteSpace = 'pre'; m.textContent = t; el.append(m); const w = m.getBoundingClientRect().width; m.remove(); return w; };
  const k = el.getBoundingClientRect().width / el.offsetWidth || 1;   // تعويض تكبير المسرح
  const width = el.clientWidth - 2;
  const tw = measure('\u0640'.repeat(20)) / 20 / k, sp = measure(' '.repeat(10)) / 10 / k;
  const words = raw.split(' ').map(t => ({ t, w: measure(t) / k, slots: kashidaSlots(t) }));
  if (!tw || !words.length) { el.textContent = raw; return; }
  // تقسيم الأسطر: نختار نقاط الكسر التي تجعل الأسطر متقاربة الطول وقابلة للملء بالتطويل، ونتجنب كلمة وحيدة في سطر
  const cap = w => Math.min(KASHIDA_PER_WORD, w.slots.length * KASHIDA_PER_SLOT) * tw;
  const N = words.length, best = new Array(N + 1).fill(Infinity), from = new Array(N + 1).fill(0);
  best[0] = 0;
  for (let j = 1; j <= N; j++) {
    let lw = -sp, fill = 0;
    for (let i = j - 1; i >= 0; i--) {
      lw += words[i].w + sp; fill += cap(words[i]);
      if (lw > width && i < j - 1) break;
      const n = j - i, last = j === N;
      const slack = Math.max(0, width - lw);
      const gap = Math.max(0, slack - fill) / Math.max(1, n - 1);        // ما يبقى بين الكلمات بعد التطويل
      let cost = last ? 0 : (slack / width) ** 2 * 10 + (gap / sp) ** 2;
      if (n === 1 && N > 1) cost += 400;                                   // كلمة وحيدة في سطر
      if (best[i] + cost < best[j]) { best[j] = best[i] + cost; from[j] = i; }
    }
  }
  const lines = [];
  for (let j = N; j > 0; j = from[j]) lines.unshift(words.slice(from[j], j));
  const lineW = l => l.reduce((a, w) => a + w.w, 0) + sp * (l.length - 1);
  el.textContent = '';
  lines.forEach((line, li) => {
    const ins = line.map(() => ({}));
    if (li < lines.length - 1 && line.length > 1) {
      let left = Math.floor((width - lineW(line)) / tw);
      const n = line.map(() => 0);
      // توزيع دوري على الكلمات، وفي كل كلمة على وصلاتها بالتناوب
      let moved = true;
      while (left > 0 && moved) {
        moved = false;
        for (let i = 0; i < line.length && left > 0; i++) {
          const w = line[i];
          if (!w.slots.length || n[i] >= Math.min(KASHIDA_PER_WORD, w.slots.length * KASHIDA_PER_SLOT)) continue;
          const at = w.slots[n[i] % w.slots.length];
          ins[i][at] = (ins[i][at] || 0) + 1; n[i]++; left--; moved = true;
        }
      }
    }
    const l = document.createElement('span'); l.className = 'kl';
    l.textContent = line.map((w, i) => [...w.t].map((c, j) => '\u0640'.repeat(ins[i][j] || 0) + c).join('')).join(' ');
    el.append(l);
  });
  el.classList.add('kashida');
}
document.fonts.ready.then(() => document.querySelectorAll(KASHIDA_SEL).forEach(justifyKashida));

// إخفاء صندوق الباركود إن لم تتوفر الصورة
document.querySelectorAll('[data-qr]').forEach(q =>
  q.addEventListener('error', () => q.closest('[data-qr-wrap]').style.display = 'none'));

function go(id, { push = true } = {}) {
  if (!SCREENS[id] || id === current) return;
  const prev = current && document.getElementById('s-' + current);
  const next = document.getElementById('s-' + id);
  if (push && current) navStack.push(current);
  if (id === 'start' || id === 'home') navStack = [];

  if (prev) {
    prev.classList.add('leaving'); prev.classList.remove('active');
    setTimeout(() => prev.classList.remove('leaving'), 600);
    cleanup(prev);
  }
  // إعادة تشغيل حركات الدخول
  next.querySelectorAll('.rise').forEach(r => { r.style.animation = 'none'; r.offsetHeight; r.style.animation = ''; });
  next.classList.add('active');
  current = id;

  const cfg = SCREENS[id];
  stage.classList.toggle('on-pattern', cfg.bg !== 'video');
  stage.classList.toggle('no-topbar', cfg.topbar === false);
  if (cfg.bg === 'video') bgVideo.play().catch(() => {}); else setTimeout(() => bgVideo.pause(), 800);

  if (next.querySelector('[data-count]')) countUp(next);
  const media = next.querySelector('[data-media]');
  if (media) startMedia(media);
  else next.querySelectorAll('[data-slides]').forEach(slideshow);
}

function back() { go(current === 'home' ? 'start' : (navStack.pop() || 'home'), { push: false }); }

function cleanup(el) {
  closeModal();
  el.querySelectorAll('[data-slides]').forEach(box => {
    clearInterval(box._timer);
    setTimeout(() => (box.innerHTML = ''), 600);
  });
}

/* فيديو صفحة العمل ثم عرض الصور بعد انتهائه (أو مباشرة إن لم يوجد الفيديو) */
function startMedia(box) {
  clearInterval(box._timer);
  box.innerHTML = '';
  const v = document.createElement('video');
  v.src = box.dataset.media; v.playsInline = true; v.autoplay = true;
  v.addEventListener('error', () => slideshow(box), { once: true });
  v.addEventListener('ended', () => slideshow(box), { once: true });
  v.addEventListener('loadeddata', () => {
    v.play().catch(() => { v.muted = true; v.play(); });
  }, { once: true });
  box.appendChild(v);
}
function slideshow(box) {
  clearInterval(box._timer);
  box.innerHTML = box.dataset.slides.split(',').map(src => `<div class="slide" style="background-image:url(${src})"></div>`).join('');
  const slides = [...box.children]; let i = 0;
  slides[0].classList.add('on');
  if (slides.length > 1) box._timer = setInterval(() => {
    slides[i].classList.remove('on'); i = (i + 1) % slides.length; slides[i].classList.add('on');
  }, 5000);
}

/* عدّاد الأرقام */
function countUp(root) {
  const els = [...root.querySelectorAll('[data-count]')];
  els.forEach(el => (el.textContent = '0'));
  const t0 = Date.now() + 300, dur = 1600;
  clearInterval(countUp.timer);
  countUp.timer = setInterval(() => {
    let done = true;
    els.forEach((el, k) => {
      const p = Math.min(Math.max((Date.now() - t0 - k * 70) / dur, 0), 1);
      if (p < 1) done = false;
      el.textContent = Math.round(+el.dataset.count * (1 - Math.pow(1 - p, 3))).toLocaleString('en-US');
    });
    if (done) clearInterval(countUp.timer);
  }, 30);
}

/* نافذة تفاصيل الخدمة */
const modal = document.createElement('div');
modal.id = 'modal';
modal.innerHTML = '<div class="modal-card glass"><span class="ic"></span><h3></h3><p></p><div class="modal-btns"></div></div>';
stage.appendChild(modal);
function openModal(i) {
  const s = CONTENT.services[i];
  modal.querySelector('.ic').innerHTML = I[s.icon];
  modal.querySelector('h3').textContent = s.t;
  const p = modal.querySelector('p');
  delete p.dataset.raw; p.textContent = s.d; justifyKashida(p);
  modal.querySelector('.modal-btns').innerHTML =
    (s.more ? `<button class="btn" data-go="${s.more}"><span>للمزيد</span>${I.arrow}</button>` : '') +
    '<button class="btn ghost" data-close><span>إغلاق</span></button>';
  modal.classList.add('show');
}
const closeModal = () => modal.classList.remove('show');

/* حركة الضغط على كل الأزرار */
const TOUCHABLE = 'button, [data-go], [data-modal]';
const NO_MOTION = '.tile, .svc, .choice, .goal, .cat';
document.addEventListener('pointerdown', e => {
  const el = e.target.closest(TOUCHABLE);
  if (!el || el.matches(NO_MOTION)) return;
  el.classList.add('pressed');
  const release = () => { el.classList.remove('pressed'); removeEventListener('pointerup', release); removeEventListener('pointercancel', release); };
  addEventListener('pointerup', release); addEventListener('pointercancel', release);
  if (el.matches('img')) return;           // الشعار: حركة تصغير فقط
  if (getComputedStyle(el).position === 'static') el.style.position = 'relative';
  el.style.overflow = 'hidden';
  const r = el.getBoundingClientRect(), k = r.width / el.offsetWidth;   // تعويض تكبير المسرح
  const size = Math.max(el.offsetWidth, el.offsetHeight) * 2.2;
  const rip = document.createElement('span');
  rip.className = 'ripple';
  rip.style.cssText = `width:${size}px;height:${size}px;left:${(e.clientX - r.left) / k - size / 2}px;top:${(e.clientY - r.top) / k - size / 2}px`;
  el.appendChild(rip);
  setTimeout(() => rip.remove(), 650);
});

/* التنقل باللمس (ينتظر قليلاً حتى تظهر حركة الضغط) */
let navLock = false;
const goSoon = id => { if (navLock) return; navLock = true; setTimeout(() => { navLock = false; go(id); }, 200); };
document.addEventListener('click', e => {
  const goEl = e.target.closest('[data-go]');
  if (modal.classList.contains('show')) {
    if (goEl && modal.contains(goEl)) { closeModal(); goSoon(goEl.dataset.go); }
    else if (!e.target.closest('.modal-card') || e.target.closest('[data-close]')) closeModal();
    return;
  }
  const m = e.target.closest('[data-modal]');
  if (m) { openModal(m.dataset.modal); return; }
  if (goEl) goSoon(goEl.dataset.go);
});
backBtn.addEventListener('click', () => { if (!navLock) { navLock = true; setTimeout(() => { navLock = false; back(); }, 200); } });
// لمس أي مكان في شاشة البداية يفتح القائمة
document.getElementById('s-start').addEventListener('click', () => goSoon('home'));

/* منع السلوكيات غير المرغوبة على شاشة اللمس */
['contextmenu', 'dragstart', 'selectstart', 'gesturestart'].forEach(ev =>
  document.addEventListener(ev, e => e.preventDefault()));
document.addEventListener('touchmove', e => { if (e.touches.length > 1) e.preventDefault(); }, { passive: false });
document.addEventListener('wheel', e => { if (e.ctrlKey) e.preventDefault(); }, { passive: false });

/* الرجوع التلقائي لشاشة البداية عند عدم الاستخدام */
const warn = document.createElement('div');
warn.id = 'idleWarn'; stage.appendChild(warn);
let idle = 0;
const resetIdle = () => { idle = 0; warn.classList.remove('show'); };
['pointerdown', 'touchstart', 'keydown'].forEach(ev => document.addEventListener(ev, resetIdle, { passive: true }));
setInterval(() => {
  if (current === 'start') return;
  // لا تحتسب وقت عدم النشاط أثناء تشغيل فيديو صفحة العمل
  const v = document.querySelector('.screen.active [data-media] video');
  if (v && !v.paused && !v.error) { idle = 0; return; }
  idle++;
  const left = IDLE_SECONDS - idle;
  if (left <= IDLE_WARN_SECONDS && left > 0) {
    warn.textContent = `العودة للشاشة الرئيسية خلال ${left} ثوانٍ — المس الشاشة للمتابعة`;
    warn.classList.add('show');
  }
  if (left <= 0) { resetIdle(); closeModal(); go('start'); }
}, 1000);

/* اختصارات للمشغّل: Esc = البداية */
document.addEventListener('keydown', e => { if (e.key === 'Escape') go('start'); });

// للمعاينة يمكن فتح شاشة مباشرة: index.html#numbers
go(SCREENS[location.hash.slice(1)] ? location.hash.slice(1) : 'start');
