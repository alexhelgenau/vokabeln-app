import React, { useState, useEffect, useMemo } from 'react';

const vokabelnOriginal = [
  { "word": "mächtig", "translation": "сильный / властный / могучий", "hint": "Rhysand ist sehr mächtig." },
  { "word": "warten", "translation": "ждать", "hint": "Du wartest auf mich in August." },
  { "word": "retten", "translation": "спасать", "hint": "Menschen retten, Dinge jagen, the family business." },
  { "word": "Angst", "translation": "страх", "hint": "Du hast Angst vor Schlangen🐍." },
  { "word": "Entscheidung", "translation": "решение", "hint": "Elenas Entscheidung zwischen Stefan und Damon." },
  { "word": "deshalb", "translation": "поэтому", "hint": "Warum machst du das?! Deshalb!" },
  { "word": "übel", "translation": "плохо / тошно", "hint": "Wenn du zu viel Salzwasser trinkst..." },
  { "word": "einfach", "translation": "просто", "hint": "Gegenteil von schwer." },
  { "word": "klingen", "translation": "звучать", "hint": "Die Musik klingt sehr schön." },
  { "word": "offensichtlich", "translation": "очевидно", "hint": "Es ist offentsichtlich, dass wir heiraten werden😏." },
  { "word": "Fest", "translation": "праздник / бал", "hint": "Ein großes Fest wie am 09.05." },
  { "word": "Festung", "translation": "крепость", "hint": "Basgiath ist eine große Festung." },
  { "word": "Atem", "translation": "дыхание", "hint": "H2O Mädels können unter Wasser atmen." },
  { "word": "Bewegung", "translation": "движение", "hint": "Sport ist Bewegung." },
  { "word": "schlafen", "translation": "спать", "hint": "9 Stunden Schönheitsschlaf." },
  { "word": "Antwort", "translation": "ответ", "hint": "Gegenteil von Frage." },
  { "word": "Anfang", "translation": "начало", "hint": "Gegenteil von Ende." },
  { "word": "quälen", "translation": "мучить", "hint": "Klaus liebt es, andere zu quälen." },
  { "word": "erlangen", "translation": "получать / достигать", "hint": "Kräfte erlangen." },
  { "word": "Witz", "translation": "шутка", "hint": "Synonym Anekdote." },
  { "word": "Besitz", "translation": "владение / собственность", "hint": "Sofia ist Nicolos Besitz." },
  { "word": "früher", "translation": "раньше", "hint": "Früher gab es einen Tzar." },
  { "word": "irgendetwas", "translation": "что-нибудь / что-то", "hint": "Irgendwas halt." },
  { "word": "schreien", "translation": "кричать", "hint": "Persik anschreien." },
  { "word": "aussehen", "translation": "выглядеть", "hint": "Daphnes Kleid sieht toll aus." },
  { "word": "erklären", "translation": "объяснять", "hint": "Den Protestantismus erklären." },
  { "word": "irgendwelche", "translation": "какие-нибудь", "hint": "Irgendwelche Leute." },
  { "word": "zweifellos", "translation": "несомненно", "hint": "Ganz sicher." },
  { "word": "obwohl", "translation": "хотя", "hint": "Sie kämpft, obwohl sie schwach ist." },
  { "word": "hinter", "translation": "позади", "hint": "Hermes steht hinter dir." },
  { "word": "gefährlich", "translation": "опасно", "hint": "Sonne für Vampire." },
  { "word": "tief", "translation": "глубоко / низкий", "hint": "Salvatores Stimme." },
  { "word": "nun", "translation": "теперь / сейчас", "hint": "Synonym jetzt." },
  { "word": "unantastbar", "translation": "неприкосновенный", "hint": "Mafiabosse Status." },
  { "word": "irrsinnig", "translation": "безумный", "hint": "Verrückt!" },
  { "word": "ändern", "translation": "менять", "hint": "Traditionen ändern." },
  { "word": "verhalten", "translation": "вести себя", "hint": "Issi verhält sich gut." },
  { "word": "plötzlich", "translation": "внезапно", "hint": "Plötzlich in HelloTalk gefunden." },
  { "word": "ruhig", "translation": "спокойно", "hint": "Chill sein." },
  { "word": "gehorchen", "translation": "слушаться / повиноваться", "hint": "Sofia muss Niccolo gehorchen." },
  { "word": "beherrschen", "translation": "управлять / владеть / контролировать", "hint": "Palermo beherrschen." },
  { "word": "makellos", "translation": "безупречный", "hint": "Sie sieht perfekt aus." },
  { "word": "müssen", "translation": "должен / обязана", "hint": "Russische Klassik lesen müssen." },
  { "word": "während", "translation": "во время / в то время как", "hint": "Reden während dem Essen." },
  { "word": "wichtig", "translation": "важно", "hint": "Du bist mir wichtig." },
  { "word": "richtig", "translation": "правильно", "hint": "Nicht falsch." },
  { "word": "sondern", "translation": "а / но", "hint": "Nicht Dean, sondern Sam." },
  { "word": "ebenfalls", "translation": "также", "hint": "Auch." },
  { "word": "bauen", "translation": "строить", "hint": "Ein Haus bauen." },
  { "word": "Mittelalter", "translation": "средневековье", "hint": "500-1500 n. Chr." },
  { "word": "überall", "translation": "везде", "hint": "Hannah suchen." },
  { "word": "Wache", "translation": "стража / страж", "hint": "Bewaffnete Wache." },
  { "word": "gehören", "translation": "принадлежать", "hint": "Gehören zu Nicolo." },
  { "word": "holen", "translation": "взять / принести", "hint": "Persik holen." },
  { "word": "beschlossen", "translation": "решил / постановил / решено", "hint": "Entschluss fassen." },
  { "word": "anscheinend", "translation": "видимо / кажется", "hint": "Anscheinend Chaos geplant." },
  { "word": "unbeschwert", "translation": "беззаботный", "hint": "Sorglose Kindheit." },
  { "word": "noch", "translation": "еще", "hint": "Noch nicht in Moskau." },
  { "word": "langweilig", "translation": "скучно", "hint": "Serie 'Dark'." },
  { "word": "nur", "translation": "только", "hint": "Nur wenn du mir gehörst." },
  { "word": "beobachten", "translation": "наблюдать", "hint": "Niccolo beobachtet Sofia." },
  { "word": "riesig", "translation": "огромный", "hint": "Gargantua." },
  { "word": "schenken", "translation": "дарить", "hint": "Geschenke machen." },
  { "word": "schreiten", "translation": "шагать / шествовать", "hint": "Durch den Saal gehen." },
  { "word": "später", "translation": "позже / потом", "hint": "In der Zukunft." },
  { "word": "verteidigen", "translation": "защищать", "hint": "Edward schützt Bella." },
  { "word": "hassen", "translation": "ненавидеть", "hint": "Nicht lieben." },
  { "word": "faszinieren", "translation": "очаровывать", "hint": "Kai Parker Effekt." },
  { "word": "ungewöhnlich", "translation": "необычно", "hint": "Crowley & Aziraphale." },
  { "word": "zwischen", "translation": "между", "hint": "In der Mitte von zwei Orten." },
  { "word": "Drohung", "translation": "угроза", "hint": "Böse Ankündigung." },
  { "word": "Anruf", "translation": "звонок", "hint": "Scream-Anruf." },
  { "word": "etwas", "translation": "что-то / немного", "hint": "Ein bisschen." },
  { "word": "sanft", "translation": "нежный / мягкий", "hint": "Weich." },
  { "word": "fügsam", "translation": "покорный / послушный", "hint": "Brav gehorchen." },
  { "word": "wollen", "translation": "хотеть", "hint": "Wunsch haben." },
  { "word": "schlagen", "translation": "бить / ударять", "hint": "Boxkampf." },
  { "word": "leise", "translation": "тихо", "hint": "Nicht laut." },
  { "word": "durcheinanderrennen", "translation": "бегать вперемешку / суетиться", "hint": "Chaoslauf." },
  { "word": "Erfolg", "translation": "успех", "hint": "Goldmedaille." },
  { "word": "bestrafen", "translation": "наказывать / карать", "hint": "Schuld und Sühne." },
  { "word": "Nachtisch", "translation": "десерт / сладкое", "hint": "Süßspeise." },
  { "word": "klar", "translation": "ясный / понятный / конечно", "hint": "Alles klar." },
  { "word": "verbergen", "translation": "скрывать / прятать", "hint": "Geheimnis halten." },
  { "word": "höflich", "translation": "вежливый", "hint": "Gute Manieren." },
  { "word": "jung", "translation": "молодой", "hint": "Nicht alt." },
  { "word": "natürlich", "translation": "конечно / естественно", "hint": "Selbstverständlich." },
  { "word": "bleiben", "translation": "оставаться", "hint": "Nicht weggehen." },
  { "word": "gegen", "translation": "против", "hint": "Versus." },
  { "word": "böse", "translation": "злой / плохой / шестокий", "hint": "Nicht gut." }
];

const titles = [
  "Смертная 🌱", "Лесная Нимфа 🍃", "Вестница Гермеса 🪽", "Воительница Спарты 🛡️", 
  "Пифия Аполлона ☀️", "Дочь Посейдона 🌊", "Охотница Артемиды 🏹", "Пламя Гестии 🔥", 
  "Героиня Олимпа 🏛️", "Менада Диониса 🍷", "Ярость Эринии ⚔️", "Мастерица Гефеста ⚒️", 
  "Красота Афродиты 🕊️", "Мудрость Афины 🦉", "Титанида знаний 🌍", "Наперсница Геры 🦚", 
  "Молния Персефоны ⚡", "Пряха Мойр 🎡", "Богиня Слов 👑"
];

export default function App() {
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [liste, setListe] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [showLevelAnim, setShowLevelAnim] = useState(false);
  const [mode, setMode] = useState("write");
  const [hermesTalk, setHermesTalk] = useState("Смотрю тебе прямо через плечо. Не вздумай ошибиться! 👀");

  const hermesUrl = "https://i.postimg.cc/q7sL8Z9p/hermeeeesss-removebg-preview.png";

  const [xp, setXp] = useState(() => {
    const saved = localStorage.getItem('lebedi_xp');
    return saved ? parseInt(saved) : 0;
  });

  const xpPerLevel = 100;
  const currentLevel = Math.min(Math.floor(xp / xpPerLevel) + 1, 20);
  const currentTitle = titles[currentLevel-1] || titles[titles.length-1];

  const getLevelSass = (level, type) => {
    const specialShared = [
      "Я смотрю тебе прямо через плечо. Вижу всё! 👀",
      "Не забудь принести мне парочку немецких яблок, когда будешь в Германии! 🍎",
      "Хорошо, что вам с Николаем больше не нужно выходить в море, да? 🌊"
    ];

    const pools = {
      1: {
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
      2: {
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
      3: {
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
      4: {
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
      5: {
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
      }
      // (Weitere Level folgen gleicher Logik)
    };

    const currentPool = pools[level] || pools[1];
    const items = [...currentPool[type], ...specialShared];
    return items[Math.floor(Math.random() * items.length)];
  };

  useEffect(() => {
    setListe([...vokabelnOriginal].sort(() => Math.random() - 0.5));
  }, []);

  const currentWord = liste[currentIndex];

  const options = useMemo(() => {
    if (!currentWord || mode !== "choice") return [];
    const correct = currentWord.translation;
    const others = vokabelnOriginal
      .filter(v => v.translation !== correct)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map(v => v.translation);
    return [correct, ...others].sort(() => Math.random() - 0.5);
  }, [currentIndex, mode, currentWord]);

  const handleCorrect = () => {
    setHermesTalk(getLevelSass(currentLevel, 'correct'));
    setFeedback("Достойна богов! +10 XP 🌿");
    setXp(prev => prev + 10);
    setTimeout(goToNextWord, 1300);
  };

  const handleWrong = () => {
    setHermesTalk(getLevelSass(currentLevel, 'wrong'));
    setFeedback("Гнев Зевса! -10 XP ⚡");
    setXp(prev => Math.max(0, prev - 10));
  };

  const goToNextWord = () => {
    if (currentIndex < liste.length - 1) setCurrentIndex(currentIndex + 1);
    else {
      setListe([...vokabelnOriginal].sort(() => Math.random() - 0.5));
      setCurrentIndex(0);
    }
    setInput(""); setFeedback(""); setShowHint(false);
  };

  const vintageTheme = { bg: "#f4f1ea", paper: "#fffcf5", ink: "#4a3f35", accent: "#8c7e6d" };

  if (liste.length === 0) return null;

  return (
    <div style={{ minHeight: "100vh", backgroundColor: vintageTheme.bg, padding: "20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <style>{`
        .game-layout { display: flex; flex-direction: row; align-items: flex-end; gap: 20px; max-width: 900px; width: 100%; position: relative; }
        .book-container { flex: 1; background: ${vintageTheme.paper}; border: 1px solid #d4cbb3; padding: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); min-height: 500px; z-index: 5; }
        .hermes-box { width: 250px; display: flex; flex-direction: column; align-items: center; }
        .bubble { background: white; border: 2px solid ${vintageTheme.ink}; border-radius: 15px; padding: 15px; margin-bottom: 10px; font-size: 0.9rem; position: relative; }
        .bubble::after { content: ''; position: absolute; bottom: -12px; right: 30px; border-width: 12px 12px 0 0; border-style: solid; border-color: ${vintageTheme.ink} transparent transparent transparent; }
        @media (max-width: 850px) { .game-layout { flex-direction: column-reverse; align-items: center; } .hermes-box { width: 100%; max-width: 400px; } }
      `}</style>

      {!isBookOpen ? (
        <div onClick={() => setIsBookOpen(true)} style={{ width: "280px", height: "400px", background: "#5d3a1a", borderRadius: "5px 20px 20px 5px", cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center", borderLeft: "10px solid #3e2711", boxShadow: "15px 15px 40px rgba(0,0,0,0.4)" }}>
          <div style={{ border: "2px solid #c5a059", padding: "20px", textAlign: "center", color: "#c5a059" }}>
            <h1 style={{ fontSize: "1.2rem", margin: 0 }}>ЛЕБЕДИНЫЙ СЛОВАРЬ 🦢</h1>
            <p style={{ fontSize: "0.8rem" }}>Нажми, чтобы открыть</p>
          </div>
        </div>
      ) : (
        <div className="game-layout">
          <div className="book-container">
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
               <button onClick={() => setMode("write")} style={{ background: mode === "write" ? vintageTheme.ink : "transparent", color: mode === "write" ? "#fff" : vintageTheme.ink, border: `1px solid ${vintageTheme.ink}`, padding: "5px 15px", cursor: "pointer", borderRadius: "20px" }}>Писать</button>
               <button onClick={() => setMode("choice")} style={{ background: mode === "choice" ? vintageTheme.ink : "transparent", color: mode === "choice" ? "#fff" : vintageTheme.ink, border: `1px solid ${vintageTheme.ink}`, padding: "5px 15px", cursor: "pointer", borderRadius: "20px" }}>Выбор</button>
            </div>
            <div style={{ marginBottom: "20px", borderBottom: "1px solid #d4cbb3", paddingBottom: "10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span style={{ fontSize: "1rem", fontWeight: "bold" }}>Уровень {currentLevel}</span>
                <span style={{ fontSize: "0.8rem", color: vintageTheme.accent }}>{currentTitle}</span>
              </div>
              <div style={{ width: "100%", height: "6px", background: "#e8e4d9", borderRadius: "3px", marginTop: "5px" }}>
                <div style={{ width: `${xp % 100}%`, height: "100%", background: vintageTheme.accent, borderRadius: "3px", transition: "width 0.5s" }}></div>
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <h2 style={{ fontSize: "2.5rem", margin: "10px 0", color: vintageTheme.ink }}>{currentWord.word}</h2>
              <div style={{ minHeight: "40px", marginBottom: "20px" }}>
                {showHint ? <p style={{ fontStyle: "italic", color: "#666" }}>{currentWord.hint}</p> : <button onClick={() => setShowHint(true)} style={{ background: "none", border: "1px dashed #ccc", cursor: "pointer", padding: "5px 10px", color: vintageTheme.accent }}>Подсказка? 💡</button>}
              </div>
              {mode === "write" ? (
                <input autoFocus value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && input.trim() && (currentWord.translation.toLowerCase().includes(input.toLowerCase().trim()) ? handleCorrect() : handleWrong())} style={{ width: "100%", maxWidth: "350px", padding: "12px", border: "none", borderBottom: `2px solid ${vintageTheme.ink}`, background: "transparent", fontSize: "1.4rem", textAlign: "center", outline: "none" }} placeholder="Пиши здесь..." />
              ) : (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px", maxWidth: "500px", margin: "0 auto" }}>
                  {options.map((opt, i) => <button key={`${currentIndex}-${i}`} onClick={() => opt === currentWord.translation ? handleCorrect() : handleWrong()} style={{ background: "#fff", border: `1px solid ${vintageTheme.ink}`, padding: "15px", cursor: "pointer", borderRadius: "8px", fontSize: "1rem" }}>{opt}</button>)}
                </div>
              )}
              <p style={{ minHeight: "24px", marginTop: "20px", fontWeight: "bold", color: feedback.includes("Достойна") ? "#2e7d32" : "#c62828" }}>{feedback}</p>
            </div>
          </div>
          <div className="hermes-box">
            <div className="bubble"><b>Гермес:</b><br/>{hermesTalk}</div>
            <img src={hermesUrl} alt="Hermes" style={{ width: "180px", height: "auto", transform: "scaleX(-1)" }} />
          </div>
        </div>
      )}
    </div>
  );
}