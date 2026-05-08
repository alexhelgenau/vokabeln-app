import React, { useState, useEffect, useRef } from 'react';

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
  { "word": "anscheinend", "translation": "видимо / кажется", "hint": "Вельзевул Бредовред, видимо, снова перепутал планы и устроил хаос там, где обещал порядок." },
  { "word": "unbeschwert", "translation": "беззаботный", "hint": "Meine Kindheit war schön und unbeschwert." },
  { "word": "noch", "translation": "еще", "hint": "Ich bin NOCH nicht in Moskau, aber im August." },
  { "word": "langweilig", "translation": "скучно", "hint": "Сериал Тьма был langweilig 🥱" },
  { "word": "nur", "translation": "только", "hint": "Du gehörst mir, Violet. NUR wenn du mir gehörst." },
  { "word": "beobachten", "translation": "наблюдать", "hint": "Niccolo beobachtet Sofia, seit sie ein kein Kind war." },
  { "word": "riesig", "translation": "огромный", "hint": "Der Riese Gargantua ist riesig!." },
  { "word": "schenken", "translation": "дарить", "hint": "Was hast du Anya zum Geburstag gesченкт?" },
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
  const inputRef = useRef(null);

  const [xp, setXp] = useState(() => {
    const saved = localStorage.getItem('lebedi_xp');
    return saved ? parseInt(saved) : 0;
  });

  const xpPerLevel = 100;
  const currentLevel = Math.min(Math.floor(xp / xpPerLevel) + 1, 20);
  const xpInLevel = xp % xpPerLevel;

  useEffect(() => {
    const lastXpString = localStorage.getItem('lebedi_xp_old');
    const lastXp = lastXpString ? parseInt(lastXpString) : xp;
    const lastLevel = Math.floor(lastXp / xpPerLevel) + 1;
    
    if (currentLevel > lastLevel) {
      setShowLevelAnim(true);
      setTimeout(() => setShowLevelAnim(false), 3000);
    }
    localStorage.setItem('lebedi_xp_old', xp.toString());
  }, [currentLevel, xp]);

  useEffect(() => {
    localStorage.setItem('lebedi_xp', xp.toString());
  }, [xp]);

  useEffect(() => {
    const gemischt = [...vokabelnOriginal].sort(() => Math.random() - 0.5);
    setListe(gemischt);
  }, []);

  if (liste.length === 0) return null;

  const getTitle = () => {
    const titles = [
      "Смертная 🌱", "Лесная Нимфа 🍃", "Вестница Гермеса 🪽", "Воительница Спарты 🛡️", 
      "Пифия Аполлона ☀️", "Дочь Посейдона 🌊", "Охотница Артемиды 🏹", "Пламя Гестии 🔥",
      "Героиня Олимпа 🏛️", "Менада Диониса 🍷", "Ярость Эринии ⚔️", "Мастерица Гефеста ⚒️",
      "Красота Афродиты 🕊️", "Мудрость Афины 🦉", "Титанида знаний 🌍", "Наперсница Геры 🦚",
      "Молния Персефоны ⚡", "Пряха Мойр 🎡", "Богиня Слов 👑"
    ];
    return titles[currentLevel - 1] || titles[titles.length - 1];
  };

  const currentWord = liste[currentIndex];

  const goToNextWord = () => {
    if (currentIndex < liste.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      const neuGemischt = [...vokabelnOriginal].sort(() => Math.random() - 0.5);
      setListe(neuGemischt);
      setCurrentIndex(0);
    }
    setInput("");
    setFeedback("");
    setShowHint(false);
    // Autofokus nach dem Wechsel
    setTimeout(() => inputRef.current?.focus(), 10);
  };

  const checkAnswer = () => {
    const userBeant = input.toLowerCase().trim();
    if (!userBeant) return;

    const loesung = currentWord.translation.toLowerCase().trim();
    const loesungsTeile = loesung.split('/').map(s => s.trim());

    if (loesungsTeile.some(t => t === userBeant)) {
      setFeedback("Достойна богов! +10 XP 🌿");
      setXp(prev => prev + 10);
      setTimeout(goToNextWord, 1000);
    } else {
      setFeedback("Гнев Зевса! -10 XP ⚡");
      setXp(prev => Math.max(0, prev - 10));
      // Wir lassen den Input stehen, damit der User ihn korrigieren kann.
      inputRef.current?.focus();
    }
  };

  const vintageTheme = {
    bg: "#f4f1ea",
    paper: "#fffcf5",
    ink: "#4a3f35",
    accent: "#8c7e6d",
    leafColor: "rgba(139, 157, 131, 0.15)",
    serif: "'Georgia', 'Times New Roman', serif"
  };

  return (
    <div style={{ 
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh", 
      backgroundColor: vintageTheme.bg, 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center",
      fontFamily: vintageTheme.serif,
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 20c0 10-10 20-10 20s10 0 20-10 0-20 0-20zM70 60c0 10-10 20-10 20s10 0 20-10 0-20 0-20z' fill='${vintageTheme.leafColor}' /%3E%3C/svg%3E")`,
      overflow: "hidden"
    }}>
      
      <style>{`
        @keyframes global-particle {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 1; }
          100% { transform: translate(var(--tw), var(--th)) scale(0) rotate(360deg); opacity: 0; }
        }
        .emoji-particle { position: fixed; left: 50%; top: 50%; pointer-events: none; z-index: 9999; animation: global-particle 3s cubic-bezier(0.1, 0.8, 0.3, 1) forwards; }
        input::placeholder { color: #b5a48b; font-style: italic; opacity: 0.5; }
      `}</style>

      {showLevelAnim && (
        <>
          {[...Array(60)].map((_, i) => {
            const emojis = ["🌿", "📜", "🕊️", "🏛️", "✨"];
            const angle = (i / 60) * Math.PI * 2;
            const dist = 200 + Math.random() * 600; 
            return (
              <div key={i} className="emoji-particle" style={{
                "--tw": `${Math.cos(angle) * dist}px`,
                "--th": `${Math.sin(angle) * dist}px`,
                fontSize: "2rem"
              }}>{emojis[i % emojis.length]}</div>
            );
          })}
        </>
      )}

      {!isBookOpen ? (
        <div 
          onClick={() => setIsBookOpen(true)}
          style={{
            width: "500px", height: "750px", background: "#5d3a1a", borderRadius: "5px 40px 40px 5px",
            boxShadow: "40px 40px 80px rgba(0,0,0,0.6), inset 15px 0 25px rgba(0,0,0,0.6)",
            cursor: "pointer", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
            borderLeft: "25px solid #3e2711", transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: "perspective(1500px) rotateY(-10deg)",
          }}
        >
          <div style={{ border: "5px double #c5a059", padding: "50px", textAlign: "center", height: "80%", width: "70%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h1 style={{ color: "#c5a059", fontSize: "3.5rem", margin: 0, textTransform: "uppercase", letterSpacing: "6px" }}>Лебединый словарь 🦢</h1>
            <div style={{ height: "5px", background: "#c5a059", width: "120px", margin: "50px auto" }}></div>
            <p style={{ color: "#c5a059", fontSize: "1.5rem", fontStyle: "italic" }}>Нажми, чтобы открыть</p>
          </div>
        </div>
      ) : (
        <div style={{
          width: "90vw", height: "90vh", maxWidth: "1200px", background: vintageTheme.paper,
          borderRadius: "8px", boxShadow: "0 0 60px rgba(0,0,0,0.25), 20px 20px 0px #d1ccc0",
          border: "1px solid #d4cbb3", padding: "60px", position: "relative",
          backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.04) 0%, transparent 5%, transparent 95%, rgba(0,0,0,0.04) 100%)",
          display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box"
        }}>
          <div style={{ position: "absolute", top: 0, right: 0, width: "100px", height: "100px", background: `linear-gradient(225deg, ${vintageTheme.bg} 50%, #d4cbb3 50%)`, borderRadius: "0 0 0 10px" }}></div>

          {/* HEADER MIT RUSSISCH "УРОВЕНЬ" */}
          <div style={{ borderBottom: "4px solid #d4cbb3", paddingBottom: "30px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "20px" }}>
              <span style={{ fontSize: "2.5rem", fontWeight: "bold", color: vintageTheme.ink }}>Уровень {currentLevel}</span>
              <span style={{ fontSize: "1.8rem", color: vintageTheme.accent, fontStyle: "italic" }}>{getTitle()}</span>
            </div>
            <div style={{ width: "100%", height: "20px", background: "#e8e4d9", borderRadius: "10px" }}>
              <div style={{ width: `${xpInLevel}%`, height: "100%", background: vintageTheme.accent, borderRadius: "10px", transition: "width 0.6s" }}></div>
            </div>
          </div>

          <div style={{ textAlign: "center", flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <p style={{ color: vintageTheme.accent, fontSize: "1.5rem", fontStyle: "italic" }}>Как перевести?...</p>
            <h2 style={{ fontSize: "7rem", margin: "10px 0", color: vintageTheme.ink, letterSpacing: "-3px" }}>{currentWord.word}</h2>
            
            <div style={{ minHeight: "150px", display: "flex", alignItems: "center", justifyContent: "center", margin: "20px 0", width: "100%" }}>
              {showHint ? (
                <p style={{ fontSize: "1.8rem", color: vintageTheme.ink, fontStyle: "italic", padding: "20px 40px", borderLeft: `8px solid ${vintageTheme.accent}`, background: "rgba(0,0,0,0.02)", maxWidth: "80%" }}>
                  {currentWord.hint}
                </p>
              ) : (
                <button onClick={() => setShowHint(true)} style={{ background: "none", border: "2px dashed #b5a48b", color: "#b5a48b", padding: "15px 40px", cursor: "pointer", fontSize: "1.3rem" }}>
                  Озарение 💡
                </button>
              )}
            </div>

            <input 
              ref={inputRef}
              autoFocus
              placeholder="Введите перевод..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && checkAnswer()}
              style={{ 
                width: "70%", padding: "20px", border: "none", borderBottom: `4px solid ${vintageTheme.ink}`, 
                background: "transparent", fontSize: "3.5rem", textAlign: "center", outline: "none",
                marginBottom: "40px", color: vintageTheme.ink, fontFamily: vintageTheme.serif
              }}
            />

            <div style={{ display: "flex", gap: "30px" }}>
              <button 
                onClick={checkAnswer} 
                style={{ background: vintageTheme.ink, color: "#fff", border: "none", padding: "25px 60px", cursor: "pointer", fontSize: "1.8rem", textTransform: "uppercase", letterSpacing: "4px" }}>
                Проверить
              </button>
              <button onClick={goToNextWord} style={{ background: "none", border: `3px solid ${vintageTheme.ink}`, color: vintageTheme.ink, padding: "25px 40px", cursor: "pointer", fontSize: "1.8rem" }}>
                ➜
              </button>
            </div>

            <p style={{ marginTop: "40px", fontSize: "2rem", minHeight: "1.5em", fontWeight: "bold", fontStyle: "italic", color: feedback.includes("Достойна") ? "#4e634e" : "#8a4d4d" }}>
              {feedback}
            </p>
          </div>

          <div style={{ borderTop: "2px solid #eee", paddingTop: "30px", display: "flex", justifyContent: "space-between", color: vintageTheme.accent, fontSize: "1.5rem" }}>
            <span>Стр. {currentIndex + 1} / {liste.length}</span>
            <span onClick={() => { if(window.confirm("Стереть прогресс?")) { localStorage.clear(); window.location.reload(); } }} style={{ cursor: "pointer", opacity: 0.5 }}>Сжечь дневник 🕯️</span>
          </div>
        </div>
      )}
    </div>
  );
}