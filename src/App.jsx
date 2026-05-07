import React, { useState, useEffect } from 'react';

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
  const [xp, setXp] = useState(0);

  useEffect(() => {
    const gemischt = [...vokabelnOriginal].sort(() => Math.random() - 0.5);
    setListe(gemischt);
  }, []);

  if (liste.length === 0) return <div style={{ textAlign: "center", marginTop: "50px" }}>Загрузка...</div>;

  const xpPerLevel = 100;
  const currentLevel = Math.min(Math.floor(xp / xpPerLevel) + 1, 20);
  const xpInLevel = xp % xpPerLevel;

  const getTitle = () => {
    if (currentLevel === 20) return "Лебединая Императрица 👑";
    if (currentLevel >= 15) return "Мастер языка ✨";
    if (currentLevel >= 10) return "Принцесса знаний 📚";
    if (currentLevel >= 5) return "Знаток 🦢";
    return "Новичок 🌱";
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
      setXp(prev => prev + 10);
      setTimeout(goToNextWord, 1200);
    } else {
      setFeedback("Не совсем! -10 XP ❌");
      setXp(prev => Math.max(0, prev - 10)); // Keine negativen Gesamt-XP
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
      
      {/* ÜBERSCHRIFT GANZ OBEN */}
      <h1 style={{ marginBottom: 20, fontSize: "2.2rem", color: "#222", fontWeight: "bold" }}>
        Лебединый словарь 🦢
      </h1>

      {/* GROSSER PROGRESS BALKEN */}
      <div style={{ 
        marginBottom: 40, 
        background: "#ffffff", 
        padding: "25px", 
        borderRadius: "25px", 
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)", 
        border: "2px solid #ffd700" 
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
          <div style={{ textAlign: "left" }}>
            <span style={{ display: "block", fontSize: "1.4rem", fontWeight: "900", color: "#333" }}>
              Уровень {currentLevel} <span style={{fontSize: "1rem", color: "#999"}}>/ 20</span>
            </span>
          </div>
          <span style={{ fontSize: "1.1rem", color: "#daa520", fontWeight: "bold", background: "#fffdf0", padding: "5px 15px", borderRadius: "10px" }}>
            {getTitle()}
          </span>
        </div>
        
        {/* Größerer Balken */}
        <div style={{ 
          width: "100%", 
          height: "24px", 
          background: "#eee", 
          borderRadius: "12px", 
          overflow: "hidden",
          border: "1px solid #ddd"
        }}>
          <div style={{ 
            width: `${xpInLevel}%`, 
            height: "100%", 
            background: "linear-gradient(90deg, #ffd700 0%, #ffa500 100%)", 
            transition: "width 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow: "0 0 15px rgba(255, 215, 0, 0.6)"
          }}></div>
        </div>
        
        <p style={{ marginTop: "10px", fontSize: "0.9rem", color: "#777", fontWeight: "600" }}>
          {xpInLevel} / 100 XP до следующей ступени
        </p>
      </div>

      {/* HAUPT TRAINER BOX */}
      <div style={{ background: "#ffffff", padding: 30, borderRadius: "25px", boxShadow: "0 8px 25px rgba(0,0,0,0.05)", border: "1px solid #eee" }}>
        <p style={{ color: "#888", fontSize: "1rem", marginBottom: 10 }}>Как это по-немецки?</p>
        <h2 style={{ fontSize: "2.8rem", color: "#222", margin: "10px 0" }}>{currentWord.word}</h2>
        
        <div style={{ marginBottom: 25 }}>
          {showHint ? (
            <p style={{ color: "#666", fontStyle: "italic", backgroundColor: "#f9f9f9", padding: "15px", borderRadius: "15px", borderLeft: "5px solid #ffd700" }}>
               {currentWord.hint}
            </p>
          ) : (
            <button onClick={() => setShowHint(true)} style={{ background: "none", border: "1px solid #ccc", borderRadius: "10px", padding: "8px 16px", cursor: "pointer", color: "#999", fontSize: "0.9rem" }}>
              Подсказка 💡
            </button>
          )}
        </div>

        <input
          placeholder="Твой ответ..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && checkAnswer()}
          style={{ width: "100%", padding: "18px", fontSize: "18px", borderRadius: "15px", border: "2px solid #efefef", outline: "none", boxSizing: "border-box", textAlign: "center" }}
        />

        <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
          <button onClick={checkAnswer} style={{ flex: 2, padding: "18px", backgroundColor: "#222", color: "white", border: "none", borderRadius: "15px", fontSize: "18px", fontWeight: "bold", cursor: "pointer" }}>
            Проверить
          </button>
          <button onClick={goToNextWord} style={{ flex: 1, padding: "18px", backgroundColor: "#eee", color: "#555", border: "none", borderRadius: "15px", fontSize: "16px", cursor: "pointer" }}>
            ➜
          </button>
        </div>

        <div style={{ minHeight: "40px", marginTop: "20px" }}>
           <p style={{ fontSize: "20px", fontWeight: "bold", color: feedback.includes("Правильно") ? "#27ae60" : "#e74c3c", margin: 0 }}>
            {feedback}
          </p>
        </div>
      </div>
      
      <p style={{ marginTop: 25, color: "#bbb", fontSize: "0.9rem" }}>
        Карточка {currentIndex + 1} из {liste.length}
      </p>

      {/* FEHLERLISTE */}
      {fehlerListe.length > 0 && (
        <div style={{ marginTop: 30, textAlign: "left", background: "#fff5f5", borderRadius: "20px", border: "1px solid #feb2b2", overflow: "hidden" }}>
          <details style={{ outline: "none" }}>
            <summary style={{ cursor: "pointer", color: "#c53030", fontWeight: "bold", fontSize: "1.1rem", padding: "15px" }}>
              Список ошибок ({fehlerListe.length}) — Посмотреть
            </summary>
            <div style={{ padding: "0 15px 15px 15px" }}>
              <ul style={{ paddingLeft: "20px", fontSize: "1.1rem", color: "#444" }}>
                {fehlerListe.map((f, i) => (
                  <li key={i} style={{ marginBottom: "8px" }}>
                    <strong>{f.word}</strong> — {f.translation}
                  </li>
                ))}
              </ul>
              <button onClick={() => setFehlerListe([])} style={{ background: "none", border: "none", color: "#c53030", fontSize: "0.85rem", cursor: "pointer", textDecoration: "underline" }}>
                Очистить ошибки
              </button>
            </div>
          </details>
        </div>
      )}
    </div>
  );
}