<script>
  const LOGO_SRC = "data:image/jpeg;base64,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";

  let currentView = $state('home');
  let score = $state(0);
  let round = $state(0);
  let totalRounds = 5;
  let selectedAnswer = $state(null);
  let answered = $state(false);
  let questions = $state([]);

  let currentQ = $derived(questions[round] || null);

  const jewels = [
    { id: 1, name: 'Magic Fireball', collection: 'Fire & Ice', year: 2018, color: '#e63946', emoji: '🔴', desc: 'Vibrant red crystal cluster ring' },
    { id: 2, name: 'Alien Caviar', collection: 'Cosmos', year: 2020, color: '#457b9d', emoji: '🔵', desc: 'Iridescent sphere pendant necklace' },
    { id: 3, name: 'Twisted Love', collection: 'Romance', year: 2019, color: '#f4a261', emoji: '🟠', desc: 'Golden twisted bangle bracelet' },
    { id: 4, name: 'Harlequin', collection: 'Carnival', year: 2017, color: '#2a9d8f', emoji: '🟢', desc: 'Multicolor diamond earrings' },
    { id: 5, name: 'Snake Charmer', collection: 'Wild', year: 2021, color: '#8338ec', emoji: '🟣', desc: 'Purple serpent wrap ring' },
    { id: 6, name: 'Crystal Forest', collection: 'Nature', year: 2016, color: '#06d6a0', emoji: '💚', desc: 'Green leaf cluster brooch' },
    { id: 7, name: 'Ice Queen', collection: 'Winter', year: 2022, color: '#90e0ef', emoji: '🩵', desc: 'Clear crystal chandelier earrings' },
    { id: 8, name: 'Golden Hour', collection: 'Sunset', year: 2023, color: '#ffb703', emoji: '💛', desc: 'Amber drop pendant necklace' },
  ];

  function shuffle(arr) { return [...arr].sort(() => Math.random() - 0.5); }

  function generateQuestions() {
    return shuffle(jewels).slice(0, totalRounds).map(correct => {
      const others = shuffle(jewels.filter(j => j.id !== correct.id)).slice(0, 3);
      return { correct, options: shuffle([correct, ...others]) };
    });
  }

  function startGame() {
    score = 0; round = 0; answered = false; selectedAnswer = null;
    questions = generateQuestions();
    currentView = 'game';
  }

  function selectAnswer(option) {
    if (answered) return;
    selectedAnswer = option;
    answered = true;
    if (option.id === currentQ.correct.id) score += 1;
  }

  function nextRound() {
    if (round + 1 >= totalRounds) { currentView = 'result'; }
    else { round += 1; answered = false; selectedAnswer = null; }
  }

  function goHome() { currentView = 'home'; selectedAnswer = null; answered = false; }

  let scorePercent = $derived(Math.round((score / totalRounds) * 100));
  let scoreLabel = $derived(
    scorePercent >= 80 ? '✦ Konplott Connoisseur' :
    scorePercent >= 60 ? '✦ Jewelry Enthusiast' :
    scorePercent >= 40 ? '✦ Style Explorer' : '✦ Beginner Collector'
  );
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
</svelte:head>

<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :global(body) { font-family: 'DM Sans', sans-serif; background: #fff; color: #1a1a1a; min-height: 100vh; }

  nav {
    display: flex; align-items: center; justify-content: space-between;
    padding: 20px 40px; border-bottom: 1px solid #f0f0f0;
    position: sticky; top: 0; background: rgba(255,255,255,0.96);
    backdrop-filter: blur(12px); z-index: 100;
  }
  .nav-logo { display: flex; align-items: center; gap: 12px; cursor: pointer; background: none; border: none; }
  .nav-logo img { width: 44px; height: 44px; object-fit: contain; }
  .brand-main { font-family: 'Playfair Display', serif; font-size: 17px; font-weight: 600; color: #1a1a1a; display: block; }
  .brand-sub { font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: #888; display: block; margin-top: 2px; }
  .score-badge { background: #1a1a1a; color: #fff; padding: 4px 14px; border-radius: 20px; font-size: 13px; }

  .home { max-width: 960px; margin: 0 auto; padding: 80px 40px; }
  .home-hero { text-align: center; margin-bottom: 72px; }
  .hero-logo { width: 100px; height: 100px; object-fit: contain; margin-bottom: 28px; }
  .hero-sub { font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; color: #aaa; margin-bottom: 12px; }
  h1 { font-family: 'Playfair Display', serif; font-size: 52px; font-weight: 600; line-height: 1.1; }
  h1 em { font-style: italic; color: #555; }
  .hero-desc { font-size: 16px; color: #666; max-width: 400px; margin: 16px auto 0; line-height: 1.7; font-weight: 300; }

  .divider { display: flex; align-items: center; gap: 16px; margin: 48px 0; }
  .divider-line { flex: 1; height: 1px; background: #eee; }
  .divider-text { font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: #bbb; }

  .game-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; }
  .game-card {
    border: 1.5px solid #eee; border-radius: 16px; padding: 32px 28px;
    cursor: pointer; transition: all 0.25s ease; text-align: left; background: #fff;
    position: relative; overflow: hidden;
  }
  .game-card::after {
    content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 3px;
    background: #1a1a1a; transform: scaleX(0); transform-origin: left; transition: transform 0.3s ease;
  }
  .game-card:hover { border-color: #ccc; transform: translateY(-3px); box-shadow: 0 12px 36px rgba(0,0,0,0.07); }
  .game-card:hover::after { transform: scaleX(1); }
  .card-icon { font-size: 34px; margin-bottom: 16px; display: block; }
  .card-title { font-family: 'Playfair Display', serif; font-size: 21px; font-weight: 600; margin-bottom: 8px; }
  .card-desc { font-size: 14px; color: #777; line-height: 1.6; font-weight: 300; }
  .card-tag { margin-top: 18px; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: #bbb; }

  .game { max-width: 720px; margin: 0 auto; padding: 60px 40px; }
  .game-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 44px; }
  .progress-wrap { flex: 1; margin-right: 24px; }
  .progress-label { font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #aaa; margin-bottom: 8px; }
  .progress-bar { height: 2px; background: #f0f0f0; border-radius: 2px; overflow: hidden; }
  .progress-fill { height: 100%; background: #1a1a1a; border-radius: 2px; transition: width 0.4s ease; }
  .score-num { font-family: 'Playfair Display', serif; font-size: 28px; font-weight: 600; line-height: 1; text-align: right; }
  .score-lbl { font-size: 12px; color: #bbb; text-align: right; }

  .jewel-showcase { background: #fafafa; border: 1px solid #f0f0f0; border-radius: 20px; padding: 44px 36px; text-align: center; margin-bottom: 28px; }
  .jewel-visual { width: 110px; height: 110px; border-radius: 50%; margin: 0 auto 22px; display: flex; align-items: center; justify-content: center; font-size: 48px; }
  .jewel-q { font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; color: #aaa; margin-bottom: 10px; }
  .jewel-hint { font-family: 'Playfair Display', serif; font-size: 21px; color: #1a1a1a; line-height: 1.45; }

  .options-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 24px; }
  .option-btn {
    background: #fff; border: 1.5px solid #e8e8e8; border-radius: 12px;
    padding: 18px 18px; cursor: pointer; text-align: left; transition: all 0.2s ease;
    font-family: 'DM Sans', sans-serif; width: 100%;
  }
  .option-btn:hover:not(.answered) { border-color: #999; background: #fafafa; }
  .option-btn.correct { border-color: #2a9d8f; background: #f0faf9; }
  .option-btn.wrong { border-color: #e63946; background: #fff5f6; }
  .opt-emoji { font-size: 20px; display: block; margin-bottom: 6px; }
  .opt-name { font-size: 15px; font-weight: 500; display: block; margin-bottom: 2px; }
  .opt-year { font-size: 12px; color: #bbb; }

  .feedback { text-align: center; padding: 14px; border-radius: 10px; margin-bottom: 16px; font-size: 15px; }
  .feedback.right { background: #f0faf9; color: #2a9d8f; }
  .feedback.wrong { background: #fff5f6; color: #e63946; }

  .btn-primary {
    width: 100%; background: #1a1a1a; color: #fff; border: none;
    border-radius: 12px; padding: 16px; font-family: 'DM Sans', sans-serif;
    font-size: 14px; font-weight: 500; letter-spacing: 0.07em; cursor: pointer; transition: all 0.2s ease;
  }
  .btn-primary:hover { background: #333; transform: translateY(-1px); }

  .result { max-width: 520px; margin: 0 auto; padding: 80px 40px; text-align: center; }
  .result-logo { width: 72px; height: 72px; object-fit: contain; margin-bottom: 28px; }
  .score-ring {
    width: 130px; height: 130px; border-radius: 50%; border: 3px solid #1a1a1a;
    display: flex; flex-direction: column; align-items: center; justify-content: center; margin: 0 auto 28px;
  }
  .ring-num { font-family: 'Playfair Display', serif; font-size: 38px; font-weight: 600; line-height: 1; }
  .ring-denom { font-size: 12px; color: #aaa; margin-top: 2px; }
  h2 { font-family: 'Playfair Display', serif; font-size: 28px; font-weight: 600; margin-bottom: 8px; }
  .result-label { font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase; color: #888; margin-bottom: 28px; }
  .result-msg { font-size: 15px; color: #666; line-height: 1.7; font-weight: 300; max-width: 340px; margin: 0 auto 40px; }
  .result-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
  .btn-outline {
    background: transparent; color: #1a1a1a; border: 1.5px solid #ddd;
    border-radius: 10px; padding: 13px 24px; font-family: 'DM Sans', sans-serif;
    font-size: 14px; cursor: pointer; transition: all 0.2s ease;
  }
  .btn-outline:hover { border-color: #999; }
  .btn-sm { width: auto; padding: 13px 24px; }

  @media (max-width: 600px) {
    nav { padding: 14px 18px; }
    .home { padding: 44px 18px; }
    h1 { font-size: 36px; }
    .game { padding: 36px 18px; }
    .options-grid { grid-template-columns: 1fr; }
    .result { padding: 44px 18px; }
  }
</style>

<nav>
  <button class="nav-logo" onclick={goHome}>
    <img src={LOGO_SRC} alt="Konplott" />
    <div>
      <span class="brand-main">KonplottFotoPlay</span>
      <span class="brand-sub">Miranda Konstantinidou · Est. 1986</span>
    </div>
  </button>
  {#if currentView === 'game'}
    <span class="score-badge">Score: {score} / {totalRounds}</span>
  {/if}
</nav>

{#if currentView === 'home'}
  <div class="home">
    <div class="home-hero">
      <img src={LOGO_SRC} alt="Konplott" class="hero-logo" />
      <div class="hero-sub">Das Schmuck-Spiel</div>
      <h1>Konplott<br /><em>FotoPlay</em></h1>
      <p class="hero-desc">Teste dein Wissen über die außergewöhnlichen Schmuckkreationen von Miranda Konstantinidou.</p>
    </div>
    <div class="divider">
      <div class="divider-line"></div>
      <span class="divider-text">Spiel wählen</span>
      <div class="divider-line"></div>
    </div>
    <div class="game-grid">
      <button class="game-card" onclick={startGame}>
        <span class="card-icon">💎</span>
        <div class="card-title">Schmuck erraten</div>
        <p class="card-desc">Sieh das Schmuckstück und erkenne es unter vier Möglichkeiten.</p>
        <div class="card-tag">5 Runden · Einzelspieler</div>
      </button>
      <button class="game-card" onclick={startGame}>
        <span class="card-icon">📅</span>
        <div class="card-title">Jahr & Kollektion</div>
        <p class="card-desc">Erkennst du aus welchem Jahr ein Konplott-Stück stammt?</p>
        <div class="card-tag">5 Runden · Fortgeschritten</div>
      </button>
      <button class="game-card" onclick={startGame}>
        <span class="card-icon">🎯</span>
        <div class="card-title">Schnell-Quiz</div>
        <p class="card-desc">Beantworte so viele Fragen wie möglich — teste dein Kennerurteil.</p>
        <div class="card-tag">Highscore · Zeitlimit</div>
      </button>
    </div>
  </div>
{/if}

{#if currentView === 'game' && currentQ}
  <div class="game">
    <div class="game-header">
      <div class="progress-wrap">
        <div class="progress-label">Runde {round + 1} von {totalRounds}</div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: {(round / totalRounds) * 100}%"></div>
        </div>
      </div>
      <div>
        <div class="score-num">{score}</div>
        <div class="score-lbl">Punkte</div>
      </div>
    </div>

    <div class="jewel-showcase">
      <div class="jewel-visual" style="background: {currentQ.correct.color}20">
        {currentQ.correct.emoji}
      </div>
      <div class="jewel-q">Welches Schmuckstück ist das?</div>
      <div class="jewel-hint">"{currentQ.correct.desc}"</div>
    </div>

    <div class="options-grid">
      {#each currentQ.options as option}
        <button
          class="option-btn {answered ? 'answered' : ''} {answered && option.id === currentQ.correct.id ? 'correct' : ''} {answered && selectedAnswer?.id === option.id && option.id !== currentQ.correct.id ? 'wrong' : ''}"
          onclick={() => selectAnswer(option)}
        >
          <span class="opt-emoji">{option.emoji}</span>
          <span class="opt-name">{option.name}</span>
          <span class="opt-year">{option.collection} · {option.year}</span>
        </button>
      {/each}
    </div>

    {#if answered}
      <div class="feedback {selectedAnswer?.id === currentQ.correct.id ? 'right' : 'wrong'}">
        {selectedAnswer?.id === currentQ.correct.id ? '✓ Richtig! Das ist ' + currentQ.correct.name : '✗ Falsch — es war: ' + currentQ.correct.name}
      </div>
      <button class="btn-primary" onclick={nextRound}>
        {round + 1 >= totalRounds ? 'Ergebnis anzeigen →' : 'Weiter →'}
      </button>
    {/if}
  </div>
{/if}

{#if currentView === 'result'}
  <div class="result">
    <img src={LOGO_SRC} alt="Konplott" class="result-logo" />
    <div class="score-ring">
      <div class="ring-num">{score}</div>
      <div class="ring-denom">von {totalRounds}</div>
    </div>
    <h2>Spiel beendet</h2>
    <div class="result-label">{scoreLabel}</div>
    <p class="result-msg">
      {#if scorePercent >= 80}Beeindruckend! Du kennst die Welt von Konplott wie dein eigenes Schmuckkästchen.
      {:else if scorePercent >= 60}Sehr gut! Du hast ein feines Gespür für Miranda Konstantinidous Designs.
      {:else if scorePercent >= 40}Gut gemacht! Mit etwas Übung wirst du ein echter Konplott-Kenner.
      {:else}Üb weiter! Die faszinierende Welt von Konplott wartet darauf, entdeckt zu werden.{/if}
    </p>
    <div class="result-btns">
      <button class="btn-primary btn-sm" onclick={startGame}>Nochmal spielen</button>
      <button class="btn-outline" onclick={goHome}>Zur Übersicht</button>
    </div>
  </div>
{/if}
