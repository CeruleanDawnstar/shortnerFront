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
    <tr>
      <td>{{row.idUser}}</td>
      <td>{{row.pseudo}}</td>
      <td>{{row.password}}</td>
    </tr>
  </tbody>
</table>
<input class="form-control" type="text" placeholder="Default input" aria-label="default input example">
</div>

</template>


<script>
export default {
  name: 'ListAllUsers',

};
</script>

