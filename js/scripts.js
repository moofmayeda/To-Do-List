var loadTasks = function(list) {
  $("tbody").empty();
  list.tasks.forEach(function(task) {
    if (task.completed) {
    $("tbody").append("<tr><td>"+task.task+"</td><td><input type='checkbox' id='task-status' checked></td></tr>");
    } else {
    $("tbody").append("<tr><td>"+task.task+"</td><td><input type='checkbox' id='task-status'></td></tr>");
    }
  });
};
$(document).ready(function() {
  var currentMaster = {};
  $("#category-add").click(function(event) {
    var newCategory = $("input#new-category").val();
    var master = {category: newCategory, tasks: []};
    currentMaster = master;
    $("#selected-category").text(newCategory);
    loadTasks(currentMaster);
    $("#list-of-categories").append("<li>" +newCategory +"</li>");
    $("li").last().click(function(event) {
      $("#selected-category").text(newCategory);
      currentMaster = master;
      loadTasks(currentMaster);
    });
    $("input#new-category").val("");
  });
  $("form").submit(function(event) {
    event.preventDefault();
    var newTask = $("input#new-task").val();
    var taskItem = {task: newTask, completed: false};
    currentMaster.tasks.push(taskItem);
    $("tbody").append("<tr><td>"+taskItem.task+"</td><td><input type='checkbox' id='task-status'></td></tr>");
    $("input#new-task").val("");
    $("input#task-status").last().click(function() {
      if (!taskItem.completed) {
        $(this).parent().css("text-decoration","line-through");
        taskItem.completed = true;
      } else {
        taskItem.completed = false;
      };
    });
  });
});
