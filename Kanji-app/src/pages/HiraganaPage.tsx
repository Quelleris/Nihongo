import hiragana from "../data/hiragana.json";

export const HiraganaPage = () => {
  return (
    <section className="section">
      <div className="container">
        <h1>Hiragana</h1>
        <div>
          <ul className="kana-list grid-wrapper">
            {hiragana.map((hiragana) => {
              return (
                <li className="kana-card" key={hiragana.kana}>
                  <p className="kana-kana">{hiragana.kana}</p>
                  <p className="kana-roumanji">{hiragana.roumaji}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
