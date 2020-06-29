<template>
  <div id="app" :class="{'is-visible': isImagesLoaded}" v-images-loaded="imageLoaded">
    <div class="screen--first-wrapper" id="screen-first-wrapper">
      <div class="screen screen--first" id="screen-first">
        <div class="content" id="content"></div>
        <div class="full-block">
          <div class="descr">
            <img src="./assets/images/projects/first.jpg" alt="">
          </div>
        </div>
      </div>
    </div>

    <div class="screens-wrapper" id="screens-wrapper">
      <div class="screen--second-wrapper screen-wrapper" id="screen-second-wrapper" v-waypoint="{ active: true, callback: onWaypointSecondScreen }">
        <div class="screen screen--second" id="screen-second">
          <div class="header">
            <div class="project-1-wrap" 
            :style="{
              background: isAfterSecondScreen ? '#fbcd22' : 'transparent',
            }">
              <div class="content">
                <h1 v-show="!isAfterSecondScreen" class="h1 text-red">Некоммерческие работы</h1>
              </div>
              <div class="project-1-img-wrapper"
                :style="{
                  width: projectFirstWidth + 'px',
                  height: projectFirstHeight,
                  transform: 'translate3d(' + projectFirstLeft + 'px, ' + projectFirstTop + 'px, 0)'
                }">
                <img src="./assets/images/project-1.jpg">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="screen--third-wrapper screen-wrapper"
        id="screen-third-wrapper"
        v-waypoint="{ active: true, callback: onWaypointThirdScreen }">

        <div class="screen screen--third" id="screen-third">
          <img src="./assets/images/projects/toft-common.jpg" alt="">
        </div>
      </div>

      <div class="screen--forth-wrapper project-civilwar screen-wrapper" id="screen-forth-wrapper" v-waypoint="{ active: true, callback: onWaypointForthScreen }">
        <div class="screen screen--forth" id="screen-forth">
          <img src="./assets/images/projects/civilwar-common.jpg" alt="">
        </div>
      </div>

      <div class="screen--fifth-wrapper screen-real screen-wrapper" id="screen-fifth-wrapper" v-waypoint="{ active: true, callback: onWaypointFifthScreen }">
        <div class="screen screen--fifth" id="screen-fifth">
          <div class="header">
            <div class="project-5-wrap"
            :style="{
              background: isAfterFifthScreen ? '#5BC0BE' : 'transparent',
            }">
              <div class="content">
                <h1 v-show="!isAfterFifthScreen" class="h1 text-blue">Реальные проекты</h1>
              </div>
              <div class="project-5-img-wrapper"
                :style="{
                  width: projectFifthWidth + 'px',
                  height: projectFifthHeight,
                  transform: 'translate3d(' + projectFifthLeft + 'px, ' + projectFifthTop + 'px, 0)'
                }">
                <img src="./assets/images/projects/real-1.jpg">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="screen--6-wrapper project-real screen-wrapper" id="screen-6-wrapper" v-waypoint="{ active: true, callback: onWaypointFifthScreen }">
        <div class="screen screen--6" id="screen-6">
          <img src="./assets/images/projects/real-common.jpg" alt="">
        </div>
      </div>

      <div class="screen--7-wrapper project-rocket screen-wrapper" id="screen-7-wrapper" v-waypoint="{ active: true, callback: onWaypointFifthScreen }">
        <div class="screen screen--7" id="screen-7">
          <img src="./assets/images/projects/rocket-1.jpg" alt="">
        </div>
      </div>

      <div class="screen--8-wrapper project-rocket screen-wrapper" id="screen-8-wrapper" v-waypoint="{ active: true, callback: onWaypointFifthScreen }">
        <div class="screen screen--8" id="screen-8">
          <img src="./assets/images/projects/rocket-2.jpg" alt="">
        </div>
      </div>

      <div class="screen--9-wrapper project-rocket screen-wrapper" id="screen-9-wrapper" v-waypoint="{ active: true, callback: onWaypointFifthScreen }">
        <div class="screen screen--9" id="screen-9">
          <div class="content">
            <div class="description">
              <h2 class="h1">Свяжитесь со мной</h2>
              <div class="text">
                <div class="text-item">
                  <div class="text-label">по телефону:</div>
                  <div class="text-value">
                    <a href="tel:+77029742344" target="_blank">+7 702 974 23 44</a>
                  </div>
                </div>
                <div class="text-item">
                  <div class="text-label">по почте:</div>
                  <div class="text-value">
                    <a href="mailto:kad_aliya@list.ru" target="_blank">kad_aliya@list.ru</a>
                  </div>
                </div>
                <div class="text-item">
                  <div class="text-label">в телеграм:</div>
                  <div class="text-value">
                    <a href="https://t.me/aliyagas" target="_blank">aliyagas</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="persons-wrapper">
      <div class="persons-content">
        <div class="person-item"
          v-show="showPersonNumber === 1">
          <img src="./assets/images/person.svg" :style="firstPersonStyles">
        </div>

        <div class="person-item"
          v-show="showPersonNumber === 2 &&
          (
            percentSecondScreen < 100 || 
            (percentOfBeforeFifthScreenWrapperOut >= 85 &&
            percentOfBeforeFifthScreenWrapperOut <= 135)
          )">
          <img src="./assets/images/person-2.svg" :style="firstPersonStyles">
        </div>

        <div class="person-item" 
          v-show="showPersonNumber === 2 && 
          ((percentSecondScreen >= 100 &&
            percentOfBeforeFifthScreenWrapperOut < 85) ||
            percentOfBeforeFifthScreenWrapperOut > 135
          )">
          <img src="./assets/images/person-3.svg" :style="firstPersonStyles">
        </div>
      </div>
    </div>
<!-- 
    <div class="persons">
      <div class="person person--first"
        :style="{
          opacity: showPersonNumber === 1 ? 1 : 0,
          backgroundSize: personSize + '% auto',
          backgroundPosition: 'right ' + personPositionRight + 'px top ' + personPositionTop + 'px'
        }"></div>

      <div class="person person--second" v-show="percentSecondScreen < 100"
        :style="{
          opacity: showPersonNumber === 2 ? 1 : 0,
          backgroundSize: personSize + '% auto',
          backgroundPosition: 'right ' + personPositionRight + 'px top ' + personPositionTop + 'px'
        }"></div>

      <div class="person person--third" v-show="percentSecondScreen >= 100"
        :style="{
          opacity: showPersonNumber === 2 ? 1 : 0
        }"></div>
    </div> -->

    <div class="arrow" :style="arrowStyle">
      <svg width="55" height="37" viewBox="0 0 55 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50.375 5L27.5 27.875L4.625 5" stroke="currentColor" stroke-width="12"/>
      </svg>
    </div>
  </div>
</template>

<script>
import imagesLoaded from 'vue-images-loaded'
import VueScrollTo from 'vue-scrollto';

const FIRST_SCREEN_PERSON_MAX_SCALE = 3.68;
const FIRST_SCREEN_PERSON_HEAD_HEIGHT = 1060;
const ORIGINAL_PERSON_HEAD_HEIGHT = 298;
const FIRST_SCREEN_PERSON_TOP_POS = 45;

const PROJECT_FIRST_INITIAL_WIDTH = 852;

export default {
  name: 'App',
  components: {},
  directives: {
    imagesLoaded
  },
  data() {
    return {
      isImagesLoaded: false,

      percent: 0,
      percentSecondScreen: 0,
      personSize: 80,
      personPositionTop: -130,
      personPositionRight: -245,
      showPersonNumber: 2,
      tempHeightFirst: 0,
      tempHeightSecond: 0,
      secondScreenWay: 'out',

      projectFirstWidth: PROJECT_FIRST_INITIAL_WIDTH,
      projectFirstHeight: 'auto',
      projectFirstLeft: 0,
      projectFirstTop: 0,

      projectFifthWidth: PROJECT_FIRST_INITIAL_WIDTH,
      projectFifthHeight: 'auto',
      projectFifthLeft: 0,
      projectFifthTop: 0,

      isAfterSecondScreen: false,
      isAfterFifthScreen: false,

      fullpageOpts: {
        start: 0,
        dir: 'v',
        duration: 500
      },

      scrolledToThirdScreen: false,
      scrolledToForthScreen: false,

      st: 0,
      windowWidth: 0,
      windowHeight: 0,
      scrollDirection: 'down',

      $content: null,
      $contentWidth: 0,

      $firstScreen: null,
      $firstScreenHeight: 0,
      $firstScreenWrapper: null,
      $firstScreenWrapperHeight: 0,
      $secondScreen: null,
      $secondScreenHeight: 0,
      $secondScreenWrapper: null,
      $secondScreenWrapperHeight: 0,
      $thirdScreen: null,
      $thirdScreenHeight: 0,
      $thirdScreenWrapper: null,
      $thirdScreenWrapperHeight: 0,
      $forthScreen: null,
      $forthScreenHeight: 0,
      $forthScreenWrapper: null,
      $forthScreenWrapperHeight: 0,
      $fifthScreen: null,
      $fifthScreenHeight: 0,
      $fifthScreenWrapper: null,
      $fifthScreenWrapperHeight: 0,

      percentOfFirstScreen: 0,
      percentOfFirstScreenWrapperOut: 0,
      personScale: FIRST_SCREEN_PERSON_MAX_SCALE,

      percentThirdScreen: 0,

      isSecondScreenFixed: false,
      isThirdScreenFixed: false,

      arrowColor: '#fff',

      lastScrollProject: 0,
      percentOfBeforeFifthScreenWrapperOut: 0,
      percentFifthScreen: 0,
    }
  },
  computed: {
    firstPersonStyles() {
      return {
        transform: 'scale(' + this.personScale + ') translate3d(' + this.personPositionRight + 'px, ' + this.personPositionTop + 'px, 0)'
      }
    },
    arrowStyle() {
      return {
        color: `${this.arrowColor}`
      }
    }
  },
  watch: {
    tempHeightFirst() {
      this.showPersonNumber = this.showPersonNumber === 2 ? 1 : 2;
    }
  },
  methods: {
    checkArrowColor() {
      if (this.isBlockFullInContext(this.$firstScreenWrapper)) {
        this.arrowColor = '#fff';
      } else if (this.isBlockFullInContext(this.$secondScreenWrapper)) {
        this.arrowColor = '#EA2B1F';
      } else if (this.isBlockFullInContext(this.$fifthScreenWrapper)) {
        this.arrowColor = '#5BC0BE';
      } else {
        this.arrowColor = 'transparent';
      }
    },
    isBlockFullInContext(el) {
      if (!el || !el.offsetHeight) {
        return false;
      }
      return this.st >= el.offsetTop && this.st <= el.offsetTop + el.offsetHeight - this.windowHeight;
    },
    imageLoaded() {
      this.isImagesLoaded = true;
    },
    mountScreenSizes() {
      this.windowWidth = document.body.clientWidth || document.body.scrollWidth;
      this.windowHeight = window.innerHeight;

      this.$content = document.getElementById('content');
      this.$contentWidth = this.$content.offsetWidth;

      this.$firstScreen = document.getElementById('screen-first');
      this.$firstScreenHeight = this.$firstScreen.offsetHeight;
      this.$firstScreenWrapper = document.getElementById('screen-first-wrapper');
      this.$firstScreenWrapperHeight = this.$firstScreenWrapper.offsetHeight;

      this.$secondScreen = document.getElementById('screen-second');
      this.$secondScreenHeight = this.$secondScreen.offsetHeight;
      this.$secondScreenWrapper = document.getElementById('screen-second-wrapper');
      this.$secondScreenWrapperHeight = this.$secondScreenWrapper.offsetHeight;

      this.$thirdScreen = document.getElementById('screen-third');
      this.$thirdScreenHeight = this.$thirdScreen.offsetHeight;
      this.$thirdScreenWrapper = document.getElementById('screen-third-wrapper');
      this.$thirdScreenWrapperHeight = this.$thirdScreenWrapper.offsetHeight;

      this.$forthScreen = document.getElementById('screen-forth');
      this.$forthScreenHeight = this.$forthScreen.offsetHeight;
      this.$forthScreenWrapper = document.getElementById('screen-forth-wrapper');
      this.$forthScreenWrapperHeight = this.$forthScreenWrapper.offsetHeight;

      this.$fifthScreen = document.getElementById('screen-fifth');
      this.$fifthScreenHeight = this.$fifthScreen.offsetHeight;
      this.$fifthScreenWrapper = document.getElementById('screen-fifth-wrapper');
      this.$fifthScreenWrapperHeight = this.$fifthScreenWrapper.offsetHeight;
    },
    checkPersonSize() {
      this.percentOfFirstScreen = this.st / (this.$firstScreenHeight / 100);

      const personScaleStart = FIRST_SCREEN_PERSON_MAX_SCALE;
      const personScaleEnd = 1;
      this.personScale = this.setValue(personScaleEnd, personScaleStart, this.percentOfFirstScreen, false);

      if (this.percentOfFirstScreenWrapperOut <= 100) {
        this.personPositionTop = -(this.setValue(0, FIRST_SCREEN_PERSON_TOP_POS, this.percentOfFirstScreen, false));
      }
      
      // var totalRight = 245;
      // var maxRight = 245;
      // var totalElRight = totalRight / 100 * this.percent;
      this.personPositionRight = -(this.setValue(0, 54, this.percentOfFirstScreen, false));

      if (this.percentOfFirstScreen >= 100) {
        if (this.st > this.tempHeightFirst + 200 || this.st < this.tempHeightFirst - 200) {
          this.tempHeightFirst = this.st;
        }
      }

      /* Second Screen */
      this.percentOfFirstScreenWrapperOut = this.st / ((this.$firstScreenWrapperHeight - this.windowHeight) / 100);
      const scrollPos = this.st - this.$firstScreenWrapperHeight - this.$secondScreenHeight;
      this.percentSecondScreen = scrollPos / ((this.$secondScreenWrapperHeight - (3 * this.$secondScreenHeight)) / 100);

      if (this.secondScreenWay === 'in' || this.percentOfFirstScreenWrapperOut > 100) {
        /* Person position start */
        const project1PersonTopMax = this.windowHeight - ORIGINAL_PERSON_HEAD_HEIGHT;
        const project1PersonTopStart = 0;
        this.personPositionTop = this.setValue(project1PersonTopMax, project1PersonTopStart, this.percentSecondScreen, true);
        /* Person position end */
        
        /* Project first image animation start */
        const project1LeftMax = 0;
        const project1LeftStart = (this.windowWidth - this.$contentWidth) / 2;
        this.projectFirstLeft = this.setValue(project1LeftMax, project1LeftStart, this.percentSecondScreen, false);

        const project1TopMax = 0;
        const project1TopStart = 190;
        this.projectFirstTop = this.setValue(project1TopMax, project1TopStart, this.percentSecondScreen, false);

        const project1WidthMax = this.windowWidth;
        const project1WidthStart = PROJECT_FIRST_INITIAL_WIDTH;
        const projectFirstWidth = this.setValue(project1WidthMax, project1WidthStart, this.percentSecondScreen, true);
        this.projectFirstWidth = projectFirstWidth - this.projectFirstLeft;

        if (this.projectFirstWidth >= project1WidthMax) {
          this.projectFirstHeight = '100vh';
        } else {
          this.projectFirstHeight = `${this.projectFirstWidth / 1.704}px`;
        }
        
        /*After fullscreen*/
        var scrollPosAfter = scrollPos - (4 * this.$secondScreenHeight);
        var percentSecondScreenAfter = scrollPosAfter / ((this.$secondScreenWrapperHeight - (6 * this.$secondScreenHeight))  / 100);

        if (percentSecondScreenAfter >= 0) {
          const project1LeftMaxAfter = (this.windowWidth - this.$contentWidth) / 2;
          const project1LeftStartAfter = 0;
          this.projectFirstLeft = this.setValue(project1LeftMaxAfter, project1LeftStartAfter, percentSecondScreenAfter, true);

          const project1TopMaxAfter = 84;
          const project1TopStartAfter = 0;
          this.projectFirstTop = this.setValue(project1TopMaxAfter, project1TopStartAfter, percentSecondScreenAfter, true);
          
          const project1WidthMaxAfter = this.$contentWidth;
          const project1WidthStartAfter = project1WidthMax;
          const projectFirstWidthAfter = this.setValue(project1WidthMaxAfter, project1WidthStartAfter, percentSecondScreenAfter, false);
          this.projectFirstWidth = projectFirstWidthAfter;
          // this.projectFirstHeight = 'auto';
          this.isAfterSecondScreen = true;
        } else {
          this.isAfterSecondScreen = false;
        }
        /* Project first image animation end */


        /*Third screen start*/ 
          const scrollPosThirdScreen = this.st - this.$firstScreenWrapperHeight - this.$secondScreenWrapperHeight;
          this.percentThirdScreen = scrollPosThirdScreen / (this.$thirdScreenWrapperHeight / 100);

          if (this.percentThirdScreen > 0) {
            this.isSecondScreenFixed = true;
            if (this.percentThirdScreen >= 90) {
              this.isSecondScreenFixed = false;
            }
          }
        /*Third screen end*/ 

        
        /* Fifth Screen */
        this.percentOfBeforeFifthScreenWrapperOut = this.st / ((this.$fifthScreenWrapper.offsetTop - this.windowHeight) / 100);
        const scrollPosFifth = this.st - this.$fifthScreenWrapper.offsetTop - this.$fifthScreenHeight;
        this.percentFifthScreen = scrollPosFifth / ((this.$fifthScreenWrapperHeight - (3 * this.$fifthScreenHeight)) / 100);

        if (this.percentOfBeforeFifthScreenWrapperOut > 85 && this.percentOfBeforeFifthScreenWrapperOut <= 101) {
          /* Person position start */
          const total = 101 - 85;
          let current = total - (101 - this.percentOfBeforeFifthScreenWrapperOut) >= total ? total : total- (101 - this.percentOfBeforeFifthScreenWrapperOut);
          if (current <= 0) {
            current = 0
          }
          const fifthPersonPercent = current / (total / 100);
          const project5PersonTopMax = 0;
          const project5PersonTopStart = this.windowHeight - ORIGINAL_PERSON_HEAD_HEIGHT;
          this.personPositionTop = this.setValue(project5PersonTopMax, project5PersonTopStart, fifthPersonPercent, false);
          /* Person position end */
        }

        if (this.percentOfBeforeFifthScreenWrapperOut > 101) {
          /* Person position start */
          const total = 135 - 115;
          let current = total - (135 - this.percentOfBeforeFifthScreenWrapperOut) >= total ? total : total- (135 - this.percentOfBeforeFifthScreenWrapperOut);
          if (current <= 0) {
            current = 0
          }
          const fifthPersonPercent = current / (total / 100);
          const project5PersonTopMax = this.windowHeight - ORIGINAL_PERSON_HEAD_HEIGHT;
          const project5PersonTopStart = 0;
          this.personPositionTop = this.setValue(project5PersonTopMax, project5PersonTopStart, fifthPersonPercent, true);
          /* Person position end */
        }

        if (this.percentOfBeforeFifthScreenWrapperOut > 100) {
          /* Project fifth image animation start */
          const project5LeftMax = 0;
          const project5LeftStart = (this.windowWidth - this.$contentWidth) / 2;
          this.projectFifthLeft = this.setValue(project5LeftMax, project5LeftStart, this.percentFifthScreen, false);

          const project5TopMax = 0;
          const project5TopStart = 190;
          this.projectFifthTop = this.setValue(project5TopMax, project5TopStart, this.percentFifthScreen, false);

          const project5WidthMax = this.windowWidth;
          const project5WidthStart = PROJECT_FIRST_INITIAL_WIDTH;
          const projectFifthWidth = this.setValue(project5WidthMax, project5WidthStart, this.percentFifthScreen, true);
          this.projectFifthWidth = projectFifthWidth - this.projectFifthLeft;

          if (this.projectFifthWidth >= project1WidthMax) {
            this.projectFifthHeight = '100vh';
          } else {
            this.projectFifthHeight = `${this.projectFifthWidth / 1.704}px`;
          }
          
          /*After fullscreen*/
          var scrollPosFifthAfter = scrollPosFifth - (4 * this.$fifthScreenHeight);
          var percentFifthScreenAfter = scrollPosFifthAfter / ((this.$fifthScreenWrapperHeight - (6 * this.$fifthScreenHeight))  / 100);

          if (percentFifthScreenAfter >= 0) {
            const project5LeftMaxAfter = (this.windowWidth - this.$contentWidth) / 2;
            const project5LeftStartAfter = 0;
            this.projectFifthLeft = this.setValue(project5LeftMaxAfter, project5LeftStartAfter, percentFifthScreenAfter, true);

            const project5TopMaxAfter = 84;
            const project5TopStartAfter = 0;
            this.projectFifthTop = this.setValue(project5TopMaxAfter, project5TopStartAfter, percentFifthScreenAfter, true);
            
            const project5WidthMaxAfter = this.$contentWidth;
            const project5WidthStartAfter = project5WidthMax;
            const projectFifthWidthAfter = this.setValue(project5WidthMaxAfter, project5WidthStartAfter, percentFifthScreenAfter, false);
            this.projectFifthWidth = projectFifthWidthAfter;

            this.isAfterFifthScreen = true;
          } else {
            this.isAfterFifthScreen = false;
          }
        }

        const clientHeight = document.body.clientHeight || document.body.scrollHeight;

        if (this.st >= clientHeight - (2 * this.windowHeight)) {
          console.log('this.st: ', this.st)
          console.log('clientHeight: ', clientHeight)
          const footerScrollPos = this.st - clientHeight + (2 * this.windowHeight);
          console.log('footerScrollPos: ', footerScrollPos)
          const footerScrollPosPercent = footerScrollPos / ((clientHeight - this.st) / 100);
          console.log('footerScrollPosPercent: ', footerScrollPosPercent)
          this.personScale = this.setValue(personScaleStart, personScaleEnd, footerScrollPosPercent, true);
          this.personPositionTop = -(this.setValue(FIRST_SCREEN_PERSON_TOP_POS, project5PersonTopMax, footerScrollPosPercent, true));
          this.personPositionRight = -(this.setValue(54, 0, footerScrollPosPercent, true));
        }
        /* Project fifth image animation end */

        /*Forth screen start*/ 
        
          // const scrollPosForthScreen = this.st - this.$firstScreenWrapperHeight - this.$secondScreenWrapperHeight - this.$thirdScreenWrapperHeight + this.windowHeight;
          // const percentForthScreen = scrollPosForthScreen / ((this.$forthScreenWrapperHeight) / 100);

          // if (percentForthScreen >= -1 && percentForthScreen <= 100) {
          //   this.isForthScreenActive = true;

          //   document.getElementById('screen-forth').addEventListener("scroll", e => this.setScrollWatcher(e, (direction, el) => {
          //     console.log('callback')
          //     if (this.isForthScreenActive) {
          //       if (direction === 'down' && (el.offsetHeight + el.scrollTop >= el.scrollHeight)) {
          //         this.isForthScreenActive = false;
          //         this.isFifthScreenActive = true;
          //         document.getElementById('screen-forth').removeEventListener("scroll", e => this.setScrollWatcher(e));
          //         this.lastScrollProject = 0;
          //       }
          //       if (direction === 'up' && el.scrollTop <= 0) {
          //         this.isForthScreenActive = false;
          //         this.isThirdScreenActive = true;
          //         document.getElementById('screen-forth').removeEventListener("scroll", e => this.setScrollWatcher(e));
          //         this.lastScrollProject = 0;
          //       }
          //     }
          //   }));
          // }
        /*Forth screen end*/ 
      }
    },

    onWaypointSecondScreen(point) {
      this.secondScreenWay = point.going;
    },

    onWaypointThirdScreen({going, direction}) {
      
      if (going === 'in' && direction === 'top') {
        // var st = window.pageYOffset || document.documentElement.scrollTop;
        // window.scrollTo(0, st);
        // VueScrollTo.scrollTo(document.querySelector('.screen--third-wrapper'), 800);
        this.scrolledToThirdScreen = true;
      }

      if (going === 'out' && direction === 'bottom') {
        this.scrolledToThirdScreen = false;
      }
    },

    onWaypointForthScreen({going, direction}) {
      // var st = window.pageYOffset || document.documentElement.scrollTop;
      // window.scrollTo(0, st);
      if (going === 'in' && direction === 'top') {
        // VueScrollTo.scrollTo(document.querySelector('.screen--forth-wrapper'), 800);
        this.scrolledToForthScreen = true;
      }
      if (going === 'out' && direction === 'bottom') {
        this.scrolledToForthScreen = false;
      }
    },
    onWaypointFifthScreen() {

    },
    setValue(max, start, percent, isIncrease = true, isConsole) {
      if (isConsole) {
        console.log('max: ', max)
        console.log('start: ', start)
        console.log('percent: ', percent)
      }

      let value, add, total;

      if (isIncrease) {
        total = max - start;
        add = total / 100 * percent;
        if (isConsole) {
          console.log('add: ', add)
        }
        if (isConsole) {
          console.log('start + add: ', start + add)
        }
        value = start + add <= start ? start : start + add;
        if (isConsole) {
          console.log('value: ', value)
        }
        if (value >= max) {
          value = max;
        }
        if (isConsole) {
          console.log('value 2: ', value)
        }
      } else {
        total = start - max;
        add = total / 100 * percent;
        if (isConsole) {
          console.log('add: ', add)
        }
        if (isConsole) {
          console.log('start - add: ', start - add)
        }
        value = start - add <= max ? max : start - add;
        if (isConsole) {
          console.log('value: ', value)
        }
        if (value >= start) {
          value = start;
        }
        if (isConsole) {
          console.log('value 2: ', value)
        }
      }
      if (isConsole) {
        console.log('value 3: ', value)
      }
      return value;
    },
    setVhProperty() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
  },
  mounted() {
    this.setVhProperty();
    this.mountScreenSizes();

    window.addEventListener('resize', () => {
      this.setVhProperty();
      this.mountScreenSizes();
      this.checkPersonSize();
      this.checkArrowColor();
    });

    var lastScrollTop = 0;
    this.tempHeightFirst = this.$firstScreenHeight;

    this.checkPersonSize();
    window.addEventListener("scroll", () => {
      this.mountScreenSizes();
      this.st = window.pageYOffset || document.documentElement.scrollTop;
      if (this.st > lastScrollTop){
        this.scrollDirection = 'down';
      } else {
        this.scrollDirection = 'up';
      }
      lastScrollTop = this.st <= 0 ? 0 : this.st; // For Mobile or negative scrolling

      this.checkPersonSize();
      this.checkArrowColor();
    }, false);
  }
}
</script>

<style lang="scss" src="@/styles/base.scss"></style>
<style lang="scss">
@import "@/styles/colors.scss";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  position: relative;
  // min-width: 1440px;
  min-width: 1284px;
  opacity: 0;

  &.is-visible {
    opacity: 1;
    transition: opacity ease .3s;
  }

  &.has-active-project {
    overflow: hidden;
    max-height: 100vh;
  }
}

.content {
  position: relative;
  max-width: 1284px;
  width: 100%;
  margin: 0 auto;
}

.full-block {
  width: 100%;
  margin: 0 auto;
  max-width: 1440px;
}

.screen--first {
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  flex-direction: column;
  .content {
    height: 0;
  }
}

.screen {
  width: 100%;
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
  display: flex;
  justify-content: center;
}

.screen--first-wrapper {
  background-color: $red-color;
  position: relative;
  height: 500vh;
}

.screen--first {
  position: sticky;
  top: 0;
  // background-image: url('./assets/images/person.svg'), url('./assets/images/road1.svg');
  // background-position: top right;
  // background-position: 500px -130px, top right;
  // background-position: right -245px top -130px, top right;
  //background-size: 80% auto, auto;
  // background-repeat: no-repeat;
  height: 100vh;
  background-image: url('./assets/images/road1.svg');
  background-position: top right;
  background-repeat: no-repeat;
  background-size: auto 100%;

  &:after {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url('./assets/images/road1.svg');
    background-position: top 1px right;
    background-repeat: no-repeat;
    background-size: auto 100%;
  }
}

.screen--second-wrapper {
  height: 700vh;
  position: relative;
  background-color: #FDEDEC;

  .h1 {
    z-index: 9 !important;
  }
}

.screen--second {
  position: sticky;
  top: 0;
  height: 100vh;
  // background-image: url('./assets/images/road2.svg');
  background-position: top right;
  background-repeat: no-repeat;
  background-image: url('./assets/images/road2.svg');
  background-size: auto 100%;
}

.screen--6 {
  // position: sticky;
  // top: 0;
  // height: 100vh;
  // // background-image: url('./assets/images/road2.svg');
  // background-position: top right 7px;
  // background-repeat: no-repeat;
  // background-image: url('./assets/images/road-blue-2.svg');
}

.description {
  width: 41.5%;
  min-width: 600px;
  padding-top: 185px;
  box-sizing: border-box;
  .h1 {
    margin-bottom: 24px;
  }

  .text {
    margin: 0;
  }
}

.header {
  max-width: 846px;
  
  .h1 {
    margin-bottom: -40px;
    position: relative;
    z-index: 2;
    padding-top: 50px;
  }

  .project-1-img-wrapper {
    position: absolute;
    width: 852px;
    left: 0;
    top: 0;
    z-index: 3;
    background: #cfc6c7;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    transition: all ease .3s;
    min-width: 852px;
    min-height: 500px;
    // transform: translate3d(80px, 192px, 0);
  }

  img {
    width: 100%;
  }
}

.arrow {
  position: fixed;
  color: $white-color;
  transition: color ease .3s;
  left: calc(50% - 25px);
  bottom: 65px;

  svg {
    transition: color ease .3s;
  }
}

.arrow--red {
  color: $red-color;
}

.project-1-wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}



.screen--third-wrapper {
  position: relative;
  background: #fbcd22;
  padding-bottom: 92px;

  &.is-active {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    left: 0;
    z-index: 99;

    .screen--third {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow-y: scroll;
    }
  }
  // opacity: 0;
  // min-height: 500px;

  // &.is-fixed {
  //   position: fixed;
  //   width: 100%;
  //   bottom: 0;
  //   z-index: 2;
  // }
}

.screen--third {
  // position: fixed;
  // bottom: 0;
  // opacity: 1;
  // transform-origin: 50% 100%;
  // transform: scaleY(0) translateZ(0);
  // transition: all .7s cubic-bezier(.23,1,.32,1);
  // background: #fbcd22;

  // &.is-active {
  //   opacity: 1;
  //   transform: scaleY(1) translateZ(0);
  //   transition: all .9s cubic-bezier(.23,1,.32,1);
  // }
}

.screen--forth-wrapper {
  // padding: 92px 0;
  background: #283160;

  img {
    max-width: 1440px;
    margin: 0 auto;
  }

  &.is-active {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    left: 0;
    z-index: 99;

    .screen--forth {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow-y: scroll;
    }
  }
  // padding: 0 78px;
  // padding-bottom: 300px;

  // position: fixed;
  // top: 0;
  // opacity: 0;
  // transform-origin: 50% 100%;
  // transform: scaleY(0) translateZ(0);
  // transition: all .7s cubic-bezier(.23,1,.32,1);
  // width: 100%;

  // &:before {
  //   position: absolute;
  //   content: '';
  //   left: 0;
  //   right: 0;
  //   top: 0;
  //   bottom: 0;
  //   background: #283160;
  //   transform-origin: 50% 100%;
  //   transform: scaleY(0) translateZ(0);
  //   transition: all .7s cubic-bezier(.23,1,.32,1);
  // }

  // &.is-active {
  //   position: fixed;
  //   opacity: 1;
  //   transform: scaleY(1) translateZ(0);
  //   transition: all .9s cubic-bezier(.23,1,.32,1);
  //   z-index: 2;

  //   &:before {
  //     transform: scaleY(1) translateZ(0);
  //     transition: all .9s cubic-bezier(.23,1,.32,1);
  //   }
  // }
}

.screen--fifth {
  position: sticky;
  top: 0;
  height: 100vh;
  background-image: url('./assets/images/road-blue-1.svg');
  background-position: top right;
  background-repeat: no-repeat;
  background-size: auto 100%;

  // position: absolute;
  // top: 0;
  // left: 0;
  // width: 100%;
  // height: 100%;
  // overflow-y: scroll;
  // transform-origin: 50% 100%;
  // transform: scaleY(0) translateZ(0);
  // transition: all .7s cubic-bezier(.23,1,.32,1);
}

.project-5-wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.project-5-img-wrapper {
  position: absolute;
  width: 852px;
  left: 0;
  top: 0;
  z-index: 3;
  background: #38424c;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  transition: all ease .3s;
  min-width: 852px;
  min-height: 500px;
  // transform: translate3d(80px, 192px, 0);

  img {
    width: 100%;
  }
}

.screen--first-wrapper,
.screen--6-wrapper,
.screen--7-wrapper {
  img {
    max-width: 100%;
    margin: 0 auto;
  }
  // padding: 92px 0;
  // background: green;
  
  // transform-origin: 50% 100%;
  // transform: scaleY(0) translateZ(0);
  // transition: all .7s cubic-bezier(.23,1,.32,1);  
}

.screen--7-wrapper {
  background: #B8B3E9;
}

.screen--8-wrapper {
  background: #D471D6;
}

.screen--fifth-wrapper {
  height: 700vh;
  position: relative;
  background: linear-gradient(0deg, rgba(91, 192, 190, 0.1), rgba(91, 192, 190, 0.1)), #FFFFFF;

  .h1 {
    max-width: 589px;
    z-index: 9;
  }
}

.screen--6-wrapper {
  background: #5BC0BE;
}

.screen-wrapper {
  img {
    max-width: 100%;
  }
}

// .screen-wrapper {
//   width: 100%;
//   height: 100%;
//   // pointer-events: none;
  
  
//   &:before {
//     position: absolute;
//     content: '';
//     left: 0;
//     right: 0;
//     top: 0;
//     bottom: 0;
//     transform-origin: 50% 100%;
//     transform: scaleY(0) translateZ(0);
//     transition: all .7s cubic-bezier(.23,1,.32,1);
//   }
  
//   &.is-active {
//     opacity: 1;
//     // pointer-events: auto;
//     // transform: scaleY(1) translateZ(0);
    

//     &:before {
//       transform: scaleY(1) translateZ(0);
//       transition: all .9s cubic-bezier(.23,1,.32,1);
//     }

//     & > div {
//       transform: scaleY(1) translateZ(0);
//       transition: all .9s cubic-bezier(.23,1,.32,1);
//       transition-delay: .5s;
//     }
//   }

//   &.is-next,
//   &.is-prev {
//     opacity: 0;
//     position: fixed;
//     left: 0;
//     right: 0;
//     top: 0;
//     bottom: 0;
//     z-index: -1;
//   }
// }

.blocks {
  display: flex;
  // flex-direction: column;
  max-width: 1284px;
  padding-top: 12px;
  margin: 0 auto;
}

.blocks-item {
  &:not(:last-child) {
    margin-right: 12px;
    // margin-right: 0.934%;
  }

  img {
    max-width: 100%;
  }
}

.blocks-item--first {
  width: 646px;
  // width: 49.5%;
  // flex-basis: 49.5%;
}
.blocks-item--second {
  width: 420px;
  // width: 32.7%;
  // flex-basis: 32.7%;
}
.blocks-item--third {
  width: 204px;
  // width: 15.88%;
  // flex-basis: 15.88%;
}
.block-row-item {
  margin-bottom: 12px;
  // margin-bottom: 0.934%;
}
.block-row-item-flex {
  display: flex;

  .block-row-item {
    &:not(:last-child) {
      margin-right: 12px;
    }
  }
}

.block-row-title {
  margin-top: 14px;
  margin-bottom: 24px;
  font-family: Gotham Pro;
  font-style: normal;
  font-weight: 900;
  font-size: 62px;
  line-height: 108%;
  color: #EA2B1F;
}

.block-row-desc {
  p {
    font-family: Gotham Pro;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 108%;
    letter-spacing: -0.02em;
    color: #EA2B1F;

    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }
}
.fullpage-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}


.persons-wrapper {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  max-width: none;
  display: flex;
}

.persons-content {
  max-width: 1440px;
  min-width: 1284px;
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  overflow: visible;
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

// .persons {
//   position: relative;
//   max-width: 1440px;
//   min-width: 720px;
//   width: 100%;
//   margin: 0 auto;
// }

.person-item {
  display: inline-block;

  img {
    max-height: 100%;
    transform-origin: top center;
    // position: relative;
    // left: -43px;
    position: absolute;
    right: 44px;
  }
}

.person-item-img-wrap {
  width: auto;
  height: 774px;
  max-height: 100%;
}

.person {
  position: absolute;
  top: 0;
  right: 0;
  // background-image: url('./assets/images/person.svg'), url('./assets/images/road1.svg');
  // background-position: top right;
  // background-position: 500px -130px, top right;
  background-position: right -245px top -130px;
  //background-size: 80% auto, auto;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  // transition: opacity ease .3s;
}

.person--first {
  background-image: url('./assets/images/person.svg');
}

.person--second {
  background-image: url('./assets/images/person-2.svg');
}

.person--third {
  background-image: url('./assets/images/person-3.svg');
  background-size: auto;
  background-position: right 0px bottom -31px;
}

.project-civilwar {
  .blocks-item--first {
    width: 960px;
  }
  .blocks-item--second {
    width: 312px;
  }
  .block-row-title {
    color: #fff;
  }

  .block-row-desc {
    p {
      color: #fff;
    }
  }
}
.project-real {
  .blocks-item--first {
    width: 850px;
  }
  .blocks-item--second {
    width: 420px;
  }
  .block-row-title {
    color: #fff;
  }

  .block-row-desc {
    p {
      color: #fff;
    }
  }
}

.screen--9 {
  // position: sticky;
  top: 0;
  // background-image: url('./assets/images/person.svg'), url('./assets/images/road1.svg');
  // background-position: top right;
  // background-position: 500px -130px, top right;
  // background-position: right -245px top -130px, top right;
  //background-size: 80% auto, auto;
  // background-repeat: no-repeat;
  height: 100vh;
  background-image: url('./assets/images/road1.svg');
  background-position: top right;
  background-repeat: no-repeat;
  background-size: auto 100%;
  padding: 0 78px;

  .description {
    position: relative;
    z-index: 10;
  }
}

.screen--9-wrapper {
  background-color: $red-color;
  position: relative;

  .text {
    margin-top: 70px;
  }

  .text-item {
    margin-bottom: 44px;
  }

  .text-label {
    margin-bottom: 4px;
    font-family: 'Montserrat Alternates';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 112%;
    letter-spacing: -0.02em;
  }
  .text-value {
      font-family: 'Montserrat Alternates';
      font-style: normal;
      font-weight: 900;
      font-size: 28px;
      line-height: 112%;
  }

  a {
    color: #fff;
    text-decoration: none;
    &:hover,
    &:focus,
    &:active {
      color: #fff;
      text-decoration: none;
    }
  }
}
</style>
