<script setup lang="ts">
import { Home, Search } from 'lucide-vue-next'
</script>

<template>
  <ResizablePanel
    id="sidebar-1"
    :default-size="25"
    collapsible
    :collapsed-size="5"
    :min-size="18"
    :max-size="60"
    class="flex flex-col gap-2"
  >
    <div class="bg-backgroundBase rounded-xs px-3 py-2 flex flex-col items-start">
      <SidebarMenuItem
        to="dashboard"
        text="Accueil"
      >
        <template #icon>
          <Home />
        </template>
      </SidebarMenuItem>
      <SidebarMenuItem
        to="search"
        text="Rechercher"
      >
        <template #icon>
          <Search />
        </template>
      </SidebarMenuItem>
    </div>
    <div class="bg-backgroundBase rounded-xs px-4 py-2 flex-grow">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos tenetur veritatis! Optio pariatur maxime, ipsam explicabo neque quam quod esse, aut eum quis sint labore? Illo nesciunt exercitationem harum.</p>
    </div>
  </ResizablePanel>
</template>
