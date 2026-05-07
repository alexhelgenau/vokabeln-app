import React, { useState, useEffect } from 'react';

// DEINE LISTE (70 Wörter)
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
  { "word": "Wache", "translation": "стража", "hint": "Die bewaffnete Wache steht regungslos." },
  { "word": "gehören", "translation": "принадлежать", "hint": "Sofia gehört jetzt Nicolo." },
  { "word": "holen", "translation": "взять / принести", "hint": "Du hast Persik für 4 Tage geholt." },
  { "word": "beschlossen", "translation": "решил / постановил", "hint": "Sie hat beschlossen, für ihre Freiheit zu kämpfen." },
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
  { "word": "zwischen", "translation": "между", "hint": "Zwischen Moskau und Berlin liegt Minsk." }
];

export default function App() {
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

  // Level-Berechnung
  const xpPerLevel = 100;
  const currentLevel = Math.min(Math.floor(xp / xpPerLevel) + 1, 20);
  const xpInLevel = xp % xpPerLevel;

  // Animation Trigger bei Level-Up
  useEffect(() => {
    const lastXp = parseInt(localStorage.getItem('lebedi_xp_old') || "0");
    const lastLevel = Math.floor(lastXp / xpPerLevel) + 1;
    
    if (currentLevel > lastLevel && lastLevel > 0) {
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
      "Смертная (Sterbliche) 🌱", "Тень Аида (Schatten des Hades) 🌑", "Лесная Нимфа (Waldnymphe) 🍃",
      "Вестница Гермеса (Botin des Hermes) 🪽", "Воительница Спарты (Kriegerin Spartas) 🛡️", "Пифия Аполлона (Pythia des Apollon) ☀️",
      "Дочь Посейдона (Tochter des Poseidon) 🌊", "Охотница Артемиды (Jägerin der Artemis) 🏹", "Пламя Гестии (Flamme der Hestia) 🔥",
      "Героиня Олимпа (Heldin des Olymps) 🏛️", "Менада Диониса (Maenade des Dionysos) 🍷", "Ярость Эринии (Zorn der Erynie) ⚔️",
      "Мастерица Гефеста (Meisterin des Hephaistos) ⚒️", "Красота Афродиты (Schönheit der Aphrodite) 🕊️", "Мудрость Афины (Weisheit der Athene) 🦉",
      "Титанида знаний (Titanin des Wissens) 🌍", "Наперсница Геры (Vertraute der Hera) 🦚", "Молния Персефоны (Blitz der Persephone) ⚡",
      "Пряха Мойр (Spinnerin der Moiren) 🎡", "Богиня Слов (Göttin der Worte) 👑"
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
    const loesung = currentWord.translation.toLowerCase().trim();
    const loesungsTeile = loesung.split('/').map(s => s.trim());

    if (loesungsTeile.some(t => t === userBeant) && userBeant !== "") {
      setFeedback("Достойна богов! +10 XP 🦢✨");
      setXp(prev => prev + 10);
      setTimeout(goToNextWord, 1200);
    } else {
      setFeedback("Гнев Зевса! -10 XP ❌");
      setXp(prev => Math.max(0, prev - 10));
      setFehlerListe(prev => {
        if (!prev.find(f => f.word === currentWord.word)) {
          return [currentWord, ...prev];
        }
        return prev;
      });
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: 'Segoe UI, sans-serif', maxWidth: 600, margin: "auto", textAlign: "center", minHeight: "100vh", color: "#333", position: "relative", overflow: "hidden" }}>
      
      {/* CSS für die Explosion */}
      <style>{`
        @keyframes particle {
          0% { transform: translate(0,0) scale(1); opacity: 1; }
          100% { transform: translate(var(--tw), var(--th)) scale(0); opacity: 0; }
        }
        .emoji-particle {
          position: absolute; left: 50%; top: 50%; pointer-events: none;
          animation: particle 1.5s ease-out forwards;
        }
      `}</style>

      {/* Explosions-Container */}
      {showLevelAnim && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1000, pointerEvents: "none" }}>
          {[...Array(30)].map((_, i) => {
            const emojis = ["⚡", "✨", "👑", "🦢", "🏛️", "🔥"];
            const angle = (i / 30) * Math.PI * 2;
            const dist = 100 + Math.random() * 300;
            return (
              <div key={i} className="emoji-particle" style={{
                "--tw": `${Math.cos(angle) * dist}px`,
                "--th": `${Math.sin(angle) * dist}px`,
                fontSize: "1.5rem"
              }}>
                {emojis[i % emojis.length]}
              </div>
            );
          })}
        </div>
      )}

      <h1 style={{ marginBottom: 20, fontSize: "2.4rem", fontWeight: "bold" }}>Лебединый словарь 🦢</h1>

      <div style={{ marginBottom: 40, background: "white", padding: "25px", borderRadius: "25px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", border: "2px solid #ffd700" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
          <span style={{ fontSize: "1.3rem", fontWeight: "bold" }}>Уровень {currentLevel}</span>
          <span style={{ fontSize: "0.95rem", color: "#daa520", fontWeight: "bold", background: "#fffdf0", padding: "5px 12px", borderRadius: "10px" }}>{getTitle()}</span>
        </div>
        <div style={{ width: "100%", height: "24px", background: "#eee", borderRadius: "12px", overflow: "hidden", border: "1px solid #ddd" }}>
          <div style={{ width: `${xpInLevel}%`, height: "100%", background: "linear-gradient(90deg, #ffd700, #ffa500)", transition: "width 0.5s ease-out", boxShadow: "0 0 10px rgba(255,215,0,0.5)" }}></div>
        </div>
        <p style={{ marginTop: "10px", fontSize: "0.8rem", color: "#999" }}>{xpInLevel} / 100 XP до следующей ступени</p>
      </div>

      <div style={{ background: "white", padding: "30px", borderRadius: "25px", boxShadow: "0 5px 20px rgba(0,0,0,0.05)", border: "1px solid #f0f0f0" }}>
        <p style={{ color: "#888", marginBottom: "5px" }}>Как перевести?...</p>
        <h2 style={{ fontSize: "2.8rem", margin: "10px 0", color: "#111" }}>{currentWord.word}</h2>
        
        <div style={{ minHeight: "60px" }}>
          {showHint ? (
            <p style={{ color: "#666", fontStyle: "italic", background: "#fdfdf0", padding: "12px", borderRadius: "12px", borderLeft: "5px solid #ffd700" }}>{currentWord.hint}</p>
          ) : (
            <button onClick={() => setShowHint(true)} style={{ background: "none", border: "1px solid #ccc", borderRadius: "8px", padding: "6px 16px", cursor: "pointer", color: "#aaa", fontSize: "0.85rem" }}>Озарение (Hinweis) 💡</button>
          )}
        </div>

        <input 
          placeholder="Переведи словечко..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && checkAnswer()}
          style={{ width: "100%", padding: "18px", borderRadius: "15px", border: "2px solid #efefef", fontSize: "1.2rem", textAlign: "center", outline: "none", marginBottom: "20px", boxSizing: "border-box" }}
        />

        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={checkAnswer} style={{ flex: 2, padding: "18px", borderRadius: "15px", border: "none", background: "#222", color: "white", fontWeight: "bold", fontSize: "1.1rem", cursor: "pointer" }}>Проверить</button>
          <button onClick={goToNextWord} style={{ flex: 1, padding: "18px", borderRadius: "15px", border: "none", background: "#eee", fontSize: "1.2rem", cursor: "pointer" }}>➜</button>
        </div>

        <div style={{ minHeight: "40px", marginTop: "20px" }}>
          <p style={{ fontSize: "1.2rem", fontWeight: "bold", color: feedback.includes("Достойна") ? "#27ae60" : "#e74c3c", margin: 0 }}>{feedback}</p>
        </div>
      </div>

      {fehlerListe.length > 0 && (
        <div style={{ marginTop: 40, textAlign: "left", background: "#fff5f5", borderRadius: "20px", border: "1px solid #feb2b2" }}>
          <details style={{ outline: "none" }}>
            <summary style={{ cursor: "pointer", color: "#c53030", fontWeight: "bold", padding: "15px", fontSize: "1.1rem" }}>
              Твои испытания ({fehlerListe.length}) — Нажми
            </summary>
            <div style={{ padding: "0 15px 15px 15px" }}>
              <ul style={{ paddingLeft: "20px", fontSize: "1.1rem", color: "#444" }}>
                {fehlerListe.map((f, i) => (
                  <li key={i} style={{ marginBottom: "8px" }}><strong>{f.word}</strong> — {f.translation}</li>
                ))}
              </ul>
              <button onClick={() => setFehlerListe([])} style={{ background: "none", border: "none", color: "#c53030", fontSize: "0.85rem", cursor: "pointer", textDecoration: "underline", padding: 0 }}>Очистить свиток ошибок</button>
            </div>
          </details>
        </div>
      )}

      <div style={{ marginTop: "40px", fontSize: "0.9rem", color: "#666", fontWeight: "bold" }}>
        📜 Прогресс круга: {currentIndex + 1} / {liste.length} слов
      </div>

      <button 
        onClick={() => { if(window.confirm("Стереть все божественные благословения и начать с нуля?")) { localStorage.clear(); window.location.reload(); } }} 
        style={{ marginTop: "20px", fontSize: "0.75rem", color: "#ccc", background: "none", border: "none", cursor: "pointer", textDecoration: "underline" }}
      >
        Начать жизнь смертной заново
      </button>
    </div>
  );
}