<template>
  <nav class="navbar">
    <input type="checkbox" class="navbar-toggle" id="navbar-toggle">
    <label for="navbar-toggle" class="navbar-toggle-label">
      <span class="hamburger"></span>
    </label>
    <div class="menu d-flex">
      <div class="menu-list1 mr-4">男款</div>
      <div class="menu-list1 mr-4">女款</div>
      <div class="menu-list2 mr-4">最新消息</div>
      <div class="menu-list2 mr-4">客製商品</div>
      <div class="menu-list2 mr-4">聯絡我們</div>
    </div>
    <div class="logo"></div>
    <div class="function d-flex">
      <div class="function-icon">
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <div class="function-icon ml-4">
        <i class="fa-solid fa-cart-shopping"></i>
      </div>
      <div class="function-icon ml-4">
        <input type="checkbox" class='dark-mode' id='dark-mode'>
        <label for="dark-mode" class='dark-mode-label dark-icon'>
        </label>
      </div>
    </div>
  </nav>
</template>

