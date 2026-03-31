/* Data for gifts/occasions/categories.
   To customize WhatsApp, set `whatsAppNumber` (international format, no "+" or spaces). */
(function () {
  window.appData = {
    whatsAppNumber: "201064375585",
    occasions: [
      { id: "wedding", name: { ar: "الزواج", en: "Wedding" } },
      { id: "engagement", name: { ar: "خطوبة", en: "Engagement" } },
      { id: "birthday", name: { ar: "عيد ميلاد", en: "Birthday" } },
      { id: "graduation", name: { ar: "التخرج", en: "Graduation" } },
      { id: "anniversary", name: { ar: "ذكرى سنوية", en: "Anniversary" } },
      { id: "new_baby", name: { ar: "قدوم مولود", en: "New Baby" } },
      { id: "events", name: { ar: "أحداث", en: "Events" } },
    ],
    categories: [
      { id: "flowers", name: { ar: "ورود", en: "Flowers" } },
      { id: "chocolates", name: { ar: "شوكولاتة", en: "Chocolates" } },
      { id: "perfume", name: { ar: "عطور", en: "Perfume" } },
      { id: "jewelry", name: { ar: "إكسسوارات", en: "Jewelry" } },
      { id: "cards", name: { ar: "كروت تهنئة", en: "Greeting cards" } },
      { id: "gift_baskets", name: { ar: "سلال هدايا", en: "Gift baskets" } },
    ],
    gifts: [
      {
        id: "gift6",
        name: { ar: " عطور للعروسين", en: "Perfume Set for Newlyweds" },
        occasionId: "wedding",
        categoryId: "perfume",
        price: "",
        color: "#6d5efc",
        description: {
          ar: "هدية عطرية راقية مع تغليف فخم ومناسبة للعرسان.",
          en: "A classy fragrance gift, beautifully wrapped for the occasion.",
        },
        details: {
          ar: "اختيار العطر يعتمد على التوفر والموسم.",
          en: "Fragrance selection based on availability and season.",
        },
      },
      {
        id: "gift7",
        name: { ar: "إكسسوارات فاخرة", en: "Premium Jewelry Accessories" },
        occasionId: "wedding",
        categoryId: "jewelry",
        price: "",
        color: "#ff5aa5",
        description: {
          ar: "إكسسوار أنيق مع بطاقة تهنئة شخصية.",
          en: "Elegant accessory with a personalized greeting card.",
        },
        details: {
          ar: "يمكن وضع الاسم على البطاقة حسب الطلب.",
          en: "Name on the card can be added on request.",
        },
      },
      {
        id: "gift8",
        name: { ar: "كارت تهنئة فاخر", en: "Luxury Greeting Card" },
        occasionId: "wedding",
        categoryId: "cards",
        price: "",
        color: "#3b82f6",
        description: {
          ar: "كارت تهنئة بجودة عالية وعبارات فخمة.",
          en: "A premium card with expressive, elegant wording.",
        },
        details: {
          ar: "اللغة والتصميم متغيران حسب الطلب.",
          en: "Language and design are customizable by request.",
        },
      },
      {
        id: "gift9",
        name: { ar: "سلة خطوبة راقية", en: "Elegant Engagement Basket" },
        occasionId: "engagement",
        categoryId: "gift_baskets",
        price: "",
        color: "#2bd4a6",
        description: {
          ar: "سلة هدايا ذات طابع رومانسي مع شوكولاتة ومكسرات.",
          en: "A romantic gift basket with chocolates and nuts.",
        },
        details: {
          ar: "تضاف عبارة تهنئة مخصصة عند الطلب.",
          en: "Custom congratulatory message added on request.",
        },
      },
      {
        id: "gift10",
        name: { ar: "باقة ورود للخطوبة", en: "Engagement Flowers Bouquet" },
        occasionId: "engagement",
        categoryId: "flowers",
        price: "",
        color: "#ffb020",
        description: {
          ar: "باقة ورد دافئة لأجمل لحظة إعلان الخطوبة.",
          en: "A warm-tone bouquet for the engagement announcement.",
        },
        details: {
          ar: "تتوفر تعديلات الألوان حسب الطلب.",
          en: "Color adjustments available by request.",
        },
      },
      {
        id: "gift11",
        name: { ar: "علبة شوكولاتة عيد ميلاد", en: "Birthday Chocolates Treat" },
        occasionId: "birthday",
        categoryId: "chocolates",
        price: "",
        color: "#ff5aa5",
        description: {
          ar: "علبة شوكولاتة فاخرة مع بطاقة تهنئة شخصية.",
          en: "Luxury chocolates box with a personalized greeting.",
        },
        details: {
          ar: "نص البطاقة قابل للتخصيص حسب رغبتك.",
          en: "Card text can be customized as you prefer.",
        },
      },
      {
        id: "gift12",
        name: { ar: "كارت عيد ميلاد سعيد", en: "Happy Birthday Greeting Card" },
        occasionId: "birthday",
        categoryId: "cards",
        price: "",
        color: "#3b82f6",
        description: {
          ar: "كارت بتصميم عصري ورسالة دافئة.",
          en: "A modern design card with a warm message.",
        },
        details: {
          ar: "اكتب الاسم وتاريخ الميلاد للبطاقة.",
          en: "Include name and birth date for the card.",
        },
      },
      {
        id: "gift13",
        name: { ar: "سلة تخرج مميزة", en: "Graduation Signature Basket" },
        occasionId: "graduation",
        categoryId: "gift_baskets",
        price: "",
        color: "#6d5efc",
        description: {
          ar: "سلة تهنئة بالتخرج مع عبارات تحفيزية وشوكولاتة.",
          en: "A graduation gift with uplifting messages and chocolates.",
        },
        details: {
          ar: "يمكن إضافة أسماء الخريجين في الرسالة.",
          en: "Graduates' names can be added in the note.",
        },
      },
      {
        id: "gift14",
        name: { ar: "عطر تخرج راقي", en: "Elegant Graduation Perfume" },
        occasionId: "graduation",
        categoryId: "perfume",
        price: "",
        color: "#2bd4a6",
        description: {
          ar: "عطر مع تغليف أنيق لتهنئة الخريج.",
          en: "Fragrance with elegant packaging for graduation.",
        },
        details: {
          ar: "اختيار الرائحة حسب التوفر المتاح.",
          en: "Fragrance selection based on availability.",
        },
      },
      {
        id: "gift22",
        name: { ar: "سلة ذكرى سنوية", en: "Annual Anniversary Basket" },
        occasionId: "anniversary",
        categoryId: "gift_baskets",
        price: "",
        color: "#ff5aa5",
        description: {
          ar: "سلة رومانسية مع لمسة أنيقة للذكرى.",
          en: "A romantic basket with an elegant anniversary touch.",
        },
        details: {
          ar: "أضف أسماء الزوجين في الرسالة عبر الواتساب.",
          en: "Add the couple's names in your WhatsApp message.",
        },
      },
      {
        id: "gift23",
        name: { ar: "سلة قدوم مولود", en: "New Baby Basket" },
        occasionId: "new_baby",
        categoryId: "gift_baskets",
        price: "",
        color: "#3b82f6",
        description: {
          ar: "سلة تهنئة بالمولود مع تفاصيل أنيقة.",
          en: "A newborn celebration basket with elegant details.",
        },
        details: {
          ar: "يتوفر تخصيص الاسم على البطاقة حسب الطلب.",
          en: "Name customization on card available on request.",
        },
      },
    ],
  };
})();
