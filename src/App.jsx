import React, { useState, useEffect, useMemo } from 'react';

const vokabelnOriginal = [
  { "word": "mächtig", "translation": "сильный / властный / могучий", "hint": "Rhysand ist sehr mächtig." },
  { "word": "warten", "translation": "ждать", "hint": "Du wartest auf mich in August." },
  { "word": "retten", "translation": "спасать", "hint": "Menschen retten, Dinge jagen, the family business." },
  { "word": "Angst", "translation": "страх", "hint": "Du hast Angst vor Schlangen🐍." },
  { "word": "Entscheidung", "translation": "решение", "hint": "Elenas Entscheidung zwischen Stefan und Damon." },
  { "word": "deshalb", "translation": "поэтому", "hint": "Warum machst du das?! Deshalb!" },
  { "word": "übel", "translation": "плохо / тошно", "hint": "Если выпьешь слишком много соленой воды, тебе станет...?" },
  { "word": "einfach", "translation": "просто", "hint": "Есть schwer, а есть...?" },
  { "word": "klingen", "translation": "звучать", "hint": "Die Musik klingt sehr schön." },
  { "word": "offensichtlich", "translation": "очевидно", "hint": "Es ist offentsichtlich, dass wir heiraten werden😏." },
  { "word": "Fest", "translation": "праздник / бал", "hint": "Der 09.05. ist ein großes Fest in Russland." },
  { "word": "Festung", "translation": "крепость", "hint": "Basgiath ist eine große Festung." },
  { "word": "Atem", "translation": "дыхание", "hint": "Rikki, Cleo und Emma können unter Wasser atmen." },
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
  { "word": "ruhig", "translation": "спокойно", "hint": "Ich bin ruhig und chill 😊." },
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
  { "word": "überall", "translation": "везде", "hint": "Hannahs Freunde und Jake suchen Hannah überall." },
  { "word": "Wache", "translation": "стража / страж", "hint": "Die bewaffnete Wache steht regungslos." },
  { "word": "gehören", "translation": "принадлежать", "hint": "Sofia gehört jetzt Nicolo." },
  { "word": "holen", "translation": "взять / принести", "hint": "Du hast Persik für 4 Tage geholt." },
  { "word": "beschlossen", "translation": "решил / постановил / решено", "hint": "Sie hat beschlossen, für ihre Freiheit zu kämpfen." },
  { "word": "anscheinend", "translation": "видимо / кажется", "hint": "Вельзевул Бредовред, видимо, снова перепутал planen и устроил хаос там, где обещал порядок." },
  { "word": "unbeschwert", "translation": "беззаботный", "hint": "Meine Kindheit war schön und unbeschwert." },
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
  { "word": "ungewöhnlich", "translation": "необычно", "hint": "Aziraphale und Crowley sind ein ungewöhnliches Paar 🤨" },
  { "word": "zwischen", "translation": "между", "hint": "Zwischen Moskau und Berlin liegt Minsk." },
  { "word": "Drohung", "translation": "угроза", "hint": "„Если ты решишь меня подставить, я вырву твоё сердце и засуну тебе в глотку.“ - как такое называется?" },
  { "word": "Anruf", "translation": "звонок", "hint": " „Do you like scary movies?“ 📱👻" },
  { "word": "etwas", "translation": "что-то / немного", "hint": "Etwas hier, etwas da 🤏" },
  { "word": "sanft", "translation": "нежный / мягкий", "hint": "Есть hart, а есть...?" },
  { "word": "fügsam", "translation": "покорный / послушный", "hint": "Sofia muss fügsam sein." },
  { "word": "wollen", "translation": "хотеть", "hint": "Ich will dich heiraten." },
  { "word": "schlagen", "translation": "бить / ударять", "hint": "Im Boxen schlägt man andere." },
  { "word": "leise", "translation": "тихо", "hint": "In der Bibliothek muss man leise sein 🤫" },
  { "word": "durcheinanderrennen", "translation": "бегать вперемешку / суетиться", "hint": "🏃🏃🏃😵‍💫😵‍💫😵‍💫" },
  { "word": "Erfolg", "translation": "успех", "hint": "Erfolg im Sport haben 🏅🏆" },
  { "word": "bestrafen", "translation": "наказывать / карать", "hint": "Verbrechen und Strafe von Fyodor Dostoyevsky." },
  { "word": "Nachtisch", "translation": "десерт / сладкое", "hint": "Marzipan ist ein guter Nachtisch 😋" },
  { "word": "klar", "translation": "ясный / понятный / конечно", "hint": "Alles klar, kein Problem!" },
  { "word": "verbergen", "translation": "скрывать / прятать", "hint": "Synonym verstecken 🙈" },
  { "word": "höflich", "translation": "вежливый", "hint": "Aristokraten müssen höflich sein." },
  { "word": "jung", "translation": "молодой", "hint": "Lika ist die Jüngste in der Familie." },
  { "word": "natürlich", "translation": "конечно / естественно", "hint": "Kannst du mir helfen? Natürlich!" },
  { "word": "bleiben", "translation": "оставаться", "hint": "Wir bleiben in Russland für 1 Jahr, danach gehen wir nach Deutschland." },
  { "word": "gegen", "translation": "против", "hint": "Power Rangers gegen Lord Zedd 👊" },
  { "word": "böse", "translation": "злой / плохой / шестокий", "hint": "Kai Parker ist vielleicht böse, aber heiß 😉" }
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
  const [hermesTalk, setHermesTalk] = useState("Приветик! Готова попотеть?");

  const atlasUrl = ""; 
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
  const currentLevel = Math.min(Math.floor(xp / xpPerLevel) + 1, 20);
  const xpInLevel = xp % xpPerLevel;

  const getHermesSass = (level) => {
    if (level <= 1) return "О, смертная пытается читать... Мило.";
    if (level === 3) return "Вестница Гермеса? Ну, посмотрим, не перепутаешь ли ты письма.";
    if (level === 9) return "Героиня Олимпа? Не задирай нос, сандалии натри!";
    if (level === 14) return "Мудрость Афины? Надеюсь, это не только из-за очков.";
    if (level === 19) return "Богиня Слов! Ладно, признаю, ты почти так же хороша, как я.";
    return "Продолжай, я наблюдаю. Пока не впечатлена, но... продолжай.";
  };

  useEffect(() => {
    setHermesTalk(getHermesSass(currentLevel));
  }, [currentLevel]);

  const toRoman = (num) => {
    const map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    return Object.entries(map).reduce((acc, [letter, value]) => {
      while (num >= value) { acc += letter; num -= value; }
      return acc;
    }, "");
  };

  useEffect(() => {
    const lastXpString = localStorage.getItem('lebedi_xp_old');
    const lastXp = lastXpString ? parseInt(lastXpString) : xp;
    const lastLevel = Math.floor(lastXp / xpPerLevel) + 1;
    if (currentLevel > lastLevel) {
      setShowLevelAnim(true);
      setTimeout(() => setShowLevelAnim(false), 3000);
    }
    localStorage.setItem('lebedi_xp_old', xp.toString());
    localStorage.setItem('lebedi_xp', xp.toString());
    localStorage.setItem('lebedi_fehler', JSON.stringify(fehlerListe));
  }, [currentLevel, xp, fehlerListe]);

  useEffect(() => {
    setListe([...vokabelnOriginal].sort(() => Math.random() - 0.5));
  }, []);

  const getTitle = () => {
    const titles = ["Смертная 🌱", "Лесная Нимфа 🍃", "Вестница Гермеса 🪽", "Воительница Спарты 🛡️", "Пифия Аполлона ☀️", "Дочь Посейдона 🌊", "Охотница Артемиды 🏹", "Пламя Гестии 🔥", "Героиня Олимпа 🏛️", "Менада Диониса 🍷", "Ярость Эринии ⚔️", "Мастерица Гефеста ⚒️", "Красота Афродиты 🕊️", "Мудрость Афины 🦉", "Титанида знаний 🌍", "Наперсница Геры 🦚", "Молния Персефоны ⚡", "Пряха Мойр 🎡", "Богиня Слов 👑"];
    return titles[currentLevel - 1] || titles[titles.length - 1];
  };

  const currentWord = liste[currentIndex];

  const options = useMemo(() => {
    if (!currentWord || mode !== "choice") return [];
    const correct = currentWord.translation;
    const andere = vokabelnOriginal.filter(v => v.word !== currentWord.word).map(v => v.translation).sort(() => Math.random() - 0.5).slice(0, 3);
    return [correct, ...andere].sort(() => Math.random() - 0.5);
  }, [currentWord, mode]);

  const goToNextWord = () => {
    if (currentIndex < liste.length - 1) setCurrentIndex(currentIndex + 1);
    else {
      setListe([...vokabelnOriginal].sort(() => Math.random() - 0.5));
      setCurrentIndex(0);
    }
    setInput(""); setFeedback(""); setShowHint(false);
  };

  const handleCorrect = () => {
    const sass = ["Неплохо для человека.", "Зевс бы гордился. Наверное.", "Ой, кто-то сегодня выпил амброзии?", "Прямо в яблочко! Золотое, конечно.", "Ты меня пугаешь своей скоростью!"];
    setHermesTalk(sass[Math.floor(Math.random() * sass.length)]);
    setFeedback("Достойна богов! +10 XP 🌿");
    setXp(prev => prev + 10);
    setTimeout(goToNextWord, 1200);
  };

  const handleWrong = () => {
    const sass = ["Мои сандалии соображают быстрее.", "Может, тебе стоит попросить помощи у Афродиты? Мозги — это не твоё.", "Минус десять очков Гриффиндору... Ой, не та сказка. Минус XP!", "Даже минотавр в лабиринте не так сильно тупил.", "Серьезно? Это было позорище."];
    setHermesTalk(sass[Math.floor(Math.random() * sass.length)]);
    setFeedback("Гнев Зевса! -10 XP ⚡");
    setXp(prev => Math.max(0, prev - 10));
    setFehlerListe(prev => !prev.find(f => f.word === currentWord.word) ? [currentWord, ...prev] : prev);
  };

  const vintageTheme = {
    bg: "#f4f1ea", paper: "#fffcf5", ink: "#4a3f35", accent: "#8c7e6d", serif: "'Georgia', 'Times New Roman', serif"
  };

  if (liste.length === 0) return null;

  return (
    <div style={{ minHeight: "100vh", backgroundColor: vintageTheme.bg, display: "flex", justifyContent: "center", alignItems: "center", fontFamily: vintageTheme.serif, padding: "60px 20px" }}>
      <style>{`
        @keyframes global-particle { 0% { transform: translate(0, 0) scale(1); opacity: 1; } 100% { transform: translate(var(--tw), var(--th)) scale(0); opacity: 0; } }
        .emoji-particle { position: fixed; left: 50%; top: 50%; pointer-events: none; z-index: 9999; animation: global-particle 3s forwards; }
        .speech-bubble {
          position: absolute;
          top: -160px;
          right: 30px;
          background: #fff;
          border: 2px solid #4a3f35;
          border-radius: 15px;
          padding: 10px 15px;
          width: 200px;
          font-size: 0.85rem;
          line-height: 1.2;
          color: #4a3f35;
          box-shadow: 4px 4px 0px rgba(74, 63, 53, 0.1);
          z-index: 20;
        }
        .speech-bubble::after {
          content: '';
          position: absolute;
          bottom: -10px;
          right: 30px;
          border-width: 10px 10px 0 0;
          border-style: solid;
          border-color: #4a3f35 transparent;
          display: block; width: 0;
        }
      `}</style>

      {showLevelAnim && (
        <>{[...Array(40)].map((_, i) => {
          const emojis = ["🌿", "📜", "✨", "🏛️"];
          const angle = (i / 40) * Math.PI * 2;
          return <div key={i} className="emoji-particle" style={{ "--tw": `${Math.cos(angle) * 300}px`, "--th": `${Math.sin(angle) * 300}px` }}>{emojis[i % 4]}</div>
        })}</>
      )}

      {!isBookOpen ? (
        <div onClick={() => setIsBookOpen(true)} style={{ width: "300px", height: "450px", background: "#5d3a1a", borderRadius: "5px 20px 20px 5px", cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center", borderLeft: "10px solid #3e2711", boxShadow: "15px 15px 40px rgba(0,0,0,0.4)" }}>
          <div style={{ border: "2px solid #c5a059", padding: "20px", textAlign: "center", color: "#c5a059" }}>
            <h1 style={{ fontSize: "1.5rem" }}>ЛЕБЕДИНЫЙ СЛОВАРЬ 🦢</h1>
            <p>Нажми, чтобы открыть</p>
          </div>
        </div>
      ) : (
        <div style={{ position: "relative", width: "100%", maxWidth: "600px" }}>
          
          {/* HERMES - Präzise an der oberen rechten Ecke lehnen */}
          <div style={{ position: "absolute", top: "-177px", right: "-140px", width: "450px", height: "450px", zIndex: 10, pointerEvents: "none", display: "flex", justifyContent: "flex-end", alignItems: "flex-end" }}>
            <div className="speech-bubble"><b>Hermes:</b><br/>{hermesTalk}</div>
            <img src={hermesUrl} alt="Hermes" style={{ width: "100%", height: "auto", objectFit: "contain", transform: "rotate(-5deg)", filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.1))" }} />
          </div>

          {/* ATLAS - Unten Links stemmt er das Buch */}
          <div style={{ position: "absolute", bottom: "-60px", left: "-50px", width: "180px", height: "180px", zIndex: 10, pointerEvents: "none" }}>
             {atlasUrl && <img src={atlasUrl} alt="Atlas" style={{ width: "100%", height: "100%", objectFit: "contain" }} />}
          </div>

          {/* DAS BUCH (ZENTRALES RECHTECK) */}
          <div style={{ position: "relative", background: vintageTheme.paper, minHeight: "600px", border: "1px solid #d4cbb3", padding: "40px 30px", boxShadow: "0 10px 30px rgba(0,0,0,0.15)", zIndex: 5 }}>
            
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
               <button onClick={() => setMode("write")} style={{ background: mode === "write" ? vintageTheme.ink : "transparent", color: mode === "write" ? "#fff" : vintageTheme.ink, border: `1px solid ${vintageTheme.ink}`, padding: "5px 15px", cursor: "pointer", borderRadius: "20px" }}>Писать ✍️</button>
               <button onClick={() => setMode("choice")} style={{ background: mode === "choice" ? vintageTheme.ink : "transparent", color: mode === "choice" ? "#fff" : vintageTheme.ink, border: `1px solid ${vintageTheme.ink}`, padding: "5px 15px", cursor: "pointer", borderRadius: "20px" }}>Выбор 🎲</button>
            </div>

            <div style={{ marginBottom: "30px", borderBottom: "1px solid #d4cbb3", paddingBottom: "15px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span style={{ fontSize: "1.1rem", fontWeight: "bold" }}>Уровень {toRoman(currentLevel)}</span>
                <span style={{ fontSize: "0.9rem", color: vintageTheme.accent, fontStyle: "italic" }}>{getTitle()}</span>
              </div>
              <div style={{ width: "100%", height: "8px", background: "#e8e4d9", borderRadius: "4px", marginTop: "8px" }}>
                <div style={{ width: `${xpInLevel}%`, height: "100%", background: vintageTheme.accent, borderRadius: "4px", transition: "width 0.5s" }}></div>
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <h2 style={{ fontSize: "2.8rem", margin: "10px 0", color: vintageTheme.ink }}>{currentWord.word}</h2>
              <div style={{ minHeight: "60px", margin: "10px 0" }}>
                {showHint ? <p style={{ fontStyle: "italic", opacity: 0.8 }}>{currentWord.hint}</p> : <button onClick={() => setShowHint(true)} style={{ background: "none", border: "1px dashed #ccc", cursor: "pointer", padding: "5px 10px" }}>Озарение 💡</button>}
              </div>

              {mode === "write" ? (
                <div>
                  <input placeholder="Переведи..." value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && (input.toLowerCase().trim() === "" ? null : (currentWord.translation.toLowerCase().split('/').map(s => s.trim()).some(t => t === input.toLowerCase().trim()) ? handleCorrect() : handleWrong()))} style={{ width: "80%", padding: "10px", border: "none", borderBottom: `1px solid ${vintageTheme.ink}`, background: "transparent", fontSize: "1.3rem", textAlign: "center", outline: "none" }} />
                  <div style={{ marginTop: "20px" }}>
                    <button onClick={() => (currentWord.translation.toLowerCase().split('/').map(s => s.trim()).some(t => t === input.toLowerCase().trim()) ? handleCorrect() : handleWrong())} style={{ background: vintageTheme.ink, color: "#fff", border: "none", padding: "10px 20px", cursor: "pointer", marginRight: "10px" }}>Проверить</button>
                    <button onClick={goToNextWord} style={{ background: "none", border: "1px solid", padding: "10px 15px", cursor: "pointer" }}>➜</button>
                  </div>
                </div>
              ) : (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "20px" }}>
                  {options.map((opt, i) => <button key={i} onClick={() => opt === currentWord.translation ? handleCorrect() : handleWrong()} style={{ background: "#fff", border: `1px solid ${vintageTheme.ink}`, padding: "12px", cursor: "pointer", fontSize: "0.9rem" }}>{opt}</button>)}
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
              <span>Стр. {currentIndex + 1} / {liste.length}</span>
              <span onClick={() => window.confirm("Стереть прогресс?") && (localStorage.clear() || window.location.reload())} style={{ cursor: "pointer", textDecoration: "underline" }}>Сжечь дневник</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}