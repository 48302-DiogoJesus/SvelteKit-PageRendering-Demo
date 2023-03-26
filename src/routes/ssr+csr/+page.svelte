<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<h1>SSR + CSR</h1>
<h2 id="load-time">TIME: {data.time}</h2>
