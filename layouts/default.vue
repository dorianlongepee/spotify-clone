<script setup lang="ts">
import { ResizablePanel, ResizablePanelGroup } from '~/components/ui/resizable'
import ResizableHandle from '~/components/ui/resizable/ResizableHandle.vue'
</script>

<template>
  <div class="flex flex-col h-lvh p-2">
    <ResizablePanelGroup
      id="dashboard-1"
      direction="horizontal"
      class="grow"
    >
      <SidebarBar />
      <ResizableHandle
        id="handle-sidebar-main-1"
        class="mx-1 bg-muted transition opacity-0 hover:opacity-100 active:opacity-100 active:bg-muted-foreground"
      />
      <ResizablePanel
        id="main-1"
        :default-size="75"
      >
        <slot />
      </ResizablePanel>
    </ResizablePanelGroup>
    <footer class="bg-background">
      <div class="flex">
        <span class="w-14 h-14" />
      </div>
    </footer>
  </div>
</template>
