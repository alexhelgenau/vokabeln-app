import { useState } from "react";
import vocab from "./vocab.json";

export default function App() {
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [showList, setShowList] = useState(false);

  const currentWord = vocab[index];

  function checkAnswer() {
    if (!input.trim()) return;

    if (input.toLowerCase().trim() === currentWord.translation.toLowerCase()) {
      setResult("✅ Richtig!");
    } else {
      setResult("❌ Falsch! Richtige Lösung: " + currentWord.translation);
    }
  }

  function nextWord() {
    setIndex((index + 1) % vocab.length);
    setInput("");
    setResult("");
    setShowHint(false);
  }

  return (
    <div style={{ padding: 30, fontFamily: "sans-serif", maxWidth: 500, margin: "auto" }}>
      <h1>Deutsch Lernspiel</h1>

      <h2>{currentWord.word}</h2>

      <input
        placeholder="Übersetzung eingeben..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: "100%", padding: 10, fontSize: 16 }}
      />

      <div style={{ marginTop: 10 }}>
        <button onClick={checkAnswer}>Prüfen</button>
        <button onClick={() => setShowHint(true)} style={{ marginLeft: 10 }}>
          Hinweis
        </button>
        <button onClick={nextWord} style={{ marginLeft: 10 }}>
          Nächstes Wort
        </button>
      </div>

      {showHint && (
        <p style={{ marginTop: 15 }}>💡 {currentWord.hint}</p>
      )}

      <h3>{result}</h3>

      <hr />

      <button onClick={() => setShowList(!showList)}>
        Alle Wörter anzeigen
      </button>

      {showList && (
        <ul>
          {vocab.map((v, i) => (
            <li key={i}>
              {v.word} → {v.translation}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}