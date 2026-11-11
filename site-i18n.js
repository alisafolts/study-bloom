(() => {
  const translations = {
    en: {
      'Помощник в учёбе': 'Study assistant',
      'Кроссворды': 'Crosswords',
      'Тесты': 'Quizzes',
      'Выбрать язык сайта': 'Choose website language',
      'Выбрать цвет сайта': 'Choose website color',
      'Включить ночную тему': 'Enable dark theme',
      'Ночная тема': 'Dark theme',
      'Дневная тема': 'Light theme',
      'Учись играя': 'Learn through play',
      'Преврати конспект в кроссворд: повторяй термины перед семинаром, зачётом или экзаменом.': 'Turn your notes into a crossword and review terms before a class, test, or exam.',
      'Или выбери готовый предмет и тему': 'Or choose a subject and topic',
      'Количество слов и слотов': 'Number of words and slots',
      'Одно слово занимает один слот. Если материала недостаточно, кроссворд будет содержать меньше слов.': 'Each word takes one slot. If there is not enough material, the crossword will contain fewer words.',
      'Готовые предметы и темы': 'Subjects and topics',
      'Наведи на предмет и выбери тему — кроссворд создастся сам.': 'Hover over a subject and choose a topic to create a crossword.',
      'Или создай по своей лекции / файлу': 'Or create one from your lecture or file',
      'Выбери тему': 'Choose a topic',
      'Решай кроссворд': 'Solve the crossword',
      'Смотри подсказки': 'View clues',
      'Подсказки': 'Clues',
      'Сначала прочитай вопросы, затем впиши ответы в клетки кроссворда.': 'Read the clues, then enter the answers in the crossword.',
      'По горизонтали': 'Across',
      'По вертикали': 'Down',
      'Кроссворд': 'Crossword',
      'Впиши по одной букве в каждую клетку и нажми «Проверить ответы».': 'Enter one letter in each cell, then select “Check answers”.',
      'Проверить ответы': 'Check answers',
      'После генерации вводи буквы в клетки. Стрелками можно перемещаться по сетке.': 'After generating the puzzle, enter letters in the cells. Use the arrow keys to move around the grid.',
      'Слов в тексте': 'Words in text',
      'Ключей': 'Clues',
      'Клеток': 'Cells',
      'Текст пустой. Сначала вставьте лекцию или загрузите файл.': 'The text is empty. Paste a lecture or upload a file first.',
      'Составь тест по лекции': 'Create a quiz from a lecture',
      'Вставь конспект или загрузи текстовый файл, чтобы получить тест с вариантами ответов и сразу проверить себя.': 'Paste your notes or upload a text file to create a multiple-choice quiz and check your answers.',
      'Готовые тесты по предметам': 'Ready-made quizzes by subject',
      'Выбери тему — тест откроется сразу, ничего загружать не нужно.': 'Choose a topic to start a quiz. No upload required.',
      'Количество вопросов в тесте': 'Number of quiz questions',
      'вопросов': 'questions',
      'Предметы и темы готовых тестов': 'Subjects and ready-made quiz topics',
      '1. Добавь учебный материал': '1. Add study material',
      'Поддерживаются TXT, MD, CSV, JSON, HTML/XML, PDF с текстовым слоем, DOCX, XLS/XLSX и PPTX. Файлы обрабатываются в браузере; максимум 25 МБ.': 'Supported: TXT, MD, CSV, JSON, HTML/XML, text-based PDF, DOCX, XLS/XLSX, and PPTX. Files are processed in your browser; 25 MB maximum.',
      'Выбрать файл лекции': 'Choose a lecture file',
      'Или вставь текст сюда': 'Or paste text here',
      'Вставь сюда фрагмент лекции или конспекта...': 'Paste an excerpt from a lecture or notes here...',
      'Составить тест': 'Create quiz',
      'Попробовать на примере': 'Try an example',
      'Генерация выполняется прямо в браузере по предложениям и ключевым словам текста; внешний ИИ пока не подключён.': 'Questions are generated in your browser from sentences and keywords; no external AI is connected.',
      '2. Проверь себя': '2. Test yourself',
      'Проверить ответы': 'Check answers',
      'Составить заново': 'Start over',
      'Философия': 'Philosophy',
      'История Узбекистана': 'History of Uzbekistan',
      'Всемирная история': 'World history',
      'Биология': 'Biology',
      'Математика': 'Mathematics',
      'Физика': 'Physics',
      'Химия': 'Chemistry',
      'География': 'Geography',
      'Информатика': 'Computer science',
      'Литература': 'Literature',
      'Русский язык': 'Russian language',
      'Античная философия': 'Ancient philosophy',
      'Философия Нового времени': 'Early modern philosophy',
      'Познание и мышление': 'Knowledge and thought',
      'Великий шёлковый путь': 'The Great Silk Road',
      'Эпоха Амира Темура': 'The era of Amir Temur',
      'Древний Рим': 'Ancient Rome',
      'Средневековая Европа': 'Medieval Europe',
      'Древняя Греция': 'Ancient Greece',
      'Клетка и её строение': 'The cell and its structure',
      'Строение клетки': 'Cell structure',
      'Фотосинтез': 'Photosynthesis',
      'Уравнения и функции': 'Equations and functions',
      'Геометрические фигуры': 'Geometric shapes',
      'Механика и движение': 'Mechanics and motion',
      'Электрический ток': 'Electric current',
      'Строение атома': 'Atomic structure',
      'Химические реакции': 'Chemical reactions',
      'Материки и океаны': 'Continents and oceans',
      'Атмосфера и климат': 'Atmosphere and climate',
      'Алгоритмы и программирование': 'Algorithms and programming',
      'Информация и кодирование': 'Information and encoding',
      'Литературные жанры': 'Literary genres',
      'Классика русской литературы': 'Russian literary classics',
      'Части речи': 'Parts of speech',
      'Члены предложения': 'Parts of a sentence',
      'Темы по предмету': 'Topics in',
      'StudyBloom — кроссворды по лекциям': 'StudyBloom — Crosswords from lectures',
      'StudyBloom — тесты по лекциям': 'StudyBloom — Quizzes from lectures',
      '5 слов': '5 words',
      '10 слов': '10 words',
      '15 слов': '15 words',
      '20 слов': '20 words',
      '10 вопросов': '10 questions',
      '30 вопросов': '30 questions',
      '50 вопросов': '50 questions'
    },
    uz: {
      'Твой помощник в учёбе': 'Sening oʻqishdagi yordamching',
      'Кроссворды': 'Krossvordlar',
      'Тестики': 'Testlar',
      'Выбери язык сайта': 'Sayt tilini tanlang',
      'Выбери цвет сайта': 'Sayt rangini tanlang',
      'Включить ночную тему': 'Tungi mavzuni yoqish',
      'Ночная тема': 'Tungi mavzu',
      'Дневная тема': 'Kunduzgi mavzu',
      'Учись играя': 'O‘ynab o‘rganing',
      'Преврати конспект в кроссворд: повторяй термины перед семинаром, зачётом или экзаменом.': 'Konspektni krossvordga aylantiring va dars yoki imtihon oldidan atamalarni takrorlang.',
      'Или выбери готовый предмет и тему': 'Yoki fan va mavzuni tanlang',
      'Количество слов и слотов': 'So‘zlar va kataklar soni',
      'Одно слово занимает один слот. Если материала недостаточно, кроссворд будет содержать меньше слов.': 'Har bir so‘z bitta katakni egallaydi. Material yetarli bo‘lmasa, krossvordda so‘zlar kamroq bo‘ladi.',
      'Готовые предметы и темы': 'Fanlar va mavzular',
      'Наведи на предмет и выбери тему — кроссворд создастся сам.': 'Fan ustiga olib boring va mavzuni tanlang — krossvord avtomatik tuziladi.',
      'Или создай по своей лекции / файлу': 'Yoki ma’ruza/faylingizdan yarating',
      'Выбери тему': 'Mavzuni tanlang',
      'Решай кроссворд': 'Krossvordni yeching',
      'Смотри подсказки': 'Maslahatlarni ko‘ring',
      'Подсказочки': 'Maslahatlar',
      'Сначала прочитай вопросы, затем впиши ответы в клетки кроссворда.': 'Avval savollarni o‘qing, so‘ng javoblarni krossvord kataklariga kiriting.',
      'По горизонтали': 'Eniga',
      'По вертикали': 'Bo‘yiga',
      'Кроссворд': 'Krossvord',
      'Впиши по одной букве в каждую клетку и нажми «Проверить ответы».': 'Har bir katakka bittadan harf kiriting va «Javoblarni tekshirish» tugmasini bosing.',
      'Проверить ответы': 'Javoblarni tekshirish',
      'После генерации вводи буквы в клетки. Стрелками можно перемещаться по сетке.': 'Topshiriq yaratilgach, kataklarga harflarni kiriting. To‘r bo‘ylab strelkalar bilan harakatlaning.',
      'Слов в тексте': 'Matndagi so‘zlar',
      'Ключей': 'Maslahatlar',
      'Клеток': 'Kataklar',
      'Текст  пока пуст. Сначала вставьте лекцию или загрузите файл.': 'Matn bo‘sh. Avval ma’ruza matnini kiriting yoki fayl yuklang.',
      'Составь тест по лекции': 'Ma’ruza asosida test tuzing',
      'Вставь конспект или загрузи текстовый файл, чтобы получить тест с вариантами ответов и сразу проверить себя.': 'Konspektni kiriting yoki matn faylini yuklang — javob variantlari bilan test tuzib, o‘zingizni tekshiring.',
      'Готовые тесты по предметам': 'Fanlar bo‘yicha tayyor testlar',
      'Выбери тему — тест откроется сразу, ничего загружать не нужно.': 'Mavzuni tanlang — test darhol ochiladi, fayl yuklash shart emas.',
      'Количество вопросов в тесте': 'Testdagi savollar soni',
      'вопросов': 'ta savol',
      'Предметы и темы готовых тестов': 'Fanlar va tayyor test mavzulari',
      '1. Добавь учебный материал': '1. O‘quv materialini qo‘shing',
      'Поддерживаются TXT, MD, CSV, JSON, HTML/XML, PDF с текстовым слоем, DOCX, XLS/XLSX и PPTX. Файлы обрабатываются в браузере; максимум 25 МБ.': 'TXT, MD, CSV, JSON, HTML/XML, matnli PDF, DOCX, XLS/XLSX va PPTX qo‘llab-quvvatlanadi. Fayllar brauzerda qayta ishlanadi; hajmi 25 MB gacha.',
      'Выбрать файл лекции': 'Ma’ruza faylini tanlang',
      'Или вставь текст сюда': 'Yoki matnni shu yerga kiriting',
      'Вставь сюда фрагмент лекции или конспекта...': 'Ma’ruza yoki konspekt parchasini shu yerga kiriting...',
      'Составить тест': 'Test tuzish',
      'Попробовать на примере': 'Namunada sinab ko‘rish',
      'Генерация выполняется прямо в браузере по предложениям и ключевым словам текста; внешний ИИ пока не подключён.': 'Savollar matndagi gaplar va kalit so‘zlar asosida brauzerda tuziladi; tashqi sun’iy intellekt ulanmagan.',
      '2. Проверь себя': '2. O‘zingizni tekshiring',
      'Составить заново': 'Qaytadan tuzish',
      'Философия': 'Falsafa',
      'История Узбекистана': 'O‘zbekiston tarixi',
      'Всемирная история': 'Jahon tarixi',
      'Биология': 'Biologiya',
      'Математика': 'Matematika',
      'Физика': 'Fizika',
      'Химия': 'Kimyo',
      'География': 'Geografiya',
      'Информатика': 'Informatika',
      'Литература': 'Adabiyot',
      'Русский язык': 'Rus tili',
      'Античная философия': 'Qadimgi falsafa',
      'Философия Нового времени': 'Yangi davr falsafasi',
      'Познание и мышление': 'Bilish va tafakkur',
      'Великий шёлковый путь': 'Buyuk ipak yo‘li',
      'Эпоха Амира Темура': 'Amir Temur davri',
      'Древний Рим': 'Qadimgi Rim',
      'Средневековая Европа': 'O‘rta asrlar Yevropasi',
      'Древняя Греция': 'Qadimgi Yunoniston',
      'Клетка и её строение': 'Hujayra va uning tuzilishi',
      'Строение клетки': 'Hujayra tuzilishi',
      'Фотосинтез': 'Fotosintez',
      'Уравнения и функции': 'Tenglamalar va funksiyalar',
      'Геометрические фигуры': 'Geometrik shakllar',
      'Механика и движение': 'Mexanika va harakat',
      'Электрический ток': 'Elektr toki',
      'Строение атома': 'Atom tuzilishi',
      'Химические реакции': 'Kimyoviy reaksiyalar',
      'Материки и океаны': 'Materiklar va okeanlar',
      'Атмосфера и климат': 'Atmosfera va iqlim',
      'Алгоритмы и программирование': 'Algoritmlar va dasturlash',
      'Информация и кодирование': 'Axborot va kodlash',
      'Литературные жанры': 'Adabiy janrlar',
      'Классика русской литературы': 'Rus adabiyoti klassikasi',
      'Части речи': 'So‘z turkumlari',
      'Члены предложения': 'Gap bo‘laklari',
      'Темы по предмету': 'Fan mavzulari',
      'StudyBloom — кроссворды по лекциям': 'StudyBloom — Ma’ruza asosidagi krossvordlar',
      'StudyBloom — тесты по лекциям': 'StudyBloom — Ma’ruza asosidagi testlar',
      '5 слов': '5 ta so‘z',
      '10 слов': '10 ta so‘z',
      '15 слов': '15 ta so‘z',
      '20 слов': '20 ta so‘z',
      '10 вопросов': '10 ta savol',
      '30 вопросов': '30 ta savol',
      '50 вопросов': '50 ta savol'
    }
  };

  const originals = new WeakMap();
  const storageKey = 'studyBloomLanguage';
  const contentCachePrefix = 'studyBloomContentTranslations:v2:';
  const originalTitle = document.title;
  let language = 'ru';

  function translated(value) {
    return language === 'ru' ? value : (translations[language][value] || value);
  }

  async function translateStudyContent(values, targetLanguage) {
    const uniqueValues = [...new Set(values.filter(value => typeof value === 'string' && value.trim()))];
    if (targetLanguage === 'ru') return new Map(uniqueValues.map(value => [value, value]));
    if (!['en', 'uz'].includes(targetLanguage)) {
      throw new Error(`Unsupported translation language: ${targetLanguage}`);
    }

    const cacheKey = `${contentCachePrefix}${targetLanguage}`;
    let cache = {};
    try {
      cache = JSON.parse(localStorage.getItem(cacheKey) || '{}');
    } catch (error) {
      console.error('Не удалось прочитать кэш переводов:', error);
    }
    const missing = uniqueValues.filter(value => !cache[value]);
    const separator = '\n__STUDYBLOOM_TRANSLATION_ITEM_4F8A__\n';
    const batches = [];
    let batch = [];
    let batchLength = 0;

    missing.forEach(value => {
      if (batch.length && batchLength + value.length + separator.length > 2200) {
        batches.push(batch);
        batch = [];
        batchLength = 0;
      }
      batch.push(value);
      batchLength += value.length + separator.length;
    });
    if (batch.length) batches.push(batch);

    for (const valuesBatch of batches) {
      const query = valuesBatch.join(separator);
      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLanguage}&dt=t&q=${encodeURIComponent(query)}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Translation service returned HTTP ${response.status}.`);
      }
      const payload = await response.json();
      if (!Array.isArray(payload[0])) throw new Error('Translation service returned an invalid response.');
      const result = payload[0].map(part => part[0]).join('').split(separator);
      if (result.length !== valuesBatch.length) {
        throw new Error('Translation service did not preserve the text boundaries.');
      }
      valuesBatch.forEach((value, index) => {
        cache[value] = result[index].trim();
      });
    }

    if (missing.length) {
      try {
        localStorage.setItem(cacheKey, JSON.stringify(cache));
      } catch (error) {
        console.error('Не удалось сохранить кэш переводов:', error);
      }
    }
    return new Map(uniqueValues.map(value => [value, cache[value]]));
  }

  function translateNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      if (!originals.has(node)) originals.set(node, node.nodeValue);
      const original = originals.get(node);
      const leading = original.match(/^\s*/)[0];
      const trailing = original.match(/\s*$/)[0];
      const content = original.slice(leading.length, original.length - trailing.length);
      const result = translated(content);
      if (node.nodeValue !== `${leading}${result}${trailing}`) {
        node.nodeValue = `${leading}${result}${trailing}`;
      }
      return;
    }

    if (node.nodeType !== Node.ELEMENT_NODE) return;
    ['aria-label', 'title', 'placeholder'].forEach(attribute => {
      if (!node.hasAttribute(attribute)) return;
      const key = `${attribute}:${node.tagName}:${attribute}`;
      let values = originals.get(node);
      if (!values) {
        values = new Map();
        originals.set(node, values);
      }
      if (!values.has(key)) values.set(key, node.getAttribute(attribute));
      const original = values.get(key);
      const result = translated(original);
      if (node.getAttribute(attribute) !== result) node.setAttribute(attribute, result);
    });
    node.childNodes.forEach(translateNode);
  }

  function applyLanguage(nextLanguage) {
    language = translations[nextLanguage] ? nextLanguage : 'ru';
    document.documentElement.lang = language === 'uz' ? 'uz' : language;
    translateNode(document.body);
    document.title = translated(originalTitle);
    const picker = document.getElementById('languagePicker');
    if (picker) picker.value = language;
    try {
      localStorage.setItem(storageKey, language);
    } catch (error) {
      console.error('Не удалось сохранить выбранный язык:', error);
    }
    window.dispatchEvent(new CustomEvent('studyBloomLanguageChange', { detail: { language } }));
  }

  window.studyBloomTranslate = translated;
  window.studyBloomLanguage = () => language;
  window.studyBloomTranslateContent = translateStudyContent;
  window.addEventListener('DOMContentLoaded', () => {
    const picker = document.getElementById('languagePicker');
    if (!picker) return;
    let savedLanguage = 'ru';
    try {
      savedLanguage = localStorage.getItem(storageKey) || 'ru';
    } catch (error) {
      console.error('Не удалось загрузить сохранённый язык:', error);
    }
    applyLanguage(savedLanguage);
    picker.addEventListener('change', () => applyLanguage(picker.value));
    const observer = new MutationObserver(records => {
      records.forEach(record => {
        if (record.type === 'characterData') translateNode(record.target);
        else record.addedNodes.forEach(translateNode);
      });
    });
    observer.observe(document.body, { childList: true, characterData: true, subtree: true });
  });
})();
