<script setup lang="ts">
import type { PropType } from 'vue';
import { useRouter } from 'vue-router';

import { type Data } from '@/types'
import { formatNumber, percent } from '@/utils';

const props = defineProps({
  item: {
    type: Object as PropType<Data>,
    required: true
  }
})

const router = useRouter()

const handleCountryClick = (item: Data) => {
  router.push({
    name: 'country',
    params: {
      id: item.country
    },
    query: {
      token: item?.moreData?.split('/')[5]
    }
  })
}

</script>

<template >
  <div class="mx-10 md:mx-120 lg:mx-60 my-5 bg-white border-2 rounded-md border-secondary">
    <div class="flex flex-col p-5 text-center ">
      <a @click="handleCountryClick(props?.item)"
        class="text-center font-bold text-xl hover:underline decoration-solid">{{
          props?.item?.country }}</a>
      <dl class="grid grid-cols-1 grid-rows-3 py-4 md:grid-cols-3 md:grid-rows-1">
        <div class="flex flex-col">
          <dd>Total de casos</dd>
          <dt class="text-primary mb-2 text-3xl font-bold">{{ formatNumber(Number(props?.item?.infected)) }}</dt>
        </div>
        <div class="flex flex-col">
          <dd>Mortes</dd>
          <dt class="text-primary mb-2 text-3xl font-bold">{{ formatNumber(Number(props?.item?.deceased)) }}</dt>
        </div>
        <div class="flex flex-col">
          <dd>Fatalidade</dd>
          <dt class="text-primary mb-2 text-3xl font-bold">
            {{ percent(Number(props?.item?.deceased), Number(props?.item?.infected)) }}
          </dt>
        </div>
      </dl>
    </div>
  </div>
</template>