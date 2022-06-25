<template>
<div>
  <div class="LogOut">
    <router-link to="/admin" custom v-slot="{ href, navigate }">
      <a :href="href" @click="logOut(navigate, $event)">Log out</a>
    </router-link>
  </div>
  <div>
    <textarea v-model="articleHeader" placeholder="Article header"></textarea>
    <textarea v-model="articleType" placeholder="Article type"></textarea>
    <textarea v-model="articleImageUrl" placeholder="Article image url"></textarea>
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
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import {AdminApi} from "@/api/api";

export default {
  name: 'AdminPanelPage',
  components: {
  },


  data() {
    return {
      editor: DecoupledEditor,
      articleHeader: '',
      articleImageUrl: '',
      articleType: '',
      editorData: '<p>Rich-text editor content.</p>',
      editorConfig: {
      }
    };
  },
  methods: {
    logOut() {
      localStorage.removeItem('x-access-token');
      this.$router.push('/admin/panel');
    },
    onSubmit() {
      AdminApi.saveArticle({
            imageUrl: this.articleImageUrl,
            header: this.articleHeader,
            article: this.editorData,
            type: this.articleType
          }
      )
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