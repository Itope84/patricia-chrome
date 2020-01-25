<template>
  <div class="page-bg">
    <div class="overlay"></div>

    <div v-if="requestName" class="flex flex-col">
      <h1 class="welcome-message text-center mb-20">
        Hey, Chief! <br />
        What shall I call you?
      </h1>

      <input type="text" class="name-field py-2" autofocus v-model="username" />

      <div class="text-center mt-6">
        <button
          @click="saveName"
          class="bg-transparent hover:bg-gray-400 text-white font-semibold hover:text-gray-700 py-1 px-4 border border-white hover:border-transparent rounded"
        >
          Save
        </button>
      </div>
    </div>

    <div v-else>
      <h1 class="welcome-message" style="margin-bottom: 10px">
        Hello, Temitope
      </h1>

      <h1 class="motivation-message" style="margin-top: 0;">
        Remember to <b>do the most</b> today!
      </h1>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: null,
      requestName: false
    };
  },
  mounted() {
    // check if the user name is set
    let name = localStorage.getItem('username');
    if (!name) {
      this.requestName = true;
    }

    this.username = name;
  },
  methods: {
    saveName() {
      if (!this.username) return;
      localStorage.setItem('username', this.username);
      this.requestName = false;
      //   show toaster
      this.$toaster.success(
        `Got it ${this.username}! Your name has been saved successfully`,
        { duration: 20000 }
      );
    }
  }
};
</script>
