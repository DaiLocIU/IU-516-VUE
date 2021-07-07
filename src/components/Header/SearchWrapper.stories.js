import SearchWrapper from './SearchWrapper.vue';

export default {
  title: 'Header',
};

export const searchWrapper = () => ({
  components: { SearchWrapper },
  template: '<SearchWrapper />',
});
