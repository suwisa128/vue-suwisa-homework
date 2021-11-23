<template>
  <div id="app">
    <div class="grid justify-items-center gap-4">
      <div>
        <h1><b>Portfolio</b></h1>
      </div>
      <div><img alt="Portfolio" :src="img" class="h-60" /></div>
      <button class="bg-yellow-800 text-white p-2">
        <h2 class="px-56" style="30px">ABOUT ME</h2>
      </button>
      <div>
        <p>
          Name : {{ Name }} <br />
          Education : {{ Study }} <br />
          University : {{ Uni }} <br />
          Programming Language Skills : {{ PLS }} <br />
          Program Skills : {{ PL }}
        </p>
      </div>
    </div>
    <router-link
      :to="{
        name: 'contact',
      }"
    >
      <button class="bg-blue-700 text-white p-2 mt-5">Contact</button>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Name: 'นางสาวสุวิสา มะลิต้น (เอิร์น)',
      PLS: 'JavaScript,  HTML',
      PL: 'Microsoft Office, Tool(Git), Docker, Database & SQL',
      Study: 'ชั้นปีที่ 4 คณะวิทยาการสารสนเทศ สาขาเทคโนโลยีสารสนเทศ',
      Uni: 'มหาวิทยาลัยบูรพา',
      img: 'https://i.ibb.co/VmPLDR0/earn.jpg',
    };
  },
};
</script>
