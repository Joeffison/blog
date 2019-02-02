<template>
  <div id="view-library">
    <div class="app-content-container row">
      <div class="iframe-container-lg col-sm-auto">
        <iframe class="ext-amazon-kindle-sm"
          src="https://rcm-eu.amazon-adsystem.com/e/cm?o=3&p=12&l=ur1&category=kindle_unlimited&banner=1S39A7NDSRNW46QXZD82&f=ifr&linkID=dd4784d83e251bfb4f08ed824e09973a&t=joeffison-21&tracking_id=joeffison-21"
          width="300"
          height="250"
          scrolling="no"
          border="0"
          marginwidth="0"
          style="border:none;"
          frameborder="0">
        </iframe>

        <iframe class="ext-amazon-kindle-lg"
          src="https://rcm-eu.amazon-adsystem.com/e/cm?o=3&p=14&l=ur1&category=kindle_unlimited&banner=03SS280TE737DAW16A82&f=ifr&linkID=a0a03d61b18f744044150527e2b19946&t=joeffison-21&tracking_id=joeffison-21"
          width="160"
          height="600"
          scrolling="no"
          border="0"
          marginwidth="0"
          style="border:none;"
          frameborder="0">
        </iframe>
      </div>
      <article class="col-sm">
        <h1>{{ $t('Books in my life') }}</h1>
        <section id="books-in-my-life">
          <p class="app-dropcap dropcap-boxed">
            More than just a register of the human knowledge. Books are a refuge for me.
            They offer me shelter, a place to hide.
            There is always something to read or to write.
            Fernando Pessoa wrote more than verses.
            When writing is not therapy enough, his poems save me from insanity.
            Oscar Wilde give my life the fun, the wit, the lightness I need.
            Clarice Lispector gave me in "Das vantagens de ser bobo"
            ("The advantages of being silly")
            everything I need to keep living as my heart takes me.
          </p>
        </section>
        <ul id="book-list">
          <li class="row row-eq-height book-referrer"
              v-for="book in myBooks" :key="book.intro">
            <div class="col-md-auto float-left">
              <iframe
                :src="book.urlEBook"
                style="width:120px;height:240px;"
                marginwidth="0"
                marginheight="0"
                scrolling="no"
                frameborder="0">
              </iframe>
            </div>
            <p class="col-md float-right align-self-center" v-html="book.intro"></p>
          </li>
        </ul>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Library',
  data () {
    return {
      myp: 'this is my string\nwith new lines\n:)',
      myBooks: [
        {
          intro: 'The Picture of Dorian Gray is my all time favorite. <br />' +
            'The best of all, Amazon offers it 100% free in ebook edition <br />' +
            '(you can even choose to read it on your browser or in the free kindle app).',
          urlEBook: '//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=DE&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=joeffison-21&marketplace=amazon&region=DE&placement=B004WLDGVS&asins=B004WLDGVS&linkId=0e61c740ba5b1f76930adc9b6839a75e&show_border=false&link_opens_in_new_window=true&price_color=333333&title_color=0066C0&bg_color=FFFFFF'
        },
        {
          intro: 'Alberto Caeiro is my favorite of Fernando Pessoa\'s heteronyms. <br />' +
            'Several publishers collects his poems to publish as books and "The Keeper of Sheep"' +
            'collection - which is his most impressive work - is almost always included. ' +
            'My favorite poem - "My gaze is clear as a sunflower" - talks very intimately to me. ' +
            'If you read this poem in particular, you will understand how I take life. <br />' +
            'On this offer, you can download my favorite poem for free. <br />',
          urlEBook: '//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=DE&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=joeffison-21&marketplace=amazon&region=DE&placement=B00AFYTAF2&asins=B00AFYTAF2&linkId=a79a3ab2cb1c512a288a190a619be485&show_border=false&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.ext-amazon-kindle-sm {
  display: initial;
}

.ext-amazon-kindle-lg {
  display: none;
}

@media only screen and (min-width: 576px) {
  .ext-amazon-kindle-sm {
    display: none;
  }
  .ext-amazon-kindle-lg {
    display: initial;
  }
}

#book-list {
  margin-top: 1rem !important;
  text-align: justify;

  p.multi-line {
    white-space: pre;
  }

  .book-referrer {
    margin-bottom: 1em;
  }
}
</style>
