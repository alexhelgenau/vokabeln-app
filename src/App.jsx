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
      setResult("✅ Молодец!");
    } else {
      setResult("❌ Не совсем! Правильно было бы: " + currentWord.translation);
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
      <h1>Лебединый словарь 🦢    </h1>

      <h2>{currentWord.word}</h2>

      <input
        placeholder="Переведи словечко..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: "100%", padding: 10, fontSize: 16 }}
      />

      <div style={{ marginTop: 10 }}>
        <button onClick={checkAnswer}>Проверить</button>
        <button onClick={() => setShowHint(true)} style={{ marginLeft: 10 }}>
          Подсказка
        </button>
        <button onClick={nextWord} style={{ marginLeft: 10 }}>
          Новое слово
        </button>
      </div>

      {showHint && (
        <p style={{ marginTop: 15 }}>💡 {currentWord.hint}</p>
      )}

      <h3>{result}</h3>

      <hr />

      <button onClick={() => setShowList(!showList)}>
        Показать все слова
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