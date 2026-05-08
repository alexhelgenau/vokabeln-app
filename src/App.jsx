import React, { useState, useEffect } from 'react';

// Deine Vokabelliste (gekürzt für die Darstellung, füge deine restlichen Wörter einfach wieder ein)
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
  { "word": "offensichtlich", "translation": "очевидно", "hint": "Es ist klar zu sehen." },
  { "word": "Fest", "translation": "праздник / бал", "hint": "Große Feier." },
  { "word": "Festung", "translation": "крепость", "hint": "Ein sicherer Ort aus Stein." },
  { "word": "Atem", "translation": "дыхание", "hint": "Luft in der Lunge." },
  { "word": "Bewegung", "translation": "движение", "hint": "Nicht stillstehen." },
  { "word": "schlafen", "translation": "спать", "hint": "Was man nachts im Bett macht." },
  // ... hier deine restlichen 75 Wörter einfügen
];

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullyOpen, setIsFullyOpen] = useState(false);
  const [liste, setListe] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showHint, setShowHint] = useState(false);

  const [xp, setXp] = useState(() => {
    const saved = localStorage.getItem('lebedi_xp');
    return saved ? parseInt(saved) : 0;
  });

  const xpPerLevel = 100;
  const currentLevel = Math.min(Math.floor(xp / xpPerLevel) + 1, 20);
  
  useEffect(() => {
    const gemischt = [...vokabelnOriginal].sort(() => Math.random() - 0.5);
    setListe(gemischt);
  }, []);

  useEffect(() => {
    localStorage.setItem('lebedi_xp', xp.toString());
  }, [xp]);

  const handleOpenBook = () => {
    setIsOpen(true);
    // Warte bis die Cover-Animation fertig ist, bevor die Inhalte scharf geschaltet werden
    setTimeout(() => setIsFullyOpen(true), 1200);
  };

  const currentWord = liste[currentIndex];

  const checkAnswer = () => {
    const userBeant = input.toLowerCase().trim();
    const loesungsTeile = currentWord.translation.toLowerCase().split('/').map(s => s.trim());

    if (loesungsTeile.some(t => t === userBeant) && userBeant !== "") {
      setFeedback("📜 Достойна богов! +10 XP");
      setXp(prev => prev + 10);
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % liste.length);
        setInput("");
        setFeedback("");
        setShowHint(false);
      }, 1200);
    } else {
      setFeedback("⚡ Гнев Зевса! -10 XP");
      setXp(prev => Math.max(0, prev - 10));
    }
  };

  if (liste.length === 0) return null;

  return (
    <div style={{ 
      minHeight: "100vh", 
      backgroundColor: "#2c241e", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center",
      perspective: "2000px",
      overflow: "hidden",
      fontFamily: "'Georgia', serif"
    }}>
      <style>{`
        .book-container {
          position: relative;
          width: 350px;
          height: 500px;
          transition: transform 1.2s cubic-bezier(0.645, 0.045, 0.355, 1);
          transform-style: preserve-3d;
          transform: ${isOpen ? 'translateX(50%)' : 'translateX(0)'};
        }

        .cover {
          position: absolute;
          width: 100%;
          height: 100%;
          background: #4a0e0e;
          background-image: radial-gradient(circle at 50% 50%, #5a1e1e 0%, #3a0a0a 100%);
          color: #d4af37;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border: 10px solid #3a0a0a;
          border-left: 20px solid #2a0505;
          border-radius: 5px 15px 15px 5px;
          box-shadow: 10px 10px 30px rgba(0,0,0,0.5);
          backface-visibility: hidden;
          z-index: 2;
          transition: transform 1.2s cubic-bezier(0.645, 0.045, 0.355, 1);
          transform-origin: left;
          transform: ${isOpen ? 'rotateY(-140deg)' : 'rotateY(0deg)'};
          cursor: pointer;
        }

        .page {
          position: absolute;
          width: 100%;
          height: 100%;
          background: #f2e8c9;
          background-image: 
            linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
            url('https://www.transparenttextures.com/patterns/paper-fibers.png');
          box-shadow: inset 5px 0 20px rgba(0,0,0,0.2);
          display: flex;
          flex-direction: column;
          padding: 40px;
          box-sizing: border-box;
          z-index: 1;
          border-radius: 2px 10px 10px 2px;
        }

        .cover-ornament {
          border: 2px solid #d4af37;
          padding: 20px;
          margin: 10px;
          text-align: center;
        }

        input {
          background: transparent;
          border: none;
          border-bottom: 2px solid #8b4513;
          font-family: 'Georgia', serif;
          font-size: 1.2rem;
          color: #4a3c31;
          outline: none;
          width: 100%;
          margin-top: 20px;
          text-align: center;
        }

        .button-ancient {
          background: #8b4513;
          color: #f2e8c9;
          border: none;
          padding: 10px 20px;
          margin-top: 20px;
          cursor: pointer;
          font-family: 'Georgia', serif;
          box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
        }
      `}</style>

      <div className="book-container">
        {/* BUCH DECKEL */}
        <div className="cover" onClick={handleOpenBook}>
          <div className="cover-ornament">
            <h1 style={{ fontSize: '1.8rem', margin: 0 }}>ЛЕБЕДИНЫЙ</h1>
            <h2 style={{ fontSize: '1.2rem', marginTop: '5px' }}>СЛОВАРЬ</h2>
            <div style={{ fontSize: '3rem', marginTop: '20px' }}>🦢</div>
            <p style={{ fontSize: '0.7rem', marginTop: '40px', opacity: 0.8 }}>Нажми, чтобы открыть тайны</p>
          </div>
        </div>

        {/* INNENSEITE */}
        <div className="page" style={{ opacity: isFullyOpen ? 1 : 0, transition: 'opacity 0.5s' }}>
          {isFullyOpen && (
            <>
              <div style={{ borderBottom: '1px solid #8b4513', paddingBottom: '10px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#8b4513' }}>
                <span>Level: {currentLevel}</span>
                <span>Слово {currentIndex + 1} / {liste.length}</span>
              </div>

              <div style={{ textAlign: 'center', flex: 1 }}>
                <p style={{ color: '#8b4513', fontStyle: 'italic', fontSize: '0.9rem' }}>Переведи это слово:</p>
                <h2 style={{ fontSize: '2.4rem', color: '#2c241e', margin: '20px 0' }}>{currentWord.word}</h2>
                
                <div style={{ minHeight: '60px' }}>
                  {showHint ? (
                    <p style={{ fontSize: '0.85rem', color: '#5d4037', background: 'rgba(0,0,0,0.05)', padding: '10px', borderRadius: '5px' }}>
                      💡 {currentWord.hint}
                    </p>
                  ) : (
                    <button onClick={() => setShowHint(true)} style={{ background: 'none', border: 'none', color: '#8b4513', textDecoration: 'underline', cursor: 'pointer', fontSize: '0.8rem' }}>
                      Нужно озарение?
                    </button>
                  )}
                </div>

                <input 
                  autoFocus
                  placeholder="..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && checkAnswer()}
                />

                <button className="button-ancient" onClick={checkAnswer}>
                  Подтвердить
                </button>

                <p style={{ marginTop: '20px', fontSize: '1rem', fontWeight: 'bold', color: feedback.includes('Достойна') ? '#2e7d32' : '#c62828' }}>
                  {feedback}
                </p>
              </div>

              <div style={{ fontSize: '0.7rem', textAlign: 'center', color: '#8b4513', opacity: 0.6 }}>
                📜 Опыт: {xp} XP
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}