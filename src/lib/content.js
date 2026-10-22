const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

// All site content, bilingual. Greek is the default language.
// Placeholder prices, team members and copy can be edited here.

export const site = {
  name: "Hair Heaven",
  founded: "2009",
  phone: "21 0922 1261",
  phoneHref: "tel:+302109221261",
  street: { el: "Φαλήρου 46", en: "Falirou 46" },
  city: { el: "Αθήνα 117 41", en: "Athens 117 41" },
  mapEmbed:
    "https://www.google.com/maps?q=Falirou%2046%2C%20Athina%20117%2041%2C%20Greece&output=embed",
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=Falirou+46,+Athina+117+41,+Greece",
  googleListing:
    "https://www.google.com/maps/search/?api=1&query=Hair+Heaven+Falirou+46+Athina",
  reviewUrl:
    "https://www.google.com/maps/search/?api=1&query=Hair+Heaven+Falirou+46+Athina",
  instagram: "https://www.instagram.com/hairheaven.athens",
  facebook: "https://www.facebook.com/hairheavenathens",
  rating: "4.9",
  reviewCount: "412",
};

export const images = {
  logo: "https://media.db.com/images/public/6ada6952c2a054304548a131/ac96bc3d7_images.jpeg",
  hero: "https://media.db.com/images/public/6ada6952c2a054304548a131/6b1940615_generated_e818c8b8.png",
  interior:
    "https://media.db.com/images/public/6ada6952c2a054304548a131/390de9f94_generated_d83db2b4.png",
  balayage: "https://media.db.com/images/public/6ada6952c2a054304548a131/3fb91b1bf_generated_9b2f7a7f.png",
  detail: "https://media.db.com/images/public/6ada6952c2a054304548a131/42dc04e80_generated_c1214d3e.png",
  bob: "https://media.db.com/images/public/6ada6952c2a054304548a131/d6ba18fb3_generated_d417dfbc.png",
  bridal: "https://media.db.com/images/public/6ada6952c2a054304548a131/175e4c7f1_generated_6a28e470.png",
  blonde: "https://media.db.com/images/public/6ada6952c2a054304548a131/9429b0030_generated_eefc7af8.png",
  wash: "https://media.db.com/images/public/6ada6952c2a054304548a131/3f151eecf_generated_7cff1bdf.png",
  stylist1: "https://media.db.com/images/public/6ada6952c2a054304548a131/e929adcea_generated_eda8a527.png",
  stylist2: "https://media.db.com/images/public/6ada6952c2a054304548a131/e9f5e7afb_generated_8821ed54.png",
  stylist3: "https://media.db.com/images/public/6ada6952c2a054304548a131/151ed84ee_generated_b3b8575f.png",
  stylist4: "https://media.db.com/images/public/6ada6952c2a054304548a131/ab97beb37_generated_30daa235.png",
};

export const hours = [
  { day: { el: "Δευτέρα", en: "Monday" }, time: { el: "10:00 – 20:00", en: "10:00 – 20:00" } },
  { day: { el: "Τρίτη", en: "Tuesday" }, time: { el: "10:00 – 20:00", en: "10:00 – 20:00" } },
  { day: { el: "Τετάρτη", en: "Wednesday" }, time: { el: "10:00 – 20:00", en: "10:00 – 20:00" } },
  { day: { el: "Πέμπτη", en: "Thursday" }, time: { el: "10:00 – 21:00", en: "10:00 – 21:00" } },
  { day: { el: "Παρασκευή", en: "Friday" }, time: { el: "10:00 – 21:00", en: "10:00 – 21:00" } },
  { day: { el: "Σάββατο", en: "Saturday" }, time: { el: "10:00 – 18:00", en: "10:00 – 18:00" } },
  { day: { el: "Κυριακή", en: "Sunday" }, time: { el: "Κλειστά", en: "Closed" } },
];

export const serviceCategories = [
  {
    id: "haircuts",
    title: { el: "Κουρέματα", en: "Haircuts" },
    blurb: {
      el: "Σχήμα που σέβεται την υφή σου. Κόβουμε με ακρίβεια και αφήνουμε χώρο στο μαλλί να αναπνεύσει.",
      en: "Shape that respects your texture. We cut precisely and leave room for hair to breathe.",
    },
    items: [
      {
        name: { el: "Γυναικείο κούρεμα", en: "Women's cut" },
        desc: { el: "Πλύσιμο, κούρεμα και φόρμα", en: "Wash, cut and finish" },
        price: "35",
        duration: "45′",
      },
      {
        name: { el: "Ανδρικό κούρεμα", en: "Men's cut" },
        desc: { el: "Κλασικό ή σύγχρονο, με τελείωμα", en: "Classic or modern, with a clean finish" },
        price: "22",
        duration: "30′",
      },
      {
        name: { el: "Παιδικό κούρεμα", en: "Kids' cut" },
        desc: { el: "Ήρεμη εμπειρία, για μικρούς καλεσμένους", en: "A calm experience for little guests" },
        price: "15",
        duration: "25′",
      },
      {
        name: { el: "Φράντζα & φρεσκάρισμα", en: "Fringe & refresh" },
        desc: { el: "Γρήγορη διόρθωση ανάμεσα στα ραντεβού", en: "A quick tidy between appointments" },
        price: "12",
        duration: "15′",
      },
    ],
  },
  {
    id: "color",
    title: { el: "Χρώμα", en: "Color" },
    blurb: {
      el: "Τόνοι που μοιάζουν φυσικοί. Δουλεύουμε με φως, όχι με βάψιμο.",
      en: "Tones that look born with you. We work with light, not paint.",
    },
    items: [
      {
        name: { el: "Ολικό χρώμα", en: "Full color" },
        desc: { el: "Μονόχρωμη κάλυψη σε όλο το μήκος", en: "Even, full-length coverage" },
        price: "75",
        duration: "2 ώρ.",
      },
      {
        name: { el: "Ανταύγειες", en: "Highlights" },
        desc: { el: "Διαστάσεις με φύλλα αλουμινίου", en: "Dimension with foil work" },
        price: "95",
        duration: "2½ ώρ.",
      },
      {
        name: { el: "Balayage", en: "Balayage" },
        desc: { el: "Χειροποίητο ξάνοιγμα, φυσικό πέρασμα", en: "Hand-painted light, a soft grow-out" },
        price: "130",
        duration: "3 ώρ.",
      },
      {
        name: { el: "Επαναφορά ρίζας", en: "Root touch-up" },
        desc: { el: "Καθαρή γραμμή, χωρίς σκληρά σύνορα", en: "A clean line with no hard borders" },
        price: "45",
        duration: "1 ώρ.",
      },
      {
        name: { el: "Gloss & λάμψη", en: "Gloss & shine" },
        desc: { el: "Ημιμόνιμο βερνίκι φωτός", en: "A semi-permanent veil of light" },
        price: "38",
        duration: "45′",
      },
    ],
  },
  {
    id: "treatments",
    title: { el: "Θεραπείες", en: "Treatments" },
    blurb: {
      el: "Λίγη ησυχία, πολλή φροντίδα. Το μαλλί θυμάται πώς νιώθει καλά.",
      en: "A little quiet, a lot of care. Hair remembers how it feels to be well.",
    },
    items: [
      {
        name: { el: "Κερατίνη", en: "Keratin smoothing" },
        desc: { el: "Λείο, ελεγχόμενο, για μήνες", en: "Smooth and manageable for months" },
        price: "150",
        duration: "2½ ώρ.",
      },
      {
        name: { el: "Ενυδατική θεραπεία", en: "Deep conditioning" },
        desc: { el: "Βάθος ενυδάτωσης και απαλότητα", en: "Deep hydration and softness" },
        price: "40",
        duration: "45′",
      },
      {
        name: { el: "Θεραπεία δέρματος κεφαλής", en: "Scalp care ritual" },
        desc: { el: "Απολέπιση, μασάζ, ισορροπία", en: "Exfoliation, massage, balance" },
        price: "35",
        duration: "40′",
      },
      {
        name: { el: "Αποκατάσταση μήκους", en: "Bond repair" },
        desc: { el: "Για μαλλιά μετά από χρώμα ή θερμότητα", en: "For hair after color or heat" },
        price: "55",
        duration: "1 ώρ.",
      },
    ],
  },
  {
    id: "styling",
    title: { el: "Χτένισμα", en: "Styling" },
    blurb: {
      el: "Για τη μέρα που θέλεις να θυμάσαι. Ή απλώς για μια ωραία Πέμπτη.",
      en: "For the day you want to remember. Or simply for a lovely Thursday.",
    },
    items: [
      {
        name: { el: "Στεγνό πιστολάκι", en: "Blow-dry" },
        desc: { el: "Όγκος, κίνηση, φως", en: "Volume, movement, light" },
        price: "30",
        duration: "40′",
      },
      {
        name: { el: "Χτένισμα με πιάσιμο", en: "Updo" },
        desc: { el: "Χαλαρό ή αυστηρό, όπως ταιριάζει", en: "Soft or sculpted, as it suits you" },
        price: "55",
        duration: "1 ώρ.",
      },
      {
        name: { el: "Νυφικό & event styling", en: "Bridal & event styling" },
        desc: { el: "Συμπεριλαμβάνεται πρόβα", en: "Trial included" },
        price: "120",
        duration: "1½ ώρ.",
      },
      {
        name: { el: "Curls & ondas", en: "Curls & waves" },
        desc: { el: "Μπούκλες με ή χωρίς θερμότητα", en: "Waves with or without heat" },
        price: "40",
        duration: "45′",
      },
    ],
  },
];

export const stylists = [
  {
    photo: images.stylist1,
    name: { el: "Ελένη Βασιλείου", en: "Eleni Vasileiou" },
    role: { el: "Ιδρύτρια · Χρώμα", en: "Founder · Color" },
    specialty: { el: "Χρώμα & διόρθωση τόνου", en: "Color & tone correction" },
    bio: {
      el: "Δεκαπέντε χρόνια πίσω από την καρέκλα, με αγάπη στις λεπτές διαφορές του τόνου.",
      en: "Fifteen years behind the chair, in love with the smallest differences in tone.",
    },
  },
  {
    photo: images.stylist4,
    name: { el: "Μαρίνα Κωνσταντίνου", en: "Marina Konstantinou" },
    role: { el: "Colourist", en: "Colourist" },
    specialty: { el: "Balayage & ξανθά", en: "Balayage & blondes" },
    bio: {
      el: "Πιστεύει ότι το καλύτερο ξανθό είναι αυτό που δείχνει ανέγγιχτο.",
      en: "She believes the best blonde is the one that looks untouched.",
    },
  },
  {
    photo: images.stylist2,
    name: { el: "Νίκος Ανδρέου", en: "Nikos Andreou" },
    role: { el: "Stylist", en: "Stylist" },
    specialty: { el: "Κούρεμα ακριβείας & ανδρικό", en: "Precision cutting & barbering" },
    bio: {
      el: "Κόβει ήσυχα, μετράει δύο φορές και αφήνει το σχήμα να μιλήσει.",
      en: "He cuts quietly, measures twice, and lets the shape speak.",
    },
  },
  {
    photo: images.stylist3,
    name: { el: "Σοφία Ράπτη", en: "Sofia Rapti" },
    role: { el: "Stylist", en: "Stylist" },
    specialty: { el: "Χτενίσματα & νυφικά", en: "Styling & bridal" },
    bio: {
      el: "Της αρέσουν τα μαλλιά που κινούνται — ακόμη και όταν είναι πιασμένα.",
      en: "She loves hair that moves, even when it's pinned up.",
    },
  },
];

export const testimonials = [
  {
    name: "Κατερίνα Μ.",
    service: { el: "Balayage", en: "Balayage" },
    text: {
      el: "Πήγα για balayage και έφυγα με τα μαλλιά που είχα πάντα στο μυαλό μου. Ήσυχος χώρος, ζεστοί άνθρωποι, και φως παντού.",
      en: "I went in for balayage and left with the hair I'd always pictured. A calm room, warm people, and light everywhere.",
    },
  },
  {
    name: "Dimitra P.",
    service: { el: "Κούρεμα & χτένισμα", en: "Cut & styling" },
    text: {
      el: "Το καλύτερο κούρεμα που έχω κάνει στην Αθήνα. Με άκουσαν πραγματικά και δεν προσπάθησαν να μου αλλάξουν το στυλ.",
      en: "The best cut I've had in Athens. They actually listened, and never pushed me into a different style.",
    },
  },
  {
    name: "Ελένη Τ.",
    service: { el: "Νυφικό χτένισμα", en: "Bridal styling" },
    text: {
      el: "Έκαναν την ημέρα του γάμου μου να μοιάζει εύκολη. Οι μπούκλες κράτησαν μέχρι τα ξημερώματα.",
      en: "They made my wedding morning feel effortless. The waves held until sunrise.",
    },
  },
  {
    name: "Maria K.",
    service: { el: "Κερατίνη", en: "Keratin" },
    text: {
      el: "Τα μαλλιά μου ήταν ταλαιπωρημένα χρόνια. Βγήκα με υγιές, απαλό μαλλί — και μου έδωσαν σωστές συμβουλές για το σπίτι.",
      en: "My hair had been through years of damage. I left with soft, healthy hair and honest advice for home.",
    },
  },
  {
    name: "Γιώργος Α.",
    service: { el: "Ανδρικό κούρεμα", en: "Men's cut" },
    text: {
      el: "Ακριβώς αυτό που ζήτησα, χωρίς περιττά. Καθαρός χώρος, ωραία μουσική, πάντα στην ώρα τους.",
      en: "Exactly what I asked for, nothing extra. Clean space, good music, always on time.",
    },
  },
  {
    name: "Sofia L.",
    service: { el: "Θεραπεία δέρματος", en: "Scalp ritual" },
    text: {
      el: "Μπήκα για μια θεραπεία και ένιωσα σαν να πήγα σε σπα. Βγήκα ήρεμη, με μαλλί που μύριζε υπέροχα.",
      en: "I booked a treatment and felt like I'd been to a spa. I left calm, with hair that smelled wonderful.",
    },
  },
];

export const gallery = [
  { src: images.balayage, tall: true, caption: { el: "Balayage σε καστανό", en: "Balayage on brunette" } },
  { src: images.detail, tall: false, caption: { el: "Η γωνιά του φωτός", en: "The light corner" } },
  { src: images.blonde, tall: false, caption: { el: "Ξανθό με λάμψη", en: "Blonde with gloss" } },
  { src: images.bob, tall: true, caption: { el: "Ίσιο bob", en: "Blunt bob" } },
  { src: images.bridal, tall: true, caption: { el: "Νυφικό πιάσιμο", en: "Bridal updo" } },
  { src: images.wash, tall: false, caption: { el: "Τελετουργικό πλυσίματος", en: "The wash ritual" } },
  { src: images.interior, tall: false, caption: { el: "Το σαλόνι", en: "The salon" } },
  { src: images.hero, tall: true, caption: { el: "Υφή & φως", en: "Texture & light" } },
];

export const copy = {
  el: {
    nav: {
      home: "Αρχική",
      services: "Υπηρεσίες",
      gallery: "Γκαλερί",
      team: "Ομάδα",
      reviews: "Κριτικές",
      book: "Ραντεβού",
      contact: "Επικοινωνία",
    },
    cta: {
      book: "Κλείσε ραντεβού",
      bookShort: "Ραντεβού",
      call: "Κλήση",
      directions: "Οδηγίες",
      services: "Δες τις υπηρεσίες",
      seeAll: "Δες τα όλα",
      gallery: "Δες τη γκαλερί",
      reviews: "Διάβασε τις κριτικές",
      leaveReview: "Άφησε κριτική στο Google",
      back: "Πίσω",
      submit: "Στείλε το αίτημα",
      sending: "Αποστέλλεται…",
      menu: "Μενού",
      close: "Κλείσιμο",
    },
    hero: {
      eyebrow: "Κομμωτήριο · Φάληρο, Αθήνα",
      title: "Όπου κάθε μέρα για τα μαλλιά σου μοιάζει ουράνια",
      intro:
        "Ένας φωτεινός, ήσυχος χώρος στο Φάληρο. Κόβουμε, βάφουμε και φροντίζουμε με προσοχή, χωρίς βιασύνη. Έρχεσαι όπως είσαι — φεύγεις λίγο πιο ανάλαφρη.",
      rating: "4,9",
      ratingNote: "412 κριτικές στο Google",
    },
    home: {
      philosophyLabel: "Η φιλοσοφία μας",
      philosophyTitle: "Το φως κάνει τη διαφορά",
      philosophyText:
        "Πιστεύουμε στο φυσικό. Στο μαλλί που κινείται, στο χρώμα που δεν φωνάζει, στη φροντίδα που κρατάει εβδομάδες. Γι’ αυτό δουλεύουμε αργά, με καθαρή ματιά και καλά προϊόντα.",
      pillars: [
        { title: "Φως", text: "Ψηλοτάβανο, λευκό, γεμάτο πρωινό φως. Ένας χώρος που ηρεμεί." },
        { title: "Φροντίδα", text: "Ακούμε πρώτα. Μετά προτείνουμε — ποτέ το αντίθετο." },
        { title: "Λεπτομέρεια", text: "Μια ίσια γραμμή, ένας τόνος πιο ζεστός. Εκεί κρύβεται η διαφορά." },
      ],
      servicesLabel: "Οι υπηρεσίες",
      servicesTitle: "Λίγες, καλές επιλογές",
      servicesText: "Ό,τι χρειάζεται το μαλλί σου — τίποτα παραπάνω.",
      reviewsLabel: "Οι καλεσμένοι μας",
      reviewsTitle: "Λόγια που κρατάμε",
      galleryLabel: "Η δουλειά μας",
      galleryTitle: "Στιγμές από το σαλόνι",
      galleryText: "Χρώμα, σχήμα και υφή — όπως βγήκαν από την καρέκλα.",
      ctaLabel: "Ραντεβού",
      ctaTitle: "Η καρέκλα σου περιμένει",
      ctaText:
        "Πες μας τι έχεις στο μυαλό σου. Θα σου προτείνουμε την ώρα και τον άνθρωπο που ταιριάζει.",
      ctaNote: "Απαντάμε αυθημερόν, Δευτέρα έως Σάββατο.",
    },
    servicesPage: {
      eyebrow: "Τιμές & υπηρεσίες",
      title: "Το μενού μας",
      intro:
        "Οι τιμές είναι ενδεικτικές και μπορεί να διαφέρουν ανάλογα με το μήκος και την πυκνότητα του μαλλιού. Πάντα σου λέμε την τελική τιμή πριν ξεκινήσουμε.",
      note: "Οι τιμές περιλαμβάνουν ΦΠΑ. Δεκτές κάρτες και μετρητά.",
      duration: "Διάρκεια",
      from: "από",
    },
    galleryPage: {
      eyebrow: "Γκαλερί",
      title: "Πριν & μετά, και ό,τι ενδιάμεσα",
      intro: "Μια μικρή συλλογή από δουλειές της ομάδας. Πάτα σε μια εικόνα για να τη δεις μεγάλη.",
      empty: "Έρχονται φωτογραφίες σύντομα.",
    },
    teamPage: {
      eyebrow: "Η ομάδα",
      title: "Άνθρωποι που αγαπούν το μαλλί",
      intro: "Τέσσερις διαφορετικές ματιές, μία ίδια προσοχή στη λεπτομέρεια.",
      bookWith: "Ραντεβού",
    },
    reviewsPage: {
      eyebrow: "Κριτικές",
      title: "4,9 από 5, σε 412 κριτικές",
      intro:
        "Σχεδόν όλοι μας βρήκαν στο Google. Αν ήρθες και σου άρεσε, μια κριτική βοηθάει πολύ — και μας κάνει καλύτερους.",
      leaveTitle: "Ήρθες πρόσφατα;",
      leaveText: "Πες μας πώς ήταν. Δύο λέξεις αρκούν.",
    },
    bookPage: {
      eyebrow: "Ραντεβού",
      title: "Ας βρούμε την ώρα σου",
      intro:
        "Συμπλήρωσε τα στοιχεία και θα επικοινωνήσουμε για επιβεβαίωση. Χρειάζονται λίγα δευτερόλεπτα.",
      name: "Ονοματεπώνυμο",
      phone: "Τηλέφωνο",
      email: "Email",
      service: "Υπηρεσία",
      stylist: "Προτιμώμενο άτομο",
      anyStylist: "Όποιος είναι διαθέσιμος",
      date: "Ημερομηνία",
      time: "Ώρα",
      notes: "Σημειώσεις",
      notesPlaceholder: "π.χ. πρώτη φορά, ευαίσθητο δέρμα, θέλω γνώμη για χρώμα…",
      submit: "Στείλε αίτημα ραντεβού",
      sending: "Αποστέλλεται…",
      successTitle: "Σε περιμένουμε",
      successText:
        "Λάβαμε το αίτημά σου. Θα σε πάρουμε τηλέφωνο για να το επιβεβαιώσουμε — συνήθως μέσα στην ίδια μέρα.",
      another: "Νέο ραντεβού",
      required: "Συμπλήρωσε τα πεδία με *.",
      thanks: "Ευχαριστούμε!",
      callInstead: "Προτιμάς τηλέφωνο;",
    },
    contactPage: {
      eyebrow: "Επικοινωνία",
      title: "Είμαστε στο Φάληρο",
      intro:
        "Δύο βήματα από τη στάση τραμ, με άνετο παρκάρισμα στους γύρω δρόμους. Πέρασε να μας δεις.",
      address: "Διεύθυνση",
      phone: "Τηλέφωνο",
      hours: "Ώρες λειτουργίας",
      follow: "Ακολούθησέ μας",
      getDirections: "Οδηγίες χάρτη",
      callNow: "Κάλεσε τώρα",
    },
    footer: {
      tagline: "Κομμωτήριο στο Φάληρο, Αθήνα. Φως, φροντίδα, λεπτομέρεια.",
      explore: "Περιήγηση",
      visit: "Επίσκεψη",
      hours: "Ώρες",
      rights: "Hair Heaven © 2026",
      made: "Φτιαγμένο με φροντίδα στην Αθήνα",
    },
    lang: { el: "Ελληνικά", en: "English" },
  },

  en: {
    nav: {
      home: "Home",
      services: "Services",
      gallery: "Gallery",
      team: "Team",
      reviews: "Reviews",
      book: "Book",
      contact: "Contact",
    },
    cta: {
      book: "Book now",
      bookShort: "Book",
      call: "Call",
      directions: "Directions",
      services: "View services",
      seeAll: "See all",
      gallery: "View gallery",
      reviews: "Read reviews",
      leaveReview: "Leave a Google review",
      back: "Back",
      submit: "Send request",
      sending: "Sending…",
      menu: "Menu",
      close: "Close",
    },
    hero: {
      eyebrow: "Hair salon · Faliro, Athens",
      title: "Where every hair day feels heavenly",
      intro:
        "A bright, quiet room in Faliro. We cut, color and care with attention and without hurry. You arrive as you are — you leave a little lighter.",
      rating: "4.9",
      ratingNote: "412 Google reviews",
    },
    home: {
      philosophyLabel: "Our philosophy",
      philosophyTitle: "Light makes the difference",
      philosophyText:
        "We believe in the natural. In hair that moves, color that doesn't shout, care that lasts for weeks. So we work slowly, with a clear eye and good products.",
      pillars: [
        { title: "Light", text: "High ceilings, white walls, full of morning light. A room that calms." },
        { title: "Care", text: "We listen first. Then we suggest — never the other way round." },
        { title: "Detail", text: "A straight line, a warmer tone. That's where the difference lives." },
      ],
      servicesLabel: "Services",
      servicesTitle: "A few good choices",
      servicesText: "Everything your hair needs — nothing more.",
      reviewsLabel: "Our guests",
      reviewsTitle: "Words we keep",
      galleryLabel: "Our work",
      galleryTitle: "Moments from the salon",
      galleryText: "Color, shape and texture — straight from the chair.",
      ctaLabel: "Booking",
      ctaTitle: "Your chair is waiting",
      ctaText:
        "Tell us what you have in mind. We'll find the time and the person who fits.",
      ctaNote: "We reply the same day, Monday to Saturday.",
    },
    servicesPage: {
      eyebrow: "Services & prices",
      title: "Our menu",
      intro:
        "Prices are indicative and may vary with hair length and density. You'll always hear the final price before we begin.",
      note: "Prices include VAT. Cards and cash accepted.",
      duration: "Duration",
      from: "from",
    },
    galleryPage: {
      eyebrow: "Gallery",
      title: "Before & after, and everything between",
      intro: "A small collection of the team's work. Tap an image to see it larger.",
      empty: "Photos coming soon.",
    },
    teamPage: {
      eyebrow: "The team",
      title: "People who love hair",
      intro: "Four different eyes, one shared attention to detail.",
      bookWith: "Book",
    },
    reviewsPage: {
      eyebrow: "Reviews",
      title: "4.9 out of 5, across 412 reviews",
      intro:
        "Almost everyone finds us on Google. If you've visited and enjoyed it, a review helps a lot — and makes us better.",
      leaveTitle: "Visited recently?",
      leaveText: "Tell us how it was. Two words are enough.",
    },
    bookPage: {
      eyebrow: "Booking",
      title: "Let's find your hour",
      intro:
        "Fill in your details and we'll be in touch to confirm. It takes a few seconds.",
      name: "Full name",
      phone: "Phone",
      email: "Email",
      service: "Service",
      stylist: "Preferred stylist",
      anyStylist: "Anyone available",
      date: "Date",
      time: "Time",
      notes: "Notes",
      notesPlaceholder: "e.g. first visit, sensitive scalp, I'd like advice on color…",
      submit: "Send booking request",
      sending: "Sending…",
      successTitle: "We'll be waiting for you",
      successText:
        "We've received your request. We'll call you to confirm — usually the same day.",
      another: "Book another",
      required: "Please fill in the fields marked *.",
      thanks: "Thank you!",
      callInstead: "Prefer to call?",
    },
    contactPage: {
      eyebrow: "Contact",
      title: "We're in Faliro",
      intro:
        "Two steps from the tram stop, with easy parking on the surrounding streets. Come and see us.",
      address: "Address",
      phone: "Phone",
      hours: "Opening hours",
      follow: "Follow us",
      getDirections: "Get directions",
      callNow: "Call now",
    },
    footer: {
      tagline: "Hair salon in Faliro, Athens. Light, care, detail.",
      explore: "Explore",
      visit: "Visit",
      hours: "Hours",
      rights: "Hair Heaven © 2026",
      made: "Made with care in Athens",
    },
    lang: { el: "Ελληνικά", en: "English" },
  },
};

export const timeSlots = [
  "10:00", "10:30", "11:00", "11:30", "12:00", "12:30",
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30", "18:00", "18:30",
  "19:00", "19:30", "20:00",
];