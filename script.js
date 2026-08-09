const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");


// ================= MENU =================

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
}


// ================= LANGUAGE =================

const frBtn = document.getElementById("frBtn");
const arBtn = document.getElementById("arBtn");


// ================= FRENCH CONTENT =================

const french = {

    navAccueil: "Accueil",
    navAbout: "À propos",
    navServices: "Services",
    navContact: "Contact",

    subtitle: "GÉOMÈTRE EXPERT FONCIER AGRÉÉ N°883",

    heroTitle: "Votre projet foncier,",
    heroTitleSpan: "entre les mains de l'expérience",

    heroName: "Kletine Semiane",

    heroDescription:
        "Ingénieur d'État en Sciences Géographiques et Travaux Topographiques, avec 26 années d'expérience professionnelle, dont 14 années en qualité de Directeur du Cadastre dans différentes wilayas d'Algérie.",

    heroServices: "Découvrir nos services",
    heroContact: "Nous contacter",

    stat1: "Ans d'expérience",
    stat2: "Ans comme Directeur du Cadastre",
    stat3: "Numéro d'agrément OGEF",
    stat4: "Diplôme d'ingénieur d'État",

    aboutTitle: "À PROPOS",

    aboutHeading:
        "Une expertise au service du foncier et de la topographie",

    aboutP1:
        "Kletine Semiane est Géomètre Expert Foncier agréé, spécialisé dans les domaines fonciers, cadastraux et topographiques.",

    aboutP2:
        "Ingénieur d'État en Sciences Géographiques et Travaux Topographiques, diplômé en 1997 du Centre National des Techniques Spéciales d'Arzew – Oran.",

    aboutP3:
        "Fort de 26 années d'expérience professionnelle, dont 14 années en qualité de Directeur du Cadastre dans différentes wilayas d'Algérie, il dispose d'une solide expertise dans le domaine foncier et cadastral.",

    aboutP4:
        "Son parcours professionnel lui permet d'intervenir avec rigueur, précision et professionnalisme dans différents projets et missions topographiques et foncières.",

    servicesTitle: "NOS SERVICES",

    servicesHeading:
        "Des services fonciers et topographiques avec expertise et précision",

    servicesDescription:
        "Des prestations professionnelles adaptées aux besoins des particuliers, entreprises, professionnels et propriétaires fonciers.",

    contactTitle: "CONTACT",

    contactHeading:
        "Parlons de votre projet",

    contactDescription:
        "Vous avez un projet foncier ou topographique ? Contactez-nous pour échanger sur vos besoins et étudier votre projet.",

    phone: "Téléphone",
    call: "Appeler",

    whatsapp: "WhatsApp",

    whatsappText:
        "Échangez directement avec nous concernant votre projet.",

    whatsappButton:
        "Contacter sur WhatsApp",

    email: "E-mail",

    emailButton:
        "Envoyer un e-mail",

    zone: "Zone d'intervention",

    zoneText:
        "Interventions et missions dans différentes wilayas d'Algérie.",

    footerNavigation: "Navigation",

    footerZone: "Zone d'intervention",

    footerZoneText:
        "Wilaya de Tamanrasset",

    footerTitle:
        "Géomètre Expert Foncier agréé N°883",

    footerDirector:
        "Ancien Directeur du Cadastre"
};


// ================= ARABIC CONTENT =================

const arabic = {

    navAccueil: "الرئيسية",
    navAbout: "من نحن",
    navServices: "خدماتنا",
    navContact: "اتصل بنا",

    subtitle: "خبير عقاري ومسّاح معتمد رقم 883",

    heroTitle: "مشروعكم العقاري،",
    heroTitleSpan: "بين أيدي الخبرة",

    heroName: "كليتين سميان",

    heroDescription:
        "مهندس دولة في العلوم الجغرافية والأعمال الطبوغرافية، بخبرة مهنية تمتد إلى 26 سنة، منها 14 سنة كمدير للمحافظة العقارية في عدة ولايات جزائرية.",

    heroServices: "اكتشف خدماتنا",
    heroContact: "اتصل بنا",

    stat1: "سنة من الخبرة",
    stat2: "سنة كمدير للمحافظة العقارية",
    stat3: "رقم الاعتماد",
    stat4: "سنة الحصول على شهادة مهندس دولة",

    aboutTitle: "من نحن",

    aboutHeading:
        "خبرة في خدمة المجال العقاري والمسح الطبوغرافي",

    aboutP1:
        "كليتين سميان خبير عقاري ومسّاح معتمد، متخصص في المجالات العقارية والمساحية والطبوغرافية.",

    aboutP2:
        "مهندس دولة في العلوم الجغرافية والأعمال الطبوغرافية، متخرج سنة 1997 من المركز الوطني للتقنيات الخاصة بأرزيو – وهران.",

    aboutP3:
        "بخبرة مهنية تمتد إلى 26 سنة، منها 14 سنة كمدير للمحافظة العقارية في عدة ولايات جزائرية، يمتلك خبرة واسعة في المجال العقاري والمساحي.",

    aboutP4:
        "تسمح له خبرته المهنية بالتدخل بدقة واحترافية في مختلف المشاريع والمهام العقارية والطبوغرافية.",

    servicesTitle: "خدماتنا",

    servicesHeading:
        "خدمات عقارية وطبوغرافية بخبرة ودقة",

    servicesDescription:
        "خدمات مهنية مخصصة للأفراد والشركات والمهنيين ومالكي العقارات.",

    contactTitle: "اتصل بنا",

    contactHeading:
        "لنتحدث عن مشروعكم",

    contactDescription:
        "هل لديكم مشروع عقاري أو طبوغرافي؟ تواصلوا معنا لمناقشة احتياجاتكم ودراسة مشروعكم.",

    phone: "الهاتف",
    call: "اتصل",

    whatsapp: "واتساب",

    whatsappText:
        "تواصلوا معنا مباشرة بخصوص مشروعكم.",

    whatsappButton:
        "التواصل عبر واتساب",

    email: "البريد الإلكتروني",

    emailButton:
        "إرسال بريد إلكتروني",

    zone: "منطقة التدخل",

    zoneText:
        "التدخل وإنجاز المهام في مختلف ولايات الجزائر.",

    footerNavigation: "التنقل",

    footerZone: "منطقة التدخل",

    footerZoneText:
        "ولاية تمنراست",

    footerTitle:
        "خبير عقاري ومسّاح معتمد رقم 883",

    footerDirector:
        "مدير سابق للمحافظة العقارية"
};


// ================= SERVICES =================

const servicesFrench = [

    {
        title: "Document d'Arpentage",
        text: "Établissement de documents d'arpentage et réalisation des opérations techniques liées au foncier."
    },

    {
        title: "Lotissement et Partage",
        text: "Études et réalisation des opérations de lotissement, de partage et de division des propriétés."
    },

    {
        title: "Expertises Foncières",
        text: "Réalisation d'expertises et d'analyses dans le domaine foncier, selon les besoins du projet."
    },

    {
        title: "Mise à Jour Cadastrale",
        text: "Mise à jour des données cadastrales, correction des superficies et régularisation des situations foncières."
    },

    {
        title: "État Descriptif de Division",
        text: "Établissement d'états descriptifs de division pour les opérations de division et de copropriété."
    },

    {
        title: "Plans Topographiques",
        text: "Réalisation de plans topographiques, plans de situation, plans de masse et plans de délimitation."
    },

    {
        title: "Études de Tracé",
        text: "Études topographiques pour différents projets : routes, réseaux électriques, gaz, chemins de fer et autres infrastructures."
    },

    {
        title: "Bornage",
        text: "Travaux de bornage et de délimitation des propriétés foncières sur le terrain."
    },

    {
        title: "Suivi des Travaux",
        text: "Suivi et accompagnement des travaux topographiques et fonciers sur le terrain."
    },

    {
        title: "Évaluation Foncière",
        text: "Évaluation et analyse des biens et propriétés foncières selon la nature du projet."
    }
];


const servicesArabic = [

    {
        title: "وثائق المسح العقاري",
        text: "إعداد وثائق المسح العقاري وإنجاز العمليات التقنية المرتبطة بالمجال العقاري."
    },

    {
        title: "التجزئة والقسمة",
        text: "دراسة وإنجاز عمليات تجزئة وتقسيم الملكيات العقارية."
    },

    {
        title: "الخبرات العقارية",
        text: "إنجاز الخبرات والتحاليل في المجال العقاري حسب طبيعة واحتياجات المشروع."
    },

    {
        title: "تحديث البيانات العقارية",
        text: "تحديث البيانات المساحية، وتصحيح المساحات وتسوية الوضعيات العقارية."
    },

    {
        title: "الوصف التفصيلي للقسمة",
        text: "إعداد الوثائق الوصفية التفصيلية المتعلقة بعمليات القسمة والملكية المشتركة."
    },

    {
        title: "المخططات الطبوغرافية",
        text: "إنجاز المخططات الطبوغرافية ومخططات الموقع والمخططات العامة ومخططات تحديد الحدود."
    },

    {
        title: "دراسات المسارات",
        text: "إنجاز الدراسات الطبوغرافية لمختلف المشاريع مثل الطرق، وشبكات الكهرباء والغاز والسكك الحديدية وغيرها من المنشآت."
    },

    {
        title: "تحديد الحدود العقارية",
        text: "إنجاز عمليات تحديد وترسيم حدود الملكيات العقارية ميدانيًا."
    },

    {
        title: "متابعة الأشغال",
        text: "متابعة ومرافقة الأشغال الطبوغرافية والعقارية ميدانيًا."
    },

    {
        title: "التقييم العقاري",
        text: "تقييم وتحليل العقارات والملكيات حسب طبيعة المشروع."
    }
];


// ================= SERVICE ICONS =================

const serviceIcons = [
    "▣",
    "▦",
    "◆",
    "↻",
    "▤",
    "⌖",
    "➜",
    "◇",
    "✓",
    "◈"
];


// إضافة الرموز مرة واحدة عند تحميل الموقع

const serviceCards =
    document.querySelectorAll(".service-card");

serviceCards.forEach(function (card, index) {

    if (!card.querySelector(".service-icon")) {

        const icon = document.createElement("div");

        icon.className = "service-icon";

        icon.textContent = serviceIcons[index];

        card.prepend(icon);
    }

});


// ================= CHANGE LANGUAGE =================

function setLanguage(language) {

    const isArabic = language === "ar";

    document.documentElement.lang =
        isArabic ? "ar" : "fr";

    document.body.dir =
        isArabic ? "rtl" : "ltr";

    const content =
        isArabic ? arabic : french;


    // ================= NAVIGATION =================

    document.querySelector(
        'a[href="#accueil"]'
    ).textContent = content.navAccueil;

    document.querySelector(
        'a[href="#apropos"]'
    ).textContent = content.navAbout;

    document.querySelector(
        'a[href="#services"]'
    ).textContent = content.navServices;

    document.querySelector(
        'a[href="#contact"]'
    ).textContent = content.navContact;


    // ================= HERO =================

    document.querySelector(".subtitle").textContent =
        content.subtitle;

    document.querySelector(".hero h1").childNodes[0].textContent =
        content.heroTitle + " ";

    document.querySelector(".hero h1 span").textContent =
        content.heroTitleSpan;

    document.querySelector(".hero h2").textContent =
        content.heroName;

    document.querySelector(".description").textContent =
        content.heroDescription;

    document.querySelectorAll(".hero-buttons a")[0].textContent =
        content.heroServices;

    document.querySelectorAll(".hero-buttons a")[1].textContent =
        content.heroContact;


    // ================= STATS =================

    const stats =
        document.querySelectorAll(".stat span");

    stats[0].textContent = content.stat1;
    stats[1].textContent = content.stat2;
    stats[2].textContent = content.stat3;
    stats[3].textContent = content.stat4;


    // ================= ABOUT =================

    const about =
        document.querySelector(".about");

    about.querySelector(".section-title").textContent =
        content.aboutTitle;

    about.querySelector("h2").textContent =
        content.aboutHeading;

    const aboutParagraphs =
        about.querySelectorAll("p:not(.section-title)");

    aboutParagraphs[0].textContent =
        content.aboutP1;

    aboutParagraphs[1].textContent =
        content.aboutP2;

    aboutParagraphs[2].textContent =
        content.aboutP3;

    aboutParagraphs[3].textContent =
        content.aboutP4;


    // ================= SERVICES =================

    const services =
        document.querySelector(".services");

    services.querySelector(".section-title").textContent =
        content.servicesTitle;

    services.querySelector("h2").textContent =
        content.servicesHeading;

    services.querySelector(
        ".section-heading > p:last-child"
    ).textContent =
        content.servicesDescription;


    const currentServices =
        language === "ar"
            ? servicesArabic
            : servicesFrench;


    serviceCards.forEach(function (card, index) {

        card.querySelector("h3").textContent =
            currentServices[index].title;

        card.querySelector("p").textContent =
            currentServices[index].text;

    });


    // ================= CONTACT =================

    const contact =
        document.querySelector(".contact");

    contact.querySelector(".section-title").textContent =
        content.contactTitle;

    contact.querySelector("h2").textContent =
        content.contactHeading;

    contact.querySelector(
        ".section-heading > p:last-child"
    ).textContent =
        content.contactDescription;


    const cards =
        contact.querySelectorAll(".contact-card");

    cards[0].querySelector("h3").textContent =
        content.phone;

    cards[0].querySelector("a").textContent =
        content.call;

    cards[1].querySelector("h3").textContent =
        content.whatsapp;

    cards[1].querySelector("p").textContent =
        content.whatsappText;

    cards[1].querySelector("a").textContent =
        content.whatsappButton;

    cards[2].querySelector("h3").textContent =
        content.email;

    cards[2].querySelector("a").textContent =
        content.emailButton;

    cards[3].querySelector("h3").textContent =
        content.zone;

    cards[3].querySelector("p").textContent =
        content.zoneText;


    // ================= FOOTER =================

    const footer =
        document.querySelector("footer");

    const footerColumns =
        footer.querySelectorAll(
            ".footer-content > div"
        );

    footerColumns[0].querySelectorAll("p")[0].textContent =
        content.footerTitle;

    footerColumns[0].querySelectorAll("p")[1].textContent =
        content.footerDirector;

    footerColumns[1].querySelector("h4").textContent =
        content.footerNavigation;

    footerColumns[2].querySelector("h4").textContent =
        content.footerZone;

    footerColumns[2].querySelector("p").textContent =
        content.footerZoneText;
}


// ================= LANGUAGE BUTTONS =================

if (frBtn) {

    frBtn.addEventListener("click", function () {

        setLanguage("fr");

    });

}


if (arBtn) {

    arBtn.addEventListener("click", function () {

        setLanguage("ar");

    });

}