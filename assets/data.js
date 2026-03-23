/* Data for gifts/occasions/categories.
   To customize WhatsApp, set `whatsAppNumber` (international format, no "+" or spaces). */
(function () {
  window.appData = {
    whatsAppNumber: "201000000000", // TODO: replace with your WhatsApp number (e.g. 2012xxxxxxx)
    occasions: [
      { id: "eid_al_fitr", name: { ar: "عيد الفطر", en: "Eid al-Fitr" } },
      { id: "eid_al_adha", name: { ar: "عيد الأضحى", en: "Eid al-Adha" } },
      { id: "wedding", name: { ar: "الزواج", en: "Wedding" } },
      { id: "engagement", name: { ar: "خطوبة", en: "Engagement" } },
      { id: "birthday", name: { ar: "عيد ميلاد", en: "Birthday" } },
      { id: "graduation", name: { ar: "التخرج", en: "Graduation" } },
      { id: "valentine", name: { ar: "عيد الحب", en: "Valentine's Day" } },
      { id: "mothers_day", name: { ar: "يوم الأم", en: "Mother's Day" } },
      { id: "fathers_day", name: { ar: "يوم الأب", en: "Father's Day" } },
      { id: "ramadan", name: { ar: "رمضان كريم", en: "Ramadan" } },
      { id: "hajj_umrah", name: { ar: "حج/عمرة", en: "Hajj/Umrah" } },
      { id: "anniversary", name: { ar: "ذكرى سنوية", en: "Anniversary" } },
      { id: "new_baby", name: { ar: "قدوم مولود", en: "New Baby" } },
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
        id: "gift1",
        name: { ar: "سلة عيد الفطر المميزة", en: "Eid al-Fitr Signature Basket" },
        occasionId: "eid_al_fitr",
        categoryId: "gift_baskets",
        price: "299",
        color: "#6d5efc",
        description: {
          ar: "تشكيلة مختارة بعناية تضم شوكولاتة فاخرة + كرت تهنئة + لمسة ورود.",
          en: "A curated set: premium chocolates + a greeting card + a touch of flowers.",
        },
        details: {
          ar: "مناسب للهدايا العائلية، ويمكن تعديل الألوان حسب رغبتك.",
          en: "Great for family gifting; colors can be customized to your preference.",
        },
      },
      {
        id: "gift2",
        name: { ar: "باقة ورود مع كرت تهنئة", en: "Flowers Bouquet with Card" },
        occasionId: "eid_al_fitr",
        categoryId: "flowers",
        price: "199",
        color: "#ff5aa5",
        description: {
          ar: "باقة ورد أنيقة مع كرت تهنئة مكتوب باسم الشخص.",
          en: "Elegant bouquet with a personalized greeting card.",
        },
        details: {
          ar: "اختيار اللون متاح عند الطلب.",
          en: "Color choice is available at checkout.",
        },
      },
      {
        id: "gift3",
        name: { ar: "شوكولاتة فاخرة ليوم العيد", en: "Luxury Chocolates for Eid" },
        occasionId: "eid_al_fitr",
        categoryId: "chocolates",
        price: "149",
        color: "#ffb020",
        description: {
          ar: "علبة شوكولاتة متنوعة بنكهة مميزة مع لمسة كريمية.",
          en: "Assorted chocolates with a special creamy touch.",
        },
        details: {
          ar: "يمكن إضافة كرت تهنئة عند الطلب.",
          en: "Add a greeting card upon request.",
        },
      },

      {
        id: "gift4",
        name: { ar: "سلة عيد الأضحى بالذوق", en: "Eid al-Adha Deluxe Basket" },
        occasionId: "eid_al_adha",
        categoryId: "gift_baskets",
        price: "319",
        color: "#2bd4a6",
        description: {
          ar: "مزيج هدايا جاهز للتقديم: شوكولاتة + كرت + تفاصيل فاخرة.",
          en: "Ready-to-gift mix: chocolates + card + premium details.",
        },
        details: {
          ar: "تنسيق ألوان السلة حسب رغبتك.",
          en: "Basket color coordination to match your taste.",
        },
      },
      {
        id: "gift5",
        name: { ar: "باقة زهور للتهنئة", en: "Celebration Flower Bouquet" },
        occasionId: "eid_al_adha",
        categoryId: "flowers",
        price: "209",
        color: "#3b82f6",
        description: {
          ar: "باقة تهنئة أنيقة بلمسات خفيفة وتغليف فاخر.",
          en: "An elegant greeting bouquet with premium wrapping.",
        },
        details: {
          ar: "مناسبة للزيارة أو التقديم السريع.",
          en: "Perfect for visits or quick gifting.",
        },
      },

      {
        id: "gift6",
        name: { ar: "طقم عطور للعرسان", en: "Perfume Set for Newlyweds" },
        occasionId: "wedding",
        categoryId: "perfume",
        price: "499",
        color: "#6d5efc",
        description: {
          ar: "هدية عطرية راقية مع تغليف يليق بالمناسبة.",
          en: "A classy fragrance gift, wrapped beautifully for the occasion.",
        },
        details: {
          ar: "يمكن اختيار الروائح حسب المتوفر.",
          en: "Fragrance selection based on availability.",
        },
      },
      {
        id: "gift7",
        name: { ar: "إكسسوارات فاخرة", en: "Premium Jewelry Accessories" },
        occasionId: "wedding",
        categoryId: "jewelry",
        price: "599",
        color: "#ff5aa5",
        description: {
          ar: "إكسسوار أنيق كهدية للمناسبة مع كرت تهنئة.",
          en: "Elegant accessory gift with a greeting card.",
        },
        details: {
          ar: "الاسم على الكرت متاح عند الطلب.",
          en: "Your name on the card is available on request.",
        },
      },
      {
        id: "gift8",
        name: { ar: "كرت تهنئة فاخر للعروسين", en: "Luxury Greeting Card" },
        occasionId: "wedding",
        categoryId: "cards",
        price: "99",
        color: "#3b82f6",
        description: {
          ar: "كرت تهنئة بعبارات جميلة وتجهيز للتوقيع.",
          en: "A premium card with beautiful wording and signing space.",
        },
        details: {
          ar: "اختر لغة الكتابة من إعدادات الموقع.",
          en: "Choose writing language from site settings.",
        },
      },

      {
        id: "gift9",
        name: { ar: "سلة خطوبة راقية", en: "Elegant Engagement Basket" },
        occasionId: "engagement",
        categoryId: "gift_baskets",
        price: "279",
        color: "#2bd4a6",
        description: {
          ar: "هدية تجمع بين الذوق والفخامة مع تغليف مناسب للخطوبة.",
          en: "A gift that blends taste and elegance with engagement-ready wrapping.",
        },
        details: {
          ar: "يمكن إضافة ملاحظة مخصصة داخل رسالة الواتساب.",
          en: "Add a custom note via the WhatsApp message.",
        },
      },
      {
        id: "gift10",
        name: { ar: "باقة ورود للخطوبة", en: "Engagement Flowers Bouquet" },
        occasionId: "engagement",
        categoryId: "flowers",
        price: "189",
        color: "#ffb020",
        description: {
          ar: "باقة ورد بألوان دافئة تناسب لحظة الإعلان.",
          en: "A warm-tone bouquet for the announcement moment.",
        },
        details: {
          ar: "متاح تعديل الألوان حسب ذوقك.",
          en: "Color adjustments available.",
        },
      },

      {
        id: "gift11",
        name: { ar: "عيد ميلاد سعيد بالشوكولاتة", en: "Birthday Chocolates Treat" },
        occasionId: "birthday",
        categoryId: "chocolates",
        price: "129",
        color: "#ff5aa5",
        description: {
          ar: "علبة شوكولاتة مع كرت تهنئة باسم المحتفل.",
          en: "Chocolate box with a personalized greeting card.",
        },
        details: {
          ar: "إضافة عبارة مخصصة متاحة.",
          en: "Custom wording is available.",
        },
      },
      {
        id: "gift12",
        name: { ar: "باقة تهنئة عيد ميلاد", en: "Happy Birthday Greeting Card" },
        occasionId: "birthday",
        categoryId: "cards",
        price: "89",
        color: "#3b82f6",
        description: {
          ar: "كرت تهنئة راقي بتصميم عصري.",
          en: "A premium greeting card with a modern design.",
        },
        details: {
          ar: "يمكن كتابة الاسم وتاريخ المناسبة.",
          en: "Include the name and occasion date.",
        },
      },
      {
        id: "gift13",
        name: { ar: "سلة تخرج مميزة", en: "Graduation Signature Basket" },
        occasionId: "graduation",
        categoryId: "gift_baskets",
        price: "349",
        color: "#6d5efc",
        description: {
          ar: "هدية تخرج تجمع بين العبارات + تفاصيل فاخرة + شوكولاتة.",
          en: "A graduation gift combining uplifting messages + premium details + chocolates.",
        },
        details: {
          ar: "مناسبة لصور التخرج والتهنئة.",
          en: "Perfect for graduation photos and congratulations.",
        },
      },
      {
        id: "gift14",
        name: { ar: "عطر تخرج راقٍ", en: "Elegant Graduation Perfume" },
        occasionId: "graduation",
        categoryId: "perfume",
        price: "429",
        color: "#2bd4a6",
        description: {
          ar: "هدية عطرية بتغليف أنيق وخطوة مثالية للإنجاز.",
          en: "Fragrance gift with neat wrapping—perfect for achievement.",
        },
        details: {
          ar: "اختيار الرائحة يعتمد على المتوفر.",
          en: "Fragrance selection depends on availability.",
        },
      },

      {
        id: "gift15",
        name: { ar: "حبّك باقة رومانسيّة", en: "Romantic Love Bouquet" },
        occasionId: "valentine",
        categoryId: "flowers",
        price: "239",
        color: "#ff5aa5",
        description: {
          ar: "باقة رومانسية مع لمسات جريئة وتغليف فاخر.",
          en: "Romantic bouquet with bold touches and premium wrapping.",
        },
        details: {
          ar: "يمكن إضافة عبارة خاصة في رسالة واتساب.",
          en: "Add a special line via the WhatsApp message.",
        },
      },
      {
        id: "gift16",
        name: { ar: "حلاوة عيد الحب بالشوكولاتة", en: "Valentine Chocolates" },
        occasionId: "valentine",
        categoryId: "chocolates",
        price: "159",
        color: "#ffb020",
        description: {
          ar: "حلوى وشوكولاتة برائحة مميزة مع كرت حب.",
          en: "Sweets and chocolates with a distinctive aroma and a love card.",
        },
        details: {
          ar: "مناسبة كهدية صغيرة وكبيرة.",
          en: "Perfect as a small or big gift.",
        },
      },

      {
        id: "gift17",
        name: { ar: "هدية يوم الأم المميزة", en: "Mother's Day Signature Gift" },
        occasionId: "mothers_day",
        categoryId: "gift_baskets",
        price: "289",
        color: "#2bd4a6",
        description: {
          ar: "سلة هدايا تجمع بين الود والفخامة مع كرت تهنئة.",
          en: "A gift basket that blends warmth and elegance with a greeting card.",
        },
        details: {
          ar: "ممكن تكتب رسالة مختصرة داخل الواتساب.",
          en: "You can include a short message in WhatsApp.",
        },
      },
      {
        id: "gift18",
        name: { ar: "هدية يوم الأب الفاخرة", en: "Father's Day Deluxe Gift" },
        occasionId: "fathers_day",
        categoryId: "perfume",
        price: "379",
        color: "#3b82f6",
        description: {
          ar: "عطر راقٍ مع تغليف مناسب يليق بيوم الأب.",
          en: "A refined fragrance gift wrapped for Father's Day.",
        },
        details: {
          ar: "اختر اللغة للعناوين من إعدادات الموقع.",
          en: "Choose title language from site settings.",
        },
      },

      {
        id: "gift19",
        name: { ar: "رمضان كريم بسلة هدايا", en: "Ramadan Gift Basket" },
        occasionId: "ramadan",
        categoryId: "gift_baskets",
        price: "259",
        color: "#6d5efc",
        description: {
          ar: "سلة هدايا بروح رمضان مع لمسات بسيطة وتغليف أنيق.",
          en: "A Ramadan-themed basket with simple touches and elegant wrapping.",
        },
        details: {
          ar: "مناسبة للتهنئة والزيارات.",
          en: "Perfect for greetings and visits.",
        },
      },
      {
        id: "gift20",
        name: { ar: "حلاوة للمعايدة في رمضان", en: "Ramadan Sweets Gift" },
        occasionId: "ramadan",
        categoryId: "chocolates",
        price: "119",
        color: "#ffb020",
        description: {
          ar: "تشكل شوكولاتة وحلاوة لائقة للتهنئة.",
          en: "A selection of sweets and chocolates for a lovely greeting.",
        },
        details: {
          ar: "يمكن إضافة كرت تهنئة.",
          en: "Greeting card available.",
        },
      },

      {
        id: "gift21",
        name: { ar: "هدية حج/عمرة بالذوق", en: "Hajj/Umrah Gift" },
        occasionId: "hajj_umrah",
        categoryId: "cards",
        price: "79",
        color: "#2bd4a6",
        description: {
          ar: "كرت تهنئة راقٍ مع عبارات دعاء مناسبة.",
          en: "A premium greeting card with respectful du'a wording.",
        },
        details: {
          ar: "المحتوى حسب اللغة المختارة.",
          en: "Content follows the selected language.",
        },
      },
      {
        id: "gift22",
        name: { ar: "سلة ذكرى سنوية فاخرة", en: "Annual Anniversary Basket" },
        occasionId: "anniversary",
        categoryId: "gift_baskets",
        price: "389",
        color: "#ff5aa5",
        description: {
          ar: "هدية تجمع بين الرومانسية والذوق وتغليف فخم.",
          en: "A gift blending romance and taste with premium wrapping.",
        },
        details: {
          ar: "يمكن كتابة اسم الزوج/الزوجة في رسالة الواتساب.",
          en: "Add the spouse names in your WhatsApp message.",
        },
      },
      {
        id: "gift23",
        name: { ar: "سلة قدوم مولود", en: "New Baby Basket" },
        occasionId: "new_baby",
        categoryId: "gift_baskets",
        price: "249",
        color: "#3b82f6",
        description: {
          ar: "سلة تهنئة بعبارات لطيفة وتفاصيل صغيرة مميزة.",
          en: "A congratulatory basket with warm messages and small details.",
        },
        details: {
          ar: "متاح تصميم الاسم على الكرت عند الطلب.",
          en: "Name personalization on the card available on request.",
        },
      },
    ],
  };
})();

