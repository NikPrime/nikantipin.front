<template>
<div>
  <div class="LogOut">
    <router-link to="/admin" custom v-slot="{ href, navigate }">
      <a :href="href" @click="logOut(navigate, $event)">Log out</a>
    </router-link>
  </div>
  <ckeditor class="ckeditor" :editor="editor" v-model="editorData" :config="editorConfig" @ready="onReady"></ckeditor>
  <button
      class="submit-button"
      @click="onSubmit">
    Submit
  </button>

</div>
</template>

<script>
import { mapActions } from 'vuex';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

export default {
  name: 'AdminPanelPage',
  components: {
  },


  data() {
    return {
      editor: DecoupledEditor,
      editorData: '<p>Rich-text editor content.</p>',
      editorConfig: {
      }
    };
  },
  methods: {
    ...mapActions(['LogOut']),
    logOut(navigate, event) {
      this.LogOut();
      navigate(event);
    },
    onSubmit() {
      alert(JSON.stringify(this.editorData));
      console.log();
    },
    onReady(editor) {
      // Insert the toolbar before the editable area.
      editor.ui
          .getEditableElement()
          .parentElement.insertBefore(
          editor.ui.view.toolbar.element,
          editor.ui.getEditableElement()
      );
    },
  }
}
</script>

<style scoped>
a {
  color: #ffffff;
  text-decoration: none;
}
.ckeditor {
  background-color: #FFFFFF;
  min-height: 500px;
}
</style>