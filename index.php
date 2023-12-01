<!DOCTYPE html>
<html lang="en">

<head>
  <!-- meta tags -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  <!-- font-awesome CSS -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer">
  <!-- link to Font-Family and CSS Files -->
  <script src="https://unpkg.com/axios@1.1.2/dist/axios.min.js"></script>
  <link rel="stylesheet" href="css/style.css" />
  <!-- Document Title -->
  <title>Todo List</title>
</head>

<body>

  <div id="app" class="container">
    <header class="text-center p-3">
      <i class="fa-solid fa-volume-high position-absolute top-0 end-0 m-4 text-light" v-if="active === true"></i>
      <i class="fa-solid fa-volume-xmark position-absolute top-0 end-0 m-4 text-light" v-else></i>
      <img src="img/Logo.png" alt="logo" id="logo">
      <div class="d-flex justify-content-center align-items-center">
        <img src="img/present.png" alt="present" class="present">
        <h1 class="text-danger">Christmas Presents</h1>
        <img src="img/present.png" alt="present" class="present">
      </div>
      <div class="my-3">
        <input type="text" class="form-control w-50 d-inline-block mx-3" v-model="todoText" :keyup.enter="addTask">
        <button class="btn btn-danger" @click="addTask">
          Add task
        </button>
        <select name="fatto" class="btn btn-dark m-3 p-2" v-model="filterValue">
          <option value="">All</option>
          <option value="1">Done</option>
          <option value="2">To do</option>
        </select>
      </div>
    </header>
    <main>
      <ul class="list-group">
        <li class="list-group-item list-group-item-action d-flex justify-content-between opacity-75" v-for="(element, index) in list" :key="index">
          <span :class="{'done': element.done}" @click="todoInvert(element.index)">
            {{element.text}}
          </span>
          <i class="fa-solid fa-gifts fa-bounce" @click="removeTask(element.index)"></i>
        </li>
      </ul>
      <div>
        <h3>Non hai task</h3>
      </div>
    </main>
  </div>


  <!-- My JS -->
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script src="js/script.js" type="module"></script>
</body>

</html>