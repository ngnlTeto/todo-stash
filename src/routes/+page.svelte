<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button';
	import { Layers, Menu } from 'lucide-svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import LightSwitch from '$lib/components/light-switch.svelte';
	import TagMenu from './tag-menu.svelte';
</script>

<div class="mx-4 flex h-14 flex-row content-center items-center">
	<Sheet.Root>
		<Sheet.Trigger
			class="{buttonVariants({ variant: 'outline', size: 'icon' })}"
		>
			<Menu />
		</Sheet.Trigger>

		<Sheet.Content side="left">
			<Sheet.Header>
				<Sheet.Title>Tag Menu</Sheet.Title>
				<Sheet.Description>Manage your tags and filter options</Sheet.Description>
			</Sheet.Header>
			<TagMenu />
		</Sheet.Content>
	</Sheet.Root>

	<div class="w-4"></div>
	<h1 class="text-xl">TODO-Stash</h1>
	<div class="grow"></div>
	<LightSwitch />
</div>
<Separator />
<h1>Example Text</h1>

<Sheet.Root>
	<Sheet.Trigger
		class="{buttonVariants({ variant: 'outline', size: 'icon' })} absolute bottom-4	right-4"
	>
		<Layers />
	</Sheet.Trigger>

	<Sheet.Content side="right">
		<Sheet.Header>
			<Sheet.Title>Stash</Sheet.Title>
			<Sheet.Description>
				This action cannot be undone. This will permanently delete your account and remove your data
				from our servers.
			</Sheet.Description>
		</Sheet.Header>
	</Sheet.Content>
</Sheet.Root>
