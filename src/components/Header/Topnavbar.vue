<template>
  <div class="topnavbar">
    <div class="topnavbar-wrapper">
      <div class="left-topnavbar">
        <ul>
          <li>
            <a href="/">Favorites</a>
          </li>
          <li>
            <a href="/">FAQ</a>
          </li>
          <li>
            <a href="/">1:1 inquiry</a>
          </li>
        </ul>
      </div>
      <div class="right-topnavbar">
        <ul class="flag-nation">
          <li>
            <button>
              <img :src="require('../../assets/img/ico_kr.png')" alt="">
            </button>
          </li>
          <li>
            <button>
              <img :src="require('../../assets/img/ico_us.png')" alt="">
            </button>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/">Login</a>
          </li>
          <li>
            <a href="/">Register</a>
          </li>
          <li>
            <a href="/">My Page</a>
          </li>
          <li>
            <a href="/">View Order</a></li>
          <li>
            <a href="" style="display: flex; align-items: center">
              Shopping cart
              <span class="numberProductInCart">0</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Topnavbar',
};
</script>

<style lang="scss" scoped>
.topnavbar {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--border-color-base);
}
.topnavbar-wrapper {
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  padding-inline: 10px;
  padding-block: 15px;
  font-size: 12px;
  color: var(----text-black-primary);

  ul {
    display: flex;
    list-style: none;
    align-items: center;
    li {
      cursor: pointer;
    }
    li + li {
      margin-left: 1.6em;
    }
  }
  .left-topnavbar {
    display: flex;
    align-items: center;
  }
  .right-topnavbar {
    display: flex;
    align-items: center;
    li {
      span.numberProductInCart {
        margin-left: 0.8em;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 1.8em;
        width: 1.8em;
        background-color: var(--text-black-secondary);
        border-radius: 50%;
        color: var(--color-white);
      }
    }
    ul.flag-nation {
      margin-right: 15px;
      li img {
        cursor: pointer;
        vertical-align: middle;
      }
      li + li {
        margin-left: 5px;
      }
    }
  }
}
</style>
