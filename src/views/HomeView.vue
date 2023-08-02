<template>
  <section class="home">

    <div class="personal_info">
      <p>Персональные данные</p>
      <div
          class="input_box d-flex column items-start justify-start full-width cursor-pointer"
          @click="$refs.getPersonalInfoName.focus()"
      >
        <label>Имя</label>
        <input
            v-model="$store.getters.getPersonalInfo.name"
            ref="getPersonalInfoName"
            class="full-width cursor-pointer"
            @input="event => changePersonal(event, 'name')"
        >
      </div>
      <div
          class="input_box d-flex column items-start justify-start full-width cursor-pointer"
          @click="$refs.getPersonalInfoAge.focus()"
      >
        <label>Возраст</label>
        <input
            v-model="$store.getters.getPersonalInfo.age"
            ref="getPersonalInfoAge"
            class="full-width cursor-pointer"
            @input="event => changePersonal(event, 'age')"
        >
      </div>
    </div>

    <div class="childrens">
      <div class="head d-flex items-center justify-between">
        <p>Дети (макс. 5)</p>
        <button
            v-if="$store.getters.getAllChildrens.length < 5"
            class="d-flex items-center cursor-pointer"
            @click="addChildren"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.13332 10.8556C4.50125 10.8555 3.98887 11.3679 3.98887 12C3.98887 12.6321 4.50126 13.1445 5.13332 13.1445L10.8554 13.1445L10.8554 18.8668C10.8554 19.4989 11.3678 20.0113 11.9999 20.0113C12.632 20.0113 13.1444 19.4989 13.1444 18.8668L13.1443 13.1445L18.8667 13.1445C19.4988 13.1445 20.0112 12.6321 20.0112 12C20.0112 11.3679 19.4988 10.8556 18.8667 10.8556L13.1443 10.8556L13.1443 5.13338C13.1443 4.50132 12.632 3.98893 11.9999 3.98893C11.3678 3.98893 10.8554 4.50131 10.8554 5.13338L10.8554 10.8556L5.13332 10.8556Z" fill="#01A7FD"/>
          </svg>
          Добавить ребенка
        </button>
      </div>

      <div class="children_list">
        <div
            v-for="(item, index) in $store.getters.getAllChildrens"
            :key="index"
            class="children_list-item d-flex items-center justify-between"
        >
          <div
              class="input_box d-flex column items-start justify-start full-width cursor-pointer"
          >
            <label>Имя</label>
            <input
                v-model="item.name"
                class="full-width cursor-pointer"
                @input="event => changeChildren(event, 'name', index)"
            >
          </div>
          <div
              class="input_box d-flex column items-start justify-start full-width cursor-pointer"
          >
            <label>Возраст</label>
            <input
                v-model="item.age"
                class="full-width cursor-pointer"
                @input="event => changeChildren(event, 'age', index)"
            >
          </div>
          <button
              class="cursor-pointer"
              @click="removeChildren(index)"
          >
            Удалить
          </button>
        </div>
      </div>

      <div
          class="save_btn cursor-pointer"
          @click="$store.dispatch('saveInfo')"
      >
        Сохранить
      </div>
    </div>

  </section>
</template>

<script>


export default {
  name: 'HomeView',
  methods: {
    changePersonal(event, field){
      this.$store.dispatch('updatePersonalInfo', {field: field, value: event.target.value})
    },
    changeChildren(event, field, index){
      this.$store.dispatch('updateChildren', {field: field, value: event.target.value, index: index})
    },
    addChildren(){
      this.$store.dispatch('addChildren', {
        name: '',
        age: '',
      })
    },
    removeChildren(index){
      this.$store.dispatch('removeChildren', index)
    }
  }
}
</script>
