<template>
  <div id="app">
    <div class="grid justify-items-center gap-4">
      <div><h1>CONTACT</h1></div>

      <div>
        <p>
          Tel: {{ Tel }} <br />
          Email: {{ Email }} <br />
          Address: {{ Address }} <br />
        </p>
      </div>
    </div>
    <router-link
      :to="{
        name: 'profile',
      }"
    >
      <button class="bg-blue-700 text-white p-2 mt-5">Back</button>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Tel: '065-3379653',
      Email: '61160128@go.buu.ac.th',
      Address:
        '169 Longhan Bangsaen Road, Saensuk Subdistrict, Mueang District,Chonburi Province 20131',
    };
  },
};
</script>
