<template>
  <div class="row">
      <div class="col-md-12">
          <p class="profile-name">
              Your name is {{profile.name}}
          </p>
      </div>
  </div>
</template>

<style scoped>
  .profile-name {
    color:red;
  }
</style>

<script>
export default {
  data() {
    return {
      profileLoading: false,
    };
  },

  computed: {
    profile() {
      return this.$store.getters["PROFILE/profile"];
    },
  },
  methods: {
    emitToParent() {
      this.$emit("emitToParentComponent", this.profile.id);
    },

    fetchProfile() {
    
      this.profileLoading = true;
      
      this.$store.dispatch("PROFILE/fetchProfile")
      
        .then((response)=> {
        
            //do something with response
            
            console.log(response.data);
            
        })
        .catch((error) => {
        
          // this catch block can be removed as it will never be called because error will be handled by axios interceptor
          
          return error;
        })
        .finally(() => {
        
          // This finally block will be called always so, you can do something regardless of the outcome of the response here:
          
          this.profileLoading = false;
          
        });
    },
  },
};
</script>
