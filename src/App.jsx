import React, { useState, useEffect } from 'react';

// 1. Deine Vokabel-Liste
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
  { "word": "ebenfalls", "translation": "также", "hint": "Synonym auch." }
];

export default function App() {
  const [liste, setListe] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const gemischt = [...vokabelnOriginal].sort(() => Math.random() - 0.5);
    setListe(gemischt);
  }, []);

  if (liste.length === 0) return <div style={{ textAlign: "center", marginTop: "50px" }}>Загрузка...</div>;

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
      setFeedback("Правильно! 🦢✨");
      setTimeout(goToNextWord, 1500);
    } else {
      setFeedback("Не совсем! Попробуй еще раз! ❌");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif", maxWidth: 800, margin: "auto", textAlign: "center" }}>
      <h1 style={{ marginBottom: 30, fontSize: "1.8rem" }}>Лебединый словарь 🦢</h1>
      
      <div style={{ background: "#ffffff", padding: 25, borderRadius: 20, boxShadow: "0 8px 20px rgba(0,0,0,0.1)", border: "1px solid #eee" }}>
        <p style={{ color: "#888", fontSize: "0.9rem", marginBottom: 10 }}>Как это по-немецки?</p>
        <h2 style={{ fontSize: "2.2rem", color: "#222", margin: "10px 0" }}>{currentWord.word}</h2>
        
        {/* HINT BUTTON & TEXT */}
        <div style={{ marginBottom: 20 }}>
          {showHint ? (
            <p style={{ color: "#666", fontStyle: "italic", backgroundColor: "#fdfdfd", padding: "10px", borderRadius: "10px", borderLeft: "4px solid #eee" }}>
               {currentWord.hint}
            </p>
          ) : (
            <button 
              onClick={() => setShowHint(true)}
              style={{ background: "none", border: "1px solid #ccc", borderRadius: "8px", padding: "5px 12px", cursor: "pointer", color: "#999", fontSize: "0.8rem" }}
            >
              Подсказка 💡
            </button>
          )}
        </div>

        <input
          placeholder="Переведи словечко..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && checkAnswer()}
          style={{ 
            width: "100%", 
            padding: "15px", 
            fontSize: "16px", 
            borderRadius: "12px", 
            border: "2px solid #efefef",
            outline: "none",
            boxSizing: "border-box"
          }}
        />

        <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
          <button 
            onClick={checkAnswer}
            style={{ 
              flex: 2,
              padding: "15px", 
              backgroundColor: "#222", 
              color: "white", 
              border: "none", 
              borderRadius: "12px", 
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Проверить
          </button>

          <button 
            onClick={goToNextWord}
            style={{ 
              flex: 1,
              padding: "15px", 
              backgroundColor: "#eee", 
              color: "#555", 
              border: "none", 
              borderRadius: "12px", 
              fontSize: "14px",
              cursor: "pointer"
            }}
          >
            Далее ➔
          </button>
        </div>

        <div style={{ minHeight: "30px", marginTop: "15px" }}>
           <p style={{ fontSize: "18px", fontWeight: "bold", color: feedback.includes("Правильно") ? "#27ae60" : "#e74c3c", margin: 0 }}>
            {feedback}
          </p>
        </div>
      </div>
      
      <p style={{ marginTop: 25, color: "#aaa", fontSize: "0.85rem" }}>
        Слово {currentIndex + 1} из {liste.length}
      </p>
    </div>
  );
}