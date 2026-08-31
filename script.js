/* ============================================================
   Tuna Bookkeeping - interactions + EN/TR i18n
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Translations ---------- */
  var I18N = {
    en: {
      "a11y.skip": "Skip to content",
      "nav.services": "Services",
      "nav.how": "How it works",
      "nav.about": "About",
      "nav.contact": "Contact",
      "cta.book": "Book a call",
      "cta.whatsapp": "WhatsApp",
      "cta.quote": "Get a tailored quote",

      "hero.eyebrow": "UK bookkeeping & financial consultancy",
      "hero.title": "Bookkeeping you can actually reach.",
      "hero.sub": "We keep UK owner-managed and international businesses compliant and tidy, with flexible hours and straight answers.",
      "hero.badge": "UK firm, based in Harpenden",

      "trust.reg": "UK registered, established 2021",
      "trust.hours": "Flexible working hours",
      "trust.lang": "Support in English & Turkish",
      "trust.intl": "UK & international clients",

      "services.eyebrow": "What we do",
      "services.title": "Everything your books need, in one place.",
      "svc.book.t": "Bookkeeping",
      "svc.book.d": "Day-to-day records and bank reconciliation, kept accurate and up to date so you always know where you stand.",
      "svc.vat.t": "VAT & Tax Preparation",
      "svc.vat.d": "VAT and tax base (matrah) figures prepared accurately and on time, in line with current and upcoming UK regulations.",
      "svc.pay.t": "Payroll & HR",
      "svc.pay.d": "Fully managed payroll, PAYE and HR support so your team is paid correctly and on time.",
      "svc.rep.t": "Management Reporting",
      "svc.rep.d": "Clear monthly management accounts and reporting that turn your numbers into decisions.",
      "svc.legal.t": "Company & Legal Support",
      "svc.legal.d": "Company secretarial and corporate guidance through board matters, restructuring and the business lifecycle.",
      "svc.intl.t": "International & Corporate Services",
      "svc.intl.d": "Cross-border support for fund, asset and corporate structures, coordinated across the UK and Turkey.",

      "how.title": "Simple to start, easy to stay.",
      "how.lead": "A personal service that grows with you. No jargon, no surprises at year end.",
      "how.s1.t": "Free consultation",
      "how.s1.d": "We get to know your business, your numbers and where you want to go.",
      "how.s2.t": "A clear, tailored quote",
      "how.s2.d": "Fixed pricing based on your size and complexity, agreed upfront with no hidden costs.",
      "how.s3.t": "Ongoing support",
      "how.s3.d": "Monthly bookkeeping, reporting and a person who actually answers when you call.",

      "about.eyebrow": "About Tuna",
      "about.title": "A UK firm that stays close to your business.",
      "about.body": "Tuna Bookkeeping and Financial Consultancy is a UK firm established in 2021, based in Harpenden and led by Sevil Tuna. We support owner-managed and international businesses with bookkeeping, tax and payroll. Clients stay with us because we are genuinely reachable, keep flexible hours across time zones, and stay current with UK regulations.",
      "about.f1.t": "Founded", "about.f1.d": "2021, in England",
      "about.f2.t": "Based in", "about.f2.d": "Harpenden, Hertfordshire",
      "about.f3.t": "Led by", "about.f3.d": "Sevil Tuna, Founder",
      "founder.role": "Founder & General Manager",
      "founder.bio": "Born in Izmir in 1978, Sevil graduated from Anadolu University's Faculty of Economics and Administrative Sciences in 2002. After years with national Turkish firms including Inci Holding, she founded Tuna Mali Musavirlik in 2016 and established Tuna Bookkeeping and Financial Consultancy in England in 2021. She works in both English and Turkish across accounting and tax, asset management, payroll and HR, capital markets, and grants and incentives.",

      "quotes.title": "Trusted by growing UK businesses.",
      "q1.text": "Even with a three hour time difference between Turkey and England, every service is delivered on time and to a high standard.",
      "q2.text": "Their knowledge stays current with both today's and upcoming regulations, and they are genuinely reachable with flexible hours.",
      "q3.text": "The guidance and knowledge they shared with our company throughout the consultancy has been genuinely valuable.",

      "pricing.title": "Bespoke pricing, no hidden costs.",
      "pricing.lead": "Every business is different, so we quote on your size and complexity and agree it with you upfront. Clear and honest, from day one.",

      "contact.eyebrow": "Get in touch",
      "contact.title": "Let's sort your books.",
      "contact.lead": "Tell us a little about your business and we will come back within one working day.",
      "form.name": "Name",
      "form.email": "Email",
      "form.business": "Business (optional)",
      "form.message": "How can we help?",
      "form.send": "Send message",
      "form.err.required": "This field is required.",
      "form.err.email": "Please enter a valid email.",
      "form.ok": "Thanks. We will be in touch within one working day.",

      "footer.tag": "Bookkeeping and financial consultancy for UK and international businesses.",
      "footer.reg": "Harpenden, Hertfordshire, United Kingdom.",
      "footer.cookies": "Cookie policy",

      "cookie.text": "We use essential cookies to make this site work, and optional ones to understand how it is used. You can accept or reject the optional cookies.",
      "cookie.accept": "Accept",
      "cookie.reject": "Reject",
      "cookie.policy": "Cookie policy",
      "policy.title": "Cookie Policy",
      "policy.p1": "Cookies are small files stored on your device. This site uses a small number of them, described below.",
      "policy.p2": "Essential cookies keep the site working, for example remembering your language and light or dark theme. These are always on because the site needs them.",
      "policy.p3": "Optional cookies would help us understand how the site is used. They are only set if you choose Accept, and none are loaded if you choose Reject. You can change your choice at any time from this Cookie policy link in the footer.",
      "cookie.status.accepted": "Your current choice: optional cookies accepted.",
      "cookie.status.rejected": "Your current choice: optional cookies rejected."
    },
    tr: {
      "a11y.skip": "İçeriğe geç",
      "nav.services": "Hizmetler",
      "nav.how": "Nasıl çalışır",
      "nav.about": "Hakkımızda",
      "nav.contact": "İletişim",
      "cta.book": "Görüşme ayarla",
      "cta.whatsapp": "WhatsApp",
      "cta.quote": "Size özel teklif alın",

      "hero.eyebrow": "UK muhasebe ve mali danışmanlık",
      "hero.title": "Gerçekten ulaşabileceğiniz bir muhasebe.",
      "hero.sub": "UK'deki işletmeleri ve uluslararası müşterileri düzenli ve uyumlu tutuyoruz; esnek saatler ve net cevaplarla.",
      "hero.badge": "Harpenden merkezli UK firması",

      "trust.reg": "UK kayıtlı, 2021'de kuruldu",
      "trust.hours": "Esnek çalışma saatleri",
      "trust.lang": "İngilizce ve Türkçe destek",
      "trust.intl": "UK ve uluslararası müşteriler",

      "services.eyebrow": "Ne yapıyoruz",
      "services.title": "Defterlerinizin ihtiyacı olan her şey, tek yerde.",
      "svc.book.t": "Defter Tutma",
      "svc.book.d": "Günlük kayıtlar ve banka mutabakatı; her an nerede olduğunuzu bilmeniz için güncel ve doğru tutulur.",
      "svc.vat.t": "KDV & Matrah Hazırlığı",
      "svc.vat.d": "KDV ve matrah hesaplamaları; güncel ve yaklaşan UK mevzuatına uygun, doğru ve zamanında hazırlanır.",
      "svc.pay.t": "Bordro & İK",
      "svc.pay.d": "Uçtan uca bordro, PAYE ve İK desteği; ekibiniz doğru ve zamanında ödensin.",
      "svc.rep.t": "Yönetim Raporlaması",
      "svc.rep.d": "Net aylık yönetim hesapları ve raporlama; rakamlarınızı kararlara dönüştürür.",
      "svc.legal.t": "Şirket & Hukuki Destek",
      "svc.legal.d": "Şirket sekreterliği ve kurumsal danışmanlık; yönetim, yeniden yapılanma ve iş yaşam döngüsü boyunca.",
      "svc.intl.t": "Uluslararası & Kurumsal Hizmetler",
      "svc.intl.d": "Fon, varlık ve kurumsal yapılar için sınır ötesi destek; UK ve Türkiye arasında koordineli.",

      "how.title": "Başlaması kolay, kalması rahat.",
      "how.lead": "Sizinle büyüyen kişisel bir hizmet. Karmaşık dil yok, yıl sonunda sürpriz yok.",
      "how.s1.t": "Ücretsiz ön görüşme",
      "how.s1.d": "İşinizi, rakamlarınızı ve hedeflerinizi tanıyoruz.",
      "how.s2.t": "Net, size özel teklif",
      "how.s2.d": "Büyüklüğünüze ve karmaşıklığınıza göre sabit fiyat; baştan mutabık kalınır, gizli maliyet yok.",
      "how.s3.t": "Sürekli destek",
      "how.s3.d": "Aylık defter tutma, raporlama ve aradığınızda gerçekten cevap veren bir muhatap.",

      "about.eyebrow": "Tuna hakkında",
      "about.title": "İşinize yakın duran bir UK firması.",
      "about.body": "Tuna Bookkeeping and Financial Consultancy, 2021'de kurulan, Harpenden merkezli ve Sevil Tuna liderliğindeki bir UK firmasıdır. Sahibi tarafından yönetilen işletmelere ve uluslararası müşterilere defter tutma, vergi ve bordro konularında destek veriyoruz. Müşterilerimiz bizimle kalıyor çünkü gerçekten ulaşılabiliriz, saat dilimleri arasında esnek çalışıyoruz ve UK mevzuatını güncel takip ediyoruz.",
      "about.f1.t": "Kuruluş", "about.f1.d": "2021, İngiltere",
      "about.f2.t": "Merkez", "about.f2.d": "Harpenden, Hertfordshire",
      "about.f3.t": "Yönetim", "about.f3.d": "Sevil Tuna, Kurucu",
      "founder.role": "Kurucu & Genel Müdür",
      "founder.bio": "1978'de İzmir'de doğan Sevil Tuna, 2002'de Anadolu Üniversitesi İktisadi ve İdari Bilimler Fakültesi'nden mezun oldu. İnci Holding dahil ulusal Türk firmalarındaki yıllarının ardından 2016'da Tuna Mali Müşavirlik'i kurdu ve 2021'de İngiltere'de Tuna Bookkeeping and Financial Consultancy'yi hayata geçirdi. Muhasebe ve vergi, varlık yönetimi, bordro ve İK, sermaye piyasası ile teşvik ve mali yardımlar alanlarında İngilizce ve Türkçe hizmet veriyor.",

      "quotes.title": "Büyüyen UK işletmelerinin güvendiği isim.",
      "q1.text": "Türkiye ile İngiltere arasında üç saat fark olmasına rağmen tüm hizmetler zamanında ve yüksek kalitede yürütülüyor.",
      "q2.text": "Bilgileri hem güncel hem de yaklaşan mevzuata hâkim; esnek çalışma saatleriyle gerçekten ulaşılabilirler.",
      "q3.text": "Danışmanlık kapsamında şirketimize gösterdikleri yaklaşım ve bilgi aktarımı gerçekten çok faydalı oldu.",

      "pricing.title": "Size özel fiyat, gizli maliyet yok.",
      "pricing.lead": "Her işletme farklıdır; büyüklüğünüze ve karmaşıklığınıza göre teklif verir, baştan sizinle mutabık kalırız. İlk günden net ve dürüst.",

      "contact.eyebrow": "Bize ulaşın",
      "contact.title": "Defterlerinizi birlikte düzenleyelim.",
      "contact.lead": "İşinizden kısaca bahsedin, bir iş günü içinde size dönelim.",
      "form.name": "Ad Soyad",
      "form.email": "E-posta",
      "form.business": "İşletme (opsiyonel)",
      "form.message": "Nasıl yardımcı olabiliriz?",
      "form.send": "Mesaj gönder",
      "form.err.required": "Bu alan zorunludur.",
      "form.err.email": "Lütfen geçerli bir e-posta girin.",
      "form.ok": "Teşekkürler. Bir iş günü içinde size döneceğiz.",

      "footer.tag": "UK ve uluslararası işletmeler için muhasebe ve mali danışmanlık.",
      "footer.reg": "Harpenden, Hertfordshire, Birleşik Krallık.",
      "footer.cookies": "Çerez politikası",

      "cookie.text": "Bu sitenin çalışması için zorunlu çerezler ve sitenin nasıl kullanıldığını anlamak için isteğe bağlı çerezler kullanıyoruz. İsteğe bağlı çerezleri kabul edebilir veya reddedebilirsiniz.",
      "cookie.accept": "Kabul et",
      "cookie.reject": "Reddet",
      "cookie.policy": "Çerez politikası",
      "policy.title": "Çerez Politikası",
      "policy.p1": "Çerezler, cihazınızda saklanan küçük dosyalardır. Bu site aşağıda açıklanan az sayıda çerez kullanır.",
      "policy.p2": "Zorunlu çerezler sitenin çalışmasını sağlar; örneğin dil tercihinizi ve açık/koyu temayı hatırlar. Site bunlara ihtiyaç duyduğu için her zaman açıktır.",
      "policy.p3": "İsteğe bağlı çerezler, sitenin nasıl kullanıldığını anlamamıza yardımcı olur. Yalnızca 'Kabul et' derseniz ayarlanır; 'Reddet' derseniz hiçbiri yüklenmez. Seçiminizi istediğiniz zaman alt bilgideki bu Çerez politikası bağlantısından değiştirebilirsiniz.",
      "cookie.status.accepted": "Mevcut seçiminiz: isteğe bağlı çerezler kabul edildi.",
      "cookie.status.rejected": "Mevcut seçiminiz: isteğe bağlı çerezler reddedildi."
    }
  };

  var docEl = document.documentElement;

  /* ---------- Language ---------- */
  function applyLang(lang) {
    if (!I18N[lang]) lang = "en";
    var dict = I18N[lang];
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });
    docEl.setAttribute("lang", lang);
    document.querySelectorAll(".lang__btn").forEach(function (b) {
      b.classList.toggle("is-active", b.getAttribute("data-lang") === lang);
    });
    try { localStorage.setItem("tuna-lang", lang); } catch (e) {}
    docEl.setAttribute("data-lang", lang);
    if (typeof updateStatus === "function") updateStatus();
  }

  var savedLang = "en";
  try { savedLang = localStorage.getItem("tuna-lang") || "en"; } catch (e) {}
  applyLang(savedLang);

  document.querySelectorAll(".lang__btn").forEach(function (btn) {
    btn.addEventListener("click", function () { applyLang(btn.getAttribute("data-lang")); });
  });

  /* ---------- Theme ---------- */
  var themeToggle = document.getElementById("themeToggle");
  function setTheme(theme) {
    docEl.setAttribute("data-theme", theme);
    var icon = themeToggle.querySelector("i");
    icon.className = theme === "dark" ? "ph ph-sun" : "ph ph-moon";
    try { localStorage.setItem("tuna-theme", theme); } catch (e) {}
  }
  var savedTheme = null;
  try { savedTheme = localStorage.getItem("tuna-theme"); } catch (e) {}
  if (savedTheme) setTheme(savedTheme);
  else {
    var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    var startIcon = themeToggle.querySelector("i");
    startIcon.className = prefersDark ? "ph ph-sun" : "ph ph-moon";
  }
  themeToggle.addEventListener("click", function () {
    var current = docEl.getAttribute("data-theme");
    if (!current) {
      var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      current = prefersDark ? "dark" : "light";
    }
    setTheme(current === "dark" ? "light" : "dark");
  });

  /* ---------- Mobile nav ---------- */
  var burger = document.getElementById("burger");
  var navMobile = document.getElementById("navMobile");
  burger.addEventListener("click", function () {
    var open = navMobile.getAttribute("data-open") === "true";
    navMobile.setAttribute("data-open", String(!open));
    navMobile.hidden = open;
    burger.setAttribute("aria-expanded", String(!open));
  });
  navMobile.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      navMobile.setAttribute("data-open", "false");
      navMobile.hidden = true;
      burger.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------- Scroll reveal ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("is-in"); io.unobserve(entry.target); }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* ---------- Contact form (client-side validation) ---------- */
  var form = document.getElementById("contactForm");
  var status = document.getElementById("formStatus");

  function t(key) { return (I18N[docEl.getAttribute("lang")] || I18N.en)[key] || ""; }

  function validateField(field) {
    var errEl = form.querySelector('.field__error[data-for="' + field.id + '"]');
    field.classList.add("is-touched");
    var msg = "";
    if (field.required && !field.value.trim()) msg = t("form.err.required");
    else if (field.type === "email" && field.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) msg = t("form.err.email");
    if (errEl) errEl.textContent = msg;
    return msg === "";
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var fields = form.querySelectorAll("input[required], textarea[required]");
    var ok = true;
    fields.forEach(function (f) { if (!validateField(f)) ok = false; });
    var emailField = document.getElementById("email");
    if (emailField.value && !validateField(emailField)) ok = false;

    if (!ok) { status.textContent = ""; return; }

    // No backend wired yet. Replace with your form handler / email service.
    status.textContent = t("form.ok");
    form.reset();
    form.querySelectorAll(".field__error").forEach(function (el) { el.textContent = ""; });
    form.querySelectorAll(".is-touched").forEach(function (el) { el.classList.remove("is-touched"); });
  });

  form.querySelectorAll("input, textarea").forEach(function (f) {
    f.addEventListener("blur", function () { if (f.classList.contains("is-touched") || f.value) validateField(f); });
  });

  /* ---------- Cookie consent (self-contained, no third party) ---------- */
  var CONSENT_KEY = "tuna-cookie-consent";
  var banner = document.getElementById("cookieBanner");
  var modal = document.getElementById("cookieModal");
  var statusEl = document.getElementById("cookieStatus");

  function getConsent() {
    try { return localStorage.getItem(CONSENT_KEY); } catch (e) { return null; }
  }
  function setConsent(value) {
    try { localStorage.setItem(CONSENT_KEY, value); } catch (e) {}
    if (banner) banner.hidden = true;
    updateStatus();
    // Optional (analytics) cookies would only be initialised here when value === "accepted".
    // Nothing is loaded on "rejected".
  }
  function updateStatus() {
    if (!statusEl) return;
    var c = getConsent();
    statusEl.textContent = c ? t("cookie.status." + c) : "";
  }

  if (banner && !getConsent()) banner.hidden = false;

  function openModal() {
    if (!modal) return;
    updateStatus();
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    var closeBtn = modal.querySelector(".modal__close");
    if (closeBtn) closeBtn.focus();
  }
  function closeModal() {
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = "";
  }

  function on(id, fn) { var el = document.getElementById(id); if (el) el.addEventListener("click", fn); }
  on("cookieAccept", function () { setConsent("accepted"); });
  on("cookieReject", function () { setConsent("rejected"); });
  on("modalAccept", function () { setConsent("accepted"); closeModal(); });
  on("modalReject", function () { setConsent("rejected"); closeModal(); });
  on("cookiePolicyLink", openModal);
  on("footerCookie", openModal);

  if (modal) {
    modal.querySelectorAll("[data-close]").forEach(function (el) {
      el.addEventListener("click", closeModal);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !modal.hidden) closeModal();
    });
  }

  /* ---------- Year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
