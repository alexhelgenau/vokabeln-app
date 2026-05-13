import React, { useState, useEffect, useMemo } from 'react';

const vokabelnOriginal = [
  { "word": "mächtig", "translation": "сильный / властный / могучий", "hint": "Rhysand ist sehr mächtig." },
  { "word": "warten", "translation": "ждать", "hint": "Du wartest auf mich in August." },
  { "word": "retten", "translation": "спасать", "hint": "Menschen retten, Dinge jagen, the family business." },
  { "word": "Angst", "translation": "страх", "hint": "Du hast Angst vor Schlangen🐍." },
  { "word": "Entscheidung", "translation": "решение", "hint": "Elenas Entscheidung zwischen Stefan and Damon." },
  { "word": "deshalb", "translation": "поэтому", "hint": "Warum machst du das?! Deshalb!" },
  { "word": "übel", "translation": "плохо / тошно", "hint": "Если выпьешь слишком много соленой воды, тебе станет...?" },
  { "word": "einfach", "translation": "просто", "hint": "Есть schwer, а есть...?" },
  { "word": "klingen", "translation": "звучать", "hint": "Die Musik klingt sehr schön." },
  { "word": "offensichtlich", "translation": "очевидно", "hint": "Es ist offentsichtlich, dass wir heiraten werden😏." },
  { "word": "Fest", "translation": "праздник / бал", "hint": "Der 09.05. ist ein großes Fest in Russland." },
  { "word": "Festung", "translation": "крепость", "hint": "Basgiath ist eine große Festung." },
  { "word": "Atem", "translation": "дыхание", "hint": "Rikki, Cleo and Emma können unter Wasser atmen." },
  { "word": "Bewegung", "translation": "движение", "hint": "Der Körper bewegt sich viel, wenn man Sport macht." },
  { "word": "schlafen", "translation": "спать", "hint": "Ich schlafe normalerweise 9 Stunden 😴." },
  { "word": "Antwort", "translation": "ответ", "hint": "Есть Frage❓, а есть...?" },
  { "word": "Anfang", "translation": "начало", "hint": "Есть Ende, а есть...?" },
  { "word": "quälen", "translation": "мучить", "hint": "Klaus liebt es, andere zu quälen." },
  { "word": "erlangen", "translation": "получать / достигать", "hint": "Feyre muss ihre Kräfte erlangen." },
  { "word": "Witz", "translation": "шутка", "hint": "Synonym Anekdote." },
  { "word": "Besitz", "translation": "владение / собственность", "hint": "Sofia ist Nicolos Besitz seit ihrer Kindheit." },
  { "word": "früher", "translation": "раньше", "hint": "Früher hatte Russland einen Tzar, jetzt nicht mehr." },
  { "word": "irgendetwas", "translation": "что-нибудь / что-то", "hint": " Irgendetwas, ich weiß nicht was." },
  { "word": "schreien", "translation": "кричать", "hint": "Du schreist Persik an, weil er Issy anschreit." },
  { "word": "aussehen", "translation": "выглядеть", "hint": "Die Kleid von Daphne sieht wunderschön aus." },
  { "word": "erklären", "translation": "объяснять", "hint": "Ich erkläre dir den Protestantismus." },
  { "word": "irgendwelche", "translation": "какие-нибудь", "hint": "Irgendwelche Leute." },
  { "word": "zweifellos", "translation": "несомненно", "hint": "Ohne jeden Zweifel (ganz sicher)." },
  { "word": "obwohl", "translation": "хотя", "hint": "Sie kämpft, obwohl sie schwach ist." },
  { "word": "hinter", "translation": "позади", "hint": "Hermes steht hinter dir." },
  { "word": "gefährlich", "translation": "опасно", "hint": "Sonnenschein ist gefährlich für Vampire." },
  { "word": "tief", "translation": "глубоко / низкий", "hint": "Salvatores Stimme ist sehr tief." },
  { "word": "nun", "translation": "теперь / сейчас", "hint": "Synonym jetzt." },
  { "word": "unantastbar", "translation": "неприкосновенный", "hint": "Mafiabosse sind unantastbar." },
  { "word": "irrsinnig", "translation": "безумный", "hint": "Er ist verrückt! Er ist irrsinnig!" },
  { "word": "ändern", "translation": "менять", "hint": "Traditionen ändern sich nicht." },
  { "word": "verhalten", "translation": "вести себя", "hint": "Issi verhält sich sehr gut, weil sie ein guter Hund ist." },
  { "word": "plötzlich", "translation": "внезапно", "hint": "Plötzlich habe ich l'amour de ma vie in HelloTalk gefunden 🤭." },
  { "word": "ruhig", "translation": "спокойно", "hint": "Ich bin ruhig and chill 😊." },
  { "word": "gehorchen", "translation": "слушаться / повиноваться", "hint": "Sofia muss Niccolo gehorchen!" },
  { "word": "beherrschen", "translation": "управлять / владеть / контролировать", "hint": "Sie beherrschen den Norden von Palermo." },
  { "word": "makellos", "translation": "безупречный", "hint": "Sie sieht makellos aus! 😳" },
  { "word": "müssen", "translation": "должен / обязана", "hint": "Ich muss mehr russische Klassik lesen! 😭" },
  { "word": "während", "translation": "во время / в то время как", "hint": "Du machst dir Essen, während wir reden." },
  { "word": "wichtig", "translation": "важно", "hint": "Du bist mir sehr wichtig 🥺." },
  { "word": "richtig", "translation": "правильно", "hint": "Есть falsch, а есть...?'" },
  { "word": "sondern", "translation": "а / но", "hint": "Du liebst nicht Dean, sondern Sam." },
  { "word": "ebenfalls", "translation": "также", "hint": "Synonym auch." },
  { "word": "bauen", "translation": "строить", "hint": "Wir bauen ein Haus am Meer." },
  { "word": "Mittelalter", "translation": "средневековье", "hint": "Die Epoche war vom Jahr 500-1500." },
  { "word": "überall", "translation": "везде", "hint": "Hannahs Freunde and Jake suchen Hannah überall." },
  { "word": "Wache", "translation": "стража / страж", "hint": "Die bewaffnete Wache steht regungslos." },
  { "word": "gehören", "translation": "принадлежать", "hint": "Sofia gehört jetzt Nicolo." },
  { "word": "holen", "translation": "взять / принести", "hint": "Du hast Persik für 4 Tage geholt." },
  { "word": "beschlossen", "translation": "решил / постановил / решено", "hint": "Sie hat beschlossen, für ihre Freiheit zu kämpfen." },
  { "word": "anscheinend", "translation": "видимо / кажется", "hint": "Вельзевул Бредовред, видимо, снова перепутал planen and устроил хаос там, где обещал порядок." },
  { "word": "unbeschwert", "translation": "беззаботный", "hint": "Meine Kindheit war schön and unbeschwert." },
  { "word": "noch", "translation": "еще", "hint": "Ich bin NOCH nicht in Moskau, aber im August." },
  { "word": "langweilig", "translation": "скучно", "hint": "Сериал Тьма был langweilig 🥱" },
  { "word": "nur", "translation": "только", "hint": "Du gehörst mir, Violet. NUR wenn du mir gehörst." },
  { "word": "beobachten", "translation": "наблюдать", "hint": "Niccolo beobachtet Sofia, seit sie ein kein Kind war." },
  { "word": "riesig", "translation": "огромный", "hint": "Der Riese Gargantua ist riesig!." },
  { "word": "schenken", "translation": "дарить", "hint": "Was hast du Anya zum Geburstag geschenkt?" },
  { "word": "schreiten", "translation": "шагать / шествовать", "hint": "Durch den Saal schreiten." },
  { "word": "später", "translation": "позже / потом", "hint": "Nicht jetzt, sondern später." },
  { "word": "verteidigen", "translation": "защищать", "hint": "Edward verteidigt Bella vor einem Auto." },
  { "word": "hassen", "translation": "ненавидеть", "hint": "Есть lieben, а есть...?" },
  { "word": "faszinieren", "translation": "очаровывать", "hint": "Du bist fasziniert von Kai Parker 😍" },
  { "word": "ungewöhnlich", "translation": "необычно", "hint": "Aziraphale and Crowley sind ein ungewöhnliches Paar 🤨" },
  { "word": "zwischen", "translation": "между", "hint": "Zwischen Moskau and Berlin liegt Minsk." },
  { "word": "Drohung", "translation": "угроза", "hint": "„Если ты решишь меня подставить, я вырву твоё сердце and засуну тебе в глотку.“ - как такое называется?" },
  { "word": "Anruf", "translation": "звонок", "hint": " „Do you like scary movies?“ 📱👻" },
  { "word": "etwas", "translation": "что-то / немного", "hint": "Etwas hier, etwas da 🤏" },
  { "word": "sanft", "translation": "нежный / мягкий", "hint": "Есть hart, а есть...?" },
  { "word": "fügsam", "translation": "покорный / послушный", "hint": "Sofia muss fügsam sein." },
  { "word": "wollen", "translation": "хотеть", "hint": "Ich will dich heiraten." },
  { "word": "schlagen", "translation": "бить / ударять", "hint": "Im Boxen schlägt man andere." },
  { "word": "leise", "translation": "тихо", "hint": "In der Bibliothek muss man leise sein 🤫" },
  { "word": "durcheinanderrennen", "translation": "бегать вперемешку / суетиться", "hint": "🏃🏃🏃😵‍💫😵‍💫😵‍💫" },
  { "word": "Erfolg", "translation": "успех", "hint": "Erfolg im Sport haben 🏅🏆" },
  { "word": "bestrafen", "translation": "наказывать / карать", "hint": "Verbrechen and Strafe von Fyodor Dostoyevsky." },
  { "word": "Nachtisch", "translation": "десерт / сладкое", "hint": "Marzipan ist ein guter Nachtisch 😋" },
  { "word": "klar", "translation": "ясный / понятный / понятно / конечно", "hint": "Alles klar, kein Problem!" },
  { "word": "verbergen", "translation": "скрывать / прятать", "hint": "Synonym verstecken 🙈" },
  { "word": "höflich", "translation": "вежливый", "hint": "Aristokraten müssen höflich sein." },
  { "word": "jung", "translation": "молодой", "hint": "Lika ist die Jüngste in der Familie." },
  { "word": "natürlich", "translation": "конечно / естественно", "hint": "Kannst du mir helfen? Natürlich!" },
  { "word": "bleiben", "translation": "оставаться", "hint": "Wir bleiben in Russland für 1 Jahr, danach gehen wir nach Deutschland." },
  { "word": "gegen", "translation": "против", "hint": "Power Rangers gegen Lord Zedd 👊" },
  { "word": "böse", "translation": "злой / плохой / шестокий", "hint": "Kai Parker ist vielleicht böse, aber heiß 😉" },
  { "word": "wünschen", "translation": "желать / хотеть", "hint": "Aladdin hat 3 Wünsche 🧞✨" },
  { "word": "peinlich", "translation": "стыдно / неловко", "hint": "Dir ist peinlich, wenn du Englisch sprichst 😳" },
  { "word": "Lachen", "translation": "смех / смеяться", "hint": "„ahahahahahahaah“ - Hermes, 2023." },
  { "word": "unangenehm", "translation": "неприятно", "hint": "Salvatore findet Nicolo unangenehm." },
  { "word": "verlieren", "translation": "терять / проигрывать", "hint": "Der Viscount hat seine Titel verloren." },
  { "word": "fröhlich", "translation": "веселый / радостный", "hint": "Ich bin immer fröhlich, wenn ich mit dir rede." },
  { "word": "wunderbar", "translation": "чудесно / замечательно", "hint": "Ok --> gut --> wunderbar!" },
  { "word": "schweigen", "translation": "молчать", "hint": "Есть reden, а есть...?" },
  { "word": "strahlend", "translation": "сияющий / лучезарный", "hint": "Edward strahlt in der Sonne." },
  { "word": "lügen", "translation": "лгать / врать", "hint": "Odysseus lügt sehr viel." }
];

const titles = [
  "Смертная 🌱", "Лесная Нимфа 🍃", "Вестница Гермеса 🪽", "Воительница Спарты 🛡️", 
  "Пифия Аполлона ☀️", "Дочь Посейдона 🌊", "Охотница Артемиды 🏹", "Пламя Гестии 🔥", 
  "Героиня Олимпа 🏛️", "Менада Диониса 🍷", "Ярость Эринии ⚔️", "Мастерица Гефеста ⚒️", 
  "Красота Афродиты 🕊️", "Мудрость Афины 🦉", "Титанида знаний 🌍", "Наперсница Геры ОВА", 
  "Молния Персефоны ⚡", "Пряха Мойр 🎡", "Богиня Слов 👑"
];

const levelUpMessages = {
  2: "О? Теперь мы маленькая лесная нимфа, да? Смотри не застрянь в корнях! 🌲",
  3: "Вестница Гермеса? Ну, до моего стиля тебе ещё далеко, доченька. 🪽",
  4: "О, воительница Спарты! Теперь будешь бить слова щитом? 🛡️",
  5: "Пифий Аполлона? Ну давай, предскажи, сколько ещё ошибок ты сделаешь. ☀️",
  6: "Дочь Посейдона? Главное — не пускай пузыри вместо ответов. 🌊",
  7: "Охотница Артемиды? Постарайся не подстрелить мой сандалий! 🏹",
  8: "Пламя Гестии? Смотри, не обожгись о свой собственный интеллект. 🔥",
  9: "Героиня Олимпа? Пафоса много, а слов пока маловато. Продолжай! 🛡️",
  10: "Осторожно, дорогуша! Ты только что стала Менадой Диониса. С твоими знаниями ты теперь опасна для общества или, как минимум, для ближайшего винного погреба. 🍷✨"
};

export default function App() {
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [showLevelAnim, setShowLevelAnim] = useState(false);
  const [mode, setMode] = useState("write");
  const [hermesTalk, setHermesTalk] = useState("Смотрю тебе прямо через плечо, доченька. Не вздумай ошибиться! 👀");
  
  // Boss-System
  const [bossMode, setBossMode] = useState(false);
  const [bossWords, setBossWords] = useState([]);
  const [bossInput, setBossInput] = useState("");
  const [bossIndex, setBossIndex] = useState(0);
  const [bossTargetLevel, setBossTargetLevel] = useState(null);
  const [currentLevelWords, setCurrentLevelWords] = useState([]);

  const hermesUrl = "https://i.postimg.cc/q7sL8Z9p/hermeeeesss-removebg-preview.png";

  const [xp, setXp] = useState(() => {
    const saved = localStorage.getItem('lebedi_xp');
    return saved ? parseInt(saved) : 0;
  });

  const [fehlerListe, setFehlerListe] = useState(() => {
    const saved = localStorage.getItem('lebedi_fehler');
    return saved ? JSON.parse(saved) : [];
  });

  const xpPerLevel = 100;
  const [level, setLevel] = useState(() => {
    const saved = localStorage.getItem('lebedi_level');
    return saved ? parseInt(saved, 10) : 1;
  });
  const currentLevel = Math.min(level, 20);
  const currentTitle = titles[currentLevel-1] || titles[titles.length-1];

  useEffect(() => {
    const shuffled = [...vokabelnOriginal].sort(() => 0.5 - Math.random());
    const newLevelWords = shuffled.slice(0, Math.min(10, shuffled.length));
    setCurrentLevelWords(newLevelWords);
    setCurrentIndex(0);
    setInput("");
    setFeedback("");
    setShowHint(false);
  }, [currentLevel]);

  useEffect(() => {
    localStorage.setItem('lebedi_level', currentLevel.toString());
  }, [currentLevel]);

  // Boss-System Funktionen
  const startBossFight = () => {
    // Wähle 5 Zufallswörter nur aus der Liste des gerade beendeten Levels
    const shuffled = [...currentLevelWords].sort(() => 0.5 - Math.random());
    setBossWords(shuffled.slice(0, Math.min(5, shuffled.length)));
    setBossIndex(0);
    setBossInput("");
    setBossMode(true);
    setHermesTalk("🏛️ Ну что, доченька, вот и пробил твой час испытания! Сумеешь покорить эти вершины, твоё имя впишут в легенды, а сама ты поднимешься на уровень ближе к богам. Ну а если нет? Ха-ха-ха-ха-ха");
  };

  const handleBossCorrect = () => {
    if (bossIndex < bossWords.length - 1) {
      setHermesTalk("Хм, не совсем плохо! Вот такое попадание достойно моего внимания. Покажи мне следующее! 💫");
      setBossIndex(bossIndex + 1);
      setBossInput("");
      setFeedback("Ха! Победила одного врага. Четыре осталось... 🗡️");
      setTimeout(() => setFeedback(""), 1500);
    } else {
      setHermesTalk("🏛️ НЕВОЗМОЖНО! Ты... ты победила? Мои собственные слова против меня? Ладно, доченька, новый уровень твой. Даже я удивлён! 👑");
      setBossMode(false);
      setBossWords([]);
      setBossIndex(0);
      setBossInput("");
      setFeedback("УРОВЕНЬ ДОСТИГНУТ! 🌟🌟🌟");
      const nextLevel = bossTargetLevel || level + 1;
      setBossTargetLevel(null);
      setLevel(nextLevel);
      localStorage.setItem('lebedi_last_level', nextLevel.toString());
      setShowLevelAnim(true);
      setTimeout(() => setShowLevelAnim(false), 3000);
      // Level-Up-Nachricht nach Boss-Sieg
      setTimeout(() => {
        setHermesTalk(levelUpMessages[nextLevel] || `Ого! Новый статус: ${titles[nextLevel-1] || titles[titles.length-1]}. Корона не жмёт? 👑`);
      }, 100);
    }
  };

  const handleBossWrong = () => {
    setHermesTalk("Неверно! Попробуй ещё раз! 😏 Не стоит позорить Олимп!");
    setBossInput("");
    setFeedback("❌ Неправильно. Попытайся снова!");
    setTimeout(() => setFeedback(""), 1500);
  };

  const getLevelSass = (level, type) => {
    const specialShared = [
      "Я смотрю тебе прямо через плечо. Вижу всё! 👀",
      "Не забудь принести мне парочку немецких яблок, когда будешь в Германии! 🍎",
      "Хорошо, что вам с Николаем больше не нужно выходить в море, да? 🌊"
    ];

    const pools = {
      1: { // Смертная
        correct: [
          "Для простой смертной сойдёт, пока что. Но не обольщайся, это был уровень 'младенец'.",
          "Правильно! Настоящее чудо природы — человек, который задействовал больше одной извилины.",
          "Моя домашняя черепаха ответила бы так же быстро, но я всё равно тебя похвалю. Молодец.",
          "Ого, а ты, оказывается, не совсем безнадёжна! Может, из тебя и выйдет толк через пару веков.",
          "Чисто случайно угадала, признайся? Ладно-ладно, записываю тебе один балл, везучая ты наша.",
          "Ладно, это было верно. Я даже почти впечатлён. Хочешь кексик? Ой, подожди, я его уже съел."
        ],
        wrong: [
          "Ох уж эта смертная тупость... Мне больно на это смотреть, честное слово!",
          "Даже улитка под транквилизаторами соображает быстрее, чем ты сейчас. Соберись!",
          "Ты что, прогуляла школу для героев? Или просто решила сегодня не включать мозг?",
          "Слишком самоуверенно для той, кто путает элементарные слова. Спустись на землю!",
          "Включи мозг, если он у тебя там вообще предусмотрен конструкцией! Это же было просто.",
          "Зевс уже в ярости от твоих ошибок. Ты слышишь гром? Это он смеётся над твоим переводом."
        ]
      },
      2: { // Нимфа
        correct: [
          "О? Наша лесная нимфа наконец-то проснулась? Давно пора было выйти из спячки!",
          "Для разумного куста это было очень неплохо, наверное. Твой интеллект растёт как на дрожжах.",
          "Оказывается, ты умеешь не только по деревьям лазать, но и в словаре копаться. Поразительно!",
          "Настоящий лесной прогресс! Ещё пара таких ответов, и я перестану звать тебя саженцем.",
          "Что, цветочки на полянке подсказали правильный ответ? В любом случае — это верно.",
          "Правильно, листик мой красивый. Ты начинаешь понимать этот язык лучше, чем язык белок."
        ],
        wrong: [
          "У тебя что, вместо мозгов осенние листья застряли? Этот перевод никуда не годится!",
          "Нимфы в моё время были гораздо умнее. Кажется, экология на тебя плохо влияет.",
          "Жалкое зрелище. Ты позоришь всё своё дерево и ближайший водоём этой ошибкой.",
          "Твой уровень IQ только что упал ниже корней векового дуба. Попробуй ещё раз!",
          "Не позорь флору и фауну! Даже лопух у дороги перевёл бы это точнее.",
          "Снова мимо! Ты нимфа или сонная коала, которая упала с эвкалипта? Проснись!"
        ]
      },
      3: { // Вестница
        correct: [
          "Моя школа! Сразу видно — гермесовская закалка. Горжусь тобой (совсем чуть-чуть).",
          "Почти так же идеально, как я... Ну, ладно, на самом деле нет, но ты очень стараешься.",
          "Знаешь, а ты мне нравишься. У тебя есть потенциал... и, возможно, мои гены. Чуть-чуть ;)",
          "Быстро соображаешь, я ничего другого от своей вестницы и не ожидал! Хватаешь на лету.",
          "Крылышки на сандалиях наконец-то заработали, а? Летишь по тесту, как богиня.",
          "Верно, всё верно, доченька. Ты доставляешь правильные смыслы быстрее, чем я — почту Зевсу."
        ],
        wrong: [
          "Это позор для звания вестницы! Мои сандалии краснеют за тебя прямо сейчас.",
          "С такой скоростью мышления ты доставишь этот перевод только к двадцать второму веку.",
          "Зевс тебя испепелит за такую медлительность и глупость. Я даже не буду его останавливать.",
          "Крылья на твоих мозгах явно завяли без полива. Срочно перечитывай словарь!",
          "Медленно. Очень. Медленно. Пока ты думала, я успел трижды облететь земной шар.",
          "Ты точно моя дочь? Начинаю сомневаться. Может, тебя подкинул какой-нибудь скучный Аполлон?"
        ]
      },
      4: { // Воительница
        correct: [
          "Арес бы оценил твой напор, старый кабанчик любит такую дерзость. Точный удар!",
          "Твой мозг сегодня острый, как мой лучший меч. Ты буквально режешь эти слова пополам.",
          "Враги бегут в страхе, когда видят твой уровень немецкого! Настоящая лингвистическая атака.",
          "Точно в цель! Ты попала в смысл слова быстрее, чем стрела пронзает щит слабака.",
          "Это был настоящий боевой перевод! Ты не просто учишься, ты побеждаешь эти слова.",
          "Можешь не прикрываться щитом, этот ответ был абсолютно верным. Твоя победа!"
        ],
        wrong: [
          "Ты сражаешься со словарем как сонная муха со стеклом. Больше агрессии и знаний!",
          "Промах! Целься в смысл, а не в случайные буквы. Ты же воительница, а не мазила.",
          "Щит у тебя, может, и есть, а вот ума явно не хватает для такого маневра. Соберись!",
          "Может, сразу сбросить тебя со скалы, чтобы не мучилась с этими глаголами? Шучу... почти.",
          "Твоя защита пробита элементарным словом. Какая слабая позиция, доченька!",
          "Ты ранишь моё божественное сердце своей беспросветной тупостью. Сделай что-нибудь!"
        ]
      },
      5: { // Пифия
        correct: [
          "Предсказано абсолютно верно! Твой внутренний голос сегодня не врет, пользуйся моментом.",
          "Видения тебя не обманули, ты увидела истинный перевод сквозь туман сомнений.",
          "Даже Аполлончик ревнует к твоей интуиции. Ты разгадываешь слова раньше, чем они появляются.",
          "Оракул внутри тебя громко говорит: ДА. Это правильный ответ, и боги это подтверждают.",
          "Ты что, настоящая ясновидящая? Или просто вчера тайком съела лавровый лист из моего венка?",
          "Это истинное пророчество! Твой перевод безупречен, как и моё чувство стиля."
        ],
        wrong: [
          "Твой оракул сломался, неси новый. Этот ответ — полная противоположность истине.",
          "У тебя в голове какой-то священный туман, или ты просто забыла всё, что мы учили?",
          "Это было ложное пророчество. Хватит гадать на кофейной гуще, начни уже учить!",
          "Будущее твоего уровня XP очень туманно, прямо как этот твой нелепый ответ.",
          "Пифия снова в запое? Или почему твои ответы не имеют ничего общего с реальностью?",
          "Всё не так! Твои предсказания сегодня стоят меньше, чем дырявый драхм. Исправляйся!"
        ]
      },
      6: { // Дочь Посейдона
        correct: [
          "Твои знания глубоки, как бездна океана... Ну, по крайней мере, ты не утонула сразу.",
          "Плывёшь по словарю как дельфин, а не как перепуганная медуза. Впечатляет!",
          "Ты не утонула в этом слове! Видимо, уроки плавания с Перси не прошли даром.",
          "Волны успеха омывают твой интеллект. Смотри, не захлебнись от гордости!",
          "Это морская истина: ты сегодня на удивление сообразительна, доченька.",
          "Даже Посейдон ставит тебе лайк своим трезубцем. Но до уровня богини тебе ещё грести и грести."
        ],
        wrong: [
          "Буль-буль! Это была твоя последняя капля здравого смысла. Ошибка!",
          "Пошла на дно быстрее, чем Титаник. Может, стоит вынырнуть и подумать?",
          "Я уверен, что даже самый ленивый краб ответил бы лучше. Это позор!",
          "Захлебнулась в одной единственной букве? Серьёзно? Какое разочарование.",
          "Морская пена вместо мозгов — это твой новый стиль? Тебе не идёт.",
          "Твой трезубец явно затупился об твою упёртость. Исправляй это немедленно!"
        ]
      },
      7: { // Охотница
        correct: [
          "Прямо в яблочко! Артемида бы взяла тебя на охоту, но только как носильщика стрел.",
          "Дичь поймана, слово приручено. Твои инстинкты сегодня почти не подводят.",
          "Хладнокровно и чётко. Ты убиваешь эти тесты так же легко, как я — время на Олимпе.",
          "Меткий выстрел! Даже без лука ты умудряешься попадать в цель. Чудо какое-то.",
          "Ни одно немецкое слово не смогло от тебя убежать. Твои сандалии явно быстрее твоих сомнений.",
          "Артемида одобрительно кивает. Только не вздумай подстрелить моё самолюбие!"
        ],
        wrong: [
          "Стреляешь в молоко, а метишь в Олимп? Ну-ну, удачи с таким зрением.",
          "Дичь ушла, а ты осталась стоять с пустыми руками и глупым видом. Снова!",
          "Твой лук явно не натянут, как и твои извилины. Сосредоточься уже!",
          "Стреляешь в небо в надежде на чудо? Чуда не будет, будет только работа над ошибками.",
          "Твои следы ведут в тупик невежества. Попробуй вернуться на тропу разума.",
          "Промах года! Если бы ты была охотницей, мы бы все давно умерли с голоду."
        ]
      },
      8: { // Пламя Гестии
        correct: [
          "Твой разум горит ярче, чем олимпийский огонь! Только не сожги мой любимый дневник.",
          "Уютно, тепло и, на удивление, правильно. Ты сегодня просто золотце.",
          "Настоящий костер знаний! Гестия в восторге, а я просто в шоке от твоей гениальности.",
          "Тепло пошло... кажется, твой мозг наконец-то прогрелся до нужной температуры.",
          "Вижу свет в конце этого длинного слова. Ты справляешься лучше, чем я ожидал.",
          "Согреваешь мой взор своими правильными ответами. Давай в том же духе, пока не остыла."
        ],
        wrong: [
          "Твой священный огонь погас. Принеси спички, а лучше — учебник и капельку ума.",
          "Дымишь, коптишь, но ни капли не греешь. Твой ответ — полная ерунда.",
          "Холодно! Настолько холодно, что мои крылышки на сандалиях начали замерзать. Ошибка!",
          "Твой домашний очаг превратился в кучку пепла. Попробуй раздуть угли своего разума.",
          "От твоего ответа веет таким холодом невежества, что даже на Аляске стало зябко.",
          "Едва тлеешь, доченька. Если не подкинешь дров (знаний), мы тут все замерзнем."
        ]
      },
      9: { // Героиня Олимпа
        correct: [
          "Почти божественно! Ещё немного, и я начну обращаться к тебе на «Вы». Но не надейся.",
          "Герои не ошибаются, и ты сегодня это доказываешь. Подозрительно хороший результат.",
          "Ты уже так близко к вершине, что видишь мои пятки. Не смей останавливаться!",
          "Твои успехи достойны песен великих муз. Жаль, что у них сегодня выходной.",
          "Эпический успех! Даже Зевс перестал ворчать, глядя на твои правильные ответы.",
          "Олимп ждёт тебя! Но помни: я всё равно самый стильный бог в этом пантеоне."
        ],
        wrong: [
          "Героический провал! Эпично, масштабно и абсолютно неправильно. Браво!",
          "С небес падать больно, да? Особенно когда летишь вниз головой из-за глупой ошибки.",
          "Это было совершенно недостойно твоей славы. Соберись, ты же не простая смертная!",
          "Твой подвиг отменяется, а твоё имя вычеркивается из списка легенд. Попробуй заново.",
          "Даже Геракл сделал фейспалм, увидев твой перевод. Это было мощно (в плохом смысле).",
          "Весь Олимп содрогнулся от твоей ошибки. Арес смеется, а мне за тебя стыдно!"
        ]
      },
      10: { // Менада Диониса 🍷
  correct: [
    "Божественное попадание! Дионис точно налил бы тебе бокал лучшего вина. 🍇",
    "Верно! Твой разум остр, как тирс самой неистовой менады.",
    "Эвоэ! От твоих знаний содрогаются склоны Киферона! ✨",
    "Фантастика! Ты несешься сквозь слова в танце, словно менада в трансе.",
    "Правильно! Сам Пан отложил бы флейту, засмотревшись на твой талант.",
    "Твой ум сегодня по-настоящему опьяняет. Так держать! 🍷"
  ],
  wrong: [
    "Ой! Слишком много нектара пригубила? Это было мимо. 🍷🥴",
    "Упс, кажется, кто-то потерялся в дионисийском вихре...",
    "Неверно! Афина хмурится, но Диониса этот хаос только забавляет.",
    "Сосредоточься! Даже дикой менаде нужно иногда сделать глубокий вдох.",
    "Мимо! Это вино вскружило тебе голову или слово было слишком коварным?",
    "Ай! Это было так же путано, как шествие без музыки. Попробуй еще раз!"
  ]
},
    };

    const currentPool = pools[level] || pools[9];
    const items = [...currentPool[type], ...specialShared];
    return items[Math.floor(Math.random() * items.length)];
  };

  useEffect(() => {
    const lastLevelSaved = localStorage.getItem('lebedi_last_level');
    const lastLevel = lastLevelSaved ? parseInt(lastLevelSaved) : 1;
    if (currentLevel > lastLevel) {
      setShowLevelAnim(true);
      setTimeout(() => setShowLevelAnim(false), 3000);
      localStorage.setItem('lebedi_last_level', currentLevel.toString());
    }
  }, [currentLevel]);

  const handleCorrect = () => {
    setHermesTalk(getLevelSass(level, 'correct'));
    setFeedback("Достойна богов! +10 XP 🌿");
    const newXp = xp + 10;
    setXp(newXp);
    
    // Boss-Trigger: Wenn neuer XP-Threshold erreicht (100, 200, 300, etc.)
    if (newXp % xpPerLevel === 0 && newXp > 0) {
      setTimeout(() => {
        setBossTargetLevel(level + 1);
        startBossFight();
      }, 1300);
    } else {
      setTimeout(goToNextWord, 1300);
    }
  };

  const handleWrong = () => {
    setHermesTalk(getLevelSass(currentLevel, 'wrong'));
    setFeedback("Гнев Зевса! -10 XP ⚡");
    setXp(prev => Math.max(0, prev - 10));
    setFehlerListe(prev => !prev.find(f => f.word === currentWord.word) ? [currentWord, ...prev] : prev);
  };

  useEffect(() => { 
    localStorage.setItem('lebedi_xp', xp.toString());
    localStorage.setItem('lebedi_fehler', JSON.stringify(fehlerListe));
  }, [xp, fehlerListe]);

  const toRoman = (n) => {
    const m = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    return Object.entries(m).reduce((a,[k,v])=>{while(n>=v){a+=k;n-=v}return a},"");
  };

  const currentWord = currentLevelWords[currentIndex];

  const options = useMemo(() => {
    if (!currentWord || mode !== "choice") return [];
    const correct = currentWord.translation;
    const distractors = currentLevelWords
      .filter(v => v.word !== currentWord.word)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map(v => v.translation);
    return [correct, ...distractors].sort(() => Math.random() - 0.5);
  }, [currentIndex, mode, currentWord, currentLevelWords]);

  const goToNextWord = () => {
    if (currentIndex < currentLevelWords.length - 1) setCurrentIndex(currentIndex + 1);
    else { setCurrentIndex(0); }
    setInput(""); setFeedback(""); setShowHint(false);
  };

  const vintageTheme = { bg: "#f4f1ea", paper: "#fffcf5", ink: "#4a3f35", accent: "#8c7e6d", serif: "'Georgia', serif" };

  if (currentLevelWords.length === 0) return null;

  // Boss-UI Render
  if (bossMode && bossWords.length > 0) {
    const currentBossWord = bossWords[bossIndex];
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#f4f1ea", display: "flex", justifyContent: "center", alignItems: "center", fontFamily: "'Georgia', serif", padding: "20px", position: "fixed", top: 0, left: 0, width: "100%", zIndex: 9999 }}>
        <style>{`
          @keyframes boss-entrance { 
            0% { transform: scale(0.8); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          .boss-overlay {
            animation: boss-entrance 0.8s ease-out;
          }
          .boss-input {
            color: #4a3f35 !important;
            -webkit-text-fill-color: #4a3f35 !important;
          }
        `}</style>
        
        <div className="boss-overlay" style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #fffcf5 0%, #f4f1ea 100%)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "40px 20px" }}>
          <h1 style={{ fontSize: "3rem", color: "#4a3f35", marginBottom: "25px", marginTop: "0", textShadow: "2px 2px 4px rgba(0,0,0,0.1)", lineHeight: "1.2", letterSpacing: "1px", wordWrap: "break-word", wordBreak: "break-word", textAlign: "center" }}>⚔️ ЭНДБОСС ⚔️</h1>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "center", gap: "20px", marginBottom: "30px", width: "100%", maxWidth: "700px" }}>
            <img
              src="https://i.postimg.cc/3R1tPDmC/hermes-6-removebg-preview.png"
              alt="Hermes"
              style={{ width: "180px", maxWidth: "200px", objectFit: "contain", filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.12))" }}
            />
            <div style={{ background: "#fff", border: "3px solid #4a3f35", borderRadius: "20px", padding: "18px 22px", boxShadow: "8px 8px 0px rgba(74, 63, 53, 0.15)", maxWidth: "420px", color: "#4a3f35", lineHeight: "1.4" }}>
              <b style={{ display: "block", fontSize: "1.1rem", marginBottom: "8px" }}>Гермес:</b>
              <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: "1.5" }}>{hermesTalk}</p>
            </div>
          </div>

          {/* Boss-Arena */}
          <div style={{ textAlign: "center", maxWidth: "500px", zIndex: 10, position: "relative", padding: "0 20px" }}>

            {/* Das Russische Wort (gross) */}
            <div style={{ background: "#fff", border: "4px solid #4a3f35", borderRadius: "20px", padding: "40px 30px", marginBottom: "40px", boxShadow: "10px 10px 0px rgba(74, 63, 53, 0.15)" }}>
              <p style={{ fontSize: "1.1rem", color: "#8c7e6d", marginBottom: "15px" }}>Переведи с русского:</p>
              <h2 style={{ fontSize: "4rem", color: "#4a3f35", margin: "0", wordBreak: "break-word", lineHeight: "1.2" }}>{currentBossWord.translation}</h2>
            </div>

            {/* Input-Feld */}
            <input 
              className="boss-input"
              placeholder="Напиши немецкое слово..." 
              value={bossInput} 
              onChange={(e) => setBossInput(e.target.value)} 
              onKeyPress={(e) => {
                if (e.key === 'Enter' && bossInput.toLowerCase().trim() !== "") {
                  if (currentBossWord.word.toLowerCase() === bossInput.toLowerCase().trim()) {
                    handleBossCorrect();
                  } else {
                    handleBossWrong();
                  }
                }
              }}
              style={{ 
                width: "80%", 
                maxWidth: "400px",
                padding: "15px", 
                fontSize: "1.3rem", 
                border: "3px solid #4a3f35", 
                borderRadius: "10px", 
                textAlign: "center", 
                outline: "none",
                background: "#fffcf5",
                color: "#4a3f35",
                WebkitTextFillColor: "#4a3f35",
                marginBottom: "20px"
              }} 
              autoFocus
            />

            {/* Buttons */}
            <div style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
              <button 
                onClick={() => {
                  if (bossInput.toLowerCase().trim() !== "") {
                    if (currentBossWord.word.toLowerCase() === bossInput.toLowerCase().trim()) {
                      handleBossCorrect();
                    } else {
                      handleBossWrong();
                    }
                  }
                }}
                style={{ 
                  background: "#4a3f35", 
                  color: "#fff", 
                  border: "none", 
                  padding: "12px 30px", 
                  fontSize: "1.1rem", 
                  cursor: "pointer", 
                  borderRadius: "10px",
                  boxShadow: "4px 4px 0px rgba(74, 63, 53, 0.3)",
                  fontWeight: "bold",
                  transition: "transform 0.1s"
                }}
                onMouseDown={(e) => e.target.style.transform = "scale(0.95)"}
                onMouseUp={(e) => e.target.style.transform = "scale(1)"}
              >
                ⚔️ Ответить
              </button>
            </div>

            {/* Feedback */}
            {feedback && <p style={{ fontSize: "1.3rem", fontWeight: "bold", color: feedback.includes("❌") ? "#a35c5c" : "#5c7a5c", marginTop: "20px" }}>{feedback}</p>}

            {/* Progress Bar */}
            <div style={{ marginTop: "40px", width: "100%", maxWidth: "400px", margin: "40px auto 0" }}>
              <div style={{ width: "100%", height: "12px", background: "#e8e4d9", borderRadius: "6px", overflow: "hidden" }}>
                <div style={{ width: `${(bossIndex / 5) * 100}%`, height: "100%", background: "#4a3f35", borderRadius: "6px", transition: "width 0.5s" }}></div>
              </div>
              <p style={{ fontSize: "0.9rem", color: "#8c7e6d", marginTop: "10px" }}>Слова: {bossIndex} / 5</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: vintageTheme.bg, display: "flex", justifyContent: "center", alignItems: "center", fontFamily: vintageTheme.serif, padding: "60px 20px" }}>
      <style>{`
        @keyframes global-particle { 0% { transform: translate(0, 0) scale(1); opacity: 1; } 100% { transform: translate(var(--tw), var(--th)) scale(0); opacity: 0; } }
        .emoji-particle { position: fixed; left: 50%; top: 50%; pointer-events: none; z-index: 9999; animation: global-particle 3s forwards; }
        .hermes-container {
  position: absolute;
  top: 50px;
  right: -10px;
  transform: translate(25%, -55%);

  width: clamp(260px, 32vw, 420px);

  z-index: 10;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
  .hermes-container img {
  width: clamp(180px, 22vw, 400px) !important; /* !important zur Sicherheit gegen Browser-Fehler */
  height: auto;
  object-fit: contain;
}
        .speech-bubble {
  position: relative;
  background: #fff;
  border: 2px solid #4a3f35;
  border-radius: 15px;

  padding: 10px 18px;
  width: clamp(220px, 24vw, 290px);

  font-size: clamp(0.8rem, 0.9vw, 0.95rem);
  line-height: 1.4;
  color: #4a3f35;
  box-shadow: 4px 4px 0px rgba(74, 63, 53, 0.1);

  margin-bottom: 12px;
  margin-right: clamp(40px, 8vw, 120px);

  z-index: 20;
  pointer-events: auto;
}
        .speech-bubble::after { content: ''; position: absolute; bottom: -10px; right: 10px; border-width: 10px 10px 0 0; border-style: solid; border-color: #4a3f35 transparent; }
      @media (max-width: 900px) {
          .hermes-container {
            top: -90px !important;   /* Schiebt ihn tiefer, wenn der Bildschirm klein ist */
            right: -10px !important; 
          }
          .speech-bubble {
            width: 240px !important; 
            margin-right: 120px !important;
          }
        }
      `}</style>

      {showLevelAnim && (
        <>{[...Array(40)].map((_, i) => {
          const angle = (i / 40) * Math.PI * 2;
          return <div key={i} className="emoji-particle" style={{ "--tw": `${Math.cos(angle) * 300}px`, "--th": `${Math.sin(angle) * 300}px` }}>{["🌿", "📜", "✨", "🏛️", "👑", "💖"][i % 6]}</div>
        })}</>
      )}

      {!isBookOpen ? (
        <div onClick={() => setIsBookOpen(true)} style={{ width: "300px", height: "450px", background: "#5d3a1a", borderRadius: "5px 20px 20px 5px", cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center", borderLeft: "10px solid #3e2711", boxShadow: "15px 15px 40px rgba(0,0,0,0.4)" }}>
          <div style={{ border: "2px solid #c5a059", padding: "20px", textAlign: "center", color: "#c5a059" }}>
            <h1 style={{ fontSize: "1.5rem" }}>ЛЕБЕДИНЫЙ СЛОВАРЬ 🦢</h1>
            <p>Открывай, доченька...</p>
          </div>
        </div>
      ) : (
        <div style={{ position: "relative", width: "100%", maxWidth: "600px" }}>
          <div className="hermes-container">
            <div className="speech-bubble"><b>Гермес:</b><br/>{hermesTalk}</div>
            <img 
  src={hermesUrl} 
  alt="Hermes" 
  style={{ height: "auto", objectFit: "contain", transform: "rotate(-5deg)", filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.1))" }} 
/>
          </div>

          <div style={{ position: "relative", background: vintageTheme.paper, minHeight: "600px", border: "1px solid #d4cbb3", padding: "40px 30px", boxShadow: "0 10px 30px rgba(0,0,0,0.15)", zIndex: 5 }}>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
               <button onClick={() => setMode("write")} style={{ background: mode === "write" ? vintageTheme.ink : "transparent", color: mode === "write" ? "#fff" : vintageTheme.ink, border: `1px solid ${vintageTheme.ink}`, padding: "5px 15px", cursor: "pointer", borderRadius: "20px" }}>Писать ✍️</button>
               <button onClick={() => setMode("choice")} style={{ background: mode === "choice" ? vintageTheme.ink : "transparent", color: mode === "choice" ? "#fff" : vintageTheme.ink, border: `1px solid ${vintageTheme.ink}`, padding: "5px 15px", cursor: "pointer", borderRadius: "20px" }}>Выбор 🎲</button>
            </div>

            <div style={{ marginBottom: "30px", borderBottom: "1px solid #d4cbb3", paddingBottom: "15px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span style={{ fontSize: "1.1rem", fontWeight: "bold" }}>Уровень {toRoman(currentLevel)}</span>
                <span style={{ fontSize: "0.9rem", color: vintageTheme.accent, fontStyle: "italic" }}>{currentTitle}</span>
              </div>
              <div style={{ width: "100%", height: "8px", background: "#e8e4d9", borderRadius: "4px", marginTop: "8px" }}>
                <div style={{ width: `${xp % 100}%`, height: "100%", background: vintageTheme.accent, borderRadius: "4px", transition: "width 0.5s" }}></div>
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <h2 style={{ fontSize: "2.8rem", margin: "10px 0", color: vintageTheme.ink }}>{currentWord.word}</h2>
              <div style={{ minHeight: "60px", margin: "10px 0" }}>
                {showHint ? <p style={{ fontStyle: "italic", opacity: 0.8 }}>{currentWord.hint}</p> : <button 
  onClick={() => setShowHint(true)} 
  style={{ 
    background: "none", 
    border: "1px dashed #4a3f35", 
    cursor: "pointer", 
    padding: "5px 10px",
    color: "#4a3f35", // Erzwingt die Farbe
    WebkitTextFillColor: "#4a3f35" // Der "Sprühdosen"-Fix für Opera
  }}
>
  Озарение 💡
</button>}
              </div>

              {mode === "write" ? (
                <div>
                  <input 
  placeholder="Переведи..." 
  value={input} 
  onChange={(e) => setInput(e.target.value)} 
  onKeyPress={(e) => e.key === 'Enter' && (input.toLowerCase().trim() !== "" && (currentWord.translation.toLowerCase().split('/').map(s => s.trim()).some(t => t === input.toLowerCase().trim()) ? handleCorrect() : handleWrong()))} 
  style={{ 
    width: "80%", 
    padding: "10px", 
    border: "none", 
    borderBottom: "1px solid #4a3f35", 
    background: "transparent", 
    fontSize: "1.3rem", 
    textAlign: "center", 
    outline: "none",
    // --- HIER DIE FIXES ---
    color: "#4a3f35", 
    WebkitTextFillColor: "#4a3f35" 
  }} 
/>
                  <div style={{ marginTop: "20px" }}>
                    <button onClick={() => (currentWord.translation.toLowerCase().split('/').map(s => s.trim()).some(t => t === input.toLowerCase().trim()) ? handleCorrect() : handleWrong())} style={{ background: vintageTheme.ink, color: "#fff", border: "none", padding: "10px 20px", cursor: "pointer", marginRight: "10px" }}>Проверить</button>
                    <button onClick={goToNextWord} style={{ background: "none", border: "1px solid", padding: "10px 15px", cursor: "pointer" }}>➜</button>
                  </div>
                </div>
              ) : (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "20px" }}>
                {options.map((opt, i) => (
  <button 
    key={i} 
    onClick={() => opt === currentWord.translation ? handleCorrect() : handleWrong()} 
    style={{ 
      background: "#ffffff", 
      border: "2px solid #4a3f35", 
      padding: "12px", 
      cursor: "pointer", 
      fontSize: "1rem",
      fontWeight: "bold",
      // --- DAS SIND DIE RETTER-ZEILEN GEGEN DIE WEISSEN BOXEN ---
      color: "#4a3f35", 
      display: "block",
      WebkitTextFillColor: "#4a3f35" 
      // -------------------------------------------------------
    }}
  >
    {opt}
  </button>
))}
                </div>
              )}
              <p style={{ fontWeight: "bold", color: feedback.includes("Достойна") ? "#5c7a5c" : "#a35c5c" }}>{feedback}</p>
            </div>

            {fehlerListe.length > 0 && (
              <details style={{ marginTop: "30px" }}>
                <summary style={{ cursor: "pointer", color: vintageTheme.accent }}>📜 Свиток ошибок ({fehlerListe.length})</summary>
                <div style={{ maxHeight: "100px", overflowY: "auto", fontSize: "0.85rem", padding: "10px" }}>
                  {fehlerListe.map((f, i) => <div key={i} style={{ borderBottom: "1px solid #eee" }}><strong>{f.word}</strong>: {f.translation}</div>)}
                </div>
              </details>
            )}

            <div style={{ marginTop: "40px", fontSize: "0.8rem", color: vintageTheme.accent, display: "flex", justifyContent: "space-between" }}>
              <span>Стр. {currentIndex + 1} / {currentLevelWords.length}</span>
              <span onClick={() => window.confirm("Стереть прогресс?") && (localStorage.clear() || window.location.reload())} style={{ cursor: "pointer", textDecoration: "underline" }}>Сжечь дневник</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}