<template>
  <h3>{{ Heading }}</h3>
  <table class="table table-striped table-bordered table-hover">
    <thead>
      <tr class="table-primary">
        <th scope="col" v-for="(item, i) in headRow" :key="i">{{ item }}</th>
      </tr>
    </thead>
    <tbody>
      <tr class="pointer" v-for="(item, index) in contents" :key="item.id" @click="onRowClick(item)">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ item.firstname }}</td>
        <td>{{ item.lastname }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.frequency ? item.frequency : item.education }}</td>
        <td>{{ item.amount ? item.amount : item.team }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>export default {
  name: "Table",
  props: {
    contents: Array,
    headRow: Array,
    Heading: String
  },
  methods: {
    onRowClick(item) {
      this.$emit('on-row-click', item)
    }
  },
  emits: ['on-row-click']
}</script>
<style>
.pointer {
  cursor: pointer;
}
</style>