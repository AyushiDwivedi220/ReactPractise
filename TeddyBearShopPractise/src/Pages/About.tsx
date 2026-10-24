import "../App.css";

const About = () => {
    return (
        <div className="about-page">
            <section className="about-hero">
                <span className="about-tag">♡ A little world of cuddles ♡</span>
                <h1>More Than Just a Teddy Bear 🧸</h1>
                <p>
                    Every teddy tells a story, every hug holds a memory,
                    and every SoulTeddy brings a little more happiness
                    into your world.
                </p>
            </section>

            <section className="about-story">
                <div className="about-text">
                    <h2>Our Story</h2>
                    <p>
                        Welcome to SoulTeddy, your cozy little corner of
                        happiness! We believe that sometimes, the smallest
                        things bring the biggest smiles.
                    </p>
                    <p>
                        That's why we bring you adorable teddy bears that
                        make perfect companions, thoughtful gifts, and
                        comforting reminders that you're loved.
                    </p>
                </div>

                <div className="about-highlight">
                    <span className="teddy-emoji">🧸</span>
                    <h3>Made for Hugs</h3>
                    <p>Bringing warmth, comfort, and smiles—one teddy at a time.</p>
                </div>
            </section>

            <section className="about-values">
                <h2>What Makes Us Special?</h2>

                <div className="values-grid">
                    <div className="value-card">
                        <span>💗</span>
                        <h3>Made with Love</h3>
                        <p>Every teddy is chosen to make your special moments sweeter.</p>
                    </div>

                    <div className="value-card">
                        <span>🎁</span>
                        <h3>Perfect Gifts</h3>
                        <p>Make birthdays, anniversaries, and little surprises memorable.</p>
                    </div>

                    <div className="value-card">
                        <span>☁️</span>
                        <h3>Cozy Companions</h3>
                        <p>Soft, adorable friends for your cuddles and happy moments.</p>
                    </div>
                </div>
            </section>

            <section className="about-footer">
                <h2>Every Hug Tells a Story 💕</h2>
                <p>Find your perfect cuddle buddy and spread a little happiness.</p>
            </section>
        </div>
    );
};

export default About;
