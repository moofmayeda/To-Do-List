$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var newTask = $("input#new-task").val();
    var taskItem = {task: newTask, completed: false};
    $("tbody").append("<tr><td>"+taskItem.task+"</td><td><input type='checkbox' id='task-status'></td></tr>");
    $("input#new-task").val("");
    $("input#task-status").last().click(function() {
      taskItem.completed = true;
    });
  });
});
