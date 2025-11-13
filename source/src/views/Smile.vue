<template>
  <div class="smile">
    <section class="section-1">
      <div class="section-container">
        <div class="text-content">
          <h2>Cleft lip/palate: a concise overview</h2>
          <p>Cleft lip and/or palate (CL/P) is a common congenital condition, occurring in about 1 in 600-800 births,
            with higher prevalence in Asia. It results from disrupted facial fusion in early embryonic development.
            Clinically, it is classified as cleft lip (CL), cleft palate (CP), or both (CLP)—the most common), with
            severity graded from I (mild) to III (complete cleft).</p>
          <p>Affected infants often face feeding difficulties. Untreated, this can lead to speech impairments, ear
            infections, and dental problems. The visible difference also carries significant psychosocial challenges.
            Management requires lifelong, multidisciplinary care. This includes staged surgeries, speech therapy,
            orthodontics, and psychosocial support to optimize function, appearance, and social integration.</p>
        </div>
        <div class="carousel-content">
          <div class="carousel-wrapper">
            <div class="carousel-container">
              <div class="carousel-slide" v-for="(image, index) in carouselImages" :key="index"
                :class="{ active: currentCarouselSlide === index }">
                <img :src="image" :alt="'Carousel ' + (index + 1)">
              </div>
            </div>
            <div class="carousel-dots">
              <span v-for="(image, index) in carouselImages" :key="index"
                :class="{ active: currentCarouselSlide === index }" @click="handleCarouselClick(index)"
                class="dot"></span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-2">
      <div class="section-container section-other-container">
        <div class="smile-logo">
          <img src="/tab3/6.webp" alt="Operation Smile">
        </div>
        <div class="smile-content">
          <h2>Operation Smile</h2>
          <p>"Operation Smile" in China is a charitable program dedicated to providing free surgical procedures for
            children with cleft lip and palate from impoverished Chinese families. Originating from the international
            medical charity Operation Smile founded in the United States in 1982, it was introduced to China by Dr. Hai
            Kai in 1990 and has since evolved into a mature localized initiative with distinctive Chinese
            characteristics.
            <br>
            The program mobilizes domestic medical volunteers to serve in remote regions while utilizing the charity
            hospital in Hangzhou as its surgical base to perform free corrective surgeries for affected children. Its
            core strength lies in this highly localized and sustainable operational model.
            <br>
            By the end of 2024, Operation Smile China had provided life-changing treatment to nearly 50,000 children,
            extending its healing mission across 31 provinces, autonomous regions, and municipalities nationwide. The
            transformative power of a single surgery, often lasting just a few hours, not only restores facial
            appearances but also returns children's fundamental right to smile, rebuilding their confidence and
            ultimately reshaping the destinies of tens of thousands of families.
          </p>
        </div>
      </div>
    </section>

    <section class="section-3">
      <div class="section-container section-other-container">
        <div class="text-content">
          <h2>From a silent world to a smiling future</h2>
          <p>This is a true story of silence, waiting, and rebirth. Xiao Feng, a young girl with a complex congenital
            cleft lip and palate, was trapped in a silent world. Her severe facial deformity repeatedly closed the door
            to surgery—not only due to poverty but also because her condition was too complex for most charitable
            medical missions to handle under their regular programs.
            <br>
            Just as hope was nearly lost, the "Smile Guardian Team," together with medical experts, opened a door to
            hope for her. Through targeted fundraising and medical coordination, Xiao Feng finally underwent successful
            surgery in Guangzhou.
            <br>
            This film witnesses how a girl overcame immense physical challenges and external rejection, and—guarded by
            love and expertise—finally learned to embrace a future filled with smiles.
          </p>
        </div>
        <div class="video-content">
          <div class="video-wrapper" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
            <video ref="videoPlayer" width="100%" height="100%" poster="/tab3/video-thumbnail.webp">
              <source src="/tab3/video.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
            <!-- 中间播放/暂停按钮 -->
            <button class="center-play-button" :class="{ show: showCenterButton }" @click="togglePlay">
              <svg v-if="!isPlaying" width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
              <svg v-else width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            </button>
            <!-- 底部控制条 -->
            <div class="video-controls" :class="{ show: showControls }">
              <div class="progress-bar-container">
                <div class="progress-bar" ref="progressBar" @click="handleProgressClick">
                  <div class="progress-fill" :style="{ width: progressPercent + '%' }"></div>
                  <div class="progress-handle" :style="{ left: progressPercent + '%' }" @mousedown="startDragging">
                  </div>
                </div>
              </div>
              <div class="controls-bottom">
                <!-- <button class="play-button" @click="togglePlay">
                  <svg v-if="!isPlaying" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                  </svg>
                </button> -->
                <span class="time-display">
                  <span>{{ currentTime }}</span>
                  <span>{{ duration }}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-4">
      <div class="section-container">
        <h2>William's involvement with Operation Smile</h2>
        <div class="carousel-grid">
          <div class="carousel-item">
            <div class="carousel-wrapper">
              <div class="carousel-container">
                <div class="carousel-slide" v-for="(image, index) in williamCarousel1" :key="index"
                  :class="{ active: currentWilliamSlide1 === index }">
                  <img :src="image" :alt="'William Carousel 1 ' + (index + 1)">
                </div>
              </div>
              <div class="carousel-dots">
                <span v-for="(image, index) in williamCarousel1" :key="index"
                  :class="{ active: currentWilliamSlide1 === index }" @click="handleWilliamSlide1Click(index)"
                  class="dot"></span>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="carousel-wrapper">
              <div class="carousel-container">
                <div class="carousel-slide" v-for="(image, index) in williamCarousel2" :key="index"
                  :class="{ active: currentWilliamSlide2 === index }">
                  <img :src="image" :alt="'William Carousel 2 ' + (index + 1)">
                </div>
              </div>
              <div class="carousel-dots">
                <span v-for="(image, index) in williamCarousel2" :key="index"
                  :class="{ active: currentWilliamSlide2 === index }" @click="handleWilliamSlide2Click(index)"
                  class="dot"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 5: Collaboration -->
    <section class="section-5">
      <div class="section-container">
        <h2>Collaboration between Operation Smile and William&Beta</h2>
        <ul class="collaboration-list">
          <li>Designed and produced an exclusive co-branded T-shirt for Operation Smile, generating over ¥70,000 in
            sales and donating ¥40,000 in profits to the organization.</li>
          <li>Initiated a Weibo campaign under the theme of the Mother's Smile Initiative, attracting over 9.02 million
            views and over 12,000 discussions, substantially enhancing public awareness and engagement with Operation
            Smile.</li>
          <li>Collaborated with Sina in the #Baby Growth Protection Plan#, achieving an extensive social media reach of
            9.91 billion views and 12.18 million discussions, further amplifying the campaign's impact.</li>
        </ul>
        <div class="full-image-wrapper">
          <img src="/tab3/15.webp" alt="Collaboration">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Smile',
  data() {
    return {
      currentCarouselSlide: 0,
      carouselTimer: null,
      williamTimer: null,
      carouselImages: [
        '/tab3/1.webp',
        '/tab3/2.webp',
        '/tab3/3.webp',
        '/tab3/4.webp',
        '/tab3/5.webp'
      ],
      currentWilliamSlide1: 0,
      williamCarousel1: [
        '/tab3/7.webp',
        '/tab3/8.webp',
        '/tab3/9.webp',
        '/tab3/10.webp'
      ],
      currentWilliamSlide2: 0,
      williamCarousel2: [
        '/tab3/11.webp',
        '/tab3/12.webp',
        '/tab3/13.webp',
        '/tab3/14.webp'
      ],
      isPlaying: false,
      currentTime: '0:00',
      duration: '0:00',
      progressPercent: 0,
      isDragging: false,
      showControls: false,
      showCenterButton: false,
      hideControlsTimer: null
    }
  },
  methods: {
    nextCarouselSlide() {
      this.currentCarouselSlide = (this.currentCarouselSlide + 1) % this.carouselImages.length
    },
    nextWilliamSlide1() {
      this.currentWilliamSlide1 = (this.currentWilliamSlide1 + 1) % this.williamCarousel1.length
    },
    nextWilliamSlide2() {
      this.currentWilliamSlide2 = (this.currentWilliamSlide2 + 1) % this.williamCarousel2.length
    },
    togglePlay() {
      const video = this.$refs.videoPlayer
      if (this.isPlaying) {
        video.pause()
      } else {
        video.play()
      }
      this.isPlaying = !this.isPlaying
    },
    formatTime(seconds) {
      if (!seconds || isNaN(seconds)) return '0:00'
      const mins = Math.floor(seconds / 60)
      const secs = Math.floor(seconds % 60)
      return `${mins}:${secs < 10 ? '0' : ''}${secs}`
    },
    updateProgress() {
      const video = this.$refs.videoPlayer
      if (video && video.duration) {
        this.progressPercent = (video.currentTime / video.duration) * 100
        this.currentTime = this.formatTime(video.currentTime)
        this.duration = this.formatTime(video.duration)
      }
    },
    handleProgressClick(e) {
      const video = this.$refs.videoPlayer
      const progressBar = this.$refs.progressBar
      const rect = progressBar.getBoundingClientRect()
      const percent = (e.clientX - rect.left) / rect.width
      video.currentTime = percent * video.duration
    },
    startDragging() {
      this.isDragging = true
      document.addEventListener('mousemove', this.onDrag)
      document.addEventListener('mouseup', this.stopDragging)
    },
    onDrag(e) {
      if (!this.isDragging) return
      const video = this.$refs.videoPlayer
      const progressBar = this.$refs.progressBar
      const rect = progressBar.getBoundingClientRect()
      const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
      video.currentTime = percent * video.duration
    },
    stopDragging() {
      this.isDragging = false
      document.removeEventListener('mousemove', this.onDrag)
      document.removeEventListener('mouseup', this.stopDragging)
    },
    handleMouseMove() {
      this.showControls = true
      this.showCenterButton = true

      // 清除之前的定时器
      if (this.hideControlsTimer) {
        clearTimeout(this.hideControlsTimer)
      }

      // 3秒后隐藏控制条
      this.hideControlsTimer = setTimeout(() => {
        this.showControls = false
        this.showCenterButton = false
      }, 3000)
    },
    handleMouseLeave() {
      this.showControls = false
      this.showCenterButton = false
      if (this.hideControlsTimer) {
        clearTimeout(this.hideControlsTimer)
      }
    },
    handleCarouselClick(index) {
      this.currentCarouselSlide = index
      this.resetCarouselTimer()
    },
    handleWilliamSlide1Click(index) {
      this.currentWilliamSlide1 = index
      this.resetWilliamTimer()
    },
    handleWilliamSlide2Click(index) {
      this.currentWilliamSlide2 = index
      this.resetWilliamTimer()
    },
    resetCarouselTimer() {
      if (this.carouselTimer) {
        clearInterval(this.carouselTimer)
      }
      this.carouselTimer = setInterval(() => {
        this.nextCarouselSlide()
      }, 3000)
    },
    resetWilliamTimer() {
      if (this.williamTimer) {
        clearInterval(this.williamTimer)
      }
      this.williamTimer = setInterval(() => {
        this.nextWilliamSlide1()
        this.nextWilliamSlide2()
      }, 3000)
    }
  },
  mounted() {
    // Auto-rotate carousel every 3 seconds
    this.carouselTimer = setInterval(() => {
      this.nextCarouselSlide()
    }, 3000)
    this.williamTimer = setInterval(() => {
      this.nextWilliamSlide1()
      this.nextWilliamSlide2()
    }, 3000)

    // Video event listeners
    const video = this.$refs.videoPlayer
    if (video) {
      video.addEventListener('play', () => {
        this.isPlaying = true
      })
      video.addEventListener('pause', () => {
        this.isPlaying = false
      })
      video.addEventListener('timeupdate', this.updateProgress)
      video.addEventListener('loadedmetadata', () => {
        this.duration = this.formatTime(video.duration)
      })
    }
  },
  beforeUnmount() {
    // 清理计时器
    if (this.carouselTimer) {
      clearInterval(this.carouselTimer)
    }
    if (this.williamTimer) {
      clearInterval(this.williamTimer)
    }
    
    const video = this.$refs.videoPlayer
    if (video) {
      video.removeEventListener('timeupdate', this.updateProgress)
    }
  }
}
</script>

<style scoped>
.smile {
  width: 100%;
}

/* Section 1: Cleft lip/palate overview */
.section-1 {
  width: 100%;
}

.section-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  align-items: center;
}

.text-content h2 {
  font-family: Roboto;
  font-weight: 400;
  font-size: 48px;
  color: #4A4A4A;
  line-height: 72px;
  text-align: left;
  margin-bottom: 40px;
}

.text-content p {
  font-family: Roboto;
  font-weight: 400;
  font-size: 24px;
  color: #666666;
  line-height: 36px;
  text-align: left;
  font-style: normal;
  text-transform: none;

}

/* Carousel */
.carousel-content {
  position: relative;
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  padding: 60px;
  background: #DEDBD6;
  width: 720px;
}

.carousel-container {
  position: relative;
  width: 100%;
  height: 400px;
  background-color: #f0f0f0;
  overflow: hidden;
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

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.8rem;
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

.section-2 {
  width: 100%;
  padding: 120px 0;
}

.section-2 .section-container {
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  align-items: center;
}

.section-other-container {
  gap: 80px !important;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.smile-logo {
  width: 726px;
  height: 726px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.smile-logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.smile-content h2 {
  font-family: Roboto;
  font-weight: 400;
  font-size: 48px;
  color: #4A4A4A;
  line-height: 72px;
  text-align: left;
  margin-bottom: 40px;
}

.smile-content p {
  font-family: Roboto;
  font-weight: 400;
  font-size: 24px;
  color: #666666;
  line-height: 36px;
  text-align: left;
  font-style: normal;
  text-transform: none;
}

/* Section 3: From a silent world */
.section-3 {
  background: #DEDBD6;
  width: 1920px;
  padding: 120px 240px;
  margin-left: -240px;
}

.section-3 .section-container {
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  align-items: center;
}

/* Video */
.video-content {
  position: relative;
}

.video-wrapper {
  position: relative;
  overflow: hidden;
  width: 800px;
  height: 600px;
  background-color: #000;
}

.video-wrapper video {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.center-play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 15;
  opacity: 0;
  transition: all 0.3s ease;
  color: #333;
}

.center-play-button.show {
  opacity: 1;
}

.center-play-button:hover {
  background: white;
  transform: translate(-50%, -50%) scale(1.1);
}

.center-play-button svg {
  width: 50px;
  height: 50px;
}

.video-controls {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  padding: 40px 20px 20px 20px;
  z-index: 10;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.video-controls.show {
  opacity: 1;
  pointer-events: auto;
}

.progress-bar-container {
  margin-bottom: 15px;
}

.progress-bar {
  width: 100%;
  height: 6px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
  cursor: pointer;
  position: relative;
  transition: height 0.2s;
}

.progress-bar:hover {
  height: 8px;
}

.progress-fill {
  height: 100%;
  background-color: #FF4444;
  border-radius: 3px;
  transition: width 0.1s linear;
}

.progress-handle {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 14px;
  height: 14px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  cursor: grab;
  opacity: 0;
  transition: opacity 0.2s;
}

.progress-bar:hover .progress-handle {
  opacity: 1;
}

.controls-bottom {
  display: flex;
  align-items: center;
  gap: 15px;
}

.play-button {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
}

.play-button:hover {
  transform: scale(1.1);
}

.play-button svg {
  width: 28px;
  height: 28px;
}

.time-display {
  color: white;
  font-family: 'Courier New', monospace;
  min-width: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}

/* Section 4: William's involvement */
.section-4 {
  width: 100%;
  padding: 240px 0 190px 0;
}

.section-4 .section-container {
  display: block;
}

.section-4 h2 {
  font-family: Roboto;
  font-weight: 400;
  font-size: 48px;
  color: #4A4A4A;
  line-height: 72px;
  text-align: center;
  margin-bottom: 80px;
}

.carousel-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  margin-bottom: 80px;
}

.carousel-item {
  position: relative;
}

.carousel-item .carousel-wrapper {
  padding: 0;
  background: transparent;
  width: 100%;
}

.carousel-item .carousel-container {
  height: 509px;
}

/* Section 5: Collaboration */
.section-5 {
  width: 100%;
  padding: 120px 0;
}

.section-5 .section-container {
  display: block;
}

.section-5 h2 {
  font-family: Roboto;
  font-weight: 400;
  font-size: 48px;
  color: #4A4A4A;
  line-height: 72px;
  text-align: left;
  margin-bottom: 40px;
}

.collaboration-list {
  padding-left: 20px;
  margin-bottom: 60px;
}

.collaboration-list li {
  font-family: Roboto;
  font-weight: 400;
  font-size: 24px;
  color: #666666;
  line-height: 36px;
  text-align: left;
  font-style: normal;
  text-transform: none;
  margin-bottom: 30px;
}

.full-image-wrapper {
  width: 100%;
  overflow: hidden;
  margin-top: 80px;
}

.full-image-wrapper img {
  width: 100%;
  height: auto;
  display: block;
}
</style>
