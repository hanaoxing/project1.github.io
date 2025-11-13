<template>
  <section class="beta">
    <div class="beta-content">
      <p class="beta-title">William and Beta <br> the story written in my name</p>
      <p class="beta-desc">Some people's names carry the history of their families, while my name represents the
        starting point of my mother's career and the original intention of her love. My name is William, and my brother
        is Beta. From the moment we are born, our stories are inseparable from the brand world created by our mother. It
        is not only her career, but also a part of our family life, the most familiar background in my growth.</p>
    </div>

    <div class="hero-section">
      <div class="hero-container">
        <div class="hero-carousel">
          <div class="hero-carousel-container">
            <div class="hero-carousel-slide" v-for="(image, index) in heroImages" :key="index"
              :class="{ active: currentHeroSlide === index }">
              <img :src="image" :alt="'Hero ' + (index + 1)">
            </div>
          </div>
          <div class="hero-carousel-dots">
            <span v-for="(image, index) in heroImages" :key="index" :class="{ active: currentHeroSlide === index }"
              @click="handleHeroSlideClick(index)" class="hero-dot"></span>
          </div>
        </div>
        <div class="hero-text">
          <h1>The starting point of a brand: love In its name</h1>
          <p>
            The brand's philosophy of "entrusting aesthetic appreciation to children" is first and foremost reality of
            my and Beta's growth. Mother believes that true aesthetic education comes from trust and letting go. This
            belief stems from her most direct observation and love as a mother.
            <br><br>
            The soul of the brand is my mother -
            everyone calls her "Apple". Online, she is a mother and baby blogger with over 2 million followers and has
            won prestigious awards such as "The Most Influential Parenting Influencer on Weibo". But in Beta's and my
            hearts, her most important identity will always be our mother.
            <br><br>
            The birth of a brand originated from the
            simplest wish of a mother. She often says, "When I do product development, I only play one role in my heart
            - the mother of the child." So, Beta and I naturally became the "Chief Experience Officers" of the brand.
            Whether the fabric of the clothes is comfortable, whether the style is convenient for us to move around, and
            whether we really like the design - our most direct reactions are the primary basis for her to refine the
            products. The brand William&Beta has never been a distant business plan from the very beginning. Instead, it
            is built on our daily lives and the motherly love written in our names.
          </p>
        </div>
      </div>
    </div>

    <div class="hero-section">
      <div class="hero-container">
        <div class="hero-text">
          <h1>My role: growing up under the lens</h1>
          <p>
            If running a brand is my mother's career, then becoming her model is my "homework". From my passive
            appearance on camera when I couldn't remember to my conscious cooperation in front of the camera later on,
            almost every stage of my growth has been recorded in the tens of thousands of photos and videos on my
            mother's Weibo.
            <br><br>
            I was the first-generation model of William & Beta and also the one with the longest tenure.
            My mother's camera captured the baby pants I wore when I was just learning to walk, the expression on my
            face when I carried my small schoolbag on my first day at kindergarten, and countless moments when I played
            and studied with Beta. These images are not only records of the brand, but also like a thick photo album,
            documenting how I grew up day by day.
            <br><br>
            This process is not just about "taking photos". It taught me to
            express myself in cooperation and I also began to try to understand the message my mother wanted to convey
            behind each visual story. When I saw that the photos shared by my mother could receive so many warm likes
            and comments, I personally felt the wonderful power that sincere sharing can bring, which connects people
            together. This experience of growing up amid the sound of shutters made me understand earlier than my peers
            why genuine sharing can touch people's hearts.
          </p>
        </div>
        <div class="hero-carousel height">
          <div class="hero-carousel-container height">
            <div class="hero-carousel-slide" v-for="(image, index) in heroImages2" :key="index"
              :class="{ active: currentHeroSlide2 === index }">
              <img class="height" :src="image" :alt="'Hero ' + (index + 1)">
            </div>
          </div>
          <div class="hero-carousel-dots">
            <span v-for="(image, index) in heroImages2" :key="index" :class="{ active: currentHeroSlide2 === index }"
              @click="handleHeroSlideClick2(index)" class="hero-dot"></span>
          </div>
        </div>
      </div>
    </div>

    <div class="hero-section">
      <div class="hero-container">
        <div class="hero-carousel height">
          <div class="hero-carousel-container height">
            <div class="hero-carousel-slide" v-for="(image, index) in heroImages3" :key="index"
              :class="{ active: currentHeroSlide3 === index }">
              <img class="height" :src="image" :alt="'Hero ' + (index + 1)">
            </div>
          </div>
          <div class="hero-carousel-dots">
            <span v-for="(image, index) in heroImages3" :key="index" :class="{ active: currentHeroSlide3 === index }"
              @click="handleHeroSlideClick3(index)" class="hero-dot"></span>
          </div>
        </div>
        <div class="hero-text">
          <h1>The power of media: an experienced brand journey</h1>
          <p>
            I have witnessed how my mother gradually expanded her personal influence into a renowned brand.
            <br><br>
            As a top
            Parenting blogger on Weibo, her sincerity and professionalism serve as a bridge of trust between brands and
            users. The William&Beta brand itself is also growing rapidly. Its Tmall store has ranked among the top ten
            in the children's clothing category. Through cooperation with many influencers, its new media matrix has
            achieved an annual GMV of over ten million yuan, with particularly rapid growth on the Douyin platform.
            <br><br>
            I
            have also personally participated in many large-scale events of brands, such as the fashion show at Aranya.
            That was not only a show but also a successful content event. The topic it brought, # How good-looking can
            the clothes of this generation of kids be #, received tens of millions of views and made it to the top of
            Weibo's trending list.This made me realize how powerful a good idea can be
            <br><br>
            It can be said that William&Beta
            is a brand that has grown out of social media, and I am fortunate to have been one of its earliest witnesses
            and participants.
          </p>
        </div>
      </div>
    </div>

    <div class="hero-section">
      <div class="hero-container">
        <div class="hero-text">
          <h1>Inheritance and prospect: the wealth I have reaped</h1>
          <p>
            Looking back, growing up with William & Beta is a unique asset in my life.
            <br><br>From the opening of its first store in Gaode Land, Guangzhou, I have witnessed its expansion into
            the core business districts of cities like Beijing, Shanghai and Zhuhai. In 2024, its annual turnover
            exceeded 100 million yuan, and the repurchase rate of its offline stores was as high as 93%. To me, these
            figures are not just business concepts, but the fruits of a passion and persistence that I have witnessed
            with my own eyes.
            <br><br>
            More importantly, through William & Beta, my mother showed me the greater value that a
            brand can carry. Whether it was donating the "Future Classroom" to Liangshan, Sichuan, raising funds for the
            Operation Smile, or donating supplies to the earthquake-stricken areas in Turkey, all these have made me
            deeply understand that the success of a brand ultimately lies in its ability to truly help others and bring
            a little more warmth to society.
          </p>
        </div>
        <div class="hero-carousel height">
          <div class="hero-carousel-container height">
            <div class="hero-carousel-slide" v-for="(image, index) in heroImages4" :key="index"
              :class="{ active: currentHeroSlide4 === index }">
              <img class="height" :src="image" :alt="'Hero ' + (index + 1)">
            </div>
          </div>
          <div class="hero-carousel-dots">
            <span v-for="(image, index) in heroImages4" :key="index" :class="{ active: currentHeroSlide4 === index }"
              @click="handleHeroSlideClick4(index)" class="hero-dot"></span>
          </div>
        </div>
      </div>
    </div>

    <div class="beta-bottom-text">
      This experience deeply influenced me. What it has taught me is not only the knowledge of aesthetics and
      communication, but also how to turn love for one's own family into a career that can go further and take care of
      more people. This is the most precious thing that I am preparing to bring into college and into my future life.
      <br><br>
      William & Beta is the backdrop of my story and a part of my identity. It's about family, about love, and also
      about how a child can learn and understand how to grow up in the world created by a mother with love and courage
    </div>
  </section>
</template>

<script>
export default {
  name: 'Beta',
  data() {
    return {
      currentHeroSlide: 0,
      currentHeroSlide2: 0,
      currentHeroSlide3: 0,
      currentHeroSlide4: 0,
      heroTimer: null,
      heroImages: [
        '/tab2/one/2.webp',
        '/tab2/one/1.webp',
        '/tab2/one/3.webp',
        '/tab2/one/4.webp',
        '/tab2/one/5.webp',
        '/tab2/one/6.webp',
        '/tab2/one/7.webp',
        '/tab2/one/8.webp',
      ],
      heroImages2: [
        '/tab2/two/5.webp',
        '/tab2/two/4.webp',
        '/tab2/two/6.webp',
        '/tab2/two/7.webp',
        '/tab2/two/3.webp',
        '/tab2/two/1.webp',
        '/tab2/two/2.webp',
      ],
      heroImages3: [
        '/tab2/three/1.webp',
        '/tab2/three/2.webp',
        '/tab2/three/3.webp',
        '/tab2/three/4.webp',
      ],
      heroImages4: [
        '/tab2/four/1.webp',
        '/tab2/four/2.webp',
        '/tab2/four/3.webp',
        '/tab2/four/4.webp',
        '/tab2/four/5.webp',
        '/tab2/four/6.webp',
        '/tab2/four/7.webp',
        '/tab2/four/8.webp',
        '/tab2/four/9.webp',
        '/tab2/four/10.webp',
      ]
    }
  },
  methods: {
    nextHeroSlide() {
      this.currentHeroSlide = (this.currentHeroSlide + 1) % this.heroImages.length
      this.currentHeroSlide2 = (this.currentHeroSlide2 + 1) % this.heroImages2.length
      this.currentHeroSlide3 = (this.currentHeroSlide3 + 1) % this.heroImages3.length
      this.currentHeroSlide4 = (this.currentHeroSlide4 + 1) % this.heroImages4.length
    },
    handleHeroSlideClick(index) {
      this.currentHeroSlide = index
      this.resetHeroTimer()
    },
    handleHeroSlideClick2(index) {
      this.currentHeroSlide2 = index
      this.resetHeroTimer()
    },
    handleHeroSlideClick3(index) {
      this.currentHeroSlide3 = index
      this.resetHeroTimer()
    },
    handleHeroSlideClick4(index) {
      this.currentHeroSlide4 = index
      this.resetHeroTimer()
    },
    resetHeroTimer() {
      if (this.heroTimer) {
        clearInterval(this.heroTimer)
      }
      this.heroTimer = setInterval(() => {
        this.nextHeroSlide()
      }, 3000)
    }
  },
  mounted() {
    // Auto-rotate hero carousel every 3 seconds
    this.heroTimer = setInterval(() => {
      this.nextHeroSlide()
    }, 3000)
  },
  beforeUnmount() {
    // 清理计时器
    if (this.heroTimer) {
      clearInterval(this.heroTimer)
    }
  }
}
</script>

<style scoped>
.beta {
  width: 100%;
}

.beta-content {}

.beta-title {
  font-family: Roboto;
  font-weight: 400;
  font-size: 48px;
  color: #4A4A4A;
  line-height: 72px;
  text-align: left;
  font-style: normal;
  text-transform: none;
  width: 652px;
}

.beta-desc {
  font-family: Roboto;
  font-weight: 400;
  font-size: 20px;
  color: #666666;
  line-height: 48px;
  text-align: left;
  font-style: normal;
  text-transform: none;
  margin-top: 40px;
}

/* Hero Section */
.hero-section {
  width: 100%;
  margin-top: 220px;
}

.hero-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  align-items: center;
}

.hero-text h1 {
  font-family: Roboto;
  font-weight: 400;
  font-size: 48px;
  color: #4A4A4A;
  line-height: 72px;
  text-align: left;
  font-style: normal;
  text-transform: none;
  margin-bottom: 40px;
}

.hero-text p {
  font-family: Roboto;
  font-weight: 400;
  font-size: 20px;
  color: #666666;
  line-height: 36px;
  text-align: left;
  font-style: normal;
  text-transform: none;
}

.hero-carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
  width: 800px;
  height: 800px;
}

.hero-carousel.height {
  height: 1040px;
  width: 693px;
}

.hero-carousel-container {
  position: relative;
  width: 800px;
  height: 800px;
  background: #E9E5DE;
}

.hero-carousel-container.height {
  width: 693px;
  height: 1040px;
}

.hero-carousel-slide {
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

.hero-carousel-slide.active {
  opacity: 1;
}

.hero-carousel-slide img {
  width: 800px;
  height: 800px;
  object-fit: cover;
  display: block;
}

.hero-carousel-slide img.height {
  width: 693px;
  height: 1040px;
}

.hero-carousel-dots {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 18px;
  z-index: 10;
}

.hero-dot {
  width: 16px;
  height: 16px;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 50%;
}

.hero-dot.active {
  background-color: rgba(255, 255, 255, 0.9);
}

.beta-bottom-text {
  font-family: Roboto;
  font-weight: 400;
  font-size: 20px;
  color: #666666;
  line-height: 48px;
  text-align: left;
  font-style: normal;
  text-transform: none;
  margin-top: 268px;
}
</style>
