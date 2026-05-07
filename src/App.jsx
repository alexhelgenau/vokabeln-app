import React, { useState, useEffect } from 'react';

// Vokabel-Liste (gekürzt für die Übersicht, nimm deine volle Liste!)
const vokabelnOriginal = [
  { "word": "mächtig", "translation": "сильный", "hint": "Rhysand ist sehr mächtig." },
  { "word": "warten", "translation": "ждать", "hint": "Du wartest auf mich in August." },
  { "word": "retten", "translation": "спасать", "hint": "Menschen retten, Dinge jagen, the family business." },
  { "word": "Angst", "translation": "страх", "hint": "Du hast Angst vor Schlangen🐍." },
  { "word": "Entscheidung", "translation": "решение", "hint": "Elenas Entscheidung zwischen Stefan und Damon." },
  { "word": "deshalb", "translation": "поэтому", "hint": "Warum machst du das?! Deshalb!" },
  { "word": "übel", "translation": "плохо / тошно", "hint": "Если выпьешь слишком много соленой воды, тебе станет...?" },
  { "word": "einfach", "translation": "просто", "hint": "есть schwer, а есть...?" },
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
  { "word": "früher", "translation": "раньше", "hint": "Früher hatte Russland einen Tzar; jetzt nicht mehr." },
  { "word": "irgendetwas", "translation": "что-нибудь", "hint": " Irgendetwas, ich weiß nicht was." },
  { "word": "schreien", "translation": "кричать", "hint": "Du schreist Persik an, weil er Issy anschreit." },
  { "word": "aussehen", "translation": "выглядеть", "hint": "Die Kleid von Daphne sieht wunderschön aus." },
  { "word": "erklären", "translation": "объяснять", "hint": "Ich erkläre dir den Protestantismus." },
  { "word": "irgendwelche", "translation": "какие-нибудь", "hint": "Irgendwelche Leute." },
  { "word": "zweifellos", "translation": "несомненно", "hint": "Ohne jeden Zweifel (ganz sicher)." },
  { "word": "obwohl", "translation": "хотя", "hint": "Sie kämpft, obwohl sie schwach ist." },
  { "word": "hinter", "translation": "позади", "hint": "Hermes steht hinter dir. " },
  { "word": "gefährlich", "translation": "опасно", "hint": "Sonnenschein ist gefährlich für Vampire." },
  { "word": "tief", "translation": "глубоко", "hint": "Salvatores Stimme ist sehr tief." },
  { "word": "nun", "translation": "теперь / сейчас", "hint": "Synonym jetzt." },
  { "word": "unantastbar", "translation": "неприкосновенный", "hint": "Mafiabosse sind unantastbar." },
  { "word": "irrsinnig", "translation": "безумный", "hint": "Er ist verrückt! Er ist irrsinnig!" },
  { "word": "ändern", "translation": "менять", "hint": "Traditionen ändern sich nicht." },
  { "word": "verhalten", "translation": "вести себя", "hint": "Issi verhält sich sehr gut, weil sie ein guter Hund ist." },
  { "word": "plötzlich", "translation": "внезапно", "hint": "Plötzlich habe ich l'amour de ma vie in HelloTalk gefunden 🤭." },
  { "word": "ruhig", "translation": "спокойно", "hint": "Ich bin ruhig und chill 😊." },
  { "word": "gehorchen", "translation": "слушаться / повиноваться", "hint": "Sofia muss Niccolo gehorchen!" },
  { "word": "beherrschen", "translation": "управлять / владеть", "hint": "Sie beherrschen den Norden von Palermo." },
  { "word": "makellos", "translation": "безупречный", "hint": "Sie sieht makellos aus! 😳" },
  { "word": "müssen", "translation": "должен / обязана", "hint": "Ich muss mehr russische Klassik lesen! 😭" },
  { "word": "während", "translation": "во время", "hint": "Du machst dir Essen, während wir reden." },
  { "word": "wichtig", "translation": "важно", "hint": "Du bist mir sehr wichtig 🥺." },
  { "word": "richtig", "translation": "правильно", "hint": "Есть falsch, а есть...?'." },
  { "word": "sondern", "translation": "а / но", "hint": "Du liebst nicht Dean, sondern Sam." },
  { "word": "ebenfalls", "translation": "также", "hint": "Synonym auch." },
  { "word": "bauen", "translation": "строить", "hint": "Ein Haus bauen oder ein Imperium." },
  { "word": "Mittelalter", "translation": "средневековье", "hint": "Die Zeit von Rittern und Burgen." },
  { "word": "überall", "translation": "везде", "hint": "Ich habe dich überall gesucht." },
  { "word": "Wache", "translation": "стража", "hint": "Die Wache steht vor dem Palast von Velaris." },
  { "word": "gehören", "translation": "принадлежать", "hint": "Du gehörst zu mir." },
  { "word": "holen", "translation": "взять / принести", "hint": "Kannst du mir bitte ein Glas Wasser holen?" },
  { "word": "beschlossen", "translation": "решил / постановил", "hint": "Sie hat beschlossen, für ihre Freiheit zu kämpfen." },
  { "word": "anscheinend", "translation": "видимо / кажется", "hint": "Anscheinend hast du recht." },
  { "word": "unbeschwert", "translation": "беззаботный", "hint": "Ein Leben ohne Sorgen ist unbeschwert." },
  { "word": "noch", "translation": "еще", "hint": "Ich liebe dich noch immer." }
];

export default function App() {
  const [liste, setListe] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [fehlerListe, setFehlerListe] = useState([]);
  
  // LEVEL SYSTEM STATES
  const [xp, setXp] = useState(0);

  useEffect(() => {
    const gemischt = [...vokabelnOriginal].sort(() => Math.random() - 0.5);
    setListe(gemischt);
  }, []);

  if (liste.length === 0) return <div style={{ textAlign: "center", marginTop: "50px" }}>Загрузка...</div>;

  const currentLevel = Math.floor(xp / 100) + 1;
  const xpInLevel = xp % 100;

  // Russischer Titel basierend auf dem Level
  const getTitle = () => {
    if (currentLevel < 2) return "Новичок 🦢 (Anfänger)";
    if (currentLevel < 3) return "Ученик ✨ (Schüler)";
    if (currentLevel < 5) return "Знаток 📚 (Kenner)";
    return "Королева слов 👑 (Wort-Königin)";
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
    const userBeantwortung = input.toLowerCase().trim();
    const loesung = currentWord.translation.toLowerCase().trim();

    if (loesung.includes(userBeantwortung) && userBeantwortung !== "") {
      setFeedback("Правильно! +10 XP 🦢✨");
      setXp(prev => prev + 10); // 10 Punkte für richtiges Wort
      setTimeout(goToNextWord, 1200);
    } else {
      setFeedback("Не совсем! Попробуй еще раз! ❌");
      setFehlerListe(prev => {
        if (!prev.find(f => f.word === currentWord.word)) {
          return [currentWord, ...prev];
        }
        return prev;
      });
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif", maxWidth: 600, margin: "auto", textAlign: "center" }}>
      
      {/* LEVEL HEADER - NEU GESTALTET */}
      <div style={{ 
        marginBottom: 30, 
        background: "#ffffff", 
        padding: "20px", 
        borderRadius: "20px", 
        boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
        border: "1px solid #ffd700" // Goldener Rand passend zum Schwan
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px" }}>
          <span style={{ fontWeight: "bold", color: "#222", fontSize: "1.2rem" }}>
            Уровень {currentLevel}
          </span>
          <span style={{ fontSize: "0.9rem", color: "#daa520", fontWeight: "600" }}>
            {getTitle()}
          </span>
        </div>
        
        {/* Der Balken-Container */}
        <div style={{ 
          width: "100%", 
          height: "15px", 
          background: "#f0f0f0", 
          borderRadius: "10px", 
          overflow: "hidden",
          border: "1px solid #eee"
        }}>
          {/* Der eigentliche Fortschritt */}
          <div style={{ 
            width: `${xpInLevel}%`, 
            height: "100%", 
            background: "linear-gradient(90deg, #ffd700 0%, #ff8c00 100%)", 
            transition: "width 0.6s cubic-bezier(0.17, 0.67, 0.83, 0.67)",
            boxShadow: "0 0 10px rgba(255, 215, 0, 0.5)"
          }}></div>
        </div>
        
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "5px" }}>
          <p style={{ margin: 0, fontSize: "0.8rem", color: "#999", fontWeight: "bold" }}>
            {xpInLevel} / 100 XP
          </p>
        </div>
      </div>

      <h1 style={{ marginBottom: 20, fontSize: "1.5rem", color: "#444" }}>Лебединый словарь 🦢</h1>
      
      <div style={{ background: "#ffffff", padding: 25, borderRadius: 20, boxShadow: "0 8px 20px rgba(0,0,0,0.1)", border: "1px solid #eee" }}>
        <p style={{ color: "#888", fontSize: "0.9rem", marginBottom: 10 }}>Как это по-немецки?</p>
        <h2 style={{ fontSize: "2.2rem", color: "#222", margin: "10px 0" }}>{currentWord.word}</h2>
        
        <div style={{ marginBottom: 20 }}>
          {showHint ? (
            <p style={{ color: "#666", fontStyle: "italic", backgroundColor: "#fdfdfd", padding: "10px", borderRadius: "10px", borderLeft: "4px solid #eee" }}>
               {currentWord.hint}
            </p>
          ) : (
            <button onClick={() => setShowHint(true)} style={{ background: "none", border: "1px solid #ccc", borderRadius: "8px", padding: "5px 12px", cursor: "pointer", color: "#999", fontSize: "0.8rem" }}>
              Подсказка 💡
            </button>
          )}
        </div>

        <input
          placeholder="Переведи словечко..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && checkAnswer()}
          style={{ width: "100%", padding: "15px", fontSize: "16px", borderRadius: "12px", border: "2px solid #efefef", outline: "none", boxSizing: "border-box" }}
        />

        <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
          <button onClick={checkAnswer} style={{ flex: 2, padding: "15px", backgroundColor: "#222", color: "white", border: "none", borderRadius: "12px", fontSize: "16px", fontWeight: "bold", cursor: "pointer" }}>
            Проверить
          </button>
          <button onClick={goToNextWord} style={{ flex: 1, padding: "15px", backgroundColor: "#eee", color: "#555", border: "none", borderRadius: "12px", fontSize: "14px", cursor: "pointer" }}>
            Далее ➔
          </button>
        </div>

        <div style={{ minHeight: "30px", marginTop: "15px" }}>
           <p style={{ fontSize: "18px", fontWeight: "bold", color: feedback.includes("Правильно") ? "#27ae60" : "#e74c3c", margin: 0 }}>
            {feedback}
          </p>
        </div>
      </div>
      
      <p style={{ marginTop: 20, color: "#aaa", fontSize: "0.85rem" }}>
        Слово {currentIndex + 1} из {liste.length}
      </p>

      {/* VERSTECKTE FEHLERLISTE */}
      {fehlerListe.length > 0 && (
        <div style={{ marginTop: 30, textAlign: "left", padding: "5px", background: "#fff5f5", borderRadius: "15px", border: "1px solid #feb2b2" }}>
          <details style={{ cursor: "pointer", outline: "none" }}>
            <summary style={{ color: "#c53030", fontWeight: "bold", fontSize: "1rem", padding: "10px" }}>
              Список ошибок ({fehlerListe.length}) — Нажми
            </summary>
            <div style={{ padding: "0 10px 10px 10px" }}>
              <ul style={{ paddingLeft: "20px", fontSize: "0.9rem", color: "#444" }}>
                {fehlerListe.map((f, i) => (
                  <li key={i} style={{ marginBottom: "5px" }}>
                    <strong>{f.word}</strong> — {f.translation}
                  </li>
                ))}
              </ul>
              <button onClick={() => setFehlerListe([])} style={{ background: "none", border: "none", color: "#c53030", fontSize: "0.75rem", cursor: "pointer", textDecoration: "underline" }}>
                Очистить список
              </button>
            </div>
          </details>
        </div>
      )}
    </div>
  );
}