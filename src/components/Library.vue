<template>
  <div>
    <h3>{{ $t('These are my favorite books:') }}</h3>
    <ul>
      <li class="row justify-content-md-center">
        <div class="">
          <iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=DE&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=joeffison-21&marketplace=amazon&region=DE&placement=B004WLDGVS&asins=B004WLDGVS&linkId=0e61c740ba5b1f76930adc9b6839a75e&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066C0&bg_color=FFFFFF">
          </iframe>
        </div>
        <p class="col-md-4">
          The Picture of Dorian Gray is my all time favorite. <br>
          The best of all, Amazon offers it <strong>100% free</strong> in ebook edition
          (you can even read in any smartphone).
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Library'
}
</script>

<style scoped>

</style>
