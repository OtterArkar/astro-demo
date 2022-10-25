<script lang="ts">
    
    import imageUrlBuilder from '@sanity/image-url'
    import client from '@lib/sanityClient';
    const builder = imageUrlBuilder(client)
    function urlFor(source) {
        return builder.image(source)
    }
    export let image:string;
    export let width:number;
    export let alt:string;
</script>
<img src={urlFor(image).width(width).url()} alt={alt} >