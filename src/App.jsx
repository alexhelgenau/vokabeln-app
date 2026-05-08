import React, { useState, useEffect } from 'react';

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
    localStorage.setItem('lebedi_fehler', JSON.stringify(fehlerListe));
  }, [xp, fehlerListe]);

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
  };

  const checkAnswer = () => {
    const userBeant = input.toLowerCase().trim();
    const loesungsTeile = currentWord.translation.toLowerCase().split('/').map(s => s.trim());

    if (loesungsTeile.some(t => t === userBeant) && userBeant !== "") {
      setFeedback("Достойна богов! +10 XP 🌿");
      setXp(prev => prev + 10);
      setTimeout(goToNextWord, 1200);
    } else {
      setFeedback("Гнев Зевса! -10 XP ⚡");
      setXp(prev => Math.max(0, prev - 10));
      setFehlerListe(prev => {
        if (!prev.find(f => f.word === currentWord.word)) {
          return [currentWord, ...prev];
        }
        return prev;
      });
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
      minHeight: "100vh", 
      backgroundColor: vintageTheme.bg, 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center",
      fontFamily: vintageTheme.serif,
      perspective: "1500px",
      overflow: "hidden"
    }}>
      
      <style>{`
        .book-container {
          position: relative;
          width: 350px;
          height: 500px;
          transform-style: preserve-3d;
          transition: transform 1.2s cubic-bezier(0.4, 0, 0.2, 1);
          transform: ${isBookOpen ? 'translateX(50%)' : 'translateX(0)'};
        }

        .book-cover {
          position: absolute;
          width: 100%;
          height: 100%;
          background: #5d3a1a;
          border-radius: 5px 15px 15px 5px;
          box-shadow: 15px 15px 40px rgba(0,0,0,0.4);
          z-index: 10;
          transform-origin: left;
          transition: transform 1.2s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          backface-visibility: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          border-left: 10px solid #3e2711;
          transform: ${isBookOpen ? 'rotateY(-160deg)' : 'rotateY(0deg)'};
        }

        .inner-page {
          position: absolute;
          width: 100%;
          height: 100%;
          background: ${vintageTheme.paper};
          padding: 30px;
          box-sizing: border-box;
          z-index: 1;
          box-shadow: inset 5px 0 20px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          color: ${vintageTheme.ink};
          border-radius: 2px 10px 10px 2px;
          border: 1px solid #d4cbb3;
        }

        @keyframes global-particle {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 1; }
          100% { transform: translate(var(--tw), var(--th)) scale(0) rotate(360deg); opacity: 0; }
        }
        .emoji-particle { position: fixed; left: 50%; top: 50%; pointer-events: none; z-index: 9999; animation: global-particle 3s forwards; }
      `}</style>

      {showLevelAnim && (
        <>
          {[...Array(40)].map((_, i) => {
            const emojis = ["🌿", "📜", "✨"];
            const angle = (i / 40) * Math.PI * 2;
            const dist = 300 + Math.random() * 300; 
            return (
              <div key={i} className="emoji-particle" style={{
                "--tw": `${Math.cos(angle) * dist}px`,
                "--th": `${Math.sin(angle) * dist}px`,
                fontSize: "1.5rem"
              }}>{emojis[i % emojis.length]}</div>
            );
          })}
        </>
      )}

      <div className="book-container">
        {/* COVER */}
        <div className="book-cover" onClick={() => setIsBookOpen(true)}>
          <div style={{ border: "2px solid #c5a059", padding: "20px", textAlign: "center", width: "70%" }}>
            <h1 style={{ color: "#c5a059", fontSize: "1.4rem", margin: 0, textTransform: "uppercase" }}>
              Лебединый словарь 🦢
            </h1>
            <p style={{ color: "#c5a059", fontSize: "0.7rem", fontStyle: "italic", marginTop: "15px" }}>Нажми, чтобы открыть</p>
          </div>
        </div>

        {/* INHALT (SEITE) */}
        <div className="inner-page">
          <div style={{ marginBottom: "20px", borderBottom: "1px solid #d4cbb3", paddingBottom: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem" }}>
              <span style={{ fontWeight: "bold" }}>Level {currentLevel}</span>
              <span style={{ fontStyle: "italic", color: vintageTheme.accent }}>{getTitle()}</span>
            </div>
            <div style={{ width: "100%", height: "4px", background: "#e8e4d9", marginTop: "5px" }}>
              <div style={{ width: `${xpInLevel}%`, height: "100%", background: vintageTheme.accent, transition: "width 0.5s" }}></div>
            </div>
          </div>

          <div style={{ textAlign: "center", flex: 1 }}>
            <p style={{ color: vintageTheme.accent, fontSize: "0.8rem" }}>Wie heißt...</p>
            <h2 style={{ fontSize: "2.2rem", margin: "10px 0" }}>{currentWord.word}</h2>
            
            <div style={{ minHeight: "60px", marginBottom: "10px" }}>
              {showHint ? (
                <p style={{ fontSize: "0.85rem", fontStyle: "italic", background: "rgba(0,0,0,0.03)", padding: "8px" }}>{currentWord.hint}</p>
              ) : (
                <button onClick={() => setShowHint(true)} style={{ background: "none", border: "1px dashed #b5a48b", color: "#b5a48b", cursor: "pointer", fontSize: "0.7rem", padding: "4px 10px" }}>
                  Озарение?
                </button>
              )}
            </div>

            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && checkAnswer()}
              placeholder="Переведи..."
              style={{ width: "90%", background: "transparent", border: "none", borderBottom: `1px solid ${vintageTheme.ink}`, textAlign: "center", fontSize: "1.2rem", outline: "none", marginBottom: "20px", fontFamily: vintageTheme.serif }}
            />

            <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
              <button onClick={checkAnswer} style={{ background: vintageTheme.ink, color: "white", border: "none", padding: "10px 20px", cursor: "pointer", textTransform: "uppercase", fontSize: "0.8rem" }}>Проверить</button>
              <button onClick={goToNextWord} style={{ background: "none", border: `1px solid ${vintageTheme.ink}`, cursor: "pointer", padding: "0 15px" }}>➜</button>
            </div>

            <p style={{ marginTop: "15px", fontSize: "0.9rem", fontWeight: "bold", color: feedback.includes("Достойна") ? "#5c7a5c" : "#a35c5c" }}>{feedback}</p>
          </div>

          {/* FEHLER & FOOTER */}
          <div style={{ fontSize: "0.7rem" }}>
            {fehlerListe.length > 0 && (
              <details style={{ marginBottom: "10px" }}>
                <summary style={{ cursor: "pointer", color: vintageTheme.accent }}>📜 Ошибки ({fehlerListe.length})</summary>
                <div style={{ maxHeight: "80px", overflowY: "auto", padding: "5px" }}>
                  {fehlerListe.slice(0, 5).map((f, i) => <div key={i}>{f.word}: {f.translation}</div>)}
                </div>
              </details>
            )}
            <div style={{ display: "flex", justifyContent: "space-between", opacity: 0.6 }}>
              <span>{currentIndex + 1} / {liste.length}</span>
              <span onClick={() => { if(window.confirm("Стереть прогресс?")) { localStorage.clear(); window.location.reload(); } }} style={{ cursor: "pointer", textDecoration: "underline" }}>Сжечь дневник</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}