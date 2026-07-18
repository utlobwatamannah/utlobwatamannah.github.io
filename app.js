// Services Database
const servicesData = [
    // 1. Home & Cleaning Services (home)
    {
        id: "home-cleaning",
        category: "home",
        titleAr: "تنظيف منازل شامل",
        titleEn: "Deep House Cleaning",
        descAr: "تنظيف شامل للفيلات والشقق، تنظيف السجاد، الكنب، الستائر، وجلي الأرضيات بأفضل المعدات.",
        descEn: "Complete cleaning for villas and apartments, including carpets, sofas, curtains, and floor polishing.",
        timeAr: "خلال 24-48 ساعة",
        timeEn: "Within 24-48 hrs",
        rating: 4.9,
        image: "assets/cleaning.png"
    },
    {
        id: "home-hourly",
        category: "home",
        titleAr: "عاملات تنظيف بالساعة",
        titleEn: "Hourly Maid Service",
        descAr: "خدمات تنظيف دورية ويومية للمنازل والمكاتب بواسطة عاملات محترفات وأمينات.",
        descEn: "Regular and daily cleaning services for homes and offices by professional and reliable maids.",
        timeAr: "حسب الطلب",
        timeEn: "On demand",
        rating: 4.8,
        image: "assets/cleaning.png"
    },
    {
        id: "home-plumbing",
        category: "home",
        titleAr: "صيانة سباكة وصحية",
        titleEn: "Plumbing & Sanitary Service",
        descAr: "كشف التسربات، إصلاح الأعطال الصحية، تركيب وتصليح الخلاطات والمضخات والخزانات.",
        descEn: "Leak detection, sanitary repairs, installation and repair of faucets, pumps, and water tanks.",
        timeAr: "تنفيذ فوري",
        timeEn: "Immediate execution",
        rating: 4.7,
        image: "assets/cleaning.png"
    },
    {
        id: "home-electric",
        category: "home",
        titleAr: "صيانة وإصلاح كهرباء",
        titleEn: "Electrical Repair Service",
        descAr: "تصليح جميع أعطال الكهرباء المنزلية، تمديد خطوط جديدة، وتركيب لوحات التوزيع والإنارة.",
        descEn: "Repairing all home electrical faults, extending new lines, and installing distribution boards and lighting.",
        timeAr: "تنفيذ فوري",
        timeEn: "Immediate execution",
        rating: 4.9,
        image: "assets/cleaning.png"
    },
    {
        id: "home-ac",
        category: "home",
        titleAr: "صيانة وتنظيف مكيفات",
        titleEn: "AC Repair & Cleaning",
        descAr: "تنظيف فلاتر، تعبئة غاز، إصلاح لوحات التحكم وتبريد وتدفئة جميع أنواع المكيفات.",
        descEn: "Filter cleaning, gas refilling, control board repairs, and servicing of heating/cooling systems.",
        timeAr: "خلال 24 ساعة",
        timeEn: "Within 24 hours",
        rating: 4.8,
        image: "assets/cleaning.png"
    },
    
    // 2. Papers & Translation (documents)
    {
        id: "doc-translation",
        category: "documents",
        titleAr: "ترجمة معتمدة وترجمة محلفة",
        titleEn: "Certified Translation",
        descAr: "ترجمة رسمية معتمدة لكافة الوثائق والشهادات والأوراق الرسمية من وإلى جميع اللغات.",
        descEn: "Official certified translation for all documents, certificates, and papers to/from all major languages.",
        timeAr: "24-48 ساعة",
        timeEn: "24-48 hours",
        rating: 4.9,
        image: "" // Will render CSS placeholder
    },
    {
        id: "doc-attestation",
        category: "documents",
        titleAr: "تصديق وتوثيق المستندات",
        titleEn: "Document Attestation",
        descAr: "تسيير وتصديق الأوراق الرسمية لدى الخارجية، العدل، السفارات، والجهات الحكومية.",
        descEn: "Attesting and legalizing official papers at Ministry of Foreign Affairs, Justice, Embassies, etc.",
        timeAr: "2-3 أيام عمل",
        timeEn: "2-3 business days",
        rating: 4.7,
        image: ""
    },
    {
        id: "doc-pr",
        category: "documents",
        titleAr: "تعقيب المعاملات الحكومية",
        titleEn: "Government Transaction Processing",
        descAr: "متابعة وإنجاز كافة المعاملات والموافقات والوثائق الحكومية وتوفير وقتك وجهدك.",
        descEn: "Following up and completing all government transactions, permits, and official records.",
        timeAr: "مرن حسب المعاملة",
        timeEn: "Flexible per request",
        rating: 4.8,
        image: ""
    },

    // 3. Electronic Services (electronic)
    {
        id: "elec-bills",
        category: "electronic",
        titleAr: "دفع الفواتير والمدفوعات الإلكترونية",
        titleEn: "Electronic Bill Payment",
        descAr: "دفع فواتير الكهرباء، المياه، الهاتف، والإنترنت والرسوم الحكومية إلكترونياً وبسرعة.",
        descEn: "Paying electricity, water, telephone, internet bills and government fees electronically.",
        timeAr: "دفع فوري",
        timeEn: "Instant payment",
        rating: 4.9,
        image: ""
    },
    {
        id: "elec-transfer",
        category: "electronic",
        titleAr: "حوالات الهرم والفؤاد والمدفوعات",
        titleEn: "Al-Haram & Al-Fouad Money Services",
        descAr: "المساعدة في استلام وإرسال الحوالات المالية الداخلية وتسهيل الخدمات النقدية.",
        descEn: "Assisting in sending and receiving domestic money transfers and facilitating cash operations.",
        timeAr: "خلال نفس اليوم",
        timeEn: "Same day service",
        rating: 4.8,
        image: ""
    },
    {
        id: "elec-smartcard",
        category: "electronic",
        titleAr: "خدمات البطاقة الذكية",
        titleEn: "Smart Card Services",
        descAr: "تسيير وإنجاز معاملات البطاقة الذكية العائلية والفردية وإضافة الأفراد واستحقاق الدعم.",
        descEn: "Managing family and individual smart card applications, adding members, and subsidy verification.",
        timeAr: "1-2 أيام عمل",
        timeEn: "1-2 business days",
        rating: 4.6,
        image: ""
    },

    // 4. Real Estate Services (realestate)
    {
        id: "re-rent",
        category: "realestate",
        titleAr: "تأجير شقق وعقارات",
        titleEn: "Apartment & Property Rentals",
        descAr: "نساعدك في إيجاد الشقة أو المكتب أو المحل المناسب للإيجار في أرقى المناطق وبأفضل الأسعار.",
        descEn: "Helping you find the perfect apartment, office, or shop for rent in prime areas at the best rates.",
        timeAr: "خيارات فورية",
        timeEn: "Instant options",
        rating: 4.8,
        image: "assets/real_estate.png"
    },
    {
        id: "re-sale",
        category: "realestate",
        titleAr: "بيع وشراء العقارات",
        titleEn: "Buying & Selling Properties",
        descAr: "وساطة عقارية احترافية لبيع وشراء البيوت، المحلات، المجمعات التجارية، والأراضي.",
        descEn: "Professional real estate brokerage for buying and selling homes, shops, commercial complexes, and land.",
        timeAr: "خيارات متنوعة",
        timeEn: "Diverse options",
        rating: 4.9,
        image: "assets/real_estate.png"
    },
    {
        id: "re-consulting",
        category: "realestate",
        titleAr: "استشارات عقارية وتقييم",
        titleEn: "Real Estate Consulting & Valuation",
        descAr: "دراسة السوق، فحص الملكيات، تقييم أسعار العقارات وتجهيز عقود البيع والإيجار القانونية.",
        descEn: "Market studies, property inspections, valuation, and legal preparation of sales/rental contracts.",
        timeAr: "خلال 48 ساعة",
        timeEn: "Within 48 hours",
        rating: 4.7,
        image: "assets/real_estate.png"
    },

    // 5. Tourism Services (tourism)
    {
        id: "tour-visa",
        category: "tourism",
        titleAr: "تأمين الفيز والتأشيرات",
        titleEn: "Visa & Entry Permit Assistance",
        descAr: "استخراج تأشيرات سياحية للدول العربية والأجنبية (دبي، أربيل، مصر، وغيرها) بأعلى نسب قبول.",
        descEn: "Assisting in tourist visas for Arab and foreign destinations (Dubai, Erbil, Egypt, etc.) with high approval rates.",
        timeAr: "3-7 أيام عمل",
        timeEn: "3-7 business days",
        rating: 4.9,
        image: "assets/tourism.png"
    },
    {
        id: "tour-flight",
        category: "tourism",
        titleAr: "حجوزات طيران وتذاكر",
        titleEn: "Flight Booking & Ticketing",
        descAr: "حجز تذاكر طيران على كافة الخطوط الجوية المحلية والدولية بأقل الأسعار وتأكيد الحجز فوراً.",
        descEn: "Booking flight tickets on all domestic and international airlines at competitive prices with instant confirmation.",
        timeAr: "خلال دقائق",
        timeEn: "Within minutes",
        rating: 4.8,
        image: "assets/tourism.png"
    },
    {
        id: "tour-trips",
        category: "tourism",
        titleAr: "رحلات سياحية داخلية وخارجية",
        titleEn: "Tours & Holiday Packages",
        descAr: "تنظيم رحلات ترفيهية مميزة إلى الساحل السوري والجبال والآثار، وبرامج سياحية متكاملة للخارج.",
        descEn: "Organizing holiday trips to the Syrian coast, mountains, and historic sites, plus international tours.",
        timeAr: "مواعيد مجدولة",
        timeEn: "Scheduled trips",
        rating: 4.7,
        image: "assets/tourism.png"
    },

    // 6. Transport & Logistics (transport)
    {
        id: "trans-taxi",
        category: "transport",
        titleAr: "تكسي ونقل ركاب (داخلي وخارجي)",
        titleEn: "Taxi & Passenger Transport",
        descAr: "طلب سيارة أجرة حديثة للتنقل داخل المدينة أو بين المحافظات، وسيارات خاصة للسفر إلى لبنان أو الأردن.",
        descEn: "Requesting a modern taxi for travel inside the city or between provinces, and private cars to Lebanon/Jordan.",
        timeAr: "خلال ساعة",
        timeEn: "Within 1 hour",
        rating: 4.9,
        image: "assets/shipping.png"
    },
    {
        id: "trans-cargo",
        category: "transport",
        titleAr: "شحن ونقل بضائع وأثاث",
        titleEn: "Cargo & Furniture Moving",
        descAr: "خدمات فك، تغليف، ونقل أثاث المنازل والمكاتب، وشحن البضائع بواسطة سيارات نقل مخصصة ومؤمنة.",
        descEn: "Disassembling, packing, and moving home/office furniture, and shipping cargo with secured trucks.",
        timeAr: "خلال نفس اليوم",
        timeEn: "Same day service",
        rating: 4.8,
        image: "assets/shipping.png"
    },
    {
        id: "trans-qadmus",
        category: "transport",
        titleAr: "شحن واستلام القدموس للطرود",
        titleEn: "Al-Qadmus Parcel Shipping",
        descAr: "تأمين إرسال واستلام الطرود والأمانات والوثائق عبر شركة القدموس للشحن السريع بكافة المحافظات.",
        descEn: "Securing sending and receiving of parcels, items, and papers via Al-Qadmus shipping to all provinces.",
        timeAr: "يومي",
        timeEn: "Daily runs",
        rating: 4.7,
        image: "assets/shipping.png"
    }
];

// Region Selector List
const regionsList = [
    { id: "damascus", nameAr: "دمشق", nameEn: "Damascus" },
    { id: "rif-damascus", nameAr: "ريف دمشق", nameEn: "Rif Dimashq" },
    { id: "aleppo", nameAr: "حلب", nameEn: "Aleppo" },
    { id: "homs", nameAr: "حمص تلكلخ", nameEn: "Homs Talkalakh" },
    { id: "hama", nameAr: "حماة", nameEn: "Hama" },
    { id: "latakia", nameAr: "اللاذقية", nameEn: "Latakia" },
    { id: "tartus", nameAr: "طرطوس", nameEn: "Tartus" },
    { id: "sweida", nameAr: "السويداء", nameEn: "Sweida" },
    { id: "daraa", nameAr: "درعا", nameEn: "Daraa" },
    { id: "qamishli", nameAr: "القامشلي", nameEn: "Qamishli" }
];

// Translations Dictionary
const translations = {
    // Top bar & Header
    "top-tagline": {
        ar: "شبيك لبيك.. طلبك بين إيديك ✨",
        en: "Your wish is our command ✨"
    },
    "logo-title": {
        ar: "اطلب وتمنى",
        en: "Otlob Wa Tamannah"
    },
    "logo-subtitle": {
        ar: "للخدمات المتكاملة",
        en: "INTEGRATED SERVICES"
    },
    "deliver-to": {
        ar: "التوصيل إلى",
        en: "Deliver to"
    },
    "my-requests": {
        ar: "طلباتي",
        en: "My Requests"
    },
    
    // Regions
    "damascus": { ar: "دمشق، سوريا", en: "Damascus, Syria" },
    "homs": { ar: "حمص تلكلخ، سوريا", en: "Homs Talkalakh, Syria" },
    "aleppo": { ar: "حلب", en: "Aleppo" },
    "tartous": { ar: "طرطوس", en: "Tartus" },

    // Hero Section
    "hero-main-title": {
        ar: "طلبك مجاب في لحظات!",
        en: "Your wishes fulfilled in moments!"
    },
    "hero-sub": {
        ar: "كل ما تحتاجه من خدمات تنظيف، صيانة، شحن، تعاملات عقارية، وخدمات سياحية في مكان واحد وبلمسة زر.",
        en: "Everything you need from cleaning, maintenance, transport, real estate, and travel services in one place, at the touch of a button."
    },
    "search-placeholder": {
        ar: "ابحث عن الخدمة التي تريدها... (مثال: تنظيف، شحن، عقارات)",
        en: "Search for the service you need... (e.g. cleaning, shipping, real estate)"
    },
    "search": {
        ar: "بحث",
        en: "Search"
    },

    // Categories
    "categories-title": {
        ar: "تصفح الخدمات حسب التصنيف",
        en: "Browse Services by Category"
    },
    "categories-desc": {
        ar: "اختر أحد الأقسام التالية لاستعراض الخدمات المتوفرة وطلبها مباشرة",
        en: "Select one of the sectors below to view available services and request them directly"
    },
    "cat-all": { ar: "كل الخدمات", en: "All Services" },
    "cat-home": { ar: "خدمات المنازل", en: "Home & Cleaning" },
    "cat-documents": { ar: "أوراق ووثائق", en: "Papers & Translation" },
    "cat-electronic": { ar: "خدمات إلكترونية", en: "Digital Services" },
    "cat-realestate": { ar: "خدمات عقارية", en: "Real Estate" },
    "cat-tourism": { ar: "خدمات سياحية", en: "Tourism & Travel" },
    "cat-transport": { ar: "خدمات النقل", en: "Transport & Shipping" },

    // Services dynamic count
    "all-services": { ar: "كل الخدمات", en: "All Services" },
    "services-available": {
        ar: "خدمة متوفرة",
        en: "services available"
    },
    "rating-label": { ar: "مقيم", en: "rating" },
    "add-btn": { ar: "إضافة للطلب", en: "Add to Request" },
    "added-btn": { ar: "تمت الإضافة ✔", en: "Added ✔" },
    
    // Cart Drawer
    "selected-requests": { ar: "الخدمات المختارة", en: "Selected Services" },
    "empty-cart": {
        ar: "لم تقم باختيار أي خدمات بعد. تصفح قائمتنا واختر ما تريد!",
        en: "You haven't selected any services yet. Browse our list and choose!"
    },
    "note-placeholder": {
        ar: "اكتب ملاحظاتك الخاصة بالطلب هنا... (مثال: المساحة، التوقيت المفضل، تفاصيل الخدمة)",
        en: "Write your custom notes here... (e.g. area size, preferred timing, specific details)"
    },
    "total-services": { ar: "إجمالي الخدمات:", en: "Total Services:" },
    "confirm-order": { ar: "تأكيد طلب الخدمات", en: "Confirm Request" },

    // Location Modal
    "select-region-title": { ar: "تحديد منطقة التوصيل", en: "Select Location Region" },
    "select-region-desc": {
        ar: "يرجى تحديد المحافظة التي ترغب بتلقي الخدمة فيها لضمان سرعة التنفيذ:",
        en: "Please select the governorate where you would like to receive the service to ensure quick response:"
    },

    // Checkout Modal
    "checkout-details-title": { ar: "تفاصيل الاتصال والتأكيد", en: "Contact Details & Confirmation" },
    "lbl-name": { ar: "الاسم الكامل *", en: "Full Name *" },
    "ph-name": { ar: "الاسم والكنية", en: "First and last name" },
    "lbl-phone": { ar: "رقم الموبايل *", en: "Mobile Number *" },
    "lbl-wa": { ar: "رقم الواتساب *", en: "WhatsApp Number *" },
    "lbl-address": { ar: "العنوان بالتفصيل *", en: "Detailed Address *" },
    "ph-address": {
        ar: "المنطقة، الشارع، البناء، الطابق، رقم الشقة أو علامات مميزة للمكان",
        en: "Region, street, building, floor, apartment number or nearby landmarks"
    },
    "lbl-contact-pref": { ar: "طريقة التواصل المفضلة", en: "Preferred Contact Method" },
    "pref-wa": { ar: "محادثة واتساب", en: "WhatsApp chat" },
    "pref-call": { ar: "اتصال هاتفي مباشر", en: "Direct phone call" },
    "order-summary": { ar: "ملخص الطلب", en: "Order Summary" },
    "send-wa-btn": { ar: "إرسال الطلب عبر واتساب للتأكيد", en: "Send Request via WhatsApp" },
    "validation-alert": {
        ar: "يرجى تعبئة كافة الحقول المطلوبة بشكل صحيح.",
        en: "Please fill in all required fields correctly."
    },

    // Reviews & FAQs
    "reviews-title": { ar: "ماذا يقول عملاؤنا؟", en: "What Our Customers Say" },
    "reviews-desc": {
        ar: "آراء حقيقية من عملائنا الذين جربوا خدماتنا المتميزة وسرعة تلبية رغباتهم",
        en: "Real feedback from clients who have experienced our premium services and fast delivery"
    },
    "faq-title": { ar: "الأسئلة الشائعة", en: "Frequently Asked Questions" },
    "faq-desc": {
        ar: "إجابات على الأسئلة التي قد تتبادر إلى ذهنك حول خدماتنا وطريقة الطلب",
        en: "Answers to questions you might have about our services and request process"
    },
    
    // FAQs Accordion
    "faq-q1": { ar: "كيف يمكنني تقديم طلب خدمة؟", en: "How can I request a service?" },
    "faq-a1": {
        ar: "ببساطة تصفح موقعنا واختر الخدمات التي تحتاجها واضغط على \"إضافة للطلب\"، ثم افتح سلة طلباتك واضغط \"تأكيد\". املأ بياناتك وسينقلك الموقع مباشرة إلى الواتساب الخاص بنا لإرسال الطلب المنسق وجدولة موعد فوراً.",
        en: "Simply browse our website, select the services you need and click 'Add to Request'. Then, open your cart and click 'Confirm'. Fill in your contact info, and you will be redirected to our WhatsApp to send the structured order and schedule a date."
    },
    "faq-q2": { ar: "ما هي المناطق التي تغطيها خدماتكم؟", en: "What areas do you cover?" },
    "faq-a2": {
        ar: "نحن نغطي معظم المحافظات السورية الرئيسية مثل دمشق وريفها، حلب، حمص، حماة، اللاذقية، وطرطوس. يمكنك تحديد موقعك من أعلى الصفحة لرؤية الخدمات المتاحة لمنطقتك.",
        en: "We cover most major Syrian governorates including Damascus, Rif Dimashq, Aleppo, Homs, Hama, Latakia, and Tartus. You can select your location from the top header to view available services."
    },
    "faq-q3": { ar: "هل هناك أي رسوم خفية؟", en: "Are there any hidden fees?" },
    "faq-a3": {
        ar: "كلا، نحن نؤمن بالشفافية الكاملة. عند إرسال طلبك، يقوم فريق خدمة العملاء بمراجعة تفاصيل طلبك وتزويدك بعرض سعر مفصل ودقيق قبل البدء بأي عمل.",
        en: "No, we believe in full transparency. When you send your request, our customer service team will review the details and provide a clear, detailed quote before any work starts."
    },
    "faq-q4": { ar: "كم من الوقت يستغرق البدء في تنفيذ الخدمة؟", en: "How long does it take to start the service?" },
    "faq-a4": {
        ar: "العديد من خدماتنا مثل خدمات الشحن السريع أو الاستشارات السياحية والدفع الإلكتروني تتم خلال نفس اليوم. بالنسبة للخدمات الكبيرة مثل التنظيف الشامل أو الصيانة، يتم تحديد الموعد بالتنسيق معك مباشرة بعد تأكيد الطلب، وغالباً ما يكون خلال 24 إلى 48 ساعة.",
        en: "Many services like shipping, travel consultations, and digital payments are done same-day. For larger services like cleaning or maintenance, timing is scheduled directly with you, typically within 24 to 48 hours."
    },

    // Footer
    "quick-links": { ar: "روابط سريعة", en: "Quick Links" },
    "contact-us": { ar: "اتصل بنا", en: "Contact Us" },
    "address-details": { ar: "سوريا، حمص، تلكلخ", en: "Talkalakh, Homs, Syria" },
    "footer-desc": {
        ar: "نحن بوابتك المتكاملة للحصول على شتى أنواع الخدمات المنزلية، العقارية، السياحية، واللوجستية في سوريا بأعلى جودة وأسرع وقت.",
        en: "We are your comprehensive gateway to house, real estate, tourism, and logistics services in Syria with the highest quality and fastest turnaround."
    }
};

// Global App State
const state = {
    lang: "ar", // "ar" or "en"
    currentCategory: "all",
    searchQuery: "",
    selectedRegionId: "homs",
    selectedRegionNameAr: "حمص تلكلخ",
    selectedRegionNameEn: "Homs Talkalakh",
    cart: [] // Array of { serviceId: '...', notes: '...' }
};

// Document Elements
const els = {
    body: document.body,
    html: document.documentElement,
    langToggleBtn: document.getElementById("langToggleBtn"),
    cartTriggerBtn: document.getElementById("cartTriggerBtn"),
    cartBadgeCount: document.getElementById("cartBadgeCount"),
    locationSelectBtn: document.getElementById("locationSelectBtn"),
    currentLocationText: document.getElementById("currentLocationText"),
    
    // Search
    serviceSearchInput: document.getElementById("serviceSearchInput"),
    searchBtn: document.getElementById("searchBtn"),
    
    // Category tabs
    categoryCards: document.querySelectorAll(".category-card"),
    currentCategoryTitle: document.getElementById("currentCategoryTitle"),
    servicesCountBadge: document.getElementById("servicesCountBadge"),
    
    // Grid Container
    servicesGridContainer: document.getElementById("servicesGridContainer"),
    
    // Drawer
    cartDrawer: document.getElementById("cartDrawer"),
    cartDrawerOverlay: document.getElementById("cartDrawerOverlay"),
    closeDrawerBtn: document.getElementById("closeDrawerBtn"),
    emptyCartState: document.getElementById("emptyCartState"),
    cartItemsList: document.getElementById("cartItemsList"),
    drawerFooter: document.getElementById("drawerFooter"),
    cartTotalCount: document.getElementById("cartTotalCount"),
    checkoutBtn: document.getElementById("checkoutBtn"),
    
    // Modals
    locationModal: document.getElementById("locationModal"),
    locationModalOverlay: document.getElementById("locationModalOverlay"),
    closeLocModalBtn: document.getElementById("closeLocModalBtn"),
    regionsGrid: document.getElementById("regionsGrid"),
    
    checkoutModal: document.getElementById("checkoutModal"),
    checkoutModalOverlay: document.getElementById("checkoutModalOverlay"),
    closeCheckoutModalBtn: document.getElementById("closeCheckoutModalBtn"),
    checkoutForm: document.getElementById("checkoutForm"),
    orderSummaryList: document.getElementById("orderSummaryList"),
    submitOrderBtn: document.getElementById("submitOrderBtn"),
    
    // FAQ Question buttons
    faqQuestions: document.querySelectorAll(".faq-question")
};

// SVG Icons for Services Categories (If local png fails or is missing, e.g. digital & docs)
const svgIcons = {
    home: `<svg viewBox="0 0 24 24"><path d="M21 9.996l-9-7.996-9 7.996v11.004h6v-7h6v7h6z"/></svg>`,
    documents: `<svg viewBox="0 0 24 24"><path d="M11.362 2c-.669 0-1.28.328-1.644.88l-5.551 8.402c-.366.555-.366 1.285 0 1.84l5.551 8.402c.364.552.975.88 1.644.88h7.276c1.077 0 1.949-.88 1.949-1.95v-16.51c0-1.07-.872-1.95-1.949-1.95h-7.276zm-5.068 11.238c-.365-.555-.365-1.285 0-1.84l5.551-8.402c.364-.552.975-.88 1.644-.88h1.22l-5.32 8.402c-.366.555-.366 1.285 0 1.84l5.32 8.402h-1.22c-.669 0-1.28-.328-1.644-.88l-5.551-8.402z"/></svg>`,
    electronic: `<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>`,
    realestate: `<svg viewBox="0 0 24 24"><path d="M19 2v20h-14v-20h14zm2-2h-18v24h18v-24zm-9 3h-3v2h3v-2zm0 4h-3v2h3v-2zm0 4h-3v2h3v-2zm5-8h-3v2h3v-2zm0 4h-3v2h3v-2zm0 4h-3v2h3v-2z"/></svg>`,
    tourism: `<svg viewBox="0 0 24 24"><path d="M21 16v-2l-8-5v-5.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5v5.5l-8 5v2l8-2.5v5.5l-2 1.5v1.5l3.5-1 3.5 1v-1.5l-2-1.5v-5.5l8 2.5z"/></svg>`,
    transport: `<svg viewBox="0 0 24 24"><path d="M24 10h-3v-5h-10v5h-11v8h2c0 1.657 1.343 3 3 3s3-1.343 3-3h8c0 1.657 1.343 3 3 3s3-1.343 3-3h2v-8zm-19 9c-.553 0-1-.448-1-1s.447-1 1-1 1 .448 1 1-.447 1-1 1zm14 0c-.553 0-1-.448-1-1s.447-1 1-1 1 .448 1 1-.447 1-1 1zm3-7h-3v-5h3v5z"/></svg>`
};

// Initialize Application
function init() {
    registerEventListeners();
    renderRegions();
    renderServices();
    updateCartUI();
    translatePage();
}

// Translate page text elements based on current lang
function translatePage() {
    // Toggle dir and body classes
    if (state.lang === "ar") {
        els.html.setAttribute("dir", "rtl");
        els.html.setAttribute("lang", "ar");
        els.body.classList.remove("ltr");
        els.langToggleBtn.querySelector(".lang-text").textContent = "EN";
        els.currentLocationText.textContent = state.selectedRegionNameAr;
    } else {
        els.html.setAttribute("dir", "ltr");
        els.html.setAttribute("lang", "en");
        els.body.classList.add("ltr");
        els.langToggleBtn.querySelector(".lang-text").textContent = "العربية";
        els.currentLocationText.textContent = state.selectedRegionNameEn;
    }

    // Translate all element texts using data-i18n attribute
    const translatableElements = document.querySelectorAll("[data-i18n]");
    translatableElements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[key]) {
            el.textContent = translations[key][state.lang];
        }
    });

    // Translate placeholders
    const translatablePlaceholders = document.querySelectorAll("[data-i18n-placeholder]");
    translatablePlaceholders.forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (translations[key]) {
            el.setAttribute("placeholder", translations[key][state.lang]);
        }
    });

    // Re-render components that have dynamic content in specific language
    updateDynamicHeaders();
    renderServices();
}

// Update category header title and count badge
function updateDynamicHeaders() {
    const totalCount = getFilteredServices().length;
    
    if (state.currentCategory === "all") {
        els.currentCategoryTitle.textContent = translations["all-services"][state.lang];
    } else {
        els.currentCategoryTitle.textContent = translations[`cat-${state.currentCategory}`][state.lang];
    }
    
    const countText = state.lang === "ar" 
        ? `${totalCount} ${translations["services-available"]["ar"]}`
        : `${totalCount} ${translations["services-available"]["en"]}`;
    els.servicesCountBadge.textContent = countText;
}

// Register all Event Listeners
function registerEventListeners() {
    // Language Toggle Button
    els.langToggleBtn.addEventListener("click", () => {
        state.lang = state.lang === "ar" ? "en" : "ar";
        translatePage();
    });

    // Cart Trigger Drawer toggles
    els.cartTriggerBtn.addEventListener("click", toggleCartDrawer);
    els.closeDrawerBtn.addEventListener("click", toggleCartDrawer);
    els.cartDrawerOverlay.addEventListener("click", toggleCartDrawer);

    // Location selector Modal toggles
    els.locationSelectBtn.addEventListener("click", toggleLocationModal);
    els.closeLocModalBtn.addEventListener("click", toggleLocationModal);
    els.locationModalOverlay.addEventListener("click", toggleLocationModal);

    // Checkout Modal close triggers
    els.closeCheckoutModalBtn.addEventListener("click", toggleCheckoutModal);
    els.checkoutModalOverlay.addEventListener("click", toggleCheckoutModal);

    // Search Input listeners
    els.serviceSearchInput.addEventListener("input", (e) => {
        state.searchQuery = e.target.value.trim().toLowerCase();
    });
    
    // Trigger search on enter key
    els.serviceSearchInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            renderServices();
            updateDynamicHeaders();
        }
    });
    
    els.searchBtn.addEventListener("click", () => {
        renderServices();
        updateDynamicHeaders();
    });

    // Category click listeners
    els.categoryCards.forEach(card => {
        card.addEventListener("click", () => {
            els.categoryCards.forEach(c => c.classList.remove("active"));
            card.classList.add("active");
            state.currentCategory = card.getAttribute("data-category");
            
            // Scroll smoothly down to listings
            document.querySelector(".services-list-section").scrollIntoView({ behavior: "smooth" });
            
            renderServices();
            updateDynamicHeaders();
        });
    });

    // Sidebar Category Footer Link click listeners
    const footerCatLinks = document.querySelectorAll(".footer-cat-link");
    footerCatLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const cat = link.getAttribute("data-category");
            
            // Set active card in grid
            els.categoryCards.forEach(c => {
                c.classList.remove("active");
                if (c.getAttribute("data-category") === cat) {
                    c.classList.add("active");
                }
            });
            
            state.currentCategory = cat;
            
            // Scroll smoothly down to listings
            document.querySelector(".services-list-section").scrollIntoView({ behavior: "smooth" });
            
            renderServices();
            updateDynamicHeaders();
        });
    });

    // Open Checkout Drawer
    els.checkoutBtn.addEventListener("click", () => {
        toggleCartDrawer(); // Close drawer
        openCheckoutModal(); // Open checkout
    });

    // Submit Checkout form to WhatsApp
    els.checkoutForm.addEventListener("submit", (e) => {
        e.preventDefault();
        sendOrderToWhatsApp();
    });

    // FAQ Accordion click register
    els.faqQuestions.forEach(btn => {
        btn.addEventListener("click", () => {
            const item = btn.parentElement;
            const answer = item.querySelector(".faq-answer");
            const isOpen = item.classList.contains("active");

            // Close all other items first
            document.querySelectorAll(".faq-item").forEach(otherItem => {
                otherItem.classList.remove("active");
                otherItem.querySelector(".faq-answer").style.maxHeight = null;
            });

            if (!isOpen) {
                item.classList.add("active");
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
}

// Get services filtered by current tab & search query
function getFilteredServices() {
    return servicesData.filter(service => {
        // Filter by category
        const matchesCategory = state.currentCategory === "all" || service.category === state.currentCategory;
        
        // Filter by search query
        const titleMatch = state.lang === "ar" 
            ? service.titleAr.includes(state.searchQuery)
            : service.titleEn.toLowerCase().includes(state.searchQuery);
            
        const descMatch = state.lang === "ar"
            ? service.descAr.includes(state.searchQuery)
            : service.descEn.toLowerCase().includes(state.searchQuery);
            
        const matchesSearch = state.searchQuery === "" || titleMatch || descMatch;
        
        return matchesCategory && matchesSearch;
    });
}

// Render dynamic services grid
function renderServices() {
    const filtered = getFilteredServices();
    els.servicesGridContainer.innerHTML = "";

    if (filtered.length === 0) {
        els.servicesGridContainer.innerHTML = `
            <div class="no-services-state" style="grid-column: span 3; text-align: center; padding: 40px 0; color: var(--text-muted);">
                <p>${state.lang === "ar" ? "عذراً، لم نجد أي خدمات تطابق بحثك." : "Sorry, no services match your search."}</p>
            </div>
        `;
        return;
    }

    filtered.forEach(service => {
        const isAdded = state.cart.some(item => item.serviceId === service.id);
        const title = state.lang === "ar" ? service.titleAr : service.titleEn;
        const desc = state.lang === "ar" ? service.descAr : service.descEn;
        const time = state.lang === "ar" ? service.timeAr : service.timeEn;
        const addBtnText = isAdded 
            ? translations["added-btn"][state.lang]
            : translations["add-btn"][state.lang];
        const ratingText = state.lang === "ar" ? translations["rating-label"]["ar"] : translations["rating-label"]["en"];
        
        const card = document.createElement("div");
        card.className = "service-card";
        
        // Tag label
        const categoryTag = state.lang === "ar" 
            ? translations[`cat-${service.category}`]["ar"]
            : translations[`cat-${service.category}`]["en"];

        // Image or SVG placeholder logic
        let imageHTML = "";
        if (service.image) {
            imageHTML = `<img src="${service.image}" alt="${title}" loading="lazy">`;
        } else {
            imageHTML = svgIcons[service.category] || "";
        }

        card.innerHTML = `
            <div class="service-tag">${categoryTag}</div>
            <div class="service-img-box">
                ${imageHTML}
            </div>
            <div class="service-card-body">
                <div class="service-rating-row">
                    <div class="service-rating">
                        <svg viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.2 1.191-5.934 5.787 1.4 8.168-7.334-3.856-7.334 3.856 1.4-8.168-5.934-5.787 8.2-1.191z"/></svg>
                        <span>${service.rating} (${ratingText})</span>
                    </div>
                    <div class="service-time">${time}</div>
                </div>
                <h4 class="service-title">${title}</h4>
                <p class="service-desc">${desc}</p>
                <div class="service-card-footer">
                    <div class="service-price-info">
                        <span class="price-label">${state.lang === "ar" ? "تقدير السعر" : "Price Est."}</span>
                        <span class="price-val" data-i18n="order-quote">${state.lang === "ar" ? "طلب تسعيرة" : "Quote Request"}</span>
                    </div>
                    <button class="add-service-btn ${isAdded ? 'added' : ''}" onclick="toggleServiceInCart('${service.id}')">
                        ${isAdded ? '' : '<svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M19 11h-6v-6h-2v6h-6v2h6v6h2v-6h6z"/></svg>'}
                        <span>${addBtnText}</span>
                    </button>
                </div>
            </div>
        `;
        els.servicesGridContainer.appendChild(card);
    });
}

// Render regions in Location Modal
function renderRegions() {
    els.regionsGrid.innerHTML = "";
    regionsList.forEach(region => {
        const name = state.lang === "ar" ? region.nameAr : region.nameEn;
        const isActive = state.selectedRegionId === region.id;
        
        const btn = document.createElement("button");
        btn.className = `region-btn ${isActive ? 'active' : ''}`;
        btn.textContent = name;
        btn.addEventListener("click", () => {
            state.selectedRegionId = region.id;
            state.selectedRegionNameAr = region.nameAr;
            state.selectedRegionNameEn = region.nameEn;
            
            // Close modal & update header text
            toggleLocationModal();
            els.currentLocationText.textContent = state.lang === "ar" ? region.nameAr : region.nameEn;
            
            // Mark all buttons inactive & select this active
            document.querySelectorAll(".region-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
        });
        els.regionsGrid.appendChild(btn);
    });
}

// Add or Remove a Service from Cart
window.toggleServiceInCart = function(serviceId) {
    const cartIndex = state.cart.findIndex(item => item.serviceId === serviceId);
    
    if (cartIndex > -1) {
        // Remove
        state.cart.splice(cartIndex, 1);
    } else {
        // Add
        state.cart.push({
            serviceId: serviceId,
            notes: ""
        });
    }

    // Refresh views
    updateCartUI();
    renderServices();
    
    // Soft bounce effect on cart trigger badge
    els.cartTriggerBtn.classList.add("animated");
    setTimeout(() => els.cartTriggerBtn.classList.remove("animated"), 300);
};

// Remove service directly from drawer
window.removeFromCartInDrawer = function(serviceId) {
    state.cart = state.cart.filter(item => item.serviceId !== serviceId);
    updateCartUI();
    renderServices();
};

// Keep notes input updated in cart state
window.updateCartItemNotes = function(serviceId, val) {
    const item = state.cart.find(item => item.serviceId === serviceId);
    if (item) {
        item.notes = val;
    }
};

// Update cart notification badge & drawer list items
function updateCartUI() {
    const cartCount = state.cart.length;
    
    // Badge counter
    els.cartBadgeCount.textContent = cartCount;
    
    // Total count label in footer
    const totalText = state.lang === "ar" ? `${cartCount} خدمات` : `${cartCount} services`;
    els.cartTotalCount.textContent = totalText;

    if (cartCount === 0) {
        els.emptyCartState.style.display = "flex";
        els.cartItemsList.style.display = "none";
        els.drawerFooter.style.display = "none";
    } else {
        els.emptyCartState.style.display = "none";
        els.cartItemsList.style.display = "flex";
        els.drawerFooter.style.display = "block";
        
        // Draw Cart items list
        els.cartItemsList.innerHTML = "";
        state.cart.forEach(cartItem => {
            const service = servicesData.find(s => s.id === cartItem.serviceId);
            if (!service) return;

            const title = state.lang === "ar" ? service.titleAr : service.titleEn;
            const categoryText = state.lang === "ar" 
                ? translations[`cat-${service.category}`]["ar"]
                : translations[`cat-${service.category}`]["en"];
            
            const itemEl = document.createElement("div");
            itemEl.className = "cart-item";
            itemEl.innerHTML = `
                <div class="cart-item-header">
                    <div class="cart-item-info">
                        <span class="cart-item-category">${categoryText}</span>
                        <span class="cart-item-title">${title}</span>
                    </div>
                    <button class="remove-item-btn" onclick="removeFromCartInDrawer('${service.id}')" aria-label="Remove item">
                        <svg viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm3-17h-20v-2h5.711c.9 0 1.761-.53 2.1-1.289l1-2.211h6.378l1 2.211c.339.759 1.2 1.289 2.1 1.289h5.711v2z"/></svg>
                    </button>
                </div>
                <textarea 
                    class="cart-item-notes" 
                    placeholder="${translations["note-placeholder"][state.lang]}" 
                    oninput="updateCartItemNotes('${service.id}', this.value)"
                >${cartItem.notes}</textarea>
            `;
            els.cartItemsList.appendChild(itemEl);
        });
    }
}

// Drawer Toggles
function toggleCartDrawer() {
    const isActive = els.cartDrawer.classList.contains("active");
    if (isActive) {
        els.cartDrawer.classList.remove("active");
        els.cartDrawerOverlay.classList.remove("active");
    } else {
        els.cartDrawer.classList.add("active");
        els.cartDrawerOverlay.classList.add("active");
        updateCartUI(); // Redraw fresh values
    }
}

// Location Modal Toggles
function toggleLocationModal() {
    const isActive = els.locationModal.classList.contains("active");
    if (isActive) {
        els.locationModal.classList.remove("active");
        els.locationModalOverlay.classList.remove("active");
    } else {
        els.locationModal.classList.add("active");
        els.locationModalOverlay.classList.add("active");
        renderRegions();
    }
}

// Checkout Modal Toggles
function toggleCheckoutModal() {
    const isActive = els.checkoutModal.classList.contains("active");
    if (isActive) {
        els.checkoutModal.classList.remove("active");
        els.checkoutModalOverlay.classList.remove("active");
    } else {
        els.checkoutModal.classList.add("active");
        els.checkoutModalOverlay.classList.add("active");
    }
}

// Populate Checkout Modal details & Open
function openCheckoutModal() {
    // Fill Order Summary List
    els.orderSummaryList.innerHTML = "";
    state.cart.forEach(cartItem => {
        const service = servicesData.find(s => s.id === cartItem.serviceId);
        if (!service) return;

        const title = state.lang === "ar" ? service.titleAr : service.titleEn;
        const notesSnippet = cartItem.notes ? `
            <div class="summary-item-note">📝: ${cartItem.notes}</div>
        ` : '';

        const li = document.createElement("li");
        li.innerHTML = `
            <div>
                <span class="summary-item-name">${title}</span>
                ${notesSnippet}
            </div>
            <span>${state.lang === "ar" ? "طلب تسعير" : "Quote request"}</span>
        `;
        els.orderSummaryList.appendChild(li);
    });

    toggleCheckoutModal();
}

// Format and send order data via WhatsApp Api
function sendOrderToWhatsApp() {
    const name = document.getElementById("custName").value.trim();
    const phone = document.getElementById("custPhone").value.trim();
    const waNumber = document.getElementById("custWA").value.trim();
    const address = document.getElementById("custAddress").value.trim();
    const contactPref = document.querySelector('input[name="contactPref"]:checked').value;
    
    if (!name || !phone || !waNumber || !address) {
        alert(translations["validation-alert"][state.lang]);
        return;
    }

    const regionName = state.lang === "ar" ? state.selectedRegionNameAr : state.selectedRegionNameEn;
    const contactPrefText = contactPref === "WhatsApp" 
        ? (state.lang === "ar" ? "محادثة واتساب" : "WhatsApp Chat")
        : (state.lang === "ar" ? "اتصال هاتفي" : "Phone Call");

    // Construct WhatsApp message formatting
    let msg = `*طلب خدمة جديد - اطلب وتمنى للخدمات* 🧞‍♂️\n`;
    msg += `-------------------------------------------\n`;
    msg += `👤 *العميل:* ${name}\n`;
    msg += `📞 *رقم الموبايل:* ${phone}\n`;
    msg += `💬 *رقم الواتساب:* ${waNumber}\n`;
    msg += `📍 *المحافظة:* ${regionName}\n`;
    msg += `🏡 *العنوان بالتفصيل:* ${address}\n`;
    msg += `📞 *التواصل المفضل:* ${contactPrefText}\n`;
    msg += `-------------------------------------------\n\n`;
    msg += `📋 *الخدمات المطلوبة:* \n`;
    
    state.cart.forEach((cartItem, idx) => {
        const service = servicesData.find(s => s.id === cartItem.serviceId);
        if (!service) return;

        const title = state.lang === "ar" ? service.titleAr : service.titleEn;
        const categoryText = state.lang === "ar" 
            ? translations[`cat-${service.category}`]["ar"]
            : translations[`cat-${service.category}`]["en"];

        msg += `${idx + 1}️⃣ *${title}* (${categoryText})\n`;
        if (cartItem.notes.trim()) {
            msg += `   ✍️ _تفاصيل/ملاحظات:_ ${cartItem.notes.trim()}\n`;
        }
        msg += `\n`;
    });
    
    msg += `-------------------------------------------\n`;
    msg += `_تم توليد هذا الطلب تلقائياً عبر موقع اطلب وتمنى للخدمات المتكاملة_`;

    // Business WhatsApp number: 0998895596 (Intl format: +963 998895596)
    const businessWhatsApp = "963998895596";
    const encodedMsg = encodeURIComponent(msg);
    const whatsappUrl = `https://wa.me/${businessWhatsApp}?text=${encodedMsg}`;
    
    // Open in new tab/redirect
    window.open(whatsappUrl, '_blank');
}

// Fire application initialization on load
window.addEventListener("DOMContentLoaded", init);
