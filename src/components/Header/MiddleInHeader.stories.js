import MiddleInHeader from './MiddleInHeader.vue';

export default {
  title: 'Header',
};

export const middleInHeader = () => ({
  components: { MiddleInHeader },
  template: '<MiddleInHeader />',
});
