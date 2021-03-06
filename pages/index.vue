<template>
  <div class="container mx-auto pb-12 main">
    <div class="flex flex-col items-center">
      <Logo />
      <h1 class="title">{{ $t('blog-title') }}</h1>
      <p class="subtitle">{{ $t('blog-description') }}</p>
      <div class="links mt-8">
        <nuxt-link to="/blog" class="btn btn-teal">
          {{ $t('blog-description-link') }}
        </nuxt-link>
      </div>
    </div>

    <div class="container pb-12 mx-auto mt-10 flex flex-col last-articles-wrapper">
      <p class="text-xl mb-1">{{ $t('blog-last-articles') }}:</p>
      <LastArticles :data="posts" />
    </div>
    <div class="container">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis reiciendis ipsum voluptatibus ratione hic quis deserunt aspernatur dicta amet doloribus? Provident aliquam repellat, amet fugit voluptate aperiam molestiae possimus est vero illum saepe animi soluta tenetur, dolores commodi at ab. Incidunt consectetur non facere voluptatum perferendis odio nostrum nisi sit ipsam illo reprehenderit, sequi iusto quos maxime id praesentium tempora debitis excepturi laborum rem deserunt ipsa ad? Nulla pariatur eius impedit doloribus quibusdam consequatur modi libero soluta repellat, porro nemo repellendus provident deleniti vero. Debitis dolorum at molestiae ex labore tempora aperiam in saepe eligendi! Facere tempora eos amet ab cumque minima architecto explicabo similique molestias, consequuntur veritatis ut sed placeat doloremque ea nisi omnis odit. Consectetur soluta tempora iure saepe, commodi id quasi ex molestiae. Numquam doloribus tenetur a labore placeat consequatur error, aliquam voluptate atque nulla! Quibusdam expedita beatae inventore dolore, quisquam quo numquam? Suscipit unde non ad expedita optio omnis libero commodi quo facere, alias reiciendis? Odit quibusdam ducimus quidem provident animi exercitationem repellat ex, reprehenderit reiciendis neque odio veniam non voluptate nostrum quos laborum. Maiores dicta aperiam, placeat impedit quidem temporibus quod perspiciatis. Pariatur quos dolorum quo, a eius dolores maiores, placeat modi quod sequi, harum fuga possimus blanditiis libero non nostrum. Vitae blanditiis provident voluptatibus quam voluptatum iure molestias esse modi consequuntur aliquid perspiciatis deserunt in cumque harum, nemo ullam. Alias, molestias! Rem dolor accusamus quod sit, quis facilis est consequatur minus aspernatur ad commodi, corporis vitae voluptas ipsam dolorum beatae minima molestias velit autem consectetur voluptatum ducimus. Praesentium, dolor doloremque dicta enim quos, quis corrupti aliquid odio aspernatur quam incidunt illum quidem eos rem optio expedita sed at doloribus eligendi fugiat necessitatibus officia reiciendis! Assumenda explicabo deleniti rem aspernatur? Vero provident recusandae voluptates, autem debitis sit velit eos deserunt rem? Debitis quae maiores possimus cupiditate sequi quasi totam ipsa aperiam quo facilis, error amet voluptatum mollitia, ex iusto nostrum aliquid illum fugiat delectus praesentium similique dolorum. Dolorum veritatis ratione voluptates fuga, repellat repellendus natus, facilis quaerat alias blanditiis cum delectus cumque aut placeat, tempora inventore hic odio. Necessitatibus optio repellat nulla consectetur reiciendis neque eum mollitia vel repudiandae odio nisi perspiciatis explicabo dolores nihil recusandae doloribus magni, iste quis itaque! Aspernatur quibusdam ab consequuntur aliquam minima accusantium minus quae iste ex, quam laboriosam eveniet ullam est. Nihil doloremque aliquam quisquam qui, est voluptatem vel autem provident quasi, perspiciatis dolorum nostrum enim doloribus consequuntur inventore dolore nam odit! Doloribus assumenda eaque dolorem tenetur? Voluptas voluptatibus vitae, temporibus debitis aut distinctio ab veniam sunt incidunt dolorum cumque consequatur libero eveniet molestiae quia tempora neque optio et assumenda. Iste voluptatibus voluptatum aperiam consectetur, ullam nihil corporis sapiente, aspernatur dolores nemo, beatae magnam. In ipsam, aut fugit dolorem eveniet dignissimos quod voluptas maiores quia quisquam placeat. Nesciunt, illum amet veritatis explicabo molestias rem quia recusandae tempore pariatur minima, magnam eaque et soluta enim. Iure assumenda quasi sit culpa illo optio, minus aperiam eius aliquid odit maiores numquam molestias sint explicabo eaque fugiat nam adipisci harum id incidunt sunt iusto dicta error repellat! Ipsam dolore asperiores vel architecto a reprehenderit aut ratione. Dicta facere quaerat, exercitationem dolore quia similique velit natus provident, beatae aspernatur ab odit qui fugiat maiores consequuntur magni? Quo, quisquam ducimus nemo, non sit ratione laudantium odio debitis minima sint alias nostrum placeat, dolor totam fugiat harum vitae sapiente magnam repellendus soluta. Inventore iure quibusdam, odit ipsam tempore ullam optio et eveniet perferendis minus neque voluptatem ex vitae eligendi pariatur omnis adipisci facilis obcaecati magni commodi veritatis minima earum? Deleniti amet expedita necessitatibus porro delectus iste perspiciatis quos quam quod tempora earum unde repudiandae corporis cupiditate atque recusandae accusantium saepe fugiat, accusamus ullam nesciunt harum. Natus, inventore nam neque assumenda quas quidem sequi esse molestias, pariatur debitis suscipit aspernatur laboriosam ab? Autem aspernatur necessitatibus, fuga nihil dicta itaque perferendis consequuntur veritatis ad officiis cum aliquam quidem optio in eligendi molestiae. Fuga vitae voluptatem iste ipsa, quod eligendi, animi quisquam exercitationem accusantium explicabo harum natus ea eum alias incidunt quidem, suscipit voluptatibus odit architecto impedit. Ullam consequuntur iste, ad ea inventore cupiditate. Inventore voluptatibus voluptate et voluptates? Velit, aspernatur perspiciatis necessitatibus aut tempora laboriosam accusamus deleniti illo ipsa eos molestias numquam ratione dolorum quibusdam nulla dolore ab explicabo, nisi facere deserunt ipsum neque reiciendis fugit. Natus asperiores eius illo omnis sint soluta repudiandae eum, rerum ducimus voluptates doloremque provident minus ullam atque quaerat eaque incidunt repellat pariatur sequi voluptas quidem. Suscipit, aliquam. Optio perferendis nostrum deleniti blanditiis temporibus non cupiditate, natus consequuntur. Quibusdam fugit quia, molestiae nesciunt, quam dolorum earum illum delectus tempora ad doloribus recusandae deleniti? Unde quas corporis iusto ratione quasi atque aut omnis ipsum quam aliquam rem quae neque culpa obcaecati quidem soluta, fugiat error rerum dolorem minus explicabo autem! Quidem labore cumque saepe culpa sit ullam distinctio consequuntur molestiae voluptas nemo magnam aut eum obcaecati minus quam ea nostrum exercitationem, a tenetur rerum in repudiandae nam dolor! Porro consequatur ipsam fugiat quibusdam iste odio? Iste repellat earum ex. Inventore error quia alias! Repellat ad id rerum optio molestias perspiciatis, quibusdam at aliquid sed odio quae assumenda repudiandae alias ipsa dicta dolores. Laudantium rem saepe, possimus esse alias soluta ex eaque? Laudantium quae esse minima quos aperiam, quibusdam beatae eligendi reprehenderit sit eaque, ea et? Quo consequuntur dolor facilis! Quia recusandae reprehenderit quod inventore excepturi? Officiis quae vel laboriosam libero ad nihil mollitia placeat, dolorum ducimus excepturi totam magnam ex fuga, provident, odit rem culpa fugit temporibus sit recusandae non. Assumenda, numquam laborum perferendis soluta ipsum quos harum beatae, quod necessitatibus quis illo. Non cupiditate dicta ullam iusto? Ea, mollitia a odio enim sunt qui. Aspernatur accusantium iste recusandae, ullam dolores sed tenetur maxime ducimus nulla aliquam libero natus, dolor odit aliquid. Doloremque asperiores quis consequatur blanditiis sunt laboriosam iste aliquam perspiciatis dolorem autem dicta ea error esse voluptas, numquam aperiam labore quod repellat nostrum minus rem magni voluptatum tempora? Sunt consequuntur dolor soluta tenetur repellat, necessitatibus ipsa minus ratione cupiditate corporis omnis cumque laboriosam, maiores deleniti similique? Aspernatur dolores praesentium quos earum illum?
    </div>
  </div>
</template>

<script>
import LastArticles from '@/components/LastArticles'

export default {
  components: {
    LastArticles,
  },
  async asyncData(context) {
    const { $content, app } = context
    const defaultLocale = app.i18n.locale
    const posts = await $content(`${defaultLocale}/blog`).fetch()

    return {
      posts: posts.map((post) => ({
        ...post,
        path: post.path.replace(`/${defaultLocale}`, ''),
      })),
    }
  },
  data() {
    return {
      posts: [],
    }
  },
}
</script>

<style lang="postcss">
.btn {
  @apply font-bold py-2 px-4 rounded;
}

.title {
  @apply font-light block;

  font-size: 100px;
  color: var(--color);
  letter-spacing: 1px;
}

.subtitle {
  color: var(--color);
}

.links {
  /* padding-top: 15px; */

  & .btn {
    color: var(--color-white);
  }
}

.main {
  z-index: 20;
}

.btn-teal {
  background-color: var(--color-primary);
  color: var(--color);

  &:hover {
    opacity: 0.6;
  }
}


</style>
