<template>
    
<div>
<table id="userTable">
  <thead>
    <tr>
      <th>idUser</th>
      <th>pseudo</th>
      <th>password</th>
    </tr>
  </thead>
  <tbody>
    <!-- <tr v-for="row in rows"> -->
    <!-- <tr>
      <td>{{row.idUser}}</td>
      <td>{{row.pseudo}}</td>
      <td>{{row.password}}</td>
    </tr> -->
    <tr>
      <td>test1</td>
      <td>test2</td>
      <td>test3</td>
    </tr>
  </tbody>
</table>
<div>
<input class="form-control" type="text" placeholder="Default input" aria-label="default input example">
</div>

</div>

</template>


<script>
export default {
  name: 'ListAllUsers',

};
</script>

