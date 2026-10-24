import { NavLink } from "react-router-dom";
import { Heart, ShoppingBag, Star, ArrowRight } from "lucide-react";
import "../App.css";

const categories = [
  {
    name: "Classic Teddies",
    description: "Timeless cuddle buddies",
    image:
      "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Giant Teddies",
    description: "Extra-large hugs",
    image:
      "https://images.unsplash.com/photo-1562040506-a9b32cb51b94?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Mini Plushies",
    description: "Little bundles of joy",
    image:
      "https://images.unsplash.com/photo-1535572290543-960a8046f5af?w=600&auto=format&fit=crop&q=80",
  },
];

const products = [
  {
    id: 1,
    name: "Honey Bear",
    category: "Classic Collection",
    price: 799,
    rating: 4.9,
    badge: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Cocoa Cuddles",
    category: "Premium Collection",
    price: 1299,
    rating: 4.8,
    badge: "Popular",
    image:
      "https://images.unsplash.com/photo-1562040506-a9b32cb51b94?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Rosie Bear",
    category: "Love Collection",
    price: 999,
    rating: 4.9,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1535572290543-960a8046f5af?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Little Muffin",
    category: "Mini Collection",
    price: 499,
    rating: 4.7,
    badge: "Cute Pick",
    image:
      "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=600&auto=format&fit=crop&q=80",
  },
];

const Home = () => {
  return (
    <main className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">
            <Heart size={15} fill="currentColor" />
            A little happiness, wrapped in a hug
          </span>

          <h1>
            Some things are
            <br />
            better with a <span>teddy.</span>
          </h1>

          <p className="hero-description">
            Meet your new cuddle buddy! Discover the softest teddy bears,
            made to bring warmth, smiles, and a little extra love into
            your everyday life.
          </p>

          <div className="hero-buttons">
            <NavLink to="/shop" className="btn-primary">
              Shop Collection <ArrowRight size={18} />
            </NavLink>

            <NavLink to="/about" className="btn-secondary">
              Our Story
            </NavLink>
          </div>

          <div className="hero-trust">
            <span>♡ Extra soft</span>
            <span>♡ Gift-ready</span>
            <span>♡ Made for hugs</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-circle"></div>

          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=900&auto=format&fit=crop&q=85"
            alt="A soft teddy bear from TeddyShop"
          />

          <div className="floating-card floating-card-top">
            <span className="floating-icon">♡</span>
            <div>
              <strong>Made for cuddles</strong>
              <p>100% cozy vibes</p>
            </div>
          </div>

          <div className="floating-card floating-card-bottom">
            <span className="floating-star">★</span>
            <div>
              <strong>Your new favourite</strong>
              <p>One hug at a time</p>
            </div>
          </div>

          <span className="decor decor-one">✿</span>
          <span className="decor decor-two">♡</span>
        </div>
      </section>

      {/* Benefits Strip */}
      <section className="benefits">
        <div className="benefit-item">
          <span>🎁</span>
          <div>
            <h3>Gift-ready goodness</h3>
            <p>Perfect for every occasion</p>
          </div>
        </div>

        <div className="benefit-item">
          <span>☁️</span>
          <div>
            <h3>Cloud-soft cuddles</h3>
            <p>Softness you'll fall for</p>
          </div>
        </div>

        <div className="benefit-item">
          <span>💗</span>
          <div>
            <h3>A whole lot of love</h3>
            <p>Little things, big smiles</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">FIND YOUR FAVOURITE</span>
            <h2>A world full of <span>cuddles.</span></h2>
            <p>There's a perfect teddy for everyone.</p>
          </div>

          <NavLink to="/shop" className="text-link">
            View all <ArrowRight size={17} />
          </NavLink>
        </div>

        <div className="categories-grid">
          {categories.map((category) => (
            <NavLink to="/shop" className="category-card" key={category.name}>
              <img src={category.image} alt={category.name} />

              <div className="category-overlay">
                <div>
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </div>
                <span className="category-arrow">
                  <ArrowRight size={20} />
                </span>
              </div>
            </NavLink>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="products-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">HANDPICKED WITH LOVE</span>
            <h2>Meet the <span>cuties.</span></h2>
            <p>Your next favourite cuddle buddy is right here.</p>
          </div>

          <NavLink to="/shop" className="text-link">
            Shop all <ArrowRight size={17} />
          </NavLink>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-image-wrapper">
                <img src={product.image} alt={product.name} />

                <span className="product-badge">{product.badge}</span>

                <button
                  type="button"
                  className="wishlist-button"
                  aria-label={`Add ${product.name} to wishlist`}
                  onClick={() => alert("Wishlist feature coming soon! 💗")}
                >
                  <Heart size={19} />
                </button>

                <NavLink to="/shop" className="quick-add">
                  <ShoppingBag size={17} />
                  Explore product
                </NavLink>
              </div>

              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3>{product.name}</h3>

                <div className="product-bottom">
                  <span className="product-price">
                    ₹{product.price.toLocaleString("en-IN")}
                  </span>

                  <span className="product-rating">
                    <Star size={15} fill="currentColor" />
                    {product.rating}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="promo-section">
        <div className="promo-decoration">♡</div>

        <div className="promo-content">
          <span className="eyebrow">A LITTLE TREAT FOR YOU</span>
          <h2>Your first cuddle comes with a little <span>extra love.</span></h2>
          <p>
            Sign up for TeddyShop and be the first to hear about new arrivals,
            adorable collections, and special offers.
          </p>

          <NavLink to="/signup" className="btn-primary">
            Join the Teddy Club <ArrowRight size={18} />
          </NavLink>
        </div>

        <div className="promo-illustration" aria-hidden="true">
          🧸
          <span>💗</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <NavLink to="/" className="footer-logo">
          🧸 TeddyShop
        </NavLink>

        <p>Made with love, delivered with hugs. ♡</p>

        <div className="footer-links">
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/login">My Account</NavLink>
        </div>

        <span className="copyright">
          © {new Date().getFullYear()} TeddyShop. All hugs reserved.
        </span>
      </footer>
    </main>
  );
};

export default Home;