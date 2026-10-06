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
  sound: '<svg viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16 9a4 4 0 0 1 0 6M19 6a8 8 0 0 1 0 12"/></svg>',
  mute: '<svg viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9z"/><path d="M17 9l5 6M22 9l-5 6"/></svg>',
  bird: '<svg viewBox="0 0 24 24"><path d="M16 7h.01"/><path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.3-2.3L2 20"/><path d="M20 7l2 .5-2 .5"/></svg>',
  meat: '<svg viewBox="0 0 24 24"><path d="M15 4a6 6 0 0 1 5 7c-1 4-6 6-10 7-3 1-6-1-6-4 0-2 1-3 3-4l2-1c2-1 2-5 6-5z"/><circle cx="7" cy="17" r="1.5"/></svg>',
  apple: '<svg viewBox="0 0 24 24"><path d="M12 7c-2-2-7-2-7 4 0 5 3 10 7 9 4 1 7-4 7-9 0-6-5-6-7-4z"/><path d="M12 7c0-2 1-4 3-4"/></svg>',
  fire: '<svg viewBox="0 0 24 24"><path d="M12 22c4 0 7-3 7-7 0-5-5-7-5-12-3 2-4 5-4 7-1-1-2-2-2-4-2 2-3 5-3 9 0 4 3 7 7 7z"/></svg>',
  wheat: '<svg viewBox="0 0 24 24"><path d="M12 22V8"/><path d="M12 8c-2 0-4-2-4-5 2 0 4 2 4 5zM12 8c2 0 4-2 4-5-2 0-4 2-4 5z"/><path d="M12 13c-2 0-4-2-4-4 2 0 4 2 4 4zM12 13c2 0 4-2 4-4-2 0-4 2-4 4z"/><path d="M12 18c-2 0-4-2-4-4 2 0 4 2 4 4zM12 18c2 0 4-2 4-4-2 0-4 2-4 4z"/></svg>',
  palm: '<svg viewBox="0 0 24 24"><path d="M12 22c0-6 0-10-1-13"/><path d="M11 9C9 5 5 5 3 7M11 9c2-4 6-4 8-2M11 9c-4 0-6 3-6 6M11 9c4 0 7 2 7 6"/><path d="M8 22h8"/></svg>',
};

/* ---------- المحتوى (من ملف العرض "الشاشة التفاعلية - معدلة") ---------- */
const CONTENT = {
  company: 'الشركة الوطنية للخدمات الزراعية',
  tagline: 'خدمات زراعية موثوقة',

  // الترتيب كما في الملف: يمين ← يسار، الصف الأول ثم الثاني
  home: [
    { to: 'about',          title: 'عن الشركة', icon: 'about',    img: 'exhibition' },
    { to: 'services-intro', title: 'خدماتنا',  icon: 'services', img: 'greenhouse' },
    { to: 'competitions',   title: 'منافسات أسواق النفع العام والمسالخ', icon: 'market', img: 'market' },
    { to: 'app',            title: 'تطبيق الخدمات الزراعية', icon: 'app', img: 'dates-man' },
    { to: 'works',          title: 'أعمالنا',  icon: 'works',    img: 'horse-race' },
    { to: 'numbers',        title: 'أرقامنا',  icon: 'numbers',  img: 'camels' },
  ],

  about: {
    intro: 'شركة حكومية، تُعنى بتقديم وتطوير الخدمات الزراعية، وتمكين المزارعين والمربين والمنشآت التجارية، من خلال رفع كفاءة التشغيل وتعزيز جودة الخدمات والإنتاجية؛ بما يسهم في تنمية القطاع الزراعي وتحقيق مستهدفاته.',
    vision: 'أن نكون الشركة الموثوقة والرائدة في تقديم الخدمات للقطاع الزراعي في المملكة.',
    mission: 'تقديم خدمات ذات جودة وكفاءة عالية، لتمكين نمو القطاع الزراعي والمساهمة في الاستدامة الاقتصادية والتنمية الاجتماعية للمملكة.',
    values: ['شريك موثوق', 'العميل أولاً', 'أداء متميز', 'فريق واحد'],
    fields: [['الثروة الحيوانية', 'cow'], ['الثروة النباتية', 'plant'], ['الثروة السمكية', 'fish']],
  },

  servicesIntro: 'تقدم الشركة مجموعة من الخدمات الزراعية لتلبية احتياجات المستفيدين، إلى جانب تطوير خدمات ذات القيمة المضافة التي توفر حلولاً وخيارات تخدم القطاع الزراعي.',

  services: [
    { title: 'خدمات المحاجر', img: 'inspection', more: 'quarantine',
      desc: 'أذونات الاستيراد والتصدير والعبور للثروة النباتية والحيوانية والسمكية، وفسح الإرساليات من خلال المحاجر في المنافذ الجمركية، وإجراء الفحوصات والكشوفات المخبرية.' },
    { title: 'الاستشارات والتسويق الزراعي', img: 'farm',
      desc: 'العمل على تطوير نموذج العمل الحالي لخدمات الإرشاد الزراعي المقدمة للمزارعين والمشاريع الزراعية لتتحول إلى خدمات استشارية متكاملة من الإنتاج إلى التسويق.' },
    { title: 'خدمات أسواق النفع العام', img: 'market2',
      desc: 'تطوير البنية التحتية والنماذج التشغيلية لأسواق النفع العام المسندة للشركة من قبل وزارة البيئة والمياه والزراعة من خلال طرحها كمنافسات.' },
    { title: 'خدمات المسالخ', img: 'sheep',
      desc: 'تطوير البنية التحتية والنماذج التشغيلية للمسالخ المسندة للشركة من قبل وزارة البيئة والمياه والزراعة من خلال طرحها كمنافسات.' },
    { title: 'خدمات العيادات والوقاية من الأمراض والآفات', img: 'vet-horse',
      desc: 'تقديم العلاج والتحصين وخدمات البرامج الوقائية لملاك الإبل، والخيل، والماشية، والحيوانات الأليفة والفطرية من خلال العيادات البيطرية الثابتة والمتنقلة.' },
    { title: 'خدمات إصدار التراخيص، التصاريح، الشهادات وتسجيل المدخلات الزراعية', img: 'seedlings',
      desc: 'تشمل إصدار التراخيص والتصاريح والشهادات المتعلقة بالثروة النباتية والحيوانية والسمكية، وتراخيص المنشآت البيطرية وأسواق النفع العام ومزاولة المهن الزراعية والبيطرية وتسجيل المدخلات الزراعية.' },
  ],

  quarantine: [
    { t: 'حجر طيور الزينة المستوردة', d: 'خدمة لحجر الطيور الحيّة المستوردة للمنشأة التي لا تملك مركز بيع وتوزيع الطيور وذلك بهدف تطبيق الإجراءات المحجرية لمتابعة الحالة الصحية بعد الفسح المشروط خلال الأيام الثلاثة الأولى؛ بهدف التأكد من سلامة الطيور.' },
    { t: 'خدمة حجز موعد الإجراء المحجري', d: 'تمكّن المستورد والمخلص الجمركي من حجز موعد مسبق للحصول على الخدمات المحجرية عند المنافذ.' },
    { t: 'خدمات تحصين المواشي', d: 'خدمة حجز موعد لتحصين المواشي المستوردة في منفذي الخمرة والحديثة.' },
    { t: 'أذونات المنتجات الغذائية', d: 'تتيح للمستفيد التقدم بطلب الحصول على أذونات استيراد المنتجات الغذائية وذلك للتأكد من مطابقتها للمواصفات والاشتراطات الصحية والفنية المعتمدة قبل دخولها إلى المملكة.' },
    { t: 'الاستشارات الفنية لخدمات التسجيل', d: 'خدمة إلكترونية لحجز موعد مع مستشارين مختصين في مجال تسجيل المدخلات الزراعية (مبيدات، أسمدة، بذور، أو محسنات التربة)، لتسهيل الحصول على شهادة التسجيل.' },
    { t: 'فسح السلع المقيدة', d: 'خدمة إلكترونية تتيح للمصدّرين تقديم طلب إصدار إذن فسح للسلع المقيّدة ومطابقة البيانات والمرفقات المطلوبة إلكترونياً.' },
    { t: 'خدمات محجر الخيل الدولي', d: 'خدمة إذن التصدير الدائم أو المؤقت تشمل زيارة ميدانية لسحب العينات وتحليلها في المختبر المرجعي الدولي لإصدار الإذن.' },
    { t: 'الخدمات المحجرية الخاصة', d: 'تشمل إنهاء إجراءات فسح الإرساليات الحيوانية والنباتية في المنافذ الجمركية التي لا تتوفر فيها الخدمات المحجرية.' },
  ],
  fastTrackIntro: 'تسهل وتسرّع إتمام كافة الإجراءات الحكومية وغير الحكومية المتعلقة بأذونات الاستيراد والتصدير والعبور للإرساليات الحيوانية والنباتية عبر المنافذ الحدودية والتراخيص للمشاريع الزراعية.',

  fastTrack: {
    licenses: {
      t: 'المسار السريع لخدمات الكشف الميداني للتراخيص',
      d: 'يُسهّل ويسرّع إنجاز إجراءات الكشف الميداني، لإصدار أو تجديد التراخيص الزراعية.',
      items: ['ترخيص الثروة الحيوانية', 'ترخيص الثروة السمكية', 'ترخيص الثروة النباتية', 'ترخيص الدواجن', 'ترخيص المنشآت البيطرية'],
    },
    permits: {
      t: 'المسار السريع لإصدار الأذونات',
      d: 'يُسهّل ويسرّع إصدار موافقات واعتمادات أذونات الإرساليات الحيوانية والنباتية عبر المنافذ الحدودية.',
      items: ['أذونات الصقور', 'أذونات تنقل الإبل', 'أذونات المواشي', 'أذونات النحل', 'أذونات الحيوانات الأليفة', 'أذونات بيض التفقيس/الصيصان',
              'المنتجات النباتية (زهور مقطوفة)', 'أذونات الخضار والفواكه', 'أذونات المخلفات الحيوانية', 'أذونات الطيور الحيّة', 'أذونات المستلزمات الطبية', 'أذونات الكائنات الفطرية'],
    },
  },

  competitions: {
    intro: 'تقوم الشركة بطرح مواقع أسواق النفع العام والمسالخ المسندة لها كمنافسات في منصة فرص وعلى موقع الشركة بهدف:',
    goals: [['تطوير البنية التحتية', 'build'], ['تطوير نماذج التشغيل', 'gear'], ['ضمان تقديم الخدمة بجودة مميزة', 'star']],
    qrUrl: 'agriserv.sa/investment-opportunities',
  },

  platform: {
    intro: 'منصة رقمية موحدة تهدف إلى تمكين المزارعين والمنتجين المحليين والمستثمرين من:',
    mgmt: ['إدارة المواقع', 'إدارة الوحدات', 'إدارة العقود'],
    cats: [['الطيور', 'bird'], ['اللحوم', 'meat'], ['الخضار والفواكه', 'apple'], ['المواشي', 'cow'],
           ['الحطب والفحم', 'fire'], ['الأسماك', 'fish'], ['الأعلاف', 'wheat'], ['التمور', 'palm']],
    // ضع صورة الباركود الخاصة بالمنصة في هذا المسار
    qr: 'assets/qr/markets-platform.png',
  },

  app: {
    intro: 'منصة رقمية تربط العملاء بمقدمي الخدمات الزراعية وتتيح الوصول إلى الخدمات والاستفادة منها بسهولة.',
    slogan: 'موثوقية .. كفاءة .. جودة .. سرعة',
    features: [
      ['سهولة الوصول', 'إلى الخدمات الزراعية.', 'tap'],
      ['خدمات متنوعة', 'تلبي احتياجات المستفيدين.', 'grid'],
      ['مقدمو خدمة مؤهلون', 'لتقديم خدمات موثوقة.', 'shield'],
      ['جودة خدمات', 'لتجربة أكثر كفاءة.', 'star'],
    ],
    qrUrl: 'agriserv.sa/app',
  },

  works: [
    { id: 'hajj',  title: 'أعمال موسم الحج', img: 'sheep' },
    { id: 'camel', title: 'مهرجان الملك عبد العزيز للإبل', img: 'camel-sunset' },
    { id: 'taif',  title: 'موسم سباقات الطائف', img: 'horse-race' },
    { id: 'cup',   title: 'كأس السعودية', img: 'horse-quarantine' },
  ],

  // الفيديو: ضع ملف الفيديو بنفس الاسم في assets/video/works/ — وإن لم يوجد تُعرض الصور تلقائياً
  workDetails: {
    hajj: {
      title: 'أعمال موسم الحج 1447 هـ',
      video: 'assets/video/works/hajj.mp4', imgs: ['sheep', 'cows', 'inspection', 'market'],
      text: 'تستقبل الشركة الوطنية للخدمات الزراعية إرساليات موسم الحج عبر 4 محاجر رئيسية ومحجرين مساندة لإنهاء الإجراءات المحجرية لفسح الإرساليات الواردة للمملكة.',
      stats: [['الإرساليات الحيوانية', '+2 مليون رأسًا من الماشية'], ['الإرساليات النباتية', '+120 طنًا من الخضار والفواكه']],
    },
    camel: {
      title: 'مهرجان الملك عبد العزيز للإبل 2025',
      video: 'assets/video/works/camel.mp4', imgs: ['camel-sunset', 'camels'],
      text: 'تشارك الشركة الوطنية للخدمات الزراعية في كل عام في مهرجان الملك عبد العزيز للإبل حيث تقوم باستكمال إجراءات الإبل المشاركة في المهرجان بعد التأكد من سلامتها.',
      listTitle: 'كما توفر خدمات عبر تطبيق الخدمات الزراعية وتشمل:',
      list: ['خدمات التحصين', 'الخدمات العيادية البيطرية', 'تسجيل وترقيم الإبل'],
    },
    taif: {
      title: 'موسم سباقات الطائف',
      video: 'assets/video/works/taif.mp4', imgs: ['horse-race', 'vet-horse'],
      text: 'تشارك الشركة الوطنية للخدمات الزراعية في موسم سباقات الطائف لتقديم خدمة الفحص الوقائي الذي يضمن سلامة الخيول المشاركة وإصدار أذونات التنقل إلكترونيّاً، ويأتي ذلك بهدف حماية الخيول المشاركة وتقيّدها بإجراءات الأمن الوقائي.',
    },
    cup: {
      title: 'كأس السعودية',
      video: 'assets/video/works/cup.mp4', imgs: ['horse-quarantine', 'monitoring', 'office', 'vet-horse'],
      text: 'تشارك الشركة الوطنية للخدمات الزراعية في كأس السعودية بتقديم الخدمات المحجرية والإشراف المستمر على صحة وسلامة الخيل المشاركة والقادمة من خارج المملكة طوال فترة السباقات.',
      more: 'يُعد المحجر الدولي للخيل بالجنادرية الوجهة الأولى لإتمام كافة الإجراءات المحجرية المتعلقة بالخيل في المملكة العربية السعودية. وتشمل خدمات المحجر إصدار شهادات تصدير الخيل، وأذونات استيراد وتصدير وعبور الخيل عبر أراضي المملكة، بالإضافة إلى الإشراف على الحجر المؤقت للخيل المشاركة في البطولات والمنافسات الدولية التي تُقام في المملكة.',
    },
  },

  // n = الرقم، unit = الوحدة بعد الرقم، plus = إظهار علامة +
  numbers: [
    { n: 280, plus: true, unit: '', label: 'خدمة مُطلقة حتى الآن', cls: 'big hl' },
    { n: 900, plus: true, unit: 'ألف', label: 'إذن مُصدر حتى الآن' },
    { n: 121, plus: true, unit: 'ألف', label: 'ترخيص مُصدر حتى الآن' },
    { n: 15, plus: true, unit: 'مليون', label: 'رأسًا من الماشية المستوردة تم تحصينها حتى الآن', cls: 'big' },
    { n: 2, plus: true, unit: 'مليون', label: 'رأسًا من الماشية تم فسحها خلال موسم حج 1447هـ' },
    { n: 120, plus: true, unit: 'مليون', label: 'طنًا من الخضار والفواكه تم فسحها خلال موسم حج 1447هـ' },
    { n: 900, plus: true, unit: '', label: 'منافسة طُرحت لأسواق النفع العام والمسالخ', cls: 'big hl' },
    { n: 67, plus: false, unit: '', label: 'مذكرة تعاون' },
    { n: 9, plus: false, unit: '', label: 'شهادات آيزو' },
  ],
};

/* ---------- أدوات ---------- */
const img = name => `assets/img/${name}.jpg`;
const rise = (i, extra = '', style = '') => `class="rise ${extra}" style="--i:${i};${style}"`;
const head = (eyebrow, title, i = 0) =>
  `<div ${rise(i)}><div class="eyebrow">${eyebrow}</div><h2 class="title">${title}</h2></div>`;
const goBtn = (to, label, cls = '') => `<button class="btn ${cls}" data-go="${to}">${label} ${I.arrow}</button>`;

/* ---------- الشاشات ---------- */
const SCREENS = {
  start: { bg: 'video', topbar: false, html: () => `
    <img class="start-logo rise" style="--i:0" src="assets/logo/agriserv-logo-vertical-white.svg" alt="">
    <h1 ${rise(1)}>${CONTENT.company}</h1>
    <div ${rise(2, 'tag')}>${CONTENT.tagline}</div>
    <button ${rise(3, 'start-btn')} data-go="home">اكتشف المزيد عن الشركة ${I.arrow}</button>
    <div class="hint">المس الشاشة للبدء</div>` },

  home: { bg: 'video', html: () => `
    <div class="home-head">${head(CONTENT.tagline, CONTENT.company)}</div>
    <div class="tiles">
      ${CONTENT.home.map((t, i) => `
        <button ${rise(i + 1, 'tile')} data-go="${t.to}">
          <div class="tile-img" style="background-image:url(${img(t.img)})"></div>
          <div class="tile-icon">${I[t.icon]}</div>
          <b>${t.title}</b>
          <small>استعرض ${I.arrow}</small>
        </button>`).join('')}
    </div>` },

  about: { html: () => { const a = CONTENT.about; return `
    <div class="about-grid">
      <div class="intro">
        ${head('من نحن', 'عن الشركة')}
        <p ${rise(1, 'lead')}>${a.intro}</p>
        <div ${rise(2)}>
          <div class="eyebrow">مجالات عملنا</div>
          <div class="fields">${a.fields.map(([f, ic]) => `<div class="field">${I[ic]}${f}</div>`).join('')}</div>
        </div>
      </div>
      <div class="about-cards">
        <div ${rise(2, 'glass wide')}><h3>${I.eye}رؤيتنا</h3><p>${a.vision}</p></div>
        <div ${rise(3, 'glass wide')}><h3>${I.target}رسالتنا</h3><p>${a.mission}</p></div>
        <div ${rise(4, 'glass wide')}><h3>${I.heart}قيمنا</h3>
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
      <div ${rise(1, 'photo', `background-image:url(${img('greenhouse')})`)}></div>
    </div>` },

  services: { html: () => `
    <div class="page-head">${head('المس الخدمة لعرض التفاصيل', 'خدماتنا')}</div>
    <div class="cards">
      ${CONTENT.services.map((s, i) => `
        <div ${rise(i + 1, 'card')} data-flip>
          <div class="face front">
            <div class="tile-img" style="background-image:url(${img(s.img)})"></div>
            <b>${s.title}</b>
            <div class="tap">${I.tap} المس للتفاصيل</div>
          </div>
          <div class="face back">
            <b>${s.title}</b>
            <p>${s.desc}</p>
            ${s.more ? `<button class="btn" data-go="${s.more}">استعرض الخدمات ${I.arrow}</button>` : ''}
          </div>
        </div>`).join('')}
    </div>` },

  quarantine: { html: () => `
    <div class="page-head">${head('المس الخدمة لعرض التفاصيل', 'خدمات المحاجر')}</div>
    <div class="sub-grid">
      ${CONTENT.quarantine.map((q, i) => `
        <button ${rise(i + 1, 'sub glass')} data-modal="${i}">
          <div class="num">${i + 1}</div>
          <b>${q.t}</b>
          <span class="tap">${I.tap} التفاصيل</span>
        </button>`).join('')}
    </div>
    <button ${rise(9, 'fast glass')} data-go="fasttrack">
      <span class="ic">${I.bolt}</span>
      <div><b>خدمات المسار السريع</b><p>${CONTENT.fastTrackIntro}</p></div>
      <span class="btn ghost">المزيد ${I.arrow}</span>
    </button>` },

  fasttrack: { html: () => { const f = CONTENT.fastTrack; const list = items =>
      `<div class="ft-list">${items.map(x => `<div class="ft-item">${I.check}${x}</div>`).join('')}</div>`; return `
    <div class="page-head">${head('خدماتنا', 'خدمات المسار السريع')}</div>
    <div class="ft-cols">
      <div ${rise(1, 'ft-col glass')}><h3>${f.licenses.t}</h3><p>${f.licenses.d}</p>${list(f.licenses.items)}</div>
      <div ${rise(2, 'ft-col glass two')}><h3>${f.permits.t}</h3><p>${f.permits.d}</p>${list(f.permits.items)}</div>
    </div>`; } },

  competitions: { html: () => { const c = CONTENT.competitions; return `
    <div class="split">
      <div class="col">
        ${head('الاستثمار', 'منافسات أسواق النفع العام والمسالخ')}
        <p ${rise(1, 'lead')}>${c.intro}</p>
        <div class="goals three">${c.goals.map(([g, ic], i) => `<div ${rise(i + 2, 'goal glass')}><span class="ic">${I[ic]}</span>${g}</div>`).join('')}</div>
        <div ${rise(5)}>
          <div class="qr-box glass" style="display:inline-flex">
            <img src="assets/qr/competitions.png" alt="">
            <div class="qr-text"><b>اطّلع على المنافسات المطروحة</b><span>${c.qrUrl}</span></div>
          </div>
        </div>
        <div ${rise(6)}>${goBtn('platform', 'تعرّف على منصة أسواق النفع العام')}</div>
      </div>
      <div ${rise(2, 'photo', `background-image:url(${img('market')})`)}></div>
    </div>`; } },

  platform: { html: () => { const p = CONTENT.platform; return `
    <div class="split" style="grid-template-columns:1.2fr 1fr">
      <div class="col" style="gap:26px">
        ${head('منصة رقمية موحدة', 'منصة أسواق النفع العام')}
        <p ${rise(1, 'lead', 'font-size:28px')}>${p.intro}</p>
        <div ${rise(2, 'mgmt')}>${p.mgmt.map(m => `<div class="glass">${m}</div>`).join('')}</div>
        <div ${rise(3)}><div class="eyebrow">في مختلف مدن المملكة وتشمل:</div>
          <div class="cats">${p.cats.map(([c, ic]) => `<div class="cat glass">${I[ic]}${c}</div>`).join('')}</div></div>
        <div ${rise(4, 'row')} data-qr-wrap>
          <div class="qr-box glass"><img src="${p.qr}" alt="" data-qr>
            <div class="qr-text"><b>للاطلاع على المنصة</b><span>امسح الرمز</span></div></div>
        </div>
      </div>
      <div ${rise(2, 'photo', `background-image:url(${img('market3')})`)}></div>
    </div>`; } },

  app: { html: () => { const a = CONTENT.app; return `
    <div class="split">
      <div class="col" style="gap:28px">
        ${head(a.slogan, 'تطبيق الخدمات الزراعية')}
        <p ${rise(1, 'lead')}>${a.intro}</p>
        <div class="features">${a.features.map(([t, d, ic], i) => `
          <div ${rise(i + 2, 'feature glass')}><span class="ic">${I[ic]}</span><div><b>${t}</b><span>${d}</span></div></div>`).join('')}</div>
        <div ${rise(6, 'row', 'flex-wrap:nowrap')}>
          <button class="choice glass" data-go="app-client"><span class="ic">${I.user}</span>اطلب خدمات زراعية متنوعة!</button>
          <button class="choice glass" data-go="app-provider"><span class="ic">${I.briefcase}</span>قدّم خدماتك كمقدم خدمة في التطبيق!</button>
        </div>
      </div>
      <div ${rise(2, 'photo', `background-image:url(${img('dates-man')})`)}></div>
    </div>`; } },

  'app-client': { html: () => `
    <div class="split">
      <div class="col">
        ${head('تطبيق الخدمات الزراعية', 'يقدم لك تطبيق الخدمات الزراعية:')}
        <div ${rise(1, 'stat-pair')}>
          <div class="glass"><b>+170</b><span>خدمة</span></div>
          <div class="glass"><b>+120</b><span>مقدم خدمة</span></div>
        </div>
        <div ${rise(2, 'goal glass')}><span class="ic">${I.shield}</span>مقدمو خدمات مرخصون ومؤهلون</div>
        <div ${rise(3)}><div class="eyebrow">حمّل التطبيق الآن وتصفح الخدمات</div>
          <div class="qr-box glass" style="display:inline-flex"><img src="assets/qr/app.png" alt="">
            <div class="qr-text"><b>امسح الرمز للتحميل</b><span>${CONTENT.app.qrUrl}</span></div></div></div>
        <div ${rise(4)}>${goBtn('app-provider', 'هل أنت مقدم خدمة؟', 'ghost')}</div>
      </div>
      <div ${rise(2, 'photo', `background-image:url(${img('vet-horse')})`)}></div>
    </div>` },

  'app-provider': { html: () => `
    <div class="split">
      <div class="col">
        ${head('تطبيق الخدمات الزراعية', 'سجّل كمقدم خدمة واستفد من:')}
        <div class="goals">
          ${[['حملات تسويقية في التطبيق', 'megaphone'], ['الوصول لأكبر عدد من العملاء', 'users'], ['إدارة الخدمات إلكترونياً', 'monitor']]
            .map(([t, ic], i) => `<div ${rise(i + 1, 'goal glass')}><span class="ic">${I[ic]}</span>${t}</div>`).join('')}
        </div>
        <div ${rise(4)}><div class="eyebrow">حمّل التطبيق وسجّل كمقدم خدمة الآن</div>
          <div class="qr-box glass" style="display:inline-flex"><img src="assets/qr/app.png" alt="">
            <div class="qr-text"><b>امسح الرمز للتسجيل</b><span>${CONTENT.app.qrUrl}</span></div></div></div>
        <div ${rise(5)}>${goBtn('app-client', 'هل تبحث عن خدمة؟', 'ghost')}</div>
      </div>
      <div ${rise(2, 'photo', `background-image:url(${img('farm')})`)}></div>
    </div>` },

  works: { html: () => `
    <div class="page-head">${head('مشاركاتنا', 'أعمالنا')}</div>
    <div class="works">
      ${CONTENT.works.map((w, i) => `
        <button ${rise(i + 1, 'tile')} data-go="work-${w.id}">
          <div class="tile-img" style="background-image:url(${img(w.img)})"></div>
          <div class="tile-icon">${I.works}</div>
          <b>${w.title}</b><small>شاهد ${I.arrow}</small>
        </button>`).join('')}
    </div>
    <div ${rise(5, 'marquee')}>
      <div class="track">${[0, 50, 100, 0, 50, 100].map(y => `<div class="logo-row" style="background-position:0 ${y}%"></div>`).join('')}</div>
    </div>` },

  numbers: { html: () => `
    <div class="page-head">${head('أرقامنا', 'أرقام تعكس الجهود')}</div>
    <div class="numbers">
      ${CONTENT.numbers.map((n, i) => `
        <div ${rise(i + 1, 'number glass ' + (n.cls || ''))}>
          <b><bdi dir="ltr">${n.plus ? '+' : ''}<span data-count="${n.n}">0</span></bdi>${n.unit ? `<span class="u">${n.unit}</span>` : ''}</b>
          <span>${n.label}</span>
        </div>`).join('')}
    </div>` },
};

// صفحات تفاصيل الأعمال
for (const [id, w] of Object.entries(CONTENT.workDetails)) {
  SCREENS['work-' + id] = { html: () => `
    <div class="work-detail">
      <div ${rise(0, 'media')} data-media="${w.video}" data-imgs="${w.imgs.join(',')}"></div>
      <div class="col">
        ${head('أعمالنا', w.title, 1)}
        <p ${rise(2, 'lead')}>${w.text}</p>
        ${w.stats ? `<div ${rise(3, 'work-stats')}>${w.stats.map(([s, v]) => `<div class="glass"><small>${s}</small><b>${v}</b></div>`).join('')}</div>` : ''}
        ${w.list ? `<div ${rise(3)}><div class="eyebrow">${w.listTitle}</div>
          <div class="ft-list">${w.list.map(x => `<div class="ft-item">${I.check}${x}</div>`).join('')}</div></div>` : ''}
        ${w.more ? `<p ${rise(3, 'more-text')}>${w.more}</p>` : ''}
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
let mediaTimer = null;

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

  if (id === 'numbers') countUp(next);
  const media = next.querySelector('[data-media]');
  if (media) startMedia(media);
}

function back() { go(current === 'home' ? 'start' : (navStack.pop() || 'home'), { push: false }); }

function cleanup(el) {
  closeModal();
  el.querySelectorAll('[data-flip].flipped').forEach(c => c.classList.remove('flipped'));
  const media = el.querySelector('[data-media]');
  if (media) { clearInterval(mediaTimer); setTimeout(() => (media.innerHTML = ''), 600); }
}

/* فيديو صفحة العمل، أو عرض صور إن لم يوجد الفيديو */
function startMedia(box) {
  box.innerHTML = '';
  const v = document.createElement('video');
  v.src = box.dataset.media; v.playsInline = true; v.autoplay = true;
  v.addEventListener('error', () => slideshow(box), { once: true });
  v.addEventListener('loadeddata', () => {
    const btn = document.createElement('button');
    btn.className = 'sound';
    const sync = () => (btn.innerHTML = v.muted ? I.mute : I.sound);
    btn.onclick = e => { e.stopPropagation(); v.muted = !v.muted; sync(); };
    v.play().catch(() => { v.muted = true; v.play(); }).finally(sync);
    box.appendChild(btn);
  }, { once: true });
  box.appendChild(v);
}
function slideshow(box) {
  box.innerHTML = box.dataset.imgs.split(',').map(n => `<div class="slide" style="background-image:url(${img(n)})"></div>`).join('');
  const slides = [...box.children]; let i = 0;
  slides[0].classList.add('on');
  clearInterval(mediaTimer);
  if (slides.length > 1) mediaTimer = setInterval(() => {
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

/* نافذة تفاصيل خدمات المحاجر */
const modal = document.createElement('div');
modal.id = 'modal';
modal.innerHTML = '<div class="modal-card glass"><div class="num"></div><h3></h3><p></p><button class="btn ghost" data-close>إغلاق</button></div>';
stage.appendChild(modal);
function openModal(i) {
  const q = CONTENT.quarantine[i];
  modal.querySelector('.num').textContent = +i + 1;
  modal.querySelector('h3').textContent = q.t;
  modal.querySelector('p').textContent = q.d;
  modal.classList.add('show');
}
const closeModal = () => modal.classList.remove('show');

/* حركة الضغط على كل الأزرار */
const TOUCHABLE = 'button, [data-go], [data-flip], [data-modal]';
const NO_MOTION = '.tile, .card, .sub, .choice, .fast, .goal, .cat, .feature';
document.addEventListener('pointerdown', e => {
  const el = e.target.closest(TOUCHABLE);
  if (!el || el.matches(NO_MOTION)) return;
  el.classList.add('pressed');
  const release = () => { el.classList.remove('pressed'); removeEventListener('pointerup', release); removeEventListener('pointercancel', release); };
  addEventListener('pointerup', release); addEventListener('pointercancel', release);
  if (el.matches('[data-flip], img')) return;           // البطاقات والشعار: حركة تصغير فقط
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
  if (modal.classList.contains('show')) { if (!e.target.closest('.modal-card') || e.target.closest('[data-close]')) closeModal(); return; }
  const m = e.target.closest('[data-modal]');
  if (m) { openModal(m.dataset.modal); return; }
  const goEl = e.target.closest('[data-go]');
  if (goEl) { goSoon(goEl.dataset.go); return; }
  const card = e.target.closest('[data-flip]');
  if (card) {
    const was = card.classList.contains('flipped');
    card.parentElement.querySelectorAll('[data-flip]').forEach(c => c.classList.remove('flipped'));
    if (!was) card.classList.add('flipped');
  }
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
