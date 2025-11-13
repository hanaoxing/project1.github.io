<template>
  <section class="home">
    <!-- Hero Carousel Section -->
    <div class="hero-section">
      <div class="carousel-container">
        <div class="carousel">
          <div class="carousel-slide" v-for="(slide, index) in slides" :key="index"
            :class="{ active: currentSlide === index }">
            <img :src="slide.image" :alt="slide.title" class="slide-image">
          </div>
        </div>
        <div class="carousel-dots">
          <span v-for="(slide, index) in slides" :key="index" :class="{ active: currentSlide === index }"
            @click="handleSlideClick(index)" class="dot"></span>
        </div>
      </div>
    </div>

    <!-- Cards Section -->
    <div class="cards-section">
      <div class="cards-container">
        <div class="card" v-for="(card, index) in cards" :key="index">
          <div class="card-image">
            <img :src="card.image" :alt="card.title">
          </div>
          <div class="card-content">
            <p>{{ card.title }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- About Section -->
    <div class="about-section">
      <div class="about-container">
        <div class="about-text">
          <p class="about-title">William Wei</p>
          <p class="about-desc">
            I divide my time between modeling for my family’s clothing line and performing in the school theater.
            Modeling taught me discipline—how to make a single frozen moment look natural—while acting showed that the
            most
            powerful moments are often unscripted.
            <br>
            This understanding shapes how I approach challenges. Forgetting a
            line no longer feels like failure; it’s a chance to listen, adapt, and find a new way forward. I practice
            this
            mindset at the piano, improvising around jazz melodies to create something unexpected.
            <br>
            Watching my mom build her business shaped how I face challenges. Our living room, filled with fabrics and
            prototypes, was her
            workshop. I saw her juggle calls, sketches, and problem-solving with calm focus. She never wait for a
            perfect
            plan. She just started and learned along the way. From her, I learned to begin where I am, use what I have,
            and trust that progress builds the path.
          </p>
        </div>
        <div class="about-carousel">
          <div class="about-carousel-container">
            <div class="about-carousel-slide" v-for="(image, index) in aboutImages" :key="index"
              :class="{ active: currentAboutSlide === index }">
              <img :src="image" :alt="'William ' + (index + 1)">
            </div>
          </div>
          <!-- <button class="carousel-arrow carousel-arrow-right" @click="nextAboutSlide">❯</button> -->
          <div class="about-carousel-dots">
            <span v-for="(image, index) in aboutImages" :key="index" :class="{ active: currentAboutSlide === index }"
              @click="handleAboutSlideClick(index)" class="about-dot"></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      currentSlide: 0,
      currentAboutSlide: 0,
      isTransitioning: false,
      slideTimer: null,
      aboutSlideTimer: null,
      slides: [
        {
          title: "I'm William",
          image: '/tab1/1.webp'
        },
        {
          title: "I'm William",
          image: '/tab1/2.webp'
        },
        {
          title: "I'm William",
          image: '/tab1/3.webp'
        }
      ],
      aboutImages: [
        '/tab1/10.webp',
        '/tab1/11.webp',
        '/tab1/12.webp',
        '/tab1/7.webp',
        '/tab1/8.webp',
        '/tab1/9.webp'
      ],
      cards: [
        {
          title: 'William and Beta',
          image: '/tab1/4.webp'
        },
        {
          title: 'Operation Smile',
          image: '/tab1/5.webp'
        },
        {
          title: 'University of Southern California Cinematic Arts Summer Program',
          image: '/tab1/6.webp'
        }
      ]
    }
  },
  methods: {
    nextAboutSlide() {
      if (this.isTransitioning) return
      this.isTransitioning = true
      this.currentAboutSlide = (this.currentAboutSlide + 1) % this.aboutImages.length

      setTimeout(() => {
        this.isTransitioning = false
      }, 500)
    },
    handleSlideClick(index) {
      this.currentSlide = index
      this.resetSlideTimer()
    },
    handleAboutSlideClick(index) {
      this.currentAboutSlide = index
      this.resetAboutSlideTimer()
    },
    resetSlideTimer() {
      if (this.slideTimer) {
        clearInterval(this.slideTimer)
      }
      this.slideTimer = setInterval(() => {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length
      }, 3000)
    },
    resetAboutSlideTimer() {
      if (this.aboutSlideTimer) {
        clearInterval(this.aboutSlideTimer)
      }
      this.aboutSlideTimer = setInterval(() => {
        this.nextAboutSlide()
      }, 3000)
    }
  },
  mounted() {
    // Auto-rotate carousel every 3 seconds
    this.slideTimer = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length
    }, 3000)
    // Auto-rotate about carousel every 3 seconds
    this.aboutSlideTimer = setInterval(() => {
      this.nextAboutSlide()
    }, 3000)
  },
  beforeUnmount() {
    // 清理计时器
    if (this.slideTimer) {
      clearInterval(this.slideTimer)
    }
    if (this.aboutSlideTimer) {
      clearInterval(this.aboutSlideTimer)
    }
  }
}
</script>

<style scoped>
.home {
  width: 100%;
}

/* Hero Carousel Section */
.hero-section {
  width: 100%;
  margin-bottom: 142px;
}

.carousel-container {
  position: relative;
  width: 100%;
  background-color: #e8e8e8;
  overflow: hidden;
}

.carousel {
  position: relative;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  background-color: #f0f0f0;
}

.carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-slide.active {
  opacity: 1;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-dots {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 16px;
  z-index: 10;
}

.dot {
  width: 16px;
  height: 16px;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 50%;
}

.dot.active {
  background-color: rgba(255, 255, 255, 0.9);
}

/* Cards Section */
.cards-section {
  width: 100%;
  margin-bottom: 185px;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.card {
  background-color: white;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.card-image {
  width: 100%;
  overflow: hidden;
  background-color: #f0f0f0;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  padding: 1.5rem;
}

.card-content p {
  font-size: 20px;
  color: #666;
  font-weight: 500;
  margin: 0;
}

/* About Section */
.about-section {
  width: 100%;
}

.about-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 120px;
  align-items: center;
}

.about-text .about-title {
  font-family: Roboto;
  font-weight: 400;
  font-size: 48px;
  color: #434343;
  line-height: 48px;
  text-align: left;
  font-style: normal;
  text-transform: none;
  margin-bottom: 64px;
}

.about-text p {
  font-family: Roboto;
  font-weight: 400;
  font-size: 20px;
  color: #434343;
  line-height: 48px;
  text-align: left;
  font-style: normal;
  text-transform: none;
}

.about-carousel {
  position: relative;
  width: 100%;
  background-color: #f0f0f0;
  overflow: hidden;
}

.about-carousel-container {
  position: relative;
  width: 100%;
  height: auto;
  background-color: #f0f0f0;
}

.about-carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-carousel-slide.active {
  position: relative;
  opacity: 1;
}

.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  font-size: 20px;
  cursor: pointer;
  z-index: 5;
  transition: background-color 0.3s ease;
}

.carousel-arrow:hover {
  background-color: rgba(0, 0, 0, 0.5);
}

.carousel-arrow-left {
  left: 1rem;
}

.carousel-arrow-right {
  right: 1rem;
}

.about-carousel-slide img {
  width: 100%;
  height: auto;
  display: block;
}

.about-carousel-dots {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 16px;
  z-index: 10;
}

.about-dot {
  width: 16px;
  height: 16px;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 50%;
}

.about-dot.active {
  background-color: rgba(255, 255, 255, 0.9);
}
</style>
