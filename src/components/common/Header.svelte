<script>
    import {onMount} from 'svelte'
	import { i18n } from '@store/locale.ts';
	import { items } from '@store/cart.ts';
    import {cart} from '@store/nano-cart'
    import locales from '@lib/localeConfig';
    let handleChange = (e)=>{
        i18n.set(e.target.value)
        let pathArray = window.location.pathname.split('/');
        if(pathArray.length > 2){
            pathArray[2] = e.target.value 
            window.location.replace(pathArray.join('/'))
        }
    }
    let isHome;
    onMount(() => {
        isHome = window.location.pathname !== '/'
    })

</script>
<header class="w-full h-[5em] flex items-center p-4 border-b">
    <nav class="w-full flex items-center gap-4">
        <a href="/" class="font-bold text-3xl text-blue-500 relative">Snacks.com <span class='absolute text-sm text-cyan-500'>{$i18n}</span></a>
        <ul class=" ml-auto items-center gap-8 md:flex hidden">
            <li>
                <span class="font-bold text-xl">
                    Nano Cart : {$cart.length}
                </span>
            </li>
            <li>
                <span class="font-bold text-xl">
                    Svelte Cart : {$items.length}
                </span>
            </li>
        </ul>
        {#if isHome}
            <select name="locale" id="locale" class="text-sm" on:change={handleChange}>
                {#each locales as locale}
                     <option value={locale.key} selected={$i18n === locale.key}>{locale.language}</option>
                {/each}
            </select>
       {/if}
    </nav>
</header>