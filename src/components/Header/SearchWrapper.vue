<template>
  <div class="searchWrapper" @mouseleave="handleMouseLeave">
    <form id="formSearch" action="#" novalidate>
      <fieldset>
        <legend style="display: none">
          FormSearch
        </legend>
        <div class="top_search_cont">
          <div class="top_search_text">
            <input
              ref="inputSearch"
              @focus="isFocusInput = true"
              v-model="searchValue" />
            <i class="iu-search"></i>
          </div>
        </div>
        <div v-if="isFocusInput" class="search_cont">
          <dl class="recent">
            <dt>Recent search terms</dt>
            <dd v-if="!isHasRecentSearch">No recent search terms</dd>
            <dd v-else></dd>
          </dl>
          <div class="search-all">
            <p>Delete all</p>
            <p>Close</p>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchWrapper',
  data() {
    return {
      isFocusInput: false,
      searchValue: '',
    };
  },

  computed: {
    isHasRecentSearch() {
      return false;
    },
  },

  mounted() {
    window.searchWrapper = this;
  },
  methods: {
    handleMouseLeave() {
      this.isFocusInput = false;
      this.$refs.inputSearch.blur();
    },
  },
  watch: {
    isFocusInput(newVal) {
      console.log('isFocusInputChange', newVal);
    },
  },
};
</script>
// TODO: - Code lai searchWrapper
<style lang="scss" scoped>
.searchWrapper {
  width: 260px;
  display: flex;
  align-items: center;
  #formSearch {
    position: relative;
  }
  fieldset {
    border: none;
  }

  .top_search_cont {
    .top_search_text {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 0.75em 15px;
      border-radius: 0.33em;
      border: 1px solid var(--border-color-lighter) !important;
    }
    input {
      width: calc(100% - 25px);
      border: none !important;
      outline: none;
    }

    i {
      cursor: pointer;
    }
  }
  .search_cont {
    position: absolute;
    width: 100%;
    padding-inline: 15px;
    border-radius: 0.33em;
    font-size: 12px;
    border: 1px solid var(--border-color-lighter);

    .recent {
      padding-block: 0.75em;

      dt {
        font-size: 13px;
        font-weight: bold;
      }
    }

    .search-all {
      width: calc(100%);
      margin-left: -15px;
      padding-block: 5px;
      padding-inline: 15px;
      display: flex;
      justify-content: space-between;
      background-color: #f5f5f5;
    }
  }
}
</style>
