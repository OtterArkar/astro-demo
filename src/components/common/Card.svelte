<script lang='ts'>
	import { i18n } from '@store/locale';
	import { items } from '@store/cart';

    import {cart} from '@store/nano-cart'
    import type { FoodTypes } from '@components/types';
    export let food:FoodTypes;
    let addToCart = ()=>{
        let tmp = cart.get()
        tmp.push(food._id)
        cart.set(tmp)
        items.update(prev=>{
            prev.push(food._id)
            return prev
        })
    } 
</script>
<div class='p-4 flex flex-col border rounded-md cursor-pointer'>
        <div class='w-full aspect-video bg-gray-200'>
        </div>
        <div class=' flex justify-between my-4'>
        <span class='text-md  rounded-full'>{food.price}$</span>
        {#if food.tags}
            <div class="flex items-center gap-1">
                {#each food.tags as tag}
                    <span class='text-sm bg-teal-200 px-2 py-1 rounded-full'>
                        {tag}
                    </span>
                {/each}
            </div>
        {/if}
        </div>
        <p class="text-xl mb-2">{food.title}</p>
        <p class="text-md text-gray-500">{food.summary}</p>
        <div class="flex gap-4 items-center">
            <a href={`/food/${$i18n}/${food.slug.current}`} class='mt-4 hover:border-l-4 hover:bg-gray-100 transition-all  border-cyan-500 max-w-max px-8 ml-auto py-1 rounded-full  text-gray-800'>Read More</a>
            <button on:click={addToCart} class='mt-4 hover:border-l-4 transition-all  border-lime-500 max-w-max px-8 py-1 rounded-full  bg-blue-500 text-white'>BUY</button>
        </div>
</div>