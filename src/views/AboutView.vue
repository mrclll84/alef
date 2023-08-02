<template>
  <section class="preview">
    <div class="personal d-flex column items-start justify-start">
      <p>Персональные данные</p>
      <p>{{$store.getters.getInfo.personalInfo.name || 'Без имени'}}, {{$store.getters.getInfo.personalInfo.age || 'Без возраста'}} лет</p>
    </div>
    <div class="childrens">
      <p>Дети</p>
      <div class="children_list d-flex items-start justify-start column">
        <div
            v-for="(item, index) in $store.getters.getInfo.childrens"
            :key="index"
            class="child"
        >
          {{item.name || 'Без имени'}}, {{item.age || 'Без возраста'}} лет
        </div>
      </div>
    </div>
  </section>
</template>
