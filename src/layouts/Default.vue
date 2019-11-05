<template>
  <div id="app">

    <!-- <header class="header">
      <div class="header__left">
        <Logo v-if="showLogo" />
      </div>

      <div class="header__right">
        <ToggleTheme />
      </div>
    </header> -->

    <!-- <svg id="fader"></svg> -->

    <nav class="nav" id="hide-nav">
      <div class="nav-container">
        <div class="links">
          <a class="sibling-fade" href="index.html">🏠 Work</a>
          <a class="sibling-fade" href="writing.html">✏️ Writing</a>
          <a class="sibling-fade" href="about.html">🥝 About</a>
        </div>
      </div>
    </nav>

    <main class="main">
      <slot/>
    </main>

    <footer class="footer">
      <span class="footer__copyright">Copyright © {{ new Date().getFullYear() }}. </span>
      <span class="footer__links">Powered by <a href="//www.suits.at"> SUITS </a></span>
    </footer>

  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ToggleTheme from '~/components/ToggleTheme.vue'

export default {
  props: {
    showLogo: { default: true }
  },
  components: {
    Logo,
    ToggleTheme
  }
}

</script>

<script>

</script>

<style lang="scss">


#fader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999999;
  pointer-events: none;
  background: #FFF1E8;
  animation-duration: 500ms;
  animation-timing-function: ease-in-out;
}

@keyframes fade-out {
  from {
    opacity: 1
  }

  to {
    opacity: 0
  }
}

@keyframes fade-in {
  from {
    opacity: 0
  }

  to {
    opacity: 1
  }
}

#fader.fade-out {
  opacity: 0;
  animation-name: fade-out;
}

#fader.fade-in {
  opacity: 1;
  animation-name: fade-in;
}

.nav {
  z-index    : 3;
  position   : fixed;
  top        : 0;
  left       : 0;
  width      : 100%;
  background-color : var(--nav-color);
  transition: all 0.3s;
  /* opacity:.3; */

  font-size  : .85rem;

  animation: fadein 1s;
    -moz-animation: fadein 1s; /* Firefox */
    -webkit-animation: fadein 1s; /* Safari and Chrome */
    -o-animation: fadein 1s; /* Opera */

    display: flex;
  justify-content: center;
  align-items: center;


}

.fade-in{
  animation: fadein 1s;
    -moz-animation: fadein 1s; /* Firefox */
    -webkit-animation: fadein 1s; /* Safari and Chrome */
    -o-animation: fadein 1s; /* Opera */
}




.nav-container {

  max-width       : 1000px;
  margin          : auto;
  -ms-flex-pack   : justify;
  -ms-flex-wrap   : wrap;
  flex-wrap       : wrap;
  justify-content : space-between;
  align-items: center;
}

.nav .nav-container {
  display        : flex;
  height         : 55px;
  align-items    : center;
  -ms-flex-align : center;

}

.links > a {
  padding        : 15px;
  color          : var(--nav-links) !important;
  /* text-transform : uppercase; */
  font-size      : 18px;
  font-weight    : 500 !important;
  transition     : 0.3s;
}

.links a:hover {
  color           : var(--red-text);
  border-radius   : 3px;
  text-decoration : none;
  transition      : 0.3s;
}

.links a:visited {
  color: var(--nav-links);
}

.links a:visited:hover {
  color: var(--red-text);
}


.header {
  background-color:#FFF1E8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: var(--header-height);
  padding: 0 calc(var(--space) / 2);
  top:0;
  z-index: 10;

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1300px) {
    //Make header sticky for large screens
    position: sticky;
    width: 100%;
  }
}

.main {
  margin: 0 auto;
  padding: 8.5vw 15px 0;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: .8em;

  > span {
    margin: 0 .35em;
  }

  a {
    color: currentColor;
  }
}
</style>
